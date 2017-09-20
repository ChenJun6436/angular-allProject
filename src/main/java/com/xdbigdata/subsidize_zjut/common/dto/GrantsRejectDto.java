package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * 驳回材料
 * Created by Administrator on 2017/5/30.
 */
@Data
public class GrantsRejectDto {

    @ApiModelProperty("驳回原因")
    private String rejectReason;

    @ApiModelProperty("驳回任务列表")
    private List<String> rejectTasks = new ArrayList<>();

    @ApiModelProperty("驳回阶段")
    private String stage;

}
