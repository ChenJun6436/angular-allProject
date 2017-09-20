package com.xdbigdata.subsidize_zjut.config.JwtFactoryBean;

import com.xdbigdata.jwtService.proxy.RestJwtProxy;
import com.xdbigdata.jwtService.service.JWTSchoolYearService;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.stereotype.Component;

/**
 * Created by longfei on 2017/4/1.
 * Description: What you wanna do
 * Created Date: 2017/4/1
 * Created Time: ${Time}
 * Modified Date: 2017/4/1
 * TO-DO: Write Here
 */
@Component
public class JWTSchoolYearServiceBean implements FactoryBean<JWTSchoolYearService> {
    @Override
    public JWTSchoolYearService getObject() throws Exception {
        return RestJwtProxy.newProxy(JWTSchoolYearService.class);
    }

    @Override
    public Class<?> getObjectType() {
        return RestJwtProxy.newProxy(JWTSchoolYearService.class).getClass();
    }

    @Override
    public boolean isSingleton() {
        return true;
    }
}
