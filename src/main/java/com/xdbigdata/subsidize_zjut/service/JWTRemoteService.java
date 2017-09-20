package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.jwtService.domain.*;

import java.util.List;

/**
 * Created by sky on 2017/5/11.
 */
public interface JWTRemoteService {
    /**
     * 获取用户下的学生列表
     * @param user
     * @return
     */
    public List<Student> findStudentsByUser(User user) throws Exception;

    /**
     * 获取用户下的学生学号列表
     * @param user
     * @return
     */
    public List<String> findStudentSnsByUser(User user) throws Exception;

    /**
     * 查询用户所在学院，如果是学校用户就查询所有学院
     * @return
     */
    public List<PrimaryTeachingInstitution> findCollegeByUser(User user) throws Exception;

    /**
     * 查询所有年级
     * @return
     */
    public List<Grade> findAllGrade() throws Exception;

    /**
     * 查询特定学院下的专业列表
     * @param primaryTeachingInstitutionId
     * @return
     */
    public List<SecondaryTeachingInstitution> findMajorsByCollege(Long primaryTeachingInstitutionId) throws Exception;

    /**
     * 查询特定专业下的年级列表
     * @param secondaryTeachingInstitutionId
     * @return
     */
    public List<Grade> findGradesByMajor(Long secondaryTeachingInstitutionId) throws Exception;

    /**
     * 查询特定专业和年级下的班级列表
     * @param gradeId
     * @param secondaryTeachingInstitutionId
     * @return
     */
    public List<Classes> findClassesByGradeAndMajor(Long secondaryTeachingInstitutionId, Long gradeId) throws Exception;

    /**
     * 获取特定学院下的年级列表
     * @param primaryTeachingInstitutionId
     * @return
     */
    public List<Grade> findGradesByCollege(Long primaryTeachingInstitutionId) throws Exception;

    /**
     * 获取所有学年
     * @return
     */
    public List<SchoolYear> findAllSchoolYear() throws Exception;

    /**
     * 获取当前学年
     * @return
     */
    public SchoolYear findCurrentSchoolYear() throws Exception;

    /**
     * 根据学生学号获取学生实体
     * @param studentSn
     * @return
     */
    public Student findStudentBySn(String studentSn) throws Exception;
}
