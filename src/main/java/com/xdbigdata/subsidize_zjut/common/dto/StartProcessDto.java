package com.xdbigdata.subsidize_zjut.common.dto;

import lombok.Data;

import java.util.List;

/**
 * 学生用户开启困难认定或者助学金流程dto
 * Created by staunch on 2017/3/28.
 */
@Data
public class StartProcessDto {
    private String processId;//流程ID
    private String studentId;//学号
    private List<String> classUserId;//班级用户ID集合，其实就是学号。这里可能会有多个班级用户管理同一个学生。
    private List<String> advisorUserId;//该学生对应的辅导员ID集合
    private List<String> collegeUserId;//该学生对应的学院用户ID集合
    private List<String> schoolUserId;//该生学校用户ID集合

}
