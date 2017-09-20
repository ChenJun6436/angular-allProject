package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.service.JWTPrimaryTeachingInstitutionService;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipCollegeDto;
import com.xdbigdata.subsidize_zjut.domain.Scholarship;
import com.xdbigdata.subsidize_zjut.domain.Scholarship2College;
import com.xdbigdata.subsidize_zjut.mapper.ScholarshipCollegeMapper;
import com.xdbigdata.subsidize_zjut.mapper.ScholarshipMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsCommonService;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipCollegeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/6/6 0006.
 */
@Service
@Transactional
public class ScholarshipCollegeServiceImpl implements IScholarshipCollegeService {

    @Autowired
    private ScholarshipCollegeMapper scholarshipCollegeMapper;

    @Autowired
    private JWTPrimaryTeachingInstitutionService jwtPrimaryTeachingInstitutionService;

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @Autowired
    private IGrantsCommonService grantsCommonService;

    @Autowired
    private ScholarshipMapper scholarshipMapper;


    @Override
    public void saveOrUpdateCollegeConfig(ScholarshipCollegeDto configDto) {
        if (configDto != null && configDto.getConfigs() !=  null && configDto.getConfigs().size() > 0
                && configDto.getConfigs().get(0).getRecordId() != null){
            scholarshipCollegeMapper.updateScholarshipCollege(configDto);
        }else {
            scholarshipCollegeMapper.saveCollegeConfig(configDto);
        }
    }

    @Override
    public ScholarshipCollegeDto getCollegeApplyConfig() {
        ScholarshipCollegeDto configs = new ScholarshipCollegeDto();
        try {
            List<GrantsConfigDto.Config> colleges = grantsJWTService.getAllColleges();
            List<ScholarshipCollegeDto.Config> collegeConfigs = configs.getConfigs();
            if (colleges!=null){
                for (GrantsConfigDto.Config config:colleges) {
                    ScholarshipCollegeDto.Config collegeConifg = null;
                    Scholarship2College scholarshipConfig = scholarshipCollegeMapper.findScholarshipConfig(config.getId());
                    if (scholarshipConfig==null){
                        collegeConifg = new ScholarshipCollegeDto.Config();
                        collegeConifg.setAmount(0);
                        collegeConifg.setId(config.getId());
                        collegeConifg.setName(config.getName());
                    }else{
                        collegeConifg = new ScholarshipCollegeDto.Config();
                        collegeConifg.setAmount(scholarshipConfig.getAmount());
                        collegeConifg.setId(scholarshipConfig.getCollegeId());
                        collegeConifg.setName(config.getName());
                        collegeConifg.setRecordId(scholarshipConfig.getId());
                        configs.setSchoolYear(scholarshipConfig.getSchoolYear());
                        configs.setStartDate(scholarshipConfig.getStartDate());
                        configs.setEndDate(scholarshipConfig.getEndDate());
                    }
                    collegeConfigs.add(collegeConifg);
                }
                configs.setConfigs(collegeConfigs);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return configs;
    }

    @Override
    public List<Map> listGrantsBySchoolYear(String schoolYear) {
        List<Map> maps = grantsCommonService.listGrantsBySchoolYear(schoolYear);
        return maps;
    }

    @Override
    public Scholarship2College getScholarshipByCollegeId(Long collegeId) {
        return scholarshipCollegeMapper.findScholarshipConfig(collegeId);
    }

    @Override
    public void saveScholarship(Scholarship scholarship) {
        scholarshipMapper.saveScholarship(scholarship);
    }

}
