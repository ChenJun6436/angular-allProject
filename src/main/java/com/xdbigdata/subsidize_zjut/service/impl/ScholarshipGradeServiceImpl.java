package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsGradeDto;
import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipCollegeDto;
import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipGradeGto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.Scholarship2College;
import com.xdbigdata.subsidize_zjut.domain.Scholarship2Grade;
import com.xdbigdata.subsidize_zjut.mapper.ScholarshipGradeMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipCollegeService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipGradeService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.apache.poi.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/6/7 0007.
 */
@Service
@Transactional
public class ScholarshipGradeServiceImpl implements IScholarshipGradeService {

    @Autowired
    private ScholarshipGradeMapper scholarshipGradeMapper;

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @Autowired
    private IScholarshipCollegeService scholarshipCollegeService;

    @Override
    public void saveOrUpdateGradeConfig(ScholarshipGradeGto scholarshipGradeGto) throws Exception{
        SessionUserDto loginUser = (SessionUserDto) UserUtil.getLoginUser();
        Long collegeId = grantsJWTService.getCollegeIdBySn(loginUser.getUserName());
        if (scholarshipGradeGto != null && scholarshipGradeGto.getGradeCongifs() != null) {
            Integer sum = 0;
            List<Scholarship2Grade> gradeCongifs = scholarshipGradeGto.getGradeCongifs();
            for (Scholarship2Grade scholarship2Grade : gradeCongifs) {
                sum += scholarship2Grade.getAmount();
            }
            Scholarship2College scholarship = scholarshipCollegeService.getScholarshipByCollegeId(collegeId);
            if (sum>scholarship.getAmount()){
                throw new RuntimeException("配置人数超过学院可申请总人数");
            }
            for (Scholarship2Grade gradeConfig : scholarshipGradeGto.getGradeCongifs()) {
                if (gradeConfig.getId() == null) {
                    scholarshipGradeMapper.saveGradeConfig(gradeConfig);
                } else {
                    scholarshipGradeMapper.updateScholarshipCollege(gradeConfig);
                }
            }
        }

    }

    @Override
    public ScholarshipGradeGto listGradeconfig() throws Exception {
       /* SessionUserDto loginUser =(SessionUserDto)UserUtil.getLoginUser();*/
        SessionUserDto loginUser = new SessionUserDto();
        loginUser.setUserName("323413");
        ScholarshipGradeGto scholarshipGradeGto = null;
        if (loginUser != null && loginUser.getUserName() != null) {
            List<ScholarshipGradeGto> result = null;
            Long collegeId = grantsJWTService.findCollegeIdBySn(loginUser.getUserName());
            List<GrantsGradeDto> GradeDtos = grantsJWTService.listGradesByCollegeId(collegeId);
            Scholarship2College scholarshipByCollegeId = scholarshipCollegeService.getScholarshipByCollegeId(collegeId);
            if (scholarshipByCollegeId != null) {
                scholarshipGradeGto = new ScholarshipGradeGto();
                scholarshipGradeGto.setAllowAmount(scholarshipByCollegeId.getAmount());
                scholarshipGradeGto.setGrants(scholarshipByCollegeId.getGrantsLeavel());
                scholarshipGradeGto.setSchoolYear(scholarshipByCollegeId.getSchoolYear());
                scholarshipGradeGto.setEndDate(scholarshipByCollegeId.getEndDate());
            }
            Map map = new HashMap();
            map.put("collegeId", collegeId);
            List<Scholarship2Grade> configs = new ArrayList<>();
            if (GradeDtos != null && GradeDtos.size() > 0) {
                Scholarship2Grade scholarship2Grade = null;
                for (GrantsGradeDto gradeDto : GradeDtos) {
                    map.put("gradeName", gradeDto.getName());
                    Scholarship2Grade gradeConfigByCollegeIdAndGrade = scholarshipGradeMapper.getGradeConfigByCollegeIdAndGrade(map);
                    if (gradeConfigByCollegeIdAndGrade == null) {
                        scholarship2Grade = new Scholarship2Grade();
                        scholarship2Grade.setCollegeId(collegeId);
                        scholarship2Grade.setGradeName(gradeDto.getName());
                        scholarship2Grade.setAmount(0);
                        configs.add(scholarship2Grade);
                    } else {
                        configs.add(gradeConfigByCollegeIdAndGrade);
                    }
                }
                scholarshipGradeGto.setGradeCongifs(configs);
            }
        }
        return scholarshipGradeGto;

    }

}
