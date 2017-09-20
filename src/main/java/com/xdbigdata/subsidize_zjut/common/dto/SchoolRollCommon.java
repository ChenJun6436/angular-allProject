package com.xdbigdata.subsidize_zjut.common.dto;

/**
 * Created by staunch on 2017/5/11.
 */
public enum SchoolRollCommon {

    SCHOOL_ROLL_NORMAL(0, "正常"),
    SCHOOL_ROLL_TEMPORARY(1, "休学"),
    SCHOOL_ROLL_DROPOUT(2, "退学"),
    SCHOOL_ROLL_GRADUATION(4, "毕业");
    private Integer code;
    private String value;
    SchoolRollCommon(Integer code, String value) {
        this.code = code;
        this.value = value;
    }

    public static String getValue(Integer code) {
        for (SchoolRollCommon schoolRollCommon:SchoolRollCommon.values()) {
            if (code == schoolRollCommon.code) {
                return schoolRollCommon.value;
            }
        }
        return null;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
