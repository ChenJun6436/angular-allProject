package com.xdbigdata.subsidize_zjut.util;

import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**用户上下文信息
 * Created by admin on 2016/6/29.
 */
@Component
public class UserUtil {
    public static final String USER_IN_SESSION = "sessionUserDto";


    public static HttpServletRequest getRequest() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        return requestAttributes.getRequest();
    }

    /**
     * 获取session
     * @return
     */
    public static HttpSession getSession() {
        return getRequest().getSession();
    }

    /**
     * 获得登录用户
     * @return
     */
    public static Object getLoginUser() {
        return getSession().getAttribute(USER_IN_SESSION);
    }

    /**
     * 得到服务器的ip地址
     * @return
     */
    public static String getLocalAddr() {
        return getRequest().getLocalAddr();
    }

    /**
     * 得到用户远程访问的ip地址
     * @return
     */
    public static String getRemoteAddr() {
        return getRequest().getRemoteAddr();
    }

}