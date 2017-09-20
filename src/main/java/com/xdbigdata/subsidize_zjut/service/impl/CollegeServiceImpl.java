package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.PrimaryTeachingInstitution;
import com.xdbigdata.jwtService.domain.User;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.service.CollegeService;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by sky on 2017/5/24.
 */
@Service
public class CollegeServiceImpl implements CollegeService {
    @Autowired
    private JWTRemoteService jwtRemoteService;
    @Override
    public List<PrimaryTeachingInstitution> findCollegeByUser(SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        return jwtRemoteService.findCollegeByUser(user);
    }
}
