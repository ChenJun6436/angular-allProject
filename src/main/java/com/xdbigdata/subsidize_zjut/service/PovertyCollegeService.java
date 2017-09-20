package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.jwtService.domain.Instructor;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.StartProcessDto;
import com.xdbigdata.subsidize_zjut.domain.Dissent;

import java.util.List;

/**
 * Created by staunch on 2017/4/11.
 */
public interface PovertyCollegeService {

    /**
     * 查看公示异议
     * @param sn
     * @return
     */
    List<Dissent> viewOpenDissent(String sn, SessionUserDto sessionUserDto)throws Exception;

    /**
     * 查看公示异议（学校）
     * @param sn
     * @return
     */
    List<Dissent> viewOpenDissentSchool(String sn)throws Exception;

    /**
     * 处理公示异议
     * @param dissent
     */
    void dealOpenDissent(Dissent dissent);

    /**
     * 获取当前用户下所有的辅导员
     * @return
     * @throws Exception
     */
    List<Instructor> listAdvisors() throws Exception;

    /**
     * 取消认定
     * @param startProcessDto
     */
    void cancelApply(StartProcessDto startProcessDto);

    /**
     * 学院用户补录申请
     * @param studentId
     * @throws Exception
     */
    void addApply(String studentId, String level)throws Exception;
}
