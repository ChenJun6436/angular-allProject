package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/6/6 0006.
 */
@Data
public class ScholarshipCollegeDto {
    @ApiModelProperty("获取奖学金/学年")
    private String schoolYear;
    @ApiModelProperty("获取奖学金的助学金条件")
    private String grantsLeavel;
    @ApiModelProperty("奖学金编号")
    private Long scholarshipid;
    @ApiModelProperty("配置起始时间")
    private Date startDate;
    @ApiModelProperty("配置截至时间")
    private Date endDate;
    @ApiModelProperty("奖学金配置")
    private List<Config> configs = new ArrayList();

    public String getGrantsLeavel() {
        return grantsLeavel;
    }

    public void setGrantsLeavel(String grantsLeavel) {
        this.grantsLeavel = grantsLeavel;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }


    public List<Config> getConfigs() {
        return configs;
    }

    public void setConfigs(List<Config> configs) {
        this.configs = configs;
    }

    public static class Config{
        @ApiModelProperty("记录编号")
        private Long recordId;
        @ApiModelProperty("jwt中的编号")
        private Long id;
        @ApiModelProperty("名称")
        private String name;
        @ApiModelProperty("分配名额")
        private Integer amount;


        public Long getRecordId() {
            return recordId;
        }

        public void setRecordId(Long recordId) {
            this.recordId = recordId;
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

        public Integer getAmount() {
            return amount;
        }

        public void setAmount(Integer amount) {
            this.amount = amount;
        }


        @Override
        public String toString() {
            return "Config{" +
                    "recordId=" + recordId +
                    ", id=" + id +
                    ", name='" + name + '\'' +
                    ", amount=" + amount +
                    '}';
        }
    }
}
