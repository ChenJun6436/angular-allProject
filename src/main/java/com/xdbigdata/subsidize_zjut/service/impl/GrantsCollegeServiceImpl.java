package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.*;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsCollegeConfigDto.GradeConfigs;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsCollegeConfigDto.GradeConfigs.MajorConfigs;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsCollegeConfigDto.GradeConfigs.MajorConfigs.ClassesConfigs;
import com.xdbigdata.subsidize_zjut.domain.Grants2Classes;
import com.xdbigdata.subsidize_zjut.domain.Grants2Grade;
import com.xdbigdata.subsidize_zjut.domain.Grants2Major;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.GrantsCollegeMapper;
import com.xdbigdata.subsidize_zjut.mapper.GrantsCommonMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsCollegeService;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/5/25.
 */
@Service
@Transactional
public class GrantsCollegeServiceImpl implements IGrantsCollegeService {

    @Autowired
    private GrantsCollegeMapper grantsCollegeMapper;

    @Autowired
    private GrantsCommonMapper grantsCommonMapper;

    @Autowired
    private IGrantsJWTService grantsJWTService;

    /**
     * 保存学院申请名额
     *
     * @param grantsId
     * @param applyQuota
     */
    @Override
    public void saveApplyQuota(Integer grantsId, Integer applyQuota) throws Exception {
        SessionUserDto user = (SessionUserDto) UserUtil.getLoginUser();
        if (user.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
            Long collegeId = grantsJWTService.findCollegeIdBySn(user.getUserName());
            grantsCollegeMapper.saveApplyQuota(grantsId, applyQuota, collegeId);
        } else {
            throw new Exception(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }

    /**
     * 获取学院配置
     *
     * @param grantsId
     * @return
     */
    @Override
    public GrantsCollegeConfigDto findGradeConfig(Long grantsId) throws Exception {
        SessionUserDto user = (SessionUserDto) UserUtil.getLoginUser();
        CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(user.getUserName());
        if (collegeUser == null) {
            throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
        }
        Long collegeId = collegeUser.getPrimaryTeachingInstitution().getId();
        String collegeName = grantsJWTService.findCollegeNameById(collegeId);
        List<GrantsGradeDto> grades = grantsJWTService.listGradesByCollegeId(collegeId);
        List<Long> gradeIds = new ArrayList<>();
        for (GrantsGradeDto grade : grades) {
            gradeIds.add(grade.getId());
        }
        if (gradeIds == null) {
            throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
        }
        List<GradeSecondaryDto> gradeSecondaryDtos = grantsJWTService.listClassMajorGradeCollegeInfo(collegeId, gradeIds);
        if (user.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
            GrantsCollegeConfigDto configs = grantsCollegeMapper.findGradeConfig(grantsId, collegeId);
            if (configs != null) {
                configs.setCollegeName(collegeName);
                if (configs.getGradeConfigs() != null && configs.getGradeConfigs().size() > 0) {
                    for (GradeConfigs config : configs.getGradeConfigs()) {
                        config.setGradeName(grantsJWTService.findGradeNameById(config.getGradeId().longValue()));
                        if (config.getMajorConfigs() != null && config.getMajorConfigs().size() > 0) {
                            for (MajorConfigs majorConfig : config.getMajorConfigs()) {
                                majorConfig.setMajorName(grantsJWTService.findMajorNameById(majorConfig.getMajorId().longValue()));
                                if (majorConfig.getClassesConfigs() != null && majorConfig.getClassesConfigs().size() > 0) {
                                    for (ClassesConfigs classConfig : majorConfig.getClassesConfigs()) {
                                        classConfig.setClassesName(grantsJWTService.findClassesNameById(classConfig.getClassesId().longValue()));
                                    }
                                }
                            }
                        }
                    }
                }else {
                    configs = getNullGradeConfigFromJwt(gradeSecondaryDtos, configs);
                }
                return configs;
            } else {
                GrantsCollegeConfigDto nullConfig = new GrantsCollegeConfigDto();
                nullConfig.setCollegeAmount(null);
                nullConfig.setCollegeId(collegeId.intValue());
                nullConfig.setGrantsId(grantsId.intValue());
                nullConfig.setRecordId(null);
                nullConfig.setCollegeName(collegeName);
                nullConfig = getNullGradeConfigFromJwt(gradeSecondaryDtos, nullConfig);
                return nullConfig;
            }
        } else {
            throw new Exception(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }

    /**
     * 设置空配置
     *
     * @param gradeSecondaryDtos
     * @param nullConfig
     * @return
     */
    private GrantsCollegeConfigDto getNullGradeConfigFromJwt(List<GradeSecondaryDto> gradeSecondaryDtos, GrantsCollegeConfigDto nullConfig) {
        List<GradeConfigs> gradeConfigs = new ArrayList<>();
        for (GradeSecondaryDto secondaryDto : gradeSecondaryDtos) {
            GradeConfigs gradeConfig = new GradeConfigs();
            gradeConfig.setAmount(null);
            gradeConfig.setGradeId(secondaryDto.getId().intValue());
            gradeConfig.setGradeName(secondaryDto.getName());
            gradeConfig.setRecordId(null);
            List<SecondaryDto> secondarys = secondaryDto.getSecondarys();
            List<MajorConfigs> majorConfigs = new ArrayList<>();
            for (SecondaryDto secondary : secondarys) {
                MajorConfigs majorConfig = new MajorConfigs();
                majorConfig.setRecordId(null);
                majorConfig.setMajorId(secondary.getId().intValue());
                majorConfig.setMajorName(secondary.getName());
                majorConfig.setAmount(null);
                List<Classes> classesList = secondary.getClassesList();
                List<ClassesConfigs> classesConfigs = new ArrayList<>();
                for (Classes classes : classesList) {
                    ClassesConfigs classesConfig = new ClassesConfigs();
                    classesConfig.setRecordId(null);
                    classesConfig.setClassesId(classes.getId().intValue());
                    classesConfig.setClassesName(classes.getName());
                    classesConfig.setAmount(null);
                    classesConfigs.add(classesConfig);
                }
                majorConfig.setClassesConfigs(classesConfigs);
                majorConfigs.add(majorConfig);
                gradeConfig.setMajorConfigs(majorConfigs);
            }
            gradeConfigs.add(gradeConfig);
        }
        nullConfig.setGradeConfigs(gradeConfigs);
        return nullConfig;
    }

    /**
     * 保存学院配置
     */
    @Override
    public void saveGradeConfig(GrantsCollegeConfigDto collegeConfig) {
        if (collegeConfig != null && collegeConfig.getGradeConfigs() != null){
            validateCollegeDistributeAllot(collegeConfig);
        }
        //保存操作
        if (collegeConfig.getGradeConfigs() != null
                && collegeConfig.getGradeConfigs().get(0).getRecordId() == null) {
            for (GradeConfigs gradeConfig : collegeConfig.getGradeConfigs()) {
                Grants2Grade grants2Grade = new Grants2Grade();
                grants2Grade.setGradeAmount(gradeConfig.getAmount().longValue());
                grants2Grade.setCollegeQuotaId(collegeConfig.getRecordId().longValue());
                grants2Grade.setGradeId(gradeConfig.getGradeId().longValue());
                grants2Grade.setGrantsId(collegeConfig.getGrantsId().longValue());
                grantsCollegeMapper.saveQuota2Grade(grants2Grade);
                Long gradeRecordId = grants2Grade.getId();
                if (gradeConfig.getMajorConfigs() != null
                        && gradeConfig.getMajorConfigs().get(0).getRecordId() == null) {
                    for (MajorConfigs majorConfig : gradeConfig.getMajorConfigs()) {
                        Grants2Major grants2Major = new Grants2Major();
                        grants2Major.setGradeQuotaId(gradeRecordId);
                        grants2Major.setMajorAmount(majorConfig.getAmount().longValue());
                        grants2Major.setMajorId(majorConfig.getMajorId().longValue());
                        grantsCollegeMapper.saveQuota2Major(grants2Major);
                        Long majorRecordId = grants2Major.getId();
                        if (majorConfig.getClassesConfigs() != null
                                && majorConfig.getClassesConfigs().get(0).getRecordId() == null) {
                            for (ClassesConfigs classConfig : majorConfig.getClassesConfigs()) {
                                Grants2Classes grants2Classes = new Grants2Classes();
                                grants2Classes.setMajorQuotaId(majorRecordId);
                                grants2Classes.setClassesAmount(classConfig.getAmount().longValue());
                                grants2Classes.setClassesId(classConfig.getClassesId().longValue());
                                grantsCollegeMapper.saveQuota2Classes(grants2Classes);
                            }
                        }
                    }

                }
            }
        } else {//更新操作
            for (GradeConfigs gradeConfig : collegeConfig.getGradeConfigs()) {
                Grants2Grade grants2Grade = new Grants2Grade();
                grants2Grade.setId(gradeConfig.getRecordId().longValue());
                grants2Grade.setGradeAmount(gradeConfig.getAmount().longValue());
                grantsCollegeMapper.updateQuota2Grade(grants2Grade);
                if (gradeConfig.getMajorConfigs() != null && gradeConfig.getMajorConfigs().size() > 0
                        && gradeConfig.getMajorConfigs().get(0).getRecordId() != null) {
                    for (MajorConfigs majorConfig : gradeConfig.getMajorConfigs()) {
                        Grants2Major grants2Major = new Grants2Major();
                        grants2Major.setId(majorConfig.getRecordId().longValue());
                        grants2Major.setMajorAmount(majorConfig.getAmount().longValue());
                        grantsCollegeMapper.updateQuota2Major(grants2Major);
                        if (majorConfig.getClassesConfigs() != null && majorConfig.getClassesConfigs().size() > 0
                                && majorConfig.getClassesConfigs().get(0).getRecordId() != null) {
                            for (ClassesConfigs classConfig : majorConfig.getClassesConfigs()) {
                                Grants2Classes grants2Classes = new Grants2Classes();
                                grants2Classes.setId(classConfig.getRecordId().longValue());
                                grants2Classes.setClassesAmount(classConfig.getAmount().longValue());
                                grantsCollegeMapper.updateQuota2Classes(grants2Classes);
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * 验证学院配置（先分配到年级,再分配到专业，再分配到班级）
     * 先行条件一 ： 所有年级配置人数加起来 小于等于 学院可分配人数
     * 先行条件二 ： 所有专业配置人数加起来 小于等于专业所属年级的人数
     * 先行条件三 ： 所有班级配置人数加起来 小于等于 年级分配人数
     * 达成以上三种条件，即可召唤学生进行申请。
     * @param collegeConfig
     */
    private void validateCollegeDistributeAllot(GrantsCollegeConfigDto collegeConfig) {
        Long gradeSum = 0L;
        Long majorSum = 0L;
        Long classesSum = 0L;
        List<GradeConfigs> gradeConfigs = collegeConfig.getGradeConfigs();
        for (GradeConfigs gradeConfig : gradeConfigs) {
            if (gradeConfig.getAmount() != null){
                gradeSum += gradeConfig.getAmount();
            }
            if (gradeConfig.getMajorConfigs() != null){
                for (MajorConfigs majorConfig : gradeConfig.getMajorConfigs()){
                    if (majorConfig.getAmount() != null){
                        majorSum += majorConfig.getAmount();
                    }
                    if (majorConfig.getClassesConfigs() != null){
                        for (ClassesConfigs classesConfig : majorConfig.getClassesConfigs()) {
                            if (classesConfig.getAmount() != null){
                                classesSum += classesConfig.getAmount();
                            }
                        }
                        if (classesSum > majorConfig.getAmount()) {
                            throw new PersonalException("学院分配名额，班级总名额大于专业总名额");
                        }
                        classesSum = 0L;
                    }
                }
                if (majorSum > gradeConfig.getAmount()){
                    throw new PersonalException("学院分配名额，专业总名额大于年级总名额");
                }
                majorSum = 0L;
            }
        }
        if (gradeSum > collegeConfig.getCollegeAmount()){
            throw new PersonalException("学院分配到年级人数超额");
        }

    }

    /**
     * 保存学院退回的名额
     *
     * @param grantsId
     * @param quotas
     */
    @Override
    public void updateReturnQuotas2School(Integer grantsId, Integer quotas) throws Exception {
        SessionUserDto user = (SessionUserDto) UserUtil.getLoginUser();
        Long collegeId = grantsJWTService.getCollegeIdBySn(user.getUserName());
        grantsCollegeMapper.updateReturnQuotas2School(grantsId, quotas, collegeId);
    }

    @Override
    public List<GrantsListDto> listGrants() throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        Long collegeId = grantsJWTService.getCollegeIdBySn(sessionUserDto.getUserName());
        return grantsCollegeMapper.listAuthGrants(collegeId);
    }

    /**
     * 配置预留名额
     *
     * @param grantsId
     * @param allot
     */
    @Override
    public void saveObligateAllot(Long grantsId,Long allot) throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()){
            CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
            grantsCollegeMapper.saveObligateAllot(collegeUser.getPrimaryTeachingInstitution().getId(),grantsId,allot);
        }else{
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }

    /**
     * 判断学校是否能直接提交任务到学校审核
     *
     * @return
     */
    @Override
    public String isCollegeCanCommit2School() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()){
            String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
            //学院没配置公示时间  /  该学院的公示时间已经过去了
            CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
            GrantsPublicity collegePublicity = grantsCommonMapper.findCollegePublicityByGrantsUuidAndCollegeId(currentGrantsUuid,
                    collegeUser.getPrimaryTeachingInstitution().getId());
            if (collegePublicity == null || (collegePublicity != null && collegePublicity.getCommit() == 1)){
                return "yes";
            }else {
                return "no";
            }
        }else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }
}

