package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * 学生异议
 * Created by staunch on 2016-05-30.
 * version：v1.0
 * instruction：初始版本
 */
@Data
@ApiModel("学生提交异议dto")
@Entity(name = "t_dissent")
public class Dissent {
    @Id
    @GeneratedValue
    @ApiModelProperty(hidden = true)
    private Integer id;//id
    @ApiModelProperty("提异议的人")
    private String plaintiff;//原告（提异议的人）
    @ApiModelProperty("被提异议的人")
    private String defendant;//被告（被提异议的人）
    @ApiModelProperty(hidden = true)
    private Date time;//提交时间
    @ApiModelProperty("异议内容")
    private String content;//异议内容
    @ApiModelProperty("状态 1：已处理；0：未处理")
    private Integer status;//状态 1：已处理；0：未处理
    @ApiModelProperty("处理意见")
    private String dealOpinion;//处理意见
    @ApiModelProperty("原告姓名")
    private String plaintiffName;//原告姓名
    @ApiModelProperty("公示类型：0学院 1学校")
    private Integer type;
}
