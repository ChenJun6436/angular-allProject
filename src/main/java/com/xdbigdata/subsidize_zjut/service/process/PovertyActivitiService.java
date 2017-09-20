package com.xdbigdata.subsidize_zjut.service.process;

import com.google.gson.reflect.TypeToken;
import com.xdbigdata.jwtService.domain.CollegeUser;
import com.xdbigdata.jwtService.domain.Instructor;
import com.xdbigdata.jwtService.domain.SchoolUser;
import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.jwtService.service.JWTStudentService;
import com.xdbigdata.subsidize_zjut.common.dto.PovertyApplyDto;
import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.StartProcessDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.CheckMaterialDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.PovertyLevelDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.ReviewStudentLevelDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.UpdateStudentStatusDto;
import com.xdbigdata.subsidize_zjut.common.dto.result.StudentStatusDto;
import com.xdbigdata.subsidize_zjut.domain.Log;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCommonMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertyStudentMapper;
import com.xdbigdata.subsidize_zjut.service.PovertyCommonService;
import com.xdbigdata.subsidize_zjut.util.GsonUtil;
import com.xdbigdata.subsidize_zjut.util.SessionUtil;
import org.activiti.engine.HistoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.history.HistoricTaskInstance;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

/**
 * 困难认定流程
 * Created by staunch on 2017/3/27.
 */
@SuppressWarnings("SpringJavaAutowiringInspection")
@Service
@Transactional
public class PovertyActivitiService {

//    /**
//     * 流程仓库service，用于管理流程仓库，例如：部署、删除、读取流程资源
//     */
//    @Autowired
//    private RepositoryService repositoryService;
//
    /**
     * 历史service，可以查询所有历史数据，例如：流程实例、任务、活动、变量、附件等
     */
    @Autowired
    private HistoryService historyService;//历史管理(执行完的数据的管理)
//
//    /**
//     * 身份service，可以管理和查询用户和用户组之间的关系
//     */
//    @Autowired
//    private IdentityService identityService;//组织机构管理
//
//    /**
//     * 表单service，用于读取和流程任务相关的表单数据
//     */
//    @Autowired
//    private FormService formService;//一个可选服务，任务表单管理
//
//    /**
//     * 引擎管理service，和具体业务无关，主要可以查询流程引擎配置、数据库、作业等
//     */
//    @Autowired
//    private ManagementService managementService;//
//
//    /**
//     * 运行时service，可以处理所有正在运行状态的流程实例、任务等
//     */
    @Autowired
    private RuntimeService runtimeService;//执行管理，包括启动、推进、删除流程实例等操作
//
    /**
     * 任务service，用于管理查询任务，例如：签收、办理、指派等
     */
    @Autowired
    private TaskService taskService;//任务节点管理

    @Autowired
    private PovertyCommonMapper povertyCommonMapper;
    @Autowired
    private PovertyCommonService povertyCommonService;
    @Autowired
    private JWTStudentService jwtStudentService;
//    @Autowired
//    private PovertyCollegeMapper povertyCollegeMapper;
    @Autowired
    private PovertyStudentMapper povertyStudentMapper;
    //该变量用于流程变量中sn和userType的间隔符
    //用户类型 1:学校用户；2：学院；3：辅导员；4：班级用户；5：学生
    private static String key = "+";
    //补录用户
    public static final String ADDITIONAL_CLASS = "ADDITIONAL_CLASS";
    public static final String ADDITIONAL_ADVISOR = "ADDITIONAL_ADVISOR";
    public static final String ADDITIONAL_COLLEGE = "ADDITIONAL_COLLEGE";
    public static final String ADDITIONAL_SCHOOL = "ADDITIONAL_SCHOOL";
//
//
    private StartProcessDto getStudentLeader(String studentId,boolean flage) throws Exception {
        StartProcessDto startProcessDto = new StartProcessDto();
        startProcessDto.setStudentId(studentId + key + 5);
        List<Student> classesList = GsonUtil.getGson().fromJson(jwtStudentService.getClassUserByStudent(studentId), new TypeToken<List<Student>>() {
        }.getType());
        List<String> classUserIds = new ArrayList<>();
        for (Student classes : classesList) {
            classUserIds.add(classes.getSn() + key + 4);
        }
        if (flage) {
            //新增补录用户
            classUserIds.add(ADDITIONAL_CLASS);
        }
        startProcessDto.setClassUserId(classUserIds);
        List<Instructor> instructorList = GsonUtil.getGson().fromJson(jwtStudentService.getInstructorByStudent (studentId), new TypeToken<List<Instructor>>() {
        }.getType());
        List<String> advisorUserIds = new ArrayList<>();
        for (Instructor instructor : instructorList) {
            advisorUserIds.add(instructor.getSn() + key + 3);
        }
        if (flage) {
            //新增补录用户
            advisorUserIds.add(ADDITIONAL_ADVISOR);
        }
        startProcessDto.setAdvisorUserId(advisorUserIds);
        List<CollegeUser> collegeUserList = GsonUtil.getGson().fromJson(jwtStudentService.getCollegeByStudent(studentId), new TypeToken<List<CollegeUser>>() {
        }.getType());
        List<String> collegeUserIds = new ArrayList<>();
        for (CollegeUser collegeUser : collegeUserList) {
            collegeUserIds.add(collegeUser.getSn() + key + 2);
        }
        if (flage) {
            //新增补录用户
            collegeUserIds.add(ADDITIONAL_COLLEGE);
        }
        startProcessDto.setCollegeUserId(collegeUserIds);
        List<SchoolUser> schoolUserList = GsonUtil.getGson().fromJson(jwtStudentService.getScoolUserByStudent(studentId), new TypeToken<List<SchoolUser>>() {
        }.getType());
        List<String> schoolUserIds = new ArrayList<>();
        for (SchoolUser schoolUser : schoolUserList) {
            schoolUserIds.add(schoolUser.getSn() + key + 1);
        }
        if (flage) {
            //新增补录用户
            schoolUserIds.add(ADDITIONAL_SCHOOL);
        }
        startProcessDto.setSchoolUserId(schoolUserIds);
        return startProcessDto;
    }
//
    /**
     * 开始某个困难认定流程
     */
    public String startProcess(String studentId,boolean flage) throws Exception {
        StartProcessDto startProcessDto = getStudentLeader(studentId,flage);
        Map<String, Object> variables = new HashMap<>();
        startProcessDto.setProcessId("povertyProcess");
        variables.put("studentId", startProcessDto.getStudentId());
        variables.put("classUserId", startProcessDto.getClassUserId());
        variables.put("advisorUserId", startProcessDto.getAdvisorUserId());
        variables.put("collegeUserId", startProcessDto.getCollegeUserId());
        variables.put("schoolUserId", startProcessDto.getSchoolUserId());
        PovertyApplyDto povertyApplyDto = new PovertyApplyDto();
        //获取该学生的组织机构信息
        // TODO: 2017/5/25 获取组织结构的地方可优化，直接从本地业务库中获取信息(但是会出现数据不是最新的问题)
        Student student = GsonUtil.getGson().fromJson(jwtStudentService.find(studentId), Student.class);
        povertyApplyDto.setCollegeName(student.getPrimaryTeachingInstitution() == null ? null : student.getPrimaryTeachingInstitution().getName());
        povertyApplyDto.setGradeName(student.getGrade() == null ? null : student.getGrade().getName());
        povertyApplyDto.setMajorName(student.getSecondaryTeachingInstitution() == null ? null : student.getSecondaryTeachingInstitution().getName());
        povertyApplyDto.setClassName(student.getClasses() == null ? null : student.getClasses().getName());
        povertyApplyDto.setClassResult("未进行");
        povertyApplyDto.setAdvisorResult("未进行");
        povertyApplyDto.setCollegeResult("未进行");
        povertyApplyDto.setCollegeOpenResult("未进行");
        povertyApplyDto.setSchoolResult("未进行");
        povertyApplyDto.setSchoolOpenResult("未进行");
        povertyApplyDto.setResult("未进行");
        povertyApplyDto.setName(student.getName());
        povertyApplyDto.setStudentId(studentId);

        //流程变量对象设置到流程中
        variables.put("povertyApplyDto", povertyApplyDto);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(startProcessDto.getProcessId(), studentId + ":poverty", variables);
        //提交材料
        List<Task> tasks = findTask(studentId + "+" + 5);
        if (tasks == null || tasks.size() != 1) {
            throw new PersonalException("学生提交材料失败，流程未开启");
        }
        commitData(tasks.get(0));
        //设置学生状态为 2：辅导员用户审核材料
        UpdateStudentStatusDto updateStudentStatusDto = new UpdateStudentStatusDto();
        updateStudentStatusDto.setStatus(2);
        updateStudentStatusDto.setStudentId(studentId);
        povertyCommonMapper.setStudentStatus(updateStudentStatusDto);
        //新增日志
        Log log = new Log();
        log.setContent(student.getName() + "学生提交困难认定申请");
        log.setUserName(studentId);
        log.setType(5);
        povertyCommonService.saveLog(log);
        return processInstance.getId();
    }
//
    /**
     * 根据辅导员/学生/学院/学校的id来查询他的任务
     *
     * @param userId 辅导员/学生/学院/学校的id
     * @return
     */
    public List<Task> findTask(String userId) {
        //historyService.createHistoricTaskInstanceQuery().unfinished().
        List<Task> tasks = taskService.createTaskQuery().taskCandidateOrAssigned(userId).list();
        //List<HistoricTaskInstance> list = historyService.createHistoricTaskInstanceQuery().processInstanceBusinessKey("").includeProcessVariables().list();
        //for (HistoricTaskInstance hti : list) {
        //    Map<String, Object> processVariables = hti.getProcessVariables();
        //    processVariables.get("")
        //}
        return tasks;
    }
//
    /**
     * 班级/辅导员用户获取需要审核学生材料的列表
     *
     * @return
     * @throws Exception
     */
    public List<PovertyApplyDto> listCheckMaterials() throws Exception {
        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        String sn = sessionUserDto.getUserName();
        List<PovertyApplyDto> povertyApplyDtoList = new ArrayList<>();
        //获取班级用户的任务列表
        List<Task> tasks = findTask(sn + "+" + sessionUserDto.getUserType());
        if (tasks == null || tasks.size() == 0) {
            return povertyApplyDtoList;
        }
        for (Task task : tasks) {
            String processId = task.getProcessInstanceId();
            List<HistoricTaskInstance> list = historyService.createHistoricTaskInstanceQuery().processInstanceId(processId).includeProcessVariables().list();
            for (HistoricTaskInstance historicTaskInstance : list) {
                Map<String, Object> variables = historicTaskInstance.getProcessVariables();
                PovertyApplyDto povertyApplyDto;
                if (variables.get("povertyApplyDto") != null) {
                    povertyApplyDto = (PovertyApplyDto) variables.get("povertyApplyDto");
                    povertyApplyDto.setTaskId(task.getId());
                    povertyApplyDto.setProcessInstanceId(processId);
                    StudentStatusDto studentStatusDto = povertyStudentMapper.getStudentStatus(povertyApplyDto.getStudentId());
                    if (studentStatusDto != null && studentStatusDto.getStatus() < 3) {
                        povertyApplyDtoList.add(povertyApplyDto);
                    }
                    break;
                }
            }
        }
        return povertyApplyDtoList;
    }
//
    /**
     * 提交困难认定材料
     * SubmitMaterialDto
     */
    public void commitData(Task task) {
        taskService.complete(task.getId());
    }
    /**
     * 班级用户审核学生困难认定材料
     */
    public void classMaterialPass(CheckMaterialDto checkMaterialDto) {
        Map<String, Object> variables = runtimeService.getVariables(checkMaterialDto.getProcessInstanceId());
        variables.put("classMaterialPass", checkMaterialDto.getIsPass());
        taskService.complete(checkMaterialDto.getTaskId(), variables);
        //设置学生状态为 2：辅导员用户审核材料
        UpdateStudentStatusDto updateStudentStatusDto = new UpdateStudentStatusDto();
        if (checkMaterialDto.getIsPass() == 0) {
            updateStudentStatusDto.setStatus(-1);
            removeProcess(checkMaterialDto.getProcessInstanceId());
        } else {
            updateStudentStatusDto.setStatus(2);
        }
        updateStudentStatusDto.setStudentId(variables.get("studentId").toString().split("\\+")[0]);
        povertyCommonMapper.setStudentStatus(updateStudentStatusDto);
    }
//
    /**
     * 辅导员审核学生困难认定材料
     */
    public void advisorMaterialPass(CheckMaterialDto checkMaterialDto) {
        Map<String, Object> variables = runtimeService.getVariables(checkMaterialDto.getProcessInstanceId());
        variables.put("advisorMaterialPass", checkMaterialDto.getIsPass());
        taskService.complete(checkMaterialDto.getTaskId(), variables);
        //设置学生状态为 3：辅导员用户审核
        UpdateStudentStatusDto updateStudentStatusDto = new UpdateStudentStatusDto();
        if (checkMaterialDto.getIsPass() == 0) {
            updateStudentStatusDto.setStatus(-1);
            removeProcess(checkMaterialDto.getProcessInstanceId());
        } else {
            updateStudentStatusDto.setStatus(3);
        }
        updateStudentStatusDto.setStudentId(variables.get("studentId").toString().split("\\+")[0]);
        povertyCommonMapper.setStudentStatus(updateStudentStatusDto);
    }
//
    /**
     * 班级用户/辅导员用户/学院用户/学校用户修改困难等级或者驳回
     */
    public void review(ReviewStudentLevelDto reviewStudentLevelDto) throws Exception {
        Map<String, Object> variables = runtimeService.getVariables(reviewStudentLevelDto.getProcessInstanceId());
        PovertyApplyDto povertyApplyDto = (PovertyApplyDto) variables.get("povertyApplyDto");
        variables.put(reviewStudentLevelDto.getStep() + "Pass", reviewStudentLevelDto.getIsPass());
        UpdateStudentStatusDto updateStudentStatusDto = new UpdateStudentStatusDto();
        updateStudentStatusDto.setStudentId(variables.get("studentId").toString().split("\\+")[0]);
        switch (reviewStudentLevelDto.getStep()) {
            case "class":
                updateStudentStatusDto.setStatus(4);
                povertyApplyDto.setClassResult(reviewStudentLevelDto.getPovertyLevel());
                povertyApplyDto.setAdvisorResult(reviewStudentLevelDto.getPovertyLevel());
                break;
            case "advisor":
                updateStudentStatusDto.setStatus(5);
                povertyApplyDto.setAdvisorResult(reviewStudentLevelDto.getPovertyLevel());
                povertyApplyDto.setCollegeResult(reviewStudentLevelDto.getPovertyLevel());
                break;
            case "college":
                if (reviewStudentLevelDto.getIsPass() == 0) {
                    updateStudentStatusDto.setStatus(4);
                    povertyApplyDto.setCollegeResult(reviewStudentLevelDto.getPovertyLevel());
                } else if (reviewStudentLevelDto.getIsPass() == 1) {
                    updateStudentStatusDto.setStatus(6);
                    povertyApplyDto.setCollegeResult(reviewStudentLevelDto.getPovertyLevel());
                    povertyApplyDto.setCollegeOpenResult(reviewStudentLevelDto.getPovertyLevel());
                } else {
                    updateStudentStatusDto.setStatus(7);
                    povertyApplyDto.setCollegeResult(reviewStudentLevelDto.getPovertyLevel());
                    povertyApplyDto.setCollegeOpenResult(reviewStudentLevelDto.getPovertyLevel());
//                    povertyApplyDto.setResult(reviewStudentLevelDto.getPovertyLevel());
                    povertyApplyDto.setSchoolResult(reviewStudentLevelDto.getPovertyLevel());
                }
                break;
            case "collegeOpen":
                if (reviewStudentLevelDto.getIsPass() == 0) {
                    updateStudentStatusDto.setStatus(4);
                    povertyApplyDto.setCollegeOpenResult(reviewStudentLevelDto.getPovertyLevel());
                } else {
                    updateStudentStatusDto.setStatus(7);
                    povertyApplyDto.setCollegeOpenResult(reviewStudentLevelDto.getPovertyLevel());
                    povertyApplyDto.setSchoolResult(reviewStudentLevelDto.getPovertyLevel());
//                    povertyApplyDto.setResult(reviewStudentLevelDto.getPovertyLevel());
                }
                break;
            case "school":
                Integer isPass = reviewStudentLevelDto.getIsPass();
                if (isPass == 0) {
                    updateStudentStatusDto.setStatus(5);
                    povertyApplyDto.setSchoolResult(reviewStudentLevelDto.getPovertyLevel());
                } else if(isPass==2){
                    updateStudentStatusDto.setStatus(9);
                    povertyApplyDto.setResult(reviewStudentLevelDto.getPovertyLevel());
                }else{
                    updateStudentStatusDto.setStatus(8);
                    povertyApplyDto.setSchoolOpenResult(reviewStudentLevelDto.getPovertyLevel());
                }
                break;
            case "schoolOpen":
                updateStudentStatusDto.setStatus(9);
                povertyApplyDto.setResult(reviewStudentLevelDto.getPovertyLevel());
        }
        povertyCommonMapper.setStudentStatus(updateStudentStatusDto);
        taskService.complete(reviewStudentLevelDto.getTaskId(), variables);
    }
//
    /**
     * 获取流程中申请学生情况
     *
     * @param studentIds
     * @return
     * @throws Exception
     */
    public List<PovertyApplyDto> listPovertyApply(List<String> studentIds,SessionUserDto sessionUserDto) throws Exception {
//        SessionUserDto sessionUserDto = (SessionUserDto) SessionUtil.getSession().getAttribute("sessionUserDto");
        List<PovertyApplyDto> povertyApplyDtoList = new ArrayList<>();
        List<Task> tasks = findTask(sessionUserDto.getUserName() + "+" + sessionUserDto.getUserType());
        //这种情况是当前用户没有任务，只是查看而已，所以不返回每个流程的processInstanceId和taskId
        for (String studentId : studentIds) {
            List<HistoricTaskInstance> list = historyService.createHistoricTaskInstanceQuery().processInstanceBusinessKey(studentId + ":poverty").includeProcessVariables().list();
            for (HistoricTaskInstance historicTaskInstance : list) {
                Map<String, Object> variables = historicTaskInstance.getProcessVariables();
                //获取到流程中的发起人
                PovertyApplyDto povertyApplyDto;
                if (variables.get("povertyApplyDto") != null) {
                    povertyApplyDto = (PovertyApplyDto) variables.get("povertyApplyDto");
                    povertyApplyDto.setProcessInstanceId(historicTaskInstance.getProcessInstanceId());
                    povertyApplyDto.setTaskId(getTaskId(tasks, historicTaskInstance.getProcessInstanceId()));
                    StudentStatusDto studentStatusDto = povertyStudentMapper.getStudentStatus(povertyApplyDto.getStudentId());
                    if (studentStatusDto != null && studentStatusDto.getStatus() == null ? false : studentStatusDto.getStatus() >= 3) {
                        povertyApplyDtoList.add(povertyApplyDto);
                    }
                    break;
                }
            }
        }
        return povertyApplyDtoList;
    }
//
    /**
     * 根据流程ID查询现在正在执行的任务ID
     *
     * @param tasks
     * @param processInstanceId
     * @return
     */
    public String getTaskId(List<Task> tasks, String processInstanceId) {
        for (Task task : tasks) {
            if (processInstanceId.equals(task.getProcessInstanceId())) {
                return task.getId();
            }
        }
        return null;
    }
//
    /**
     * 修改单个学生的困难困难等级
     *
     * @param povertyLevelDto
     */
    public void updatePovertyLevel(PovertyLevelDto povertyLevelDto) {
        Map<String, Object> variables = runtimeService.getVariables(povertyLevelDto.getProcessInstanceId());
        PovertyApplyDto povertyApplyDto = (PovertyApplyDto) variables.get("povertyApplyDto");
        switch (povertyLevelDto.getStep()) {
            case "class":
                povertyApplyDto.setClassResult(povertyLevelDto.getLevel());
                break;
            case "advisor":
                povertyApplyDto.setAdvisorResult(povertyLevelDto.getLevel());
                break;
            case "college":
                povertyApplyDto.setCollegeResult(povertyLevelDto.getLevel());
                break;
            case "school":
                povertyApplyDto.setSchoolResult(povertyLevelDto.getLevel());
        }
        variables.put("povertyApplyDto", povertyApplyDto);
        runtimeService.setVariables(povertyLevelDto.getProcessInstanceId(), variables);
    }
//
//    /**
//     * 完成该用户下所有任务
//     *
//     * @param userId
//     */
//    public void completeTask(String userId) {
//        List<Task> tasks = findTask(userId);
//        for (Task task : tasks) {
//            taskService.complete(task.getId());
//        }
//    }
//
    /**
     * 删除流程
     */
    public void removeProcess(String id) {
        runtimeService.deleteProcessInstance(id, "学院取消学生申请");
        historyService.deleteHistoricProcessInstance(id);
    }

    /**
     * 获取所有流程实例ID
     * @return
     */
    public Set<String> getAllProcessInstanceId(SessionUserDto sessionUserDto) throws Exception{
        List<Student> students = povertyCommonService.getStudentsBySn(sessionUserDto.getUserName(),sessionUserDto);
        List<String> studentIds = povertyCommonService.findStudentIds(students,sessionUserDto);
        Set<String> processIds = new HashSet<>();
        for (String studentId : studentIds) {
            List<HistoricTaskInstance> list = historyService.createHistoricTaskInstanceQuery().processInstanceBusinessKey(studentId + ":poverty").includeProcessVariables().list();
            if (list != null && list.size() > 0) {
                processIds.add(list.get(0).getProcessInstanceId());
            }
        }
        return processIds;
    }
}
