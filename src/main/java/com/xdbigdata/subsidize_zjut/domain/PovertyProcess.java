package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.apache.poi.hssf.util.HSSFColor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * 贫困认定流程表
 * Created by staunch on 2016-05-30.
 * version：v1.0
 * instruction：初始版本
 */
@Data
@Entity(name = "t_poverty_process")
@ApiModel("困难认定配置对象")
public class PovertyProcess {
    @Id
    @GeneratedValue
    @ApiModelProperty("ID")
    private Integer id;
    @ApiModelProperty("困难认定开始时间")
    private Date applyStart;
    @ApiModelProperty("困难认定结束时间")
    private Date applyEnd;
    @ApiModelProperty("学年ID")
    private Long schoolYearId;
    @ApiModelProperty("学年名称[xxxx-xxxx]")
    private String schoolYearName;
    @ApiModelProperty("学院-公示开始时间")
    private Date collegeOpenStartTime;
    @ApiModelProperty("学院-公示结束时间")
    private Date collegeOpenEndTime;
    @ApiModelProperty("学校-公示开始时间")
    private Date schoolOpenStartTime;
    @ApiModelProperty("学校-公示结束时间")
    private Date schoolOpenEndTime;
    @ApiModelProperty("学院公示是否已开始")
    private Integer collegeOpenStarted;
    @ApiModelProperty("学校公示是否已开始")
    private Integer schoolOpenStarted;
    @ApiModelProperty("学校用户学工号")
    private String schoolSn;
}
