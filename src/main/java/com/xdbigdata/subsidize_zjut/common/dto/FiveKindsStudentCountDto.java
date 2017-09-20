package com.xdbigdata.subsidize_zjut.common.dto;

import lombok.Data;

/**
 * Created by sky on 2017/6/1.
 */
@Data
public class FiveKindsStudentCountDto {
    private String kind;
    private Integer number;

    public FiveKindsStudentCountDto(String kind, Integer number){
        this.kind = kind;
        this.number = number;
    }
}
