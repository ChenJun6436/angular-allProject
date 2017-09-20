package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * 助学金历史表，用于保存助学金历史记录
 * Created by Administrator on 2017/5/25.
 */
@Data
public class GrantsHistory implements Serializable{

    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("学生姓名")
    private String name;
    @ApiModelProperty("学生学号")
    private String sn;
    @ApiModelProperty("学年")
    private String schoolYear;
    @ApiModelProperty("学院")
    private String college;
    @ApiModelProperty("专业")
    private String major;
    @ApiModelProperty("年级")
    private String grade;
    @ApiModelProperty("班级")
    private String classes;
    @ApiModelProperty("认定助学金名称")
    private String finalGrantsName;
    @ApiModelProperty("认定助学金id,-1未获取")
    private Long finalGrantsId;
    @ApiModelProperty("学生申请的助学金名称")
    private String applyGrantsName;
    @ApiModelProperty("学生申请的助学金id")
    private String applyGrantsUuid;
}
