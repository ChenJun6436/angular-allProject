package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 更新助学金等级
 * Created by Administrator on 2017/5/31.
 */
@Data
public class GrantsUpdateLevelDto {

    @ApiModelProperty("任务id")
    private String taskId;
    @ApiModelProperty("助学金名/助学金等级")
    private String grantsName;
    @ApiModelProperty("阶段")
    private String stage;

}
