package com.xdbigdata.subsidize_zjut.common.dto;

import lombok.Data;

/**
 * Created by sky on 2017/5/26.
 */
@Data
public class DataAmountQueryCondititonDto {
    private String collegeName;
    private String majorName;
    private String gradeName;
    private String className;
    private String startSchoolYear;
    private String endSchoolYear;
}
