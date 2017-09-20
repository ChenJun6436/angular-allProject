package com.xdbigdata.subsidize_zjut.service;


import com.xdbigdata.subsidize_zjut.common.dto.para.CheckMaterialDto;

import java.util.List;

/**
 *
 * Created by staunch on 2017/4/11.
 */
public interface PovertyAdvisorService {

    /**
     * 辅导员提交到学院审核
     * @param reviewStudentLevelDtos
     * @throws Exception
     */
    //void commit2College(List<ReviewStudentLevelDto> reviewStudentLevelDtos)throws Exception;

    /**
     * 辅导员审核学生材料
     * @param checkMaterialDtos
     * @throws Exception
     */
    void advisorCheckMaterial(List<CheckMaterialDto> checkMaterialDtos)throws Exception;
}
