package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.SchoolYear;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.jwtService.domain.User;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.TemporarySubsidizesDto;
import com.xdbigdata.subsidize_zjut.common.dto.TemporarySubsidizesExcelDto;
import com.xdbigdata.subsidize_zjut.domain.TemporarySubsidize;
import com.xdbigdata.subsidize_zjut.exception.BusinessException;
import com.xdbigdata.subsidize_zjut.mapper.TemporarySubsidizeMapper;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import com.xdbigdata.subsidize_zjut.service.TemporarySubsidizeService;
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
public class TemporarySubsidizeServiceImpl implements TemporarySubsidizeService {
    @Autowired
    private TemporarySubsidizeMapper temporarySubsidizeMapper;
    @Autowired
    private JWTRemoteService jwtRemoteService;

    @Override
    public int insert(TemporarySubsidize temporarySubsidize) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> sns = jwtRemoteService.findStudentSnsByUser(user);
        SchoolYear schoolYear = jwtRemoteService.findCurrentSchoolYear();
        if (schoolYear == null) {
            throw new BusinessException("用户管理系统中无当前学年");
        }
        String sn = temporarySubsidize.getStudentSn();
        Student student = jwtRemoteService.findStudentBySn(sn);
        if (student == null || !sns.contains(sn)) {
            throw new BusinessException("学生无效或不在您的管辖范围内，请确认后提交");
        }
        temporarySubsidize.setSchoolYear(schoolYear.getName());
        temporarySubsidize.setStudentName(student.getName());
        temporarySubsidize.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null :
                student.getPrimaryTeachingInstitution().getName());
        temporarySubsidize.setMajorName(student.getSecondaryTeachingInstitution() == null ? null :
                student.getSecondaryTeachingInstitution().getName());
        temporarySubsidize.setGradeName(student.getGrade() == null ? null : student.getGrade().getName());
        temporarySubsidize.setClassName(student.getClasses() == null ? null : student.getClasses().getName());
        int num = temporarySubsidizeMapper.insert(temporarySubsidize);
        return num;
    }

    @Override
    public int insertBatch(List<TemporarySubsidizesExcelDto> temporarySubsidizesExcelDtos) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        User user = new User();
        user.setType(sessionUserDto.getUserType());
        user.setSn(sessionUserDto.getUserName());
        List<String> sns = jwtRemoteService.findStudentSnsByUser(user);
        SchoolYear schoolYear = jwtRemoteService.findCurrentSchoolYear();
        if(schoolYear == null) {
            throw new BusinessException("用户管理系统中无当前学年");
        }
        List<TemporarySubsidize> temporarySubsidizes = new ArrayList<>();
        for(TemporarySubsidizesExcelDto temporarySubsidizesExcelDto : temporarySubsidizesExcelDtos){
            String sn = temporarySubsidizesExcelDto.getStudentSn();
            Student student = jwtRemoteService.findStudentBySn(sn);
            if(student == null || !sns.contains(sn)) {
                throw new BusinessException("导入的名单存在无效或不在您管辖范围内的学生，请确认后再进行提交");
            }
            TemporarySubsidize temporarySubsidize = new TemporarySubsidize();
            temporarySubsidize.setStudentSn(temporarySubsidizesExcelDto.getStudentSn());
            temporarySubsidize.setAmount(new BigDecimal(temporarySubsidizesExcelDto.getAmount()));
            temporarySubsidize.setReason(temporarySubsidizesExcelDto.getReason());
            temporarySubsidize.setSchoolYear(schoolYear.getName());
            temporarySubsidize.setStudentName(student.getName());
            temporarySubsidize.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null :
                    student.getPrimaryTeachingInstitution().getName());
            temporarySubsidize.setMajorName(student.getSecondaryTeachingInstitution() == null ? null :
                    student.getSecondaryTeachingInstitution().getName());
            temporarySubsidize.setGradeName(student.getGrade() == null ? null : student.getGrade().getName());
            temporarySubsidize.setClassName(student.getClasses() == null ? null : student.getClasses().getName());
            temporarySubsidizes.add(temporarySubsidize);
        }
        int num = temporarySubsidizeMapper.insertBatch(temporarySubsidizes);
        return num;
    }

    @Override
    public List<TemporarySubsidizesDto> findAllByUser(SessionUserDto sessionUserDto) {
        List<TemporarySubsidizesDto> temporarySubsidizesDtos = new ArrayList<>();
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
        List<TemporarySubsidize> temporarySubsidizes = temporarySubsidizeMapper.findAllSnsInList(studentSns);
        for (TemporarySubsidize temporarySubsidize : temporarySubsidizes) {
            TemporarySubsidizesDto temporarySubsidizesDto = new TemporarySubsidizesDto();
            temporarySubsidizesDto.setId(temporarySubsidize.getId());
            temporarySubsidizesDto.setAmount(temporarySubsidize.getAmount());
            temporarySubsidizesDto.setHandleTime(temporarySubsidize.getUpdateTime());
            temporarySubsidizesDto.setReason(temporarySubsidize.getReason());
            temporarySubsidizesDto.setStudentSn(temporarySubsidize.getStudentSn());
            temporarySubsidizesDto.setClassAndGrade(temporarySubsidize.getGradeName() + "级" + temporarySubsidize.getClassName());
            temporarySubsidizesDto.setSpecialty(temporarySubsidize.getMajorName());
            temporarySubsidizesDto.setStudentName(temporarySubsidize.getStudentName());
            temporarySubsidizesDtos.add(temporarySubsidizesDto);
        }
        return temporarySubsidizesDtos;
    }

    @Override
    public void update(TemporarySubsidize temporarySubsidize) {
        int num = temporarySubsidizeMapper.update(temporarySubsidize);
        if (num <= 0) {
            throw new BusinessException("修改失败");
        }
    }

    @Override
    public void delete(Long id) {
        int num = temporarySubsidizeMapper.delete(id);
        if (num <= 0) {
            throw new BusinessException("删除失败");
        }
    }

    @Override
    public void deleteBatch(List<Long> ids) {
        int num = temporarySubsidizeMapper.deleteBatch(ids);
    }
}
