package com.xdbigdata.subsidize_zjut.domain;

import com.xdbigdata.subsidize_zjut.anno.ExcelAnno;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 励志奖学金
 * Created by Administrator on 2017/5/25.
 */
@Data
public class InspirationalScholarship {

    @ApiModelProperty("编号")
    private Long id;
    @ExcelAnno(head = "学号")
    @ApiModelProperty("学号")
    private String sn;
    @ExcelAnno(head = "姓名")
    @ApiModelProperty("姓名")
    private String name;
    @ExcelAnno(head = "学院")
    @ApiModelProperty("学院")
    private String college;
    @ExcelAnno(head = "专业")
    @ApiModelProperty("专业")
    private String major;
    @ExcelAnno(head = "年级")
    @ApiModelProperty("年级")
    private String grade;
    @ExcelAnno(head = "班级")
    @ApiModelProperty("班级")
    private String classes;
    @ExcelAnno(head = "学年")
    @ApiModelProperty("学年")
    private String schoolYear;
    @ExcelAnno(head = "评定结果")
    @ApiModelProperty("结果")
    private String result;
}
