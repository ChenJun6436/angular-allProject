package com.xdbigdata.subsidize_zjut.service.process;

import com.xdbigdata.subsidize_zjut.common.dto.EGrantsVariable;
import com.xdbigdata.subsidize_zjut.common.dto.EStringConstant;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsCheckResultDto;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.GrantsCommonMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsActivitiService;
import lombok.extern.log4j.Log4j;
import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

/**
 * 助学金自动提交到公示阶段（学院公示 / 学校公示）
 * Created by Administrator on 2017/6/11.
 */
@Service
@Log4j
public class GrantAutoPublicityService {


    @Autowired
    private GrantsCommonMapper grantsCommonMapper;

    @Autowired
    private TaskService taskService;


    @Autowired
    private IGrantsActivitiService grantsActivitiService;

//    @Scheduled(fixedRate = 1000 * 60)
    @Async
    public void collegePublicity() throws Exception {
        log.info("助学金学院公示开始>>>>>>>>>>>>>>>>>>>>>>>>>>");
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        List<GrantsPublicity> publicities = grantsCommonMapper.listPublicityTime(currentGrantsUuid,"学院公示");
        Date now = new Date();
        String nowStr = format.format(now);
        Long nowLong = format.parse(nowStr).getTime();
        for (GrantsPublicity grantsPublicty : publicities) {
            if (grantsPublicty.getStart() == 1 && grantsPublicty.getCommit() == 0) {
                Long end = grantsPublicty.getEndTime().getTime();
                if (nowLong >= end){
                    log.info("公示开始并且结束了");
                    List<Task> tasks = taskService.createTaskQuery()
                            .taskCandidateOrAssigned(grantsPublicty.getSn())
                            .includeProcessVariables()
                            .list();
                    for (Task task : tasks) {
                        Map<String, Object> processVariables = task.getProcessVariables();
                        GrantsCheckResultDto checkResult = (GrantsCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
                        checkResult.setCollegePublicityPass(1);
                        taskService.setVariable(task.getId(), EGrantsVariable.CHECK_RESULT.getVariable(), checkResult);
                        taskService.complete(task.getId());
                    }
                    grantsCommonMapper.updateCollegeToSchool(grantsPublicty.getId());
                    log.info("学院"+grantsPublicty.getCollegeId() +"提交到学校审核了，！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！");
                }
                continue;
            }else if (grantsPublicty.getStart() == 0 && grantsPublicty.getCommit() == 0){//未开始审核 并且 未提交到学校公示
                Long start = grantsPublicty.getStartTime().getTime();
                if (nowLong >= start ) {
                    log.info("开始学院公示_________________" + grantsPublicty.getCollegeId());
                    //提交到学院公示
                    List<Task> tasks = taskService.createTaskQuery()
                            .taskCandidateOrAssigned(grantsPublicty.getSn())
                            .includeProcessVariables()
                            .list();
                    for (Task task : tasks) {
                        Map<String, Object> processVariables = task.getProcessVariables();
                        GrantsCheckResultDto checkResult = (GrantsCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
                        checkResult.setCollegePass(1);
                        checkResult.setCollegePublicityResult(checkResult.getCollegeResult());
                        taskService.setVariable(task.getId(), EGrantsVariable.CHECK_RESULT.getVariable(), checkResult);
                        taskService.complete(task.getId());
                    }
                    log.info("学院" + grantsPublicty.getCollegeId() +"完成了自动提交到学院公示的任务");
                    grantsCommonMapper.updateCollegePublicityIsStart(grantsPublicty.getId());
                } else {
                    throw new PersonalException(EStringConstant.EXCEPTION_NULLPOINT.getValue());
                }
            }
        }
        log.info("公示结束<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    }

//    @Scheduled(fixedRate = 1000 * 20)
    @Async
    public void schoolPublicity() throws Exception {
        log.info("学校_________________审核开始。");
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        List<GrantsPublicity> publicities = grantsCommonMapper.listPublicityTime(currentGrantsUuid,"学校公示");
        Date now = new Date();
        String nowStr = format.format(now);
        Long nowLong = format.parse(nowStr).getTime();
        for (GrantsPublicity grantsPublicty : publicities) {
            if (grantsPublicty.getStart() == 1 && grantsPublicty.getCommit() == 0) {//开始审核并且未提交到认定完成
                Long end = grantsPublicty.getEndTime().getTime();
                if (nowLong >= end){
                    List<Task> tasks = taskService.createTaskQuery()
                            .taskCandidateOrAssigned(grantsPublicty.getSn())
                            .includeProcessVariables()
                            .list();
                    for (Task task : tasks) {
                        Map<String, Object> processVariables = task.getProcessVariables();
                        GrantsCheckResultDto checkResult = (GrantsCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
                        checkResult.setSchoolPublicityPass(1);
                        if (checkResult.getSchoolResult() == null && checkResult.getSchoolPass() == null){
                            throw new PersonalException("请完成学校审核之前的任务");
                        }
                        checkResult.setSchoolPublicityResult(checkResult.getSchoolResult());
                        taskService.setVariable(task.getId(), EGrantsVariable.CHECK_RESULT.getVariable(), checkResult);
                        taskService.complete(task.getId());
                    }
                    grantsCommonMapper.updateCollegeToSchool(grantsPublicty.getId());
                    log.info("学校_________________公示结束了，提交到认定完成。");
                }
                continue;
            }else if (grantsPublicty.getStart() == 0 & grantsPublicty.getCommit() == 0){//从学校审核提交到学校公示
                Long start = grantsPublicty.getStartTime().getTime();
                if (nowLong >= start  ) {
                    //提交到学校公示
                    List<Task> tasks = taskService.createTaskQuery()
                            .taskCandidateOrAssigned(grantsPublicty.getSn())
                            .includeProcessVariables()
                            .list();
                    for (Task task : tasks) {
                        Map<String, Object> processVariables = task.getProcessVariables();
                        GrantsCheckResultDto checkResult = (GrantsCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
                        checkResult.setSchoolPass(1);
                        checkResult.setSchoolResult(checkResult.getCollegePublicityResult());
                        taskService.setVariable(task.getId(), EGrantsVariable.CHECK_RESULT.getVariable(), checkResult);
                        taskService.complete(task.getId());
                    }
                    log.info("学校_________________" + grantsPublicty.getSn() +"完成了自动提交到学校公示的任务");
                    grantsCommonMapper.updateCollegePublicityIsStart(grantsPublicty.getId());
                } else {
                    throw new PersonalException(EStringConstant.EXCEPTION_NULLPOINT.getValue());
                }
            }
        }
        log.info("学校_________________结束");
    }
}
