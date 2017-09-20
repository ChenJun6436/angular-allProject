package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.SchoolYear;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.jwtService.domain.User;
import com.xdbigdata.subsidize_zjut.common.constant.ConstantEnum;
import com.xdbigdata.subsidize_zjut.common.dto.LoanExcelResultDto;
import com.xdbigdata.subsidize_zjut.common.dto.LoanRecordDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.StudentLoanTimesDto;
import com.xdbigdata.subsidize_zjut.domain.Loan;
import com.xdbigdata.subsidize_zjut.domain.LoanRecord;
import com.xdbigdata.subsidize_zjut.exception.BusinessException;
import com.xdbigdata.subsidize_zjut.mapper.LoanMapper;
import com.xdbigdata.subsidize_zjut.mapper.LoanRecordMapper;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import com.xdbigdata.subsidize_zjut.service.LoanService;
import com.xdbigdata.subsidize_zjut.util.ExcelUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by sky on 2017/5/10.
 */
@Service
public class LoanServiceImpl implements LoanService {
    @Autowired
    private LoanRecordMapper loanRecordMapper;
    @Autowired
    private LoanMapper loanMapper;
    @Autowired
    private JWTRemoteService jwtRemoteService;

    @Override
    public boolean applyLoan(LoanRecord loanRecord) {
        Date now = new Date();
        Loan loan = loanMapper.findById(Long.parseLong(loanRecord.getLoanId()));
        if (loan == null) {
            //该贷款项不存在
            throw new BusinessException("该贷款项不存在");
        } else {
            Date startTime = loan.getStartTime();
            Date endTime = loan.getEndTime();
            if (startTime.getTime() > now.getTime() || endTime.getTime() < now.getTime()) {
                //该贷款项已停止申请
                throw new BusinessException("该贷款项已停止申请");
            } else {
                Student student = null;
                try {
                    student = jwtRemoteService.findStudentBySn(loanRecord.getStudentSn());
                } catch (Exception e) {
                    e.printStackTrace();
                    throw new BusinessException("用户管理系统异常");
                }
                if (student == null) {
                    throw new BusinessException("用户管理系统中无该学生");
                }
                loanRecord.setStudentName(student.getName());
                loanRecord.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null :
                        student.getPrimaryTeachingInstitution().getName());
                loanRecord.setGradeName(student.getGrade() == null ? null : student.getGrade().getName());
                loanRecord.setMajorName(student.getSecondaryTeachingInstitution() == null ? null :
                        student.getSecondaryTeachingInstitution().getName());
                loanRecord.setClassName(student.getClasses() == null ? null : student.getClasses().getName());
                int num = loanRecordMapper.insertLoanApplication(loanRecord);
                if (num >= 1) {
                    return true;
                } else {
                    throw new BusinessException("重复申请贷款");
                }
            }
        }
    }


    @Override
    public boolean uploadExcelAndParseSave(MultipartFile file) throws Exception {
        List<LoanExcelResultDto> loanExcelResultDtos = ExcelUtil.parseExcel(LoanExcelResultDto.class, file);
        List<String> studentSns = new ArrayList<>();
        for (LoanExcelResultDto loanExcelResultDto : loanExcelResultDtos) {
            studentSns.add(loanExcelResultDto.getStudentSn());
        }
        Loan loan = findLoanByCurrentSchoolYear();
        if (loan == null) {
            throw new BusinessException("无当前学年贷款项");
        }
        int passNum = loanRecordMapper.updateInList(studentSns, loan.getId().toString(), ConstantEnum.LOAN_STATUS_END.code,
                ConstantEnum.LOAN_RESULT_PASS.code);
        int noPassNum = loanRecordMapper.updateNotInList(studentSns, loan.getId().toString(), ConstantEnum.LOAN_STATUS_END.code,
                ConstantEnum.LOAN_RESULT_NO_PASS.code);
        return true;
    }

    @Override
    public void updateLoanRecord(LoanRecord loanRecord) {
        int num = loanRecordMapper.updateLoanApplication(loanRecord);
        if (num <= 0) {
            throw new BusinessException("修改失败");
        }
    }

    @Override
    public Loan findLoanByCurrentSchoolYear() {
        SchoolYear schoolYear = null;
        try {
            schoolYear = jwtRemoteService.findCurrentSchoolYear();
        } catch (Exception e) {
            e.printStackTrace();
            throw new BusinessException("用户管理系统查询当前学年异常");
        }
        if (schoolYear != null) {
            Loan loan = loanMapper.findBySchoolYear(schoolYear.getName());
            return loan;
        } else {
            throw new BusinessException("用户管理系统无当前学年");
        }
    }


    @Override
    public List<LoanRecordDto> findAllByUserAndLoanId(SessionUserDto sessionUserDto, String loanId) {
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
        List<String> sns = new ArrayList<>();
        for (Student student : students) {
            sns.add(student.getSn());
        }
        List<LoanRecordDto> loanRecordDtos = new ArrayList<>();
        List<LoanRecord> loanRecords = loanRecordMapper.queryAllInListAndByLoan(sns, loanId);
        List<StudentLoanTimesDto> studentLoanTimesDtos = loanRecordMapper.countTimesGroupByStudentSn(sns);
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        for (LoanRecord loanRecord : loanRecords) {
            LoanRecordDto loanRecordDto = new LoanRecordDto();
            loanRecordDto.setApplyAmount(loanRecord.getAppliedAmount().toPlainString());
            loanRecordDto.setApplyTime(simpleDateFormat.format(loanRecord.getCreateTime()));
            for (StudentLoanTimesDto studentLoanTimesDto : studentLoanTimesDtos) {
                if (studentLoanTimesDto.getStudentSn().equals(loanRecord.getStudentSn())) {
                    loanRecordDto.setLoanTimes(studentLoanTimesDto.getLoanTimes());
                }
            }
            for (Student student : students) {
                if (student.getSn().equals(loanRecord.getStudentSn())) {
                    loanRecordDto.setName(student.getName());
                }
                if (student.getSn().equals(loanRecord.getStudentSn()) && student.getSecondaryTeachingInstitution() != null) {
                    loanRecordDto.setSpecialty(student.getSecondaryTeachingInstitution().getName());
                }
            }
            loanRecordDto.setResult(ConstantEnum.get(loanRecord.getResult()).des);
            loanRecordDto.setStatus(ConstantEnum.get(loanRecord.getStatus()).des);
            loanRecordDto.setStudentSn(loanRecord.getStudentSn());
            loanRecordDtos.add(loanRecordDto);
        }
        return loanRecordDtos;
    }
}
