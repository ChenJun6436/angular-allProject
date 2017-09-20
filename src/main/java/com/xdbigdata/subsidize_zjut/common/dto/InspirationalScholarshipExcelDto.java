package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.subsidize_zjut.anno.ExcelAnno;
import lombok.Data;

/**
 * Created by sky on 2017/6/6.
 */
@Data
public class InspirationalScholarshipExcelDto {
    @ExcelAnno(head = "学号")
    private String sn;
    @ExcelAnno(head = "姓名")
    private String name;
    @ExcelAnno(head = "学院")
    private String college;
    @ExcelAnno(head = "专业")
    private String major;
    @ExcelAnno(head = "年级")
    private String grade;
    @ExcelAnno(head = "班级")
    private String classes;
    @ExcelAnno(head = "学年")
    private String schoolYear;
    @ExcelAnno(head = "评定结果")
    private String result;
}
