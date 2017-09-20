package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsHasPovertyLevelNotApply;

import java.util.List;

/**
 * Created by Administrator on 2017/5/27.
 */
public interface IGrantsAdvisorService {
    /**
     * 本学年评定经济困难学生但未申请国家助学金
     * @return
     */
    List<GrantsHasPovertyLevelNotApply> listHavePovertyLevelButNotApply() throws Exception;
}
