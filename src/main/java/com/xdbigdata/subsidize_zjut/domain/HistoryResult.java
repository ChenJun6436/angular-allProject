package com.xdbigdata.subsidize_zjut.domain;

import com.xdbigdata.subsidize_zjut.anno.ExcelAnno;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * 困难认定历史表
 * Created by staunch on 2017/5/18.
 */
@Data
@Entity(name = "t_historyResult")
public class HistoryResult {
    @Id
    @GeneratedValue
    private Long id;
    @ExcelAnno(head = "学号")
    private String studentId;
    @ExcelAnno(head = "评定结果")
    private String povertyLevel;
    private Date date;
    @ExcelAnno(head = "年级")
    private String gradeName;
    @ExcelAnno(head = "学院")
    private String collegeName;
    @ExcelAnno(head = "专业")
    private String majorName;
    @ExcelAnno(head = "班级")
    private String className;
    @ExcelAnno(head="姓名")
    private String name;
    private String status;
    @ExcelAnno(head = "申请学年")
    private String year;
    private Long yearId;
}
