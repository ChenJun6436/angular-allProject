package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by Administrator on 2017/6/8 0008.
 * 励志奖学金申请条件
 */
@Data
public class ScholarshipApplyContionsDto {
    @ApiModelProperty("贫困等级")
    private String poverty;
    @ApiModelProperty("获取过的奖学金")
    private String grantsName;
    @ApiModelProperty("申请截至时间")
    private Date endDate;
}
