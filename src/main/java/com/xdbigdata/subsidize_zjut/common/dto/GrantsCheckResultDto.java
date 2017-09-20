package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 助学金流程
 * Created by Administrator on 2017/5/27.
 */
@Data
public class GrantsCheckResultDto implements Serializable{

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
    @ApiModelProperty("年级")
    private String grade;
    @ApiModelProperty("专业")
    private String major;
    @ApiModelProperty("困难认定结果")
    private String povertyLevel;
    @ApiModelProperty("上学年助学金评定等级")
    private List<String> lastYearGrantsLevel;
    @ApiModelProperty("本学年已获助学金个数")
    private Map<String,Object> currentGrantsNum;
    @ApiModelProperty("申请助学金名，不包含等级")
    private String applyGrantsName;
    @ApiModelProperty("申请助学金uuid")
    private String applyGrantsUuid;
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
    @ApiModelProperty("认定结果助学金名，或含等级")
    private String finalResult;
    @ApiModelProperty("认定结果助学金id")
    private String finalGrantsId;
    @ApiModelProperty("资料地址")
    private List<String> applyDataUrl = new ArrayList<>();
    @ApiModelProperty("驳回原因")
    private String rejectReason;
    @ApiModelProperty("助学金等级列表")
    private List<GrantsNameWithLevelDto> grants = new ArrayList<>();
    @ApiModelProperty("材料状态,1_正常，0_驳回")
    private Integer materialStatus;
    @ApiModelProperty("驳回材料阶段")
    private String rejectStage;

}
