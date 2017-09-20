package com.xdbigdata.subsidize_zjut.web.controller.subsidizehistory;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsHistoryDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.HistoryResult;
import com.xdbigdata.subsidize_zjut.domain.InspirationalScholarship;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.SubsidizeHistoryService;
import com.xdbigdata.subsidize_zjut.util.ExcelUtil;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by sky on 2017/5/23.
 */
@Api(value = "资助记录模块", description = "资助记录模块")
@RequestMapping("/subsidizeHistory")
@Controller
public class SubsidizeHistoryController {
    @Autowired
    private SubsidizeHistoryService subsidizeHistoryService;

    @ApiOperation(value = "根据学院和年级查询经济困难认定记录", notes = "collegeName:学院名，gradeName:年级名")
    @RequestMapping(value = "/poverty/list/{collegeName}/{gradeName}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult povertyListByGradeName(@PathVariable String collegeName, @PathVariable String gradeName) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<HistoryResult> povertyHistories = subsidizeHistoryService.findPovertyHistoryByCondition(sessionUserDto, collegeName, gradeName);
        return new CommonResult(true, povertyHistories, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "生成经济困难认定记录Excel", notes = "collegeName:学院名，gradeName:年级名")
    @RequestMapping(value = "/poverty/list/excel/{collegeName}/{gradeName}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult exportPovertyList(@PathVariable String collegeName, @PathVariable String gradeName) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<HistoryResult> povertyHistories = subsidizeHistoryService.findPovertyHistoryByCondition(sessionUserDto, collegeName, gradeName);
        if (povertyHistories == null || povertyHistories.size() == 0) {
            return new CommonResult(false, null, ErrorCode.EXCEL_IS_NULL.code, ErrorCode.EXCEL_IS_NULL.des);
        }
        String basePath = "download" + File.separator + "poverty";
        String contentPath = ResourceUtils.getFile("classpath:").getPath() + File.separator + "static"
                + File.separator + basePath;
        String savefilename = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) + ".xls";
        File savefile = new File(contentPath, savefilename);
        File parentFile = savefile.getParentFile();
        if (!parentFile.exists()) {
            parentFile.mkdirs();
        }
        if (!savefile.exists()) {
            savefile.createNewFile();
        }
        OutputStream outputStream = new FileOutputStream(savefile);
        String title = "经济困难认定记录";
        ExcelUtil.excelExport(title, povertyHistories, outputStream);
        String path = basePath + File.separator + savefile.getName();
        return new CommonResult(true, path, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "根据学院和年级查询助学金记录", notes = "collegeName:学院名，gradeName:年级名")
    @RequestMapping(value = "/grants/list/{collegeName}/{gradeName}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult grantsListByCollegeAndGrade(@PathVariable String collegeName, @PathVariable String gradeName) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<GrantsHistoryDto> grantsHistoryDtos = subsidizeHistoryService.findGrantsHistoryByCondition(sessionUserDto, collegeName, gradeName);
        return new CommonResult(true, grantsHistoryDtos, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "生成助学金记录Excel", notes = "collegeName:学院名，gradeName:年级名")
    @RequestMapping(value = "/grants/list/excel/{collegeName}/{gradeName}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult exportGrantsList(@PathVariable String collegeName, @PathVariable String gradeName) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<GrantsHistoryDto> grantsHistoryDtos = subsidizeHistoryService.findGrantsHistoryByCondition(sessionUserDto, collegeName, gradeName);
        if (grantsHistoryDtos == null || grantsHistoryDtos.size() == 0) {
            return new CommonResult(false, null, ErrorCode.EXCEL_IS_NULL.code, ErrorCode.EXCEL_IS_NULL.des);
        }
        String basePath = "download" + File.separator + "grants";
        String contentPath = ResourceUtils.getFile("classpath:").getPath() + File.separator + "static"
                + File.separator + basePath;
        String savefilename = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) + ".xls";
        File savefile = new File(contentPath, savefilename);
        File parentFile = savefile.getParentFile();
        if (!parentFile.exists()) {
            parentFile.mkdirs();
        }
        if (!savefile.exists()) {
            savefile.createNewFile();
        }
        OutputStream outputStream = new FileOutputStream(savefile);
        String title = "助学金记录";
        ExcelUtil.excelExport(title, grantsHistoryDtos, outputStream);
        String path = basePath + File.separator + savefile.getName();
        return new CommonResult(true, path, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }

    @ApiOperation(value = "根据学院和年级查询励志奖学金记录", notes = "collegeName:学院名，gradeName:年级名")
    @RequestMapping(value = "/inspScholarship/list/{collegeName}/{gradeName}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult inspScholarshipListByCollegeAndGrade(@PathVariable String collegeName, @PathVariable String gradeName) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<InspirationalScholarship> inspirationalScholarships = subsidizeHistoryService.findInspirationalScholarship(sessionUserDto, collegeName, gradeName);
        return new CommonResult(true, inspirationalScholarships, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "生成励志奖学金记录Excel", notes = "collegeName:学院名，gradeName:年级名")
    @RequestMapping(value = "/inspScholarship/list/excel/{collegeName}/{gradeName}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult exportinspScholarshipList(@PathVariable String collegeName, @PathVariable String gradeName) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<InspirationalScholarship> inspirationalScholarships = subsidizeHistoryService.findInspirationalScholarship(sessionUserDto, collegeName, gradeName);
        if (inspirationalScholarships == null || inspirationalScholarships.size() == 0) {
            return new CommonResult(false, null, ErrorCode.EXCEL_IS_NULL.code, ErrorCode.EXCEL_IS_NULL.des);
        }
        String basePath = "download" + File.separator + "inspScholarship";
        String contentPath = ResourceUtils.getFile("classpath:").getPath() + File.separator + "static"
                + File.separator + basePath;
        String savefilename = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()) + ".xls";
        File savefile = new File(contentPath, savefilename);
        File parentFile = savefile.getParentFile();
        if (!parentFile.exists()) {
            parentFile.mkdirs();
        }
        if (!savefile.exists()) {
            savefile.createNewFile();
        }
        OutputStream outputStream = new FileOutputStream(savefile);
        String title = "励志奖学金记录";
        ExcelUtil.excelExport(title, inspirationalScholarships, outputStream);
        String path = basePath + File.separator + savefile.getName();
        return new CommonResult(true, path, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }
}
