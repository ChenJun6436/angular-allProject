package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.domain.Awards;
import com.xdbigdata.subsidize_zjut.domain.StudySituation;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by Administrator on 2017/6/7 0007.
 * 学生的学习情况相关操作
 */
@Mapper
public interface StudySituationMapper {
    /**
     * 保存记录学生的学习情况
     * @param studySituation
     */
    void saveStudySituation(StudySituation studySituation);

    /**
     * 修改学生的学习情况
     * @param studySituation
     */
    void updateStudySituation(StudySituation studySituation);
}
