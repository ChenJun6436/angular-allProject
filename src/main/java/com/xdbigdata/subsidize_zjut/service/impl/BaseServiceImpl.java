package com.xdbigdata.subsidize_zjut.service.impl;

import com.github.pagehelper.PageHelper;
import com.xdbigdata.subsidize_zjut.service.IBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

/**
 * Created by tangyijun on 2017/4/25.
 * good good study,day day up!
 */
@Service
//@Transactional
public abstract class BaseServiceImpl<T> implements IBaseService<T>{
    @Autowired
    protected Mapper<T> mapper;

    /**
     * 保存一个实体，null的属性也会保存，不会使用数据库默认值
     * @param entity
     * @return
     */
    public int save(T entity){
        return mapper.insert(entity);
    }

    public int delete(T entity){
        return mapper.deleteByPrimaryKey(entity);
    }

    /**
     * 更新所有值
     * @param entity
     * @return
     */
    public int update(T entity) {
        return mapper.updateByPrimaryKey(entity);
    }

    /**
     * 根据主键更新属性不为null的值,为null的值不会被更新
     * @param entity
     * @return
     */
    public int updateNotNull(T entity) {
        return mapper.updateByPrimaryKeySelective(entity);
    }

    public T findOne(Long id) {
        return  mapper.selectByPrimaryKey(id);
    }

    public List<T> findAll() {
        return mapper.selectAll();
    }

    /**
     * 单表分页查询
     *
     * @param pageNum
     * @param pageSize
     * @return
     */
    public List<T> findByPage(int pageNum, int pageSize){
        PageHelper.startPage(pageNum, pageSize);
        //Spring4支持泛型注入
        return mapper.selectAll();
    }
}
