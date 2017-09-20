package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;
import com.xdbigdata.subsidize_zjut.domain.Dissent;
import com.xdbigdata.subsidize_zjut.domain.PovertyOpenTime;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 学院相关操作mapper
 * Created by staunch on 2017/3/29.
 */
@Mapper
public interface PovertyCollegeMapper {

    /**
     * 查询学生异议
     * @param studentIds
     * @return
     */
    List<Dissent> listDissent(@Param(value = "list") List<String> studentIds, @Param(value = "isStatus") Integer isStatus,@Param("type") Integer type);

    /**
     * 查询学生异议（学校）
     * @param studentIds
     * @param isStatus
     * @return
     */
    List<Dissent> listDissentSchool(@Param(value = "list") List<String> studentIds, @Param(value = "isStatus") Integer isStatus);

    /**
     * 处理公示异议
     * @param dissent
     */
    void dealOpenDissent(Dissent dissent);

    /**
     * 批量更新学院公示
     * @param povertyApplyDtos
     */
    void saveCollegeOpen(@Param(value = "list") List<PovertyApplyDto> povertyApplyDtos);

    /**
     * 批量更新学校公示
     * @param povertyApplyDtos
     */
    void saveSchoolOpen(@Param(value = "list") List<PovertyApplyDto> povertyApplyDtos);

    @Delete("delete from t_public_poverty where student_id = #{studentId}")
    void removeOpenResult(@Param(value = "studentId") String studentId);

    /**
     * 根据学院ID查找公示时间
     * @param collegeId
     * @return
     */
    List<PovertyOpenTime> findOpenTimeByCollegeId(Long collegeId);

    /**
     * 根据学院用户SN查找公示时间
     * @param collegeUserSn
     * @return
     */
    PovertyOpenTime findOpenTimeByCollegeUser(String collegeUserSn);

    /**
     * 查找全部的学院的公示时间
     * @return
     */
    List<PovertyOpenTime> findOpenTimeAll();

    /**
     * 保存公示时间
     * @param povertyOpenTime
     */
    void saveOpenTime(PovertyOpenTime povertyOpenTime);


    /**
     * 修改公示时间
     * @param povertyOpenTime
     */
    void updateOpenTime(PovertyOpenTime povertyOpenTime);

    /**
     * 修改公示时间
     * @param povertyOpenTime
     */
    void updateOpenTimeByCollegeUser(PovertyOpenTime povertyOpenTime);

    /**
     * 开始（结束）学院公示
     * @param collegeId
     */
    void openTimeStart(@Param("collegeId") Long collegeId,@Param("status")Integer status);

}
