package com.xdbigdata.subsidize_zjut.service;

import com.sun.org.apache.xpath.internal.operations.Bool;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.AllowanceApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.ApplyListDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.PageDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.UpdateCheckResultDto;
import com.xdbigdata.subsidize_zjut.domain.AllowanceApply;
import com.xdbigdata.subsidize_zjut.domain.AllowanceConfig;

import java.util.List;

/**
 * Created by jinmingjiang on 2017/6/5.
 * 特别困难补助业务
 */
public interface IAllowanceServicce {
    // 获取配置
    AllowanceConfig getAllowanceConfig() throws Exception;
    // 保存配置
    void saveAllowanceConfig(AllowanceConfig allowanceConfig) throws Exception;
    // 学生申请
    void AllowanceApply(AllowanceApplyDto allowanceApplyDto, SessionUserDto sessionUserDto) throws Exception;
    // 获取申请列表
//    List<ApplyListDto> getAllowanceApplyList(SessionUserDto sessionUserDto, PageDto pageDto) throws Exception;
    List<ApplyListDto> getAllowanceApplyList(SessionUserDto sessionUserDto,boolean checked) throws Exception;
    // 提交到下一个审核
    void submitNextCheck(SessionUserDto sessionUserDto) throws Exception;
    // 修改审核结果
    void updateCheckResult(UpdateCheckResultDto updateCheckResultDto,SessionUserDto sessionUserDto) throws Exception;

    boolean isFiveClass(SessionUserDto sessionUserDto) throws Exception;
}
