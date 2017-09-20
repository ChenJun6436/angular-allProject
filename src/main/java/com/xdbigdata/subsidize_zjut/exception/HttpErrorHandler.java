package com.xdbigdata.subsidize_zjut.exception;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;


/**
 * Created by tangyijun on 2017/1/3.
 * good good study,day day up!
 */
@Controller
public class HttpErrorHandler implements ErrorController {

    private final static String ERROR_PATH = "/error";
//
//    /**
//     * Supports the HTML Error View
//     *
//     * @param request
//     * @return
//     */
//    @RequestMapping(value = ERROR_PATH, produces = "text/html")
//    public String errorHtml(HttpServletRequest request) {
//        return "404";
//    }

    /**
     * Supports other formats like JSON, XML
     *
     * @param request
     * @return
     */
    @RequestMapping(value = ERROR_PATH)
    @ResponseBody
    public Object error(HttpServletRequest request) {
        return new CommonResult(false,null,ErrorCode.NOT_FOUND_PAGE.code,ErrorCode.NOT_FOUND_PAGE.des);
    }

    /**
     * Returns the path of the error page.
     *
     * @return the error path
     */
    @Override
    public String getErrorPath() {
        return ERROR_PATH;
    }
}
