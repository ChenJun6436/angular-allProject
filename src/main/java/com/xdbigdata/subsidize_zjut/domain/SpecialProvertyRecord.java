package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by tangyijun on 2017/5/3.
 * good good study,day day up!
 */
@Data
@Table(name="t_special_proverty_record")
public class SpecialProvertyRecord {
    @Id
    private Long id;
    private String studentId;
    private Integer result;
    private String term;
}
