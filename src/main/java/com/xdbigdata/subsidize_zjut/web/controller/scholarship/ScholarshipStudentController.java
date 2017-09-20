package com.xdbigdata.subsidize_zjut.web.controller.scholarship;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipApplyMaterialDto;
import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipCollegeDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.Awards;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IScholarshipActivitiService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipCollegeService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipStudentService;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Administrator on 2017/6/7 0007.
 */
@RestController
@RequestMapping(value = "/scholarshipStudent")
@Api("奖学金——学生接口")
public class ScholarshipStudentController {

    @Autowired
    private IScholarshipStudentService scholarshipStudentService;


    @ApiOperation("获取励志奖学金申请条件")
    @RequestMapping(value = "/saveOrUpdateCollegeConfig",method = RequestMethod.GET)
    public CommonResult getScholarshipConditions(@RequestBody ScholarshipCollegeDto configDto){

        return new CommonResult(true,scholarshipStudentService.getScholarshipConditions(), ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }
    @ApiOperation("学生申请励志奖学金并开启流程")
    @RequestMapping(value = "/applyScholarship",method = RequestMethod.POST)
    public CommonResult studentApplyScholarship(@RequestBody ScholarshipApplyMaterialDto scholarshipApplyMaterialDto) throws Exception{
        scholarshipStudentService.saveOrUpdateApplyMaterial(scholarshipApplyMaterialDto);
        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("获取学生基本信息")
    @RequestMapping(value = "/getStudentInfo",method = RequestMethod.GET)
    public CommonResult getSudentInfo(){
        return new CommonResult(true,scholarshipStudentService.getStudentInfoById(), ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    /*@ApiOperation(value = "学生开始申请流程")
    @RequestMapping (value = "/startScholarshipProcess",method = RequestMethod.POST)
    public CommonResult startPovertyProcess(@RequestBody ScholarshipApplyMaterialDto scholarshipApplyMaterialDto) throws Exception {
        scholarshipActivitiService.startScholarshipApplyProcess(scholarshipApplyMaterialDto);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }*/

    @ApiOperation(value = "学生删除获奖信息")
    @RequestMapping (value = "/deleteAward/{awardId}",method = RequestMethod.POST)
    public CommonResult deleteAward(@PathVariable Long awardId) throws Exception {
        scholarshipStudentService.deleteAwardsById(awardId);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code,ErrorCode.DELETE_SUCCESS.des);
    }

    @ApiOperation(value = "学生新增获奖信息")
    @RequestMapping (value = "/savAward",method = RequestMethod.POST)
    public CommonResult savAward(@RequestBody Awards awards) throws Exception {
        scholarshipStudentService.saveAwards(awards);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code,ErrorCode.DELETE_SUCCESS.des);
    }
}
