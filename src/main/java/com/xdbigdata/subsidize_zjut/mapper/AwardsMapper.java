package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.domain.Awards;
import org.apache.ibatis.annotations.Mapper;

/**
 * 学生获奖情况的相关操作
 * Created by Administrator on 2017/6/7 0007.
 */
@Mapper
public interface AwardsMapper {
    /**
     * 保存记录学生的获奖记录
     * @param awards
     */
    void saveStudentAwards(Awards awards);

    /**
     * 删除学生的获奖记录
     * @param id
     */
    void deleteStudentAwards( Long id);
}
