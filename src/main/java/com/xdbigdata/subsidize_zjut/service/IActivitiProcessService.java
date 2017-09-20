package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.StartProcessDto;
import org.activiti.engine.task.Task;

import java.util.List;
import java.util.Map;

/**
 * Created by tangyijun on 2017/4/26.
 * good good study,day day up!
 */
public interface IActivitiProcessService {
    /**
     *把学生的管理用户设置到学生StratProcessDto中
     * @param studentId 学生学号
     * @return
     * @throws Exception
     */
     StartProcessDto getStudentLeader(String studentId) throws Exception;


    /**
     * 第一次开启任务，并且完成任务
     * @param studentId 学生学号
     * @param processId 流程id
     * @param processVariables 第一完成任务后传入的流程变量
     * @throws Exception
     */
    void startProcess(String studentId,String processId,Map<String,Object> processVariables) throws Exception;

    /**
     * 找到当前学生的任务
     * @param StudentId
     * @return
     * @throws Exception
     */
    List<Task> findTask(String StudentId) throws Exception;

    /**
     * 完成任务，并且把流程变量设置进去
     * @param taskId
     * @param variables
     */
    void completeTask(String taskId,Map<String,Object> variables) ;

    /**
     * 完成任务，不设置流程变量
     * @param taskId
     */
    void completeTask(String taskId) ;


}
