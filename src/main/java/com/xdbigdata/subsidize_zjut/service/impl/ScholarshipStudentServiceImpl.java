package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipApplyMaterialDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.Awards;
import com.xdbigdata.subsidize_zjut.domain.Scholarship;
import com.xdbigdata.subsidize_zjut.domain.ScholarshipApplyHistory;
import com.xdbigdata.subsidize_zjut.domain.StudentInfo;
import com.xdbigdata.subsidize_zjut.mapper.*;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipActivitiService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipStudentService;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * Created by Administrator on 2017/6/7 0007.
 */
@Service
@Transactional
public class ScholarshipStudentServiceImpl implements IScholarshipStudentService {

    @Autowired
    private AwardsMapper awardsMapper;

    @Autowired
    private StudySituationMapper studySituationMapper;

    @Autowired
    private PovertyStudentMapper povertyStudentMapper;

    @Autowired
    private ScholarshipApplyBankInfoMapper scholarshipApplyBankInfoMapper;

    @Autowired
    private IScholarshipActivitiService scholarshipActivitiService;

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @Autowired
    private ScholarshipMapper scholarshipMapper;

    @Autowired
    private ScholarshipApplyHistoryMapper scholarshipApplyHistoryMapper;


    @Override
    public void saveOrUpdateApplyMaterial(ScholarshipApplyMaterialDto scholarshipApplyMaterialDto) throws Exception {
       /* SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String userName = sessionUserDto.getUserName();*/
        String userName = "201520183";
        String currentSchoolYear = grantsJWTService.getCurrentSchoolYear();
        Scholarship scholarship = scholarshipMapper.getScholarshipBySchoolYear(currentSchoolYear);
        if (scholarshipApplyMaterialDto.getStudySituation() != null && scholarshipApplyMaterialDto.getStudySituation().getId() == null) {
            scholarshipApplyMaterialDto.getScholarshipApply().setStudentSn(userName);
            studySituationMapper.saveStudySituation(scholarshipApplyMaterialDto.getStudySituation());
        } else {
            studySituationMapper.updateStudySituation(scholarshipApplyMaterialDto.getStudySituation());
        }
        if (scholarshipApplyMaterialDto.getScholarshipApply() != null && scholarshipApplyMaterialDto.getScholarshipApply().getId() == null) {
            scholarshipApplyMaterialDto.getScholarshipApply().setStudentSn(userName);
            scholarshipApplyMaterialDto.getScholarshipApply().setScholarshipId(scholarship.getId());
            scholarshipApplyBankInfoMapper.saveApplyBankInfo(scholarshipApplyMaterialDto.getScholarshipApply());
        } else {
            scholarshipApplyBankInfoMapper.updateApplyBankInfo(scholarshipApplyMaterialDto.getScholarshipApply());
        }

        scholarshipActivitiService.startScholarshipApplyProcess(scholarshipApplyMaterialDto);
        ScholarshipApplyHistory scholarshipApplyHistory = new ScholarshipApplyHistory();
        scholarshipApplyHistory.setResult(0);

        scholarshipApplyHistory.setSchoolYear(currentSchoolYear);
        scholarshipApplyHistory.setStudentSn(userName);

        scholarshipApplyHistory.setScholarshipId(scholarship.getId());
        scholarshipApplyHistoryMapper.saveScholarshipHistory(scholarshipApplyHistory);
    }

    public void deleteAwardsById(Long id) {
        awardsMapper.deleteStudentAwards(id);
    }


    @Override
    public Object getScholarshipConditions() {
        return null;
    }

    @Override
    public StudentInfo getStudentInfoById() {
       /* SessionUserDto loginUser =(SessionUserDto) UserUtil.getLoginUser();*/
        SessionUserDto loginUser = new SessionUserDto();
        loginUser.setUserName("201520183");
        StudentInfo student = null;
        if (loginUser != null && loginUser.getUserName() != null) {
            student = povertyStudentMapper.getStudent(loginUser.getUserName());
        }
        return student;
    }

    @Override
    public void saveAwards(Awards awards) {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String userName = sessionUserDto.getUserName();
        awards.setStudentId(userName);
        awardsMapper.saveStudentAwards(awards);
    }
}
