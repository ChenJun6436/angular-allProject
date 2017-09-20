package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.User;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsHistoryDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.InspirationalScholarship;
import com.xdbigdata.subsidize_zjut.domain.HistoryResult;
import com.xdbigdata.subsidize_zjut.mapper.GrantsHistoryMapper;
import com.xdbigdata.subsidize_zjut.mapper.InspirationalScholarshipMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertyHistoryMapper;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import com.xdbigdata.subsidize_zjut.service.SubsidizeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by sky on 2017/5/23.
 */
@Service
public class SubsidizeHistoryServiceImpl implements SubsidizeHistoryService {
    @Autowired
    private PovertyHistoryMapper povertyHistoryMapper;
    @Autowired
    private JWTRemoteService jwtRemoteService;
    @Autowired
    private GrantsHistoryMapper grantsHistoryMapper;
    @Autowired
    private InspirationalScholarshipMapper inspirationalScholarshipMapper;

    @Override
    public List<HistoryResult> findPovertyHistoryByCondition(SessionUserDto sessionUserDto, String collegeName, String gradeName) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        List<HistoryResult> povertyHistories = povertyHistoryMapper.findByStudentSnInList(gradeName, collegeName, studentSns);
        return povertyHistories;
    }

    @Override
    public List<GrantsHistoryDto> findGrantsHistoryByCondition(SessionUserDto sessionUserDto, String collegeName, String gradeName) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        List<GrantsHistoryDto> grantsHistoryDtos = grantsHistoryMapper.findByConditionAndInList(collegeName, gradeName, studentSns);
        return grantsHistoryDtos;
    }

    @Override
    public List<InspirationalScholarship> findInspirationalScholarship(SessionUserDto sessionUserDto, String collegeName, String gradeName) throws Exception {
        User user = new User();
        user.setType(sessionUserDto.getUserType());
        user.setSn(sessionUserDto.getUserName());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return inspirationalScholarshipMapper.findByConditionAndInList(collegeName, gradeName, studentSns);
    }
}
