package com.xdbigdata.subsidize_zjut.service.impl;

import com.xdbigdata.subsidize_zjut.common.CommonResult;
import com.xdbigdata.subsidize_zjut.exception.ErrorCode;
import com.xdbigdata.subsidize_zjut.service.IExcelService;
import com.xdbigdata.subsidize_zjut.util.ExportExcelUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;
import java.util.UUID;

/**
 * Created by Administrator on 2017/6/8.
 */
@Service
@Transactional
public class ExcelServiceImpl  implements IExcelService{

    @Override
    public CommonResult creatExcel(List list) throws Exception {
        if(list == null || list.size()<=0){
        return new CommonResult(false,"没有可下载的数据", ErrorCode.HANDLER_FAILED.code, ErrorCode.HANDLER_FAILED.des);
    }
        String fileName = UUID.randomUUID().toString() + ".xls";
        String rootPath = ResourceUtils.getFile("classpath:").getPath();
        File downloadPath = new File(rootPath+"/static/download");
        if(!downloadPath.exists()){
            downloadPath.mkdirs();
        }
        ExportExcelUtil ex = new ExportExcelUtil<>();
        FileOutputStream fs = new FileOutputStream(new File(downloadPath,fileName));
        ex.exportExcel("学生名单",list,fs,null);
        fs.flush();
        fs.close();
        String path = "/download/"+fileName;
        return new CommonResult(true,path, ErrorCode.HANDLER_SUCCESS.code, ErrorCode.HANDLER_SUCCESS.des);
    }
}
