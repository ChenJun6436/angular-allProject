package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.DataAmountQueryCondititonDto;
import com.xdbigdata.subsidize_zjut.common.dto.SubsidizeGroupLevelDto;
import com.xdbigdata.subsidize_zjut.domain.JoinArmySubsidize;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sky on 2017/5/12.
 */
@Mapper
public interface JoinArmySubsidizeMapper {
    /**
     * 单个新增
     * @param joinArmySubsidize
     * @return
     */
    public int insert(@Param("joinArmySubsidize") JoinArmySubsidize joinArmySubsidize);

    /**
     * 批量新增
     * @param joinArmySubsidizeList
     * @return
     */
    public int insertBatch(@Param("joinArmySubsidizeList") List<JoinArmySubsidize> joinArmySubsidizeList);

    /**
     * 查询特定学生列表中的入伍补助名单
     * @param studentSns
     * @return
     */
    public List<JoinArmySubsidize> findAllSnsInList(@Param("studentSns") List<String> studentSns);

    /**
     * 更新单个入伍补助
     * @param joinArmySubsidize
     * @return
     */
    public int update(@Param("joinArmySubsidize") JoinArmySubsidize joinArmySubsidize);

    /**
     * 删除单个入伍补助
     * @param id
     * @return
     */
    public int delete(Long id);

    /**
     * 统计入伍补助的人数和金额
     * @param dataAmountQueryCondititonDto
     * @param studentSns
     * @return
     */
    SubsidizeGroupLevelDto countNumberAndMoney(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                     @Param("studentSns") List<String> studentSns);

    /**
     * 批量删除
     * @param ids
     * @return
     */
    public int deleteBatch(@Param("ids") List<Long> ids);
}
