package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by jinmingjiang on 2017/5/22.
 * 学生基本信息
 */
@Data
@Entity(name = "t_student_info")
@ApiModel("学生基本信息Model")
public class StudentInfo {
    //学生ID
    @Id
    @GeneratedValue
    @ApiModelProperty("学生ID")
    private Long id;
    //学号
    @ApiModelProperty("学号")
    private String studentId;
    //姓名
    @ApiModelProperty("姓名")
    private String name;
    //班级
    @ApiModelProperty("班级")
    private String className;
    //年级
    @ApiModelProperty("年级")
    private String gradeName;
    //学院
    @ApiModelProperty("学院")
    private String collegeName;
    //专业
    @ApiModelProperty("专业")
    private String majorName;
    //性别
    @ApiModelProperty("性别")
    private Integer gender;
    //生日
    @ApiModelProperty("生日")
    private Date birthday;
    //民族
    @ApiModelProperty("民族")
    private String nationName;
    //政治面貌
    @ApiModelProperty("政治面貌")
    private String partyName;
    //籍贯
    @ApiModelProperty("籍贯")
    private String nativePlace;
    //身份证号
    @ApiModelProperty("身份证号")
    private String idCard;
    //宿舍号
    @ApiModelProperty("宿舍号")
    private String dorm;
    //在校联系电话
    @ApiModelProperty("在校联系电话")
    private String schoolTel;
    //家庭联系电话
    @ApiModelProperty("家庭联系电话")
    private String homeTel;
    //银行账户
    @ApiModelProperty("银行账户")
    private String account;
    //本人健康情况
    @ApiModelProperty("本人健康情况")
    private String healthStatus;
    //家庭人口数
    @ApiModelProperty("家庭人口数")
    private Integer memberSize;
    //家庭在读学生数
    @ApiModelProperty("家庭在读学生数")
    private Integer studyingSize;
    //家庭负债金额
    @ApiModelProperty("家庭负债金额")
    private String familyLiabilities;
    //家庭人均年收入
    @ApiModelProperty("家庭人均年收入")
    private String income;
    //家庭每月提供生活费
    @ApiModelProperty("家庭每月提供生活费")
    private String monthlyCost;
    //家庭地址
    @ApiModelProperty("家庭地址")
    private String address;
    //家庭情况说明
    @ApiModelProperty("家庭情况说明")
    private String description;
    //是否在当地政府建档立卡
    @ApiModelProperty(value = "是否在当地政府建档立卡",notes = "0不是 1是")
    private Integer isFilingCard;
    //是否残疾
    @ApiModelProperty(value = "是否残疾",notes = "0不是 1是")
    private Integer isDisability;
    //是否低保家庭
    @ApiModelProperty(value = "是否低保家庭",notes = "0不是 1是")
    private Integer isLowField;
    //是否烈士家庭
    @ApiModelProperty(value = "是否烈士家庭",notes = "0不是 1是")
    private Integer isMartyr;
    //是否农村五保户
    @ApiModelProperty(value = "是否农村五保户",notes = "0不是 1是")
    private Integer isRuralInfirm;
    //是否孤儿
    @ApiModelProperty(value = "是否孤儿",notes = "0不是 1是")
    private Integer isOrphan;
    //近三年家庭是否遭受意外
    @ApiModelProperty(value = "近三年家庭是否遭受意外",notes = "0不是 1是")
    private Integer isAccident;
    @ApiModelProperty(value = "本次评定是否完成或者确定过信息",notes = "0不是 1是")
    //本次评定是否完成或者确定过信息
    private Integer isComplete;
    //上次认定等级
    private String lastStatus;
    /**
     -1：未通过审核
     0：未申请
     1：班级用户审核材料
     2：辅导员审核材料
     3：民主评议
     4：辅导员审核
     5：学院审核
     6：学院公示
     7：学校审核
     8: 学校公示
     9: 完成认定
     */
    private Integer status;

    /****************************助学金相关******************************************/
    //家庭户口
    @ApiModelProperty(value = "家庭户口",notes = "1城镇 2农村")
    private Integer homeType;
    //收入来源
    @ApiModelProperty(value = "收入来源")
    private String sourceIncome;
    //家庭月总收入
    @ApiModelProperty(value = "家庭月总收入")
    private String monthIncome;
}
