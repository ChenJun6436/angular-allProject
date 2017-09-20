package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by sky on 2017/5/12.
 */
@Data
public class JoinArmySubsidize {
    private Long id;
    private String studentSn;
    private String reason;
    private BigDecimal amount;
    private Date createTime;
    private Date updateTime;
    private String schoolYear;
    private String studentName;
    private String collegeName;
    private String majorName;
    private String gradeName;
    private String className;
}
