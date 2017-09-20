package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.jwtService.domain.Student;
import com.xdbigdata.jwtService.domain.User;
import com.xdbigdata.subsidize_zjut.common.constant.ConstantEnum;
import com.xdbigdata.subsidize_zjut.common.dto.*;
import com.xdbigdata.subsidize_zjut.mapper.*;
import com.xdbigdata.subsidize_zjut.service.DataAmountService;
import com.xdbigdata.subsidize_zjut.service.JWTRemoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;

/**
 * Created by sky on 2017/6/1.
 */
@Service
public class DataAmountServiceImpl implements DataAmountService {
    @Autowired
    private PovertyHistoryMapper povertyHistoryMapper;
    @Autowired
    private SubsidizeAmountMapper subsidizeAmountMapper;
    @Autowired
    private JWTRemoteService jwtRemoteService;
    @Autowired
    private InspirationalScholarshipMapper inspirationalScholarshipMapper;
    @Autowired
    private GrantsHistoryMapper grantsHistoryMapper;
    @Autowired
    private TemporarySubsidizeMapper temporarySubsidizeMapper;
    @Autowired
    private JoinArmySubsidizeMapper joinArmySubsidizeMapper;
    @Autowired
    private LoanRecordMapper loanRecordMapper;
    @Autowired
    private AllowanceHistoryMapper allowanceHistoryMapper;

    private static final String DISABILITY = "disability";
    private static final String LOW_FIELD = "lowField";
    private static final String MARTYR = "martyr";
    private static final String RURAL_INFIRM = "ruralInfirm";
    private static final String ORPHAN= "orphan";
    private static final String IN_THE_PROVINCE = "inTheProvince";
    private static final String NOT_IN_THE_PROVINCE = "notInTheProvince";
    private static final String TOTAL = "total";
    private static final Integer INSPIRATIONAL_SCHOLARSHIP_MONEY = 5000;
    private static final String INSPIRATIONAL_SCHOLARSHIP_NAME = "励志奖学金";
    private static final String ALLOWANCE_NAME = "特别困难补助";
    private static final String LOAN_NAME = "助学贷款";
    private static final String JOIN_ARMY_SUBSIDIZE_NAME = "入伍补助";
    private static final String TEMPORARY_SUBSIDIZE_NAME = "临时困难补助";
    private static final String SUBSIDIZE_NAME = "资助";

    @Override
    public Integer countPovertyByConditionAndUser(SessionUserDto sessionUserDto, DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return povertyHistoryMapper.countByCondition(dataAmountQueryCondititonDto, studentSns);
    }

    @Override
    public List<PovertyHistoryCountDto> countPovertyGroupByLevelAndByCondition(SessionUserDto sessionUserDto, DataAmountQueryCondititonDto dataAmountQueryCondititonDto) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return povertyHistoryMapper.countGroupByPovertyLevelAndByCondition(dataAmountQueryCondititonDto, studentSns);
    }

    @Override
    public Integer countFiveKindsOfStudent(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return povertyHistoryMapper.countFiveKindsOfStudent(dataAmountQueryCondititonDto, studentSns);
    }

    @Override
    public Integer countDisability(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return povertyHistoryMapper.countDisability(dataAmountQueryCondititonDto, studentSns);
    }

    @Override
    public Integer countLowField(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return povertyHistoryMapper.countLowField(dataAmountQueryCondititonDto, studentSns);
    }

    @Override
    public Integer countMartyr(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return povertyHistoryMapper.countMartyr(dataAmountQueryCondititonDto, studentSns);
    }

    @Override
    public Integer countOrphan(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return povertyHistoryMapper.countOrphan(dataAmountQueryCondititonDto, studentSns);
    }

    @Override
    public Integer countRuralInfirm(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return povertyHistoryMapper.countRuralInfirm(dataAmountQueryCondititonDto, studentSns);
    }

    @Override
    public List<FiveKindsStudentCountDto> countPovertyGroupByKindAndByCondition(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                                                SessionUserDto sessionUserDto) throws Exception {
        List<FiveKindsStudentCountDto> fiveKindsStudentCountDtos = new ArrayList<>();
        User user = new User();
        user.setSn(sessionUserDto.getUserName());
        user.setType(sessionUserDto.getUserType());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        Integer disabilityNumber = povertyHistoryMapper.countDisability(dataAmountQueryCondititonDto, studentSns);
        Integer lowFieldNumber = povertyHistoryMapper.countLowField(dataAmountQueryCondititonDto, studentSns);
        Integer martyrNumber = povertyHistoryMapper.countMartyr(dataAmountQueryCondititonDto, studentSns);
        Integer ruralInfirmrNumber = povertyHistoryMapper.countRuralInfirm(dataAmountQueryCondititonDto, studentSns);
        Integer orphanNumber = povertyHistoryMapper.countOrphan(dataAmountQueryCondititonDto, studentSns);
        Integer totalNumber = povertyHistoryMapper.countFiveKindsOfStudent(dataAmountQueryCondititonDto, studentSns);
        FiveKindsStudentCountDto fiveKindsStudentCountDto0 = new FiveKindsStudentCountDto(DISABILITY, disabilityNumber);
        FiveKindsStudentCountDto fiveKindsStudentCountDto1 = new FiveKindsStudentCountDto(LOW_FIELD, lowFieldNumber);
        FiveKindsStudentCountDto fiveKindsStudentCountDto2 = new FiveKindsStudentCountDto(RURAL_INFIRM, ruralInfirmrNumber);
        FiveKindsStudentCountDto fiveKindsStudentCountDto3 = new FiveKindsStudentCountDto(MARTYR, martyrNumber);
        FiveKindsStudentCountDto fiveKindsStudentCountDto4 = new FiveKindsStudentCountDto(ORPHAN, orphanNumber);
        FiveKindsStudentCountDto fiveKindsStudentCountDto5 = new FiveKindsStudentCountDto(TOTAL, totalNumber);
        fiveKindsStudentCountDtos.add(fiveKindsStudentCountDto0);
        fiveKindsStudentCountDtos.add(fiveKindsStudentCountDto1);
        fiveKindsStudentCountDtos.add(fiveKindsStudentCountDto2);
        fiveKindsStudentCountDtos.add(fiveKindsStudentCountDto3);
        fiveKindsStudentCountDtos.add(fiveKindsStudentCountDto4);
        fiveKindsStudentCountDtos.add(fiveKindsStudentCountDto5);
        return fiveKindsStudentCountDtos;
    }

    @Override
    public Map<String, Integer> countPovertyGroupByIsZhejiang(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                              SessionUserDto sessionUserDto) throws Exception {
        Map<String, Integer> map = new HashMap<>();
        List<Student> students = getStudentListByCondition(dataAmountQueryCondititonDto, sessionUserDto);
        Integer ZhejiangNumber = 0;
        Integer noZhejiangNumber = 0;
        if(students != null && students.size() > 0){
            for(Student student : students){
                if(student.getProvince() != null&&student.getProvince().getId() == 3) {
                    ZhejiangNumber++;
                }else{
                    noZhejiangNumber++;
                }
            }
        }
        map.put(IN_THE_PROVINCE, ZhejiangNumber);
        map.put(NOT_IN_THE_PROVINCE, noZhejiangNumber);
        return map;
    }

    @Override
    public List<PovertySort> notInProvinceSortDesc(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                                SessionUserDto sessionUserDto) throws Exception {
        List<Student> students = getStudentListByCondition(dataAmountQueryCondititonDto, sessionUserDto);
        List<Student> studentListNotInTheProvince = new ArrayList<>();
        if(students != null && students.size() > 0){
            for(Student student : students){
                if(student.getProvince() != null&&student.getProvince().getId() != 3){
                    studentListNotInTheProvince.add(student);
                }
            }
        }
        Set<String> provinces = new HashSet<>();
        for (Student student : studentListNotInTheProvince) {
            if(student.getProvince() != null){
                provinces.add(student.getProvince().getName());
            }
        }
        BigDecimal totalBigDecimal = new BigDecimal(studentListNotInTheProvince.size());
        List<PovertySort> sorts = new ArrayList<>();
        Map<String, Float> map = new HashMap<>();
        for (String province : provinces) {
            PovertySort povertySort = new PovertySort();
            int provinceAmount = 0;
            for (Student student : studentListNotInTheProvince) {
                if(student.getProvince() != null){
                    if (student.getProvince().getName().equals(province)) {
                        provinceAmount++;
                    }
                }
            }
            BigDecimal provinceAmountDecimal = new BigDecimal(provinceAmount);
            Float provinceAmountPercentage = provinceAmountDecimal.divide(totalBigDecimal, 3, BigDecimal.ROUND_HALF_UP).floatValue();
            povertySort.setName(province);
            povertySort.setPercentage(provinceAmountPercentage);
            sorts.add(povertySort);
        }
       // 通过比较器来实现排序
        Collections.sort(sorts, new Comparator<PovertySort>() {
            @Override
            public int compare(PovertySort o1, PovertySort o2) {
                // 降序排序
                return o2.getPercentage().compareTo(o1.getPercentage());
            }
        });
        return sorts;
    }

    @Override
    public List<PovertySort> inProvinceSortDesc(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                                             SessionUserDto sessionUserDto) throws Exception {
        List<Student> students = getStudentListByCondition(dataAmountQueryCondititonDto, sessionUserDto);
        List<Student> studentListInTheProvince = new ArrayList<>();
        if(students != null && students.size() > 0) {
            for(Student student : students){
                if(student.getProvince() != null&&student.getProvince().getId() == 3){
                    studentListInTheProvince.add(student);
                }
            }
        }
        Set<String> cities = new HashSet<>();
        for (Student student : studentListInTheProvince) {
            if(student.getCity() != null){
                cities.add(student.getCity().getName());
            }
        }
        int totalNumber = studentListInTheProvince.size();
        BigDecimal totolBigdecimal = new BigDecimal(totalNumber);
        List<PovertySort> sorts = new ArrayList<>();
        Map<String, Float> map = new HashMap<>();
        for (String city : cities) {
            int cityAmount = 0;
            for (Student student : studentListInTheProvince) {
                if(student.getCity() != null){
                    if (student.getCity().getName().equals(city)) {
                        cityAmount++;
                    }
                }
            }
            BigDecimal cityAmountDecimal = new BigDecimal(cityAmount);
            Float cityAmountPercentage = cityAmountDecimal.divide(totolBigdecimal, 3, BigDecimal.ROUND_HALF_UP).floatValue();
            PovertySort povertySort = new PovertySort();
            povertySort.setName(city);
            povertySort.setPercentage(cityAmountPercentage);
            sorts.add(povertySort);
        }
        // 通过比较器来实现排序
        Collections.sort(sorts, new Comparator<PovertySort>() {
            @Override
            public int compare(PovertySort o1, PovertySort o2) {
                // 降序排序
                return o2.getPercentage().compareTo(o1.getPercentage());
            }
        });
        return sorts;
    }

    @Override
    public Map<String, Integer> countPovertyGroupByResidenceType(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        Map<String, Integer> map = new HashMap<>();
        List<Student> students = getStudentListByCondition(dataAmountQueryCondititonDto, sessionUserDto);
        int cityNumber = 0;
        int ruralNumber = 0;
        int otherNumber = 0;
        for(Student student : students) {
            if(student.getResidenceType() == ConstantEnum.RESIDENCE_IS_CITY.code) {
                cityNumber++;
            }else if(student.getResidenceType() == ConstantEnum.RESIDENCE_IS_RURAL.code){
                ruralNumber++;
            }else if(student.getResidenceType() == ConstantEnum.RESIDENCE_IS_OTHER.code){
                otherNumber++;
            }
        }
        map.put(ConstantEnum.RESIDENCE_IS_CITY.des, cityNumber);
        map.put(ConstantEnum.RESIDENCE_IS_RURAL.des, ruralNumber);
        map.put(ConstantEnum.RESIDENCE_IS_OTHER.des, otherNumber);
        return map;
    }

    @Override
    public Integer countSubsidizeTotalNumber(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setType(sessionUserDto.getUserType());
        user.setSn(sessionUserDto.getUserName());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        return subsidizeAmountMapper.countSubsidizeNumber(dataAmountQueryCondititonDto, studentSns);
    }

    @Override
    public BigDecimal countSubsidizeTotalMoney(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setType(sessionUserDto.getUserType());
        user.setSn(sessionUserDto.getUserName());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        BigDecimal bigDecimal1 = subsidizeAmountMapper.countSubsidizeMoney(dataAmountQueryCondititonDto, studentSns);
        Integer inspirationalScholarshipNumber = inspirationalScholarshipMapper.countPassStudentNumber(dataAmountQueryCondititonDto, studentSns);
        BigDecimal bigDecimal2 = new BigDecimal(inspirationalScholarshipNumber*INSPIRATIONAL_SCHOLARSHIP_MONEY);
        return bigDecimal1.add(bigDecimal2);
    }

    @Override
    public List<SubsidizeGroupLevelDto> countNumberAndMoneyGroupByLevel(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setType(sessionUserDto.getUserType());
        user.setSn(sessionUserDto.getUserName());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        List<SubsidizeGroupLevelDto> subsidizeGroupLevelDtos = new ArrayList<>();
        //加入助学金SubsidizeGroupLevelDto
        List<SubsidizeGroupLevelDto> grantsSubsidizeGroupLevelDtos = grantsHistoryMapper.countGroupByLevel(dataAmountQueryCondititonDto, studentSns);
        subsidizeGroupLevelDtos.addAll(grantsSubsidizeGroupLevelDtos);
        //加入励志奖学金的SubsidizeGroupLevelDto
        Integer inspirationalScholarshipNumber = inspirationalScholarshipMapper.countPassStudentNumber(dataAmountQueryCondititonDto, studentSns);
        BigDecimal inspirationalScholarshipTotalMoney = new BigDecimal(inspirationalScholarshipNumber*INSPIRATIONAL_SCHOLARSHIP_MONEY);
        SubsidizeGroupLevelDto scholarshipSubsidizeGroupLevelDto = new SubsidizeGroupLevelDto();
        scholarshipSubsidizeGroupLevelDto.setSubsidizeName(INSPIRATIONAL_SCHOLARSHIP_NAME);
        scholarshipSubsidizeGroupLevelDto.setNumber(inspirationalScholarshipNumber);
        scholarshipSubsidizeGroupLevelDto.setMoney(inspirationalScholarshipTotalMoney);
        subsidizeGroupLevelDtos.add(scholarshipSubsidizeGroupLevelDto);
        //加入特别困难补助SubsidizeGroupLevelDto
        SubsidizeGroupLevelDto allowanceSubsidizeGroupLevelDto = allowanceHistoryMapper.countNumberAndMoney(
                dataAmountQueryCondititonDto, studentSns);
        allowanceSubsidizeGroupLevelDto.setSubsidizeName(ALLOWANCE_NAME);
        subsidizeGroupLevelDtos.add(allowanceSubsidizeGroupLevelDto);
        //加入临时困难补助SubsidizeGroupLevelDto
        SubsidizeGroupLevelDto temporarySubsidizeGroupLevelDto = temporarySubsidizeMapper.countNumberAndMoney(
                dataAmountQueryCondititonDto, studentSns);
        temporarySubsidizeGroupLevelDto.setSubsidizeName(TEMPORARY_SUBSIDIZE_NAME);
        subsidizeGroupLevelDtos.add(temporarySubsidizeGroupLevelDto);
        //加入入伍补助SubsidizeGroupLevelDto
        SubsidizeGroupLevelDto joinArmySubsidizeGroupLevelDto = joinArmySubsidizeMapper.countNumberAndMoney(
                dataAmountQueryCondititonDto, studentSns);
        joinArmySubsidizeGroupLevelDto.setSubsidizeName(JOIN_ARMY_SUBSIDIZE_NAME);
        subsidizeGroupLevelDtos.add(joinArmySubsidizeGroupLevelDto);
        //加入贷款SubsidizeGroupLevelDto
        SubsidizeGroupLevelDto loanSubsidizeGroupLevelDto = countLoanNumberAndMoney(dataAmountQueryCondititonDto, sessionUserDto);
        subsidizeGroupLevelDtos.add(loanSubsidizeGroupLevelDto);
        //加入资助
        SubsidizeGroupLevelDto subsidizeGroupLevelDto = new SubsidizeGroupLevelDto();
        subsidizeGroupLevelDto.setSubsidizeName(SUBSIDIZE_NAME);
        subsidizeGroupLevelDto.setMoney(countSubsidizeTotalMoney(dataAmountQueryCondititonDto, sessionUserDto));
        subsidizeGroupLevelDto.setNumber(countSubsidizeTotalNumber(dataAmountQueryCondititonDto, sessionUserDto));
        subsidizeGroupLevelDtos.add(subsidizeGroupLevelDto);
        return subsidizeGroupLevelDtos;
    }

    @Override
    public SubsidizeGroupLevelDto countLoanNumberAndMoney(DataAmountQueryCondititonDto dataAmountQueryCondititonDto, SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setType(sessionUserDto.getUserType());
        user.setSn(sessionUserDto.getUserName());
        List<String> studentSns = jwtRemoteService.findStudentSnsByUser(user);
        SubsidizeGroupLevelDto loanSubsidizeGroupLevelDto = loanRecordMapper.countNumberAndMoney(dataAmountQueryCondititonDto, studentSns);
        loanSubsidizeGroupLevelDto.setSubsidizeName(LOAN_NAME);
        return loanSubsidizeGroupLevelDto;
    }

    /**
     * 获取当前用户和条件下困难生列表
     * @param dataAmountQueryCondititonDto
     * @param sessionUserDto
     * @return
     * @throws Exception
     */
    private List<Student> getStudentListByCondition(DataAmountQueryCondititonDto dataAmountQueryCondititonDto,
                                         SessionUserDto sessionUserDto) throws Exception {
        User user = new User();
        user.setType(sessionUserDto.getUserType());
        user.setSn(sessionUserDto.getUserName());
        List<Student> students = jwtRemoteService.findStudentsByUser(user);
        List<String> remoteStudentSns = new ArrayList<>();
        for(Student student : students){
            remoteStudentSns.add(student.getSn());
        }
        List<String> localStudentSns =  povertyHistoryMapper.findStudentSnByInList(dataAmountQueryCondititonDto ,remoteStudentSns);
        List<Student> localStudent = new ArrayList<>();
        for(String sn : localStudentSns){
            for(Student student : students){
                if(student.getSn().equals(sn)) {
                    localStudent.add(student);
                }
            }
        }
        return localStudent;
    }
}
