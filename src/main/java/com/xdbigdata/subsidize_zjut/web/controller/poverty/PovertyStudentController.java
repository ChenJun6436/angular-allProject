package com.xdbigdata.subsidize_zjut.web.controller.poverty;


import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.Dissent;
import com.xdbigdata.subsidize_zjut.domain.StudentFamily;
import com.xdbigdata.subsidize_zjut.domain.StudentInfo;
import com.xdbigdata.subsidize_zjut.domain.StudentSubsidy;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.PovertyStudentService;
import com.xdbigdata.subsidize_zjut.service.process.PovertyActivitiService;
import com.xdbigdata.subsidize_zjut.util.FileUtil;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * 学生角色相关的接口
 * Created by staunch on 2017/4/1.
 */
@RestController
@RequestMapping("/povertyStudent")
@Api(value = "困难认定——学生角色相关的接口",description = "困难认定——学生角色相关的接口")
public class PovertyStudentController {

    @Autowired
    private PovertyStudentService povertyStudentService;
    @Autowired
    private PovertyActivitiService povertyActivitiService;

    @ApiOperation(value = "更新学生基本信息", notes = "根据StudentInfo对象创建学生对象")
//    @ApiImplicitParam(name = "studentInfo", value = "学生详细信息", required = true, dataType = "StudentInfo",paramType = "body")
    @PostMapping(value = "/updateStudentInfo")
    public CommonResult updateStudentInfo(@RequestBody StudentInfo studentInfo) throws Exception {
        povertyStudentService.updateStudentInfo(studentInfo);
        return new CommonResult(true,ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }
//
//    @ApiOperation(value = "新增学生获奖信息", notes = "根据StudentAward创建学生获奖对象")
//    @ApiImplicitParam(name = "studentAward", value = "学生获奖信息", required = true, dataType = "StudentAward")
//    @PostMapping(value = "/saveStudentAward")
//    public CommonResult saveStudentAward(@RequestBody StudentAward studentAward) {
//        povertyStudentService.saveStudentAward(studentAward);
//        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
//    }
//
//    @ApiOperation(value = "删除学生获奖信息", notes = "根据学生获奖的id来指定删除对象")
//    @DeleteMapping(value = "/removeStudentAward/{id}")
//    public CommonResult removestudentAward(@PathVariable Integer id) {
//        povertyStudentService.removeStudentAward(id);
//        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
//    }
//
//    @ApiOperation(value = "新增学生处分信息", notes = "根据StudentAward创建学生处分对象")
//    @ApiImplicitParam(name = "studentPunishment", value = "学生处分信息", required = true, dataType = "StudentPunishment")
//    @PostMapping(value = "/saveStudentPunishment")
//    public CommonResult saveStudentPunishment(@RequestBody StudentPunishment studentPunishment) {
//        povertyStudentService.saveStudentPunishment(studentPunishment);
//        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
//    }
//
//    @ApiOperation(value = "删除学生处分信息", notes = "根据学生处分的id来指定删除对象")
//    @DeleteMapping(value = "/removeStudentPunishment/{id}")
//    public CommonResult removeStudentPunishment(@PathVariable Integer id) {
//        povertyStudentService.removeStudentPunishment(id);
//        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
//    }
//
    @ApiOperation(value = "新增家庭信息", notes = "根据StudentFamily创建学生家庭对象")
    @ApiImplicitParam(name = "studentFamily", value = "学生家庭获奖信息", required = true, dataType = "StudentFamily")
    @PostMapping(value = "/saveStudentFamily")
    public CommonResult saveStudentFamily(@RequestBody StudentFamily studentFamily) {
        povertyStudentService.saveStudentFamily(studentFamily);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "删除学生家庭信息", notes = "根据学生家庭的id来指定删除对象")
    @DeleteMapping(value = "/removeStudentFamily/{id}")
    public CommonResult removeStudentFamily(@PathVariable Integer id) {
        povertyStudentService.removeStudentFamily(id);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
    }
//
//
    @ApiOperation(value = "新增学生资助信息", notes = "根据StudentSubsidy创建学生资助对象")
    @ApiImplicitParam(name = "studentSubsidy", value = "学生资助信息", required = true, dataType = "StudentSubsidy")
    @PostMapping(value = "/saveStudentSubsidy")
    public CommonResult saveStudentSubsidy(@RequestBody StudentSubsidy studentSubsidy) throws Exception {
        povertyStudentService.saveStudentSubsidy(studentSubsidy);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "删除学生资助信息", notes = "根据学生资助的id来指定删除对象")
    @DeleteMapping(value = "/removeStudentSubsidy/{id}")
    public CommonResult removeStudentSubsidy(@PathVariable Integer id) {
        povertyStudentService.removeStudentSubsidy(id);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
    }

    @ApiOperation(value = "学生上传困难认定附件", notes = "学生上传附件")
    @PostMapping(value = "/uploadFile")
    public CommonResult uploadFile(@RequestParam(value = "file") MultipartFile file) throws Exception{
        povertyStudentService.uploadFile(file);
        return new CommonResult(true, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "name表示文件名", notes = "学生删除困难认定附件")
    @DeleteMapping(value = "/removeFile/{name}")
    public CommonResult removeFile(@RequestBody String name) throws Exception {
        FileUtil.deleteFile(name);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
    }

    @ApiOperation(value = "学生开始流程认定", notes = "这个是在学生确认材料后，提交到班级用户和辅导员审核材料时调用的接口,学生本人就传 0")
    @GetMapping(value = "/startPovertyProcess/{studentId}")
    public CommonResult startPovertyProcess(@PathVariable String studentId) throws Exception {
        if ("0".equals(studentId)) {
            SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
            studentId = sessionUserDto.getUserName();
        }
        povertyStudentService.startPovertyProcess(studentId);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }
//
    @ApiOperation(value = "学生获取自己的申请状态", notes = "这个是在学生确认材料后，提交到班级用户和辅导员审核材料时调用的接口,学生本人就传 0")
    @GetMapping(value = "/getStudentStatus")
    public CommonResult getStudentStatus() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String studentId = sessionUserDto.getUserName();
        return new CommonResult(true, povertyStudentService.getStudentStatus(studentId), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }
//
    @ApiOperation(value = "学生查看学院公示", notes = "学生查看学院公示")
    @GetMapping(value = "/getCollegeNotice")
    public CommonResult getCollegeNotice() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String studentId = sessionUserDto.getUserName();
        return new CommonResult(true, povertyStudentService.listPublicPoverty(studentId), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "学生查看学校公示", notes = "学生查看学校公示")
    @GetMapping(value = "/getSchoolNotice")
    public CommonResult getSchoolNotice() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String studentId = sessionUserDto.getUserName();
        return new CommonResult(true, povertyStudentService.listPublicPovertySchool(studentId), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }


    @ApiOperation(value = "是否完善基本信息", notes = "这个接口用在学生登录时，前端是否显示提示框")
    @GetMapping(value = "/isComplete")
    public CommonResult isComplete() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String studentId = sessionUserDto.getUserName();
        return new CommonResult(true, povertyStudentService.isComplete(studentId), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }
    @ApiOperation(value = "学生删除困难认定附件", notes = "学生删除附件")
    @DeleteMapping(value = "/removeAttachment/{id}")
    public CommonResult removeAttachment(@PathVariable Integer id) {
        povertyStudentService.removeAttachment(id);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
    }
//
//    @ApiOperation(value = "上传学生获奖附件", notes = "上传附件成功后，我会返回个附件的URL，前端暂时保存，因为这个是获奖对象的一个属性，所以到时封装为一个对象传给后端保存")
//    @PostMapping(value = "/uploadAwardAttachment")
//    public CommonResult uploadAwardAttachment(@RequestParam(value = "file") MultipartFile file) throws Exception {
//        return new CommonResult(true, povertyStudentService.uploadAwardAttachment(file), ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
//    }
//
    @ApiOperation(value = "学生提交公示异议")
    @PostMapping(value = "/commitDissent/{type}")
    public CommonResult commitDissent(@RequestBody List<Dissent> dissents,@PathVariable Integer type) throws Exception {
        povertyStudentService.saveDissent(dissents,type);
        return new CommonResult(true,null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
    }
//
//    @ApiOperation(value = "获取生源地信息")
//    @GetMapping(value = "/listProvince")
//    public CommonResult listProvince() throws Exception {
//        return new CommonResult(true,povertyStudentService.listProvince(), ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
//    }

    @ApiOperation(value = "查看处理意见")
    @GetMapping(value = "/viewDealOpinion")
    public CommonResult viewDealOpinion() throws Exception {
        return new CommonResult(true,povertyStudentService.viewDealOpinion(), ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

}
