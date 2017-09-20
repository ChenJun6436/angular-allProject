package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.subsidize_zjut.anno.ExcelAnno;
import lombok.Getter;
import lombok.Setter;

/**
 * Created by sky on 2017/5/11.
 */
@Setter
@Getter
public class LoanRecordDto {
    @ExcelAnno(head = "姓名")
    private String name;
    @ExcelAnno(head = "学号")
    private String studentSn;
    @ExcelAnno(head = "专业")
    private String specialty;
    @ExcelAnno(head = "预报名时间")
    private String applyTime;
    @ExcelAnno(head = "申请金额")
    private String applyAmount;
    @ExcelAnno(head = "审批状态")
    private String status;
    @ExcelAnno(head = "审批结果")
    private String result;
    @ExcelAnno(head = "贷款次数")
    private Long loanTimes;

    @Override
    public String toString() {
        return "LoanRecordDto{" +
                "name='" + name + '\'' +
                ", studentSn='" + studentSn + '\'' +
                ", specialty='" + specialty + '\'' +
                ", applyTime=" + applyTime +
                ", applyAmount=" + applyAmount +
                ", status=" + status +
                ", result=" + result +
                ", loanTimes=" + loanTimes +
                '}';
    }
}
