package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.subsidize_zjut.common.dto.para.CheckMaterialDto;
import com.xdbigdata.subsidize_zjut.service.PovertyAdvisorService;
import com.xdbigdata.subsidize_zjut.service.PovertyCommonService;
import com.xdbigdata.subsidize_zjut.service.process.PovertyActivitiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 辅导员相关service
 * Created by staunch on 2017/4/1.
 */
@Service
@Transactional
public class PovertyAdvisorServiceImpl implements PovertyAdvisorService {

    @Autowired
    private PovertyActivitiService povertyActivitiService;
    @Autowired
    private PovertyCommonService povertyCommonservice;
    /*@Override
    public void commit2College(List<ReviewStudentLevelDto> reviewStudentLevelDtos) throws Exception {
        // TODO: 2017/4/19 消息推送 
        for (ReviewStudentLevelDto reviewStudentLevelDto : reviewStudentLevelDtos) {
            povertyActivitiService.review(reviewStudentLevelDto);
        }
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        Log log = new Log();
        log.setUserName(sessionUserDto.getUserName());
        log.setType(3);
        log.setContent(sessionUserDto.getRealName() + "辅导员用户将学生提交到学院审核");
        povertyCommonservice.saveLog(log);
    }*/

    @Override
    public void advisorCheckMaterial(List<CheckMaterialDto> checkMaterialDtos) throws Exception {
        //必须在申请阶段审核材料
//        if (!povertyCommonservice.isApplyTime()) {
//            throw new PersonalException("请在申请阶段审核学生材料");
//        }
        for (CheckMaterialDto checkMaterialDto : checkMaterialDtos) {
            povertyActivitiService.advisorMaterialPass(checkMaterialDto);
        }
    }
}
