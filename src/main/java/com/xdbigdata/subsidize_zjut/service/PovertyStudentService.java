package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.dto.result.StudentStatusDto;
import com.xdbigdata.subsidize_zjut.domain.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by jinmingjiang on 2017/5/23.
 * 学生相关流程或业务
 */
public interface PovertyStudentService {
    void updateStudentInfo(StudentInfo studentInfo) throws Exception;

    void saveStudentSubsidy(StudentSubsidy studentSubsidy) throws Exception;

    /**
     * 删除学生已授资助
     * @param id
     */
    void removeStudentSubsidy(Integer id);

    /**
     * 新增学生家庭成员
     * @param studentFamily
     */
    void saveStudentFamily(StudentFamily studentFamily);

    /**
     * 删除学生家庭成员
     * @param id
     */
    void removeStudentFamily(Integer id);

    /**
     * 上传文件
     * @param file
     */
    void uploadFile(MultipartFile file)throws Exception;

    /**
     * 查询学生上传附件
     * @param studentId
     * @return
     */
    List<PovertyAttachment> listAttachment(String studentId);

    /**
     * 学生开启流程
     * @throws Exception
     */
    void startPovertyProcess(String sn)throws Exception;

    /**
     * 获取学生状态
     * @param sn
     * @return
     */
    StudentStatusDto getStudentStatus(String sn);

    /**
     * 学生是否完善基本信息
     * @param sn
     * @return
     */
    Boolean isComplete(String sn);

    /**
     * 删除学生上传的附件
     * @param id
     */
    void removeAttachment(int id);

    /**
     * 学生查看学院公示
     * @param sn
     * @return
     */
    List<PublicPoverty> listPublicPoverty(String sn)throws Exception;

    /**
     * 学生查看学校公示
     * @param sn
     * @return
     */
    List<PublicPoverty> listPublicPovertySchool(String sn)throws Exception;

    /**
     * 保存学生异议
     * @param dissents
     */
    void saveDissent(List<Dissent> dissents,Integer type) throws Exception;

    /**
     * 学生查看异议处理意见
     * @return
     */
    List<Dissent> viewDealOpinion();
}
