package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.constant.ProcessConstant;
import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;
import com.xdbigdata.subsidize_zjut.service.IActivitiProcessService;
import com.xdbigdata.subsidize_zjut.service.ISpecialProvertyProcessService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import lombok.extern.log4j.Log4j;
import org.activiti.engine.HistoryService;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by tangyijun on 2017/4/26.
 * good good study,day day up!
 */
@Log4j
@Service
public class SpecialProvertyProcessServiceImpl implements ISpecialProvertyProcessService {
    @Autowired
    private IActivitiProcessService activitiProcessService;
    @Autowired
    private JWTStudentService jwtStudentService;
    @Autowired
    private TaskService taskService;
    @Autowired
    private RepositoryService repositoryService;
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private HistoryService historyService;


    @Override
    public void startAndCommit(String cardNum,String precatoryStudentId,String reason) throws Exception {
        String studentId= (String) UserUtil.getLoginUser();
        HashMap<String, Object> map = new HashMap<>();
        map.put(ProcessConstant.CARD_NUM, cardNum);
        map.put(ProcessConstant.PRECATORY_STUDENT, precatoryStudentId);
        map.put(ProcessConstant.REASON, reason);
        activitiProcessService.startProcess("103481",ProcessConstant.SPECIAL_POVERTY_PROCESS,map);
    }

    @Override
    public List<PovertyApplyDto> AuditList() throws Exception {
        ArrayList<PovertyApplyDto> results = new ArrayList<>();
        List<ProcessInstance> list = runtimeService.createProcessInstanceQuery().list();
        for (ProcessInstance processInstance : list) {
            String businessKey = processInstance.getBusinessKey();
            String[] split = StringUtils.split(businessKey, ":");
            final String studentId = split[0];
            // TODO: 2017/5/3 匹配当前用户管理的学号
            PovertyApplyDto o = runtimeService.getVariable(processInstance.getId(), ProcessConstant.POVERTY_APPLY_DTO, PovertyApplyDto.class);
            Task task = taskService.createTaskQuery().executionId(processInstance.getId()).singleResult();
            o.setTaskId(task.getId());

            results.add(o);
        }
        return results;

//        List<Task> tasks = activitiProcessService.findTask("123456");
//        log.info("查找到的任务"+tasks);
//        List<PovertyApplyDto> povertyApplyDtos = new ArrayList<>();
//
//        for (Task task : tasks) {
//            PovertyApplyDto povertyApplyDto = taskService.getVariable(task.getId(), ProcessConstant.POVERTY_APPLY_DTO, PovertyApplyDto.class);
//            povertyApplyDto.setTaskId(task.getId());
//            povertyApplyDto.setProcessInstanceId(task.getProcessInstanceId());
//            povertyApplyDtos.add(povertyApplyDto);
//        }
//        return povertyApplyDtos;
    }

    @Override
    public void advisorAudit(String taskId, String isAgree) throws Exception {
        PovertyApplyDto povertyApplyDto = (PovertyApplyDto) taskService.getVariable(taskId, ProcessConstant.POVERTY_APPLY_DTO);
        povertyApplyDto.setAdvisorResult(isAgree);
        taskService.setVariableLocal(taskId,ProcessConstant.POVERTY_APPLY_DTO,povertyApplyDto);
    }

    @Override
    public void collegeAudit(String taskId, String isAgree) throws Exception {
        PovertyApplyDto povertyApplyDto = (PovertyApplyDto) taskService.getVariable(taskId, ProcessConstant.POVERTY_APPLY_DTO);
        povertyApplyDto.setCollegeResult(isAgree);
        taskService.setVariableLocal(taskId,ProcessConstant.POVERTY_APPLY_DTO,povertyApplyDto);
    }

    @Override
    public void schoolAudit(String taskId, String isAgree) throws Exception {
        PovertyApplyDto povertyApplyDto = (PovertyApplyDto) taskService.getVariable(taskId, ProcessConstant.POVERTY_APPLY_DTO);
//        povertyApplyDto.setSchoolResult(isAgree);
        taskService.setVariableLocal(taskId,ProcessConstant.POVERTY_APPLY_DTO,povertyApplyDto);
    }

    @Override
    public void finishTask(String result) throws Exception{
        // TODO: 2017/5/2 需要验证学生在当前阶段，并且在这个用户的管理范围内
        Assert.notNull(result,"必须传入当前阶段任务的名称");
//        List<ProcessInstance> processInstanceList = runtimeService.createProcessInstanceQuery().list();
//        for (ProcessInstance processInstance : processInstanceList) {
//            log.info("流程实例："+processInstance);
//            Task task = taskService.createTaskQuery().processInstanceId(processInstance.getProcessInstanceId()).singleResult();
//            PovertyApplyDto povertyApplyDto = (PovertyApplyDto) taskService.getVariable(task.getId(), ProcessConstant.POVERTY_APPLY_DTO);
//            log.info("所有任务的内容为"+povertyApplyDto);
//
//            if ("未进行".equals(povertyApplyDto.getAdvisorResult())) {
//                throw new XDException("有学生没有进行到这个阶段，不能提交");
//            }
//        }
        List<Task> tasks = activitiProcessService.findTask((String) UserUtil.getLoginUser());
        for (Task task : tasks) {
            taskService.complete(task.getId());
        }
    }

    public PovertyApplyDto showCurrent()  throws Exception {
        ProcessInstance processInstance = runtimeService.createProcessInstanceQuery().processInstanceBusinessKey("103481:" + ProcessConstant.SPECIAL_POVERTY_PROCESS).singleResult();
        PovertyApplyDto o =  runtimeService.getVariable(processInstance.getId(), ProcessConstant.POVERTY_APPLY_DTO,PovertyApplyDto.class);
        return o;

    }

}
