package com.xdbigdata.subsidize_zjut.web.controller.scholarship;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IGrantsAdvisorService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipAdvisorService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Administrator on 2017/6/8 0008.
 *  辅导员角色相关的接口
 */
@RestController
@RequestMapping("/scholarshipAdisor")
@Api("励志奖学金-辅导员接口")
public class ScholarshipAdvisorController {

    @Autowired
    private IScholarshipAdvisorService scholarshipAdvisorService;


    @ApiOperation("查询往年申请而本次未申请名单")
    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public CommonResult listHavePovertyLevelButNotApply() throws Exception{
        return new CommonResult(true,null, ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }



}
