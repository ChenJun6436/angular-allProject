package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by jinmingjiang on 2017/5/22.
 * 学生已获资助情况
 */
@Data
@Entity(name = "t_student_subsidy")
public class StudentSubsidy {
    @Id
    @GeneratedValue
    private Long id;//id
    private String studentId;//学号
    private String name;//资助名称
    private Date subsidyDate;//资助时间
    private String amount;//资助金额
    private String level;//资助等级
}
