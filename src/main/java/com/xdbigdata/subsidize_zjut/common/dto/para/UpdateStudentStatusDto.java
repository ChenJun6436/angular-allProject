package com.xdbigdata.subsidize_zjut.common.dto.para;

import lombok.Data;

/**
 * 更新学生状态dto
 * Created by staunch on 2017/4/17.
 */
@Data
public class UpdateStudentStatusDto {
    private String studentId;
    private Integer status;
}
