package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsListDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsUpdateDto;
import com.xdbigdata.subsidize_zjut.domain.Grants;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 学校用户Mapper
 * Created by Administrator on 2017/5/24.
 */
@Mapper
public interface GrantsSchoolMapper {

    /**
     * 添加助学金
     * @param grants
     */
    void saveGrants(Grants grants);

    /**
     * 助学金列表
     * @return
     */
    List<GrantsListDto> listGrants();

    /**
     * 修改助学金
     * @param grants
     */
    void updateGrants(GrantsUpdateDto grants);

    /**
     * 删除助学金
     * @param id
     */
    void deleteGrantsById(Long id);


    /**
     * 获取助学金学校给学院的配置
     * @param grantsId
     * @return
     */
    GrantsConfigDto findCollegeConfigByGrantsId(Long grantsId);

    /**
     * 保存学校分配名额到学院
     *
     * @param configDto
     */
    void saveCollegeConfig(GrantsConfigDto configDto);

    /**
     * 更新学校分配名额
     * @param configDto
     */
    void updateCollegeConfig(GrantsConfigDto configDto);

    /**
     * 处理学院新申请的名额
     * @param pass
     * @param id
     */
    void dealNewApply(@Param("pass") Integer pass, @Param("id") Long id);

    /**
     * 更新其他助学金的公共信息
     * @param grants
     */
    void updateOtherGrantsCommonInfo(GrantsUpdateDto grants);

    /**
     * 查找助学金可分配名额
     * @param grantsId
     * @return
     */
    Long findDistributeAllotByGrantsId(Long grantsId);

    /**
     * 统计当前学年贫困认定人数
     * @param currentSchoolYear
     * @return
     */
    Long countCurrentSchoolYearPovertyNum(String currentSchoolYear);
}
