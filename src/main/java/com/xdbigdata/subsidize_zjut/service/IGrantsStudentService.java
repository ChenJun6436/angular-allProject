package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsDissentDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsRecommitDto;
import com.xdbigdata.subsidize_zjut.domain.GrantsAttachment;
import com.xdbigdata.subsidize_zjut.domain.GrantsDissent;

import java.util.List;
import java.util.Map;

/**
 * 助学金学生相关服务
 * Created by Administrator on 2017/5/25.
 */
public interface IGrantsStudentService {

    /**
     * 获取学生能够申请的助学金列表
     * @return
     */
    GrantsDto listAuthGrants() throws Exception;

    /**
     * 获取学生上传的助学金资料列表
     * @return
     */
    List<GrantsAttachment> listApplyMaterial() throws Exception;

    /**
     * 删除学生上传资历
     * @param id
     */
    void deleteApplyMaterialById(Long id) throws Exception;


    /**
     * 学生重新提交材料
     * @param grantsRecommitDto
     */
    void recommitMaterial(GrantsRecommitDto grantsRecommitDto);

    /**
     * 查看当前登录学生用户提出的异议列表，依据不同的阶段
     * @return
     */
    List<GrantsDissent> listMyDissent();
}
