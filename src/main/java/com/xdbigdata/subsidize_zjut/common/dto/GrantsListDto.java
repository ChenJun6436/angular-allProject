package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.subsidize_zjut.domain.GrantsApplyQuota;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * 助学金列表用
 * Created by Administrator on 2017/5/31.
 */
@Data
public class GrantsListDto {

    @ApiModelProperty("助学金uuid")
    private String uuid;
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("助学金Id")
    private String grantsId;
    @ApiModelProperty("助学金名称")
    private String name;
    @ApiModelProperty("机构")
    private String organization;
    @ApiModelProperty("学年")
    private String schoolYear;
    @ApiModelProperty("开始时间")
    private Date startTime;
    @ApiModelProperty("结束时间")
    private Date endTime;
    @ApiModelProperty("助学金等级")
    private String levelName;
    @ApiModelProperty("资助金额")
    private BigDecimal subsidizeMoney;
    @ApiModelProperty("资助名额")
    private Integer subsidizeNum;
    @ApiModelProperty("评定条件")
    private String evaluateCondition;
    @ApiModelProperty("预留名额")
    private Integer reserveNum;
    @ApiModelProperty("可配置名额")
    private Integer allot;
    @ApiModelProperty(value = "新的申请",notes = "为null说明没有，不为null说明有")
    private List<GrantsApplyQuota> newApplys;
    @ApiModelProperty("是否分配，null_开始分配，不是null_编辑")
    private Integer isDistribute;
    @ApiModelProperty("附件地址")
    private String url;
    @ApiModelProperty("学院分配数量")
    private Integer collegeAmount;
}
