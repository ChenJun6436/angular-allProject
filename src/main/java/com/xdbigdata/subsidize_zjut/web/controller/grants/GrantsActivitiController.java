package com.xdbigdata.subsidize_zjut.web.controller.grants;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsCheckResultDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsDownloadNameListDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsRejectDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsUpdateLevelDto;
import com.xdbigdata.subsidize_zjut.domain.GrantsApply;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IExcelService;
import com.xdbigdata.subsidize_zjut.service.IGrantsActivitiService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/5/26.
 */
@Api("助学金——流程相关")
@RestController
@RequestMapping("/grantsActiviti")
public class GrantsActivitiController {

    @Autowired
    private IGrantsActivitiService grantsActivitiService;

    @Autowired
    private IExcelService excelService;

    @ApiOperation("学生开启流程")
    @RequestMapping(value = "/startProcess",method = RequestMethod.POST)
    public CommonResult startProcess(@RequestBody GrantsApply grantsApply) throws Exception{
        grantsActivitiService.startGrantsProcess(grantsApply);
        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("驳回材料")
    @RequestMapping(value ="/rejectTasks", method = RequestMethod.POST )
    public CommonResult rejectTask(@RequestBody GrantsRejectDto rejectDto) throws Exception {
        grantsActivitiService.rejectTasks(rejectDto);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("更新等级")
    @RequestMapping(value = "updateGrantsLevel",method = RequestMethod.POST)
    public CommonResult updateGrantsLevel(@RequestBody GrantsUpdateLevelDto updateLevelDto) throws Exception{
        grantsActivitiService.updateGrantsLevel(updateLevelDto);
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("当前登录用户查看自己的任务列表")
    @RequestMapping(value = "/listTasks",method = RequestMethod.GET)
    public CommonResult listTasks() throws Exception{
        List<GrantsCheckResultDto> result = grantsActivitiService.listTasks();
        return new CommonResult(true,result, ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("提交任务，转交下一步")
    @RequestMapping(value = "/commitTasks/{stage}", method = RequestMethod.GET)
    public CommonResult commitTasks(@PathVariable String stage) throws Exception {
        grantsActivitiService.commitTasks(stage);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("查看公示列表")
    @GetMapping("/listPublicity")
    public CommonResult listPublicityResult() throws Exception{
        return new CommonResult(true,grantsActivitiService.listPublicityResult(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

//    @ApiOperation("获取当前阶段和下一阶段")
//    @GetMapping("/findStage")
//    public CommonResult findCurrentStageAndNextStage() throws Exception{
//        return new CommonResult(true,grantsActivitiService.findCurrentStageAndNextStage(),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
//    }

    @ApiOperation("下载名单")
    @GetMapping("/downloadNameList/{stage}")
    public CommonResult downloadNameList(@PathVariable String stage) throws Exception{
        List<GrantsDownloadNameListDto> resultList = grantsActivitiService.findDownloadNameListDataByStage(stage);
        return new CommonResult(true,excelService.creatExcel(resultList),ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "审核材料",notes = "传流程id，processId,pass 0_驳回，1_通过")
    @GetMapping("/checkMaterial/{processId}/{pass}")
    public CommonResult checkMaterial(@PathVariable String processId,@PathVariable Integer pass)throws Exception{
        grantsActivitiService.checkMaterial(processId,pass);
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("认定完成（学校用户专属）")
    @GetMapping("/finishGrants")
    public CommonResult finishGrants() throws Exception{
        grantsActivitiService.finishGrants();
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }
}
