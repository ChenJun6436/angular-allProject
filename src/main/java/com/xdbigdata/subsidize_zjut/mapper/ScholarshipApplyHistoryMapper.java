package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.domain.ScholarshipApplyHistory;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by Administrator on 2017/6/9 0009.
 *
 */
@Mapper
public interface ScholarshipApplyHistoryMapper {
    /**
     * 保存申请记录
     * @param scholarshipApplyHistory
     */
    void saveScholarshipHistory(ScholarshipApplyHistory scholarshipApplyHistory);

    /**
     * 修改申请结果
     * @param scholarshipApplyHistory
     */
    void updateScholarshipApplyResult(ScholarshipApplyHistory scholarshipApplyHistory);

}
