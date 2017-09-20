package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.DataAmountQueryCondititonDto;
import com.xdbigdata.subsidize_zjut.common.dto.PovertyHistoryCountDto;
import com.xdbigdata.subsidize_zjut.domain.HistoryResult;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sky on 2017/5/23.
 */
@Mapper
public interface PovertyHistoryMapper {
    /**
     * 查询特定年级和特定学号列表中的困难认定记录
     * @param studentSns
     * @return
     */
    List<HistoryResult> findByStudentSnInList(@Param("gradeName") String gradeName,
                                              @Param("collegeName") String collegeName,
                                              @Param("studentSns") List<String> studentSns);

    /**
     * 查询经济困难学生总人数
     * @param dataAmountQueryCondititonDto
     * @return
     */
    Integer countByCondition(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                             @Param("studentSns") List<String> studentSns);

    /**
     * 根据困难等级分组统计
     * @param dataAmountQueryCondititonDto
     * @return
     */
    List<PovertyHistoryCountDto> countGroupByPovertyLevelAndByCondition(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                                        @Param("studentSns") List<String> studentSns);

    /**
     * 五类生总数
     * @return
     */
    Integer countFiveKindsOfStudent(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                    @Param("studentSns") List<String> studentSns);

    /**
     * 统计残疾生
     * @return
     */
    Integer countDisability(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                            @Param("studentSns") List<String> studentSns);

    /**
     * 统计低保家庭
     * @return
     */
    Integer countLowField(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                          @Param("studentSns") List<String> studentSns);

    /**
     * 统计烈士家庭
     * @return
     */
    Integer countMartyr(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                        @Param("studentSns") List<String> studentSns);

    /**
     * 统计农村五保户
     * @return
     */
    Integer countRuralInfirm(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                             @Param("studentSns") List<String> studentSns);

    /**
     * 统计孤儿
     * @return
     */
    Integer countOrphan(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                        @Param("studentSns") List<String> studentSns);

    /**
     * 获取学生学号列表
     * @param dataAmountQueryCondititonDto
     * @param studentSns
     * @return
     */
    List<String> findStudentSnByInList(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                       @Param("studentSns") List<String> studentSns);
}
