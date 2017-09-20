package com.xdbigdata.subsidize_zjut.web.controller.scholarship;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.service.IScholarshipGradeService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import org.omg.CORBA.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * Created by Administrator on 2017/6/7 0007.
 */
@RestController
@RequestMapping(value = "/scholarshipCollege")
@Api("奖学金——学院接口")
public class ScholarshipCollegeController {

    @Autowired
    private IScholarshipGradeService scholarshipGradeService;

    @ApiOperation("保存/修改 配置信息")
    @RequestMapping(value = "/saveGradeConfig",method = RequestMethod.POST)
    public CommonResult saveOrUpdateCollegeConfig(@RequestBody ScholarshipGradeGto configDto) throws Exception{
        scholarshipGradeService.saveOrUpdateGradeConfig(configDto);
        return new CommonResult(true,null, ErrorCode.SAVE_SUCCESS.code,ErrorCode.SAVE_SUCCESS.des);
    }

    @ApiModelProperty("获取年级配置信息")
    @RequestMapping(value = "/listGradeConfig",method = RequestMethod.GET)
    public CommonResult listGradeConfig()throws Exception{
        return new CommonResult(true,scholarshipGradeService.listGradeconfig(),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }



}
