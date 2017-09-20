package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsHistoryDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.InspirationalScholarship;
import com.xdbigdata.subsidize_zjut.domain.HistoryResult;

import java.util.List;

/**
 * Created by sky on 2017/5/23.
 */
public interface SubsidizeHistoryService {
    /**
     * 查询特定用户下的特定年级的学生困难认定记录
     * @param sessionUserDto
     * @param gradeName
     * @return
     * @throws Exception
     */
    List<HistoryResult> findPovertyHistoryByCondition(SessionUserDto sessionUserDto, String collegeName, String gradeName) throws Exception;

    /**
     * 查询助学金记录
     * @param sessionUserDto 登录用户
     * @param collegeName 学院名称
     * @param gradeName 年级名称
     * @return
     * @throws Exception
     */
    List<GrantsHistoryDto> findGrantsHistoryByCondition(SessionUserDto sessionUserDto, String collegeName, String gradeName) throws Exception;

    /**
     * 查询励志奖学金记录
     * @param sessionUserDto 登录用户
     * @param collegeName 学院名称
     * @param gradeName 年级名称
     * @return
     * @throws Exception
     */
    List<InspirationalScholarship> findInspirationalScholarship(SessionUserDto sessionUserDto, String collegeName, String gradeName) throws Exception;
}
