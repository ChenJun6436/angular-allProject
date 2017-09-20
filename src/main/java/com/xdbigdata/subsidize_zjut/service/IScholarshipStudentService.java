package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsRecommitDto;
import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipApplyMaterialDto;
import com.xdbigdata.subsidize_zjut.domain.Awards;
import com.xdbigdata.subsidize_zjut.domain.StudentInfo;

/**
 * Created by Administrator on 2017/6/7 0007.
 * 学生申请奖学金业务
 */
public interface IScholarshipStudentService {
    /**
     * 添加奖学金申请资料
     * @param scholarshipApplyMaterialDto
     */
    void saveOrUpdateApplyMaterial(ScholarshipApplyMaterialDto scholarshipApplyMaterialDto) throws Exception;

    /**
     * 删除获奖信息
     * @param id
     */
    public void deleteAwardsById(Long id);

    /**
     * 获取申请奖学金条件
     * @return
     */
    Object getScholarshipConditions();

    StudentInfo getStudentInfoById();

    /**
     * 保存获奖信息
     * @param awards
     */
    void saveAwards(Awards awards);
}
