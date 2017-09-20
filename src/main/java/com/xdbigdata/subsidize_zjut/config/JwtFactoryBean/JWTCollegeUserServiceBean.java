package com.xdbigdata.subsidize_zjut.config.JwtFactoryBean;

import com.xdbigdata.jwtService.proxy.RestJwtProxy;
import com.xdbigdata.jwtService.service.JWTCollegeUserService;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.stereotype.Component;

/**
 * Created by Administrator on 2017/4/12.
 */
@Component
public class JWTCollegeUserServiceBean implements FactoryBean<JWTCollegeUserService> {

    @Override
    public JWTCollegeUserService getObject() throws Exception {
        return RestJwtProxy.newProxy(JWTCollegeUserService.class);
    }

    @Override
    public Class<?> getObjectType() {
        return RestJwtProxy.newProxy(JWTCollegeUserService.class).getClass();
    }

    @Override
    public boolean isSingleton() {
        return true;
    }
}
