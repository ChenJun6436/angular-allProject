package com.xdbigdata.subsidize_zjut.util;

import com.xdbigdata.subsidize_zjut.common.dto.FileDto;
import com.xdbigdata.subsidize_zjut.exception.XDException;
import lombok.extern.log4j.Log4j;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.UUID;

/**
 * Created by tangyijun on 2017/4/26.
 * good good study,day day up!
 */
@Log4j
public class FileUtil {


    // 缓存文件头信息-文件头信息
    private static final int maxReadLen = 7;// 最长读取字节数
    private static final String[] fileHeaders = { "FFD8FF", "89504E47", "424D", "D0CF11E0", "504B0304",
            "255044462D312E" };
    private static final String[] fileTypes = { "jpg", "png", "bmp", "doc", "docx/xlsx", "pdf","xls"};

    private FileUtil() {

    }

    /**
     * 根据文件路径获取文件头信息
     *
     * @param file
     *            文件
     * @return 文件头信息,null即为不允许的文件类型
     */
    public static String getFileType(File file) {
        String header = getFileHeader(file);
        for (int i = 0; i < fileHeaders.length; i++) {
            if (header.contains(fileHeaders[i]))
                return fileTypes[i];
        }
        return null;
    }

    /**
     * 根据文件路径获取文件头信息
     *
     * @param filePath
     *            文件路径
     * @return 文件头信息,null即为不允许的文件类型
     */
    public static String getFileType(String filePath) {
        return getFileType(new File(filePath));
    }

    /**
     * 根据文件路径获取文件头信息
     *
     * @param file
     *            文件路径
     * @return 文件头信息
     */
    private static String getFileHeader(File file) {
        FileInputStream is = null;
        String value = null;
        try {
            is = new FileInputStream(file);
            byte[] b = new byte[maxReadLen];
            is.read(b, 0, b.length);
            value = bytesToHexString(b);
        } catch (Exception e) {
        } finally {
            if (null != is) {
                try {
                    is.close();
                } catch (IOException e) {
                }
            }
        }
        return value;
    }

    /**
     * 将要读取文件头信息的文件的byte数组转换成string类型表示
     *
     * @param src
     *            要读取文件头信息的文件的byte数组
     * @return 文件头信息
     */
    private static String bytesToHexString(byte[] src) {
        StringBuilder builder = new StringBuilder();
        if (src == null || src.length <= 0) {
            return null;
        }
        String hv;
        for (int i = 0; i < src.length; i++) {
            // 以十六进制（基数 16）无符号整数形式返回一个整数参数的字符串表示形式，并转换为大写
            hv = Integer.toHexString(src[i] & 0xFF).toUpperCase();
            if (hv.length() < 2) {
                builder.append(0);
            }
            builder.append(hv);
        }
        System.out.println(builder.toString());
        return builder.toString();
    }

    public static FileDto upload(MultipartFile file) throws Exception {
        String fileName = file.getOriginalFilename();
        log.info("当前得到的文件名是：" + fileName);
        if (!validateFileType(fileName, file.getInputStream())) {
            log.warn("文件头判断的是错误类型文件");
            throw new XDException("请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】等规定格式文件");
        }
        /** 获取文件的后缀* */
        String suffix = fileName.substring(
                fileName.lastIndexOf("."));

        /** 使用UUID生成文件名称* */
        String randomName = UUID.randomUUID().toString() + suffix;// 构建文件名称
        String rootPath = ResourceUtils.getFile("classpath:").getPath();
        String realUrl = rootPath
                + File.separator + "static"
                + File.separator + "upload"
                + File.separator;
        log.info("当前准备放入的地址是：" + realUrl);
        File templateFile = new File(realUrl, randomName);
        if (!templateFile.getParentFile().exists()) {
            templateFile.getParentFile().mkdirs();
        }
        file.transferTo(templateFile);
        FileDto f = new FileDto();
        f.setName(fileName);
        f.setUrl(realUrl.substring(realUrl.indexOf("static")) + randomName);
        log.info("上传的文件为"+f);
        return f;
    }

    public static void deleteFile(String url) throws FileNotFoundException {
        String rootPath = ResourceUtils.getFile("classpath:").getPath();
        File file = new File(rootPath+url);
        if (file.exists() && file.isFile()) {
            file.delete();
        } else {
            log.info("删除文件失败！");
            throw new XDException("删除文件失败！");
        }
    }



    /**
     * 限制文件上传的格式
     *
     * @param fileName
     * @return
     */
    private static boolean validateFileType(String fileName, InputStream is) throws Exception {
        String[] fileTypes = {"doc", "docx", "pdf", "xlsx", "xls", "bmp", "png", "jpg"};
        String fileType = FileTypeUtil.getFileType(is);
        for (int i = 0; i < fileTypes.length; i++) {
            if (fileName.toLowerCase().endsWith(fileTypes[i]) || fileType.equals(fileTypes[i])) {//
                return true;
            }
        }
        return false;
    }


}
