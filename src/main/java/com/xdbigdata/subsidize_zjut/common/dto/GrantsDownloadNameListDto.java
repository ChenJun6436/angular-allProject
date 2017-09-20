package com.xdbigdata.subsidize_zjut.common.dto;

import com.xdbigdata.subsidize_zjut.anno.ExcelAnno;
import lombok.Data;

/**
 * Created by Administrator on 2017/6/8.
 */
public class GrantsDownloadNameListDto {

    @ExcelAnno(head = "姓名")
    private String studentName;
    @ExcelAnno(head = "学号")
    private String sn;
    @ExcelAnno(head = "学院")
    private String college;
    @ExcelAnno(head = "困难认定结果")
    private String povertyLevel;
    @ExcelAnno(head = "上学年助学金评定等级")
    private String lastYearGrantsLevel;
    @ExcelAnno(head = "本学年已获助学金个数")
    private String currentGrantsNum;
    @ExcelAnno(head = "申请资助名称")
    private String applyGrantsName;
    @ExcelAnno(head = "辅导员审核")
    private String advisorResult;
    @ExcelAnno(head = "学院审核")
    private String collegeResult;
    @ExcelAnno(head = "学院公示")
    private String collegePublicityResult;
    @ExcelAnno(head = "学校审核")
    private String schoolResult;
    @ExcelAnno(head = "学校公示")
    private String schoolPublicityResult;
    @ExcelAnno(head = "认定结果")
    private String finalResult;

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getSn() {
        return sn;
    }

    public void setSn(String sn) {
        this.sn = sn;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getPovertyLevel() {
        return povertyLevel;
    }

    public void setPovertyLevel(String povertyLevel) {
        this.povertyLevel = povertyLevel;
    }

    public String getLastYearGrantsLevel() {
        return lastYearGrantsLevel;
    }

    public void setLastYearGrantsLevel(String lastYearGrantsLevel) {
        this.lastYearGrantsLevel = lastYearGrantsLevel;
    }

    public String getCurrentGrantsNum() {
        return currentGrantsNum;
    }

    public void setCurrentGrantsNum(String currentGrantsNum) {
        this.currentGrantsNum = currentGrantsNum;
    }

    public String getApplyGrantsName() {
        return applyGrantsName;
    }

    public void setApplyGrantsName(String applyGrantsName) {
        this.applyGrantsName = applyGrantsName;
    }

    public String getAdvisorResult() {
        return advisorResult == null ? "未进行" : advisorResult;
    }

    public void setAdvisorResult(String advisorResult) {
        this.advisorResult = advisorResult;
    }

    public String getCollegeResult() {
        return collegeResult == null ? "未进行" : collegeResult;
    }

    public void setCollegeResult(String collegeResult) {
        this.collegeResult = collegeResult;
    }

    public String getCollegePublicityResult() {
        return collegePublicityResult == null ? "未进行" : collegePublicityResult;
    }

    public void setCollegePublicityResult(String collegePublicityResult) {
        this.collegePublicityResult = collegePublicityResult;
    }

    public String getSchoolResult() {
        return schoolResult == null ? "未进行" : schoolResult;
    }

    public void setSchoolResult(String schoolResult) {
        this.schoolResult = schoolResult;
    }

    public String getSchoolPublicityResult() {
        return schoolPublicityResult == null ? "未进行" :schoolPublicityResult;
    }

    public void setSchoolPublicityResult(String schoolPublicityResult) {
        this.schoolPublicityResult = schoolPublicityResult;
    }

    public String getFinalResult() {
        return finalResult == null ? "未完成" : finalResult;
    }

    public void setFinalResult(String finalResult) {
        this.finalResult = finalResult;
    }
}
