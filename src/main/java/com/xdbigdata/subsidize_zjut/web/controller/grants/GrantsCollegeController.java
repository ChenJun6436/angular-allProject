package com.xdbigdata.subsidize_zjut.web.controller.grants;

import com.xdbigdata.jwtService.domain.CollegeUser;
import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsCollegeConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IGrantsCollegeService;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Administrator on 2017/5/25.
 */

@Api("助学金——学院相关接口")
@RestController
@RequestMapping(value = "/grantsCollege")
public class GrantsCollegeController {

    @Autowired
    private IGrantsCollegeService grantsCollegeService;

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @ApiOperation("助学金列表")
    @RequestMapping(value = "/listGrants",method = RequestMethod.GET)
    public CommonResult listCollegeGrants() throws Exception{
        return new CommonResult(true,grantsCollegeService.listGrants(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("配置预留名额")
    @GetMapping("/saveObligateAllot/{grantsId}/{allot}")
    public CommonResult saveObligateAllot(@PathVariable Long grantsId,@PathVariable Long allot) throws Exception{
        grantsCollegeService.saveObligateAllot(grantsId,allot);
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }


    @ApiOperation("获取名额配置")
    @RequestMapping(value = "/getGradeConfig/{grantsId}",method = RequestMethod.GET)
    public CommonResult findGradeConfig(@PathVariable Long grantsId) throws Exception{
        return new CommonResult(true,grantsCollegeService.findGradeConfig(grantsId),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation("保存名额配置")
    @RequestMapping(value = "/saveGradeConfig",method = RequestMethod.POST)
    public CommonResult saveGradeConfig(@RequestBody GrantsCollegeConfigDto collegeConfig){
        grantsCollegeService.saveGradeConfig(collegeConfig);
        return new CommonResult(true,null,ErrorCode.SAVE_SUCCESS.code,ErrorCode.SAVE_SUCCESS.des);
    }
    @ApiOperation("申请名额")
    @RequestMapping(value = "/applyQuota/{grantsId}/{applyQuota}",method = RequestMethod.GET)
    public CommonResult saveApplyQuota(@PathVariable Integer grantsId, @PathVariable Integer applyQuota) throws Exception{
        grantsCollegeService.saveApplyQuota(grantsId,applyQuota);
        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation("退回名额")
    @RequestMapping(value = "/returnQuota/{grantsId}/{quotas}",method = RequestMethod.GET)
    public CommonResult updateReturnQuotas2School(@PathVariable Integer grantsId,@PathVariable Integer quotas) throws Exception{
        grantsCollegeService.updateReturnQuotas2School(grantsId,quotas);
        return new CommonResult(true,null,ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }


    @ApiOperation("获取登录学院用户学院名")
    @RequestMapping(value = "/getCollegeName",method = RequestMethod.GET)
    public CommonResult getCollegeName() throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
        return new CommonResult(true,collegeUser.getPrimaryTeachingInstitution() == null ? null
                : collegeUser.getPrimaryTeachingInstitution().getName(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "直接提交到学校审核",notes = "学院公示结束后便可直接提交到学院审核，若登录用户的学院公示结束_yes，反之_no")
    @GetMapping("/commit2SchoolCheck")
    public CommonResult isCollegeCanCommit2SchoolCheck() throws Exception{
        return new CommonResult(true,grantsCollegeService.isCollegeCanCommit2School(),ErrorCode.FIND_SUCCESS.code,ErrorCode.FIND_SUCCESS.des);
    }
}
