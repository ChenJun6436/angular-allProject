package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 学院分配名额到年级
 * t_grants_to_grade
 * Created by Administrator on 2017/5/27.
 */
@Data
public class Grants2Grade {

    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("助学金编号")
    private Long grantsId;
    @ApiModelProperty("年级编号")
    private Long gradeId;
    @ApiModelProperty("年级分配的人数")
    private Long gradeAmount;
    @ApiModelProperty("外键，学校分配学院表的id")
    private Long collegeQuotaId;

}
