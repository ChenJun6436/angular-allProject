package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.LoanRecordDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.Loan;
import com.xdbigdata.subsidize_zjut.domain.LoanRecord;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by sky on 2017/5/10.
 */
public interface LoanService {
    /**
     * 预申请贷款
     * @param loanRecord
     * @return 是否申请成功
     */
    public boolean applyLoan(LoanRecord loanRecord);

    /**
     * 获取登录用户下的贷款申请记录
     * @param sessionUserDto
     * @return
     */
    public List<LoanRecordDto> findAllByUserAndLoanId(SessionUserDto sessionUserDto, String loanId);


    /**
     * 上传Excel并解析成实体类存入数据库中
     * @param file
     * @return
     */
    public boolean uploadExcelAndParseSave(MultipartFile file) throws Exception;

    /**
     * 更新单条贷款申请记录
     * @param loanRecord
     */
    public void updateLoanRecord(LoanRecord loanRecord);

    /**
     * 查询当前学年贷款项
     * @return
     */
    public Loan findLoanByCurrentSchoolYear();

}
