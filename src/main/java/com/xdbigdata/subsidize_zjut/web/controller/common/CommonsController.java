package com.xdbigdata.subsidize_zjut.web.controller.common;

import com.xdbigdata.jwtService.domain.*;
import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * Created by sky on 2017/5/31.
 */
@Controller
@RequestMapping("/commons")
@Api("通用模块")
public class CommonsController {
    @Autowired
    private JWTRemoteService jwtRemoteService;

    @ApiOperation(value = "查询学年列表", notes = "")
    @RequestMapping(value = "/schoolYear/all", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult findAllSchoolYear() throws Exception {
        List<SchoolYear> schoolYears = jwtRemoteService.findAllSchoolYear();
        return new CommonResult(true, schoolYears, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查询当前学年", notes = "")
    @RequestMapping(value = "/schoolYear/current", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult findCurrentSchoolYear() throws Exception {
        SchoolYear schoolYear = jwtRemoteService.findCurrentSchoolYear();
        return new CommonResult(true, schoolYear, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查询用户学院", notes = "")
    @RequestMapping(value = "/college", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult findCollegeByUser() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<PrimaryTeachingInstitution> primaryTeachingInstitutions = jwtRemoteService.findCollegeByUser(user);
        return new CommonResult(true, primaryTeachingInstitutions, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查询学院下专业列表", notes = "只需学院id即可")
    @RequestMapping(value = "/major/{primaryTeachingInstitutionId}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult findMajorByCollege(@PathVariable Long primaryTeachingInstitutionId) throws Exception {
        List<SecondaryTeachingInstitution> secondaryTeachingInstitutions = jwtRemoteService.findMajorsByCollege(primaryTeachingInstitutionId);
        return new CommonResult(true, secondaryTeachingInstitutions, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查询专业下年级列表", notes = "只需专业id即可")
    @RequestMapping(value = "/grade/{secondaryTeachingInstitutionId}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult findGradeByMajor(@PathVariable Long secondaryTeachingInstitutionId) throws Exception {
        List<Grade> grades = jwtRemoteService.findGradesByMajor(secondaryTeachingInstitutionId);
        return new CommonResult(true, grades, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查询年级和专业下班级列表", notes = "secondaryTeachingInstitutionId专业id、gradeId年级id")
    @RequestMapping(value = "/major/{secondaryTeachingInstitutionId}/{gradeId}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult findClassesByMajorAndGrade(@PathVariable Long secondaryTeachingInstitutionId, @PathVariable Long gradeId) throws Exception {
        List<Classes> classesList = jwtRemoteService.findClassesByGradeAndMajor(secondaryTeachingInstitutionId, gradeId);
        return new CommonResult(true, classesList, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查询学院下年级列表", notes = "primaryTeachingInstitutionId学院ID")
    @RequestMapping(value = "/grade/college/{primaryTeachingInstitutionId}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult findGradeByCollege(@PathVariable Long primaryTeachingInstitutionId) throws Exception {
        List<Grade> grades = jwtRemoteService.findGradesByCollege(primaryTeachingInstitutionId);
        return new CommonResult(true, grades, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "查询所有年级列表", notes = "")
    @RequestMapping(value = "/grade/all", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult findAllGrade() throws Exception {
        List<Grade> grades = jwtRemoteService.findAllGrade();
        return new CommonResult(true, grades, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "获取服务器时间")
    @GetMapping("/serverTime")
    @ResponseBody
    public CommonResult getServerTime(){
        return new CommonResult(true, new Date(), ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }
}
