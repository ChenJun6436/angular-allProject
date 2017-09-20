package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.DataAmountQueryCondititonDto;
import com.xdbigdata.subsidize_zjut.common.dto.SubsidizeGroupLevelDto;
import com.xdbigdata.subsidize_zjut.domain.TemporarySubsidize;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sky on 2017/5/12.
 */
@Mapper
public interface TemporarySubsidizeMapper {
    /**
     * 单个新增
     * @param temporarySubsidize
     * @return
     */
    public int insert(@Param("temporarySubsidize") TemporarySubsidize temporarySubsidize);

    /**
     * 批量新增
     * @param temporarySubsidizeList
     * @return
     */
    public int insertBatch(@Param("temporarySubsidizeList") List<TemporarySubsidize> temporarySubsidizeList);

    /**
     * 查询特定学生列表中的临时补助名单
     * @param studentSns
     * @return
     */
    public List<TemporarySubsidize> findAllSnsInList(@Param("studentSns") List<String> studentSns);

    /**
     * 修改临时单个困难补助记录
     * @param temporarySubsidize
     * @return
     */
    public int update(@Param("temporarySubsidize") TemporarySubsidize temporarySubsidize);

    /**
     * 删除单个困难补助记录
     * @param id
     * @return
     */
    public int delete(Long id);

    /**
     * 统计临时困难补助的人数和金额
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
    int deleteBatch(@Param("ids") List<Long> ids);
}
