package com.xdbigdata.subsidize_zjut.util;

import org.springframework.stereotype.Component;

/**
 * 助学金业务键
 * grants + grantsUuid + collegeId  + studentSn
 * Created by Administrator on 2017/5/28.
 */
@Component
public class GrantsBussinessKeyUtil {

    private final static String GRANTS_KEY = "grants:";

    /**
     * 助学金学生申请key
     * @param collegeId
     * @param grantsUuid
     * @param studentid
     * @return
     */
    public String getStudentApplyKey(final Long collegeId,final String grantsUuid,final String studentid){
        return new StringBuffer().append(GRANTS_KEY)
                .append(grantsUuid)
                .append(":")
                .append(collegeId)
                .append(":")
                .append(studentid)
                .toString();
    }


    /**
     * 获取学校模糊查询Key
     * @param grantsUuid
     * @return
     */
    public String getGrantsSchoolBussinessLikeKey(final String grantsUuid) {
        return new StringBuffer().append(GRANTS_KEY)
                .append(grantsUuid)
                .append("%")
                .toString();
    }

    /**
     * 获取学院模糊查询Key
     * @param grantsUuid
     * @param collegeId
     * @return
     */
    public String getGrantsCollegeBussinessLikeKey(final String grantsUuid, final String collegeId) {
        return new StringBuffer().append(GRANTS_KEY)
                .append(grantsUuid)
                .append(":")
                .append(collegeId)
                .append("%")
                .toString();
    }

    /**
     * 辅导员模糊查询key
     * @param grantsUuid
     * @param collegeId
     * @return
     */
    public String getGrantsAdvisorBussinessLikeKey(final String grantsUuid, final String collegeId) {
        return getGrantsCollegeBussinessLikeKey(grantsUuid,collegeId);
    }

    /**
     * 学院公式模糊查询key
     * @param currentUuid
     * @param collegeId
     * @return
     */
    public String getGrantsCollegePublicityLikeKey(final String currentUuid,final String collegeId) {
        return new StringBuffer().append(GRANTS_KEY)
                .append(currentUuid)
                .append(":")
                .append(collegeId)
                .append("%")
                .toString();
    }
}
