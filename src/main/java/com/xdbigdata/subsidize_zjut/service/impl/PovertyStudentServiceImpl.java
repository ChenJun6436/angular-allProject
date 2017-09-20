package com.xdbigdata.subsidize_zjut.service.impl;

import com.google.gson.reflect.TypeToken;
import com.xdbigdata.jwtService.domain.CollegeUser;
import com.xdbigdata.jwtService.domain.PrimaryTeachingInstitution;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.ValidateFile;
import com.xdbigdata.subsidize_zjut.common.dto.result.StudentStatusDto;
import com.xdbigdata.subsidize_zjut.domain.*;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCollegeMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCommonMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertySchoolMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertyStudentMapper;
import com.xdbigdata.subsidize_zjut.service.PovertyCommonService;
import com.xdbigdata.subsidize_zjut.service.PovertyStudentService;
import com.xdbigdata.subsidize_zjut.service.process.PovertyActivitiService;
import com.xdbigdata.subsidize_zjut.util.GsonUtil;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import com.xdbigdata.subsidize_zjut.util.UploadFileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

/**
 * Created by jinmingjiang on 2017/5/23.
 */
@Service
public class PovertyStudentServiceImpl implements PovertyStudentService {

    @Autowired
    PovertyStudentMapper povertyStudentMapper;

    @Autowired
    PovertyCommonService povertyCommonService;

    @Autowired
    private JWTStudentService jwtStudentService;

    @Autowired
    private PovertyActivitiService povertyActivitiService;

    @Autowired
    private PovertyCommonMapper povertyCommonMapper;
    @Autowired
    PovertyCollegeMapper povertyCollegeMapper;
    @Autowired
    PovertySchoolMapper povertySchoolMapper;

    @Override
    public void updateStudentInfo(StudentInfo studentInfo) throws Exception {
        StudentInfo student = povertyStudentMapper.getStudent(studentInfo.getStudentId());
        if(student != null){
            studentInfo.setId(student.getId());
        }
        povertyStudentMapper.updateStudentInfo(studentInfo);
    }

    @Override
    public void saveStudentSubsidy(StudentSubsidy studentSubsidy) throws Exception {
        povertyStudentMapper.saveStudentSubsidy(studentSubsidy);
    }

    @Override
    public void removeStudentSubsidy(Integer id) {
        povertyStudentMapper.removeStudentSubsidy(id);
    }

    @Override
    public void saveStudentFamily(StudentFamily studentFamily) {
        povertyStudentMapper.saveStudentFamily(studentFamily);
    }

    @Override
    public void removeStudentFamily(Integer id) {
        povertyStudentMapper.removeStudentFamily(id);
    }

    @Override
    public void uploadFile(MultipartFile file) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String userName = sessionUserDto.getUserName();
        String realFileName = file.getOriginalFilename();
        realFileName = realFileName.split("\\\\")[realFileName.split("\\\\").length - 1];
        String url = UploadFileUtil.uploadFile(file, "povertyApply");
        PovertyAttachment attachment = new PovertyAttachment();
        attachment.setName(realFileName);
        attachment.setUrl(url);
        attachment.setStudentId(userName);
        attachment.setCreateTime(new Date());

        ValidateFile validateFile = new ValidateFile();
        validateFile.setName(realFileName);
        validateFile.setStudentId(userName);
        Integer count = povertyStudentMapper.validateUpload(validateFile);
        if (count != null && count != 0) {
            throw new PersonalException("该文件已经存在，不能重复上传");
        }
        validateFile.setName(null);
        if (sessionUserDto.getUserType() == 5) {
            int fileCount = povertyStudentMapper.validateUpload(validateFile);
            if (fileCount > 3) {
                throw new PersonalException("最多上传三个附件");
            }
        }
        povertyStudentMapper.saveAttachment(attachment);
    }

    @Override
    public List<PovertyAttachment> listAttachment(String studentId) {
        return povertyStudentMapper.listAttachment(studentId);
    }

    @Override
    public void startPovertyProcess(String sn) throws Exception {
        //看学生是否已经申请，这里是查看学生基本信息表中的status字段（金明江）
        StudentStatusDto studentStatusDto = povertyStudentMapper.getStudentStatus(sn);
        if (studentStatusDto.getStatus() > 0) {
            throw new PersonalException("你已经申请了困难认定，不能重复申请");
        }
        //学生必须在申请阶段提交申请
        if (!povertyCommonService.isApplyTime()) {
            throw new PersonalException("请在认定时间段内提交");
        }
        povertyActivitiService.startProcess(sn,false);
    }

    @Override
    public StudentStatusDto getStudentStatus(String sn) {
        StudentStatusDto studentStatusDto = povertyStudentMapper.getStudentStatus(sn);
        return studentStatusDto;
    }

    @Override
    public Boolean isComplete(String sn) {
        Integer isComplete = povertyStudentMapper.isComplete(sn);
        if (isComplete == null || isComplete == 0) {
            return false;
        }
        return true;
    }

    public void removeAttachment(int id) {
        povertyStudentMapper.removeAttachment(id);
    }

    @Override
    public List<PublicPoverty> listPublicPoverty(String sn) throws Exception {
        //时间必须在公示阶段才能查看公示情况（金明江）
//        Integer maxStatus = povertyCommonMapper.getMaxStatus();
//        if (maxStatus != 5) {
//            throw new PersonalException("请在学院公示阶段查看公示或提交异议");
//        }
        Student student = GsonUtil.getGson().fromJson(jwtStudentService.find(sn), Student.class);
        String collegeName = student.getPrimaryTeachingInstitution() == null ? null :
                student.getPrimaryTeachingInstitution().getName();
        return povertyStudentMapper.listPublicPoverty(collegeName);
    }

    @Override
    public List<PublicPoverty> listPublicPovertySchool(String sn) throws Exception {
        Student student = GsonUtil.getGson().fromJson(jwtStudentService.find(sn), Student.class);
                student.getPrimaryTeachingInstitution().getName();
        return povertyStudentMapper.listPublicPovertySchool();
    }

    @Override
    public void saveDissent(List<Dissent> dissents,Integer type) throws Exception {
        String studentId = SessionUtil.getUserName();
        Integer started = 0;
        if(type==0){
            //学院
            String collegeByStudent = jwtStudentService.find(studentId);
            Student student = GsonUtil.getGson().fromJson(collegeByStudent,Student.class);
            PrimaryTeachingInstitution college = student.getPrimaryTeachingInstitution();
            Long collegeId = college.getId();
            List<PovertyOpenTime> openTimeByCollegeId = povertyCollegeMapper.findOpenTimeByCollegeId(collegeId);
            PovertyOpenTime openTimeByCollegeUser = null;
            if(openTimeByCollegeId!=null && openTimeByCollegeId.size()>0){
                openTimeByCollegeUser = openTimeByCollegeId.get(0);
            }
//            PovertyOpenTime openTimeByCollegeUser = povertyCollegeMapper.findOpenTimeByCollegeUser(collegeUser.getSn());
            Integer started1 = openTimeByCollegeUser.getStarted();
            started = started1==null? 0:started1;
        }else if(type==1){
            //学校
            PovertyProcess processTime = povertySchoolMapper.getProcessTime();
            Integer schoolOpenStarted = processTime.getSchoolOpenStarted();
            started = schoolOpenStarted==null? 0:schoolOpenStarted;
        }
        if(started != 1){
            throw new PersonalException("请在公示阶段进行操作");
        }
        //一个学生只能提交一次异议
        if (povertyStudentMapper.validateDissent(studentId,type) > 0) {
            throw new PersonalException("一人只能提交一次异议");
        }
        for (Dissent dissent : dissents) {
            // TODO: 2017/4/18 调用消息接口发送消息
            dissent.setType(type==0? null:type);
            povertyStudentMapper.saveDissent(dissent);
        }
    }

    @Override
    public List<Dissent> viewDealOpinion() {
        SessionUserDto sessionUserDto = (SessionUserDto)SessionUtil.getSession().getAttribute("sessionUserDto");
        return povertyStudentMapper.viewDealOpinion(sessionUserDto.getUserName());
    }
}
