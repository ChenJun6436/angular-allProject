package com.xdbigdata.subsidize_zjut.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * Created by tangyijun on 2017/4/18.
 * good good study,day day up!
 */
@Component
public class SpringContextUtil implements ApplicationContextAware{

    private static ApplicationContext applicationContext;
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringContextUtil.applicationContext=applicationContext;
    }

    public static Object getBean(String beanId) throws BeansException{
        return applicationContext.getBean(beanId);
    }
}
