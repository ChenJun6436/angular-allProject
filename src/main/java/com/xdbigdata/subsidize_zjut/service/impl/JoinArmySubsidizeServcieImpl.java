package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.SchoolYear;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.jwtService.domain.User;
import com.xdbigdata.subsidize_zjut.common.dto.JoinArmySubsidizeDto;
import com.xdbigdata.subsidize_zjut.common.dto.JoinArmySubsidizeExcelDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.JoinArmySubsidize;
import com.xdbigdata.subsidize_zjut.exception.BusinessException;
import com.xdbigdata.subsidize_zjut.mapper.JoinArmySubsidizeMapper;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import com.xdbigdata.subsidize_zjut.service.JoinArmySubsidizeService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sky on 2017/5/12.
 */
@Service
public class JoinArmySubsidizeServcieImpl implements JoinArmySubsidizeService {
    @Autowired
    private JoinArmySubsidizeMapper joinArmySubsidizeMapper;
    @Autowired
    private JWTRemoteService jwtRemoteService;

    @Override
    public int insert(JoinArmySubsidize joinArmySubsidize) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> sns = jwtRemoteService.findStudentSnsByUser(user);
        SchoolYear schoolYear = jwtRemoteService.findCurrentSchoolYear();
        if (schoolYear == null) {
            throw new BusinessException("用户管理系统无当前学年");
        }
        String sn = joinArmySubsidize.getStudentSn();
        Student student = jwtRemoteService.findStudentBySn(sn);
        if (student == null || !sns.contains(sn)) {
            throw new BusinessException("学生无效或不在您的管辖范围内，请确认后提交");
        }
        joinArmySubsidize.setSchoolYear(schoolYear.getName());
        joinArmySubsidize.setStudentName(student.getName());
        joinArmySubsidize.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null :
                student.getPrimaryTeachingInstitution().getName());
        joinArmySubsidize.setGradeName(student.getGrade().getName());
        joinArmySubsidize.setMajorName(student.getSecondaryTeachingInstitution() == null ? null :
                student.getSecondaryTeachingInstitution().getName());
        joinArmySubsidize.setClassName(student.getClasses() == null ? null : student.getClasses().getName());
        int num = joinArmySubsidizeMapper.insert(joinArmySubsidize);
        return num;
    }

    @Override
    public int insertBatch(List<JoinArmySubsidizeExcelDto> joinArmySubsidizeExcelDtos) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> sns = jwtRemoteService.findStudentSnsByUser(user);
        List<JoinArmySubsidize> joinArmySubsidizes = new ArrayList<>();
        SchoolYear schoolYear = jwtRemoteService.findCurrentSchoolYear();
        if (schoolYear == null) {
            throw new BusinessException("用户管理系统无当前学年");
        }
        for (JoinArmySubsidizeExcelDto joinArmySubsidizeExcelDto : joinArmySubsidizeExcelDtos) {
            String sn = joinArmySubsidizeExcelDto.getStudentSn();
            Student student = jwtRemoteService.findStudentBySn(sn);
            if (student == null || !sns.contains(sn)) {
                throw new BusinessException("学生无效或不在您的管辖范围内，请确认后提交");
            }
            JoinArmySubsidize joinArmySubsidize = new JoinArmySubsidize();
            joinArmySubsidize.setStudentSn(joinArmySubsidizeExcelDto.getStudentSn());
            joinArmySubsidize.setAmount(new BigDecimal(joinArmySubsidizeExcelDto.getAmount()));
            joinArmySubsidize.setReason(joinArmySubsidizeExcelDto.getReason());
            joinArmySubsidize.setSchoolYear(schoolYear.getName());
            joinArmySubsidize.setStudentName(student.getName());
            joinArmySubsidize.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null :
                    student.getPrimaryTeachingInstitution().getName());
            joinArmySubsidize.setGradeName(student.getGrade() == null ? null :
                    student.getGrade().getName());
            joinArmySubsidize.setMajorName(student.getSecondaryTeachingInstitution() == null ? null :
                    student.getSecondaryTeachingInstitution().getName());
            joinArmySubsidize.setClassName(student.getClasses() == null ? null :
                    student.getClasses().getName());
            joinArmySubsidizes.add(joinArmySubsidize);
        }
        int num = joinArmySubsidizeMapper.insertBatch(joinArmySubsidizes);
        return num;
    }

    @Override
    public List<JoinArmySubsidizeDto> findAllByUser(SessionUserDto sessionUserDto) {
        List<JoinArmySubsidizeDto> joinArmySubsidizeDtos = new ArrayList<>();
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<Student> students = null;
        try {
            students = jwtRemoteService.findStudentsByUser(user);
        } catch (Exception e) {
            e.printStackTrace();
            throw new BusinessException("用户管理系统异常");
        }
        List<String> studentSns = new ArrayList<>();
        for (Student student : students) {
            studentSns.add(student.getSn());
        }
        List<JoinArmySubsidize> joinArmySubsidizes = joinArmySubsidizeMapper.findAllSnsInList(studentSns);
        for (JoinArmySubsidize joinArmySubsidize : joinArmySubsidizes) {
            JoinArmySubsidizeDto joinArmySubsidizeDto = new JoinArmySubsidizeDto();
            joinArmySubsidizeDto.setId(joinArmySubsidize.getId());
            joinArmySubsidizeDto.setAmount(joinArmySubsidize.getAmount());
            joinArmySubsidizeDto.setHandleTime(joinArmySubsidize.getCreateTime());
            joinArmySubsidizeDto.setReason(joinArmySubsidize.getReason());
            joinArmySubsidizeDto.setStudentSn(joinArmySubsidize.getStudentSn());
            joinArmySubsidizeDto.setClassAndGrade(joinArmySubsidize.getGradeName() + "级" + joinArmySubsidize.getClassName());
            joinArmySubsidizeDto.setSpecialty(joinArmySubsidize.getMajorName());
            joinArmySubsidizeDto.setStudentName(joinArmySubsidize.getStudentName());
            joinArmySubsidizeDtos.add(joinArmySubsidizeDto);
        }
        return joinArmySubsidizeDtos;
    }

    @Override
    public void update(JoinArmySubsidize joinArmySubsidize) {
        int num = joinArmySubsidizeMapper.update(joinArmySubsidize);
        if (num <= 0) {
            throw new BusinessException("修改失败");
        }

    }

    @Override
    public void delete(Long id) {
        int num = joinArmySubsidizeMapper.delete(id);
        if (num <= 0) {
            throw new BusinessException("删除失败");
        }
    }

    @Override
    public void deleteBatch(List<Long> ids) {
        int num = joinArmySubsidizeMapper.deleteBatch(ids);
    }
}
