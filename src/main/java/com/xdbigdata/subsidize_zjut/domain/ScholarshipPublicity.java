package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;

/**
 * Created by Administrator on 2017/6/10 0010.
 */
@Data
public class ScholarshipPublicity implements Serializable {
    @ApiModelProperty(value = "励志奖学金Id",hidden = true)
    private Long scholarshipId;
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("开始时间")
    private Date startTime;
    @ApiModelProperty("结束时间")
    private Date endTime;
    @ApiModelProperty("学院Id")
    private Long collegeId;
    @ApiModelProperty("阶段")
    private String stage;
}
