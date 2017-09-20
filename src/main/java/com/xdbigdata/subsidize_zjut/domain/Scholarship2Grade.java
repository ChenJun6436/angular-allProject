package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by Administrator on 2017/6/7 0007.
 */
@Data
public class Scholarship2Grade {
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("年级分配名额")
    private Integer amount;
    @ApiModelProperty("年级名")
    private String gradeName;
    @ApiModelProperty("外键，学校分配学院表的id")
    private Long collegeId;
}
