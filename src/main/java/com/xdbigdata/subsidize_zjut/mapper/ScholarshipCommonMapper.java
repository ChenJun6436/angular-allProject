package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsAmountDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsDissentResponseDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsNameWithLevelDto;
import com.xdbigdata.subsidize_zjut.domain.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/5/24.
 */
@Mapper
public interface ScholarshipCommonMapper {

    /**
     * 保存学生异议
     *
     * @param grantsDissent
     */
    void saveCommitDissent(GrantsDissent grantsDissent);

    /**
     * 处理异议
     *
     * @param responseDto
     */
    void saveDissentDealInfo(GrantsDissentResponseDto responseDto);

    /**
     * 用于判断当前阶段是否在 学院/学校 公示阶段
     *
     * @param scholarshipId
     * @param stage
     * @return
     */
    Long countPublicityTimeByStage(@Param("scholarshipId") String scholarshipId, @Param("stage") String stage);


    /**
     * 保存学院公示时间配置
     *
     * @param scholarshipPublicity
     */
    void savePublicityTimeConfig(ScholarshipPublicity scholarshipPublicity);

    /**
     * 更新学院公示时间配置
     *
     * @param scholarshipPublicity
     */
    void updatePublicityTimeConfig(ScholarshipPublicity scholarshipPublicity);

    /**
     * 查找之前的时间配置
     *
     * @param id
    ScholarshipPublicity findPublicityTimeConfigById(Long id);*/


    /**
     * 查找公示异议列表
     *
     * @param query
     */
    /*void listScholarshipDissent(Map query);*/

    /**
     * 获取公示时间配置
     * @param scholarshipId
     * @param stage
     * @return
     */
    GrantsPublicity findGrantsPublicityTimeConfig(@Param("scholarshipId") String scholarshipId, @Param("stage") String stage);

    /**
     * 是否配置公示时间
     * @param stage
     * @return
     *//*
    Long countPublicityTimeConfig(@Param("scholarshipId") String scholarshipId,@Param("stage") String stage);*/

}
