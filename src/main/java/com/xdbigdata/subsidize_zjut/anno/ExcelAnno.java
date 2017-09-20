package com.xdbigdata.subsidize_zjut.anno;

import java.lang.annotation.*;

/**
 * Created by 金明江 on 2016/11/25.
 */
@Documented
@Target({ElementType.METHOD, ElementType.FIELD,ElementType.PARAMETER,ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface ExcelAnno {
    String head() default "";
}
