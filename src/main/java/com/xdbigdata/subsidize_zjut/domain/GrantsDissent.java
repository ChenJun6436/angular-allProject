package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * 助学金异议
 * t_grants_dissent
 * Created by Administrator on 2017/5/28.
 */
@Data
public class GrantsDissent {
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("异议内容")
    private String content;
    @ApiModelProperty("创建时间")
    private Date createTime;
    @ApiModelProperty("异议产生阶段")
    private String stage;
    @ApiModelProperty("异议发起人学号")
    private String sourceSn;
    @ApiModelProperty("异议发起人姓名")
    private String sourceName;
    @ApiModelProperty("被针对人学号")
    private String targetSn;
    @ApiModelProperty("被针对人姓名")
    private String targetName;
    @ApiModelProperty("处理内容")
    private String response;
    @ApiModelProperty("处理人职工号")
    private String responseSn;
    @ApiModelProperty("处理人姓名")
    private String responseName;
    @ApiModelProperty("处理时间")
    private Date dealTime;
    @ApiModelProperty("学院id")
    private Long collegeId;
    @ApiModelProperty("助学金uuid")
    private String grantsUuid;
}
