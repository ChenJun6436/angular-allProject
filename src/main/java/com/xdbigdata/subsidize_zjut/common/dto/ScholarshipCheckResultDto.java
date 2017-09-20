package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/6/8 0008.
 * 奖学金流程
 */
@Data
public class ScholarshipCheckResultDto implements Serializable {
    @ApiModelProperty("任务id")
    private String taskId;
    @ApiModelProperty("流程id")
    private String processId;
    @ApiModelProperty("姓名")
    private String studentName;
    @ApiModelProperty("学号")
    private String sn;
    @ApiModelProperty("学院")
    private String college;
    @ApiModelProperty("励志奖学金名称")
    private String scholarshipName;
    @ApiModelProperty("上学年助学金评定等级")
    private List<String> lastYearGrantsLevel;
    @ApiModelProperty("本学年已获助学金个数")
    private Map<String, List<String>> currentGrantsNum;
    @ApiModelProperty("申请学年")
    private String schoolYear;
    @ApiModelProperty("辅导员通过状态，0_未通过，1_通过")
    private Integer advisorPass;
    @ApiModelProperty("辅导员审核结果")
    private String advisorResult;
    @ApiModelProperty("学院通过状态，0_未通过，1_通过")
    private Integer collegePass;
    @ApiModelProperty("学院审核结果")
    private String collegeResult;
    @ApiModelProperty("学院公示通过状态，0_未通过，1_通过")
    private Integer collegePublicityPass;
    @ApiModelProperty("学院公示")
    private String collegePublicityResult;
    @ApiModelProperty("学校通过状态，0_未通过，1_通过")
    private Integer schoolPass;
    @ApiModelProperty("学校审核")
    private String schoolResult;
    @ApiModelProperty("学校公示通过状态，0_未通过，1_通过")
    private Integer schoolPublicityPass;
    @ApiModelProperty("学校公示")
    private String schoolPublicityResult;
    @ApiModelProperty("驳回原因")
    private String rejectReason;
}
