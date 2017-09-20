package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * 操作日志
 * Created by staunch on 2017/3/17.
 */
@Data
@Entity(name = "t_log")
public class Log {
    @Id
    @GeneratedValue
    private Integer id;//id
    private String userName;//用户名
    private Integer type;//用户类型
    private Date dateTime;//操作时间
    private String content;//操作内容
}
