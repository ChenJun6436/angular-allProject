package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 助学金重新提交材料dto
 * Created by Administrator on 2017/5/31.
 */
@Data
public class GrantsRecommitDto {

    @ApiModelProperty("任务id")
    private String taskId;
    @ApiModelProperty("流程实例id")
    private String processId;

}
