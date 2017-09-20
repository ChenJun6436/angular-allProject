package com.xdbigdata.subsidize_zjut.web.controller.allowance;

import com.xdbigdata.jwtService.domain.SchoolYear;
import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.AllowanceApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.ApplyListDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.UpdateCheckResultDto;
import com.xdbigdata.subsidize_zjut.domain.AllowanceConfig;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IAllowanceServicce;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

/**
 * Created by jinmingjiang on 2017/6/5.
 * 特别困难补助接口
 */
@Api("特别困难补助--公共接口")
@RestController
@RequestMapping("/allowance")
public class AllowanceController {

    @Autowired
    IAllowanceServicce allowanceServicce;

    @ApiOperation(value = "学校用户保存配置", notes = "")
    @PostMapping("/saveConfig")
    public CommonResult saveConfig(@RequestBody AllowanceConfig allowanceConfig) throws Exception {
        allowanceServicce.saveAllowanceConfig(allowanceConfig);
        return new CommonResult(true, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "获取配置", notes = "")
    @GetMapping("/getConfig")
    public CommonResult getConfig() throws Exception {
        AllowanceConfig allowanceConfig = allowanceServicce.getAllowanceConfig();
        return new CommonResult(true,allowanceConfig, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "申请", notes = "")
    @PostMapping("/apply")
    public CommonResult apply(@RequestBody AllowanceApplyDto allowanceApplyDto) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        allowanceServicce.AllowanceApply(allowanceApplyDto,sessionUserDto);
        return new CommonResult(true, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "获取待审核列表", notes = "")
    @GetMapping("/check")
    public CommonResult check() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        List<ApplyListDto> allowanceApplyList = allowanceServicce.getAllowanceApplyList(sessionUserDto, false);
        return new CommonResult(true,allowanceApplyList, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "获取已审核列表", notes = "")
    @GetMapping("/checked")
    public CommonResult checked() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        List<ApplyListDto> allowanceApplyList = allowanceServicce.getAllowanceApplyList(sessionUserDto, true);
        return new CommonResult(true,allowanceApplyList, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "修改审核状态", notes = "")
    @PostMapping("/updateApply")
    public CommonResult updateApply(@RequestBody UpdateCheckResultDto updateCheckResultDto) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        allowanceServicce.updateCheckResult(updateCheckResultDto,sessionUserDto);
        return new CommonResult(true, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "提交到下一级审核", notes = "")
    @PostMapping("/submitNextCheck")
    public CommonResult submitNextCheck() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        allowanceServicce.submitNextCheck(sessionUserDto);
        return new CommonResult(true, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "是否为五类生", notes = "根据当前登录学生用户自动判断")
    @GetMapping("/isFiveClass")
    public CommonResult isFiveClass() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        boolean fiveClass = allowanceServicce.isFiveClass(sessionUserDto);
        return new CommonResult(true,fiveClass, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "是否在申请时间内")
    @GetMapping("/atApplyTime")
    public CommonResult atApplyTime() throws Exception {
        AllowanceConfig allowanceConfig = allowanceServicce.getAllowanceConfig();
        boolean flag = false;
        try{
            long endTime = allowanceConfig.getEndTime().getTime();
            long startTime = allowanceConfig.getStartTime().getTime();
            long now = new Date().getTime();
            flag = now>startTime && now<endTime;
        }catch (NullPointerException e){}
        return new CommonResult(true,flag, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }
}
