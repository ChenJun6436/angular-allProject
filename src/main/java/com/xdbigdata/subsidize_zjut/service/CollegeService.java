package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.jwtService.domain.PrimaryTeachingInstitution;
import com.xdbigdata.jwtService.domain.User;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;

import java.util.List;

/**
 * Created by sky on 2017/5/24.
 */
public interface CollegeService {
    /**
     * 查询用户学院，如果是学校用户查询所有学院
     * @return
     */
    List<PrimaryTeachingInstitution> findCollegeByUser(SessionUserDto sessionUserDto) throws Exception;
}
