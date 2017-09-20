package com.xdbigdata.subsidize_zjut.service.impl;

import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import com.xdbigdata.jwtService.domain.*;
import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.constant.ProcessConstant;
import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.StartProcessDto;
import com.xdbigdata.subsidize_zjut.exception.XDException;
import com.xdbigdata.subsidize_zjut.service.IActivitiProcessService;
import lombok.extern.log4j.Log4j;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.lang.reflect.Type;
import java.util.*;

/**
 * Created by tangyijun on 2017/5/2.
 * good good study,day day up!
 */
@Service
@Log4j
public class ActivitiProcessServiceImpl implements IActivitiProcessService {
    @Autowired
    private JWTStudentService jwtStudentService;
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private TaskService taskService;
    @Override
    public StartProcessDto getStudentLeader(String studentId) throws Exception {
        StartProcessDto startProcessDto = new StartProcessDto();
        List<Classes> classesList = new Gson().fromJson(jwtStudentService.getClassUserByStudent(studentId), new TypeToken<List<Classes>>() {
        }.getType());
        List<String> classUserIds = new ArrayList<>();
        for (Classes classes : classesList) {
            classUserIds.add(classes.getSn());
            log.info("班级用户的号码为"+classes.getSn());
        }
        log.info("把学生"+studentId+"的班级用户加入流程开启中");
        startProcessDto.setStudentId(studentId);
        startProcessDto.setClassUserId(classUserIds);
        List<Instructor> instructorList = new Gson().fromJson(jwtStudentService.getInstructorByStudent (studentId), new TypeToken<List<Instructor>>() {
        }.getType());
        List<String> advisorUserIds = new ArrayList<>();
        for (Instructor instructor : instructorList) {
            advisorUserIds.add(instructor.getSn());
            log.info("辅导员的号码为"+instructor.getSn());
        }
        log.info("把学生"+studentId+"的辅导员用户加入流程开启中");
        startProcessDto.setAdvisorUserId(advisorUserIds);
        List<CollegeUser> collegeUserList = new Gson().fromJson(jwtStudentService.getCollegeByStudent(studentId), new TypeToken<List<CollegeUser>>() {
        }.getType());
        List<String> collegeUserIds = new ArrayList<>();
        for (CollegeUser collegeUser : collegeUserList) {
            collegeUserIds.add(collegeUser.getSn());
            log.info("学院用户的号码为"+collegeUser.getSn());
        }
        log.info("把学生"+studentId+"的学院用户加入流程开启中");
        startProcessDto.setCollegeUserId(collegeUserIds);
        String schoolUserByStudent = jwtStudentService.getScoolUserByStudent(studentId);
        log.info("学校用户为："+schoolUserByStudent);
        GsonBuilder builder = new GsonBuilder();

        // Register an adapter to manage the date types as long values
        builder.registerTypeAdapter(Date.class, new JsonDeserializer<Date>() {
            public Date deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
                return new Date(json.getAsJsonPrimitive().getAsLong());
            }
        });
        Gson gson = builder.create();
        List<SchoolUser> schoolUserList = gson.fromJson(schoolUserByStudent, new TypeToken<List<SchoolUser>>() {
        }.getType());
        List<String> schoolUserIds = new ArrayList<>();
        for (SchoolUser schoolUser : schoolUserList) {
            schoolUserIds.add(schoolUser.getSn());
            log.info("学校用户的号码为"+schoolUser.getSn());
        }
        startProcessDto.setSchoolUserId(schoolUserIds);
        log.info("把学生"+studentId+"的学校用户加入流程开启中");
        return startProcessDto;
    }

    @Override
    public void startProcess(String studentId,String processId,Map<String,Object> processVariables) throws Exception {
        StartProcessDto startProcessDto = getStudentLeader(studentId);
        Map<String, Object> variables = new HashMap<String, Object>();
        startProcessDto.setProcessId(processId);
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
//        povertyApplyDto.setSchoolResult("未进行");
//        povertyApplyDto.setSchoolOpenResult("未进行");
        povertyApplyDto.setName(student.getName());
        povertyApplyDto.setStudentId(studentId);


        //流程变量对象设置到流程中
        variables.put(ProcessConstant.POVERTY_APPLY_DTO, povertyApplyDto);
        runtimeService.startProcessInstanceByKey(startProcessDto.getProcessId(),studentId+":"+processId, variables);
        //提交材料
        List<Task> tasks = findTask(studentId);
        if (tasks == null || tasks.size() != 1) {
            throw new XDException("学生提交材料失败，流程未开启");
        }
        Task task = tasks.get(0);
        if (processVariables != null) {
            taskService.complete(task.getId(),processVariables);
        }else{
            taskService.complete(task.getId());
        }
    }

    public List<Task> findTask(String userId) {
        List<Task> tasks = taskService.createTaskQuery().taskCandidateOrAssigned(userId).list();
        return tasks;
    }

    public void completeTask(String taskId,Map<String,Object> variables) {
        Assert.notNull(taskId,"必须有任务的id");
        taskService.complete(taskId,variables);
    }

    public void completeTask(String taskId) {
       completeTask(taskId,null);

    }



}
