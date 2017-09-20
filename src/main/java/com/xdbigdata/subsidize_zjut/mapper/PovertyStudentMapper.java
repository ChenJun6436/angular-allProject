package com.xdbigdata.subsidize_zjut.mapper;

import com.xdbigdata.subsidize_zjut.common.dto.para.ValidateFile;
import com.xdbigdata.subsidize_zjut.common.dto.result.StudentStatusDto;
import com.xdbigdata.subsidize_zjut.domain.*;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by jinmingjiang on 2017/5/23.
 */
@Mapper
public interface PovertyStudentMapper {

    /**
     * 更新学生基本信息
     * @param studentInfo
     */
    void updateStudentInfo(StudentInfo studentInfo);

    /**
     *根据学号获取学生基本信息
     * @param sn
     * @return
     */
    StudentInfo getStudent(String sn);

    /**
     * 新增学生资助情况
     * @param studentSubsidy
     */
    void saveStudentSubsidy(StudentSubsidy studentSubsidy);

    /**
     * 获取某个学生已获资助情况
     * @param studentId
     * @return
     */
    List<StudentSubsidy> listStudentSubsidy(String studentId);

    /**
     * 删除某个获助
     * @param id
     */
    @Delete("delete from t_student_subsidy where id = #{id}")
    void removeStudentSubsidy(Integer id);

    /**
     * 获取某个学生的家庭成员信息
     * @param studentId
     * @return
     */
    List<StudentFamily> listStudentFamily(String studentId);

    /**
     * 删除某个家庭成员
     * @param id
     */
    @Delete("delete from t_student_family where id = #{id}")
    void removeStudentFamily(Integer id);

    /**
     * 新增学生家庭情况
     * @param studentFamily
     */
    void saveStudentFamily(StudentFamily studentFamily);

    /**
     * 验证文件是否重复上传
     * @param validateFile
     * @return
     */
    int validateUpload(ValidateFile validateFile);

    /**
     * 保存上传的附件
     * @param attachment
     */
    void saveAttachment(PovertyAttachment attachment);

    /**
     * 获取学生上传的附件
     * @param studentId
     * @return
     */
    @Select("select id,notice_id as noticeId,create_time as createTime,name,student_id as studentId,url from t_poverty_attachment where student_id = #{studentId}")
    List<PovertyAttachment> listAttachment(String studentId);

    /**
     * 查询学生当前状态
     * @param studentId
     * @return
     */
    StudentStatusDto getStudentStatus(String studentId);

    /**
     * 学生是否完善基本信息
     * @param studentId
     * @return
     */
    Integer isComplete(String studentId);

    /**
     * 删除材料附件
     * @param id
     * @return
     */
    @Delete("delete from t_poverty_attachment where id = #{id}")
    int removeAttachment(int id);

    /**
     * 学生查看学院公示
     * @param collegeName
     * @return
     */
    List<PublicPoverty> listPublicPoverty(String collegeName);

    /**
     * 查看学校公示
     * @return
     */
    List<PublicPoverty> listPublicPovertySchool();


    /**
     * 保存学生异议
     * @param dissent
     */
    void saveDissent(Dissent dissent);

    @Select("select * from t_dissent where plaintiff = #{studentId} and status = 1")
    List<Dissent> viewDealOpinion(@Param(value = "studentId") String studentId);

//    @Select("select count(1) from t_dissent where plaintiff = #{studentId}")
    int validateDissent(@Param(value = "studentId") String studentId,@Param(value = "type")Integer type);
}
