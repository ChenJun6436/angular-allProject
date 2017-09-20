package com.xdbigdata.subsidize_zjut.web.controller.temporarysubsidize;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.TemporarySubsidizesDto;
import com.xdbigdata.subsidize_zjut.common.dto.TemporarySubsidizesExcelDto;
import com.xdbigdata.subsidize_zjut.domain.TemporarySubsidize;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.exception.XDException;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import com.xdbigdata.subsidize_zjut.service.TemporarySubsidizeService;
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
@Api(value = "临时困难补助模块", description = "临时困难补助模块")
@Controller
@RequestMapping("/temporarySubsidize")
public class TemporarySubsidizeController {
    @Autowired
    private TemporarySubsidizeService temporarySubsidizeService;
    @Autowired
    private JWTRemoteService jwtRemoteService;

    @ApiOperation(value = "添加单个补助", notes = "必须参数学号studentSn和金额amount")
    @RequestMapping(value = "/single", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult save(@RequestBody TemporarySubsidize temporarySubsidize) throws Exception {
        int num = temporarySubsidizeService.insert(temporarySubsidize);
        return new CommonResult(true, num, ErrorCode.SAVE_SUCCESS.code, ErrorCode.SAVE_SUCCESS.des);
    }

    @ApiOperation(value = "批量导入")
    @RequestMapping(value = "/batch", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult saveBatch(@RequestParam("file") MultipartFile file) throws Exception {
        List<TemporarySubsidizesExcelDto> temporarySubsidizesExcelDtos = ExcelUtil.parseExcel(TemporarySubsidizesExcelDto.class, file);
        int num = temporarySubsidizeService.insertBatch(temporarySubsidizesExcelDtos);
        return new CommonResult(true, num, ErrorCode.FILE_UPLOAD_SUCCESS.code, ErrorCode.FILE_UPLOAD_SUCCESS.des);
    }

    @ApiOperation(value = "查询所有", notes = "无需参数")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult queryAll() {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<TemporarySubsidizesDto> temporarySubsidizesDtos = temporarySubsidizeService.findAllByUser(sessionUserDto);
        return new CommonResult(true, temporarySubsidizesDtos, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);

    }

    @ApiOperation(value = "下载临时困难补助名单", notes = "无需参数")
    @RequestMapping(value = "/student/list", method = RequestMethod.GET)
    public void exportExcel(HttpServletResponse httpServletResponse) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<TemporarySubsidizesDto> temporarySubsidizesDtos = temporarySubsidizeService.findAllByUser(sessionUserDto);
        OutputStream outputStream = httpServletResponse.getOutputStream();
        String title = "临时困难补助名单";
        ExcelUtil.excelExport(title, temporarySubsidizesDtos, outputStream);
    }

    @ApiOperation(value = "修改单个临时困难补助名单")
    @RequestMapping(value = "/temporarySubsidize", method = RequestMethod.PUT)
    @ResponseBody
    public CommonResult updateTemporarySubsidize(@RequestBody TemporarySubsidize temporarySubsidize) throws XDException {
        temporarySubsidizeService.update(temporarySubsidize);
        return new CommonResult(true, null, ErrorCode.UPDATE_SUCCESS.code, ErrorCode.UPDATE_SUCCESS.des);
    }

    @ApiOperation(value = "删除单个临时困难补助名单")
    @RequestMapping(value = "/temporarySubsidize/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public CommonResult deleteTemporarySubsidize(@PathVariable Long id){
        temporarySubsidizeService.delete(id);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
    }

    @ApiOperation(value = "批量删除临时困难补助名单")
    @RequestMapping(value = "/temporarySubsidize", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult deleteTemporarySubsidizeBatch(@RequestBody List<Long> ids){
        temporarySubsidizeService.deleteBatch(ids);
        return new CommonResult(true, null, ErrorCode.DELETE_SUCCESS.code, ErrorCode.DELETE_SUCCESS.des);
    }

}
