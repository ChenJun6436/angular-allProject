package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/6/6 0006.
 */
@Data
public class ScholarshipConditions {
    @ApiModelProperty("编号")
    private long id;
    @ApiModelProperty("获取奖学金/学年")
    private String schoolYear;
    @ApiModelProperty("获取奖学金的助学金条件")
    private String grantsLeavel;
    @ApiModelProperty("配置起始时间")
    private Date startDate;
    @ApiModelProperty("配置截至时间")
    private Date endDate;
}
