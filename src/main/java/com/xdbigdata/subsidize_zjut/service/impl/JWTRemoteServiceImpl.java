package com.xdbigdata.subsidize_zjut.service.impl;

import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import com.xdbigdata.jwtService.domain.*;
import com.xdbigdata.jwtService.service.*;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import com.xdbigdata.subsidize_zjut.util.GsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by sky on 2017/5/11.
 */
@Service
public class JWTRemoteServiceImpl implements JWTRemoteService {
    @Autowired
    private JWTStudentService jwtStudentService;
    @Autowired
    private JWTPrimaryTeachingInstitutionService jwtPrimaryTeachingInstitutionService;
    @Autowired
    private JWTGradeService gradeService;
    @Autowired
    private JWTCollegeUserService jwtCollegeUserService;
    @Autowired
    private JWTInstructorService jwtInstructorService;
    @Autowired
    private JWTGradeService jwtGradeService;
    @Autowired
    private JWTSecondaryTeachingInstitutionService jwtSecondaryTeachingInstitutionService;
    @Autowired
    private JWTClassesService jwtClassesService;
    @Autowired
    private JWTSchoolYearService jwtSchoolYearService;

    @Override
    public List<Student> findStudentsByUser(User user) throws Exception {
        //获取用户类型
        Integer userType = user.getType();
        //获取userSN
        String userSN = user.getSn();
        List<Student> students = new ArrayList<>();
        Gson gson = GsonUtil.createGsonOfDateIsLong();
        String jsonArrayStr = null;
        if(userType == 1){//学校用户
            jsonArrayStr = jwtStudentService.findAll();
        }else if(userType == 2){//学院用户
            jsonArrayStr = jwtStudentService.findByCollegeUser(userSN);
        }else if(userType == 3){//辅导员用户
            jsonArrayStr = jwtStudentService.findByInstructorUser(userSN);
        }else if(userType == 4){//学生用户
            Student student = new Student();
            student.setSn(userSN);
            student.setUserType(userType);
            students.add(student);
            return students;
        }
        if(jsonArrayStr != null&&!jsonArrayStr.trim().equals("")&&!jsonArrayStr.equals("null")){
            students = gson.fromJson(jsonArrayStr,new TypeToken<List<Student>>(){}.getType());
        }
        return students;
    }

    @Override
    public List<String> findStudentSnsByUser(User user) throws Exception {
        List<String> sns = new ArrayList<>();
        List<Student> students = findStudentsByUser(user);
        if (students != null) {
            for (Student student : students) {
                sns.add(student.getSn());
            }
        }
        return sns;
    }

    @Override
    public List<PrimaryTeachingInstitution> findCollegeByUser(User user) throws Exception {
        List<PrimaryTeachingInstitution> primaryTeachingInstitutions = new ArrayList<>();
        Gson gson = GsonUtil.createGsonOfDateIsLong();
        JsonParser jsonParser = new JsonParser();
        if(user.getType() == 1){
            String str = jwtPrimaryTeachingInstitutionService.findAll();
            if(str != null){
                JsonElement jsonElement = jsonParser.parse(str);
                if(jsonElement.isJsonArray()){
                    JsonArray jsonArray = jsonElement.getAsJsonArray();
                    Iterator<JsonElement> iterator = jsonArray.iterator();
                    while(iterator.hasNext()){
                        JsonElement jsonElement1 = iterator.next();
                        if(jsonElement1.isJsonObject()){
                            JsonObject jsonObject = jsonElement1.getAsJsonObject();
                            PrimaryTeachingInstitution primaryTeachingInstitution =  gson.fromJson(jsonObject, PrimaryTeachingInstitution.class);
                            if(primaryTeachingInstitution != null){
                                primaryTeachingInstitutions.add(primaryTeachingInstitution);
                            }
                        }
                    }
                }
            }
        }else if(user.getType() == 2){
            String str = jwtCollegeUserService.find(user.getSn());
            if(str != null){
                JsonElement jsonElement = jsonParser.parse(str);
                if(jsonElement.isJsonObject()){
                    JsonObject jsonObject = jsonElement.getAsJsonObject();
                    CollegeUser collegeUser = gson.fromJson(jsonObject, CollegeUser.class);
                    PrimaryTeachingInstitution primaryTeachingInstitution = collegeUser.getPrimaryTeachingInstitution();
                    if(primaryTeachingInstitution != null){
                        primaryTeachingInstitutions.add(primaryTeachingInstitution);
                    }
                }
            }
        }else if(user.getType() == 3){
            String str = jwtInstructorService.find(user.getSn());
            if(str != null){
                JsonElement jsonElement = jsonParser.parse(str);
                if(jsonElement.isJsonObject()){
                    JsonObject jsonObject = jsonElement.getAsJsonObject();
                    CollegeUser collegeUser = gson.fromJson(jsonObject, CollegeUser.class);
                    PrimaryTeachingInstitution primaryTeachingInstitution = collegeUser.getPrimaryTeachingInstitution();
                    if(primaryTeachingInstitution != null){
                        primaryTeachingInstitutions.add(primaryTeachingInstitution);
                    }
                }
            }
        }else if(user.getType() == 4) {
            String str = jwtStudentService.find(user.getSn());
            if(str != null && !str.equals("")) {
                Student student = gson.fromJson(str, Student.class);
                PrimaryTeachingInstitution primaryTeachingInstitution = student.getPrimaryTeachingInstitution();
                primaryTeachingInstitutions.add(primaryTeachingInstitution);
            }
        }
        return primaryTeachingInstitutions;
    }

    @Override
    public List<Grade> findAllGrade() throws Exception {
        List<Grade> grades = new ArrayList<>();
        String gradeJsonStr = jwtGradeService.findAll();
        if(gradeJsonStr != null && !gradeJsonStr.equals("")){
            Gson gson = GsonUtil.createGsonOfDateIsLong();
            grades = gson.fromJson(gradeJsonStr, new TypeToken<List<Grade>>(){}.getType());
        }
        return grades;
    }

    @Override
    public List<SecondaryTeachingInstitution> findMajorsByCollege(Long primaryTeachingInstitutionId) throws Exception {
        String majorsJsonStr = jwtSecondaryTeachingInstitutionService.findByPage(primaryTeachingInstitutionId);
        List<SecondaryTeachingInstitution> majors = new ArrayList<>();
        if(majorsJsonStr != null && !majorsJsonStr.equals("")) {
            Gson gson = GsonUtil.createGsonOfDateIsLong();
            majors = gson.fromJson(majorsJsonStr, new TypeToken<List<SecondaryTeachingInstitution>>(){}.getType());
        }
        return majors;
    }

    @Override
    public List<Grade> findGradesByMajor(Long secondaryTeachingInstitutionId) throws Exception {
        String gradesJsonStr = jwtGradeService.findByPage(secondaryTeachingInstitutionId);
        List<Grade> grades = new ArrayList<>();
        if(gradesJsonStr != null && !gradesJsonStr.equals("")) {
            Gson gson = GsonUtil.createGsonOfDateIsLong();
            grades = gson.fromJson(gradesJsonStr, new TypeToken<List<Grade>>(){}.getType());
        }
        return grades;
    }

    @Override
    public List<Classes> findClassesByGradeAndMajor(Long secondaryTeachingInstitutionId, Long gradeId) throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("gradeId", gradeId);
        map.put("secondaryTeachingInstitutionId", secondaryTeachingInstitutionId);
        String classesJsonStr = jwtClassesService.findByGrdeAndSecondaryTeachingInstitution(map);
        List<Classes> classesList = new ArrayList<>();
        if(classesJsonStr != null && !classesJsonStr.equals("")) {
            Gson gson = GsonUtil.createGsonOfDateIsLong();
            classesList = gson.fromJson(classesJsonStr, new TypeToken<List<Classes>>(){}.getType());
        }
        return classesList;
    }

    @Override
    public List<Grade> findGradesByCollege(Long primaryTeachingInstitutionId) throws Exception {
        String gradesJsonStr = jwtGradeService.findGradesByPrimaryTeachingInstitution(primaryTeachingInstitutionId);
        List<Grade> grades = new ArrayList<>();
        if(gradesJsonStr != null && !gradesJsonStr.equals("")) {
            Gson gson = GsonUtil.createGsonOfDateIsLong();
            grades = gson.fromJson(gradesJsonStr, new TypeToken<List<Grade>>(){}.getType());
        }
        return grades;
    }

    @Override
    public List<SchoolYear> findAllSchoolYear() throws Exception {
        String shcoolYearJsonStr = jwtSchoolYearService.findAllUsed();
        List<SchoolYear> schoolYears = new ArrayList<>();
        if(shcoolYearJsonStr != null && !shcoolYearJsonStr.equals("")) {
            Gson gson = GsonUtil.createGsonOfDateIsLong();
            schoolYears = gson.fromJson(shcoolYearJsonStr, new TypeToken<List<SchoolYear>>(){}.getType());
        }
        return schoolYears;
    }

    @Override
    public SchoolYear findCurrentSchoolYear() throws Exception {
        String currentSchoolYearStr = jwtSchoolYearService.current();
        if(currentSchoolYearStr != null && !currentSchoolYearStr.equals("")){
            Gson gson = GsonUtil.createGsonOfDateIsLong();
            SchoolYear schoolYear = gson.fromJson(currentSchoolYearStr, SchoolYear.class);
            return schoolYear;
        }
        return null;
    }

    @Override
    public Student findStudentBySn(String studentSn) throws Exception {
        String str = jwtStudentService.find(studentSn);
        if(str != null && !str.equals("")) {
            Gson gson = GsonUtil.createGsonOfDateIsLong();
            Student student = gson.fromJson(str, Student.class);
            return student;
        }
        return null;
    }

}
