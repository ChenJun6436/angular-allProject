package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.subsidize_zjut.domain.SpecialProvertyRecord;
import com.xdbigdata.subsidize_zjut.service.ISpecialProvertyRecordService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by sky on 2017/5/12.
 */
@Service
public class ISpecialProvertyRecordServiceImpl implements ISpecialProvertyRecordService {
    @Override
    public int save(SpecialProvertyRecord entity) {
        return 0;
    }

    @Override
    public int delete(SpecialProvertyRecord entity) {
        return 0;
    }

    @Override
    public int update(SpecialProvertyRecord entity) {
        return 0;
    }

    @Override
    public int updateNotNull(SpecialProvertyRecord entity) {
        return 0;
    }

    @Override
    public SpecialProvertyRecord findOne(Long id) {
        return null;
    }

    @Override
    public List<SpecialProvertyRecord> findAll() {
        return null;
    }

    @Override
    public List<SpecialProvertyRecord> findByPage(int pageNum, int pageSize) {
        return null;
    }
}
