package com.xdbigdata.subsidize_zjut.domain;

import lombok.Data;

import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by tangyijun on 2017/4/25.
 * good good study,day day up!
 */
@Data
@Table(name="t_student")
public class Student {
    @Id
    private Long id;

    private String sn;

    private String dormNo; //宿舍号、

    private String phone; //在校联系电话

    private String homePhone; //家庭联系电话

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
