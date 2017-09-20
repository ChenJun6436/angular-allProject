package com.xdbigdata.subsidize_zjut.common.dto.para;

/**
 * Created by staunch on 2017/4/17.
 */
public class ReviewStudentLevelDto {
    private String taskId;//任务节点ID
    private String processInstanceId;//流程实例ID
    private String step;//执行的步骤 class advisor college collegeOpen school schoolOpen result
    private String nextStep;//当前步骤的下一步:这个参数前端不用传，后端会自动处理
    private String povertyLevel;//困难等级
    private Integer isPass;//是否通过 1：是；0：否

    public String getNextStep() {
        if (isPass == 1) {
            switch (step) {
                case "class":
                    nextStep = "advisor";break;
                case "advisor":
                    nextStep = "college";break;
                case "college":
                    nextStep = "collegeOpen";break;
                case "collegeOpen":
                    nextStep = "school";break;
                case "school":
                    nextStep = "schoolOpen";break;
                case "schoolOpen":
                    nextStep = "result";break;
            }
            return nextStep;
        }
        return nextStep;
    }

    public void setNextStep(String nextStep) {
        this.nextStep = nextStep;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getProcessInstanceId() {
        return processInstanceId;
    }

    public void setProcessInstanceId(String processInstanceId) {
        this.processInstanceId = processInstanceId;
    }

    public String getStep() {
        return step;
    }

    public void setStep(String step) {
        this.step = step;
    }

    public String getPovertyLevel() {
        if (isPass == 0) {
            return "驳回";
        }
        return povertyLevel;
    }

    public void setPovertyLevel(String povertyLevel) {
        this.povertyLevel = povertyLevel;
    }

    public Integer getIsPass() {
        return isPass;
    }

    public void setIsPass(Integer isPass) {
        this.isPass = isPass;
    }
}
