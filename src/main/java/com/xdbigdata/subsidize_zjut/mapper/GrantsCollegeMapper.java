package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsCollegeConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsListDto;
import com.xdbigdata.subsidize_zjut.domain.Grants2Classes;
import com.xdbigdata.subsidize_zjut.domain.Grants2Grade;
import com.xdbigdata.subsidize_zjut.domain.Grants2Major;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by Administrator on 2017/5/25.
 */
@Mapper
public interface GrantsCollegeMapper {

    /**
     * 保存学院用户申请名额
     * @param grantsId
     * @param applyNum
     * @param collegeId
     */
    void saveApplyQuota(@Param("grantsId") Integer grantsId, @Param("applyNum") Integer applyNum, @Param("collegeId") Long collegeId);

    /**
     *保存学院用户退回的名额
     * @param grantsId
     * @param quotas
     */
    void updateReturnQuotas2School(@Param("grantsId") Integer grantsId,@Param("quotas") Integer quotas,@Param("collegeId")Long collegeId);

    /**
     * 获取学院用户配置列表
     * @param grantsId
     * @param collegeId
     * @return
     */
    GrantsCollegeConfigDto findGradeConfig(@Param("grantsId") Long grantsId, @Param("collegeId") Long collegeId);

    /**
     * 保存名额到年级
     * @param grants2Grade
     */
    void saveQuota2Grade(Grants2Grade grants2Grade);

    /**
     * 保存名额到专业
     * @param grants2Major
     */
    void saveQuota2Major(Grants2Major grants2Major);

    /**
     * 保存名额到班级
     * @param grants2Classes
     */
    void saveQuota2Classes(Grants2Classes grants2Classes);

    /**
     * 更新名额到年级
     * @param grants2Grade
     */
    void updateQuota2Grade(Grants2Grade grants2Grade);

    /**
     * 更新名额到专业
     * @param grants2Major
     */
    void updateQuota2Major(Grants2Major grants2Major);

    /**
     * 更新名额到班级
     * @param grants2Classes
     */
    void updateQuota2Classes(Grants2Classes grants2Classes);


    /**
     * 保存学院自己的预留名额
     * @param collegeId
     * @param grantsId
     * @param allot
     */
    void saveObligateAllot(@Param("collegeId") Long collegeId,@Param("grantsId") Long grantsId, @Param("allot") Long allot);

    /**
     * 查找学院有权分配的助学金列表
     * @param collegeId
     */
    List<GrantsListDto> listAuthGrants(Long collegeId);
}