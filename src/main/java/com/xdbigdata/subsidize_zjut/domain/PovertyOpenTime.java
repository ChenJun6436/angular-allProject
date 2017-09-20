package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by jinmingjiang on 2017/6/10.
 * 学院、学校公示时间表
 */
@Data
@Entity(name = "t_poverty_open_time")
public class PovertyOpenTime {
    @Id
    @GeneratedValue
    private Long id;
    private Long collegeId;
    private String collegeUserSn;
    private Date openStartTime;
    private Date openEndTime;
    private Integer started;
}
