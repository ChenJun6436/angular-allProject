package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.subsidize_zjut.common.dto.GrantsConfigDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsListDto;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsUpdateDto;
import com.xdbigdata.subsidize_zjut.domain.Grants;
import com.xdbigdata.subsidize_zjut.domain.GrantsApplyQuota;
import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import com.xdbigdata.subsidize_zjut.mapper.GrantsCommonMapper;
import com.xdbigdata.subsidize_zjut.mapper.GrantsSchoolMapper;
import com.xdbigdata.subsidize_zjut.service.IGrantsJWTService;
import com.xdbigdata.subsidize_zjut.service.IGrantsSchoolService;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.xdbigdata.subsidize_zjut.common.dto.GrantsConfigDto.Config;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * Created by Administrator on 2017/5/24.
 */
@Service
@Transactional
public class GrantsSchoolServiceImpl implements IGrantsSchoolService {

    @Autowired
    private IGrantsJWTService grantsJWTService;

    @Autowired
    private GrantsSchoolMapper grantsSchoolMapper;

    /**
     * 助学金学生人数信息：学校总人数 +已经认定经济困难人数
     *
     * @return
     */
    @Override
    public Map findstudentNumInfo() throws Exception{
        Map<String,Object> result = new HashedMap();
        result.put("totalNum",grantsJWTService.countSchooolStudent());
        String currentSchoolYear = grantsJWTService.getCurrentSchoolYear();
        result.put("povertyNum",grantsSchoolMapper.countCurrentSchoolYearPovertyNum(currentSchoolYear));
        return result;
    }

    /**
     * 助学金保存
     *
     * @param grants
     * @return
     */
    @Override
    public String saveGrants(Grants grants) throws Exception {
        String uuid = UUID.randomUUID().toString();
        grants.setUuid(uuid);
        grantsSchoolMapper.saveGrants(grants);
        return uuid;
    }

    /**
     * 助学金列表
     *
     * @return
     */
    @Override
    public List<GrantsListDto> listGrants() throws Exception{
        List<GrantsListDto> grants = grantsSchoolMapper.listGrants();
        for (GrantsListDto grant : grants) {
            List<GrantsApplyQuota> validNewApplys = new ArrayList<>();
            List<GrantsApplyQuota> newApplys = grant.getNewApplys();
            if (newApplys != null ) {
                for (GrantsApplyQuota grantsApplyQuota : newApplys) {
                    grantsApplyQuota.setCollegeName(grantsJWTService.findCollegeNameById(grantsApplyQuota.getCollegeId()));
                    if (grantsApplyQuota.getStatus() == null){
                        validNewApplys.add(grantsApplyQuota);
                    }
                }
            }
            grant.setNewApplys(validNewApplys);
        }
        return grants;
    }

    /**
     * 修改助学金
     *
     * @param grants
     */
    @Override
    public void updateGrants(GrantsUpdateDto grants) throws Exception{
        String uuid  = grants.getUuid();
        grantsSchoolMapper.updateGrants(grants);
        grantsSchoolMapper.updateOtherGrantsCommonInfo(grants);
    }

    /**
     * 删除助学金
     *
     * @param id
     */
    @Override
    public void deleteGrantsById(Long id) throws Exception{
        grantsSchoolMapper.deleteGrantsById(id);
    }

    /**
     * 获取助学金学校给学院的配置
     *
     * @param grantsId
     * @return
     */
    @Override
    public GrantsConfigDto findCollegeConfigByGrantsId(Long grantsId) throws Exception{
        GrantsConfigDto collegeConfig =grantsSchoolMapper.findCollegeConfigByGrantsId(grantsId);
        if (collegeConfig == null){
            collegeConfig = new GrantsConfigDto();
            collegeConfig.setGrantsId(grantsId);
            List<GrantsConfigDto.Config> allColleges = grantsJWTService.getAllColleges();
            collegeConfig.setConfigs(allColleges);
        }else {
            List<GrantsConfigDto.Config> configs = collegeConfig.getConfigs();
            for (GrantsConfigDto.Config config : configs) {
                config.setName(grantsJWTService.findCollegeNameById(config.getId()));
            }
        }
        return collegeConfig;
    }

    /**
     * 保存学校分配名额到学院
     *
     * @param configDto
     */
    @Override
    public void saveOrUpdateCollegeConfig(GrantsConfigDto configDto) {
        List<Config> configs = configDto.getConfigs();
        if (configDto != null && configs != null && configs.size() > 0){
            validateDistributeAllot(configDto);
        }else {
            throw new PersonalException("保存学校配置参数错误");
        }
        if (configDto != null && configs !=  null && configs.size() > 0
                && configs.get(0).getRecordId() != null){
            grantsSchoolMapper.updateCollegeConfig(configDto);
        }else {
            grantsSchoolMapper.saveCollegeConfig(configDto);
        }
    }

    /**
     * 验证分配名额数
     * @param configDto
     */
    private boolean validateDistributeAllot(GrantsConfigDto configDto) {
        List<Config> configs = configDto.getConfigs();
        Long totalDistribute = grantsSchoolMapper.findDistributeAllotByGrantsId(configDto.getGrantsId());
        Long sum = 0L;
        for (Config config: configs) {
            if (config.getAmount() != null) {
                sum += config.getAmount();
            }
        }
        if (sum > totalDistribute){
            throw new PersonalException("分配名额超出上限");
        }
        return true;
    }


    /**
     * 处理申请的新名额
     *
     * @param pass
     * @param id
     */
    @Override
    public void dealNewApply(Integer pass, Long id) {
        grantsSchoolMapper.dealNewApply(pass,id );
    }
}
