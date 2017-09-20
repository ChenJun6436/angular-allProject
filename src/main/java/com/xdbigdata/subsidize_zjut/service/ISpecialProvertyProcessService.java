package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;

import java.util.List;

/**
 * Created by tangyijun on 2017/4/26.
 * good good study,day day up!
 */
public interface ISpecialProvertyProcessService {
    /**
     * 开启流程并且提交资料
     */
    void startAndCommit(String cardNum,String precatoryStudentId,String reason) throws Exception;

    /**
     * 审核列表
     */
    List<PovertyApplyDto> AuditList() throws Exception;

    /**
     * 辅导员审核
     */
    void advisorAudit(String taskId,String isAgree) throws Exception;

    /**
     * 学院审核
     */
    void collegeAudit(String taskId,String isAgree) throws Exception;

    /**
     * 学校审核
     */
    void schoolAudit(String taskId,String isAgree) throws Exception;

    /**
     * 当前用户完成任务
     * @throws Exception
     */
     void finishTask(String result) throws Exception;

    /**
     * 查询当前用户的执行步骤
     * @return
     * @throws Exception
     */
     PovertyApplyDto showCurrent()  throws Exception;

}
