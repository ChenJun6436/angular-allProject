package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.domain.Loan;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * Created by sky on 2017/5/10.
 */
@Mapper
public interface LoanMapper {
    /**
     * 创建贷款项
     * @param loan
     * @return
     */
    public int insert(@Param("loan") Loan loan);

    /**
     * 根据id查找贷款项
     * @param id
     * @return
     */
    public Loan findById(Long id);

    /**
     * 根据学年查询贷款项
     * @param schoolYear
     * @return
     */
    public Loan findBySchoolYear(@Param("schoolYear") String schoolYear);

}
