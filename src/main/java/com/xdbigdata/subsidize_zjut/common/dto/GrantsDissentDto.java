package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by Administrator on 2017/6/10.
 */
@Data
public class GrantsDissentDto {

    @ApiModelProperty("异议内容")
    private String content; //异议内容

    @ApiModelProperty(value = "异议的助学级Uuid",hidden = true)
    private String grantsUuid;

    @ApiModelProperty(value = "异议阶段",hidden = true)
    private String stage;//异议阶段

    @ApiModelProperty(value = "有异议人学号",hidden = true)
    private String sourceSn;//有异议人学号

    @ApiModelProperty(value = "有异议人姓名",hidden = true)
    private String sourceName;//有异议人姓名

    @ApiModelProperty(value = "学院id",hidden = true)
    private Integer collegeId;//学院id

    @ApiModelProperty(value = "年级id",hidden = true)
    private Integer gradeId;//年级id

    @ApiModelProperty(value = "有异议的学号")
    private Set<String> targetSns = new HashSet<>();//有异议的学号


}
