package com.xdbigdata.subsidize_zjut.exception;

/**
 * Created by sky on 2017/6/9.
 * 统一业务异常类
 */
public class BusinessException extends RuntimeException {
    public BusinessException(String message) {
        super(message);
    }
}
