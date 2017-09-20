package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.subsidize_zjut.domain.Scholarship2Grade;
import io.swagger.annotations.ApiModelProperty;

import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/6/7 0007.
 */
public class ScholarshipGradeGto {
    @ApiModelProperty("编号")
    private long id;
    @ApiModelProperty("可分配名额")
    private Integer allowAmount;
    @ApiModelProperty("申请条件/组学金获取")
    private String grants;
    @ApiModelProperty("申请条件/学年")
    private String schoolYear;
    @ApiModelProperty("申请截至时间")
    private Date endDate;
    @ApiModelProperty("年级配置信息")
    private List<Scholarship2Grade> gradeCongifs;


    public List<Scholarship2Grade> getGradeCongifs() {
        return gradeCongifs;
    }

    public void setGradeCongifs(List<Scholarship2Grade> gradeCongifs) {
        this.gradeCongifs = gradeCongifs;
    }

    public long getId() {
        return id;

    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getAllowAmount() {
        return allowAmount;
    }

    public void setAllowAmount(Integer allowAmount) {
        this.allowAmount = allowAmount;
    }


    public Date getEndDate() {
        return endDate;
    }

    public String getGrants() {
        return grants;
    }

    public void setGrants(String grants) {
        this.grants = grants;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
