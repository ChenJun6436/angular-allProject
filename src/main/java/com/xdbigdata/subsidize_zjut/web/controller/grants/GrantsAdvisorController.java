package com.xdbigdata.subsidize_zjut.web.controller.grants;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IGrantsAdvisorService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Administrator on 2017/5/27.
 */
@Api("助学金——辅导员相关接口")
@RestController
@RequestMapping("/grantsAdvisor")
public class GrantsAdvisorController {


    @Autowired
    private IGrantsAdvisorService grantsAdvisorService;

    @ApiOperation("本学年评定经济困难但未申请助学金")
    @RequestMapping(value = "/povertyNotApply",method = RequestMethod.GET)
    public CommonResult listHavePovertyLevelButNotApply() throws Exception{
        return new CommonResult(true,grantsAdvisorService.listHavePovertyLevelButNotApply(), ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }


}
