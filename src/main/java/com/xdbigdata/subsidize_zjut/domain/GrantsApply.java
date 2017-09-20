package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

/**
 * 学生助学金申请代领信息 t_grants_apply
 * Created by Administrator on 2017/5/26.
 */
@Data
public class GrantsApply {

    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty(value = "助学金uuid",hidden = true)
    private String grantsUuid;
    @ApiModelProperty(hidden = true)
    private String grantsName;
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
    @Length(min = 300,message = "字数不够")
    @ApiModelProperty("申请原因，不少于300字")
    private String applyReason;
    @ApiModelProperty("是否提交申请，提交申请后不能修改信息，0_未提交，1_提交")
    private Integer isCommit;
    @ApiModelProperty("申请人学号")
    private String studentSn;
}
