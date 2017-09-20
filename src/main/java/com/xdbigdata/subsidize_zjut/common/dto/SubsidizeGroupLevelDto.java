package com.xdbigdata.subsidize_zjut.common.dto;

import lombok.Data;

import java.math.BigDecimal;

/**
 * Created by sky on 2017/6/2.
 */
@Data
public class SubsidizeGroupLevelDto {
    private String subsidizeName;
    private Integer number;
    private BigDecimal money;
}
