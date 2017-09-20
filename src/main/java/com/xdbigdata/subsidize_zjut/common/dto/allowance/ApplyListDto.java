package com.xdbigdata.subsidize_zjut.common.dto.allowance;

import lombok.Data;

/**
 * Created by jinmingjiang on 2017/6/6.
 * 审核列表Dto
 */
@Data
public class ApplyListDto {
    private Long applyId;
    private String name;
    private String studentId;
    private String college;
    private String year;
    private Integer instructorPass;
    private Integer collegePass;
    private Integer schoolPass;
    private Integer finalPass;
    private Integer step;
    private Integer applyCount;
}
