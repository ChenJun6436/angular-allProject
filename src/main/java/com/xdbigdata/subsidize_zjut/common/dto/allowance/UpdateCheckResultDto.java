package com.xdbigdata.subsidize_zjut.common.dto.allowance;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by jinmingjiang on 2017/6/5.
 */
@Data
@ApiModel("修改审核结果Dto")
public class UpdateCheckResultDto {
    @ApiModelProperty("申请ID")
    private Long applyId;
    @ApiModelProperty("审核结果")
    private Integer pass;
    @ApiModelProperty("后端自动判断，前端不用传")
    private Integer step;
}
