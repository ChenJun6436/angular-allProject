package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipCollegeDto;
import com.xdbigdata.subsidize_zjut.domain.Scholarship2College;
import com.xdbigdata.subsidize_zjut.domain.ScholarshipConditions;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * Created by Administrator on 2017/6/6 0006.
 */
@Mapper
public interface ScholarshipCollegeMapper {

    /**
     * 保存学院用户申请名额和条件
     */
    void saveCollegeConfig(ScholarshipCollegeDto scholarshipCollegeDto);


    /**
     * 获取学院用户配置列表
     * @param collegeId
     * @return
     */
    Scholarship2College findScholarshipConfig(@Param("collegeId") Long collegeId);


    /**
     * 修改学院申请人数
     * @param
     */
    void updateScholarshipCollege(ScholarshipCollegeDto scholarshipCollegeDto);

    /**
     * 根据学院id获取学院配置信息
     * @param collegeId
     */
    Scholarship2College getScholarshipByCollegeId(Long collegeId);
}
