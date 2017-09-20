package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.jwtService.domain.*;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsGradeDto;
import com.xdbigdata.subsidize_zjut.domain.GrantsDissent;

import java.util.List;
import java.util.Map;

/**
 * 助学金JWT Service
 * Created by Administrator on 2017/5/24.
 */
public interface IGrantsJWTService {

    /**
     * 统计学校总人数
     * @return
     * @throws Exception
     */
    Long countSchooolStudent() throws Exception;

    /**
     * 获取学院用户
     * @return
     * @throws Exception
     */
    CollegeUser findCollegeUserBySn(String sn) throws Exception;

    /**
     * 获取所有学院
     * @return
     * @throws Exception
     */
    List<GrantsConfigDto.Config> getAllColleges() throws Exception;

    /**
     * 获取学院名，通过学院id
     * @param id
     * @return
     * @throws Exception
     */
    String findCollegeNameById(Long id) throws Exception;

//    /**
//     * 获取学院名，通过用户
//     * @param sn
//     * @return
//     * @throws Exception
//     */
//    String findCollegeNameBySn(String sn) throws Exception;

    /**
     * 查找学院用户的学院id
     * @param sn
     * @return
     * @throws Exception
     */
    Long findCollegeIdBySn(String sn) throws Exception;

    /**
     * 依据学院id查找学院下的所有年级信息
     *
     * @param collegeId
     * @return
     * @throws Exception
     */
    List<GrantsGradeDto> listGradesByCollegeId(Long collegeId) throws Exception;


    /**
     * 依据学生Sn找到对应的辅导员用户
     * @param studentSn
     * @return
     * @throws Exception
     */
    List<String> listAdvisorsSnsFromJWTByStudentSn(String studentSn) throws Exception;

    /**
     * 依据学生sn找到对应的年级辅导员职工号
     * @param studnetSn
     * @return
     * @throws Exception
     */
    List<String> listGradeAdvisorSnsFromJWTByStudentSn(String studnetSn) throws Exception;

    /**
     * 依据学生Sn找到对应的学院用户
     * @param studentSn
     * @return
     * @throws Exception
     */
    List<String> listCollegeSnsFromJWTByStudentSn(String studentSn) throws Exception;

    /**
     * 依据学生Sn找到对应的学校用户
     * @param studentSn
     * @return
     * @throws Exception
     */
    List<String> listSchoolSnsFromJWTByStudentSn(String studentSn)throws Exception;


    /**
     * 获取学院用户id
     * @param sn
     * @return
     */
    Long getCollegeIdBySn(String sn) throws Exception;

    /**
     * 获取年级名
     * @param gradeId
     * @return
     */
    String findGradeNameById(Long gradeId) throws Exception;

    /**
     * 获取班级名
     * @param classessId
     * @return
     */
    String findClassesNameById(Long classessId) throws Exception;

    /**
     * 获取专业名
     * @param majorId
     * @return
     * @throws Exception
     */
    String findMajorNameById(Long majorId) throws Exception;

    /**
     * 获取学年列表
     * @return
     */
    List<SchoolYear> listAllSchoolYear() throws Exception;

    /**
     * 获取当前学年
     * @return
     * @throws Exception
     */
    String getCurrentSchoolYear() throws Exception;

    /**
     * 获取指定学院下某年级下的学院和班级
     * @return
     * @throws Exception
     */
    List<SecondaryDto> listGradeMajorsAndClassess(Map<String,Object> query) throws Exception;


    /**
     * 查找学生姓名
     * @param sn
     * @return
     * @throws Exception
     */
    Student findStudentBySn(String sn) throws Exception;

    /**
     * 获取学院配置详情信息
     * @param collegeId
     * @param gradeIds
     * @return
     * @throws Exception
     */
    List<GradeSecondaryDto> listClassMajorGradeCollegeInfo(Long collegeId,List<Long> gradeIds) throws Exception;


    /**
     * 获取上一学年
     * @return
     */
    String findLastSchoolYear() throws Exception;

    /**
     * 查找辅导员
     * @param sn
     * @return
     */
    Instructor findInstructorBySn(String sn) throws Exception;

    /**
     * 查找辅导员管的学生学号
     * @return
     */
    List<String> listStudentSnsFromAdvisor(String sn) throws Exception;
}
