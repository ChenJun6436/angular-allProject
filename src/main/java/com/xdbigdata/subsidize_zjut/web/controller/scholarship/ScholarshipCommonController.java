package com.xdbigdata.subsidize_zjut.web.controller.scholarship;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipCheckResultDto;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IScholarshipActivitiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Administrator on 2017/6/8 0008.
 */
@RestController
@RequestMapping("/scholarshipCommon")
@Api("奖学金——公共接口")
public class ScholarshipCommonController {

    @Autowired
    private IScholarshipActivitiService scholarshipActivitiService;



    @ApiOperation("当前登录用户查看自己的任务列表")
    @RequestMapping(value = "/listTasks",method = RequestMethod.GET)
    public CommonResult listTasks() throws Exception{
        List<ScholarshipCheckResultDto> scholarshipCheckResultDtos = scholarshipActivitiService.listTasks();
        return new CommonResult(true,scholarshipCheckResultDtos, ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }


    @ApiOperation("提交任务，转交下一步")
    @RequestMapping(value = "/commitTasks/{stage}/{passStatus}", method = RequestMethod.GET)
    public CommonResult commitTasks(@PathVariable String stage) throws Exception {
        scholarshipActivitiService.commitTasks(stage);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }



    @ApiOperation("查看公示列表")
    @GetMapping("/listPublicity")
    public CommonResult listPublicityResult() throws Exception{
        return null;
    }




}
