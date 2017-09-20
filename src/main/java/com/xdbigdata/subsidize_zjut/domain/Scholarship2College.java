package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;

import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/6/6 0006.
 */
public class Scholarship2College {
    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("学院id")
    private Long collegeId;
    @ApiModelProperty("学院名称")
    private String collegeName;
    @ApiModelProperty("名额")
    private Integer amount;
    @ApiModelProperty("获取奖学金/学年")
    private String schoolYear;
    @ApiModelProperty("获取奖学金的助学金条件")
    private String grantsLeavel;
    @ApiModelProperty("配置起始时间")
    private Date startDate;
    @ApiModelProperty("配置截至时间")
    private Date endDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCollegeId() {
        return collegeId;
    }

    public void setCollegeId(Long collegeId) {
        this.collegeId = collegeId;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

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

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }
}
