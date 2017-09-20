package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.DataAmountQueryCondititonDto;
import com.xdbigdata.subsidize_zjut.common.dto.StudentLoanTimesDto;
import com.xdbigdata.subsidize_zjut.common.dto.SubsidizeGroupLevelDto;
import com.xdbigdata.subsidize_zjut.domain.LoanRecord;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sky on 2017/5/10.
 */
@Mapper
public interface LoanRecordMapper {
    /**
     * 插入贷款申请记录
     * @param loanRecord
     * @return
     */
    public int insertLoanApplication(@Param("loanRecord") LoanRecord loanRecord);

    /**
     * 修改贷款记录
     * @param loanRecord
     * @return
     */
    public int updateLoanApplication(@Param("loanRecord") LoanRecord loanRecord);

    /**
     * 根据学生学号集合查询所有贷款记录
     * @param studentSns
     * @return
     */
    public List<LoanRecord> queryAllInListAndByLoan(@Param("studentSns") List<String> studentSns,@Param("loanId") String loanId);

    /**
     * 根据学生学号统计申请贷款次数
     * @param studentSn
     * @return
     */
    public Long countTimesByStudentSn(@Param("studentSn") String studentSn);

    /**
     * 根据学号分组统计学生申请贷款次数
     * @param studentSns
     * @return
     */
    public List<StudentLoanTimesDto> countTimesGroupByStudentSn(@Param("studentSns") List<String> studentSns);

    /**
     * 批量更新学号在指定列表中的贷款记录
     * @param studentSns
     * @param loanId
     * @param status
     * @param result
     * @return
     */
    public int updateInList(@Param("studentSns") List<String> studentSns, @Param("loanId") String loanId,
                            @Param("status") Integer status, @Param("result") Integer result);

    /**
     * 批量更新学号不在指定列表中的贷款记录
     * @param studentSns
     * @param loanId
     * @param status
     * @param result
     * @return
     */
    public int updateNotInList(@Param("studentSns") List<String> studentSns, @Param("loanId") String loanId,
                            @Param("status") Integer status, @Param("result") Integer result);

    /**
     * 统计贷款的人数和金额
     * @param dataAmountQueryCondititonDto
     * @param studentSns
     * @return
     */
    SubsidizeGroupLevelDto countNumberAndMoney(@Param("dataAmountQueryCondititonDto") DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                     @Param("studentSns") List<String> studentSns);

}
