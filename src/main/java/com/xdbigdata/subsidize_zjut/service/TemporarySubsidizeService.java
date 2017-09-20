package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.TemporarySubsidizesDto;
import com.xdbigdata.subsidize_zjut.common.dto.TemporarySubsidizesExcelDto;
import com.xdbigdata.subsidize_zjut.domain.TemporarySubsidize;

import java.util.List;

/**
 * Created by sky on 2017/5/12.
 */
public interface  TemporarySubsidizeService {
    /**
     * 单个新增
     * @param temporarySubsidize
     *  @return
     */
    public int insert(TemporarySubsidize temporarySubsidize) throws Exception;

    /**
     * 批量新增
     * @param temporarySubsidizesExcelDtos
     *  @return
        */
    public int insertBatch(List<TemporarySubsidizesExcelDto> temporarySubsidizesExcelDtos) throws Exception;

    /**
     * 查询特定用户下的临时补助名单
     * @param sessionUserDto
     * @return
     *
     */
    public List<TemporarySubsidizesDto> findAllByUser(SessionUserDto sessionUserDto) ;

    /**
     * 修改单条临时困难补助记录
     * @param temporarySubsidize
     */
    public void update(TemporarySubsidize temporarySubsidize);

    /**
     * 删除单个临时困难补助记录
     * @param id
     */
    public void delete(Long id);

    /**
     * 批量删除临时困难补助
     * @param ids
     */
    public void deleteBatch(List<Long> ids);

}
