package com.xdbigdata.subsidize_zjut.common.dto.allowance;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * Created by jinmingjiang on 2017/6/5.
 */
@Data
@ApiModel("申请Dto")
public class AllowanceApplyDto {
    @ApiModelProperty("银行卡号")
    private String bankNum;
    @ApiModelProperty("是否需要代领，1表示需要")
    private Integer hasDeputy;
    @ApiModelProperty("代领人学号")
    private String deputySn;
    @ApiModelProperty("代领人银行卡号")
    private String deputyBankNum;
    @ApiModelProperty("申请理由")
    private String reason;
}
