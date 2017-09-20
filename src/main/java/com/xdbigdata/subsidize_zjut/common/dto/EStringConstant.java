package com.xdbigdata.subsidize_zjut.common.dto;

import java.io.File;

/**
 * Created by Administrator on 2017/5/24.
 */
public enum EStringConstant {

    STATIC("static"),
    UPLOAD("upload"),
    GRANTS_TEMPLATE("grantsTemplate"),
    //异常
    EXCEPTION_UPLOAD_PATH("上传文件路径获取异常"),
    EXCEPTION_UNAUTHORIZED("越权"),
    EXCEPTION_JWT("JWT服务出错"),
    JWT_GRADE_ID("gradeId"),
    JWT_PRIMARYTEACHINGINSTITUTIONID("primaryTeachingInstitutionId"),
    HARD("困难"),
    ORDINARY_HARD("一般困难"),
    EXCEPTION_FILE_EXIST("上传文件已存在"),
    EXCEPTION_NULLPOINT("调用了未经初始化的对象");

    private String value;

    EStringConstant(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "EStringConstant{" +
                "value='" + value + '\'' +
                '}';
    }
}
