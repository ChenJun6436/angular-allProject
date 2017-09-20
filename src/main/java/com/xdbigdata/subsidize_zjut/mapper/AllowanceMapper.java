package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.allowance.ApplyListDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.FiveClassDto;
import com.xdbigdata.subsidize_zjut.common.dto.allowance.UpdateCheckResultDto;
import com.xdbigdata.subsidize_zjut.domain.AllowanceApply;
import com.xdbigdata.subsidize_zjut.domain.AllowanceConfig;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by jinmingjiang on 2017/6/5.
 * 特别困难补助DAO
 */
@Mapper
public interface AllowanceMapper {

    AllowanceConfig getAllowanceConfig();

    void insertAllowanceConfig(AllowanceConfig allowanceConfig);

    void updateAllowanceConfig(AllowanceConfig allowanceConfig);

    int findAllowanceApplyBySn(String sn);

    void insertAllowanceApply(AllowanceApply allowanceApply);

    void updateCheckResult(UpdateCheckResultDto updateCheckResultDto);

    List<ApplyListDto> getAllowanceApplyList(@Param("snList") List<String> snList,@Param("step") Integer step,@Param("checked")boolean checked);

    void batchUpdateStep(@Param("snList") List<String> snList,@Param("step") Integer step);

    void insertAllowanceHistory(@Param("list") List<AllowanceApply> allowanceApplies);

    void deleteAllowanceApply(@Param("list")List<AllowanceApply> allowanceApplies);

    List<AllowanceApply> getAllowanceApplyListBySn(@Param("snList")List<String> snList);

    FiveClassDto getStudentInfo(String sn);

}
