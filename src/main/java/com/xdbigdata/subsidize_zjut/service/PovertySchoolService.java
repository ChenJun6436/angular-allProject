package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.jwtService.domain.CollegeUser;
import com.xdbigdata.subsidize_zjut.common.dto.para.ReviewStudentLevelDto;
import com.xdbigdata.subsidize_zjut.domain.*;

import java.util.List;

/**
 * Created by staunch on 2017/4/11.
 */
public interface PovertySchoolService {
    /**
     * 新增公告
     * @param notice
     */
     void saveNotice(Notice notice);

    /**
     * 驳回到学院审核
     * @param reviewStudentLevelDtos
     * @throws Exception
     */
    void reject2College(List<ReviewStudentLevelDto> reviewStudentLevelDtos)throws Exception;

    /**
     * 更新流程时间
     * @param povertyProcess
     */
    void saveProcess(PovertyProcess povertyProcess);

    /**
     * 获取流程时间
     * @return
     */
    PovertyProcess getProcessTime();

    Boolean validateProcess();

    List<CollegeUser> listCollegeUsers()throws Exception;

    /**
     * 获取公告未发布前的附件列表
     * @return
     */
    List<PovertyAttachment> listNoticeFiles();

    /**
     * 学校删除公告
     * @param id
     */
    void removeNotice(Integer id);

    /**
     * 查看操作记录
     * @param type
     * @return
     */
    List<Log> viewOperateLog(Integer type);

    /**
     * 开始流程
     */
    void startProcess();

    /**
     * 查看历史评定
     * @return
     * @throws Exception
     */
    List<HistoryResult> viewHistoryApply()throws Exception;

}
