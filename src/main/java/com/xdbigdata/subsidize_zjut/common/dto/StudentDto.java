package com.xdbigdata.subsidize_zjut.common.dto;

import lombok.Data;

import java.util.Date;

/**
 * Created by tangyijun on 2017/4/26.
 * good good study,day day up!
 */
@Data
public class StudentDto {

    private Long id;

    //=============================这部分是远程获取增补的内容=====================
    private String name; //姓名

    private String classes; //班级

    private String grade; //年级

    private String college; //学院

    private String major; //专业

    private Integer gender; //性别

    private Date birthday; //出生日期

    private  String nation; //民族

    private String jiguan; //籍贯

    private String politicalStatus; //政治面貌

    private String idNumber; //身份证号

    private String dormNo; //宿舍号

    private String phone; //在校联系电话

    private String homePhone; //家庭联系电话
    //===============================================================

    private String sn; //学号

    private String account; //银行账户

    private String health; //健康情况

    private Integer familyNo; //家庭人口数

    private Integer studentNo; //家庭学生数

    private Double debt; //家庭负债金额

    private Integer building; //是否建档 1是 0否

    private Integer disability; //是否残疾 1是 0 否

    private Integer lowIncome; //是否低保 1是 0否

    private Integer  martyrFamily; //是否烈士家庭 1是 0否

    private Integer wubaohu; //是否农村五保户 1是 0 否

    private Integer orphan; //是否孤儿 1是 0否

    private Integer accidentInThreeYear; //是否三年家庭有意外 1是 0否

    private Double familyIncome; //家庭人均年收入

    private Double alimony; //家庭月生活费

    private String homeAddress; //家庭地址

    private String declare;//说明
}
