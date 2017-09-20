package com.xdbigdata.subsidize_zjut.util;

import com.xdbigdata.subsidize_zjut.common.dto.EIntegerConstant;
import com.xdbigdata.subsidize_zjut.common.dto.EStringConstant;
import com.xdbigdata.subsidize_zjut.domain.GrantsAttachment;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Date;

/**
 * Created by Administrator on 2017/5/24.
 */
public class GrantsFileUtil {


    /**
     * 限制文件上传的格式
     *
     * @param fileName
     * @return
     */
    public static boolean validateFileType(String fileName) {
        String[] fileTypes = {"doc", "docx", "pdf", "xlsx", "xls", "bmp", "png", "jpg"};
        for (int i = 0; i < fileTypes.length; i++) {
            if (fileName.toLowerCase().endsWith(fileTypes[i])) {
                return true;
            }
        }
        return false;
    }


    /**
     * @param file
     * @param userType
     * @param operateUserSn
     * @return
     */
    public static String uploadFile(MultipartFile file, Integer userType, String operateUserSn) throws Exception {
        String savePath = getUploadPathByUserType(userType, operateUserSn);
        if (savePath != null) {
            File temp = new File(savePath, file.getOriginalFilename());
            if (!temp.getParentFile().exists()) {
                temp.getParentFile().mkdirs();
            }
            file.transferTo(temp);
            String returnPath = savePath.substring(savePath.indexOf(EStringConstant.UPLOAD.getValue())) + file.getOriginalFilename();
            return returnPath;
        } else {
            throw new Exception(EStringConstant.EXCEPTION_UPLOAD_PATH.getValue());
        }

    }

    private static String getUploadPathByUserType(Integer userType, String operateUserSn) throws Exception {
        String rootPath = ResourceUtils.getFile("classpath:").getPath() + File.separator
                + "static" + File.separator + EStringConstant.UPLOAD.getValue()
                + File.separator;
        if (userType == EIntegerConstant.SCHOOL_USER_TYPE.getValue()) {
            return rootPath + EStringConstant.GRANTS_TEMPLATE.getValue()
                    + File.separator;
        } else if (userType == EIntegerConstant.STUDENT_USER_TYPE.getValue()
                || userType == EIntegerConstant.CLASS_USER_TYPE.getValue()) {
            return rootPath + EStringConstant.GRANTS_TEMPLATE.getValue()
                    + File.separator
                    + operateUserSn
                    + File.separator;
        }
        return null;
    }


}
