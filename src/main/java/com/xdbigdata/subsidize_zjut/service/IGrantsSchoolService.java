package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsListDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsUpdateDto;
import com.xdbigdata.subsidize_zjut.domain.Grants;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/5/24.
 */
public interface IGrantsSchoolService {

    /**
     * 助学金学生人数信息：学校总人数 +已经认定经济困难人数
     * @return
     */
    Map findstudentNumInfo() throws Exception;

    /**
     * 助学金保存
     * @param grants
     * @return
     */
    String saveGrants(Grants grants) throws Exception;

    /**
     * 助学金列表
     * @return
     */
    List<GrantsListDto> listGrants() throws Exception;

    /**
     * 修改助学金
     * @param grants
     */
    void updateGrants(GrantsUpdateDto grants) throws Exception;


    /**
     * 删除助学金
     * @param id
     */
    void deleteGrantsById(Long id) throws Exception;

    /**
     * 获取助学金学校给学院的配置
     * @param grantsId
     * @return
     */
    GrantsConfigDto findCollegeConfigByGrantsId(Long grantsId) throws Exception;


    /**
     * 保存学校分配名额到学院
     * @param configDto
     */
    void saveOrUpdateCollegeConfig(GrantsConfigDto configDto);

    /**
     * 处理申请的新名额
     * @param pass
     * @param id
     */
    void dealNewApply(Integer pass, Long id);
}
