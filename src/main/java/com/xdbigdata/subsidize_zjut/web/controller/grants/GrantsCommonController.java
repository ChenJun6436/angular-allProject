package com.xdbigdata.subsidize_zjut.web.controller.grants;

import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsDissentDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsDissentResponseDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsNoticeDto;
import com.xdbigdata.subsidize_zjut.domain.GrantsDissent;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IGrantsCommonService;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.util.BankCardUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
 * 助学金公共操作
 * Created by Administrator on 2017/5/24.
 */
@RestController
@RequestMapping(value = "/grantsCommon")
@Api("助学金——公共操作")
public class GrantsCommonController {


    @Autowired
    private IGrantsCommonService grantsCommonService;

    @Autowired
    private IGrantsJWTService grantsJWTService;


    @ApiOperation(value = "上传助学金模板/学生申请材料")
    @RequestMapping(value = "/uploadFile",method = RequestMethod.POST)
    public CommonResult uploadFile(MultipartFile file) throws Exception{
        return new CommonResult(true,grantsCommonService.uploadFile(file), ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }


    @ApiOperation(value = "获取当前是否为公示阶段")
    @GetMapping("/isPublicity")
    public CommonResult findPublicityStage() throws Exception{
        return new CommonResult(true,grantsCommonService.findPublicityStage(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "是否配置公示时间",notes = "!null_配置，null_未配置")
    @GetMapping("/isConfigPublicityTime")
    public CommonResult isConfigPublicityTime() throws Exception{
        return new CommonResult(true,grantsCommonService.isCofigPublicityTime(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("助学金详情")
    @RequestMapping(value = "/getGrantsDetail/{grantsUuid}",method = RequestMethod.GET)
    public CommonResult getGrantsDetail(@PathVariable String grantsUuid){
        return new CommonResult(true,grantsCommonService.findGrantsDetailByUuid(grantsUuid),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "获取学年")
    @RequestMapping(value = "/getSchoolYear",method = RequestMethod.GET)
    public CommonResult getSchoolYear() throws Exception{
        return new CommonResult(true,grantsJWTService.listAllSchoolYear(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("银行卡号校验")
    @RequestMapping(value = "/checkoutBankCard/{bankCard}",method = RequestMethod.GET)
    public CommonResult checkoutBankCard(@PathVariable String bankCard){
        String result = BankCardUtil.checkoutBankCard(bankCard);
        if (result != null){
            return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
        }
        return new CommonResult(false,null,ErrorCode.HANDLER_FAILED.code,ErrorCode.HANDLER_FAILED.des);
    }

    @ApiOperation("依据代领人学号查询代领人姓名")
    @RequestMapping(value = "/getAgentName/{sn}",method = RequestMethod.GET)
    public CommonResult findAgentNameBySn(@PathVariable String sn)throws Exception{
        Student student = grantsJWTService.findStudentBySn(sn);
        return new CommonResult(true,student == null ? null:student.getName(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("发出异议")
    @RequestMapping(value = "/commitDissent",method = RequestMethod.POST)
    public CommonResult saveCommitDissent(@RequestBody GrantsDissentDto grantsDissent) throws Exception{
        grantsCommonService.saveCommitDissent(grantsDissent);
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("公示查看异议列表")
    @RequestMapping(value = "/viewOpenDissent", method = RequestMethod.GET)
    public CommonResult viewOpenDissent() throws Exception {
        List<Map<String, Object>> dissents = grantsCommonService.findDissentByStatus();
        return new CommonResult(true, dissents, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("处理异议")
    @RequestMapping(value = "/dealDissent", method = RequestMethod.POST)
    public CommonResult dealDissent(@RequestBody GrantsDissentResponseDto responseDto) throws Exception {
        grantsCommonService.saveDissentDealInfo(responseDto);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }


    @ApiOperation("获取登录学生贫困等级")
    @RequestMapping(value = "/getPovertyLevel/{sn}",method = RequestMethod.GET)
    public CommonResult getPovertyLevel(@PathVariable String sn) throws Exception{
        String povertyLevel = grantsCommonService.findStudentPovertyLevel(sn);
        return new CommonResult(true,povertyLevel,ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("获取当前申请的助学金")
    @RequestMapping(value = "/currentGrants",method = RequestMethod.GET)
    public CommonResult findCurrentGrants(){
        return new CommonResult(true,grantsCommonService.findCurrentGrants(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("保存公示时间")
    @RequestMapping(value = "/savePublicityTime",method = RequestMethod.POST)
    public CommonResult savePublicityTimeConfig(@RequestBody GrantsPublicity grantsPublicity) throws Exception{
        grantsCommonService.saveOrUpdatePublicityTimeConfig(grantsPublicity);
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("获取公示时间")
    @GetMapping("/getPublicityTime")
    public CommonResult findPublicityTime() throws Exception{
        return new CommonResult(true,grantsCommonService.findPublicityTimeConfig(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }
    @ApiOperation("依据学年获取助学金")
    @GetMapping(value = "/listGrantsBySchoolYear/{schoolYear}")
    public CommonResult listGrantsBySchoolYear(@PathVariable String schoolYear){
        return new CommonResult(true,grantsCommonService.listGrantsBySchoolYear(schoolYear),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }


    @ApiOperation("下载名单")
    @RequestMapping(value = "/downloadNameList",method = RequestMethod.GET)
    public CommonResult downloadNameList(){
        return new CommonResult(true,null ,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

}
