package com.xdbigdata.subsidize_zjut.util;

import com.xdbigdata.subsidize_zjut.exception.PersonalException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;

/**
 * 文件上传工具类
 * Created by staunch on 2017/3/30.
 */
public class UploadFileUtil {

    public static String uploadFile(MultipartFile file, String secondDir) throws Exception{
        String realFileName = file.getOriginalFilename();
        realFileName = realFileName.split("\\\\")[realFileName.split("\\\\").length - 1];
        //允许上传的文件格式
        if (!validateFileType(realFileName)) {
            throw new PersonalException("请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】等规定格式文件");
        }
        String userName = SessionUtil.getUserName();
        String root = SessionUtil.getUploadUrl();
        root = URLDecoder.decode(root, "utf-8");
        String ctxPath = root + "/upload/";
        // 创建文件
        File dirPath = new File(ctxPath);
        if (!dirPath.exists() && !dirPath.isDirectory()) {
            dirPath.mkdir();
        }
        ctxPath = ctxPath + secondDir;
        // 创建文件
        File dirPath2 = new File(ctxPath);
        if (!dirPath2.exists() && !dirPath2.isDirectory()) {
            dirPath2.mkdir();
        }
        ctxPath = ctxPath + "/" + userName;
        File dirPath1 = new File(ctxPath);
        if (!dirPath1.exists() && !dirPath1.isDirectory()) {
            dirPath1.mkdir();
        }
        File uploadFile = new File(ctxPath + "/" + realFileName);
        //获取全路径
        String allUrl = ctxPath + "/" + realFileName;
        String path[] = allUrl.split("/");
        String url = path[path.length - 4]+"/"+path[path.length - 3] + "/" + path[path.length - 2] + "/" + path[path.length - 1];
        try {
            file.transferTo(uploadFile);
        } catch (IOException e) {
            throw new PersonalException("文件转换异常");
        }
        if (FileUtil.getFileType(uploadFile) == null) {
            uploadFile.delete();
            throw new PersonalException("上传文件非法");
        }
        return url;
    }

    /**
     * 限制文件上传的格式
     *
     * @param fileName
     * @return
     */
    private static boolean validateFileType(String fileName) {
        String[] fileTypes = {"doc", "docx", "pdf", "xlsx", "xls", "bmp", "png", "jpg"};
        for (int i = 0; i < fileTypes.length; i++) {
            if (fileName.toLowerCase().endsWith(fileTypes[i])) {//
                return true;
            }
        }
        return false;
    }

}
