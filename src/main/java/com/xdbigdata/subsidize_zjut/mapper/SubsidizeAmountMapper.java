package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.DataAmountQueryCondititonDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by sky on 2017/6/6.
 */
@Mapper
public interface SubsidizeAmountMapper {
    /**
     * 统计资助总数人
     * @param dataAmountQueryCondititonDto
     * @param studentSns
     * @return
     */
    Integer countSubsidizeNumber(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                 @Param("studentSns") List<String> studentSns);

    /**
     * 统计资助总金额
     * @param dataAmountQueryCondititonDto
     * @param studentSns
     * @return
     */
    BigDecimal countSubsidizeMoney(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                   @Param("studentSns") List<String> studentSns);
}
