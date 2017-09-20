package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/6/6.
 */
public class GrantsDto {

    //0 未申请，1 已申请
    @ApiModelProperty("申请状态 0 未申请，1 已申请")
    private Integer applyStatus;
    //申请走到的流程
    @ApiModelProperty("申请走到的流程")
    private String applyProcess;
    //执行id
    @ApiModelProperty("执行id")
    private String executionId;
    //流程id
    @ApiModelProperty("流程id")
    private String processId;
    //拒绝原因
    @ApiModelProperty("拒绝原因")
    private String rejectReason;
    //申请的助学金id
    @ApiModelProperty("申请的助学金id")
    private Integer applyGrantsId;
    //认定结果
    @ApiModelProperty("认定结果")
    private String finalResult;
    @ApiModelProperty("材料")
    private List<String> applyDataUrls = new ArrayList<>();


    @ApiModelProperty(hidden = true)
    private Long id;// id无实际意义
    @ApiModelProperty("名称")
    private String name;// 名称
    @ApiModelProperty("设立机构")
    private String organization;// 设立机构
    @ApiModelProperty("等级")
    private List<Level> level;// 等级
    @ApiModelProperty("学年")
    private String schoolYear;
    @ApiModelProperty("助学金开始时间")
    private Date startTime;// 学年开始
    @ApiModelProperty("学年结束时间")
    private Date endTime;// 学年结束
    @ApiModelProperty("标识和该助学金类型相同的但是等级不同的助学金 uuid")
    private String uuid;//标识和该助学金类型相同的但是等级不同的助学金 uuid


    public List<String> getApplyDataUrls() {
        return applyDataUrls;
    }

    public void setApplyDataUrls(List<String> applyDataUrls) {
        this.applyDataUrls = applyDataUrls;
    }

    public Integer getApplyStatus() {
        return applyStatus;
    }

    public void setApplyStatus(Integer applyStatus) {
        this.applyStatus = applyStatus;
    }

    public String getApplyProcess() {
        return applyProcess;
    }

    public void setApplyProcess(String applyProcess) {
        this.applyProcess = applyProcess;
    }

    public String getExecutionId() {
        return executionId;
    }

    public void setExecutionId(String executionId) {
        this.executionId = executionId;
    }

    public String getProcessId() {
        return processId;
    }

    public void setProcessId(String processId) {
        this.processId = processId;
    }

    public String getRejectReason() {
        return rejectReason;
    }

    public void setRejectReason(String rejectReason) {
        this.rejectReason = rejectReason;
    }

    public Integer getApplyGrantsId() {
        return applyGrantsId;
    }

    public void setApplyGrantsId(Integer applyGrantsId) {
        this.applyGrantsId = applyGrantsId;
    }

    public String getFinalResult() {
        return finalResult;
    }

    public void setFinalResult(String finalResult) {
        this.finalResult = finalResult;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public List<Level> getLevel() {
        return level;
    }

    public void setLevel(List<Level> level) {
        this.level = level;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public static class Level{
        @ApiModelProperty("助学金id")
        private Long id;// 助学金id
        @ApiModelProperty("等级名称")
        private String levelName;// 等级名称
        @ApiModelProperty("金额")
        private BigDecimal subsidizeMoney;// 金额
        @ApiModelProperty("资助名额")
        private Integer subsidizeNum;//资助名额
        @ApiModelProperty("预留名额")
        private Integer reserveNum;//预留名额
        @ApiModelProperty("评定条件")
        private String evaluateCondition;
        @ApiModelProperty(hidden = true,value ="助学金对应表格的路径")
        private String url;//助学金对应表格的路径
        @ApiModelProperty("可配置名额")
        private Integer allot;

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public BigDecimal getSubsidizeMoney() {
            return subsidizeMoney;
        }

        public void setSubsidizeMoney(BigDecimal subsidizeMoney) {
            this.subsidizeMoney = subsidizeMoney;
        }

        public String getLevelName() {
            return levelName;
        }

        public void setLevelName(String levelName) {
            this.levelName = levelName;
        }

        public Integer getSubsidizeNum() {
            return subsidizeNum;
        }

        public void setSubsidizeNum(Integer subsidizeNum) {
            this.subsidizeNum = subsidizeNum;
        }

        public Integer getReserveNum() {
            return reserveNum;
        }

        public void setReserveNum(Integer reserveNum) {
            this.reserveNum = reserveNum;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public Integer getAllot() {
            return allot;
        }

        public void setAllot(Integer allot) {
            this.allot = allot;
        }

        public String getEvaluateCondition() {
            return evaluateCondition;
        }

        public void setEvaluateCondition(String evaluateCondition) {
            this.evaluateCondition = evaluateCondition;
        }


        @Override
        public String toString() {
            return "Level{" +
                    "id=" + id +
                    ", levelName='" + levelName + '\'' +
                    ", subsidizeMoney=" + subsidizeMoney +
                    ", subsidizeNum=" + subsidizeNum +
                    ", reserveNum=" + reserveNum +
                    ", url='" + url + '\'' +
                    '}';
        }
    }


}
