package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.subsidize_zjut.anno.ExcelAnno;
import lombok.Data;

import java.io.Serializable;

/**
 * 封装流程展示dto
 * Created by staunch on 2017/3/30.
 */
@Data
public class PovertyApplyDto implements Serializable{
    private static final long serialVersionUID = -3450064362986273896L;
    private String taskId;//任务id
    private String processInstanceId;//流程实例Id
    @ExcelAnno(head = "姓名")
    private String name;//学生姓名
    @ExcelAnno(head = "学号")
    private String studentId;//学号
    @ExcelAnno(head = "年级")
    private String gradeName;//年级
    @ExcelAnno(head = "学院")
    private String collegeName;//学院
    @ExcelAnno(head = "专业")
    private String majorName;//专业
    @ExcelAnno(head = "班级")
    private String className;//班级
    @ExcelAnno(head = "班级审核结果")
    private String classResult;//班级审核结果
    @ExcelAnno(head = "辅导员审核结果")
    private String advisorResult;//辅导员审核结果
    @ExcelAnno(head = "学院审核结果")
    private String collegeResult;//学院审核结果
    @ExcelAnno(head = "学院公示结果")
    private String collegeOpenResult;//学院公示结果
    @ExcelAnno(head = "学校审核结果")
    private String schoolResult;//学校审核结果
    @ExcelAnno(head = "学校公示结果")
    private String schoolOpenResult;//学校公示结果
    @ExcelAnno(head = "完成认定结果")
    private String result;//最终认定结果
    private String status;//学籍情况
}
