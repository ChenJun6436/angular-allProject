package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * 获奖情况
 * Created by Administrator on 2017/6/7 0007.
 */
@Data
public class Awards {
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("奖项名称")
    private String name;
    @ApiModelProperty("获奖时间")
    private Date getTime;
    @ApiModelProperty("颁奖单位")
    private String RewardsBureau;
    @ApiModelProperty("对应学生编号")
    private String studentId;
}
