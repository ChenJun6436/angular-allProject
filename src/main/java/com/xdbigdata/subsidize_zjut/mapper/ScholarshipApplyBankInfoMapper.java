package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.domain.ScholarshipApplyBankInfo;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by Administrator on 2017/6/8 0008.
 */
@Mapper
public interface ScholarshipApplyBankInfoMapper {
    /**
     * 保存申请奖学金的银行卡信息
     */
    void saveApplyBankInfo(ScholarshipApplyBankInfo scholarshipApplyBankInfo);

    /**
     * 修改申请奖学金的银行卡信息
     */
    void updateApplyBankInfo(ScholarshipApplyBankInfo scholarshipApplyBankInfo);

}
