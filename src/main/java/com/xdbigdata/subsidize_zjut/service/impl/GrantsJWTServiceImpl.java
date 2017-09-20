package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.*;
import com.xdbigdata.jwtService.service.*;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsGradeDto;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.util.GrantsJWTUtil;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/5/24.
 */
@Service
public class GrantsJWTServiceImpl implements IGrantsJWTService {

    @Autowired
    private GrantsJWTUtil grantsJWTUtil;

    @Autowired
    private JWTSchoolUserService jwtSchoolUserService;

    @Autowired
    private JWTCollegeUserService jwtCollegeUserService;

    @Autowired
    private JWTGradeService jwtGradeService;

    @Autowired
    private JWTSchoolYearService jwtSchoolYearService;

    @Autowired
    private JWTInstructorService jwtInstructorService;

    @Autowired
    private JWTSecondaryTeachingInstitutionService jwtSecondaryTeachingInstitutionService;

    @Autowired
    private JWTClassesService jwtClassesService;

    @Autowired
    private JWTStudentService jwtStudentService;

    @Autowired
    private JWTPrimaryTeachingInstitutionService jwtPrimaryTeachingInstitutionService;

    /**
     * 统计学校总人数
     *
     * @return
     * @throws Exception
     */
    @Override
    public Long countSchooolStudent() throws Exception {
        return Long.parseLong(jwtStudentService.findAllStudentNums());
    }

    /**
     * 获取学院用户
     *
     * @param sn
     * @return
     * @throws Exception
     */
    @Override
    public CollegeUser findCollegeUserBySn(String sn) throws Exception {
        String collegeJson = jwtCollegeUserService.find(sn);
        CollegeUser collegeUser = (CollegeUser) grantsJWTUtil.getOne(collegeJson, CollegeUser.class);
        return collegeUser;
    }

    /**
     * 获取所有学院
     *
     * @return
     * @throws Exception
     */
    @Override
    public List<GrantsConfigDto.Config> getAllColleges() throws Exception {
        String allCollegeJson = jwtPrimaryTeachingInstitutionService.findAll();
        List<GrantsConfigDto.Config> colleges = grantsJWTUtil.getList(allCollegeJson, GrantsConfigDto.Config.class);
        return colleges;
    }

    /**
     * 获取学院名
     *
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public String findCollegeNameById(Long id) throws Exception {
        String collegeJson = jwtPrimaryTeachingInstitutionService.find(id);
        PrimaryTeachingInstitution college = (PrimaryTeachingInstitution) grantsJWTUtil.getOne(collegeJson, PrimaryTeachingInstitution.class);
        return college == null ? null : college.getName();
    }

    /**
     * 查找学院用户的学院id
     *
     * @param sn
     * @return
     * @throws Exception
     */
    @Override
    public Long findCollegeIdBySn(String sn) throws Exception {
        String collegeJson = jwtCollegeUserService.find(sn);
        CollegeUser college = (CollegeUser) grantsJWTUtil.getOne(collegeJson, CollegeUser.class);
        return college == null ? null : college.getPrimaryTeachingInstitution().getId();
    }

    /**
     * 依据学院id查找学院下的所有年级信息
     *
     * @param collegeId
     * @return
     * @throws Exception
     */
    @Override
    public List<GrantsGradeDto> listGradesByCollegeId(Long collegeId) throws Exception {
        return grantsJWTUtil.getList(jwtGradeService.findGradesByPrimaryTeachingInstitution(collegeId), GrantsGradeDto.class);
    }

    /**
     * 依据学生Sn找到对应的学院用户
     *
     * @param studentSn
     * @return
     * @throws Exception
     */
    @Override
    public List<String> listAdvisorsSnsFromJWTByStudentSn(String studentSn) throws Exception {
        String jsonAdvisor = jwtStudentService.getInstructorByStudent(studentSn);
        List<String> advisorIds = new ArrayList<>();
        List<Instructor> advisors = grantsJWTUtil.getList(jsonAdvisor, Instructor.class);
        for (Instructor advisor : advisors) {
            advisorIds.add(advisor.getSn());
        }
        return advisorIds;
    }

    /**
     * 依据学生sn找到对应的年级辅导员职工号
     *
     * @param studentSn
     * @return
     * @throws Exception
     */
    @Override
    public List<String> listGradeAdvisorSnsFromJWTByStudentSn(String studentSn) throws Exception {
        /*String jsonAdvisor = jwtStudentService.getGradeInstructorByStudent(studentSn);*/
        String jsonAdvisor = jwtStudentService.getGradeInstructorByStudent(studentSn);
        List<String> advisorIds = new ArrayList<>();
        List<Instructor> advisors = grantsJWTUtil.getList(jsonAdvisor, Instructor.class);
        for (Instructor advisor : advisors) {
            advisorIds.add(advisor.getSn());
        }
        return advisorIds;
    }

    /**
     * 依据学生Sn找到对应的学院用户
     *
     * @param studentSn
     * @return
     * @throws Exception
     */
    @Override
    public List<String> listCollegeSnsFromJWTByStudentSn(String studentSn) throws Exception {
        List<String> collegeSns = new ArrayList<>();
        String jsonColleges = jwtStudentService.getCollegeByStudent(studentSn);
        List<CollegeUser> collegeUsers = grantsJWTUtil.getList(jsonColleges, CollegeUser.class);
        for (CollegeUser collegeUser : collegeUsers) {
            collegeSns.add(collegeUser.getSn());
        }
        return collegeSns;
    }

    /**
     * 依据学生Sn找到对应的学校用户
     *
     * @param studentSn
     * @return
     * @throws Exception
     */
    @Override
    public List<String> listSchoolSnsFromJWTByStudentSn(String studentSn) throws Exception {
        List<String> schoolSns = new ArrayList<>();
        String jsonSchools = jwtStudentService.getScoolUserByStudent(studentSn);
        List<SchoolUser> schoolUsers = grantsJWTUtil.getList(jsonSchools, SchoolUser.class);
        for (SchoolUser schoolUser : schoolUsers) {
            schoolSns.add(schoolUser.getSn());
        }
        return schoolSns;
    }

    /**
     * 获取学院用户id
     *
     * @param sn
     * @return
     */
    @Override
    public Long getCollegeIdBySn(String sn) throws Exception {
        String collegeJson = jwtCollegeUserService.find(sn);
        CollegeUser collegeUser = (CollegeUser) grantsJWTUtil.getOne(collegeJson, CollegeUser.class);
        return collegeJson == null ? null :
                (collegeUser.getPrimaryTeachingInstitution() == null ? null : collegeUser.getPrimaryTeachingInstitution().getId());
    }

    /**
     * 获取年级名
     *
     * @param gradeId
     * @return
     */
    @Override
    public String findGradeNameById(Long gradeId) throws Exception {
        return null;
    }

    /**
     * 获取班级名
     *
     * @param classessId
     * @return
     */
    @Override
    public String findClassesNameById(Long classessId) throws Exception {
        String classessJson = jwtClassesService.find(classessId);
        Classes classes = (Classes) grantsJWTUtil.getOne(classessJson, Classes.class);
        return classes == null ? null : classes.getName();
    }

    /**
     * 获取专业名
     *
     * @param majorId
     * @return
     * @throws Exception
     */
    @Override
    public String findMajorNameById(Long majorId) throws Exception {
        String majorJson = jwtSecondaryTeachingInstitutionService.find(majorId);
        SecondaryTeachingInstitution major = (SecondaryTeachingInstitution) grantsJWTUtil.getOne(majorJson, SecondaryTeachingInstitution.class);
        return major == null ? null : major.getName();
    }

    /**
     * 获取学年列表
     *
     * @return
     */
    @Override
    public List<SchoolYear> listAllSchoolYear() throws Exception {
        String allYearJson = jwtSchoolYearService.findAllUsed();
        List<SchoolYear> schoolYears = grantsJWTUtil.getList(allYearJson, SchoolYear.class);
        return schoolYears;
    }


    /**
     * 获取当前学年
     *
     * @return
     * @throws Exception
     */
    @Override
    public String getCurrentSchoolYear() throws Exception {
        String currentJson = jwtSchoolYearService.current();
        SchoolYear currentSchoolYear = (SchoolYear) grantsJWTUtil.getOne(currentJson, SchoolYear.class);
        return currentSchoolYear.getName();
    }

    /**
     * 获取指定学院下某年级下的学院和班级
     *
     * @return
     * @throws Exception
     */
    @Override
    public List<SecondaryDto> listGradeMajorsAndClassess(Map<String, Object> query) throws Exception {
        String dataJson = jwtClassesService.findByPrimaryAndGrade(query);
        List<SecondaryDto> secondaryDtos = grantsJWTUtil.getList(dataJson, SecondaryDto.class);
        return secondaryDtos;
    }

    /**
     * 查找学生姓名
     *
     * @param sn
     * @return
     * @throws Exception
     */
    @Override
    public Student findStudentBySn(String sn) throws Exception {
        String studentJson = jwtStudentService.find(sn);
        return (Student) grantsJWTUtil.getOne(studentJson, Student.class);
    }

    /**
     * 获取学院配置详情信息
     *
     * @param collegeId
     * @param gradeIds
     * @return
     * @throws Exception
     */
    @Override
    public List<GradeSecondaryDto> listClassMajorGradeCollegeInfo(Long collegeId, List<Long> gradeIds) throws Exception {
        Map<String, Object> query = new HashedMap();
        query.put("primaryTeachingInstitutionId", collegeId);
        query.put("gradeIds", gradeIds);
        String dataJson = jwtClassesService.findByPrimaryAndGradeIds(query);
        return grantsJWTUtil.getList(dataJson, GradeSecondaryDto.class);
    }

    /**
     * 获取上一学年
     *
     * @return
     */
    @Override
    public String findLastSchoolYear() throws Exception {
        String currentJson = jwtSchoolYearService.current();
        SchoolYear currentSchoolYear = (SchoolYear) grantsJWTUtil.getOne(currentJson, SchoolYear.class);
        String allYearJson = jwtSchoolYearService.findAllUsed();
        List<SchoolYear> schoolYears = grantsJWTUtil.getList(allYearJson, SchoolYear.class);
        int index = -1;
        for (int i = 0; i < schoolYears.size(); i++) {
            if (schoolYears.get(i).getName().equals(currentSchoolYear.getName())
                    && schoolYears.get(i).getId().equals(currentSchoolYear.getId())) {
                index = i;
                break;
            }
        }
        if (schoolYears.contains(currentSchoolYear)) {
            index = schoolYears.indexOf(currentSchoolYear);
        }
        if (index != -1) {
            return schoolYears.get(index - 1).getName();
        }
        return null;
    }

    /**
     * @param sn
     * @return
     */
    @Override
    public Instructor findInstructorBySn(String sn) throws Exception {
        String instructorJson = jwtInstructorService.find(sn);
        Instructor instructor = (Instructor) grantsJWTUtil.getOne(instructorJson, Instructor.class);
        return instructor;
    }

    /**
     * 查找辅导员管的学生学号
     *
     * @param sn
     * @return
     */
    @Override
    public List<String> listStudentSnsFromAdvisor(String sn) throws Exception {
        List<String> studentSns = new ArrayList<>();
        String studentListJson = jwtStudentService.findByInstructorUser(sn);
        List<Student> students = grantsJWTUtil.getList(studentListJson, Student.class);
        if (students != null && students.size() > 0) {
            for (Student student : students) {
                studentSns.add(student.getSn());
            }
        }
        return studentSns;
    }
}
