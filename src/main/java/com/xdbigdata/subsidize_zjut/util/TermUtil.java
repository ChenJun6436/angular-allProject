package com.xdbigdata.subsidize_zjut.util;

import org.joda.time.DateTime;

/**
 * Created by tangyijun on 2017/5/3.
 * good good study,day day up!
 */
public class TermUtil {
    public  static String getCurrentTerm() {
        DateTime now = DateTime.now();
        int year = now.getYear();
        int monthOfYear = now.getMonthOfYear();
        if (monthOfYear>=9&monthOfYear<=2) {
            return year + "-" + (year + 1) + "上学期";
        }else{
            return (year - 1) + "-" + year + "下学期";
        }
    }


}
