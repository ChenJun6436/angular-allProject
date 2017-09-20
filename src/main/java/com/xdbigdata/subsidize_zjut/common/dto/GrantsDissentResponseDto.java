package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 处理公示中的异议
 * Created by Administrator on 2017/4/19.
 */
@Data
public class GrantsDissentResponseDto {

    @ApiModelProperty(value = "异议id", required = true)
    private Integer id;//异议id

    @ApiModelProperty(value = "处理的回复信息", required = true)
    private String response;//处理的回复

    @ApiModelProperty(value = "处理人职工号（不需要）", required = false)
    private String responseSn;//处理人职工号

}
