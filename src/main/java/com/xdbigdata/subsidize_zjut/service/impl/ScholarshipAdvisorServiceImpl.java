package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.subsidize_zjut.common.dto.para.CheckMaterialDto;
import com.xdbigdata.subsidize_zjut.service.IScholarshipActivitiService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipAdvisorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Administrator on 2017/6/8 0008.
 */
@Service
@Transactional
public class ScholarshipAdvisorServiceImpl implements IScholarshipAdvisorService {

    @Autowired
    private IScholarshipActivitiService scholarshipActivitiService;



}
