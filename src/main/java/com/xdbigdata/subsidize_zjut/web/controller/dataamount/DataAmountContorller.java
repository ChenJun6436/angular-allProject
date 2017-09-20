package com.xdbigdata.subsidize_zjut.web.controller.dataamount;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.DataAmountService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * Created by sky on 2017/6/6.
 */
@Controller
@RequestMapping("/dataAmount")
@Api("数据统计模块")
public class DataAmountContorller {
    @Autowired
    private DataAmountService dataAmountService;

    @ApiOperation(value = "查询经济困难认定总人数", notes = "")
    @RequestMapping(value = "/poverty/totalNumber", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult countPovertyTotalNumber(@RequestBody DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        Integer totalNumber = dataAmountService.countPovertyByConditionAndUser(sessionUserDto, dataAmountQueryCondititonDto);
        return new CommonResult(true, totalNumber, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查询各等级经济困难人数", notes = "")
    @RequestMapping(value = "/povertyLevel/number", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult countGroupByPovertyLevel(@RequestBody DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<PovertyHistoryCountDto> povertyHistoryCountDtos = dataAmountService.countPovertyGroupByLevelAndByCondition(sessionUserDto, dataAmountQueryCondititonDto);
        return new CommonResult(true, povertyHistoryCountDtos, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查询省内省外经济困难人数", notes = "")
    @RequestMapping(value = "/isInTheProvince/number", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult countGroupByIsInTheProvince(@RequestBody DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        Map<String, Integer> map = dataAmountService.countPovertyGroupByIsZhejiang(dataAmountQueryCondititonDto, sessionUserDto);
        return new CommonResult(true, map, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "省内排序（倒序）", notes = "")
    @RequestMapping(value = "/inProvince/desc", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult inProvinceSortDesc(@RequestBody DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<PovertySort> list = dataAmountService.inProvinceSortDesc(dataAmountQueryCondititonDto, sessionUserDto);
        return new CommonResult(true, list, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "省外排序（倒序）", notes = "")
    @RequestMapping(value = "/notInProvince/desc", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult notInProvinceSortDesc(@RequestBody DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<PovertySort> list = dataAmountService.notInProvinceSortDesc(dataAmountQueryCondititonDto, sessionUserDto);
        return new CommonResult(true, list, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }
    @ApiOperation(value = "五类生统计", notes = "")
    @RequestMapping(value = "/fiveKind/number", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult countFiveKindStudent(@RequestBody DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<FiveKindsStudentCountDto> list = dataAmountService.countPovertyGroupByKindAndByCondition(dataAmountQueryCondititonDto,
                sessionUserDto);
        return new CommonResult(true, list, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "根据资助类型分组统计金额及数量", notes = "")
    @RequestMapping(value = "/numberAndMoney", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult countNumberAndMoney(@RequestBody DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<SubsidizeGroupLevelDto> list = dataAmountService.countNumberAndMoneyGroupByLevel(dataAmountQueryCondititonDto,
                sessionUserDto);
        return new CommonResult(true, list, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

}
