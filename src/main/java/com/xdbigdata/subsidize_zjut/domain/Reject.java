package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * 驳回记录表
 * Created by staunch on 2016-06-03.
 * version：v1.0
 * instruction：初始版本
 */
@Data
@Entity(name = "t_reject")
public class Reject {
    @Id
    @GeneratedValue
    private int id;//id
    private String userName;//被驳回人用户名
    private Date rejectTime;//被驳回时间
    private String reason;//被驳回原因
}
