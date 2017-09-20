package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;

/**
 * Created by Administrator on 2017/6/6.
 */
@Data
public class GrantsPublicity implements Serializable {

    @ApiModelProperty(value = "助学金uuid",hidden = true)
    private String uuid;
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("开始时间")
    private Date startTime;
    @ApiModelProperty("结束时间")
    private Date endTime;
    @ApiModelProperty("阶段")
    private String stage;
    @ApiModelProperty("学院id")
    private Long collegeId;
    @ApiModelProperty(value = "处理人sn",hidden = true)
    private String sn;
    @ApiModelProperty(value = "自动处理到公示是否开始，0_未开始，1_开始",hidden = true)
    private Integer start;
    @ApiModelProperty(value = "是否提交到学校审核，0_未提交，1_已提交")
    private Integer commit;

}
