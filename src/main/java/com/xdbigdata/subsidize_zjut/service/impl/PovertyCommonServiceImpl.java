package com.xdbigdata.subsidize_zjut.service.impl;

import com.google.gson.reflect.TypeToken;
import com.xdbigdata.jwtService.domain.*;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.jwtService.service.JWTCollegeUserService;
import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.OpenTimeDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.ProcessDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.ReviewStudentLevelDto;
import com.xdbigdata.subsidize_zjut.domain.*;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCollegeMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCommonMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertySchoolMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertyStudentMapper;
import com.xdbigdata.subsidize_zjut.service.PovertyCommonService;
import com.xdbigdata.subsidize_zjut.service.PovertySchoolService;
import com.xdbigdata.subsidize_zjut.service.process.PovertyActivitiService;
import com.xdbigdata.subsidize_zjut.util.ExportExcelUtil;
import com.xdbigdata.subsidize_zjut.util.GsonUtil;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import org.activiti.engine.task.Task;
import org.apache.commons.collections.map.HashedMap;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileOutputStream;
import java.net.URLDecoder;
import java.util.*;

/**
 * Created by staunch on 2017/3/29.
 */
@Service
@Transactional
@SuppressWarnings("SpringJavaAutowiringInspection")
public class PovertyCommonServiceImpl implements PovertyCommonService {

    @Autowired
    private PovertyStudentMapper povertyStudentMapper;
    @Autowired
    private PovertyCommonMapper povertyCommonMapper;
    @Autowired
    private JWTStudentService jwtStudentService;
    @Autowired
    JWTCollegeUserService jwtCollegeUserService;
    @Autowired
    private PovertyActivitiService povertyActivitiService;
    @Autowired
    private PovertySchoolMapper povertySchoolMapper;
    @Autowired
    private PovertyCommonService povertyCommonService;
    @Autowired
    private PovertyCollegeMapper povertyCollegeMapper;
    @Autowired
    private PovertySchoolService povertySchoolServicel;


    public StudentInfo getStudentInfo(String sn) throws Exception {
        //查询本地业务相关学生的信息
        StudentInfo studentInfo = povertyStudentMapper.getStudent(sn);
        if(studentInfo == null){
            studentInfo = new StudentInfo();
        }
        //拼装后的业务对象
//        StudentInfo studentInfo = new StudentInfo();
//        if (studentInfo != null) {
//            BeanUtils.copyProperties(studentInfo, studentInfo);
//        }
        String result = jwtStudentService.find(sn);
        Student student = GsonUtil.getGson().fromJson(result, Student.class);
        if (student == null) {
            throw new PersonalException("jwt获取学生为null");
        }
        studentInfo.setName(student.getName() == null ? "假名字" : student.getName());
        studentInfo.setStudentId(student.getSn() == null ? "假学号" : student.getSn());
        studentInfo.setNationName("假民族");
        studentInfo.setIdCard("假身份证号");
        studentInfo.setAddress("假地址");
        studentInfo.setBirthday(new Date());
        studentInfo.setDorm("假宿舍");
        studentInfo.setSchoolTel(student.getPhone()==null? "123456":student.getPhone());
//        studentInfo.setProvinceName("假生源地");
        studentInfo.setPartyName("假政治面貌");
        studentInfo.setNationName("假民族");
//        studentInfo.setEmail(student.getEmail() == null ? "假邮箱" : student.getEmail());
//        studentInfo.setCellphone(student.getPhone() == null ? "123456" : student.getPhone());
        studentInfo.setGender(student.getGender() == null ? 0 : student.getGender());
        //studentInfoDto.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null : student.getPrimaryTeachingInstitution().getName());
        studentInfo.setCollegeName(student.getPrimaryTeachingInstitution() == null ? "假学院" : student.getPrimaryTeachingInstitution().getName());
        //studentInfoDto.setGradeName(student.getGrade() == null ? null : student.getGrade().getName());
        studentInfo.setGradeName(student.getGrade() == null ? "假年级" : student.getGrade().getName());
        //studentInfoDto.setMajorName(student.getSecondaryTeachingInstitution() == null ? null : student.getSecondaryTeachingInstitution().getName());
        studentInfo.setMajorName(student.getSecondaryTeachingInstitution() == null ? "假专业" : student.getSecondaryTeachingInstitution().getName());
        //studentInfoDto.setClassName(student.getClasses() == null ? null : student.getClasses().getName());
        studentInfo.setClassName(student.getClasses() == null ? "假班级" : student.getClasses().getName());
        return studentInfo;
    }


//    public List<StudentAward> listStudentAward(String studentId) {
//        return povertyStudentMapper.listStudentAward(studentId);
//    }
//
//
    public List<StudentFamily> listStudentFamily(String studentId) {
        return povertyStudentMapper.listStudentFamily(studentId);
    }
//
//
//    public List<StudentPunishment> listStudentPunishment(String studentId) {
//        return povertyStudentMapper.listStudentPunishment(studentId);
//    }
//
//
    public List<StudentSubsidy> listStudentSubsidy(String studentId) {
        return povertyStudentMapper.listStudentSubsidy(studentId);
    }
//
//
//    public List<DynamicManagementDto> listDynamicStudent(String sn) throws Exception {
//        List<Student> students = getStudentsBySn(sn);
//        List<String> studentIds = findStudentIds(students);
//        List<DynamicManagementDto> dynamicManagementDtos = povertyCommonMapper.listDynamicManagement(studentIds);
//        ListMatch.TreeNode root = new ListMatch().buildTree(students, 4);
//        for (DynamicManagementDto dynamicManagementDto : dynamicManagementDtos) {
//            Student student = ListMatch.searchStudentTree(root, dynamicManagementDto.getStudentId(), 4, 0);
//            dynamicManagementDto.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null : student.getPrimaryTeachingInstitution().getName());
//            dynamicManagementDto.setMajorName(student.getSecondaryTeachingInstitution() == null ? null : student.getSecondaryTeachingInstitution().getName());
//            dynamicManagementDto.setGradeName(student.getGrade() == null ? null : student.getGrade().getName());
//            dynamicManagementDto.setClassName(student.getClasses() == null ? null : student.getClasses().getName());
//            dynamicManagementDto.setStatus(SchoolRollCommon.getValue(student.getStatus()));
//        }
//        return dynamicManagementDtos;
//    }
//
    @Override
    public List<String> findStudentIds(List<Student> students,SessionUserDto sessionUserDto) {
        List<String> studentIds = new ArrayList<>();
        if (students == null) {
            return studentIds;
        }
        for (Student student : students) {
            studentIds.add(student.getSn());
        }
        return studentIds;
    }
//
    @Override
    public List<Student> getStudentsBySn(String sn,SessionUserDto userDto) throws Exception {
        //获得当前登录用户信息
        //学校用户1 学院用户2 辅导员用户3 学生用户4
        switch (userDto.getUserType()) {
            case 3:
                return GsonUtil.getGson().fromJson(jwtStudentService.findByInstructorUser(userDto.getUserName()), new TypeToken<List<Student>>() {
                }.getType());
            case 2:
                return GsonUtil.getGson().fromJson(jwtStudentService.findByCollegeUser(userDto.getUserName()), new TypeToken<List<Student>>() {
                }.getType());
            case 1:
                return GsonUtil.getGson().fromJson(jwtStudentService.findAll(), new TypeToken<List<Student>>() {
                }.getType());
            default:
                return GsonUtil.getGson().fromJson(jwtStudentService.findByAssiantUser(userDto.getUserName()), new TypeToken<List<Student>>() {
                }.getType());
        }
    }

    @Override
    public List<PovertyApplyDto> listStudentPovertyApply(SessionUserDto sessionUserDto) throws Exception {
        //获取当前用户管理的学生对象
        List<Student> students = getStudentsBySn(sessionUserDto.getUserName(),sessionUserDto);
        //获取学生的学号集合
        List<String> studentIds = findStudentIds(students,sessionUserDto);
        return povertyActivitiService.listPovertyApply(studentIds,sessionUserDto);
    }
//
//    @Override
//    public List<PovertyApplyDto> listStudentPovertyApply() throws Exception {
//        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
//        //获取当前用户管理的学生对象
//        List<Student> students = getStudentsBySn(sessionUserDto.getUserName());
//        //获取学生的学号集合
//        List<String> studentIds = findStudentIds(students);
//        return povertyActivitiService.listPovertyApply(studentIds);
//    }
//
    @Override
    public Boolean hasTask(String sn) {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        List<Task> tasks = povertyActivitiService.findTask(sn + "+" + sessionUserDto.getUserType());
        if (tasks == null || tasks.size() == 0) {
            return false;
        }
        return true;
    }
//
    @Override
    public Map<String, Object> getMaxStatus(SessionUserDto sessionUserDto) throws Exception {
        Map<String, Object> map = new HashedMap();
        Integer maxStatus = 0;//povertyCommonMapper.getMaxStatus();
        PovertyProcess povertyProcess = povertySchoolMapper.getProcessTime();
//        Date applyStart = povertyProcess.getApplyStart();
        if(povertyProcess==null){
            throw new Exception("困难认定未配置");
        }
        Date applyEnd = povertyProcess.getApplyEnd();

        DateTime endDataTime = new DateTime(applyEnd);
        String endDataTimeStr = endDataTime.toLocalDate().toString();
        List<Student> studentsBySn = povertyCommonService.getStudentsBySn(sessionUserDto.getUserName(),sessionUserDto);
        List<String> studentIds = povertyCommonService.findStudentIds(studentsBySn,sessionUserDto);
        int max = -1;
        if (studentIds != null && studentIds.size() > 0) {
            max = povertyCommonMapper.getStudentMaxStatus(studentIds);
        }
        map.put("status", maxStatus);
        map.put("maxStatus", max);
        map.put("processName", "困难认定");
        map.put("lastTime", endDataTimeStr);
//        switch (maxStatus) {
//            case 0:
//                map.put("processName", "流程未进行");
//                map.put("lastTime", "");
//                break;
//            case 1:
//                map.put("processName", "正在进行学生申请");
//                map.put("lastTime", povertyProcess.getApplyEnd());
//                break;
//            case 2:
//                map.put("processName", "正在进行班级审核");
//                map.put("lastTime", povertyProcess.getClassEnd());
//                break;
//            case 3:
//                map.put("processName", "正在进行辅导员审核");
//                map.put("lastTime", povertyProcess.getAdvisorEnd());
//                break;
//            case 4:
//                map.put("processName", "正在进行学院审核");
//                map.put("lastTime", povertyProcess.getCollegeOpenEnd());
//                break;
//            case 5:
//                map.put("processName", "正在进行学院公示");
//                map.put("lastTime", povertyProcess.getClassEnd());
//                break;
//            case 6:
//                map.put("processName", "正在进行学校审核");
//                map.put("lastTime", povertyProcess.getClassEnd());
//                break;
//        }
        return map;
    }

    @Override
    public void saveLog(Log log) {
        povertyCommonMapper.saveLog(log);
    }

    @Override
    public Boolean isApplyTime() {
        Integer count = povertyCommonMapper.isApplyTime();
        if (count > 0) {
            return true;
        }
        return false;
    }
//
    @Override
    public String downloadPovertyApply(SessionUserDto sessionUserDto) throws Exception {
        List<Student> students = getStudentsBySn(sessionUserDto.getUserName(),sessionUserDto);
        List<String> studentIds = findStudentIds(students,sessionUserDto);
        List<PovertyApplyDto> povertyApplyDtos = povertyActivitiService.listPovertyApply(studentIds,sessionUserDto);
        String fileName = UUID.randomUUID().toString() + ".xls";
        String rootPath = ResourceUtils.getFile("classpath:").getPath();
        rootPath = URLDecoder.decode(rootPath,"utf-8");
        File downloadPath = new File(rootPath + "/static/download");
        if (!downloadPath.exists()) {
            downloadPath.mkdirs();
        }
        FileOutputStream fs = new FileOutputStream(new File(downloadPath, fileName));
        ExportExcelUtil<PovertyApplyDto> exportExcelUtil = new ExportExcelUtil<>();
        exportExcelUtil.exportExcel("困难认定名单", povertyApplyDtos, fs, null);
        fs.flush();
        fs.close();
        String path = "/download/" + fileName;
        return path;
    }
//
//    @Override
//    public String downloadDyManage() throws Exception {
//        List<Student> students = getStudentsBySn(SessionUtil.getUserName());
//        List<String> studentIds = findStudentIds(students);
//        List<DynamicManagementDto> dynamicManagementDtos = povertyCommonMapper.listDynamicManagement(studentIds);
//        String fileName = UUID.randomUUID().toString() + ".xls";
//        String rootPath = ResourceUtils.getFile("classpath:").getPath();
//        File downloadPath = new File(rootPath + "/static/download");
//        if (!downloadPath.exists()) {
//            downloadPath.mkdirs();
//        }
//        FileOutputStream fs = new FileOutputStream(new File(downloadPath, fileName));
//        ExportExcelUtil<DynamicManagementDto> exportExcelUtil = new ExportExcelUtil<>();
//        exportExcelUtil.exportExcel("动态管理名单", dynamicManagementDtos, fs, null);
//        fs.flush();
//        fs.close();
//        String path = "/download/" + fileName;
//        return path;
//    }
//
    @Override
    public void operateProcess(ProcessDto processDto,SessionUserDto sessionUserDto) throws Exception {
        //必须当前用户下所有申请学生都处理到该步骤，才能继续往下走（金明江）
        //validateProcess(processDto,sessionUserDto);
        List<PovertyApplyDto> povertyApplyDtos;
        //正常提交
        if (processDto.getUserType() == null) {
            List<Student> students = povertyCommonService.getStudentsBySn(sessionUserDto.getUserName(),sessionUserDto);
            List<String> studentIds = povertyCommonService.findStudentIds(students,sessionUserDto);
            povertyApplyDtos = povertyActivitiService.listPovertyApply(studentIds,sessionUserDto);
            if(povertyApplyDtos==null || povertyApplyDtos.size()==0){
                return;
            }
            if (processDto.getStep().equals("college")) {
                //学院用户的提交新增公示
                povertyCollegeMapper.saveCollegeOpen(povertyApplyDtos);
            }else if(processDto.getStep().equals("school")){
                //学校用户的提交新增学校公示
                povertyCollegeMapper.saveSchoolOpen(povertyApplyDtos);
            }
        } else {//有驳回情况
            List<Student> studentList = new ArrayList<>();
            //驳回到辅导员
            if (processDto.getUserType() == 3) {
                studentList = GsonUtil.getGson().fromJson(jwtStudentService.findByInstructorUser(processDto.getUserName()), new TypeToken<List<Student>>() {
                }.getType());
            } else if (processDto.getUserType() == 2) {
                studentList = GsonUtil.getGson().fromJson(jwtStudentService.findByCollegeUser(processDto.getUserName()), new TypeToken<List<Student>>() {
                }.getType());
            }
            List<String> studentIdList = povertyCommonService.findStudentIds(studentList,sessionUserDto);
            povertyApplyDtos = povertyActivitiService.listPovertyApply(studentIdList,sessionUserDto);
            if(povertyApplyDtos==null || povertyApplyDtos.size()==0){
                throw new PersonalException("驳回的用户下没有申请学生");
            }
            //新增驳回记录
            Reject reject = new Reject();
            reject.setReason(processDto.getReason());
            reject.setRejectTime(new Date());
            reject.setUserName(processDto.getUserName());
            povertyCommonMapper.saveReject(reject);
        }
        //将困难认定结果写入历史表中,并且修改学生表中
        List<HistoryResult> historyResults = new ArrayList<>();
        PovertyProcess processTime = povertySchoolServicel.getProcessTime();
        for (PovertyApplyDto povertyApplyDto : povertyApplyDtos) {
            //只操作该节点有任务的流程
            if (povertyApplyDto.getTaskId() == null) {
                continue;
            }
            ReviewStudentLevelDto reviewStudentLevelDto = new ReviewStudentLevelDto();
            reviewStudentLevelDto.setIsPass(processDto.getIsPass());
            reviewStudentLevelDto.setStep(processDto.getStep());
            switch (processDto.getStep()) {
                case "class":
                    if (povertyApplyDto.getClassResult().equals("未进行")) {
                        throw new PersonalException("请选择学生困难等级后再提交");
                    }
                    reviewStudentLevelDto.setPovertyLevel(povertyApplyDto.getClassResult());
                    break;
                case "advisor":
                    reviewStudentLevelDto.setPovertyLevel(povertyApplyDto.getAdvisorResult());
                    break;
                case "college":
                    reviewStudentLevelDto.setPovertyLevel(povertyApplyDto.getCollegeResult());
                    break;
                case "collegeOpen":
                    reviewStudentLevelDto.setPovertyLevel(povertyApplyDto.getCollegeOpenResult());
                    break;
                case "school":
                    if(processDto.getIsPass()==2){
                        //完成认定
                        decidedToComplete(povertyApplyDto,processTime,historyResults);
                    }
                    reviewStudentLevelDto.setPovertyLevel(povertyApplyDto.getSchoolResult());
                    break;
                case "schoolOpen":
                    //完成认定
                    Integer isPass = processDto.getIsPass();
                    if (isPass == 1) {
                        decidedToComplete(povertyApplyDto,processTime,historyResults);
                    }
                    reviewStudentLevelDto.setPovertyLevel(povertyApplyDto.getSchoolOpenResult());
                    break;
                case "result":
                    break;
            }
            reviewStudentLevelDto.setProcessInstanceId(povertyApplyDto.getProcessInstanceId());
            reviewStudentLevelDto.setTaskId(povertyApplyDto.getTaskId());
            povertyActivitiService.review(reviewStudentLevelDto);
        }
        //批量插入历史表以及更新上次认定等级
        if (historyResults.size()>0) {
            povertySchoolMapper.batchInsertHistoryResult(historyResults);
        }
        //新增日志
        addOperateLog(processDto,sessionUserDto);
    }

    @Override
    public List<Notice> getNoticeList(Integer noticeId) throws Exception {
        return povertyCommonMapper.listNotice(noticeId);
    }
//
//    @Override
//    public void dyModifyPovertyLevel(DyModifyDto dyModifyDto) {
//        povertyCommonMapper.dyModifyPovertyLevel(dyModifyDto);
//    }
//
    @Override
    public List<Reject> getReject() {
        return povertyCommonMapper.getReject(SessionUtil.getUserName());
    }

    @Override
    public boolean isPovertyTime() {
        return povertyCommonMapper.isPovertyTime();
    }

    @Override
    public List<HistoryResult> lastYearApply(SessionUserDto sessionUserDto) throws Exception {
        String userName = sessionUserDto.getUserName();
        List<Student> studentsBySn = getStudentsBySn(userName,sessionUserDto);
        List<String> studentIds = findStudentIds(studentsBySn,sessionUserDto);
        List<PovertyApplyDto> povertyApplyDtos = povertyActivitiService.listPovertyApply(studentIds,sessionUserDto);
        List<String> ids = new ArrayList<>();
        for (PovertyApplyDto povertyApplyDto : povertyApplyDtos) {
            ids.add(povertyApplyDto.getStudentId());
        }
        studentIds.removeAll(ids);
        return povertyCommonMapper.lastYearApply(studentIds);
    }

    @Override
    public void setOpenTime(OpenTimeDto openTimeDto, SessionUserDto sessionUserDto) throws Exception {
        Integer userType = sessionUserDto.getUserType();
        String userName = sessionUserDto.getUserName();
        if(userType==2){
            //学院
            String s = jwtCollegeUserService.find(userName);
            CollegeUser collegeUser = GsonUtil.getGson().fromJson(s, CollegeUser.class);
            PrimaryTeachingInstitution college = collegeUser.getPrimaryTeachingInstitution();
            Long collegeId = college.getId();
            PovertyOpenTime povertyOpenTime = new PovertyOpenTime();
            povertyOpenTime.setCollegeId(collegeId);
            povertyOpenTime.setOpenStartTime(openTimeDto.getStartTime());
            povertyOpenTime.setOpenEndTime(openTimeDto.getEndTime());
            povertyOpenTime.setCollegeUserSn(userName);
            povertyCollegeMapper.updateOpenTime(povertyOpenTime);
            PovertyOpenTime openTimeByCollegeUser = povertyCollegeMapper.findOpenTimeByCollegeUser(userName);
            if(openTimeByCollegeUser == null){
                povertyCollegeMapper.saveOpenTime(povertyOpenTime);
            }else{
                povertyCollegeMapper.updateOpenTimeByCollegeUser(povertyOpenTime);
            }
        }else if(userType==1){
            //学校
            openTimeDto.setType(2);
            openTimeDto.setUserName(userName);
            povertySchoolMapper.updateOpenTime(openTimeDto);
        }
//        PovertyProcess processTime = povertySchoolMapper.getProcessTime();
    }

    @Override
    public OpenTimeDto getOpenTime(SessionUserDto sessionUserDto) throws Exception {
        String userName = sessionUserDto.getUserName();
        Integer userType = sessionUserDto.getUserType();
        OpenTimeDto openTimeDto = new OpenTimeDto();
        if(userType==1){
            //学校
            PovertyProcess processTime = povertySchoolMapper.getProcessTime();
            openTimeDto.setStartTime(processTime.getSchoolOpenStartTime());
            openTimeDto.setEndTime(processTime.getSchoolOpenEndTime());
            openTimeDto.setType(1);
        }else if(userType==2){
            //学院
            PovertyOpenTime openTimeByCollegeUser = povertyCollegeMapper.findOpenTimeByCollegeUser(userName);
            Integer started = openTimeByCollegeUser.getStarted();
            openTimeDto.setStartTime(openTimeByCollegeUser.getOpenStartTime());
            openTimeDto.setEndTime(openTimeByCollegeUser.getOpenEndTime());
            openTimeDto.setType(2);
        }
        return openTimeDto;
    }
//
//
    /**
     * 新增操作记录
     *
     * @param processDto
     */
    private void addOperateLog(ProcessDto processDto,SessionUserDto sessionUserDto) {
        Log log = new Log();
        log.setType(sessionUserDto.getUserType());
        StringBuilder sb = new StringBuilder();
        log.setUserName(sessionUserDto.getUserName());
        switch (processDto.getStep()) {
            case "class":
                sb.append("班级用户");
                sb.append(sessionUserDto.getRealName());
                sb.append("将学生审核提交到了辅导员审核");
                break;
            case "advisor":
                sb.append("辅导员用户");
                sb.append(sessionUserDto.getRealName());
                sb.append("将学生审核提交到了学院审核");
                break;
            case "college":
                sb.append("学院用户");
                sb.append(sessionUserDto.getRealName());
                if (processDto.getUserType() != null) {
                    sb.append("将学生审核驳回到");
                    sb.append(processDto.getRealName());
                    sb.append("辅导员");
                } else {
                    if (processDto.getIsPass() == 1) {
                        sb.append("将学生审核提交到了学院公示");
                    } else {
                        sb.append("将学生审核提交到了学校审核");
                    }
                }
                break;
            case "collegeOpen":
                sb.append("学院用户");
                sb.append(sessionUserDto.getRealName());
                if (processDto.getUserType() != null) {
                    sb.append("将学生审核驳回到");
                    sb.append(processDto.getRealName());
                    sb.append("辅导员");
                } else {
                    sb.append("将学生审核提交到了学校确认");
                }
                break;
            case "school":
                sb.append("学校用户");
                sb.append(sessionUserDto.getRealName());
                if (processDto.getUserType() != null) {
                    sb.append("将学生审核驳回到");
                    sb.append(processDto.getRealName());
                    sb.append("学院用户");
                } else {
                    sb.append("完成学生认定");
                }
                break;
        }
        log.setContent(sb.toString());
        povertyCommonMapper.saveLog(log);
    }
//
    /**
     * 验证当前操作是否可以继续
     * 特别说明：学生申请阶段必须完成学生申请和班级用户、辅导用户的材料审核，如果其他阶段时间一旦开始，即使延后申请截止时间学生也不能申请。只有修改数据库的时间表（金明江）
     * @param processDto
     * @return
     */
    private void validateProcess(ProcessDto processDto,SessionUserDto sessionUserDto) throws Exception{
        List<Integer> status = new ArrayList<>();
        //这里提交时间上必须是已经过了申请时间
//        if (isPovertyTime()) {
//            throw new PersonalException("请在困难认定时间段进行操作");
//        }
        List<Student> students = getStudentsBySn(sessionUserDto.getUserName(),sessionUserDto);
        List<String> studentIds = findStudentIds(students,sessionUserDto);
        int count = 0;
        switch (processDto.getStep()) {
            //班级用户提交到辅导员审核，这里必须该班级用户下所有学生的申请都审核完才能提交
            //0：未申请 1：班级用户审核材料 2：辅导员审核材料 3：民主评议 4：辅导员审核 5：学院审核 6：学院公示 7：学校确认
            //这里我的验证逻辑是该用户下所有申请学生（这里说明学生的student_info中的status>0），且status = 3,不能存在1,2的情况（金明江）
            case "class":
                status.add(1);
                status.add(2);
                count = povertyCommonMapper.getCountByStatus(studentIds, status);
                if (count > 0) {
                    throw new PersonalException("请在您所辖学生申请材料审核完成后进行该操作");
                }break;
            case "advisor":
                status.add(1);
                status.add(2);
                status.add(3);
                count = povertyCommonMapper.getCountByStatus(studentIds, status);
                if (count > 0) {
                    throw new PersonalException("请在您所辖学生提交完后进行该操作");
                }break;
            case "college":
                status.add(1);
                status.add(2);
                status.add(3);
                status.add(4);
                if (processDto.getIsPass() != 0) {
                    count = povertyCommonMapper.getCountByStatus(studentIds, status);
                }
                if (count > 0) {
                    throw new PersonalException("请在您所辖学生提交完后进行该操作");
                }
                break;
            case "collegeOpen":
                status.add(1);
                status.add(2);
                status.add(3);
                status.add(4);
                status.add(5);
                if (processDto.getIsPass() != 0) {
                    count = povertyCommonMapper.getCountByStatus(studentIds, status);
                }
                if (count > 0) {
                    throw new PersonalException("请在您所辖学生提交完后进行该操作");
                }
                //公示异议处理完后才能提交
                String userName = SessionUtil.getUserName();
                Integer userType = sessionUserDto.getUserType();
                List<Student> students1 = povertyCommonService.getStudentsBySn(userName,sessionUserDto);
                List<String> studentIds1 = povertyCommonService.findStudentIds(students1,sessionUserDto);
                List<Dissent> dissents = povertyCollegeMapper.listDissent(studentIds1, 1,userType);
                if (dissents != null && dissents.size() > 0) {
                    throw new PersonalException("请处理完公示异议后再提交到学校审核");
                }
                break;
            case "school":
                status.add(1);
                status.add(2);
                status.add(3);
                status.add(4);
                status.add(5);
                status.add(6);
                if (processDto.getIsPass() != 0) {
                    count = povertyCommonMapper.getCountByStatus(studentIds, status);
                }
                if (count > 0) {
                    throw new PersonalException("请在您所辖学生提交完后进行该操作");
                }
                break;
            case "schoolOpen":
                status.add(1);
                status.add(2);
                status.add(3);
                status.add(4);
                status.add(5);
                status.add(6);
                status.add(7);
                if (processDto.getIsPass() != 0) {
                    count = povertyCommonMapper.getCountByStatus(studentIds, status);
                }
                if (count > 0) {
                    throw new PersonalException("请在您所辖学生提交完后进行该操作");
                }
                break;
        }
    }

    private void decidedToComplete(PovertyApplyDto povertyApplyDto,PovertyProcess processTime,List<HistoryResult> historyResults) throws Exception {
        String studentId = povertyApplyDto.getStudentId();
        HistoryResult historyResult = new HistoryResult();
        historyResult.setStudentId(studentId);
        historyResult.setPovertyLevel(povertyApplyDto.getResult());
        String resultJson = jwtStudentService.find(studentId);
        Student student = GsonUtil.getGson().fromJson(resultJson, Student.class);
        PrimaryTeachingInstitution primaryTeachingInstitution = student.getPrimaryTeachingInstitution();
        SecondaryTeachingInstitution secondaryTeachingInstitution = student.getSecondaryTeachingInstitution();
        Grade grade = student.getGrade();
        Classes classes = student.getClasses();
        historyResult.setDate(new Date());
        historyResult.setYear(processTime.getSchoolYearName());
        historyResult.setYearId(processTime.getSchoolYearId());
        historyResult.setCollegeName(primaryTeachingInstitution==null? "":primaryTeachingInstitution.getName());
        historyResult.setMajorName(secondaryTeachingInstitution==null? "":secondaryTeachingInstitution.getName());
        historyResult.setGradeName(grade==null? "":grade.getName());
        historyResult.setClassName(classes==null? "":classes.getName());
        historyResult.setName(Objects.toString(student.getName(),""));
        historyResults.add(historyResult);
    }
}
