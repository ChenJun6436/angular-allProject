package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by Administrator on 2017/6/9 0009.
 * 国家励志奖学金申请记录
 */
@Data
public class ScholarshipApplyHistory {
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("学生编号")
    private String studentSn;
    @ApiModelProperty("奖学金编号")
    private Long scholarshipId;
    @ApiModelProperty("学年")
    private String schoolYear;
    @ApiModelProperty("申请结果 -1为失败 0为待定 1为成功")
    private Integer result;

}
