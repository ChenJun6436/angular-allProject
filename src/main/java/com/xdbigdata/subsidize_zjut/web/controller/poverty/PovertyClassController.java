package com.xdbigdata.subsidize_zjut.web.controller.poverty;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.para.CheckMaterialDto;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.PovertyClassService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 困难认定-班级用户相关接口
 * Created by staunch on 2017/4/13.
 */
@RestController
@RequestMapping("/povertyClass")
@Api("困难认定-班级用户相关接口")
public class PovertyClassController {

    @Autowired
    private PovertyClassService povertyClassService;

    @ApiOperation(value = "班级用户审核学生材料")
    @PostMapping(value = "/checkMaterial")
    public CommonResult checkMaterial(@RequestBody List<CheckMaterialDto> checkMaterialDtos) throws Exception{
        povertyClassService.classCheckMaterial(checkMaterialDtos);
        return new CommonResult(true, null, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }
}
