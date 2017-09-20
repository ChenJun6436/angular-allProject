package com.xdbigdata.subsidize_zjut.service.impl;

import com.google.gson.reflect.TypeToken;
import com.xdbigdata.jwtService.domain.Classes;
import com.xdbigdata.jwtService.domain.CollegeUser;
import com.xdbigdata.jwtService.domain.Instructor;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.jwtService.service.JWTCollegeUserService;
import com.xdbigdata.jwtService.service.JWTInstructorService;
import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.StartProcessDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.CheckMaterialDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.ReviewStudentLevelDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.UpdateStudentStatusDto;
import com.xdbigdata.subsidize_zjut.common.dto.result.StudentStatusDto;
import com.xdbigdata.subsidize_zjut.domain.Dissent;
import com.xdbigdata.subsidize_zjut.domain.Log;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCollegeMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCommonMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertyStudentMapper;
import com.xdbigdata.subsidize_zjut.service.PovertyCollegeService;
import com.xdbigdata.subsidize_zjut.service.PovertyCommonService;
import com.xdbigdata.subsidize_zjut.service.process.PovertyActivitiService;
import com.xdbigdata.subsidize_zjut.util.GsonUtil;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 学院相关service
 * Created by staunch on 2017/4/1.
 */
@SuppressWarnings("SpringJavaAutowiringInspection")
@Service
@Transactional
public class PovertyCollegeServiceImpl implements PovertyCollegeService {

    @Autowired
    private PovertyActivitiService povertyActivitiService;
    @Autowired
    private JWTStudentService jwtStudentService;
    @Autowired
    private JWTInstructorService jwtInstructorService;
    @Autowired
    private JWTCollegeUserService jwtCollegeUserService;
    @Autowired
    private PovertyCommonService povertyCommonService;
    @Autowired
    private PovertyCollegeMapper povertyCollegeMapper;
    @Autowired
    private PovertyCommonMapper povertyCommonMapper;
    @Autowired
    private PovertyStudentMapper povertyStudentMapper;

    @Override
    public List<Dissent> viewOpenDissent(String sn, SessionUserDto sessionUserDto) throws Exception {
        //获取学院用户管理的学生
        Integer userType = sessionUserDto.getUserType();
        List<Student> students = GsonUtil.getGson().fromJson(jwtStudentService.findByCollegeUser(sn), new TypeToken<List<Student>>() {
        }.getType());
        List<String> studentIds = povertyCommonService.findStudentIds(students,sessionUserDto);
        //获取异议
        return povertyCollegeMapper.listDissent(studentIds,null,userType);
    }

    @Override
    public List<Dissent> viewOpenDissentSchool(String sn) throws Exception {
        //获取学院用户管理的学生
        List<Student> students = GsonUtil.getGson().fromJson(jwtStudentService.findByCollegeUser(sn), new TypeToken<List<Student>>() {
        }.getType());
//        List<String> studentIds = povertyCommonService.findStudentIds(students);
        //获取异议
        return povertyCollegeMapper.listDissentSchool(null,null);
    }

    @Override
    public void dealOpenDissent(Dissent dissent) {
        povertyCollegeMapper.dealOpenDissent(dissent);
    }

    @Override
    public List<Instructor> listAdvisors() throws Exception {
        CollegeUser collegeUser = GsonUtil.getGson().fromJson(jwtCollegeUserService.find(SessionUtil.getUserName()), CollegeUser.class);
        List<Instructor> instructorList = GsonUtil.getGson().fromJson(jwtInstructorService.findByCollege(collegeUser.getPrimaryTeachingInstitution().getId()),
                new TypeToken<List<Instructor>>() {
                }.getType());
        return instructorList;
    }

    @Override
    public void cancelApply(StartProcessDto startProcessDto) {
        povertyActivitiService.removeProcess(startProcessDto.getProcessId());
        UpdateStudentStatusDto updateStudentStatusDto = new UpdateStudentStatusDto();
        updateStudentStatusDto.setStatus(-2);
        updateStudentStatusDto.setStudentId(startProcessDto.getStudentId());
        povertyCommonMapper.setStudentStatus(updateStudentStatusDto);
        //删除公示
        povertyCollegeMapper.removeOpenResult(startProcessDto.getStudentId());
    }

    @Override
    public void addApply(String studentId,String level) throws Exception {
//        //检测学生是否完善基本信息
//        if (povertyStudentMapper.isComplete(studentId) == null) {
//            throw new PersonalException("请学生先完善自己基本信息");
//        }
//        //验证学生是否已经在流程中
//        StudentStatusDto studentStatusDto = povertyStudentMapper.getStudentStatus(studentId);
//        if (studentStatusDto.getStatus() > 0) {
//            throw new PersonalException("该生已经在流程中,无需补录");
//        }
//        //首先判断该学生是否是该学院用户的学生
//        String userName = SessionUtil.getUserName();
//        List<Student> students = povertyCommonService.getStudentsBySn(userName);
//        List<String> studentIds = povertyCommonService.findStudentIds(students);
//        if (!studentIds.contains(studentId)) {
//            throw new PersonalException("对不起！该学生不归您负责！");
//        }
//        //获取到负责该学生的班级用户
//        List<Classes> classesList = GsonUtil.getGson().fromJson(jwtStudentService.getClassUserByStudent(studentId), new TypeToken<List<Classes>>() {
//        }.getType());
//        //获取到该班级用户下学生流程走到哪一步了
//        if (classesList == null || classesList.size() == 0) {
//            throw new PersonalException("获取该学生班级用户失败，请检查网络");
//        }
//        List<Student> classStudents = GsonUtil.getGson().fromJson(jwtStudentService.findByAssiantUser(classesList.get(0).getSn()), new TypeToken<List<Student>>() {
//        }.getType());
//        List<String> classStudentIds = povertyCommonService.findStudentIds(classStudents);
//        int maxStatus = povertyCommonMapper.getStudentMaxStatus(classStudentIds);
//        automateProcess(maxStatus, studentId,level);
    }

    /**
     * 根据学生最大状态码判断补录学生自动化流程应该走到哪一步
     *
     * @param maxStatus
     */
    private void automateProcess(int maxStatus, String studentId, String level) throws Exception {
        //新增日志
        Log log = new Log();
        log.setUserName(SessionUtil.getUserName());
        log.setContent(SessionUtil.getRealName() + "学院用户补录了学号为:" + studentId + "的学生申请");
        log.setType(2);
        povertyCommonMapper.saveLog(log);
        //0：未申请 1：班级用户审核材料 2：辅导员审核材料 3：民主评议 4：辅导员审核 5：学院审核 6：学院公示 7：学校确认
//        if (maxStatus < 3) {
//            throw new PersonalException("补录学生的同班同学还在材料审核阶段，学生不符合补录条件");
//        }
        //设置学生的状态码
        UpdateStudentStatusDto updateStudentStatusDto = new UpdateStudentStatusDto();
        updateStudentStatusDto.setStudentId(studentId);
        updateStudentStatusDto.setStatus(maxStatus);
        povertyCommonMapper.setStudentStatus(updateStudentStatusDto);
        //学生开启流程
        String processId = povertyActivitiService.startProcess(studentId, true);
        //if (maxStatus>=3) {
        //    throw new PersonalException("测试事务回滚机制异常");
        //}
        //完成班级和辅导员用户审核材料
        CheckMaterialDto checkMaterialDto = new CheckMaterialDto();
        checkMaterialDto.setStudentId(studentId);
        checkMaterialDto.setProcessInstanceId(processId);
        checkMaterialDto.setIsPass(1);
//        List<Task> tasks = povertyActivitiService.findTask(PovertyActivitiService.ADDITIONAL_CLASS);
//        if (tasks == null || tasks.size() == 0) {
//            throw new PersonalException("获取班级用户审核材料异常");
//        }
//        for (Task task : tasks) {
//            if (task.getName().equals("班级用户审核材料")) {
//                checkMaterialDto.setTaskId(task.getId());
//            }
//        }
//        //checkMaterialDto.setTaskId(tasks.get(0).getId());
//        povertyActivitiService.classMaterialPass(checkMaterialDto);
//        tasks.clear();
        List<Task> tasks = povertyActivitiService.findTask(PovertyActivitiService.ADDITIONAL_ADVISOR);
        if (tasks == null || tasks.size() == 0) {
            throw new PersonalException("获取辅导员审核材料异常");
        }
        for (Task task : tasks) {
            if (task.getName().equals("辅导员审核材料")) {
                checkMaterialDto.setTaskId(task.getId());
            }
        }
        //checkMaterialDto.setTaskId(tasks.get(0).getId());
        povertyActivitiService.advisorMaterialPass(checkMaterialDto);
        //补录测试新增 2017-06-01
        if (maxStatus == 3) {
            return;
        }
        //end
        tasks.clear();
        ReviewStudentLevelDto reviewStudentLevelDto = new ReviewStudentLevelDto();
        tasks = povertyActivitiService.findTask(PovertyActivitiService.ADDITIONAL_CLASS);
        if (tasks == null || tasks.size() == 0) {
            throw new PersonalException("获取民主评议任务异常");
        }
        for (Task task : tasks) {
            if (task.getName().equals("班级用户填写民主评议")) {
                reviewStudentLevelDto.setTaskId(task.getId());
            }
        }
        //reviewStudentLevelDto.setTaskId(tasks.get(0).getId());
        reviewStudentLevelDto.setProcessInstanceId(processId);
        reviewStudentLevelDto.setPovertyLevel(level);
        reviewStudentLevelDto.setIsPass(1);
        reviewStudentLevelDto.setStep("class");
        reviewStudentLevelDto.setNextStep("advisor");
        povertyActivitiService.review(reviewStudentLevelDto);
        if (maxStatus == 4) {
            return;
        }
        tasks.clear();
        tasks = povertyActivitiService.findTask(PovertyActivitiService.ADDITIONAL_ADVISOR);
        if (tasks == null || tasks.size() == 0) {
            throw new PersonalException("获取辅导员任务失败");
        }
        for (Task task : tasks) {
            if (task.getName().equals("辅导员审核")) {
                reviewStudentLevelDto.setTaskId(task.getId());
            }
        }
        //reviewStudentLevelDto.setTaskId(tasks.get(0).getId());
        reviewStudentLevelDto.setStep("advisor");
        reviewStudentLevelDto.setNextStep("college");
        povertyActivitiService.review(reviewStudentLevelDto);
        if (maxStatus == 5) {
            return;
        }
        tasks.clear();
        tasks = povertyActivitiService.findTask(PovertyActivitiService.ADDITIONAL_COLLEGE);
        if (tasks == null || tasks.size() == 0) {
            throw new PersonalException("获取学院任务失败");
        }
        for (Task task : tasks) {
            if (task.getName().equals("学院审核")) {
                reviewStudentLevelDto.setTaskId(task.getId());
            }
        }
        reviewStudentLevelDto.setStep("college");
        reviewStudentLevelDto.setNextStep("collegeOpen");
        povertyActivitiService.review(reviewStudentLevelDto);
        if (maxStatus == 6) {
            return;
        }
        tasks.clear();
        tasks = povertyActivitiService.findTask(PovertyActivitiService.ADDITIONAL_COLLEGE);
        if (tasks == null || tasks.size() == 0) {
            throw new PersonalException("获取学院公示任务异常");
        }
        for (Task task : tasks) {
            if (task.getName().equals("学院公示")) {
                reviewStudentLevelDto.setTaskId(task.getId());
            }
        }
        //reviewStudentLevelDto.setTaskId(tasks.get(0).getId());
        reviewStudentLevelDto.setStep("collegeOpen");
        reviewStudentLevelDto.setNextStep("school");
        povertyActivitiService.review(reviewStudentLevelDto);
        if (maxStatus == 7) {
            return;
        }

    }
}

