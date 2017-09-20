package com.xdbigdata.subsidize_zjut.config.JwtFactoryBean;

import com.xdbigdata.jwtService.proxy.RestJwtProxy;
import com.xdbigdata.jwtService.service.JWTPrimaryAdministrationService;
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
public class JWTPrimaryAdministrationServiceBean implements FactoryBean<JWTPrimaryAdministrationService> {
    @Override
    public JWTPrimaryAdministrationService getObject() throws Exception {
        return RestJwtProxy.newProxy(JWTPrimaryAdministrationService.class);
    }

    @Override
    public Class<?> getObjectType() {
        return RestJwtProxy.newProxy(JWTPrimaryAdministrationService.class).getClass();
    }

    @Override
    public boolean isSingleton() {
        return true;
    }
}
