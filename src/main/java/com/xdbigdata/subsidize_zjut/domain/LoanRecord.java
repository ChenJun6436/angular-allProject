package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by sky on 2017/5/10.
 */
@Data
public class LoanRecord {
    //ID
    private Long id;
    //关联的学生学号
    private String studentSn;
    //关联的助学金id
    private String loanId;
    //申请金额
    private BigDecimal appliedAmount;
    //预报名时间
    private Date createTime;
    //审批状态 0:进行中 1:已完成
    private Integer status;
    //审批结果 0:空值 1:通过 2：不通过
    private Integer result;
    //学生姓名
    private String studentName;
    //学生学院
    private String collegeName;
    //学生专业
    private String majorName;
    //学生年级
    private String gradeName;
    //学生班级
    private String className;
}
