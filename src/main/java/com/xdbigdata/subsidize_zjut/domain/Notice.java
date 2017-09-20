package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.util.Date;
import java.util.List;

/**
 * 公告
 * Created by staunch on 2017/3/17.
 */
@Data
@ApiModel("公告domain")
@Entity(name = "t_notice")
public class Notice {
    @Id
    @GeneratedValue
    @ApiModelProperty(hidden = true)
    private Integer id;//id
    @ApiModelProperty("公告标题")
    private String title;//公告标题
    @ApiModelProperty("公告内容")
    private String content;//公告内容
    @ApiModelProperty("公告时间")
    private Date noticeTime;//公告时间
    @ApiModelProperty(hidden = true)
    @Transient
    private List<PovertyAttachment> povertyAttachments;
}
