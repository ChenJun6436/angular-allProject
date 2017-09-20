package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.OpenTimeDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.ProcessDto;
import com.xdbigdata.subsidize_zjut.domain.*;

import java.util.List;
import java.util.Map;

/**
 * Created by staunch on 2017/4/11.
 */
public interface PovertyCommonService {
    /**
     * 获取学生基本信息
     *
     * @param studentId
     * @return
     */
    StudentInfo getStudentInfo(String studentId) throws Exception;

//    /**
//     * 获取某个学生对应的奖励
//     * @param studentId
//     * @return
//     */
//     List<StudentAward> listStudentAward(String studentId);
//
    /**
     * 获取某个学生的家庭成员
     * @param studentId
     * @return
     */
     List<StudentFamily> listStudentFamily(String studentId);
//    /**
//     * 获取某个学生处分情况
//     * @param studentId
//     * @return
//     */
//     List<StudentPunishment> listStudentPunishment(String studentId);
//
    /**
     * 获取某个学生受助情况
     * @param studentId
     * @return
     */
     List<StudentSubsidy> listStudentSubsidy(String studentId);
//
//    /**
//     * 获取当前用户动态管理的学生
//     * @return
//     */
//     List<DynamicManagementDto> listDynamicStudent(String sn)throws Exception;
//
    /**
     * 获取学生学号列表
     * @param students
     * @return
     */
    List<String> findStudentIds(List<Student> students,SessionUserDto sessionUserDto);
//
//    /**
//     * 根据任务获取该任务对应的流程实例ID
//     * @param tasks
//     * @return
//     */
//    //List<String> findProcInstIds(List<Task> tasks);
//
//    /**
//     * 将让任务和中间对象合并，为下面合并做准备
//     * @param tasks
//     * @param betweenTableDtos
//     * @return
//     */
//    //List<PovertyApplyDto> mergeTaskAndStudentId(List<Task> tasks, List<BetweenTableDto> betweenTableDtos);
//
//
//    /**
//     * 合并最终结果
//     * @param students
//     * @param povertyApplyDtos
//     * @return
//     */
//    //List<PovertyApplyDto> mergeLastResult(List<Student> students, List<PovertyApplyDto> povertyApplyDtos);
//
    /**
     * 根据用户名查询自己管理的学生
     * @param sn
     * @return
     * @throws Exception
     */
    List<Student> getStudentsBySn(String sn,SessionUserDto sessionUserDto) throws Exception;
//
    /**
     * 查看学生困难认定情况
     * @return
     * @throws Exception
     */
    List<PovertyApplyDto> listStudentPovertyApply(SessionUserDto sessionUserDto) throws Exception;
//
    /**
     * 是否有任务
     * @param sn
     * @return
     */
    Boolean hasTask(String sn);
//
    /**
     * 获取时间走到哪一步
     * @return
     */
    Map<String,Object> getMaxStatus(SessionUserDto sessionUserDto)throws Exception;
//
    /**
     * 新增日志操作记录
     * @param log
     */
    void saveLog(Log log);
//
    /**
     * 判断当前时间是否在申请阶段
     * @return
     */
    Boolean isApplyTime();
//
    /**
     * 下载困难认定名单
     * @return
     * @throws Exception
     */
    String downloadPovertyApply(SessionUserDto sessionUserDto) throws Exception;
//
//    /**
//     * 下载动态管理名单
//     * @return
//     * @throws Exception
//     */
//    String downloadDyManage() throws Exception;
//
    /**
     * 提交操作的公共方法
     * @param processDto
     * @throws Exception
     */
    void operateProcess(ProcessDto processDto,SessionUserDto sessionUserDto)throws Exception;
//
    /**
     * 获取学校公告
     * @return
     * @throws Exception
     */
    List<Notice> getNoticeList(Integer noticeId) throws Exception;
//
//    /**
//     * 动态管理中修改学生困难等级
//     * @param dyModifyDto
//     */
//    void dyModifyPovertyLevel(DyModifyDto dyModifyDto);
//
    /**
     * 获取驳回原因
     * @return
     */
    List<Reject> getReject();

    /**
     * 是否在困难认定期间
     * @return
     */
    boolean isPovertyTime();

    /**
     * 往年申请本次未申请
     * @return
     */
    List<HistoryResult> lastYearApply(SessionUserDto sessionUserDto) throws Exception;

    /**
     * 配置公示时间
     * @param openTimeDto
     * @param sessionUserDto
     * @throws Exception
     */
    void setOpenTime(OpenTimeDto openTimeDto, SessionUserDto sessionUserDto) throws Exception;

    OpenTimeDto getOpenTime(SessionUserDto sessionUserDto) throws Exception;

}
