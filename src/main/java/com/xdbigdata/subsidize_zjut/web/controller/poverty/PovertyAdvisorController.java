package com.xdbigdata.subsidize_zjut.web.controller.poverty;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.para.CheckMaterialDto;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.PovertyAdvisorService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 辅导员角色相关的接口
 * Created by staunch on 2017/4/1.
 */
@RestController
@RequestMapping("/povertyAdvisor")
@Api("困难认定——辅导员角色相关接口")
public class PovertyAdvisorController {

    @Autowired
    private PovertyAdvisorService povertyAdvisorService;

    @ApiOperation(value = "辅导员用户审核学生材料",notes = "这个接口是辅导员用户在审核学生材料调用的接口")
    @PostMapping(value = "/checkMaterial")
    public CommonResult checkMaterial(@RequestBody List<CheckMaterialDto> checkMaterialDtos)throws Exception{
        povertyAdvisorService.advisorCheckMaterial(checkMaterialDtos);
        return new CommonResult(true,null, ErrorCode.HANDLER_SUCCESS.code,ErrorCode.HANDLER_SUCCESS.des);
    }

}
