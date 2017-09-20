package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.subsidize_zjut.anno.ExcelAnno;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by sky on 2017/5/12.
 */
@Data
public class JoinArmySubsidizeDto {
    private Long id;
    @ExcelAnno(head = "学号")
    private String studentSn;
    @ExcelAnno(head = "姓名")
    private String studentName;
    @ExcelAnno(head = "专业")
    private String specialty;
    @ExcelAnno(head = "班级")
    private String classAndGrade;
    @ExcelAnno(head = "补助金额")
    private BigDecimal amount;
    @ExcelAnno(head = "补助原因")
    private String reason;
    @ExcelAnno(head = "操作时间")
    private Date handleTime;
}
