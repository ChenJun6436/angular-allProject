package com.xdbigdata.subsidize_zjut.web.controller.scholarship;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipCollegeDto;
import com.xdbigdata.subsidize_zjut.domain.Grants;
import com.xdbigdata.subsidize_zjut.domain.Scholarship;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipCollegeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Administrator on 2017/6/6 0006.
 */
@RestController
@RequestMapping(value = "/scholarshipSchool")
@Api("奖学金——学校接口")
public class ScholarshipSchoolController {

    @Autowired
    private IScholarshipCollegeService scholarshipCollegeService;

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @ApiOperation("保存/更新 配置信息")
    @RequestMapping(value = "/saveOrUpdateCollegeConfig",method = RequestMethod.POST)
    public CommonResult saveOrUpdateCollegeConfig(@RequestBody ScholarshipCollegeDto configDto){
        scholarshipCollegeService.saveOrUpdateCollegeConfig(configDto);
        return new CommonResult(true,null, ErrorCode.SAVE_SUCCESS.code,ErrorCode.SAVE_SUCCESS.des);
    }

    @ApiOperation(value = "获取所有配置信息")
    @RequestMapping(value = "/listCollegeConfig",method = RequestMethod.GET)
    public CommonResult configCollegeNum() throws Exception{
        return new CommonResult(true,scholarshipCollegeService.getCollegeApplyConfig(),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "获取学年下的奖学金列表")
    @RequestMapping(value = "/listGrants/{schoolYear}",method = RequestMethod.GET)
    public CommonResult listGrants(@PathVariable String schoolYear) throws Exception{
        return new CommonResult(true,scholarshipCollegeService.listGrantsBySchoolYear(schoolYear),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "获取所有学年")
    @RequestMapping(value = "/listSchoolYears",method = RequestMethod.GET)
    public CommonResult listSchoolYears() throws Exception{
        return new CommonResult(true,grantsJWTService.listAllSchoolYear(),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("添加国家励志奖学金")
    @RequestMapping(value = "/saveScholarship", method = RequestMethod.POST)
    public CommonResult saveScholarship(@RequestBody Scholarship scholarship) throws Exception{
        scholarshipCollegeService.saveScholarship(scholarship);
        return new CommonResult(true,null, ErrorCode.SAVE_SUCCESS.code, ErrorCode.SAVE_SUCCESS.des);
    }

}
