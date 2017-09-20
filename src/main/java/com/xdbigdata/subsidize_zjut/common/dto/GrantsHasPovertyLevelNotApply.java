package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 本学年评定经济困难学生但未申请助学金
 * Created by Administrator on 2017/6/7.
 */
@Data
public class GrantsHasPovertyLevelNotApply {

    @ApiModelProperty("姓名")
    private String name;
    @ApiModelProperty("学号")
    private String sn;
    @ApiModelProperty("学院")
    private String college;
    @ApiModelProperty("专业")
    private String major;
    @ApiModelProperty("年级")
    private String grade;
    @ApiModelProperty("苦难认定等级")
    private String povertyLevel;

}
