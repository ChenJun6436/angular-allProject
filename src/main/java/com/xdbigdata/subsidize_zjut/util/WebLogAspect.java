package com.xdbigdata.subsidize_zjut.util;

import org.springframework.stereotype.Component;

/**
 * Created by tangyijun on 2017/4/5.
 * good good study,day day up!
 */
//@Aspect
@Component
public class WebLogAspect {
//    private Logger logger = Logger.getLogger(getClass());
//
//    ThreadLocal<Long> startTime = new ThreadLocal<>();
//
//    @Pointcut("execution(public * com.xdbigdata.subsidize_zjut.web..*.*(..))")
//    public void webLog(){}
//
//    @Order(1)
//    @Before("webLog()")
//    public void doBefore(JoinPoint joinPoint) throws Throwable {
//        startTime.set(System.currentTimeMillis());
//        // 接收到请求，记录请求内容
//        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
//        HttpServletRequest request = attributes.getRequest();
//        // 记录下请求内容
//        logger.info("************URL************ : " + request.getRequestURL().toString());
//        logger.info("************HTTP_METHOD************ : " + request.getMethod());
//        logger.info("************IP************ : " + request.getRemoteAddr());
//        logger.info("************CLASS_METHOD************ : " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName());
//        logger.info("************ARGS************ : " + Arrays.toString(joinPoint.getArgs()));
//    }
//
//    @Order(1)
//    @AfterReturning(returning = "ret", pointcut = "webLog()")
//    public void doAfterReturning(Object ret) throws Throwable {
//        // 处理完请求，返回内容
//        logger.info("************RESPONSE************ : " + ret);
//        logger.info("************SPEND TIME************ :" + (System.currentTimeMillis() - startTime.get()));
//    }
}
