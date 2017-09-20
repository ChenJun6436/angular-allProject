package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 学院Dto，用于学校给学院分配名额
 * Created by Administrator on 2017/5/25.
 */
@Data
public class GrantsCollegeDto {

    @ApiModelProperty("学院id")
    private Long id;
    @ApiModelProperty("学院名")
    private String name;
    @ApiModelProperty("分配数量")
    private String amount;
}
