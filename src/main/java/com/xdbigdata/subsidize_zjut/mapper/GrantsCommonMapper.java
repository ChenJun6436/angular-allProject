package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsAmountDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsDissentDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsDissentResponseDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsNameWithLevelDto;
import com.xdbigdata.subsidize_zjut.domain.Grants;
import com.xdbigdata.subsidize_zjut.domain.GrantsAttachment;
import com.xdbigdata.subsidize_zjut.domain.GrantsHistory;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/5/24.
 */
@Mapper
public interface GrantsCommonMapper {
    /**
     * 保存助学金资料
     *
     * @param attachment
     */
    void saveGrantsAttachment(GrantsAttachment attachment);

    /**
     * 查找学生贫困认定等级
     *
     * @param sn
     * @param currentSchoolYear
     * @return
     */
    String findStudentPovertyLevel(@Param("sn") String sn, @Param("currentSchoolYear") String currentSchoolYear);

    /**
     * 获取助学金流程变量中的助学金id和名称（或含等级）
     *
     * @param uuid
     * @return
     */
    List<GrantsNameWithLevelDto> listGrantsWithLevel(String uuid);

    /**
     * 获取学生上传材料名称列表,用于判断是否重复上传
     *
     * @param grantsUuid
     * @param sn
     * @return
     */
    List<String> listApplyMaterialNames(@Param("grantsUuid") String grantsUuid, @Param("sn") String sn);

    /**
     * @param grantsUuid
     * @param sn
     * @return
     */
    List<String> listApplyMaterialUrls(@Param("grantsUuid") String grantsUuid, @Param("sn") String sn);

    /**
     * 保存学生异议
     *
     * @param grantsDissent
     */
    void saveCommitDissent(GrantsDissentDto grantsDissent);

    /**
     * 处理异议
     *
     * @param responseDto
     */
    void saveDissentDealInfo(GrantsDissentResponseDto responseDto);

    /**
     * 驳回时删除学生助学金申请的材料
     *
     * @param applyGrantsUuid
     * @param sn
     */
    void deleteStudentApplyMaterial(@Param("grantsUuid") String applyGrantsUuid, @Param("sn") String sn);

    /**
     * 查找助学金详情
     *
     * @param grantsUuid
     * @return
     */
    Grants findGrantsDetailByUuid(String grantsUuid);

    /**
     * 查找学生某学年学年认定结果
     *
     * @param schoolYear
     * @param sn
     * @return
     */
    List<String> findSchoolYearGrantsLevel(@Param("schoolYear") String schoolYear, @Param("sn") String sn);

    /**
     * 用于判断当前阶段是否在 学院/学校 公示阶段
     *
     * @param grantsUuid
     * @param stage
     * @return
     */
    Long countPublicityTimeByStage(@Param("grantsUuid") String grantsUuid, @Param("stage") String stage,@Param("collegeId")Long collegeId);


    /**
     * 查找当前助学金
     *
     * @return
     */
    String findCurrentGrants();

    /**
     * 保存学院公示时间配置
     *
     * @param grantsPublicityDto
     */
    void savePublicityTimeConfig(GrantsPublicity grantsPublicityDto);

    /**
     * 更新学院公示时间配置
     *
     * @param grantsPublicityDto
     */
    void updatePublicityTimeConfig(GrantsPublicity grantsPublicityDto);

    /**
     * 查找之前的时间配置
     *
     * @param id
     */
    GrantsPublicity findPublicityTimeConfigById(Long id);

    /**
     * 依据助学金名称 / 等级 获取助学金id
     *
     * @param grantsName
     * @return
     */
    Long findGrantsIdByNameWithLevel(String grantsName);

    /**
     * 保存认定结果
     *
     * @param result
     */
    void saveGrantsResult(GrantsHistory result);

    /**
     * 获取申请助学金名称
     *
     * @param applyGrantsUuid
     * @return
     */
    String findGrantsNameByUuid(String applyGrantsUuid);

    /**
     * 查询公示详细记录
     *
     * @param grantsUuid
     * @param stage
     * @return
     */
    GrantsPublicity findGrantsPublicityDetail(@Param("grantsUuid") String grantsUuid, @Param("stage") String stage);

    /**
     * 依据学年获取助学金名称列表
     *
     * @param schoolYear
     * @return
     */
    List<Map> listGrantsBySchoolYear(String schoolYear);

    /**
     * 查找公示异议列表
     *
     * @param query
     */
    List<Map<String,Object>> listGrantsDissent(Map query);

    /**
     * 获取公示时间配置
     * @param grantsUuid
     * @param stage
     * @return
     */
    GrantsPublicity findGrantsPublicityTimeConfig(@Param("grantsUuid") String grantsUuid, @Param("stage") String stage);

    /**
     * 是否配置公示时间
     * @param grantsUuid
     * @param stage
     * @return
     */
    Long countGrantsPublicityTimeConfig(@Param("grantsUuid")String grantsUuid,@Param("stage") String stage);

    /**
     * 查找年级分配到人数
     * @param gradeIds
     * @return
     */
    List<GrantsAmountDto> sumGradeAmountById(@Param("grantsUuid")String grantsUuid,@Param("gradeIds") List<Long> gradeIds);

    /**
     * 查找学院分配人数
     * @param grantsUuid
     * @param collegeId
     * @return
     */
    GrantsAmountDto  sumCollegeAmountByCollegeId(@Param("grantsUuid")String grantsUuid,@Param("collegeId")Long collegeId);

    /**
     * 获取学校分配的总名额数
     * @return
     */
    Long sumGrantsSchoolAllot(String grantsUuid);

    /**
     * 查找指定公示阶段的公示时间
     * @return
     */
    List<GrantsPublicity> listPublicityTime(@Param("grantsUuid") String grantsUuid,@Param("stage") String stage);

    /**
     * 学院公示自动完成后标记
     * @param id
     */
    void updateCollegePublicityIsStart(Long id);

    /**
     * 更新学院提交任务到学校
     * @param id
     */
    void updateCollegeToSchool(Long id);

    /**
     * 查找当前登录学院的公示配置时间
     * @param collegeId
     * @param grantsUuid
     * @return
     */
    GrantsPublicity findPublicityTimeConfigByCollegeIdAndGrantsUuid(@Param("collegeId") Long collegeId,@Param("grantsUuid") String grantsUuid);

    /**
     * 查看学生是否提交了异议
     * @param sn
     * @return
     */
    Long countStudentDissentTime(String sn);

    /**
     * 查找学院是否配置公示时间
     * @param grantsUuid
     * @param collegeId
     * @return
     */
    GrantsPublicity findCollegePublicityByGrantsUuidAndCollegeId(@Param("grantsUuid") String grantsUuid, @Param("collegeId") Long collegeId);

    /**
     * 查找学校是否配置公示时间
     *   null 未配置
     *  !null 配置
     * @param grantsUuid
     * @param stage
     * @return
     */
    GrantsPublicity findSchoolPublicityByGrantsUuidAndStage(@Param("grantsUuid") String grantsUuid, @Param("stage") String stage);
}
