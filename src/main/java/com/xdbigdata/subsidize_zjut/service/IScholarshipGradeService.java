package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipGradeGto;
import com.xdbigdata.subsidize_zjut.domain.Scholarship2Grade;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/6/7 0007.
 */
public interface IScholarshipGradeService {
    /**
     * 保存/修改 学院分配名额到年级
     */
    void saveOrUpdateGradeConfig(ScholarshipGradeGto scholarshipGradeGto) throws Exception;

    /**
     * 列举配置了名额的年级信息
     * @return
     */
    ScholarshipGradeGto listGradeconfig() throws Exception;


    /**
     * 根据学院id和年级获取配置
     * @param map
     * @return
     *//*
    Scholarship2Grade getByCollegeIDAndGrade(Map map);*/

}
