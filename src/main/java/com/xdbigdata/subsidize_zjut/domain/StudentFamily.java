package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by jinmingjiang on 2017/5/22.
 * 学生家庭情况
 */
@Data
@Entity(name="t_student_family")
public class StudentFamily {
    @Id
    @GeneratedValue
    private Long id;
    //学号
    private String studentId;
    //姓名
    private String name;
    //与学生关系
    private String relation;
    //年龄
    private Integer age;
    //月收入
    private String monthlyIncome;
    //联系电话
    private String phone;
    //工作
    private String job;
    //健康状况
    private String healthStatus;
}
