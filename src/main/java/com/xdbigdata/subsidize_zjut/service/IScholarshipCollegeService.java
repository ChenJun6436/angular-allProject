package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipCollegeDto;
import com.xdbigdata.subsidize_zjut.domain.Grants;
import com.xdbigdata.subsidize_zjut.domain.Scholarship;
import com.xdbigdata.subsidize_zjut.domain.Scholarship2College;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/6/6 0006.
 */
public interface IScholarshipCollegeService {
    /**
     * 保存学校分配名额到学院
     * @param configDto
     */
    void saveOrUpdateCollegeConfig(ScholarshipCollegeDto configDto);

    /**
     * 获取奖学金对学院的配置
     * @return
     */
    ScholarshipCollegeDto getCollegeApplyConfig();

    /**
     * 根据学年获取组学金列表
     * @param schoolYear
     * @return
     */
    List<Map> listGrantsBySchoolYear(String schoolYear);

    /**
     * 根据学院id获取学院配置信息
     * @param collegeId
     */
    Scholarship2College getScholarshipByCollegeId(Long collegeId);

    /**
     * 新增国家励志奖学金
     * @param scholarship
     */
    void saveScholarship(Scholarship scholarship);

}
