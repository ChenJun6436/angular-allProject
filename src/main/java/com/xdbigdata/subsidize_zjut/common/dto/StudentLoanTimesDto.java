package com.xdbigdata.subsidize_zjut.common.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

/**
 * Created by 傻逼彬 on 2017/5/14.
 */
@Component
@Setter
@Getter
public class StudentLoanTimesDto {
    private String studentSn;
    private Long loanTimes;

    @Override
    public String toString() {
        return "StudentLoanTimesDto{" +
                "studentSn='" + studentSn + '\'' +
                ", loanTimes=" + loanTimes +
                '}';
    }
}
