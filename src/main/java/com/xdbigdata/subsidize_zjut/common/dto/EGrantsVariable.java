package com.xdbigdata.subsidize_zjut.common.dto;

/**
 * 助学金流程变量
 * Created by Administrator on 2017/5/26.
 */
public enum  EGrantsVariable {
    //流程定义相关
    PROCESS_DEFINITION_KEY("grantsProcess"),//助学金流程定义KEY
    PROCESS_DEFINITION_SCHOLARSHIP_KEY("scholarshipProcess"),
    STUDENT_SN("studentSn"),//学生学号
    //驳回相关
    MODIFYDATA_STUDENT_SN("modifyDataStudentSn"),//驳回材料
    //对象
    STUDENT_INFO("studentInfo"),//学生信息
    CHECK_RESULT("checkResult"),//审查结果
    GRANTS_LEVELS("grantsLevel"),//助学金等级
    //审核用户相关
    ADVISOR_USER_SNS("advisorSns"),//辅导员审核用户
    COLLEGE_USER_SNS("collegeUserSns"),//学院审核用户
    SCHOOL_USERS_SNS("schoolUserSns"),//学校审核用户

    ADVISOR_CHECK("辅导员审核"),
    COLLEGE_CHECK("学院审核"),
    COLLEGE_PUBLICITY("学院公示"),
    SCHOOL_CHECK("学校审核"),
    SCHOOL_PUBLICITY("学校公示"),
    ;


    EGrantsVariable(String variable) {
        this.variable = variable;
    }

    private String variable;

    public String getVariable() {
        return variable;
    }

    public void setVariable(String variable) {
        this.variable = variable;
    }

    @Override
    public String toString() {
        return "EGrantsVariable{" +
                "variable='" + variable + '\'' +
                '}';
    }
}
