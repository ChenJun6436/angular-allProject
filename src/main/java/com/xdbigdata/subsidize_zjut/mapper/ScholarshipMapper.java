package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.domain.GrantsAttachment;
import com.xdbigdata.subsidize_zjut.domain.Scholarship;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by Administrator on 2017/6/9 0009.
 */
@Mapper
public interface ScholarshipMapper {
    /**
     * 保存助学金资料
     * @param scholarship
     */
    void saveScholarship(Scholarship scholarship);

    /**
     * 通过学年获取国家励志奖学金
     * @param schoolYear
     * @return
     */
    Scholarship getScholarshipBySchoolYear(String schoolYear);

}
