package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.CollegeUser;
import com.xdbigdata.jwtService.domain.Grade;
import com.xdbigdata.jwtService.domain.Instructor;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.domain.GrantsApply;
import com.xdbigdata.subsidize_zjut.domain.GrantsHistory;
import com.xdbigdata.subsidize_zjut.domain.GrantsPublicity;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.GrantsCommonMapper;
import com.xdbigdata.subsidize_zjut.mapper.GrantsStudentMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsActivitiService;
import com.xdbigdata.subsidize_zjut.service.IGrantsCommonService;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.util.GrantsBussinessKeyUtil;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.activiti.engine.HistoryService;
import org.activiti.engine.ManagementService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.history.HistoricProcessInstance;
import org.activiti.engine.history.HistoricTaskInstance;
import org.activiti.engine.history.HistoricVariableInstance;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import java.util.*;

/**
 * 助学金流程相关操作
 * Created by Administrator on 2017/5/26.
 */
@Service
@Transactional
public class GrantsActivitiServiceImpl implements IGrantsActivitiService {

    //辅导员审核阶段
    public static final String STAGE_ADVISOR_CHECK = "advisorCheck";
    //学院审核
    public static final String STAGE_COLLEGE_CHECK = "collegeCheck";
    //学院公示
    public static final String STAGE_COLLEGE_PUBLICITY = "collegePublicity";
    //学校审核
    public static final String STAGE_SCHOOL_CHECK = "schoolCheck";
    //学校公示
    public static final String STAGE_SCHOOL_PUBLICITY = "schoolPublicity";
    //认定完成
    public static final String STAGE_COMPLETE = "grantsComplete";


    @Autowired
    private IGrantsJWTService grantsJWTService;

    @Autowired
    private RuntimeService runtimeService;

    @Autowired
    private HistoryService historyService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private ManagementService managementService;

    @Autowired
    private GrantsCommonMapper grantsCommonMapper;

    @Autowired
    private GrantsStudentMapper grantsStudentMapper;

    @Autowired
    private GrantsBussinessKeyUtil bussinessKeyUtil;

    @Autowired
    private IGrantsCommonService grantsCommonService;

    /**
     * 学生开启流程
     *
     * @param grantsApply
     */
    @Override
    public void startGrantsProcess(GrantsApply grantsApply) throws Exception {
        SessionUserDto user = (SessionUserDto) UserUtil.getLoginUser();
        if (user.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()) {
            String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
            Long applyCount = grantsStudentMapper.isApply(user.getUserName(), currentGrantsUuid);
            if (applyCount != 0) {
                throw new PersonalException("您已经申请过助学金，请不要重复申请！");
            }
            Student student = grantsJWTService.findStudentBySn(user.getUserName());
            if (student != null) {
                String currentSchoolYear = grantsJWTService.getCurrentSchoolYear();
                String povertyLevel = grantsCommonMapper.findStudentPovertyLevel(student.getSn(), currentSchoolYear);
                if (povertyLevel != null && (povertyLevel.equals(EStringConstant.HARD.getValue())
                        || povertyLevel.equals(EStringConstant.ORDINARY_HARD.getValue()))) {
                    if (student.getPrimaryTeachingInstitution() == null) {
                        throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
                    }
                    Long collegeId = student.getPrimaryTeachingInstitution().getId();
                    String bussinessKey = bussinessKeyUtil.getStudentApplyKey(collegeId, currentGrantsUuid, student.getSn());
                    Map<String, Object> variables = setStartProcessVariable(grantsApply, student, povertyLevel);
                    ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(EGrantsVariable.PROCESS_DEFINITION_KEY.getVariable(), bussinessKey, variables);
                    Task task = findTaskByProcessInstanceId(processInstance.getProcessInstanceId());
                    taskService.complete(task.getId(), variables);
                    grantsApply.setIsCommit(1);
                    grantsApply.setStudentSn(student.getSn());
                    grantsApply.setGrantsUuid(currentGrantsUuid);
                    grantsStudentMapper.saveStudentGrantsApplyInfo(grantsApply);
                } else {
                    throw new Exception("您不具备申请资格");
                }

            } else {
                throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
            }
        } else {
            throw new Exception(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }


    /**
     * 依据流程id查找任务id，用于学生申请时自己完成任务。
     *
     * @param processInstanceId
     * @return
     */
    private Task findTaskByProcessInstanceId(String processInstanceId) {
        return taskService.createTaskQuery().processInstanceId(processInstanceId).singleResult();
    }

    /**
     * 设置流程变量,学生开启流程时，学生无权选择等级，辅导员或下级根据材料选择等级
     *
     * @param grantsApply
     * @param student
     * @param povertyLevel
     * @return
     * @throws Exception
     */
    private Map<String, Object> setStartProcessVariable(GrantsApply grantsApply, Student student, String povertyLevel) throws Exception {
        String applyGrantsUuid = grantsCommonMapper.findCurrentGrants();
        String applyGrantsName = grantsCommonMapper.findGrantsNameByUuid(applyGrantsUuid);
        String currentSchoolYear = grantsJWTService.getCurrentSchoolYear();
        Map<String, Object> query = new HashedMap();
        if (student == null
                || student.getPrimaryTeachingInstitution() == null
                || student.getSecondaryTeachingInstitution() == null
                || student.getClasses() == null) {
            throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
        }
        query.put("collegeId", student.getPrimaryTeachingInstitution().getId());
        query.put("majorId", student.getSecondaryTeachingInstitution().getId());
        query.put("classesId", student.getClasses().getId());
        query.put("sn", student.getSn());
        query.put("currentSchoolYear", currentSchoolYear);
        List<GrantsNameWithLevelDto> grantsWithLevel = grantsStudentMapper.listAuthProcessGrants(query);
        List<String> applyDataUrls = grantsCommonMapper.listApplyMaterialUrls(grantsApply.getGrantsUuid(), student.getSn());
        String lastSchoolYear = grantsJWTService.findLastSchoolYear();
        Assert.notNull(lastSchoolYear, EStringConstant.EXCEPTION_JWT.getValue());
        List<String> lastYearGrantslevel = grantsCommonMapper.findSchoolYearGrantsLevel(lastSchoolYear, student.getSn());
        Map<String, Object> currentGrantsNum = new HashMap<>();
        List<String> currentGrantsName = grantsCommonMapper.findSchoolYearGrantsLevel(currentSchoolYear, student.getSn());
        if (currentGrantsName != null && currentGrantsName.size() > 0) {
            currentGrantsNum.put("currentNums", currentGrantsName.size());
            currentGrantsNum.put("currentNames", currentGrantsName);
        } else {
            currentGrantsNum.put("currentNums", 0);
            currentGrantsNum.put("currentNames", currentGrantsName);
        }
        Map<String, Object> variables = new HashedMap();
        GrantsCheckResultDto checkResult = new GrantsCheckResultDto();
        checkResult.setStudentName(student.getName());
        checkResult.setApplyGrantsName(applyGrantsName);
        checkResult.setSn(student.getSn());
        checkResult.setGrade(student.getGrade().getName());
        checkResult.setMajor(student.getSecondaryTeachingInstitution().getName());
        checkResult.setCollege(student.getPrimaryTeachingInstitution() == null ? null : student.getPrimaryTeachingInstitution().getName());
        checkResult.setPovertyLevel(povertyLevel);
        checkResult.setLastYearGrantsLevel(lastYearGrantslevel);
        checkResult.setCurrentGrantsNum(currentGrantsNum);
        checkResult.setApplyGrantsUuid(applyGrantsUuid);
        checkResult.setApplyDataUrl(applyDataUrls);
        checkResult.setGrants(grantsWithLevel);
        checkResult.setSchoolYear(currentSchoolYear);
        checkResult.setMaterialStatus(1);
        List<String> advisorSns = grantsJWTService.listGradeAdvisorSnsFromJWTByStudentSn(student.getSn());
        List<String> collegeSns = grantsJWTService.listCollegeSnsFromJWTByStudentSn(student.getSn());
        List<String> schoolSns = grantsJWTService.listSchoolSnsFromJWTByStudentSn(student.getSn());
        variables.put(EGrantsVariable.STUDENT_SN.getVariable(), grantsApply.getStudentSn());
        variables.put(EGrantsVariable.CHECK_RESULT.getVariable(), checkResult);
        variables.put(EGrantsVariable.ADVISOR_USER_SNS.getVariable(), advisorSns);
        variables.put(EGrantsVariable.COLLEGE_USER_SNS.getVariable(), collegeSns);
        variables.put(EGrantsVariable.SCHOOL_USERS_SNS.getVariable(), schoolSns);
        return variables;
    }

    /**
     * 驳回材料
     * 删除学生材料，重新设置
     *
     * @param rejectDto
     */
    @Override
    public void rejectTasks(GrantsRejectDto rejectDto) throws Exception {
        List<String> taskIds = rejectDto.getRejectTasks();
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        for (String taskId : taskIds) {
            Map<String, Object> variables = taskService.getVariables(taskId);
            GrantsCheckResultDto checkResultDto = (GrantsCheckResultDto) variables.get(EGrantsVariable.CHECK_RESULT.getVariable());
            checkResultDto.setApplyDataUrl(null);
            checkResultDto.setRejectReason(rejectDto.getRejectReason());
            checkResultDto.setMaterialStatus(0);
            checkResultDto.setRejectStage(rejectDto.getStage());
            grantsCommonMapper.deleteStudentApplyMaterial(checkResultDto.getApplyGrantsUuid(), checkResultDto.getSn());
            taskService.setVariable(taskId, EGrantsVariable.CHECK_RESULT.getVariable(), checkResultDto);
        }
    }

    /**
     * 更新学生申请助学金等级
     *
     * @param updateLevelDto
     */
    @Override
    public void updateGrantsLevel(GrantsUpdateLevelDto updateLevelDto) throws Exception {
        Map<String, Object> variables = taskService.getVariables(updateLevelDto.getTaskId());
        GrantsCheckResultDto checkResult = (GrantsCheckResultDto) variables.get(EGrantsVariable.CHECK_RESULT.getVariable());
        switch (updateLevelDto.getStage()) {
            case STAGE_ADVISOR_CHECK://辅导员审核
                checkResult.setAdvisorResult(updateLevelDto.getGrantsName());
                break;
            case STAGE_COLLEGE_CHECK://学院审核
                checkResult.setCollegeResult(updateLevelDto.getGrantsName());
                break;
            case STAGE_COLLEGE_PUBLICITY://学院公示
                checkResult.setCollegePublicityResult(updateLevelDto.getGrantsName());
                break;
            case STAGE_SCHOOL_CHECK://学校审核
                checkResult.setSchoolResult(updateLevelDto.getGrantsName());
                break;
            case STAGE_SCHOOL_PUBLICITY://学校公示
                checkResult.setSchoolPublicityResult(updateLevelDto.getGrantsName());
                break;
            case STAGE_COMPLETE://认定完成
                break;
            default:
                throw new Exception("更新等级阶段错误");
        }
        taskService.setVariable(updateLevelDto.getTaskId(), EGrantsVariable.CHECK_RESULT.getVariable(), checkResult);
    }

    /**
     * 依据当前登录用户查找用户的任务
     *
     * @return
     */
    @Override
    public List<GrantsCheckResultDto> listTasks() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String grantsUuid = grantsCommonMapper.findCurrentGrants();
        String sn = sessionUserDto.getUserName();
        Integer userType = sessionUserDto.getUserType();
        String bussinessLikeKey = getBussinessKeyLikeByUserType(userType, grantsUuid, sn);
        return getTaskListByType(sessionUserDto, bussinessLikeKey);
    }

    /**
     * 设置流程变量审核阶段的额赋值
     *
     * @param checkResult
     * @return
     */
    private GrantsCheckResultDto setCheckResultByProcess(GrantsCheckResultDto checkResult) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String grantsUuid = grantsCommonMapper.findCurrentGrants();
        if (sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()) {
            return checkResult;
        } else if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
            CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
            Long collegeId = collegeUser.getPrimaryTeachingInstitution().getId();
            GrantsPublicity collegePublicity = grantsCommonMapper.findCollegePublicityByGrantsUuidAndCollegeId(grantsUuid, collegeId);
            if (collegePublicity != null && collegePublicity.getStart() == 1) {//处在学院公示状态
                if (checkResult.getCollegeResult() != null && checkResult.getCollegePublicityResult() == null) {
                    checkResult.setCollegePublicityResult(checkResult.getCollegeResult());
                }
            } else {
                if (checkResult.getAdvisorResult() != null && checkResult.getCollegeResult() == null) {
                    checkResult.setCollegeResult(checkResult.getAdvisorResult());
                }
            }
        } else if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
            GrantsPublicity schoolPublicity = grantsCommonMapper.findSchoolPublicityByGrantsUuidAndStage(grantsUuid, "学校公示");
            if (schoolPublicity != null && schoolPublicity.getStart() == 1) {//学校公示
                if (checkResult.getSchoolResult() != null && checkResult.getSchoolPublicityResult() == null) {
                    checkResult.setSchoolPublicityResult(checkResult.getSchoolResult());
                }
            } else {//非学校公示阶段
                if (checkResult.getCollegePublicityResult() != null && checkResult.getSchoolResult() == null) {
                    checkResult.setSchoolResult(checkResult.getCollegePublicityResult());
                    ;
                }
            }
        }
        return checkResult;
    }

    /**
     * 1学校2学院3辅导员4学生
     */
    private String getBussinessKeyLikeByUserType(Integer userType, String grantsUuid, String sn) throws Exception {
        switch (userType) {
            case 1:
                return bussinessKeyUtil.getGrantsSchoolBussinessLikeKey(grantsUuid);
            case 2:
                CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sn);
                if (collegeUser.getPrimaryTeachingInstitution() != null) {
                    return bussinessKeyUtil.getGrantsCollegeBussinessLikeKey(grantsUuid, collegeUser.getPrimaryTeachingInstitution().getId().toString());
                } else {
                    throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
                }
            case 3:
                Instructor instructor = grantsJWTService.findInstructorBySn(sn);
                return bussinessKeyUtil.getGrantsAdvisorBussinessLikeKey(grantsUuid, instructor.getPrimaryTeachingInstitution().getId().toString());
            default:
                break;
        }
        return null;
    }

    /**
     * 依据当前登录用户获取任务列表
     *
     * @param sessionUserDto
     * @param bussinessLikeKey
     * @return
     */
    private List<GrantsCheckResultDto> getTaskListByType(SessionUserDto sessionUserDto, String bussinessLikeKey) throws Exception {
        List<GrantsCheckResultDto> result = new ArrayList<>();
        List<HistoricProcessInstance> instances = historyService.createNativeHistoricProcessInstanceQuery()
                .sql("select * from " + managementService.getTableName(HistoricProcessInstance.class)
                        + " P "+ " where P.BUSINESS_KEY_ like #{bussinessKey}")
                .parameter("bussinessKey", bussinessLikeKey)
                .list();
        List<Task> taskList = taskService.createTaskQuery()
                .processInstanceBusinessKeyLikeIgnoreCase(bussinessLikeKey)
                .taskCandidateOrAssigned(sessionUserDto.getUserName())
                .includeProcessVariables()
                .list();
        for (HistoricProcessInstance instance : instances) {
            if (instance != null) {
                String taskId = null;
                HistoricVariableInstance hisVar = historyService.createHistoricVariableInstanceQuery()
                        .processInstanceId(instance.getId())
                        .variableName(EGrantsVariable.CHECK_RESULT.getVariable())
                        .singleResult();
                GrantsCheckResultDto ele = (GrantsCheckResultDto) hisVar.getValue();
                ele.setProcessId(instance.getId());
                if (taskList != null && taskList.size() > 0){
                    for (Task task : taskList) {
                        if (task.getProcessInstanceId().equals(instance.getId())) {
                            taskId = task.getId();
                            continue;
                        }
                    }
                    if (taskId != null) {
                        ele.setTaskId(taskId);
                    }else {
                        if (sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()){
                            continue;
                        }
                    }
                    result.add(ele);
                }else {
                    ele.setTaskId(null);
                    result.add(ele);
                }
            }
        }
        return result;
    }


    /**
     * 提交任务，转交下一步
     *
     * @param stage
     */
    @Override
    public void commitTasks(String stage) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        List<Task> tasks = taskService.createTaskQuery()
                .taskCandidateOrAssigned(sessionUserDto.getUserName())
                .includeProcessVariables()
                .list();
        passTask(tasks, stage);

//        if (tasks != null && tasks.size() > 0) {
//            if (checkTaskIsOverflowByStage(listTasks(),stage)) {
//                passTask(tasks, stage);
//            }else {
//                throw new PersonalException("您所提交的名额超出分配名额");
//            }
//        }
    }

    /**
     * 查询提交阶段是否超出名额限制
     *
     * @param results
     * @param stage
     * @return
     */
    private boolean checkTaskIsOverflowByStage(List<GrantsCheckResultDto> results, String stage) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        switch (stage) {
            case STAGE_ADVISOR_CHECK://辅导员审核
                if (sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()) {
                    List<Long> gradeIds = new ArrayList<>();
                    Instructor instructor = grantsJWTService.findInstructorBySn(sessionUserDto.getUserName());
                    if (instructor.getGradeInstructorRole() == null) {
                        throw new PersonalException("您不是年级辅导员，无权操作");
                    } else {
                        List<Grade> grades = instructor.getGradeInstructorRole().getGrades();
                        for (Grade grade : grades) {
                            gradeIds.add(grade.getId());
                        }
                    }
                    //获取每个年级分配的名额
                    List<GrantsAmountDto> gradeAmounts = grantsCommonMapper.sumGradeAmountById(currentGrantsUuid, gradeIds);
                    //遍历任务列表和已处理任务列表，对人数做出限定，得出每个年级通过的人数
                    //和分配的人数做比较
                    for (GrantsAmountDto grantsAmount : gradeAmounts) {
                        int count = 0;
                        for (GrantsCheckResultDto checkResult : results) {
                            if (!checkResult.getAdvisorResult().equals("未通过") && checkResult.getGrade().equals(grantsAmount.getGrantsName())) {
                                count++;
                            }
                        }
                        if (count <= grantsAmount.getAmount()) {
                        } else {
                            throw new PersonalException("您的" + grantsAmount.getGrantsName() + "超出名额限制！");
                        }
                    }
                } else {
                    throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
                }
                break;
            case STAGE_COLLEGE_CHECK://学院审核
                if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
                    CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
                    GrantsAmountDto grantsAmountDto = grantsCommonMapper.sumCollegeAmountByCollegeId(currentGrantsUuid, collegeUser.getPrimaryTeachingInstitution().getId());
                    int sum = 0;
                    for (GrantsCheckResultDto checkResult : results) {
                        if (!checkResult.getCollegeResult().equals("未通过")) {
                            sum++;
                        }
                    }
                    if (grantsAmountDto.getAmount() <= sum) {
                        return true;
                    } else {
                        throw new PersonalException(collegeUser.getPrimaryTeachingInstitution().getName() + "审核结果超出名额限制！");
                    }
                } else {
                    throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
                }
            case STAGE_COLLEGE_PUBLICITY://学院公示
                if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {

                } else {
                    throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
                }
                break;
            case STAGE_SCHOOL_CHECK://学校审核
                if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {

                } else {
                    throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
                }
                break;
            case STAGE_SCHOOL_PUBLICITY://学校公示
                if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {

                } else {
                    throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
                }
                break;
            case STAGE_COMPLETE://认定完成
                //获取助学金总的申请名额
                if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
                    Long totalGrantsAllot = grantsCommonMapper.sumGrantsSchoolAllot(currentGrantsUuid);
                    // TODO: 2017/6/10 学校审核人数
//                    historyService.createNativeHistoricProcessInstanceQuery()
//                            .sql("select * from " +managementService.getTableName(HistoricProcessInstance.class)
//                            + " HP where HP.BUSINESS_KEY_ like #{bussinessKey} and ")
//                            .singleResult();
                } else {
                    throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
                }
                break;
            default:
                return false;
        }
        return false;
    }


    //依据登录角色类型判断阶段，设置流程变量
    private void passTask(List<Task> tasks, String stage) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        for (Task task : tasks) {
            Map<String, Object> processVariables = task.getProcessVariables();
            GrantsCheckResultDto checkResult = (GrantsCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
            if (checkResult != null) {
                switch (stage) {
                    case STAGE_ADVISOR_CHECK://辅导员审核
                        checkResult.setAdvisorPass(1);
                        checkResult.setCollegeResult(checkResult.getAdvisorResult());
                        break;
                    case STAGE_COLLEGE_CHECK://学院审核
                        if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
                            CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
                            GrantsPublicity publicity = grantsCommonMapper.findPublicityTimeConfigByCollegeIdAndGrantsUuid(collegeUser.getPrimaryTeachingInstitution().getId(), currentGrantsUuid);
                            Date now = new Date();
                            if (now.after(publicity.getStartTime()) && now.before(publicity.getEndTime())) {//在公示阶段
                                throw new PersonalException("当前处在学院公示阶段，您无法提交任务！");
                            } else if (now.after(publicity.getEndTime())) {//公示阶段结束，直接提交任务到学校审核
                                // TODO: 2017/6/11 完成任务这里可能有问题 ，另外学校的还没写
                                checkResult.setCollegePass(1);
                                checkResult.setCollegePublicityPass(1);

                                checkResult.setSchoolResult(checkResult.getCollegeResult());
                            }
                        } else {
                            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
                        }
                        break;
                    case STAGE_SCHOOL_CHECK://学校审核
                        if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
                        }
                        checkResult.setSchoolPass(1);
                        checkResult.setSchoolPublicityResult(checkResult.getSchoolPublicityResult());
                        break;
                    default:
                        throw new Exception("提交任务阶段错误");
                }
                taskService.setVariable(task.getId(), EGrantsVariable.CHECK_RESULT.getVariable(), checkResult);
                taskService.complete(task.getId());
            } else {
                throw new PersonalException(EStringConstant.EXCEPTION_NULLPOINT.getValue());
            }
        }
    }

    /**
     * 最总认定结果到数据库
     *
     * @param checkResult
     * @return
     * @throws Exception
     */
    private GrantsHistory getFinalResultFromGrantsCheckResult(GrantsCheckResultDto checkResult) throws Exception {
        Student student = grantsJWTService.findStudentBySn(checkResult.getSn());
        if (student == null || student.getPrimaryTeachingInstitution() == null
                || student.getSecondaryTeachingInstitution() == null
                || student.getClasses() == null
                || student.getGrade() == null) {
            throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
        }
        GrantsHistory grantsHistory = new GrantsHistory();
        grantsHistory.setName(student.getName());
        grantsHistory.setSn(student.getSn());
        grantsHistory.setSchoolYear(checkResult.getSchoolYear());
        grantsHistory.setCollege(checkResult.getCollege());
        grantsHistory.setMajor(student.getSecondaryTeachingInstitution().getName());
        grantsHistory.setGrade(student.getGrade().getName());
        grantsHistory.setClasses(student.getClasses().getName());
        grantsHistory.setFinalGrantsName(checkResult.getFinalResult());
        grantsHistory.setFinalGrantsId(checkResult.getFinalGrantsId() == null ? null : Long.parseLong(checkResult.getFinalGrantsId()));
        grantsHistory.setApplyGrantsName(checkResult.getApplyGrantsName());
        grantsHistory.setApplyGrantsUuid(checkResult.getApplyGrantsUuid());
        return grantsHistory;
    }


    /**
     * 查找学生助学金申请进度
     *
     * @param grants
     * @return
     */
    @Override
    public GrantsDto findStudentApplyStatus(GrantsDto grants, Student student) throws Exception {
        if (grants != null) {
            String bussinessKey = bussinessKeyUtil.getStudentApplyKey(student.getPrimaryTeachingInstitution().getId(), grants.getUuid(), student.getSn());
            ProcessInstance instance = runtimeService.createProcessInstanceQuery()
                    .includeProcessVariables()
                    .processInstanceBusinessKey(bussinessKey)
                    .singleResult();
            if (instance != null) {//已申请
                Map<String, Object> processVariables = instance.getProcessVariables();
                GrantsCheckResultDto checkResultDto = (GrantsCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
                grants.setApplyDataUrls(checkResultDto.getApplyDataUrl());
                grants.setProcessId(instance.getProcessInstanceId());
                String stage = findStudentApplyCurrentStage(bussinessKey);
                if (checkResultDto.getMaterialStatus() == 0) {//材料被驳回
                    grants.setApplyStatus(-1);
                    grants.setRejectReason(checkResultDto.getRejectReason());
                    grants.setApplyProcess(stage);
                } else if (checkResultDto.getMaterialStatus() == 1) {//材料正常
                    grants.setApplyStatus(1);
                    grants.setApplyProcess(stage);
                }
            } else {//未申请 或 认定完成
                HistoricProcessInstance hisInstance = historyService.createHistoricProcessInstanceQuery()
                        .processInstanceBusinessKey(bussinessKey)
                        .includeProcessVariables()
                        .singleResult();
                if (hisInstance != null) { //认定完成
                    Map<String, Object> processVariables = hisInstance.getProcessVariables();
                    GrantsCheckResultDto checkResultDto = (GrantsCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
                    grants.setApplyStatus(1);
                    grants.setApplyProcess(null);
                    grants.setExecutionId(null);
                    grants.setApplyDataUrls(checkResultDto.getApplyDataUrl());
                    grants.setFinalResult(checkResultDto.getFinalResult());
                } else {//未申请
                    grants.setApplyStatus(0);
                    grants.setApplyProcess(null);
                    grants.setProcessId(null);
                    grants.setExecutionId(null);
                    grants.setApplyDataUrls(null);
                }
            }
        }
        return grants;
    }

    /**
     * 查找当前登录学生的申请处理状态
     *
     * @param bussinessKey
     * @return
     */
    private String findStudentApplyCurrentStage(String bussinessKey) {
        HistoricProcessInstance instance = historyService.createHistoricProcessInstanceQuery()
                .processInstanceBusinessKey(bussinessKey)
                .singleResult();
        String stage = historyService.createHistoricTaskInstanceQuery()
                .processInstanceBusinessKey(bussinessKey)
                .unfinished()
                .singleResult()
                .getName();
        return stage;
    }

    /**
     * 查看公示记录
     *
     * @return
     */
    @Override
    public GrantsPublicityDto listPublicityResult() throws Exception {
        GrantsPublicityDto result = new GrantsPublicityDto();
        List<GrantsCheckResultDto> checkResultList = new ArrayList<>();
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String currentUuid = grantsCommonMapper.findCurrentGrants();
        Long collegeId = findCollegeId();
        GrantsPublicity collegePublicity = grantsCommonMapper.findCollegePublicityByGrantsUuidAndCollegeId(currentUuid, collegeId);
        GrantsPublicity schoolPublicity = grantsCommonMapper.findSchoolPublicityByGrantsUuidAndStage(currentUuid, "学校公示");
        String bussinessKey = getPublicityBussinessKey(sessionUserDto);
        if (collegePublicity != null && collegePublicity.getStart() == 1 && collegePublicity.getCommit() == 0) {//学院公示
            result.setGrantsPublicity(collegePublicity);
            checkResultList = getPublicityList(bussinessKey, "学院公示");
        } else if (schoolPublicity != null && schoolPublicity.getStart() == 1 && schoolPublicity.getCommit() == 0) {//学校公示
            result.setGrantsPublicity(schoolPublicity);
            if (sessionUserDto.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()
                    || sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()
                    || sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()
                    || sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
                bussinessKey = bussinessKeyUtil.getGrantsSchoolBussinessLikeKey(currentUuid);
                checkResultList = getPublicityList( bussinessKey, "学校公示");
            } else {
                throw new PersonalException("未知角色");

            }
        } else {
            throw new PersonalException("请在公示阶段查看");
        }
        result.setResultList(checkResultList);
        return result;
    }

    private String getPublicityBussinessKey(SessionUserDto sessionUserDto) throws Exception {
        String bussinessKey = null;
        String currentUuid = grantsCommonMapper.findCurrentGrants();
        if (sessionUserDto.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()) {//学生用户
            Student student = grantsJWTService.findStudentBySn(sessionUserDto.getUserName());
            if (student == null || student.getPrimaryTeachingInstitution() == null) {
                throw new PersonalException(EStringConstant.EXCEPTION_JWT.getValue());
            }
            bussinessKey = bussinessKeyUtil.getGrantsCollegePublicityLikeKey(currentUuid, student.getPrimaryTeachingInstitution().getId().toString());
        } else if (sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()) {
            Instructor instructor = grantsJWTService.findInstructorBySn(sessionUserDto.getUserName());
            if (instructor == null || instructor.getPrimaryTeachingInstitution() == null) {
                throw new PersonalException(EStringConstant.EXCEPTION_JWT.getValue());
            }
            bussinessKey = bussinessKeyUtil.getGrantsCollegePublicityLikeKey(currentUuid, instructor.getPrimaryTeachingInstitution().getId().toString());
        } else if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
            CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
            if (collegeUser == null || collegeUser.getPrimaryTeachingInstitution() == null) {
                throw new PersonalException(EStringConstant.EXCEPTION_JWT.getValue());
            }
            bussinessKey = bussinessKeyUtil.getGrantsCollegePublicityLikeKey(currentUuid, collegeUser.getPrimaryTeachingInstitution().getId().toString());
        } else if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
            bussinessKey = bussinessKeyUtil.getGrantsSchoolBussinessLikeKey(currentUuid);
        } else {
            throw new PersonalException("未知角色");
        }
        return bussinessKey;
    }

    /**
     * 获取公示列表
     *
     * @param bussinessKey
     * @return
     */
    private List<GrantsCheckResultDto> getPublicityList(String bussinessKey, String stage) throws Exception{
//        Long collegeId = findCollegeId();
//        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        List<GrantsCheckResultDto> results = new ArrayList<>();
        if (stage.equals("学院公示")){
//            bussinessKey = "grants:"+currentGrantsUuid+collegeId+":%";
            List<HistoricProcessInstance> instances = historyService.createNativeHistoricProcessInstanceQuery()
                    .sql("select * from " + managementService.getTableName(HistoricProcessInstance.class)
                            + " P where P.BUSINESS_KEY_ like #{bussinessKey}")
                    .parameter("bussinessKey", bussinessKey)
                    .list();
            for (HistoricProcessInstance instance : instances) {
                if (instance != null) {
                    GrantsCheckResultDto ele = (GrantsCheckResultDto) runtimeService.getVariable(instance.getId(), EGrantsVariable.CHECK_RESULT.getVariable());
                    ele.setProcessId(instance.getId());
                    results.add(ele);
                }
            }
        }else if (stage.equals("学校公示")){
//            bussinessKey = "grants:%";
            List<HistoricProcessInstance> instances = historyService.createNativeHistoricProcessInstanceQuery()
                    .sql("select * from " + managementService.getTableName(HistoricProcessInstance.class)
                            + " P where P.BUSINESS_KEY_ like #{bussinessKey}")
                    .parameter("bussinessKey", bussinessKey)
                    .list();
            for (HistoricProcessInstance instance : instances) {
                if (instance != null) {
                    GrantsCheckResultDto ele = (GrantsCheckResultDto) runtimeService.getVariable(instance.getId(), EGrantsVariable.CHECK_RESULT.getVariable());
                    ele.setProcessId(instance.getId());
                    results.add(ele);
                }
            }
        }else {
            throw new PersonalException("请在公示阶段查看");
        }
        return results;
    }

    /**
     * 重新提交材料
     * 不覆盖驳回阶段，通过驳回阶段来判断谁驳回的谁处理
     *
     * @param grantsRecommitDto
     */
    @Override
    public void recommitMaterial(GrantsRecommitDto grantsRecommitDto) {
        String processId = grantsRecommitDto.getProcessId();
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        if (sessionUserDto.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()) {
            String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
            ProcessInstance instance = runtimeService.createProcessInstanceQuery()
                    .processInstanceId(grantsRecommitDto.getProcessId())
                    .includeProcessVariables()
                    .singleResult();
            List<String> applyMaterialUrls = grantsCommonMapper.listApplyMaterialUrls(currentGrantsUuid, sessionUserDto.getUserName());
            GrantsCheckResultDto checkResultDto = (GrantsCheckResultDto) instance.getProcessVariables().get(EGrantsVariable.CHECK_RESULT.getVariable());
            checkResultDto.setApplyDataUrl(applyMaterialUrls);
            checkResultDto.setMaterialStatus(1);//修改材料状态为正常
            checkResultDto.setRejectReason(null);//清除驳回原因
            runtimeService.setVariable(instance.getProcessInstanceId(), EGrantsVariable.CHECK_RESULT.getVariable(), checkResultDto);
        } else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }


    /**
     * 依据流程进行状态下载名单
     *
     * @param stage
     * @return
     */
    @Override
    public List<GrantsDownloadNameListDto> findDownloadNameListDataByStage(String stage) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        List<GrantsDownloadNameListDto> downloadList = new ArrayList<>();
        String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
        String bussinessKey = null;
        if (stage.equals(STAGE_ADVISOR_CHECK)) {//辅导员审核
            if (sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()) {
                Instructor instructor = grantsJWTService.findInstructorBySn(sessionUserDto.getUserName());
                bussinessKey = bussinessKeyUtil.getGrantsAdvisorBussinessLikeKey(currentGrantsUuid,
                        instructor.getPrimaryTeachingInstitution().getId().toString());
                List<Task> tasks = taskService.createTaskQuery()
                        .processInstanceBusinessKeyLikeIgnoreCase(bussinessKey)
                        .taskCandidateOrAssigned(sessionUserDto.getUserName())
                        .includeProcessVariables()
                        .list();
                downloadList = convertResultToDownloadList(tasks);
            } else {
                throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
            }
        } else if (stage.equals(STAGE_COLLEGE_CHECK) || stage.equals(STAGE_COLLEGE_PUBLICITY)) {//学院审核
            if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
                CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
                bussinessKey = bussinessKeyUtil.getGrantsCollegeBussinessLikeKey(currentGrantsUuid, collegeUser.getPrimaryTeachingInstitution().getId().toString());
                List<Task> tasks = taskService.createTaskQuery()
                        .processInstanceBusinessKeyLikeIgnoreCase(bussinessKey)
                        .taskCandidateOrAssigned(sessionUserDto.getUserName())
                        .includeProcessVariables()
                        .list();
                downloadList = convertResultToDownloadList(tasks);
            } else {
                throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
            }
        } else if (stage.equals(STAGE_SCHOOL_CHECK) || stage.equals(STAGE_SCHOOL_PUBLICITY)) {//学校审核  / 学校公示,即认定完成
            if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
                bussinessKey = bussinessKeyUtil.getGrantsSchoolBussinessLikeKey(currentGrantsUuid);
                List<Task> tasks = taskService.createTaskQuery()
                        .processInstanceBusinessKeyLikeIgnoreCase(bussinessKey)
                        .includeProcessVariables()
                        .list();
                downloadList = convertResultToDownloadList(tasks);
            } else {
                throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
            }
        } else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
        return downloadList;
    }


    /**
     * 将流程变量转换为下载名单列表
     *
     * @param tasks
     * @return
     */
    private List<GrantsDownloadNameListDto> convertResultToDownloadList(List<Task> tasks) {
        List<GrantsDownloadNameListDto> downloadList = new ArrayList<>();
        for (Task task : tasks) {
            GrantsDownloadNameListDto downloadNameListDto = new GrantsDownloadNameListDto();
            Map<String, Object> processVariables = task.getProcessVariables();
            GrantsCheckResultDto checkResultDto = (GrantsCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
            BeanUtils.copyProperties(checkResultDto, downloadNameListDto);
            downloadList.add(downloadNameListDto);
        }
        return downloadList;
    }

    /**
     * 审核被驳回的材料
     * 驳回材料会发生的阶段
     * 辅导员审核  advisorCheck
     * 学院审核    collegeCheck
     * 学院公示    collegePublicity
     * 学校审核    schoolCheck
     * 学校公示    schoolPublicity
     *
     * @param processId
     */
    @Override
    public void checkMaterial(String processId, Integer pass) {
        GrantsCheckResultDto checkResultDto = (GrantsCheckResultDto) historyService.createHistoricProcessInstanceQuery()
                .processInstanceId(processId)
                .includeProcessVariables()
                .singleResult()
                .getProcessVariables()
                .get(EGrantsVariable.CHECK_RESULT.getVariable());
        if (pass == 0) {//继续驳回
            //删除材料
            grantsCommonMapper.deleteStudentApplyMaterial(checkResultDto.getApplyGrantsUuid(), checkResultDto.getSn());
            checkResultDto.setMaterialStatus(EIntegerConstant.MATERIAL_REJECT.getValue());
        } else if (pass == 1) {//审核通过
            checkResultDto.setMaterialStatus(EIntegerConstant.MATERIAL_PASS.getValue());
        } else {
            throw new PersonalException("审核结果参数异常");
        }

    }
    /**
     * 查找
     *
     * @return
     * @throws Exception
     */
    private Long findCollegeId() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        Long collegeId = null;
        if (sessionUserDto.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()) {
            Student student = grantsJWTService.findStudentBySn(sessionUserDto.getUserName());
            collegeId = student.getPrimaryTeachingInstitution().getId();
        } else if (sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()) {
            Instructor instructor = grantsJWTService.findInstructorBySn(sessionUserDto.getUserName());
            collegeId = instructor.getPrimaryTeachingInstitution().getId();
        } else if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
            CollegeUser collegeUser = grantsJWTService.findCollegeUserBySn(sessionUserDto.getUserName());
            collegeId = collegeUser.getPrimaryTeachingInstitution().getId();
        }
        return collegeId;
    }

    /**
     * 完成助学金认定
     */
    @Override
    public void finishGrants() throws Exception{
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()){
            String currentGrantsUuid = grantsCommonMapper.findCurrentGrants();
            List<HistoricProcessInstance> hisInstances = historyService.createNativeHistoricProcessInstanceQuery()
                    .sql("select * from " + managementService.getTableName(HistoricProcessInstance.class)
                            + " P where P.BUSINESS_KEY_ like #{bussinessKey}")
                    .parameter("bussinessKey", "grants:" + currentGrantsUuid + "%")
                    .list();
            List<HistoricTaskInstance> hisTasks = historyService.createNativeHistoricTaskInstanceQuery()
                    .sql("select * from " + managementService.getTableName(HistoricTaskInstance.class)
                            + " where NAME_ = '认定完成' AND END_TIME_ IS NULL")
                    .list();
            for (HistoricTaskInstance hisTask : hisTasks) {
                Map<String, Object> variables = taskService.getVariables(hisTask.getId());
                GrantsCheckResultDto result = (GrantsCheckResultDto) variables.get(EGrantsVariable.CHECK_RESULT.getVariable());
                if (result != null){
                    result.setFinalGrantsId(grantsCommonMapper.findGrantsIdByNameWithLevel(result.getSchoolPublicityResult()).toString());
                    result.setFinalResult(result.getSchoolPublicityResult());
                    taskService.setVariable(hisTask.getId(),EGrantsVariable.CHECK_RESULT.getVariable(),result);
                    taskService.complete(hisTask.getId());
                    GrantsHistory history = getFinalResultFromGrantsCheckResult(result);
                    grantsCommonMapper.saveGrantsResult(history);
                }
            }
        }else {
            throw new PersonalException(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }
}
