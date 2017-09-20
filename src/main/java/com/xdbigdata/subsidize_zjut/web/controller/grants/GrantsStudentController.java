package com.xdbigdata.subsidize_zjut.web.controller.grants;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsRecommitDto;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IGrantsStudentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Administrator on 2017/5/25.
 */
@Api("助学金——学生相关接口")
@RestController
@RequestMapping(value = "/grantsStudent")
public class GrantsStudentController {


    @Autowired
    private IGrantsStudentService grantsStudentService;

    @ApiOperation("可申请助学金类型列表")
    @RequestMapping(value = "/listAuthGrants",method = RequestMethod.GET)
    public CommonResult listAuthGrants() throws Exception{
        return new CommonResult(true,grantsStudentService.listAuthGrants(),
                ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("获取学生上传资料列表")
    @RequestMapping(value = "/listApplyMaterial",method = RequestMethod.GET)
    public CommonResult listApplyMaterial() throws Exception{
        return new CommonResult(true,grantsStudentService.listApplyMaterial(),
                ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("删除学生上传资料列表")
    @RequestMapping(value = "/deleteApplyMaterial/{id}",method = RequestMethod.GET)
    public CommonResult deleteApplyMaterial(@PathVariable Long id) throws Exception{
        grantsStudentService.deleteApplyMaterialById(id);
        return new CommonResult(true,null,ErrorCode.DELETE_SUCCESS.code,ErrorCode.DELETE_SUCCESS.des);
    }

    @ApiOperation("重新提交材料")
    @RequestMapping(value = "/recommitMaterial",method = RequestMethod.POST)
    public CommonResult recommitMaterial(@RequestBody GrantsRecommitDto grantsRecommitDto){
        grantsStudentService.recommitMaterial(grantsRecommitDto);
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }


    @ApiOperation("查看异议处理意见")
    @GetMapping("/listMyDissent")
    public CommonResult listMyDissent(){
        return new CommonResult(true,grantsStudentService.listMyDissent(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }
}
