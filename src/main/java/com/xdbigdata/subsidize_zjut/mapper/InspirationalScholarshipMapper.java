package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.DataAmountQueryCondititonDto;
import com.xdbigdata.subsidize_zjut.domain.InspirationalScholarship;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sky on 2017/5/25.
 */
@Mapper
public interface InspirationalScholarshipMapper {
    /**
     * 查询励志奖学金记录
     * @param collegeName 学院名称
     * @param gradeName 年级名称
     * @param studentSns 所属学生学号列表
     * @return
     */
    List<InspirationalScholarship> findByConditionAndInList(@Param("collegeName") String collegeName,
                                                            @Param("gradeName") String gradeName,
                                                            @Param("studentSns") List<String> studentSns);

    /**
     * 统计特定条件和用户下获得励志奖学金的学生人数
     * @param dataAmountQueryCondititonDto
     * @param studentSns
     * @return
     */
    Integer countPassStudentNumber(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                   @Param("studentSns") List<String> studentSns);

}
