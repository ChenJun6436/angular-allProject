package com.xdbigdata.subsidize_zjut.common.dto.para;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by staunch on 2017/4/17.
 */
@Data
@ApiModel("审核材料dto")
public class CheckMaterialDto {
    @ApiModelProperty("学号")
    private String studentId;
    @ApiModelProperty("流程ID")
    private String processInstanceId;
    @ApiModelProperty("任务ID")
    private String taskId;
    @ApiModelProperty("是否通过，1：通过；0：不通过")
    private Integer isPass;
}
