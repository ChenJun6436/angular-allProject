package com.xdbigdata.subsidize_zjut.web.controller.joinarmysubsidize;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.JoinArmySubsidizeDto;
import com.xdbigdata.subsidize_zjut.common.dto.JoinArmySubsidizeExcelDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.JoinArmySubsidize;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.exception.XDException;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import com.xdbigdata.subsidize_zjut.service.JoinArmySubsidizeService;
import com.xdbigdata.subsidize_zjut.util.ExcelUtil;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.util.List;

/**
 * Created by sky on 2017/5/12.
 */
@Api(value = "入伍补助模块", description = "入伍补助模块")
@Controller
@RequestMapping("/joinArmySubsidize")
public class JoinArmySubsidizeController {
    @Autowired
    private JoinArmySubsidizeService joinArmySubsidizeService;
    @Autowired
    private JWTRemoteService jwtRemoteService;

    @ApiOperation(value = "添加单个补助", notes = "必须参数学号studentSn和金额amount")
    @RequestMapping(value = "/single", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult save(@RequestBody JoinArmySubsidize joinArmySubsidize) throws Exception {
        int num = joinArmySubsidizeService.insert(joinArmySubsidize);
        return new CommonResult(true, num, ErrorCode.SAVE_SUCCESS.code, ErrorCode.SAVE_SUCCESS.des);
    }

    @ApiOperation(value = "批量导入")
    @RequestMapping(value = "/batch", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult saveBatch(@RequestParam("file") MultipartFile file) throws Exception {
        List<JoinArmySubsidizeExcelDto> temporarySubsidizesExcelDtos = ExcelUtil.parseExcel(JoinArmySubsidizeExcelDto.class, file);
        int num = joinArmySubsidizeService.insertBatch(temporarySubsidizesExcelDtos);
        return new CommonResult(true, num, ErrorCode.FILE_UPLOAD_SUCCESS.code, ErrorCode.FILE_UPLOAD_SUCCESS.des);
    }

    @ApiOperation(value = "查询所有", notes = "无需参数")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult queryAll() {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<JoinArmySubsidizeDto> joinArmySubsidizeDtos = joinArmySubsidizeService.findAllByUser(sessionUserDto);
        return new CommonResult(true, joinArmySubsidizeDtos, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);

    }

    @ApiOperation(value = "下载入伍补助名单", notes = "无需参数")
    @RequestMapping(value = "/student/list", method = RequestMethod.GET)
    public void exportExcel(HttpServletResponse httpServletResponse) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<JoinArmySubsidizeDto> joinArmySubsidizeDtos = joinArmySubsidizeService.findAllByUser(sessionUserDto);
        OutputStream outputStream = httpServletResponse.getOutputStream();
        String title = "入伍补助名单";
        ExcelUtil.excelExport(title, joinArmySubsidizeDtos, outputStream);
    }

    @ApiOperation(value = "修改单个入伍补助")
    @RequestMapping(value = "/joinArmySubsidize", method = RequestMethod.PUT)
    @ResponseBody
    public CommonResult update(@RequestBody JoinArmySubsidize joinArmySubsidize) throws XDException {
        joinArmySubsidizeService.update(joinArmySubsidize);
        return new CommonResult(true, null, ErrorCode.UPDATE_SUCCESS.code, ErrorCode.UPDATE_SUCCESS.des);
    }

    @ApiOperation(value = "删除单个入伍补助")
    @RequestMapping(value = "/joinArmySubsidize/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public CommonResult delete(@PathVariable Long id) throws XDException {
        joinArmySubsidizeService.delete(id);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
    }

    @ApiOperation(value = "批量删除入伍补助")
    @RequestMapping(value = "/joinArmySubsidize", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult deleteBatch(@RequestBody List<Long> ids) throws XDException {
        joinArmySubsidizeService.deleteBatch(ids);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
    }

}
