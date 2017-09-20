package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

/**
 * Created by Administrator on 2017/6/5.
 */
@Data
public class GrantsUpdateDto implements Serializable {

    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("助学金名称")
    private String name;
    @ApiModelProperty("设立机构")
    private String organization;// 设立机构
    @ApiModelProperty("学年")
    private String schoolYear;
    @ApiModelProperty("等级名称")
    private String levelName;
    @ApiModelProperty("助学金uuid")
    private String uuid;
    @ApiModelProperty("发放时间开始")
    private Date startTime;
    @ApiModelProperty("发放时间结束")
    private Date endTime;
    @ApiModelProperty("资助金额")
    private BigDecimal subsidizeMoney;// 金额
    @ApiModelProperty("资助名额")
    private Integer subsidizeNum;//资助名额
    @ApiModelProperty("预留名额")
    private Integer reserveNum;//预留名额
    @ApiModelProperty("评定条件")
    private String evaluateCondition;
    @ApiModelProperty(hidden = true,value ="助学金对应表格的路径")
    private String url;//助学金对应表格的路径
}
