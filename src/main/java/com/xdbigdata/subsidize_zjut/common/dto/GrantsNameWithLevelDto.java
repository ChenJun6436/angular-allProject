package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * Created by Administrator on 2017/5/27.
 */
@Data
public class GrantsNameWithLevelDto implements Serializable{

    @ApiModelProperty("助学金id")
    private Long grantsId;
    @ApiModelProperty("助学金名，或含等级")
    private String grantsName;

}
