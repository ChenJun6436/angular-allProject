package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.DataAmountQueryCondititonDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsHistoryDto;
import com.xdbigdata.subsidize_zjut.common.dto.SubsidizeGroupLevelDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sky on 2017/5/25.
 */
@Mapper
public interface GrantsHistoryMapper {

    /**
     * 查询助学金记录
     * @param collegeName 学院名称
     * @param gradeName 年级名称
     * @param studentSns 所属学生学号列表
     * @return
     */
    List<GrantsHistoryDto> findByConditionAndInList(@Param("collegeName") String collegeName, @Param("gradeName") String gradeName,
                                                    @Param("studentSns") List<String> studentSns);

    /**
     * 统计获得助学金的总人数
     * @param dataAmountQueryCondititonDto
     * @param studentSns
     * @return
     */
    Integer countAllAcquireGrants(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                            @Param("studentSns") List<String> studentSns);

    /**
     * 统计不同级别的助学金人数和金额
     * @param dataAmountQueryCondititonDto
     * @param studentSns
     * @return
     */
    List<SubsidizeGroupLevelDto> countGroupByLevel(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                   @Param("studentSns") List<String> studentSns);
}
