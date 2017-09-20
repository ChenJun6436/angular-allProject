package com.xdbigdata.subsidize_zjut.web.controller.grants;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsUpdateDto;
import com.xdbigdata.subsidize_zjut.domain.Grants;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IGrantsSchoolService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 助学金学校相关接口
 * Created by Administrator on 2017/5/24.
 */
@RestController
@RequestMapping(value = "/grantsSchool")
@Api("助学金——学校接口")
public class GrantsSchoolController {

    @Autowired
    private IGrantsSchoolService grantsSchoolService;

    @ApiOperation("助学金配置（学校总人数 + 已认定经济困难人数）")
    @GetMapping(value = "/studentNumInfo")
    public CommonResult findNumberOfPeople() throws Exception{
        return new CommonResult(true,grantsSchoolService.findstudentNumInfo(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("添加助学金")
    @RequestMapping(value = "/saveGrants", method = RequestMethod.POST)
    public CommonResult saveGrants(@RequestBody Grants grants) throws Exception{
        return new CommonResult(true, grantsSchoolService.saveGrants(grants), ErrorCode.SAVE_SUCCESS.code, ErrorCode.SAVE_SUCCESS.des);
    }

    @ApiOperation("助学金列表")
    @RequestMapping(value = "/listGrants",method = RequestMethod.GET)
    public CommonResult listGrants() throws Exception{
        return new CommonResult(true,grantsSchoolService.listGrants(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("修改助学金")
    @RequestMapping(value = "/updateGrants",method = RequestMethod.PUT)
    public CommonResult updateGrants(@RequestBody GrantsUpdateDto grants) throws Exception{
        grantsSchoolService.updateGrants(grants);
        return new CommonResult(true,null,ErrorCode.UPDATE_SUCCESS.code,ErrorCode.UPDATE_SUCCESS.des);
    }

    @ApiOperation(value = "删除助学金" ,notes = "传id")
    @RequestMapping(value = "/deleteGrants/{id}",method = RequestMethod.DELETE)
    public CommonResult deleteGrantsByUuid(@PathVariable Long id) throws Exception{
        grantsSchoolService.deleteGrantsById(id);
        return new CommonResult(true,null,ErrorCode.DELETE_SUCCESS.code,ErrorCode.DELETE_SUCCESS.des);
    }

    @ApiOperation(value = "获取配置学院名额",notes = "通过助学金id获取配置学院名额")
    @RequestMapping(value = "/getCollegeConfig/{grantsId}",method = RequestMethod.GET)
    public CommonResult configCollegeNum(@PathVariable Long grantsId) throws Exception{
        return new CommonResult(true,grantsSchoolService.findCollegeConfigByGrantsId(grantsId),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(" 保存/更新 配置信息")
    @RequestMapping(value = "/saveOrUpdateCollegeConfig",method = RequestMethod.POST)
    public CommonResult saveOrUpdateCollegeConfig(@RequestBody GrantsConfigDto configDto){
        grantsSchoolService.saveOrUpdateCollegeConfig(configDto);
        return new CommonResult(true,null,ErrorCode.SAVE_SUCCESS.code,ErrorCode.SAVE_SUCCESS.des);
    }

    @ApiOperation(value = "处理新的申请",notes = "pass : 1_同意，0_拒绝")
    @RequestMapping(value = "/dealNewApply/{pass}/{id}",method = RequestMethod.GET)
    public CommonResult dealNewApply(@PathVariable Integer pass,@PathVariable Long id){
        grantsSchoolService.dealNewApply(pass,id );
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }



}
