package com.xdbigdata.subsidize_zjut.web.controller.poverty;


import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.OpenTimeDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.PovertyLevelDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.ProcessDto;
import com.xdbigdata.subsidize_zjut.domain.*;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCollegeMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertySchoolMapper;
import com.xdbigdata.subsidize_zjut.service.PovertyClassService;
import com.xdbigdata.subsidize_zjut.service.PovertyCommonService;
import com.xdbigdata.subsidize_zjut.service.PovertyStudentService;
import com.xdbigdata.subsidize_zjut.service.process.PovertyActivitiService;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

/**
 * 困难认定公共接口
 * Created by staunch on 2017/4/1.
 */
@RestController
@RequestMapping("/povertyCommon")
@Api("困难认定——公共接口")
public class PovertyCommonController {

    @Autowired
    private PovertyCommonService povertyCommonservice;
    @Autowired
    private PovertyStudentService povertyStudentService;
    @Autowired
    private PovertyClassService povertyClassService;
    @Autowired
    private PovertyActivitiService povertyActivitiService;
    @Autowired
    PovertySchoolMapper povertySchoolMapper;
    @Autowired
    PovertyCollegeMapper povertyCollegeMapper;

    @ApiOperation(value = "获取学生基本信息", notes = "获取学生基本信息的接口,说明：学生本人传递一个0,其他用户传递真实的studentId")
    @GetMapping(value = {"/getStudentInfo/{sn}"})
    @ApiImplicitParam(value = "学号",name = "sn",required = true,dataType = "string",paramType = "path")
    public CommonResult getStudentInfo(@PathVariable String sn) throws Exception{
        if (sn.equals("0")) {
            SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
            sn = sessionUserDto.getUserName();
        }
        StudentInfo studentInfoDto = povertyCommonservice.getStudentInfo(sn);
        return new CommonResult(true,studentInfoDto, ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }
//
//    @ApiOperation(value = "获取学生获奖情况", notes = "获取学生获奖情况的接口,说明：学生本人传0,其他用户传递真实的studentId")
//    @GetMapping(value = {"/listStudentAward/{studentId}"})
//    public CommonResult listStudentAward(@PathVariable String studentId) {
//        if (studentId.equals("0")) {
//            SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
//            studentId = sessionUserDto.getUserName();
//        }
//        List<StudentAward> studentAwards = povertyCommonservice.listStudentAward(studentId);
//        return new CommonResult(true,studentAwards,ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
//    }
//
//    @ApiOperation(value = "获取学生处分情况", notes = "获取学生处分情况的接口,说明：学生本人传0,其他用户传递真实的studentId")
//    @GetMapping(value = {"/listStudentPunishment/{studentId}"})
//    public CommonResult listStudentPunishment(@PathVariable String studentId) {
//        if (studentId.equals("0")) {
//            SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
//            studentId = sessionUserDto.getUserName();
//        }
//        List<StudentPunishment> studentPunishments = povertyCommonservice.listStudentPunishment(studentId);
//        return new CommonResult(true,studentPunishments,ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
//    }
//
    @ApiOperation(value = "获取学生获资助情况", notes = "获取学生获资助情况的接口,说明：学生本人传0,其他用户传递真实的studentId")
    @GetMapping(value = {"/listStudentSubsidy/{studentId}"})
    public CommonResult listStudentSubsidy(@PathVariable String studentId) {
        if (studentId.equals("0")) {
            SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
            studentId = sessionUserDto.getUserName();
        }
        List<StudentSubsidy> studentSubsidies = povertyCommonservice.listStudentSubsidy(studentId);
        return new CommonResult(true,studentSubsidies,ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }
//
    @ApiOperation(value = "获取学生家庭情况", notes = "获取学生家庭情况的接口,说明：学生本人传0,其他用户传递真实的studentId")
    @GetMapping(value = {"/listStudentFamily/{studentId}"})
    public CommonResult listStudentFamily(@PathVariable String studentId) {
        if (studentId.equals("0")) {
            SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
            studentId = sessionUserDto.getUserName();
        }
        List<StudentFamily> studentFamilies = povertyCommonservice.listStudentFamily(studentId);
        return new CommonResult(true,studentFamilies,ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }
//
//    @ApiOperation(value = "获取动态管理学生列表",notes = "获取动态管理学生列表")
//    @GetMapping(value = "/listDynamicStudent")
//    public CommonResult listDynamicStudent() throws Exception{
//        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
//        String sn = sessionUserDto.getUserName();
//        return new CommonResult(true, povertyCommonservice.listDynamicStudent(sn), ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
//    }
//
    @ApiOperation(value = "模拟登陆",notes = "传入SessionUserDto对象哈")
    @ApiImplicitParam(value = "sessionUserDto",name = "sessionUserDto",required = true,dataType = "SessionUserDto",paramType = "body")
    @PostMapping(value = "/login")
    public CommonResult login(@RequestBody SessionUserDto sessionUserDto) {
        HttpSession session = SessionUtil.getSession();
        session.setAttribute("sessionUserDto", sessionUserDto);
        return new CommonResult(true,null,ErrorCode.LOGIN_SUCCESS.code,ErrorCode.LOGIN_SUCCESS.des);
    }

    @ApiOperation(value = "学生获取困难认定附件", notes = "学生获取附件")
    @GetMapping(value = "/listAttachments/{studentId}")
    public CommonResult listAttachments(@PathVariable String studentId) {
        return new CommonResult(true, povertyStudentService.listAttachment(studentId), ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "班级或者辅导员用户获取待审核材料学生")
    @GetMapping(value = "/listCheckMaterialStudent")
    public CommonResult listCheckMaterialStudent() throws Exception{
        return new CommonResult(true,povertyClassService.listCheckMaterialStudent(), ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "学生困难认定",notes = "所有用户查看自己负责学生的困难认定情况")
    @GetMapping(value = "/listStudentPovertyApply")
    public CommonResult listStudentPovertyApply() throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        return new CommonResult(true,povertyCommonservice.listStudentPovertyApply(sessionUserDto), ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查看当前用户是否有任务",notes = "查看当前用户是否有任务,返回一个布尔型，FALSE是无，TRUE是有任务")
    @GetMapping(value = "/hasTask")
    public CommonResult hasTask() throws Exception{
        String sn;
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        sn = sessionUserDto.getUserName();
        return new CommonResult(true, povertyCommonservice.hasTask(sn), ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "获取当前时间所属区间")
    @GetMapping(value = "/getMaxStatus")
    public CommonResult getMaxStatus() throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        return new CommonResult(true, povertyCommonservice.getMaxStatus(sessionUserDto), ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "修改学生困难等级", notes = "修改学生困难等级")
    @PostMapping(value = {"/updatePovertyLevel"})
    public CommonResult updatePovertyLevel(@RequestBody PovertyLevelDto povertyLevelDto) {
        povertyActivitiService.updatePovertyLevel(povertyLevelDto);
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "下载困难认定名单")
    @GetMapping(value = "/downloadPovertyApply")
    public CommonResult downloadPovertyApply() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        return new CommonResult(true,povertyCommonservice.downloadPovertyApply(sessionUserDto),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "用户提交或者驳回流程操作调用的接口")
    @PostMapping(value = "/operateProcess")
    public CommonResult operateProcess(@RequestBody ProcessDto processDto)throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        povertyCommonservice.operateProcess(processDto,sessionUserDto);
        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }
//
    @ApiOperation(value = "获取学校公告" ,notes="查看全部公告传0")
    @GetMapping(value = "/getNoticeList/{noticeId}")
    public CommonResult getNoticeList(@PathVariable Integer noticeId)throws Exception{
        return new CommonResult(true,povertyCommonservice.getNoticeList(noticeId == 0?null:noticeId), ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }
//    @ApiOperation(value = "动态管理中修改学生的困难等级")
//    @PostMapping(value = "/dyModifyPovertyLevel")
//    public CommonResult dyModifyPovertyLevel(@RequestBody DyModifyDto dyModifyDto)throws Exception{
//        povertyCommonservice.dyModifyPovertyLevel(dyModifyDto);
//        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
//    }
//
//    @ApiOperation(value = "下载动态管理名单")
//    @GetMapping(value = "/downloadDyManage")
//    public CommonResult downloadDyManage() throws Exception {
//        return new CommonResult(true,povertyCommonservice.downloadDyManage(),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
//    }

    @ApiOperation(value = "获取驳回原因")
    @GetMapping(value = "/getReject")
    public CommonResult getReject() throws Exception {
        return new CommonResult(true,povertyCommonservice.getReject(),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("是否在困难认定期间")
    @GetMapping("/isPovertyTime")
    public CommonResult isPovertyTime(){
        return new CommonResult(true,povertyCommonservice.isPovertyTime(),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("往年申请而本次未申请名单")
    @GetMapping("/lastYearApply")
    public CommonResult lastYearApply() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        return new CommonResult(true,povertyCommonservice.lastYearApply(sessionUserDto),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "配置公示时间")
    @PostMapping(value = "/setOpenTime")
    public CommonResult setOpenTime(@RequestBody OpenTimeDto openTimeDto)throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        povertyCommonservice.setOpenTime(openTimeDto,sessionUserDto);
        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "查看公示是否已经开始",notes = "会根据登录的用户类型进行自动判断是学校还是学院")
    @GetMapping("/atOpenTime")
    public CommonResult atOpenTime() throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        Integer userType = sessionUserDto.getUserType();
        String userName = sessionUserDto.getUserName();
        PovertyProcess processTime = povertySchoolMapper.getProcessTime();
//        Date startTime = null;
//        Date endTime = null;
        boolean atOpenTime = false;
        if(userType==1){
            //学校
            if(processTime != null){
                Integer schoolOpenStarted = processTime.getSchoolOpenStarted();
                if(schoolOpenStarted!=null){
                    atOpenTime = true;
                }
//                startTime = processTime.getSchoolOpenStartTime();
//                endTime = processTime.getSchoolOpenEndTime();
            }
        }else if(userType==2){
            //学院
            PovertyOpenTime openTimeByCollegeUser = povertyCollegeMapper.findOpenTimeByCollegeUser(userName);
            if(openTimeByCollegeUser != null) {
//                startTime = openTimeByCollegeUser.getOpenStartTime();
//                endTime = openTimeByCollegeUser.getOpenEndTime();
                Integer started = openTimeByCollegeUser.getStarted();
                if(started != null){
                    atOpenTime = true;
                }
            }
        }
//        if(startTime != null && endTime != null){
//            long now = new Date().getTime();
//            if(startTime != null && now>=startTime.getTime()){
//                atOpenTime = true;
//            }
//        }
        return new CommonResult(true,atOpenTime, ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "获取公示的时间",notes = "后台根据当前登录的用户自动获取对应的公示时间")
    @GetMapping("/getOpenTime")
    public CommonResult getOpenTime() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        OpenTimeDto openTime = povertyCommonservice.getOpenTime(sessionUserDto);
        if(openTime != null) {
            if(openTime.getEndTime()!=null) {
                long endTime = openTime.getEndTime().getTime();
                long now = new Date().getTime();
                if (now > endTime) {
                    openTime.setPublicityClosed(true);
                }
            }
        }else {
            openTime.setPublicityClosed(false);
        }
        return new CommonResult(true,openTime, ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }
}
