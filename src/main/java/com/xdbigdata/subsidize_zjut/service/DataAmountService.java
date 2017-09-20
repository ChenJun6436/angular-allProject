package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

/**
 * Created by sky on 2017/5/26.
 */
public interface DataAmountService {
    /**
     * 根据登录用户权限和条件查询经济困难总人数
     * @param sessionUserDto 登录用户
     * @param dataAmountQueryCondititonDto 查询条件实体对象
     * @return
     */
    Integer countPovertyByConditionAndUser(SessionUserDto sessionUserDto, DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception;

    /**
     *根据登录用户权限和条件分组查询各等级经济困难人数
     * @param sessionUserDto 登录用户
     * @param dataAmountQueryCondititonDto 查询条件实体对象
     * @return
     */
    List<PovertyHistoryCountDto> countPovertyGroupByLevelAndByCondition(SessionUserDto sessionUserDto, DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception;

    /**
     * 统计用户权限和条件内的五类生总人数
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    Integer countFiveKindsOfStudent(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception;

    /**
     * 统计用户权限和条件内的残疾生
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    Integer countDisability(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception;

    /**
     * 统计用户权限和条件内的低保家庭
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    Integer countLowField(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception;

    /**
     * 统计用户权限和条件内的烈士家庭
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    Integer countMartyr(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception;

    /**
     * 统计用户权限和条件内的孤儿
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    Integer countOrphan(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception;

    /**
     * 统计用户权限和条件内的农村五保户
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    Integer countRuralInfirm(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception;

    /**
     * 分别统计五类生数量及五类生总数
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    List<FiveKindsStudentCountDto> countPovertyGroupByKindAndByCondition(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                                         SessionUserDto sessionUserDto) throws Exception;

    /**
     * 省内省外分组统计
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    Map<String, Integer> countPovertyGroupByIsZhejiang(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                       SessionUserDto sessionUserDto) throws Exception;

    /**
     * 省外排序（倒序）
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    List<PovertySort> notInProvinceSortDesc(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                         SessionUserDto sessionUserDto) throws Exception;

    /**
     * 省内排序（倒序）
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    List<PovertySort> inProvinceSortDesc(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                      SessionUserDto sessionUserDto) throws Exception;

    /**
     * 困难生户籍 城镇VS农村
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    Map<String, Integer> countPovertyGroupByResidenceType(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                          SessionUserDto sessionUserDto) throws Exception;

    /**
     * 统计资助总人数
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    Integer countSubsidizeTotalNumber(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                      SessionUserDto sessionUserDto) throws Exception;

    /**
     * 统计资助总金额
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    BigDecimal countSubsidizeTotalMoney(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                        SessionUserDto sessionUserDto) throws Exception;

    /**
     * 根据资助分类分组统计人数和金额
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     */
    List<SubsidizeGroupLevelDto> countNumberAndMoneyGroupByLevel(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                                 SessionUserDto sessionUserDto) throws Exception;

    /**
     * 获取助学贷款总人数及总金额
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     * @throws Exception
     */
    SubsidizeGroupLevelDto countLoanNumberAndMoney(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                   SessionUserDto sessionUserDto) throws Exception;
}
