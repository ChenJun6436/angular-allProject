package com.xdbigdata.subsidize_zjut.common.dto.allowance;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by jinmingjiang on 2017/6/7.
 */
@Data
public class FiveClassDto {
    @ApiModelProperty(value = "是否残疾",notes = "0不是 1是")
    private Integer isDisability;
    //是否低保家庭
    @ApiModelProperty(value = "是否低保家庭",notes = "0不是 1是")
    private Integer isLowField;
    //是否烈士家庭
    @ApiModelProperty(value = "是否烈士家庭",notes = "0不是 1是")
    private Integer isMartyr;
    //是否农村五保户
    @ApiModelProperty(value = "是否农村五保户",notes = "0不是 1是")
    private Integer isRuralInfirm;
    //是否孤儿
    @ApiModelProperty(value = "是否孤儿",notes = "0不是 1是")
    private Integer isOrphan;
}
