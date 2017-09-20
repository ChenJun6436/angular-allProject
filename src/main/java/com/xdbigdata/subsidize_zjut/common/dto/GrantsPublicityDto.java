package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/6/6.
 */
@Data
public class GrantsPublicityDto {

    @ApiModelProperty("阶段")
    private GrantsPublicity grantsPublicity;
    @ApiModelProperty("公示列表")
    private List<GrantsCheckResultDto> resultList = new ArrayList<>();

}
