package com.xdbigdata.subsidize_zjut.common.dto.para;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by staunch on 2017/5/4.
 */
@Data
@ApiModel("在困难认定中提交或者驳回操作的dto")
public class ProcessDto {
    @ApiModelProperty("操作的步骤 班级评议提交到辅导员：class")
    private String step;//操作的步骤 班级评议提交到辅导员：class
    @ApiModelProperty("1：提交到下一步 0：驳回  2：被学校驳回后学院提交")
    private Integer isPass;//1：提交到上一步 0：驳回  2：被学校驳回后学院提交
    @ApiModelProperty("被驳回用户的用户名")
    private String userName;//被驳回用户的用户名
    @ApiModelProperty("被驳回的用户类型")
    private Integer userType;//被驳回的用户类型
    @ApiModelProperty("被驳回用户真实姓名")
    private String realName;//被驳回用户真实姓名
    @ApiModelProperty("驳回原因")
    private String reason;
}
