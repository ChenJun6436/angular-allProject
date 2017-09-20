package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.JoinArmySubsidizeDto;
import com.xdbigdata.subsidize_zjut.common.dto.JoinArmySubsidizeExcelDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.domain.JoinArmySubsidize;
import com.xdbigdata.subsidize_zjut.exception.XDException;

import java.util.List;

/**
 * Created by sky on 2017/5/12.
 */
public interface JoinArmySubsidizeService {
    /**
     * 单个新增
     * @param joinArmySubsidize
     *  @return
     */
    public int insert(JoinArmySubsidize joinArmySubsidize) throws Exception;

    /**
     * 批量新增
     * @param joinArmySubsidizeExcelDtos
     *  @return
     */
    public int insertBatch(List<JoinArmySubsidizeExcelDto> joinArmySubsidizeExcelDtos) throws Exception;

    /**
     * 查询特定用户下的入伍补助名单
     * @param sessionUserDto
     * @return
     *
     */
    public List<JoinArmySubsidizeDto> findAllByUser(SessionUserDto sessionUserDto);

    /**
     * 更新单个入伍补助
     * @param joinArmySubsidize
     * @throws XDException
     */
    public void update(JoinArmySubsidize joinArmySubsidize);

    /**
     * 删除单个入伍补助
     * @param id
     * @throws XDException
     */
    public void delete(Long id);

    /**
     * 批量删除
     * @param ids
     */
    public void deleteBatch(List<Long> ids);
}
