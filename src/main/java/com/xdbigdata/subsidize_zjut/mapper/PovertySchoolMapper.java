package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.para.OpenTimeDto;
import com.xdbigdata.subsidize_zjut.domain.*;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * 辅导员相关操作mapper
 * Created by staunch on 2017/3/29.
 */
@Mapper
public interface PovertySchoolMapper {


    Integer saveNotice(Notice notice);

    void saveProcess(PovertyProcess povertyProcess);

    PovertyProcess getProcessTime();

    void updateOpenTime(OpenTimeDto openTimeDto);

    @Select("select count(*) from t_poverty_process where  CURRENT_TIMESTAMP BETWEEN apply_start AND apply_end")
    int validateProcess();

    @Update("update t_poverty_attachment set notice_id=#{noticeId} where student_id = #{userName}")
    void updateNoticeAttachment(@Param(value = "userName") String userName, @Param(value = "noticeId") Integer noticeId);

    /**
     * 获取没有发布公告前的附件列表
     * @return
     */
    @Select("select id,`name`,url from t_poverty_attachment where student_id=#{userName} and notice_id = 0")
    List<PovertyAttachment> listNoticeFiles(@Param(value = "userName") String userName);

    /**
     * 学校删除公告
     * @param id
     */
    @Delete("delete from t_notice where id = #{id};delete from t_poverty_attachment where notice_id = #{id}")
    void removeNotice(@Param(value = "id") Integer id);

    /**
     * 查看操作记录
     * @param type
     * @return
     */
    @Select("select content,date_time as dateTime,type,user_name as userName from t_log where type = #{type}")
    List<Log> viewOperateLog(@Param(value = "type") Integer type);

    /**
     * 批量插入贫困认定历史记录
     * @param historyResults
     */
    void batchInsertHistoryResult(@Param(value = "list") List<HistoryResult> historyResults);

    @Delete("delete from t_poverty_process")
    void startProcess();

    /**
     * 查看历史评定
     * @return
     */
    List<HistoryResult> viewHistoryApply();

    void clearTable();

    @Update("update t_student_info set status = 0")
    void resetStudentStatus();

    @Update("update t_poverty_process set school_open_started=#{status}")
    void openTimeStart(Integer status);
}
