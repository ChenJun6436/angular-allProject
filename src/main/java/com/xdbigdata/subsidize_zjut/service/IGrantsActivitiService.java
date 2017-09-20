package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.domain.GrantsApply;

import java.util.List;
import java.util.Map;

/**
 * 助学金流程相关操作
 * Created by Administrator on 2017/5/26.
 */
public interface IGrantsActivitiService {

    /**
     * 学生开启流程
     * @param grantsApply
     */
    void startGrantsProcess(GrantsApply grantsApply) throws Exception;

    /**
     * 驳回材料
     * @param rejectDto
     */
    void rejectTasks(GrantsRejectDto rejectDto) throws Exception;

    /**
     * 更新学生申请助学金等级
     * @param updateLevelDto
     */
    void updateGrantsLevel(GrantsUpdateLevelDto updateLevelDto) throws Exception;

    /**
     * 依据当前登录用户查找用户的任务
     * @return
     */
    List<GrantsCheckResultDto> listTasks() throws Exception;

    /**
     * 提交任务，转交下一步
     * @param stage
     */
    void commitTasks(String stage) throws Exception;

    /**
     * 查找学生助学金申请进度
     * @param grants
     * @return
     */
    GrantsDto findStudentApplyStatus(GrantsDto grants, Student student) throws Exception;

    /**
     * 查看公示记录
     * @return
     */
    GrantsPublicityDto listPublicityResult() throws Exception;

    /**
     * 重新提交材料
     * @param grantsRecommitDto
     */
    void recommitMaterial(GrantsRecommitDto grantsRecommitDto);
//
//    /**
//     * 获取当前阶段和下一阶段
//     * @return
//     */
//    Map<String,Object> findCurrentStageAndNextStage() throws Exception;

    /**
     * 依据流程进行状态下载名单
     * @param stage
     * @return
     */
    List<GrantsDownloadNameListDto> findDownloadNameListDataByStage(String stage) throws Exception;

    /**
     * 审核被驳回的材料
     * @param taskId
     */
    void checkMaterial(String taskId,Integer pass);

    /**
     * 完成助学金认定
     */
    void finishGrants() throws Exception;
}
