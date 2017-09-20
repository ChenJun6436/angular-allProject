package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by Administrator on 2017/5/25.
 */
@Data
public class GrantsApplyQuota {

    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("学院id")
    private Long collegeId;
    @ApiModelProperty(hidden = true,value = "学院名")
    private String collegeName;
    @ApiModelProperty("申请名额")
    private Integer applyAmount;
    @ApiModelProperty("申请名额助学金id")
    private Long grantsId;
    @ApiModelProperty("状态：null_申请，1_同意，0_拒绝")
    private Integer status;
}
