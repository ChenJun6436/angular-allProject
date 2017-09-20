package com.xdbigdata.subsidize_zjut.common.dto.para;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 补录申请dto
 * Created by staunch on 2017/5/15.
 */
@Data
@ApiModel("补录申请dto")
public class AddApplyDto {
    @ApiModelProperty("学号")
    private String studentId;//学号
    @ApiModelProperty("困难等级")
    private String level;//等级
}
