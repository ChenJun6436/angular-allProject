package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsHasPovertyLevelNotApply;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsNameWithLevelDto;
import com.xdbigdata.subsidize_zjut.domain.GrantsApply;
import com.xdbigdata.subsidize_zjut.domain.GrantsAttachment;
import com.xdbigdata.subsidize_zjut.domain.GrantsDissent;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/5/27.
 */
@Mapper
public interface GrantsStudentMapper {
    /**
     * 获取学生申请助学金上传列表
     * @param grantsUuid
     * @param sn
     * @return
     */
    List<GrantsAttachment> listApplyMaterial(@Param("grantsUuid") String grantsUuid, @Param("sn") String sn);

    /**
     * 删除
     * @param id
     */
    void deleteApplyMaterialById(Long id);

    /**
     * 保存助学金学生申请信息用
     * @param grantsApply
     */
    void saveStudentGrantsApplyInfo(GrantsApply grantsApply);


    /**
     * 查询学生有权申请的助学金
     * @return
     */
    GrantsDto listAuthGrants(Map<String,Object> query);

    /**
     * 流程变量中获取的助学金
     * @param query
     * @return
     */
    List<GrantsNameWithLevelDto> listAuthProcessGrants(Map<String, Object> query);

    /**
     * 获取本学年认定为贫困而未申请
     * @param sns
     * @param currentSchoolYear
     * @return
     */
    List<GrantsHasPovertyLevelNotApply> listHavePovertyBuNotApply(@Param("grantsUuid")String grantsUuid,@Param("sns") List<String> sns,@Param("currentSchoolYear") String currentSchoolYear);

    /**
     * 查找学生是否已经申请过当前助学金
     * @param studentSn
     * @param grantsUuid
     * @return
     */
    Long isApply(@Param("studentSn") String studentSn,@Param("grantsUuid") String grantsUuid);

    /**
     * 查找我的异议列表
     * @param grantsUuid
     * @param sn
     * @return
     */
    List<GrantsDissent> listMyDissent(@Param("grantsUuid") String grantsUuid, @Param("sn") String sn);
}
