package com.xdbigdata.subsidize_zjut.web.controller.poverty;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.StartProcessDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.AddApplyDto;
import com.xdbigdata.subsidize_zjut.domain.Dissent;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.PovertyCollegeService;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 学院角色相关的接口
 * Created by staunch on 2017/4/1.
 */
@RestController
@RequestMapping("/povertyCollege")
@Api("困难认定——学院角色相关的接口")
public class PovertyCollegeController {

    @Autowired
    private PovertyCollegeService povertyCollegeService;

    @ApiOperation(value = "查看公示异议")
    @GetMapping(value = "/viewOpenDissent")
    public CommonResult viewOpenDissent()throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String sn = sessionUserDto.getUserName();
        return new CommonResult(true,povertyCollegeService.viewOpenDissent(sn,sessionUserDto), ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "查看公示异议（学校）")
    @GetMapping(value = "/viewOpenDissentSchool")
    public CommonResult viewOpenDissentSchool()throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String sn = sessionUserDto.getUserName();
        return new CommonResult(true,povertyCollegeService.viewOpenDissentSchool(sn), ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "处理公示异议")
    @PostMapping(value = "/dealOpenDissent")
    public CommonResult dealOpenDissent(@RequestBody Dissent dissent)throws Exception{
        povertyCollegeService.dealOpenDissent(dissent);
        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "获取所有辅导员")
    @GetMapping(value = "/listAdvisors")
    public CommonResult listAdvisors()throws Exception{
        return new CommonResult(true,povertyCollegeService.listAdvisors(), ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }
    @ApiOperation(value = "取消认定",notes = "这里参数只需要传递processId和studentId即可")
    @PostMapping(value = "/cancelApply")
    public CommonResult cancelApply(@RequestBody StartProcessDto startProcessDto)throws Exception{
        povertyCollegeService.cancelApply(startProcessDto);
        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "补录申请")
    @PostMapping(value = "/addApply")
    public CommonResult addApply(@RequestBody AddApplyDto addApplyDto)throws Exception{
        povertyCollegeService.addApply(addApplyDto.getStudentId(),addApplyDto.getLevel());
        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }





}
