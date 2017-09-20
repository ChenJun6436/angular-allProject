package com.xdbigdata.subsidize_zjut.common.constant;


/**
 * Created by sky on 2017/5/11.
 */
public enum ConstantEnum {

    //贷款审批状态
    LOAN_STATUS_END(1, "已完成"),
    LOAN_STATUS_ING(0, "进行中"),
    //贷款审批结果
    LOAN_RESULT_PASS(1,"通过"),
    LOAN_RESULT_NO_PASS(2,"不通过"),
    LOAN_RESULT_IS_EMPTY(0,""),
    //学生户籍
    RESIDENCE_IS_CITY(0, "城镇"),
    RESIDENCE_IS_RURAL(1, "农村"),
    RESIDENCE_IS_OTHER(2, "其他"),

    ;
    public Integer code;
    public String des;

    ConstantEnum(Integer code, String des){
        this.code = code;
        this.des = des;
    }

    public static ConstantEnum get(Integer code){
        for(ConstantEnum errorCode: ConstantEnum.values()){
            if(errorCode.code.toString().equals(code.toString())){
                return errorCode;
            }
        }
        return null;
    }

    @Override
    public String toString(){
        return "code:"+code +", des:"+des;
    }
}
