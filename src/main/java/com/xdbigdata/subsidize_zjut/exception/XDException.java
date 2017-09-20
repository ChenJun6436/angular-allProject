package com.xdbigdata.subsidize_zjut.exception;

/**
 * Created by tangyijun on 2016/12/15.
 * good good study,day day up!
 */
public class XDException extends RuntimeException {
    public XDException(String message) {
        super("系统异常----^_^-----"+message);
    }

}
