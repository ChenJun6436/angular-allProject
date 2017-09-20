package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsCollegeConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsListDto;

import java.util.List;

/**
 * 助学金学院接口
 * Created by Administrator on 2017/5/25.
 */
public interface IGrantsCollegeService {

    /**
     * 保存学院申请名额
     * @param grantsId
     * @param applyQuota
     */
    void saveApplyQuota(Integer grantsId, Integer applyQuota) throws Exception;

    /**
     * 获取学院配置
     * @param grantsId
     * @return
     */
    GrantsCollegeConfigDto findGradeConfig(Long grantsId) throws Exception;

    /**
     * 保存学院配置
     */
    void saveGradeConfig(GrantsCollegeConfigDto collegeConfig);

    /**
     * 保存学院退回的名额
     * @param grantsId
     * @param quotas
     */
    void updateReturnQuotas2School(Integer grantsId, Integer quotas) throws Exception;

    /**
     * 获取学院有权配置的助学金
     * @return
     * @throws Exception
     */
    List<GrantsListDto> listGrants() throws Exception;

    /**
     * 配置预留名额
     * @param grantsId
     * @param allot
     */
    void saveObligateAllot(Long grantsId,Long allot) throws Exception;

    /**
     * 判断学校是否能直接提交任务到学校审核
     * @return
     */
    String isCollegeCanCommit2School() throws Exception;
}
