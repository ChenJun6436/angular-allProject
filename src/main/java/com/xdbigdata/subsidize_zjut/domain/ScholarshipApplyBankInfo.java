package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

/**
 * Created by Administrator on 2017/6/7 0007.
 */
@Data
public class ScholarshipApplyBankInfo {
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("申请励志奖学金的Id")
    private Long scholarshipId;
    @NotNull(message = "银行卡好不能为空")
    @Length(min = 16,max = 19,message = "银行卡号位数错误")
    @ApiModelProperty("银行卡号")
    private String bankcard;
    @ApiModelProperty("是否代领，0_不代领，1_代领")
    private Integer isAgent;
    @ApiModelProperty("代领人学号")
    private String agentSn;
    @ApiModelProperty("代领人银行卡号")
    @Length(min = 16,max = 19,message = "银行卡号位数错误")
    private String agentBankcard;
    @Length(min = 200,message = "字数不够")
    @ApiModelProperty("申请原因，不少于200字")
    private String applyReason;
    @ApiModelProperty("是否提交申请，提交申请后不能修改信息，0_未提交，1_提交")
    private Integer isCommit;
    @ApiModelProperty("申请人学号")
    private String studentSn;

}
