package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.domain.GrantsApply;

import java.util.List;

/**
 * Created by Administrator on 2017/6/7 0007.
 * 奖学金申请相关流程
 */
public interface IScholarshipActivitiService {
    /**
     * 学生开启流程
     * @param scholarshipApplyMaterialDto
     */
    void startScholarshipApplyProcess(ScholarshipApplyMaterialDto scholarshipApplyMaterialDto) throws Exception;


    /**
     * 依据当前登录用户查找用户的任务
     * @return
     */
    List<ScholarshipCheckResultDto> listTasks() throws Exception;

    /**
     * 提交任务，转交下一步
     * @param stage
     */
    void commitTasks(String stage) throws Exception;

    /**
     *
     */
    void updateApplyTask(String taskId,Integer passStatus) throws Exception;


    /**
     * 查看公示记录
     * @return
     */
    ScholarshipPublicityDto listPublicityResult() throws Exception;
}
