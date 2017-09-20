package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by Administrator on 2017/6/9 000* 配置国家励志奖学金
 */
@Data
public class Scholarship {
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("名称")
    private String name;
    @ApiModelProperty("奖学金说明")
    private String instructions;
    @ApiModelProperty("学年")
    private String schoolYear;
    @ApiModelProperty("申请截至时间")
    private Date endDate;
    @ApiModelProperty("奖学金金额")
    private Integer money;
}
