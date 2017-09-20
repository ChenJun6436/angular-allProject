package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 助学金学院分配的专业下面的班级名额
 * t_grants_to_classes
 * Created by Administrator on 2017/5/27.
 */
@Data
public class Grants2Classes {

    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("班级id")
    private Long classesId;
    @ApiModelProperty("班级分配名额")
    private Long classesAmount;
    @ApiModelProperty("外键，专业名额表id")
    private Long majorQuotaId;

}
