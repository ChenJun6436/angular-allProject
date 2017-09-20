package com.xdbigdata.subsidize_zjut.service.impl;

import com.google.gson.reflect.TypeToken;
import com.xdbigdata.jwtService.domain.*;
import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.AllowanceApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.ApplyListDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.FiveClassDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.UpdateCheckResultDto;
import com.xdbigdata.subsidize_zjut.domain.AllowanceApply;
import com.xdbigdata.subsidize_zjut.domain.AllowanceConfig;
import com.xdbigdata.subsidize_zjut.mapper.AllowanceMapper;
import com.xdbigdata.subsidize_zjut.service.IAllowanceServicce;
import com.xdbigdata.subsidize_zjut.util.GsonUtil;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by jinmingjiang on 2017/6/6.
 */
@Service
public class AllowanceServicceImpl implements IAllowanceServicce {

    @Autowired
    AllowanceMapper allowanceMapper;

    @Autowired
    JWTStudentService jwtStudentService;

    @Override
    public AllowanceConfig getAllowanceConfig() throws Exception {
        AllowanceConfig allowanceConfig = allowanceMapper.getAllowanceConfig();
        return allowanceConfig;
    }

    @Override
    public void saveAllowanceConfig(AllowanceConfig allowanceConfig) throws Exception {
        if(allowanceConfig.getId() == null){
            allowanceMapper.insertAllowanceConfig(allowanceConfig);
        }else{
            allowanceMapper.updateAllowanceConfig(allowanceConfig);
        }
    }

    @Override
    public void AllowanceApply(AllowanceApplyDto allowanceApplyDto, SessionUserDto sessionUserDto) throws Exception {
        String sn = sessionUserDto.getUserName();
        int count = allowanceMapper.findAllowanceApplyBySn(sn);
        AllowanceConfig config = allowanceMapper.getAllowanceConfig();
        if(config == null){
            throw new Exception("配置未开启");
        }
        long startTime = config.getStartTime().getTime();
        long endTime = config.getEndTime().getTime();
        long nowTime = new Date().getTime();
        if(startTime>nowTime){
            throw new Exception("未开始");
        }
        if(nowTime>endTime){
            throw new Exception("已结束");
        }
        if(count > 0){
            throw new Exception("请勿重复申请");
        }
        String s = jwtStudentService.find(sn);
        Student student = GsonUtil.getGson().fromJson(s, Student.class);
        PrimaryTeachingInstitution college = student.getPrimaryTeachingInstitution();
        SecondaryTeachingInstitution major = student.getSecondaryTeachingInstitution();
        Grade grade = student.getGrade();
        Classes classes = student.getClasses();

        AllowanceApply allowanceApply = new AllowanceApply();
        allowanceApply.setBankNum(allowanceApplyDto.getBankNum());
        allowanceApply.setHasDeputy(allowanceApplyDto.getHasDeputy());
        allowanceApply.setDeputyBankNum(allowanceApplyDto.getDeputyBankNum());
        allowanceApply.setDeputySn(allowanceApplyDto.getDeputySn());
        allowanceApply.setReason(allowanceApplyDto.getReason());
        allowanceApply.setStudentId(sn);
        allowanceApply.setApplyTime(new Date());
        allowanceApply.setStep(0);
        allowanceApply.setYear(config.getYear());
        allowanceApply.setYearId(config.getYearId());
        allowanceApply.setMoney(config.getMoney());
        allowanceApply.setInstructorPass(1);
        allowanceApply.setCollegePass(1);
        allowanceApply.setSchoolPass(1);
        allowanceApply.setCollegeName(college==null? "":college.getName());
        allowanceApply.setMajorName(major==null? "":major.getName());
        allowanceApply.setGradeName(grade==null? "":grade.getName());
        allowanceApply.setClassName(classes==null? "":classes.getName());
        allowanceMapper.insertAllowanceApply(allowanceApply);
    }

    @Override
    public List<ApplyListDto> getAllowanceApplyList(SessionUserDto sessionUserDto,boolean checked) throws Exception {
//        PageHelper.startPage(pageDto.getPageNumber(),pageDto.getPageSize());
        Integer userType = sessionUserDto.getUserType();
        List<String> snList = new ArrayList<>();
        List<Student> students = findManagerStudent(sessionUserDto);
        Map<String,Map<String,String>> studentMap = new HashedMap();
        for (Student student : students) {
            Map<String,String> stu = new HashedMap();
            stu.put("name",student.getName());
            snList.add(student.getSn());
            PrimaryTeachingInstitution primaryTeachingInstitution = student.getPrimaryTeachingInstitution();
            stu.put("college",primaryTeachingInstitution==null? "":primaryTeachingInstitution.getName());
            studentMap.put(student.getSn(),stu);
        }
        Integer step = null;
        if(userType == 3){
            step = 0;
        }else if(userType == 2){
            step = 1;
        }else if(userType ==1){
            step = 2;
            snList = null;
        }
        if(checked){
            step++;
        }
        List<ApplyListDto> allowanceApplyList = allowanceMapper.getAllowanceApplyList(snList,step,checked);
//        if(checked && userType==1){
//
//        }
        for (ApplyListDto applyListDto : allowanceApplyList) {
            String sn = applyListDto.getStudentId();
            if(studentMap.containsKey(sn)){
                applyListDto.setCollege(studentMap.get(sn).get("college"));
                applyListDto.setName(studentMap.get(sn).get("name"));
            }
        }
        return allowanceApplyList;
    }

    @Override
    public void submitNextCheck(SessionUserDto sessionUserDto) throws Exception {
        Integer userType = sessionUserDto.getUserType();
        List<Student> managerStudent = findManagerStudent(sessionUserDto);
        List<String> snList = new ArrayList<>();
        for (Student student : managerStudent) {
            snList.add(student.getSn());
        }
        if(snList.size()==0){
            throw new Exception("没有学生数据");
        }
        if(userType == 1){
            allowanceMapper.batchUpdateStep(snList,3);
            List<AllowanceApply> allowanceApplies = allowanceMapper.getAllowanceApplyListBySn(snList);
            // 插入历史
            allowanceMapper.insertAllowanceHistory(allowanceApplies);
            // 删除完成的流程
            allowanceMapper.deleteAllowanceApply(allowanceApplies);
        }else if(userType == 2){
            allowanceMapper.batchUpdateStep(snList,2);
        }else if(userType == 3){
            allowanceMapper.batchUpdateStep(snList,1);
        }
    }

    @Override
    public void updateCheckResult(UpdateCheckResultDto updateCheckResultDto,SessionUserDto sessionUserDto) throws Exception {
        Integer userType = sessionUserDto.getUserType();
        if(userType == 1){
            updateCheckResultDto.setStep(3);
        }else if(userType==2){
            updateCheckResultDto.setStep(2);
        }else if(userType==3){
            updateCheckResultDto.setStep(1);
        }
        allowanceMapper.updateCheckResult(updateCheckResultDto);
    }

    @Override
    public boolean isFiveClass(SessionUserDto sessionUserDto) throws Exception {
        String userName = sessionUserDto.getUserName();
        FiveClassDto studentInfo = allowanceMapper.getStudentInfo(userName);
        if(studentInfo == null){
            return false;
        }
        return true;
    }

    private List<Student> findManagerStudent(SessionUserDto sessionUserDto) throws Exception {
        Integer userType = sessionUserDto.getUserType();
        String userName = sessionUserDto.getUserName();
        List<Student> students;
        String resultJson = null;
        if(userType ==1 ){
            resultJson = jwtStudentService.findAll();
        } else if(userType == 2){
            resultJson = jwtStudentService.findByCollegeUser(userName);
        }else if(userType == 3){
            resultJson = jwtStudentService.findByInstructorUser(userName);
        }
        students = GsonUtil.getGson().fromJson(resultJson, new TypeToken<List<Student>>(){}.getType());
        return students;
    }

}
