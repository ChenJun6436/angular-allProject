package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 用于验证提交申请时的分配人数用
 * Created by Administrator on 2017/6/9.
 */
@Data
public class GrantsAmountDto {

    @ApiModelProperty("助学金编号")
    private Long grantsId;
    @ApiModelProperty("助学金名称")
    private String grantsName;
    @ApiModelProperty("数量")
    private Long amount;

}
