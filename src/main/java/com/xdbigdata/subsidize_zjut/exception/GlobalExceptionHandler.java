package com.xdbigdata.subsidize_zjut.exception;


import com.mysql.jdbc.exceptions.jdbc4.CommunicationsException;
import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import com.xdbigdata.subsidize_zjut.common.CommonResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.ConnectException;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.concurrent.CancellationException;

/**
 * Created by tangyijun on 2017/1/3.
 * good good study,day day up!
 */
@RestController
@ControllerAdvice
public class GlobalExceptionHandler {
    private Logger logger = LoggerFactory.getLogger("GlobalExceptionHandler");

    @ExceptionHandler(value = XDException.class)
    @ResponseBody
    public Object baseErrorHandler(HttpServletRequest req, Exception e) throws Exception {
        logger.error("---BaseException Handler---Host {} invokes url {} ERROR: {}", req.getRemoteHost(), req.getRequestURL(), e.getMessage());
        CommonResult result = new CommonResult();
        result.setStatus(false);
        result.setCode(ErrorCode.INTERNAL_PROGRAM_ERROR.code);
        result.setMessage(e.getMessage());
        return result;
    }

    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public Object defaultErrorHandler(HttpServletRequest req, Exception e) throws Exception {
        logger.error("---DefaultException Handler---Host {} invokes url {} ERROR: {}", req.getRemoteHost(), req.getRequestURL(), e.getMessage());
        CommonResult result = new CommonResult();
        result.setStatus(false);
        if (e instanceof DataAccessException) {
            e.printStackTrace();
            result.setMessage(ErrorCode.DataAccessException.des);
            result.setCode( ErrorCode.DataAccessException.code);

        } else if (e instanceof DataIntegrityViolationException) {
            result.setMessage(ErrorCode.DataIntegrityViolationException.des);
            result.setCode(ErrorCode.DataIntegrityViolationException.code);

        } else if (e instanceof CommunicationsException) {
            result.setMessage(ErrorCode.CommunicationsException.des);
            result.setCode(ErrorCode.CommunicationsException.code);

        }else if (e instanceof MySQLIntegrityConstraintViolationException) {
            result.setMessage(ErrorCode.MySQLIntegrityConstraintViolationException.des);
            result.setCode(ErrorCode.MySQLIntegrityConstraintViolationException.code);

        }else if (e instanceof NullPointerException) {
            e.printStackTrace();
            result.setMessage(ErrorCode.NullPointerException.des);
            result.setCode(ErrorCode.NullPointerException.code);

        }else if (e instanceof IOException) {
            e.printStackTrace();
            result.setMessage(ErrorCode.IOException.des);
            result.setCode(ErrorCode.IOException.code);

        }else if (e instanceof ClassNotFoundException) {
            result.setMessage(ErrorCode.ClassNotFoundException.des);
            result.setCode(ErrorCode.ClassNotFoundException.code);

        }else if (e instanceof ArithmeticException) {
            result.setMessage(ErrorCode.ArithmeticException.des);
            result.setCode(ErrorCode.ArithmeticException.code);

        }else if (e instanceof ArrayIndexOutOfBoundsException) {
            result.setMessage(ErrorCode.ArrayIndexOutOfBoundsException.des);
            result.setCode(ErrorCode.ArrayIndexOutOfBoundsException.code);

        }else if (e instanceof IllegalArgumentException) {
            result.setMessage(ErrorCode.IllegalArgumentException.des);
            result.setCode(ErrorCode.IllegalArgumentException.code);

        }else if (e instanceof ClassCastException) {
            result.setMessage(ErrorCode.ClassCastException.des);
            result.setCode(ErrorCode.ClassCastException.code);

        }else if (e instanceof SQLException) {
            result.setMessage(ErrorCode.SQLException.des);
            result.setCode(ErrorCode.SQLException.code);

        }else if (e instanceof SecurityException) {
            result.setMessage(ErrorCode.SecurityException.des);
            result.setCode(ErrorCode.SecurityException.code);

        }else if (e instanceof NoSuchMethodException) {
            result.setMessage(ErrorCode.NoSuchMethodException.des);
            result.setCode(ErrorCode.NoSuchMethodException.code);
        }

        else if (e instanceof ConnectException) {
            result.setMessage(ErrorCode.ConnectException.des);
            result.setCode(ErrorCode.ConnectException.code);
        }

        else if (e instanceof CancellationException) {
            result.setMessage(ErrorCode.CancellationException.des);
            result.setCode(ErrorCode.CancellationException.code);
        }

        else if (e instanceof ParseException) {
            result.setMessage(ErrorCode.ParseException.des);
            result.setCode(ErrorCode.ParseException.code);
        }
        else {
            e.printStackTrace();
            result.setMessage(e.getMessage());
            result.setCode(ErrorCode.INTERNAL_PROGRAM_ERROR.code);
        }
        return result;
    }
}
