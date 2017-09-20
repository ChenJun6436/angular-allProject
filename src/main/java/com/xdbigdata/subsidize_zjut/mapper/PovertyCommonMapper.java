package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.para.UpdateStudentStatusDto;
import com.xdbigdata.subsidize_zjut.domain.HistoryResult;
import com.xdbigdata.subsidize_zjut.domain.Log;
import com.xdbigdata.subsidize_zjut.domain.Notice;
import com.xdbigdata.subsidize_zjut.domain.Reject;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 辅导员相关操作mapper
 * Created by staunch on 2017/3/29.
 */
@Mapper
@Component
public interface PovertyCommonMapper {

//    List<DynamicManagementDto> listDynamicManagement(@Param(value = "list") List<String> studentIds);


//    /**
//     * 根据流程实例ID查询学生和其的对应关系
//     * @param procInstIds
//     * @return
//     */
//    List<BetweenTableDto> listStudentIds(@Param(value = "list") List<String> procInstIds);


    /**
     * 更新学生状态
     * @param updateStudentStatusDto
     */
    @Update("update t_student_info set status = #{status} where student_id = #{studentId}")
    void setStudentStatus(UpdateStudentStatusDto updateStudentStatusDto);

    /**
     * 获取当前时间在那个阶段
     * @return
     */
     int getMaxStatus();

    @Insert("insert into t_log (content,date_time,type,user_name) values(#{content},#{dateTime},#{type},#{userName})")
    void saveLog(Log log);

    /**
     * 当前是否在申请阶段
     * @return
     */
    @Select("select count(*) from t_poverty_process where CURRENT_TIMESTAMP between apply_start and apply_end")
    Integer isApplyTime();


    Integer getStudentMaxStatus(@Param(value = "list") List<String> studentIds);

    /**
     * 查看学校公告
     * @return
     */
    List<Notice> listNotice(@Param(value = "noticeId") Integer noticeId);
//
//    /**
//     * 动态管理中修改学生困难等级
//     * @param dyModifyDto
//     */
//    @Update("update student_info set current_status = #{level} where student_id = #{studentId}")
//    void dyModifyPovertyLevel(DyModifyDto dyModifyDto);
//
    /**
     * 查看指定学生学号集合内某些状态的学生数量
     * @param list
     * @return
     */
    Integer getCountByStatus(@Param(value = "list") List<String> list, @Param(value = "status") List<Integer> status);
//
//
    @Insert("insert into t_reject (reason,reject_time,user_name) values(#{reason},#{rejectTime},#{userName})")
    void saveReject(Reject reject);
//
    @Select("select reason,reject_time as rejectTime from t_reject where user_name = #{userName} order by reject_time desc")
    List<Reject> getReject(@Param(value = "userName") String userName);

    @Select("select count(0) from t_poverty_process where CURRENT_DATE BETWEEN apply_start and apply_end LIMIT 1")
    boolean isPovertyTime();

    List<HistoryResult> lastYearApply(@Param("ids") List<String> ids);

    @Update("update t_student_info set last_status = #{level} where student_id = #{studentId}")
    void updateStudentLastStatus(@Param(value = "studentId") String studentId, @Param(value = "level") String level);
}
