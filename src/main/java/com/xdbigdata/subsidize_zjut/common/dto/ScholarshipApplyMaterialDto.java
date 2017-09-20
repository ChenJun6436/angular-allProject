package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.subsidize_zjut.domain.Awards;
import com.xdbigdata.subsidize_zjut.domain.ScholarshipApplyBankInfo;
import com.xdbigdata.subsidize_zjut.domain.StudySituation;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/6/7 0007.
 * 奖学金申请展示界面返回数据
 */
@Data
public class ScholarshipApplyMaterialDto {
    @ApiModelProperty("申请人填写的获奖记录")
    private List<Awards> awards;
    @ApiModelProperty("申请人需填写的学习情况记录")
    private StudySituation studySituation;
    @ApiModelProperty("申请人的银行账户信息")
    private ScholarshipApplyBankInfo scholarshipApply;
    @ApiModelProperty("申请截至时间")
    private Date endDate;
}
