package com.xdbigdata.subsidize_zjut.web.controller.loan;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.common.dto.LoanRecordDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.Loan;
import com.xdbigdata.subsidize_zjut.domain.LoanRecord;
import com.xdbigdata.subsidize_zjut.exception.*;
import com.xdbigdata.subsidize_zjut.service.LoanService;
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
 * Created by sky on 2017/5/11.
 */
@Api(value = "贷款模块", description = "贷款模块")
@RequestMapping("/loan")
@Controller
public class LoanController {
    @Autowired
    private LoanService loanService;

    @ApiOperation(value = "查询最新贷款项", notes = "无需参数")
    @RequestMapping(value = "/newest", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult queryNewest() throws Exception {
        Loan loan = loanService.findLoanByCurrentSchoolYear();
        if(loan == null) {
            throw new BusinessException("无当前学年贷款项");
        }
        return new CommonResult(true, loan, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
    }

    @ApiOperation(value = "预申请贷款", notes = "只需传入loanId, appliedAmount三个参数即可")
    @RequestMapping(value = "/application", method = RequestMethod.PUT)
    @ResponseBody
    public CommonResult applyLoan(@RequestBody LoanRecord loanRecord) {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        if (sessionUserDto == null) {
            return new CommonResult(false, null, ErrorCode.LOGIN_ERROR_USER.code, ErrorCode.LOGIN_ERROR_USER.des);
        } else {
            if (sessionUserDto.getUserType() != 4 && sessionUserDto.getUserType() != 5) {
                return new CommonResult(false, null, ErrorCode.INSUFFICIENT_USER_PERMISSIONS.code, ErrorCode.INSUFFICIENT_USER_PERMISSIONS.des);
            } else {
                loanRecord.setStudentSn(sessionUserDto.getUserName());
                boolean flag = loanService.applyLoan(loanRecord);
                return new CommonResult(true, null, ErrorCode.APPLY_LOAN_SUCCESS.code, ErrorCode.APPLY_LOAN_SUCCESS.des);
            }
        }
    }

    @ApiOperation(value = "上传通过审批的学生名单", notes = "")
    @RequestMapping(value = "/passed/studentList", method = RequestMethod.PUT)
    @ResponseBody
    public CommonResult uploadStudentList(@RequestParam("file") MultipartFile file) throws Exception {
        boolean flag = loanService.uploadExcelAndParseSave(file);
        return new CommonResult(true, null, ErrorCode.FILE_UPLOAD_SUCCESS.code, ErrorCode.FILE_UPLOAD_SUCCESS.des);
    }

    @ApiOperation(value = "查找最新贷款申请记录列表", notes = "")
    @RequestMapping(value = "/all/detail", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult findAllLoanDetail() {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        if (sessionUserDto == null) {
            return new CommonResult(false, null, ErrorCode.LOGIN_ERROR_USER.code, ErrorCode.LOGIN_ERROR_USER.des);
        } else {
            Loan loan = loanService.findLoanByCurrentSchoolYear();
            if(loan == null) {
                throw new BusinessException("无当前学年贷款项");
            }
            List<LoanRecordDto> loanRecordDtos = loanService.findAllByUserAndLoanId(sessionUserDto, loan.getId().toString());
            return new CommonResult(true, loanRecordDtos, ErrorCode.FIND_SUCCESS.code, ErrorCode.FIND_SUCCESS.des);
        }
    }

    @ApiOperation(value = "下载贷款名单", notes = "无需参数")
    @RequestMapping(value = "/student/list", method = RequestMethod.GET)
    public void exportExcel(HttpServletResponse httpServletResponse) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        Loan loan = loanService.findLoanByCurrentSchoolYear();
        List<LoanRecordDto> loanRecordDtos = loanService.findAllByUserAndLoanId(sessionUserDto, loan.getId().toString());
        OutputStream outputStream = httpServletResponse.getOutputStream();
        String title = "贷款名单";
        ExcelUtil.excelExport(title, loanRecordDtos, outputStream);
    }

//    @ApiOperation(value = "编辑单个贷款记录")
//    @RequestMapping(value = "/loanRecord", method = RequestMethod.PUT)
//    @ResponseBody
//    public CommonResult updateLoanRecord(@RequestBody LoanRecord loanRecord) throws XDException {
//        loanService.updateLoanRecord(loanRecord);
//        return new CommonResult(true, null, ErrorCode.UPDATE_SUCCESS.code, ErrorCode.UPDATE_SUCCESS.des);
//    }

}
