package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.domain.GrantsDissent;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import com.xdbigdata.subsidize_zjut.domain.Scholarship;
import com.xdbigdata.subsidize_zjut.domain.ScholarshipPublicity;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.ScholarshipCommonMapper;
import com.xdbigdata.subsidize_zjut.mapper.ScholarshipMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipCommonService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/6/11 0011.
 */
public class ScholarshipCommonServiceImpl implements IScholarshipCommonService {

    @Autowired
    private ScholarshipMapper scholarshipMapper;

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @Autowired
    private ScholarshipCommonMapper scholarshipCommonMapper;


    @Override
    public void saveCommitDissent(GrantsDissent grantsDissent) throws Exception {

    }

    @Override
    public void saveDissentDealInfo(GrantsDissentResponseDto responseDto) throws Exception {

    }

    @Override
    public List<Map<String, Object>> findDissentByStatus(GrantsNoticeDto noticeDto) throws Exception {
        return null;
    }

    @Override
    public void saveOrUpdatePublicityTimeConfig(ScholarshipPublicity grantsPublicityDto) throws Exception {
        /*SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String currentSchoolYear = grantsJWTService.getCurrentSchoolYear();
        Scholarship scholarshipBySchoolYear = scholarshipMapper.getScholarshipBySchoolYear(currentSchoolYear);
        if (scholarshipBySchoolYear == null){
            throw new Exception("无正在进行申请的国家励志奖学金");
        }
        grantsPublicityDto.setScholarshipId(scholarshipBySchoolYear.getId());
        if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()){
            if (grantsPublicityDto.getId() == null){//保存
                scholarshipCommonMapper.savePublicityConfig(grantsPublicityDto);
            }else {//更新
                GrantsPublicity publicityDto = scholarshipCommonMapper.findPublicityTimeConfigById();
                Date now = new Date();
                if (now.after(publicityDto.getStartTime())){
                    throw new Exception("公示阶段已经开始，不能修改时间");
                }
                grantsCommonMapper.updatePublicityTimeConfig(grantsPublicity);
            }
        }else if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()){
            if (grantsPublicity.getId() == null){

            }else {//更新

            }
        }else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }*/
    }

    @Override
    public String findPublicityStage() {
        return null;
    }

    @Override
    public GrantsPublicity findPublicityTimeConfig() {
        return null;
    }

    @Override
    public String isCofigPublicityTime() {
        return null;
    }
}
