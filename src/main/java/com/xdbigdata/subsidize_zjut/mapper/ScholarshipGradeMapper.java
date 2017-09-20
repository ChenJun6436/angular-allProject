package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.ScholarshipCollegeDto;
import com.xdbigdata.subsidize_zjut.domain.Scholarship2College;
import com.xdbigdata.subsidize_zjut.domain.Scholarship2Grade;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import sun.applet.resources.MsgAppletViewer;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/6/7 0007.
 */
@Mapper
public interface ScholarshipGradeMapper {
    /**
     * 保存年级申请人数
     */
    void saveGradeConfig(Scholarship2Grade scholarship2Grade);

    /**
     * 修改申请人数
     * @param
     */
    void updateScholarshipCollege(Scholarship2Grade scholarship2Grade);

    /**
     * 获取年级配置信息
     * @return
     */
    Scholarship2Grade getGradeConfigByCollegeIdAndGrade(Map map);

}
