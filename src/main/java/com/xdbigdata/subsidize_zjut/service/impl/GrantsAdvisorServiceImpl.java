package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.subsidize_zjut.common.dto.EIntegerConstant;
import com.xdbigdata.subsidize_zjut.common.dto.EStringConstant;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsHasPovertyLevelNotApply;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.GrantsCommonMapper;
import com.xdbigdata.subsidize_zjut.mapper.GrantsStudentMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsAdvisorService;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/5/27.
 */
@Service
@Transactional
public class GrantsAdvisorServiceImpl implements IGrantsAdvisorService {

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @Autowired
    private GrantsStudentMapper grantsStudentMapper;

    @Autowired
    private GrantsCommonMapper grantsCommonMapper;

    /**
     * 本学年评定经济困难学生但未申请国家助学金
     *
     * @return
     */
    @Override
    public List<GrantsHasPovertyLevelNotApply> listHavePovertyLevelButNotApply() throws Exception {
        List<GrantsHasPovertyLevelNotApply> result = new ArrayList<>();
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String currentSchoolYear = grantsJWTService.getCurrentSchoolYear();
        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        if (sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()) {
            List<String> sns = grantsJWTService.listStudentSnsFromAdvisor(sessionUserDto.getUserName());
            if (sns != null) {
                result = grantsStudentMapper.listHavePovertyBuNotApply(currentGrantsUuid, sns, currentSchoolYear);
                for (GrantsHasPovertyLevelNotApply people : result) {
                    Student student = grantsJWTService.findStudentBySn(people.getSn());
                    people.setName(student.getName());
                }
            } else {
                throw new PersonalException("你这个辅导员谁都管不了！是来搞笑的吗？");
            }
        } else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
        return result;
    }
}
