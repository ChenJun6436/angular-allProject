package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.DataAmountQueryCondititonDto;
import com.xdbigdata.subsidize_zjut.common.dto.SubsidizeGroupLevelDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sky on 2017/6/7.
 */
@Mapper
public interface AllowanceHistoryMapper {
    /**
     * 统计特别困难补助的人数和金额
     * @param dataAmountQueryCondititonDto
     * @param studentSns
     * @return
     */
    SubsidizeGroupLevelDto countNumberAndMoney(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                     @Param("studentSns") List<String> studentSns);
}
