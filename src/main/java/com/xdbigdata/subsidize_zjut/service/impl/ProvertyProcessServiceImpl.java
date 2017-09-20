package com.xdbigdata.subsidize_zjut.service.impl;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.xdbigdata.jwtService.domain.*;
import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.StartProcessDto;
import com.xdbigdata.subsidize_zjut.exception.XDException;
import com.xdbigdata.subsidize_zjut.service.IProvertyProcessService;
import lombok.extern.log4j.Log4j;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by tangyijun on 2017/4/26.
 * good good study,day day up!
 */
@Log4j
@Service
public class ProvertyProcessServiceImpl implements IProvertyProcessService {

    @Autowired
    private JWTStudentService jwtStudentService;
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private TaskService taskService;

    private StartProcessDto getStudentLeader(String studentId) throws Exception {
        StartProcessDto startProcessDto = new StartProcessDto();
        List<Classes> classesList = new Gson().fromJson(jwtStudentService.getClassUserByStudent(studentId), new TypeToken<List<Classes>>() {
        }.getType());
        List<String> classUserIds = new ArrayList<>();
        for (Classes classes : classesList) {
            classUserIds.add(classes.getSn());
        }
        log.info("把学生"+studentId+"的班级用户加入流程开启中");
        startProcessDto.setStudentId(studentId);
        startProcessDto.setClassUserId(classUserIds);
        List<Instructor> instructorList = new Gson().fromJson(jwtStudentService.getClassUserByStudent(studentId), new TypeToken<List<Instructor>>() {
        }.getType());
        List<String> advisorUserIds = new ArrayList<>();
        for (Instructor instructor : instructorList) {
            advisorUserIds.add(instructor.getSn());
        }
        log.info("把学生"+studentId+"的辅导员用户加入流程开启中");
        startProcessDto.setAdvisorUserId(advisorUserIds);
        List<CollegeUser> collegeUserList = new Gson().fromJson(jwtStudentService.getClassUserByStudent(studentId), new TypeToken<List<CollegeUser>>() {
        }.getType());
        List<String> collegeUserIds = new ArrayList<>();
        for (CollegeUser collegeUser : collegeUserList) {
            collegeUserIds.add(collegeUser.getSn());
        }
        log.info("把学生"+studentId+"的学院用户加入流程开启中");
        startProcessDto.setCollegeUserId(collegeUserIds);
        List<SchoolUser> schoolUserList = new Gson().fromJson(jwtStudentService.getClassUserByStudent(studentId), new TypeToken<List<SchoolUser>>() {
        }.getType());
        List<String> schoolUserIds = new ArrayList<>();
        for (SchoolUser schoolUser : schoolUserList) {
            schoolUserIds.add(schoolUser.getSn());
        }
        startProcessDto.setSchoolUserId(schoolUserIds);
        log.info("把学生"+studentId+"的学校用户加入流程开启中");
        return startProcessDto;
    }

    public void startProvertyProcess(String studentId) throws Exception {
            StartProcessDto startProcessDto = getStudentLeader(studentId);
            Map<String, Object> variables = new HashMap<String, Object>();
            startProcessDto.setProcessId("povertyProcess");
            variables.put("studentId", startProcessDto.getStudentId());
            variables.put("classUserId", startProcessDto.getClassUserId());
            variables.put("advisorUserId", startProcessDto.getAdvisorUserId());
            variables.put("collegeUserId", startProcessDto.getCollegeUserId());
            variables.put("schoolUserId", startProcessDto.getSchoolUserId());
            PovertyApplyDto povertyApplyDto = new PovertyApplyDto();
            //获取该学生的组织机构信息
            Student student = new Gson().fromJson(jwtStudentService.find(studentId), Student.class);
            povertyApplyDto.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null : student.getPrimaryTeachingInstitution().getName());
            povertyApplyDto.setGradeName(student.getGrade() == null ? null : student.getGrade().getName());
            povertyApplyDto.setMajorName(student.getSecondaryTeachingInstitution() == null ? null : student.getSecondaryTeachingInstitution().getName());
            povertyApplyDto.setClassName(student.getClasses() == null ? null : student.getClasses().getName());
            povertyApplyDto.setClassResult("未进行");
            povertyApplyDto.setAdvisorResult("未进行");
            povertyApplyDto.setCollegeResult("未进行");
            povertyApplyDto.setCollegeOpenResult("未进行");
            povertyApplyDto.setName(student.getName());
            povertyApplyDto.setStudentId(studentId);

            //流程变量对象设置到流程中
            variables.put("povertyApplyDto", povertyApplyDto);
            runtimeService.startProcessInstanceByKey(startProcessDto.getProcessId(),studentId+":poverty", variables);
            //提交材料
            List<Task> tasks = findTask(studentId);
            if (tasks == null || tasks.size() != 1) {
                throw new XDException("学生提交材料失败，流程未开启");
            }
            Task task = tasks.get(0);
            taskService.complete(task.getId());
        }

    /**
     * 根据辅导员/学生/学院/学校的id来查询他的任务
     *
     * @param userId 辅导员/学生/学院/学校的id
     * @return
     */
    public List<Task> findTask(String userId) {
        List<Task> tasks = taskService.createTaskQuery().taskCandidateOrAssigned(userId).list();
        return tasks;
    }

}
