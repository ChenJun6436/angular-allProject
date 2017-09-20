package com.xdbigdata.subsidize_zjut.service.impl;

import com.google.gson.reflect.TypeToken;
import com.xdbigdata.jwtService.domain.CollegeUser;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.jwtService.service.JWTCollegeUserService;
import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.dto.SchoolRollCommon;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.ReviewStudentLevelDto;
import com.xdbigdata.subsidize_zjut.domain.*;
import com.xdbigdata.subsidize_zjut.mapper.PovertySchoolMapper;
import com.xdbigdata.subsidize_zjut.service.PovertyCommonService;
import com.xdbigdata.subsidize_zjut.service.PovertySchoolService;
import com.xdbigdata.subsidize_zjut.service.process.PovertyActivitiService;
import com.xdbigdata.subsidize_zjut.util.GsonUtil;
import com.xdbigdata.subsidize_zjut.util.ListMatch;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 学校相关service
 * Created by staunch on 2017/4/1.
 */
@SuppressWarnings("SpringJavaAutowiringInspection")
@Service
@Transactional
public class PovertySchoolServiceImpl implements PovertySchoolService {

    @Autowired
    private PovertySchoolMapper povertySchoolMapper;
    @Autowired
    private PovertyActivitiService povertyActivitiService;
    @Autowired
    private PovertyCommonService povertyCommonService;
    @Autowired
    private JWTCollegeUserService jwtCollegeUserService;
    @Autowired
    private JWTStudentService jwtStudentService;



    /**
     * 新增公告
     * @param notice
     */
    public void saveNotice(Notice notice) {
        povertySchoolMapper.saveNotice(notice);
        int id = notice.getId();
        String userName = SessionUtil.getUserName();
        povertySchoolMapper.updateNoticeAttachment(userName, id);
    }

    @Override
    public void reject2College(List<ReviewStudentLevelDto> reviewStudentLevelDtos) throws Exception {
        // TODO: 2017/4/19 消息提醒
        for (ReviewStudentLevelDto reviewStudentLevelDto : reviewStudentLevelDtos) {
            povertyActivitiService.review(reviewStudentLevelDto);
        }
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        Log log = new Log();
        log.setUserName(sessionUserDto.getUserName());
        log.setType(2);
        log.setContent(sessionUserDto.getRealName() + "学校用户将学生驳回到学院审核");
        povertyCommonService.saveLog(log);
    }

    @Override
    public void saveProcess(PovertyProcess povertyProcess) {
        povertySchoolMapper.saveProcess(povertyProcess);
    }

    @Override
    public PovertyProcess getProcessTime() {
        return povertySchoolMapper.getProcessTime();
    }

    @Override
    public Boolean validateProcess() {
        int count = povertySchoolMapper.validateProcess();
        return count == 0 ? true : false;
    }

    @Override
    public List<CollegeUser> listCollegeUsers() throws Exception{
        List<CollegeUser> collegeUserList = GsonUtil.getGson().fromJson(jwtCollegeUserService.findAll(),
                new TypeToken<List<CollegeUser>>(){}.getType());
        return collegeUserList;
    }

    @Override
    public List<PovertyAttachment> listNoticeFiles() {
        return povertySchoolMapper.listNoticeFiles(SessionUtil.getUserName());
    }

    @Override
    public void removeNotice(Integer id) {
        povertySchoolMapper.removeNotice(id);
    }

    @Override
    public List<Log> viewOperateLog(Integer type) {
        return povertySchoolMapper.viewOperateLog(type);
    }

    @Override
    public void startProcess() {
        povertySchoolMapper.startProcess();
    }

    @Override
    public List<HistoryResult> viewHistoryApply() throws Exception {
        List<HistoryResult> historyResults = povertySchoolMapper.viewHistoryApply();
        List<Student> students = GsonUtil.getGson().fromJson(jwtStudentService.findAll(), new TypeToken<List<Student>>() {
        }.getType());
        ListMatch.TreeNode root = new ListMatch().buildTree(students, 4);
        for (HistoryResult historyResult : historyResults) {
            Student student = ListMatch.searchStudentTree(root, historyResult.getStudentId(), 4, 0);
            if (student == null) {
                continue;
            }
            historyResult.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null : student.getPrimaryTeachingInstitution().getName());
            historyResult.setMajorName(student.getSecondaryTeachingInstitution() == null ? null : student.getSecondaryTeachingInstitution().getName());
            historyResult.setGradeName(student.getGrade() == null ? null : student.getGrade().getName());
            historyResult.setClassName(student.getClasses() == null ? null : student.getClasses().getName());
            historyResult.setStatus(SchoolRollCommon.getValue(student.getStatus()));
            historyResult.setName(student.getName());
        }
        return historyResults;
    }


}
