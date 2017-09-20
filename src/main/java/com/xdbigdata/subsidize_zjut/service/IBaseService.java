package com.xdbigdata.subsidize_zjut.service;

import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by tangyijun on 2017/4/25.
 * good good study,day day up!
 */
@Service
public interface  IBaseService<T> {

    /**
     * 保存一个实体，null的属性也会保存，不会使用数据库默认值
     * @param entity
     * @return
     */
     int save(T entity);
    
     int delete(T entity);

    /**
     * 更新所有值
     * @param entity
     * @return
     */
     int update(T entity);

    /**
     * 根据主键更新属性不为null的值,为null的值不会被更新
     * @param entity
     * @return
     */
     int updateNotNull(T entity);

     T findOne(Long id) ;


    List<T> findAll();

    /**
     * 单表分页查询
     *
     * @param pageNum
     * @param pageSize
     * @return
     */
     List<T> findByPage(int pageNum, int pageSize);
    }
