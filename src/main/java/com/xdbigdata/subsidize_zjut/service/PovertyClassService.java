package com.xdbigdata.subsidize_zjut.service;


import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.CheckMaterialDto;

import java.util.List;

/**
 * Created by staunch on 2017/4/13.
 */
public interface PovertyClassService {
    /**
     * 班级用户获取待审核学生的申请材料
     * @return
     */
    List<PovertyApplyDto> listCheckMaterialStudent() throws Exception;

//    /**
//     * 班级用户提交到辅导员审核
//     * @param reviewStudentLevelDtos
//     * @throws Exception
//     */
//    //void commit2Advisor(List<ReviewStudentLevelDto> reviewStudentLevelDtos)throws Exception;
//
    /**
     * 班级用户审核学生材料
     * @param checkMaterialDtos
     * @throws Exception
     */
    void classCheckMaterial(List<CheckMaterialDto> checkMaterialDtos)throws Exception;


}
