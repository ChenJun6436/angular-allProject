package com.xdbigdata.subsidize_zjut.common.dto.para;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by staunch on 2017/5/3.
 */
@Data
@ApiModel("修改学生困难等级dto")
public class PovertyLevelDto {
    @ApiModelProperty("流程ID")
    private String processInstanceId;
    @ApiModelProperty("任务ID")
    private String taskId;
    @ApiModelProperty("步骤")
    private String step;
    @ApiModelProperty("困难等级")
    private String level;
}
