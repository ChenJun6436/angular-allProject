package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.CheckMaterialDto;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCommonMapper;
import com.xdbigdata.subsidize_zjut.service.PovertyClassService;
import com.xdbigdata.subsidize_zjut.service.PovertyCommonService;
import com.xdbigdata.subsidize_zjut.service.process.PovertyActivitiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by staunch on 2017/4/13.
 */
@SuppressWarnings("SpringJavaAutowiringInspection")
@Service
@Transactional
public class PovertyClassServiceImpl implements PovertyClassService {

    @Autowired
    private PovertyCommonService povertyCommonservice;
    @Autowired
    private PovertyActivitiService povertyActivitiService;
    @Autowired
    private PovertyCommonMapper povertyCommonMapper;
    @Autowired
    private JWTStudentService jwtStudentService;
    @Autowired
    private PovertyCommonService povertyCommonService;


    @Override
    public List<PovertyApplyDto> listCheckMaterialStudent() throws Exception{
       return povertyActivitiService.listCheckMaterials();
    }

    /*@Override
    public void commit2Advisor(List<ReviewStudentLevelDto> reviewStudentLevelDtos) throws Exception {
        // TODO: 2017/4/19 需要消息
        for (ReviewStudentLevelDto reviewStudentLevelDto : reviewStudentLevelDtos) {
            povertyActivitiService.review(reviewStudentLevelDto);
        }
        SessionUserDto sessionUserDto = (SessionUserDto)SessionUtil.getSession().getAttribute("sessionUserDto");
        Log log = new Log();
        log.setUserName(sessionUserDto.getUserName());
        log.setType(4);
        log.setContent(sessionUserDto.getRealName() + "班级用户将学生提交到辅导员审核");
        povertyCommonservice.saveLog(log);
    }*/

    @Override
    public void classCheckMaterial(List<CheckMaterialDto> checkMaterialDtos) throws Exception {
        //必须在申请阶段审核材料
//        if (!povertyCommonService.isApplyTime()) {
//            throw new PersonalException("请在申请阶段审核学生材料");
//        }
        for (CheckMaterialDto checkMaterialDto : checkMaterialDtos) {
            povertyActivitiService.classMaterialPass(checkMaterialDto);
        }
    }
}
