package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.CollegeUser;
import com.xdbigdata.jwtService.domain.Instructor;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.domain.GrantsHistory;
import com.xdbigdata.subsidize_zjut.domain.Scholarship;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.ScholarshipMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsCommonService;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.service.IScholarshipActivitiService;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import com.xdbigdata.subsidize_zjut.util.UserUtil;
import org.activiti.engine.HistoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.history.HistoricProcessInstance;
import org.activiti.engine.history.HistoricTaskInstance;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by Administrator on 2017/6/8 0008.
 */
@Service
public class ScholarshipActivitiServiceImpl implements IScholarshipActivitiService {

    private final static String SCHOLARSHIP_KEY = "scholarship:";

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @Autowired
    private RuntimeService runtimeService;

    @Autowired
    private HistoryService historyService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private ScholarshipMapper scholarshipMapper;

    @Override
    public void startScholarshipApplyProcess(ScholarshipApplyMaterialDto scholarshipApplyMaterialDto) throws Exception {
       /* SessionUserDto user = (SessionUserDto) UserUtil.getLoginUser();*/
        SessionUserDto user = new SessionUserDto();
        user.setUserName("201520183");
        user.setUserType(5);
        if (user.getUserType() == EIntegerConstant.STUDENT_USER_TYPE.getValue()) {
            Student student = grantsJWTService.findStudentBySn(user.getUserName());
            if (student != null) {
                listPublicityResult();
                if (student.getPrimaryTeachingInstitution() == null) {
                    throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
                }
                Long collegeId = student.getPrimaryTeachingInstitution().getId();
                String studentApplyScholarshipKey = SCHOLARSHIP_KEY;
                Map<String, Object> stringObjectMap = setStartProcessVariable(student);
                ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(EGrantsVariable.PROCESS_DEFINITION_SCHOLARSHIP_KEY.getVariable(), studentApplyScholarshipKey, stringObjectMap);
                Task task = taskService.createTaskQuery().processInstanceId(processInstance.getProcessInstanceId()).singleResult();
                taskService.complete(task.getId(), stringObjectMap);
            } else {
                throw new Exception(EStringConstant.EXCEPTION_JWT.getValue());
            }
        } else {
            throw new Exception(EStringConstant.EXCEPTION_UNAUTHORIZED.getValue());
        }
    }

    @Override
    public List<ScholarshipCheckResultDto> listTasks() throws Exception {
        /*SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");*/
        /*String sn = sessionUserDto.getUserName();*/
        String sn = "323413";
        SessionUserDto sessionUserDto = new SessionUserDto();
        sessionUserDto.setUserName(sn);
       /* Integer userType = sessionUserDto.getUserType();*/
        List<ScholarshipCheckResultDto> result = new ArrayList<>();
        String bussinessLikeKey = SCHOLARSHIP_KEY;
        List<Task> tasks = taskService.createTaskQuery()
                .processInstanceBusinessKeyLikeIgnoreCase(bussinessLikeKey + "%")
                .active()
                .or()
                .includeProcessVariables()
                .taskAssignee(sn)
                .taskCandidateUser(sn)
                .endOr()
                .list();
        if (tasks == null || tasks.size() == 0) {
            List<HistoricProcessInstance> historyTask = getTaskListFromHistory(SCHOLARSHIP_KEY);
            if (historyTask != null && historyTask.size() > 0) {
                for (HistoricProcessInstance history : historyTask) {
                    Map<String, Object> processVariables = history.getProcessVariables();
                    ScholarshipCheckResultDto checkResult = (ScholarshipCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
                    checkResult.setTaskId(history.getId());
//                    checkResult.setProcessId(history.getSuperProcessInstanceId());
                    result.add(checkResult);
                }
            }
            return result;
        }
        Set<String> taskIds = new HashSet<>();
        for (Task task : tasks) {
            Map<String, Object> processVariables = task.getProcessVariables();
            ScholarshipCheckResultDto checkResult = (ScholarshipCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
            checkResult.setTaskId(task.getId());
            checkResult = setCheckResultByProcess(checkResult);
            taskService.setVariable(task.getId(), EGrantsVariable.CHECK_RESULT.getVariable(), checkResult);
            result.add(checkResult);
            taskIds.add(task.getId());
        }
        result.addAll(rejectTasksList(sessionUserDto, taskIds));
        return result;
    }

    @Override
    public void commitTasks(String stage) throws Exception {
        /*SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");*/
        SessionUserDto sessionUserDto = new SessionUserDto();
        sessionUserDto.setUserName("323413");
        List<Task> tasks = taskService.createTaskQuery()
                .taskCandidateOrAssigned(sessionUserDto.getUserName())
                .includeProcessVariables()
                .list();
        if (tasks != null && tasks.size() > 0) {
            for (Task task : tasks) {
                dealTask(task, stage);
            }
        }

    }

    @Override
    public void updateApplyTask(String taskId, Integer passStatus) throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        Integer userType = sessionUserDto.getUserType();
        Map<String, Object> variables = taskService.getVariables(taskId);
        ScholarshipCheckResultDto checkResultDto = (ScholarshipCheckResultDto) variables.get(EGrantsVariable.CHECK_RESULT.getVariable());
        checkResultDto.setRejectReason(checkResultDto.getRejectReason());
        if (EIntegerConstant.ADVISOR_USER_TYPE.getValue() == userType){
            checkResultDto.setAdvisorPass(passStatus);
        }else if (EIntegerConstant.COLLEGE_USER_TYPE.getValue() == userType){
            checkResultDto.setCollegePass(passStatus);
        }else if (EIntegerConstant.SCHOOL_USER_TYPE.getValue() == userType){
            checkResultDto.setSchoolPass(passStatus);
        }
        taskService.setVariable(taskId, EGrantsVariable.CHECK_RESULT.getVariable(), checkResultDto);
    }


    @Override
    public ScholarshipPublicityDto listPublicityResult() throws Exception {
        ScholarshipPublicityDto result = new ScholarshipPublicityDto();
        SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();
        String bussinessKey = null;
        List<ScholarshipCheckResultDto> checkResultList = getPublicityList();

       /* result.setResultList(checkResultList);*/
        return result;
    }


    private List<ScholarshipCheckResultDto> getPublicityList() {

        return null;
    }


    private Map<String, Object> setStartProcessVariable(Student student) throws Exception {
        ScholarshipCheckResultDto checkResult = new ScholarshipCheckResultDto();
        String currentSchoolYear = grantsJWTService.getCurrentSchoolYear();
        Scholarship scholarship= scholarshipMapper.getScholarshipBySchoolYear(currentSchoolYear);
        checkResult.setStudentName(student.getName());
        checkResult.setSn(student.getSn());
        checkResult.setCollege(student.getPrimaryTeachingInstitution() == null ? null : student.getPrimaryTeachingInstitution().getName());
        checkResult.setSchoolYear(currentSchoolYear);
        checkResult.setScholarshipName(scholarship.getName());
        Map variables = new HashMap();
        List<String> advisorSns = grantsJWTService.listAdvisorsSnsFromJWTByStudentSn(student.getSn());
        List<String> collegeSns = grantsJWTService.listCollegeSnsFromJWTByStudentSn(student.getSn());
        List<String> schoolSns = grantsJWTService.listSchoolSnsFromJWTByStudentSn(student.getSn());
        variables.put(EGrantsVariable.STUDENT_SN.getVariable(), student.getSn());
        variables.put(EGrantsVariable.CHECK_RESULT.getVariable(), checkResult);
        variables.put(EGrantsVariable.ADVISOR_USER_SNS.getVariable(), advisorSns);
        variables.put(EGrantsVariable.COLLEGE_USER_SNS.getVariable(), collegeSns);
        variables.put(EGrantsVariable.SCHOOL_USERS_SNS.getVariable(), schoolSns);
        return variables;
    }

    private void dealTask(Task task, String stage) throws Exception {
        Map<String, Object> processVariables = task.getProcessVariables();
        if ("45012".equals(task.getId())) {
            return;
        }
        ScholarshipCheckResultDto checkResult = (ScholarshipCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
        if (checkResult != null) {
            switch (stage) {
                case "advisorCheck"://辅导员审核
                    checkResult.setCollegeResult(checkResult.getAdvisorResult());
                    break;
                case "collegeCheck"://学院审核
                    checkResult.setCollegePublicityResult(checkResult.getCollegeResult());
                    break;
                case "collegePublicity"://学院公示
                    checkResult.setSchoolResult(checkResult.getCollegePublicityResult());
                    break;
                case "schoolCheck"://学校审核
                    checkResult.setSchoolPublicityResult(checkResult.getSchoolPublicityResult());
                    break;
                case "schoolPublicity"://学校公示,即认定完成
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


    private List<HistoricProcessInstance> getTaskListFromHistory(String bussinessLikeKey) {
        List<HistoricTaskInstance> tasks = historyService.createHistoricTaskInstanceQuery()
                .processInstanceBusinessKeyLikeIgnoreCase(bussinessLikeKey)
                .list();
        Set<String> processId = new HashSet<>();
        for (HistoricTaskInstance instance : tasks) {
            processId.add(instance.getProcessInstanceId());
        }
        List<HistoricProcessInstance> processInst = null;
        if (processId != null && processId.size() > 0) {
            processInst = historyService.createHistoricProcessInstanceQuery()
                    .processInstanceIds(processId)
                    .includeProcessVariables()
                    .list();
        }
        return processInst;
    }

    /**
     * @param sessionUserDto
     * @param taskIds
     * @return 获取不通过的任务
     */
    private List<ScholarshipCheckResultDto> rejectTasksList(SessionUserDto sessionUserDto, Set<String> taskIds) {
        String sn = sessionUserDto.getUserName();
        List<ScholarshipCheckResultDto> result = new ArrayList<>();
        List<HistoricTaskInstance> hisTasks = historyService.createHistoricTaskInstanceQuery()
                .processInstanceBusinessKeyLikeIgnoreCase(SCHOLARSHIP_KEY)
                .includeProcessVariables()
                .or()
                .taskAssignee(sn)
                .taskCandidateUser(sn)
                .finished()
                .endOr()
                .processUnfinished()
                .list();
        Map<String, ScholarshipCheckResultDto> processMaps = new HashedMap();
        for (HistoricTaskInstance hisTask : hisTasks) {
            Map<String, Object> processVariables = hisTask.getProcessVariables();
            ScholarshipCheckResultDto checkResult = (ScholarshipCheckResultDto) processVariables.get(EGrantsVariable.CHECK_RESULT.getVariable());
            if (checkResult != null && !taskIds.contains(checkResult.getTaskId())) {
                if ((checkResult.getAdvisorPass() != null && checkResult.getAdvisorPass() == 0)
                        || (checkResult.getCollegePass() != null && checkResult.getCollegePass() == 0)
                        || (checkResult.getCollegePublicityPass() != null && checkResult.getCollegePublicityPass() == 0)
                        || (checkResult.getSchoolPublicityPass() != null && checkResult.getSchoolPublicityPass() == 0)) {
                    processMaps.put(hisTask.getProcessInstanceId(), checkResult);

                }
            }

        }
        for (Map.Entry<String, ScholarshipCheckResultDto> entry : processMaps.entrySet()) {
            result.add(entry.getValue());
        }
        return result;
    }

    private ScholarshipCheckResultDto setCheckResultByProcess(ScholarshipCheckResultDto checkResult) {
        /*SessionUserDto sessionUserDto = (SessionUserDto) UserUtil.getLoginUser();*/
        SessionUserDto sessionUserDto = new SessionUserDto();
        sessionUserDto.setUserName("12164545");
        sessionUserDto.setUserType(EIntegerConstant.ADVISOR_USER_TYPE.getValue());
        if (sessionUserDto.getUserType() == EIntegerConstant.ADVISOR_USER_TYPE.getValue()) {
            return checkResult;
        } else if (sessionUserDto.getUserType() == EIntegerConstant.COLLEGE_USER_TYPE.getValue()) {
            if (checkResult.getAdvisorResult() != null && checkResult.getCollegeResult() == null) {
                checkResult.setCollegeResult(checkResult.getAdvisorResult());
            } else if (checkResult.getCollegeResult() != null && checkResult.getCollegePublicityResult() == null) {
                checkResult.setCollegePublicityResult(checkResult.getCollegeResult());
            }
        } else if (sessionUserDto.getUserType() == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
            if (checkResult.getCollegePublicityResult() != null && checkResult.getSchoolResult() == null) {
                checkResult.setSchoolResult(checkResult.getCollegePublicityResult());
            } else if (checkResult.getSchoolResult() != null && checkResult.getSchoolPublicityResult() == null) {
                checkResult.setSchoolPublicityResult(checkResult.getSchoolResult());
            }
        }
        return checkResult;
    }
}

