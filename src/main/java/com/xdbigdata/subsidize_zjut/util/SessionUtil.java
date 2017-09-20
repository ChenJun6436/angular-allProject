package com.xdbigdata.subsidize_zjut.util;

import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import org.springframework.util.ResourceUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;
import java.io.FileNotFoundException;

/**
 * Created by staunch on 2016-07-21.
 * version：v1.0
 * instruction：初始版本
 */
public class SessionUtil {

    /**
     * 获取session
     *
     * @return
     */
    public static HttpSession getSession() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        return requestAttributes.getRequest().getSession();
    }

    /**
     * 获取上传文件的相对路径
     *
     * @return
     */
    public static String getUploadUrl() {
        String url = null;
        try {
            url = ResourceUtils.getURL("classpath:").getPath() + "static";
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return url;
    }

    public static String getUserName() {
        SessionUserDto sessionUserDto = (SessionUserDto) getSession().getAttribute("sessionUserDto");
        return sessionUserDto.getUserName()==null?null:sessionUserDto.getUserName();
    }

    public static String getRealName() {
        SessionUserDto sessionUserDto = (SessionUserDto) getSession().getAttribute("sessionUserDto");
        return sessionUserDto.getRealName()==null?" ":sessionUserDto.getRealName();
    }

    //public static void main(String[] args) {
    //    System.out.println(new SessionUtil().getUploadUrl());
    //}
}
