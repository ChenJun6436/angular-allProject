package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * 附件对象
 * Created by staunch on 2017/3/29.
 */
@Entity(name = "t_poverty_attachment")
@Data
public class PovertyAttachment {
    @Id
    @GeneratedValue
    private Integer id;
    private String studentId;
    private String name;
    private String url;
    private Date createTime;
    private String NoticeId;
}
