package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.domain.GrantsAttachment;
import com.xdbigdata.subsidize_zjut.domain.GrantsDissent;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.GrantsCommonMapper;
import com.xdbigdata.subsidize_zjut.mapper.GrantsStudentMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsActivitiService;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.service.IGrantsStudentService;
import com.xdbigdata.subsidize_zjut.util.GrantsBussinessKeyUtil;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jca.cci.object.EisOperation;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/5/25.
 */
@Service
@Transactional
public class GrantsStudentServiceImpl implements IGrantsStudentService {

    @Autowired
    private GrantsStudentMapper grantsStudentMapper;

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @Autowired
    private IGrantsActivitiService grantsActivitiService;

    @Autowired
    private GrantsBussinessKeyUtil bussinessKeyUtil;

    @Autowired
    private GrantsCommonMapper grantsCommonMapper;

    /**
     * 获取学生能够申请的助学金列表
     *
     * @return
     */
    @Override
    public GrantsDto listAuthGrants() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        Student student = grantsJWTService.findStudentBySn(sessionUserDto.getUserName());
        String currentSchoolYear = grantsJWTService.getCurrentSchoolYear();
        Map<String, Object> query = new HashedMap();
        if (student == null
                || student.getPrimaryTeachingInstitution() == null
                || student.getSecondaryTeachingInstitution() == null
                || student.getClasses() == null) {
            throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
        }
        query.put("collegeId", student.getPrimaryTeachingInstitution().getId());
        query.put("majorId", student.getSecondaryTeachingInstitution().getId());
        query.put("classesId", student.getClasses().getId());
        query.put("sn", student.getSn());
        query.put("currentSchoolYear", currentSchoolYear);
        GrantsDto grants = grantsStudentMapper.listAuthGrants(query);
        grants = grantsActivitiService.findStudentApplyStatus(grants, student);
        return grants;
    }

    /**
     * 获取学生上传的助学金资料列表
     *
     * @return
     */
    @Override
    public List<GrantsAttachment> listApplyMaterial() throws Exception {
        SessionUserDto user = (SessionUserDto) UserUtil.getLoginUser();
        String grantsUuid = grantsCommonMapper.findCurrentGrants();
        if (user.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()) {
            return grantsStudentMapper.listApplyMaterial(grantsUuid, user.getUserName());
        } else {
            throw new Exception(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }

    /**
     * 删除学生上传资料
     *
     * @param id
     */
    @Override
    public void deleteApplyMaterialById(Long id) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        if (sessionUserDto.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()) {
            grantsStudentMapper.deleteApplyMaterialById(id);
        }else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }


    /**
     * 学生重新提交材料
     *
     * @param grantsRecommitDto
     */
    @Override
    public void recommitMaterial(GrantsRecommitDto grantsRecommitDto) {
        grantsActivitiService.recommitMaterial(grantsRecommitDto);
    }

    /**
     * 查看当前登录学生用户提出的异议列表，依据不同的阶段
     *
     * @return
     */
    @Override
    public List<GrantsDissent> listMyDissent() {
        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        return grantsStudentMapper.listMyDissent(currentGrantsUuid,sessionUserDto.getUserName());
    }
}
