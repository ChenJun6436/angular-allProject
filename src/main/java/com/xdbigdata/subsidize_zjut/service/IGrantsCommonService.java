package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsDissentDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsDissentResponseDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsNoticeDto;
import com.xdbigdata.subsidize_zjut.domain.Grants;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/5/24.
 */
public interface IGrantsCommonService {

    /**
     * 上传模版/资料
     * @param file
     * @return
     */
    String uploadFile(MultipartFile file) throws Exception;

    /**
     * 保存学生异议
     * @param grantsDissent
     */
    void saveCommitDissent(GrantsDissentDto grantsDissent) throws Exception;

    /**
     * 处理学生异议
     * @param responseDto
     */
    void saveDissentDealInfo(GrantsDissentResponseDto responseDto) throws Exception;

    /**
     * 查看异议列表
     * @return
     */
    List<Map<String,Object>> findDissentByStatus() throws Exception;
    /**
     * 获取助学金详情
     * @param grantsUuid
     * @return
     */
    Grants findGrantsDetailByUuid(String grantsUuid);

    /**
     * 查询当前学年贫困认定等级
     * @param sn
     * @return
     */
    String findStudentPovertyLevel(String sn) throws Exception;

    /**
     * 查找当前申请的助学金Uuid
     * @return
     */
    String findCurrentGrants();


    /**
     * 保存或更新公示时间
     * @param grantsPublicityDto
     */
    void saveOrUpdatePublicityTimeConfig(GrantsPublicity grantsPublicityDto) throws Exception;

    /**
     * 获取学年的助学金名
     * @param schoolYear
     */
    List<Map> listGrantsBySchoolYear(String schoolYear);

    /**
     * 查找公示阶段
     * @return
     */
    GrantsPublicity findPublicityStage() throws Exception;

    /**
     * 获取公示时间
     * @return
     */
    GrantsPublicity findPublicityTimeConfig() throws Exception;

    /**
     * 公示时间配置
     * @return
     */
    GrantsPublicity isCofigPublicityTime() throws Exception;
}
