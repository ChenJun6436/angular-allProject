package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.jwtService.domain.*;
import lombok.Data;

import java.util.List;

/**
 * Created by 傻逼彬 on 2017/5/28.
 */
@Data
public class QueryConditionDto {
    private User user;
    private List<SchoolYear> schoolYearList;
    private SchoolYear startSchoolYear;
    private SchoolYear endSchoolYear;
    private PrimaryTeachingInstitution primaryTeachingInstitution;
    private SecondaryTeachingInstitution secondaryTeachingInstitution;
    private Grade grade;
    private Classes classes;
}
