package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.domain.Grants;
import com.xdbigdata.subsidize_zjut.domain.Scholarship2College;
import com.xdbigdata.subsidize_zjut.domain.ScholarshipConditions;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by Administrator on 2017/6/6 0006.
 */
@Mapper
public interface ScholarshipConditionsMapper {
    /**
     * 保存奖学金申请条件
     *
     */
    void saveApplyQuota(ScholarshipConditions scholarshipConditions);

    /**
     * 获取奖学金申请条件
     * @return
     */
    ScholarshipConditions getScholarshipConditions();

    /**
     * 修改获取奖学金申请条件
     * @param scholarshipConditions
     */
    void updateScholarshipConditions(ScholarshipConditions scholarshipConditions);
}
