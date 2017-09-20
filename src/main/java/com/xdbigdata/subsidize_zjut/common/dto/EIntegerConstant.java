package com.xdbigdata.subsidize_zjut.common.dto;

/**
 * Created by Administrator on 2017/5/24.
 */
public enum  EIntegerConstant {
    SCHOOL_USER_TYPE(1),
    COLLEGE_USER_TYPE(2),
    ADVISOR_USER_TYPE(3),
    STUDENT_USER_TYPE(5),
    CLASS_USER_TYPE(4),
    MATERIAL_REJECT(0),
    MATERIAL_PASS(1),
    ;

    private Integer value;

    EIntegerConstant(Integer value) {
        this.value = value;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "EIntegerConstant{" +
                "value=" + value +
                '}';
    }
}
