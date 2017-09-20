package com.xdbigdata.subsidize_zjut.common.dto.para;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by jinmingjiang on 2017/6/10.
 */
@ApiModel("公示时间Dto")
@Data
public class OpenTimeDto {
    @ApiModelProperty("开始时间")
    private Date startTime;
    @ApiModelProperty("结束时间")
    private Date endTime;
    @ApiModelProperty("公示类型 1学校 2学院")
    private Integer type;
    @ApiModelProperty("公示是否已经结束 true已结束 false未结束")
    private Boolean publicityClosed;
    @ApiModelProperty("学工号")
    private String userName;
}
