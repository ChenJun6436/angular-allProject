package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by jinmingjiang on 2017/6/5.
 * 特别困难补助配置
 */
@Entity(name = "t_allowance_config")
@Data
@ApiModel("特别困难补助配置对象")
public class AllowanceConfig {
    @Id
    @GeneratedValue
    @ApiModelProperty("ID")
    private Long id;
    @ApiModelProperty("开始时间")
    private Date startTime;
    @ApiModelProperty("结束时间")
    private Date endTime;
    @ApiModelProperty("学年")
    private String year;
    @ApiModelProperty("学年ID")
    private Long yearId;
    @ApiModelProperty("金额")
    private Double money;
}
