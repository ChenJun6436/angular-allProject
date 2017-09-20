package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by jinmingjiang on 2017/6/5.
 * 特别困难补助申请表
 */
@Entity(name = "t_allowance_apply")
@Data
public class AllowanceApply {
    @Id
    @GeneratedValue
    private Long id;
    // 学生学号
    private String studentId;
    // 申请时间
    private Date applyTime;
    // 银行卡号
    private String bankNum;
    // 辅导员审核结果
    private Integer instructorPass;
    // 学院审核结果
    private Integer collegePass;
    // 学校审核结果
    private Integer schoolPass;
    // 当前步骤 0 已申请未审核，1 辅导员审核完成，2 学院审核完成，3 学校审核完成
    private Integer step;
    // 是否需要代领人 1 需要
    private Integer hasDeputy;
    // 代领人学号
    private String deputySn;
    // 代领人银行卡号
    private String deputyBankNum;
    // 申请学年
    private String year;
    // 申请学年的ID
    private Long yearId;
    // 申请金额
    private Double money;
    // 学院
    private String collegeName;
    // 专业
    private String majorName;
    // 年级
    private String gradeName;
    // 班级
    private String className;
    // 申请理由
    private String reason;
}
