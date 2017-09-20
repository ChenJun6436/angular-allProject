package com.xdbigdata.subsidize_zjut.service.process;

import com.xdbigdata.subsidize_zjut.common.dto.SessionUserDto;
import com.xdbigdata.subsidize_zjut.common.dto.para.ProcessDto;
import com.xdbigdata.subsidize_zjut.domain.PovertyOpenTime;
import com.xdbigdata.subsidize_zjut.domain.PovertyProcess;
import com.xdbigdata.subsidize_zjut.mapper.PovertyCollegeMapper;
import com.xdbigdata.subsidize_zjut.mapper.PovertySchoolMapper;
import com.xdbigdata.subsidize_zjut.service.PovertyCommonService;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by jinmingjiang on 2017/6/10.
 */
@Service
@Log4j
public class AutoProcessService {

    @Autowired
    PovertySchoolMapper povertySchoolMapper;
    @Autowired
    PovertyCommonService povertyCommonService;
    @Autowired
    PovertyCollegeMapper povertyCollegeMapper;

//    @Scheduled(fixedRate = 1000*15)// 60秒执行一次
    @Async
    public void beginOpen(){
        log.info("【系统】开始扫描学院公示...");
        long now = new Date().getTime();
            List<PovertyOpenTime> openTimeAll = povertyCollegeMapper.findOpenTimeAll();
        for (PovertyOpenTime povertyOpenTime : openTimeAll) {
            long start = povertyOpenTime.getOpenStartTime().getTime();
            long end = povertyOpenTime.getOpenEndTime().getTime();
            Integer started = povertyOpenTime.getStarted();
            SessionUserDto sessionUserDto = new SessionUserDto();
            sessionUserDto.setUserName(povertyOpenTime.getCollegeUserSn());
            sessionUserDto.setUserType(2);
            if(now>start && now<end){
                //开始学院公示
                try{
                    if(started!=null && started==1){
                        continue;
                    }
                    log.info("【系统】自动发布学院用户["+povertyOpenTime.getCollegeUserSn()+"]的公示名单...");
                    ProcessDto processDto = new ProcessDto();
                    processDto.setIsPass(1);
                    processDto.setStep("college");
                    povertyCommonService.operateProcess(processDto,sessionUserDto);
                    povertyCollegeMapper.openTimeStart(povertyOpenTime.getCollegeId(),1);
                }catch (Exception e){
                    log.error("【系统】学院公示自动开启出错...");
                    e.printStackTrace();
                }
                log.info("【系统】学院用户["+povertyOpenTime.getCollegeUserSn()+"]的公示名单已发布...");
            }else if(now > end){
                //自动提交到学校审核
                try{
                    if(started!=null && started==2){
                        continue;
                    }
                    log.info("【系统】学院公示结束自动将学院用户["+povertyOpenTime.getCollegeUserSn()+"]的任务提交到学校审核");
                    ProcessDto processDto = new ProcessDto();
                    processDto.setIsPass(1);
                    processDto.setStep("collegeOpen");
                    povertyCommonService.operateProcess(processDto,sessionUserDto);
                    povertyCollegeMapper.openTimeStart(povertyOpenTime.getCollegeId(),2);
                }catch (Exception e){
                    log.error("【系统】学院公示自动关闭出错...");
                    e.printStackTrace();
                }
            }
        }
        log.info("【系统】扫描学院公示结束...");
    }

//    @Scheduled(fixedRate = 1000*15)// 60秒执行一次
    @Async
    public void beginOpenSchool(){
        log.info("【系统】开始自动扫描学校公示...");
        //获取学校公司的时间
        PovertyProcess processTime = povertySchoolMapper.getProcessTime();
        if(processTime != null){
            Date schoolOpenStartTime = processTime.getSchoolOpenStartTime();
            Date schoolOpenEndTime = processTime.getSchoolOpenEndTime();
            Integer schoolOpenStarted = processTime.getSchoolOpenStarted();
            if(schoolOpenStartTime != null && schoolOpenEndTime != null){
                long now = new Date().getTime();
                long startTime = schoolOpenStartTime.getTime();
                long endTime = schoolOpenEndTime.getTime();
                SessionUserDto sessionUserDto = new SessionUserDto();
                sessionUserDto.setUserName(processTime.getSchoolSn());
                sessionUserDto.setUserType(1);
                if(now > startTime && now < endTime){
                    // 发布学校公示
                    if(schoolOpenStarted != null && schoolOpenStarted==1){
                        return;
                    }
                    log.info("【系统】自动发布学校公示...");
                    ProcessDto processDto = new ProcessDto();
                    processDto.setIsPass(1);
                    processDto.setStep("school");
                    try {
                        povertyCommonService.operateProcess(processDto,sessionUserDto);
                        povertySchoolMapper.openTimeStart(1);
                    } catch (Exception e) {
                        log.error("【系统】学校自动开启公示发生错误...");
                        e.printStackTrace();
                    }
                }else if(now > endTime){
                    // 关闭学校公示并完成认定
                    if(schoolOpenStarted != null && schoolOpenStarted==2){
                        return;
                    }
                    log.info("【系统】自动关闭学校公示...");
                    ProcessDto processDto = new ProcessDto();
                    processDto.setIsPass(1);
                    processDto.setStep("schoolOpen");
                    try {
                        povertyCommonService.operateProcess(processDto,sessionUserDto);
                        povertySchoolMapper.openTimeStart(2);
                    } catch (Exception e) {
                        log.error("【系统】学校自动关闭公示发生错误...");
                        e.printStackTrace();
                    }

                }
            }
        }
        log.info("【系统】自动扫描学校公示结束...");
    }
}
