package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.CollegeUser;
import com.xdbigdata.jwtService.domain.Instructor;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.domain.Grants;
import com.xdbigdata.subsidize_zjut.domain.GrantsAttachment;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.GrantsCommonMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsCommonService;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.util.GrantsFileUtil;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/5/24.
 */
@Service
@Transactional
public class GrantsCommonServiceImpl implements IGrantsCommonService {

    @Autowired
    private GrantsCommonMapper grantsCommonMapper;

    @Autowired
    private IGrantsJWTService grantsJWTService;

    /**
     * 上传模版/资料
     *
     * @param file
     * @return
     */
    @Override
    public String uploadFile(MultipartFile file) throws Exception {
        SessionUserDto user = (SessionUserDto) UserUtil.getLoginUser();
        String fileName = file.getOriginalFilename();
        if (!GrantsFileUtil.validateFileType(fileName)) {
            throw new PersonalException("请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】等规定格式文件");
        }
        //依据角色获取上传路径
        String severPath = GrantsFileUtil.uploadFile(file, user.getUserType(), user.getUserName());
        String grantsUuid = grantsCommonMapper.findCurrentGrants();
        if (grantsUuid != null && (user.getUserType() == EIntegerConstant.CLASS_USER_TYPE.getValue() ||
                user.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue())) {
            List<String> applyDataUrls = grantsCommonMapper.listApplyMaterialNames(grantsUuid, user.getUserName());
            if (applyDataUrls.contains(file.getName())) {
                throw new Exception(EStringConstant.EXCEPTION_FILE_EXIST.getValue());
            }
            GrantsAttachment attachment = new GrantsAttachment();
            attachment.setOperateId(user.getUserName());
            attachment.setGrantsUuid(grantsUuid);
            attachment.setUrl(severPath);
            attachment.setFileName(severPath.substring(severPath.lastIndexOf(File.separator) + 1));
            grantsCommonMapper.saveGrantsAttachment(attachment);
        }
        return severPath;
    }

    /**
     * 保存学生异议
     *
     * @param grantsDissent
     */
    @Override
    public void saveCommitDissent(GrantsDissentDto grantsDissent) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String publicityStage = findGrantsPublicityStage();
        if (!publicityStage.equals("非公示阶段")) {
            if (sessionUserDto.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()) {
                String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
                Student student = grantsJWTService.findStudentBySn(sessionUserDto.getUserName());
                Long dissentTimes = grantsCommonMapper.countStudentDissentTime(student.getSn());
                if (dissentTimes >= 1) {
                    throw new PersonalException("您已经提交过异议了！");
                } else {
                    grantsDissent.setStage(publicityStage);
                    grantsDissent.setSourceName(student.getName());
                    grantsDissent.setSourceSn(student.getSn());
                    grantsDissent.setCollegeId(student.getPrimaryTeachingInstitution().getId().intValue());
                    grantsDissent.setGrantsUuid(currentGrantsUuid);
                    grantsCommonMapper.saveCommitDissent(grantsDissent);
                }
            } else {
                throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
            }
        } else {
            throw new PersonalException("请在公示阶段提交异议");
        }


    }

    /**
     * 处理学生异议
     *
     * @param responseDto
     */
    @Override
    public void saveDissentDealInfo(GrantsDissentResponseDto responseDto) {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        responseDto.setResponseSn(sessionUserDto.getUserName());
        grantsCommonMapper.saveDissentDealInfo(responseDto);
    }

    /**
     * 查看异议列表
     *
     * @param
     * @return
     */
    @Override
    public List<Map<String, Object>> findDissentByStatus() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        String stage = findGrantsPublicityStage();
        List<Map<String, Object>> result = new ArrayList<>();
        Map query = new HashedMap();
        query.put("grantsUuid", currentGrantsUuid);
        if (stage.equals("学院公示")) {
            query.put("stage", "学院公示");
            if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
                CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
                query.put("collegeId", collegeUser.getPrimaryTeachingInstitution().getId());
                result = grantsCommonMapper.listGrantsDissent(query);
            } else {
                throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
            }
        } else if (stage.equals("学校公示")) {
            query.put("stage", "学校公示");
            if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
                result = grantsCommonMapper.listGrantsDissent(query);
            } else {
                throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
            }
        } else {
            throw new PersonalException("请在公示阶段查看");
        }
        return result;
    }

    /**
     * 获取助学金详情
     *
     * @param grantsUuid
     * @return
     */
    @Override
    public Grants findGrantsDetailByUuid(String grantsUuid) {
        return grantsCommonMapper.findGrantsDetailByUuid(grantsUuid);
    }

    /**
     * 查询当前学年贫困认定等级
     *
     * @param sn
     * @return
     */
    @Override
    public String findStudentPovertyLevel(String sn) throws Exception {
        String currentSchoolYear = grantsJWTService.getCurrentSchoolYear();
        return grantsCommonMapper.findStudentPovertyLevel(sn, currentSchoolYear);
    }

    /**
     * 查找当前申请的助学金
     *
     * @return
     */
    @Override
    public String findCurrentGrants() {
        return grantsCommonMapper.findCurrentGrants();
    }

    /**
     * 保存或更新公示时间
     *
     * @param grantsPublicityDto
     */
    /**
     * 保存学院公示时间
     *
     * @param grantsPublicity
     */
    @Override
    public void saveOrUpdatePublicityTimeConfig(GrantsPublicity grantsPublicity) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        if (currentGrantsUuid == null) {
            throw new Exception("无正在进行申请的助学金");
        }
        grantsPublicity.setUuid(currentGrantsUuid);
        if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {//学院公示
            grantsPublicity.setSn(sessionUserDto.getUserName());
            if (grantsPublicity.getId() == null) {//保存
                CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
                grantsPublicity.setCollegeId(collegeUser.getPrimaryTeachingInstitution().getId());
                grantsPublicity.setStart(0);
                grantsCommonMapper.savePublicityTimeConfig(grantsPublicity);
            } else {//更新
                GrantsPublicity publicityDto = grantsCommonMapper.findPublicityTimeConfigById(grantsPublicity.getId());
                Date now = new Date();
                if (now.after(publicityDto.getStartTime())) {
                    throw new Exception("公示阶段已经开始，不能修改时间");
                }
                grantsCommonMapper.updatePublicityTimeConfig(grantsPublicity);
            }
        } else if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {//学校公示
            grantsPublicity.setSn(sessionUserDto.getUserName());
            if (grantsPublicity.getId() == null) {
                grantsPublicity.setStart(0);
                grantsCommonMapper.savePublicityTimeConfig(grantsPublicity);
            } else {//更新
                GrantsPublicity publicityDto = grantsCommonMapper.findPublicityTimeConfigById(grantsPublicity.getId());
                Date now = new Date();
                if (now.after(publicityDto.getStartTime())) {
                    throw new PersonalException("公示阶段已经开始，不能修改时间");
                }
                grantsCommonMapper.updatePublicityTimeConfig(grantsPublicity);
            }
        } else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }

    /**
     * 获取学年的助学金名
     *
     * @param schoolYear
     */
    @Override
    public List<Map> listGrantsBySchoolYear(String schoolYear) {
        return grantsCommonMapper.listGrantsBySchoolYear(schoolYear);
    }

    /**
     * 查找公示阶段
     *
     * @return
     */
    @Override
    public GrantsPublicity findPublicityStage() throws Exception {
        String currentUuid = grantsCommonMapper.findCurrentGrants();
        Long collegeId = findCollegeId();
        return grantsCommonMapper.findPublicityTimeConfigByCollegeIdAndGrantsUuid(collegeId, currentUuid);

    }

    /**
     * 获取公示时间
     *
     * @return
     */
    @Override
    public GrantsPublicity findPublicityTimeConfig() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
            CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
            Long collegeId = collegeUser.getPrimaryTeachingInstitution().getId();
            String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
            return grantsCommonMapper.findCollegePublicityByGrantsUuidAndCollegeId(currentGrantsUuid,collegeId);
        } else if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
            String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
            return grantsCommonMapper.findSchoolPublicityByGrantsUuidAndStage(currentGrantsUuid, "学校公示");
        } else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }

    /**
     * 是否配置公式時間
     *
     * @return
     */
    @Override
    public GrantsPublicity isCofigPublicityTime() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
            CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
            String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
            Long collegeId = collegeUser.getPrimaryTeachingInstitution().getId();
            return grantsCommonMapper.findCollegePublicityByGrantsUuidAndCollegeId(currentGrantsUuid, collegeId);
        } else if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
            String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
            return grantsCommonMapper.findSchoolPublicityByGrantsUuidAndStage(currentGrantsUuid, "学校公示");
        } else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }

    /**
     * 如果存在学校公示，返回学校公示
     * 如果不存在学校公示，存在学院公示，返回学院公示
     * @return
     * @throws Exception
     */
    public String findGrantsPublicityStage() throws Exception {
        String currentUuid = grantsCommonMapper.findCurrentGrants();
        GrantsPublicity schoolPublicity = grantsCommonMapper.findSchoolPublicityByGrantsUuidAndStage(currentUuid,"学校公示");
        if (schoolPublicity != null && schoolPublicity.getStart() == 1) {//学校公示并且开始
            return "学校公示";
        }else {
            Long collegeId = findCollegeId();
            GrantsPublicity collegePublicity = grantsCommonMapper.findCollegePublicityByGrantsUuidAndCollegeId(currentUuid,collegeId);
            if (collegePublicity != null && collegePublicity.getStart() == 1){//学院公示并且开始
                return "学院公示";
            }
        }
        return "非公示阶段";
    }

    /**
     * 查找
     *
     * @return
     * @throws Exception
     */
    private Long findCollegeId() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        Long collegeId = null;
        if (sessionUserDto.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()) {
            Student student = grantsJWTService.findStudentBySn(sessionUserDto.getUserName());
            collegeId = student.getPrimaryTeachingInstitution().getId();
        } else if (sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()) {
            Instructor instructor = grantsJWTService.findInstructorBySn(sessionUserDto.getUserName());
            collegeId = instructor.getPrimaryTeachingInstitution().getId();
        } else if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
            CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
            collegeId = collegeUser.getPrimaryTeachingInstitution().getId();
        }
        return collegeId;
    }
}
