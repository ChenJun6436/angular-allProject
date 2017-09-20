package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 助学金分配到学院表
 * t_grants_college
 * Created by Administrator on 2017/5/25.
 */
@Data
public class Grants2College {

    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("助学金id")
    private Long grantsId;
    @ApiModelProperty("学院id")
    private Long collegeId;
    @ApiModelProperty("分配名额")
    private Integer amount;

}
