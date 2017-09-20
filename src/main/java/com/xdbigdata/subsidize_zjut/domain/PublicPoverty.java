package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * 贫困认定公示表
 * Created by staunch on 2016-06-16.
 * version：v1.0
 * instruction：初始版本
 */
@Data
@Entity(name = "t_publicPoverty")
public class PublicPoverty {
    @Id
    @GeneratedValue
    private Long id;
    private String name;//姓名
    private String studentId;//学号
    private String collegeName;//学院名称
    private String majorName;//专业名称
    private String gradeName;//年级名称
    private String className;//班级名称
    private String result;//认定结果
    private Integer isSchool;//是否为学校公示 1代表为学校公示
}
