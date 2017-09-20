package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import java.util.Date;

/**
 * Created by sky on 2017/5/10.
 */
@Data
public class Loan {
    //id
    private Long id;
    //贷款报名开启时间
    private Date startTime;
    //贷款报名结束时间
    private Date endTime;
    //创建时间
    private Date createTime;
    //学年
    private String schoolYear;
}
