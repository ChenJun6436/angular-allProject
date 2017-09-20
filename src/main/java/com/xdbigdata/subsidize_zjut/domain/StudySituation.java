package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 学习情况
 * Created by Administrator on 2017/6/7 0007.
 */
@Data
public class StudySituation {
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("成绩排名")
    private Integer scoreRank;
    @ApiModelProperty("总人数")
    private Integer totalStudents;
    @ApiModelProperty("必修课程数")
    private Integer requiredCourse;
    @ApiModelProperty("通过课程数")
    private Integer passCourse;
    @ApiModelProperty("是否开启综合考评")
    private Boolean isComprehensiveAppraisal;
    @ApiModelProperty("综合排名")
    private Integer comprehensiveRank;
    @ApiModelProperty("综合评比人数")
    private Integer comprehensiveNum;
    @ApiModelProperty("对应学生编号")
    private String studentId;
}
