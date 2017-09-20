package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsDissentResponseDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsNoticeDto;
import com.xdbigdata.subsidize_zjut.domain.Grants;
import com.xdbigdata.subsidize_zjut.domain.GrantsDissent;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import com.xdbigdata.subsidize_zjut.domain.ScholarshipPublicity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/6/11 0011.
 */
public interface IScholarshipCommonService {

    /**
     * 保存学生异议
     * @param grantsDissent
     */
    void saveCommitDissent(GrantsDissent grantsDissent) throws Exception;

    /**
     * 处理学生异议
     * @param responseDto
     */
    void saveDissentDealInfo(GrantsDissentResponseDto responseDto) throws Exception;

    /**
     * 查看异议列表
     * @param noticeDto
     * @return
     */
    List<Map<String,Object>> findDissentByStatus(GrantsNoticeDto noticeDto) throws Exception;


    /**
     * 保存或更新公示时间
     * @param grantsPublicityDto
     */
    void saveOrUpdatePublicityTimeConfig(ScholarshipPublicity grantsPublicityDto) throws Exception;


    /**
     * 查找公示阶段
     * @return
     */
    String findPublicityStage();

    /**
     * 获取公示时间
     * @return
     */
    GrantsPublicity findPublicityTimeConfig();

    /**
     * 是否配置公示时间
     * @return
     */
    String isCofigPublicityTime();
}
