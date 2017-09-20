package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 存放在session中的用户对象
 * Created by staunch on 2017/4/16.
 */
@Data
public class SessionUserDto {
    @ApiModelProperty("学号、学工号")
    private String userName;
    @ApiModelProperty("真实姓名")
    private String realName;
    @ApiModelProperty(value = "用户类型",notes = "1：学校   2：学院    3：辅导员  4：班级用户  5：学生")
    private Integer userType;
}
