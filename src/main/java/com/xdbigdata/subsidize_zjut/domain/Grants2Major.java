package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 助学金学院用户，某年级分配给年级下的专业名额表
 * t_grants_to_major
 * Created by Administrator on 2017/5/27.
 */
@Data
public class Grants2Major {

    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("专业id")
    private Long majorId;
    @ApiModelProperty("专业分配名额")
    private Long majorAmount;
    @ApiModelProperty("外键，年级分配名额的id")
    private Long gradeQuotaId;

}
