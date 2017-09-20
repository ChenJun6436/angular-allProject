package com.xdbigdata.subsidize_zjut.web.controller.poverty;

import com.xdbigdata.jwtService.service.JWTSchoolYearService;
import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.Notice;
import com.xdbigdata.subsidize_zjut.domain.PovertyProcess;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.mapper.PovertySchoolMapper;
import com.xdbigdata.subsidize_zjut.service.PovertySchoolService;
import com.xdbigdata.subsidize_zjut.service.process.PovertyActivitiService;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.activiti.engine.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

/**
 * 学校角色相关的接口
 * Created by staunch on 2017/4/1.
 */
@RestController
@RequestMapping("/povertySchool")
@Api("困难认定——学校角色相关的接口")
public class PovertySchoolController {

    @Autowired
    private PovertySchoolService povertySchoolService;

    @Autowired
    PovertySchoolMapper povertySchoolMapper;

    @Autowired
    PovertyActivitiService povertyActivitiService;

    @Autowired
    private HistoryService historyService;

    @Autowired
    private JWTSchoolYearService jwtSchoolYearService;


    @ApiOperation(value = "学校发布公告")
    @PostMapping("/saveNotice")
    public CommonResult saveNotice(@RequestBody Notice notice) {
        povertySchoolService.saveNotice(notice);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }


    @ApiOperation(value = "保存困难认定配置")
    @PostMapping(value = "/saveProcess")
    public CommonResult saveProcess(@RequestBody PovertyProcess povertyProcess) throws Exception {
        povertySchoolService.saveProcess(povertyProcess);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "获取困难认定配置")
    @GetMapping(value = "/getProcessTime")
    public CommonResult getProcessTime() throws Exception {
        return new CommonResult(true, povertySchoolService.getProcessTime(), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "验证流程是否开始")
    @GetMapping(value = "/validateProcess")
    public CommonResult validateProcess() throws Exception {
        return new CommonResult(true, povertySchoolService.validateProcess(), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "获取所有学院用户")
    @GetMapping(value = "/listCollegeUsers")
    public CommonResult listCollegeUsers() throws Exception {
        return new CommonResult(true, povertySchoolService.listCollegeUsers(), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "获取公告没发布前的附件")
    @GetMapping(value = "/listNoticeFiles")
    public CommonResult listNoticeFiles() throws Exception {
        return new CommonResult(true, povertySchoolService.listNoticeFiles(), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "学校删除公告")
    @DeleteMapping(value = "/removeNotice/{id}")
    public CommonResult removeNotice(@PathVariable Integer id) throws Exception {
        povertySchoolService.removeNotice(id);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "查看操作记录")
    @GetMapping(value = "/viewOperateLog/{type}")
    public CommonResult viewOperateLog(@PathVariable Integer type) throws Exception {
        return new CommonResult(true, povertySchoolService.viewOperateLog(type), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "开始流程")
    @GetMapping(value = "/startProcess")
    public CommonResult startProcess() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        //清空所有申请学生的记录和流程，重置学生状态
        //1、查询出所有流程实例ID
        Set<String> processIds = povertyActivitiService.getAllProcessInstanceId(sessionUserDto);
        //2、删除所有流程记录
        for (String id : processIds) {
            //runtimeService.deleteProcessInstance(id,"循环删除上次认定结果");
            historyService.deleteHistoricProcessInstance(id);
        }
        //清空部分表
        povertySchoolMapper.clearTable();
        //将所有学生status重置为0
        povertySchoolMapper.resetStudentStatus();
        povertySchoolMapper.startProcess();
        return new CommonResult(true, true, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "查看历史评定")
    @GetMapping(value = "/viewHistoryApply")
    public CommonResult viewHistoryApply() throws Exception {
        return new CommonResult(true, povertySchoolService.viewHistoryApply(), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "获取学年列表")
    @GetMapping("/getSchoolYear")
    public CommonResult getSchoolYear() throws Exception {
        return new CommonResult(true, jwtSchoolYearService.findAllUsed(), ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }
    @ApiOperation(value = "获取当前学年")
    @GetMapping("/getCurrentSchoolYear")
    public CommonResult getCurrSchoolYear() throws Exception {
        return new CommonResult(true, jwtSchoolYearService.current(), ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

}
