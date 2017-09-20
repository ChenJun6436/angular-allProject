package com.xdbigdata.subsidize_zjut.service;

import com.xdbigdata.subsidize_zjut.common.CommonResult;

import java.util.List;

/**
 * Created by Administrator on 2017/6/8.
 */
public interface IExcelService {

    CommonResult creatExcel(List list) throws Exception;

}
