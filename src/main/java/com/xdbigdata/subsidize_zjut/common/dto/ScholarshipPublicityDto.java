package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/6/10 0010.
 */
public class ScholarshipPublicityDto implements Serializable {

    @ApiModelProperty("公示列表")
    private List<ScholarshipCheckResultDto> resultList = new ArrayList<>();
}
