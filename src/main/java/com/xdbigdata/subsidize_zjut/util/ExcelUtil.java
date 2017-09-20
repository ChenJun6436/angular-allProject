package com.xdbigdata.subsidize_zjut.util;

import com.xdbigdata.subsidize_zjut.anno.ExcelAnno;
import com.xdbigdata.subsidize_zjut.exception.*;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.OutputStream;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by sky on 2017/5/11.
 */
public class ExcelUtil {

    public static <T> List<T> parseExcel(Class<T> clazz, MultipartFile file) throws IOException, IllegalAccessException,
            InstantiationException, NoSuchMethodException, InvocationTargetException {
        List<T> list = new ArrayList<>();
        String fileName = file.getOriginalFilename();
        if (!fileName.endsWith(".xls") && !fileName.endsWith(".xlsx")) {
            throw new BusinessException("文件类型不匹配");
        }
        Workbook workbook = null;
        if (fileName.endsWith(".xls")) {
            workbook = new HSSFWorkbook(file.getInputStream());
        } else {
            workbook = new XSSFWorkbook(file.getInputStream());
        }
        Sheet sheet = workbook.getSheetAt(0);
        Row titleRow = sheet.getRow(0);
        //获取不是空列的个数
        int columns = titleRow.getPhysicalNumberOfCells();
        //获取最后一行的行标
        int rows = sheet.getLastRowNum();
        if (columns <= 0 || rows <= 0) {
            throw new BusinessException("导入表格不能为空");
        }
        Field[] fields = clazz.getDeclaredFields();
        if (fields.length != columns) {
            throw new BusinessException("导入数据的列数不正确");
        }
        for (int rowNum = 1; rowNum <= rows; rowNum++) {
            Row row = sheet.getRow(rowNum);
            T t = clazz.newInstance();
            for (int columNum = 0; columNum < columns; columNum++) {
                Cell cell = row.getCell(columNum);
                String value = getStringCellValue(cell);
                Field field = fields[columNum];
                String fieldName = field.getName();
                String setMethodName = "set" + fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);
                Method setMethod = clazz.getMethod(setMethodName, String.class);
                setMethod.invoke(t, value);
            }
            list.add(t);
        }
        return list;
    }

    public static <T> void excelExport(String title, List<T> dataList, OutputStream outputStream) throws NoSuchMethodException,
            InvocationTargetException, IllegalAccessException, IOException {
        // 声明一个工作薄
        HSSFWorkbook workbook = new HSSFWorkbook();
        // 生成一个表格
        HSSFSheet sheet = workbook.createSheet(title);
        // 设置表格默认列宽度为15个字节
        sheet.setDefaultColumnWidth((short) 15);
        // 生成一个样式
        HSSFCellStyle style = workbook.createCellStyle();
        // 设置这些样式
        style.setFillForegroundColor(HSSFColor.SKY_BLUE.index);
        style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
        style.setBorderBottom(HSSFCellStyle.BORDER_THIN);
        style.setBorderLeft(HSSFCellStyle.BORDER_THIN);
        style.setBorderRight(HSSFCellStyle.BORDER_THIN);
        style.setBorderTop(HSSFCellStyle.BORDER_THIN);
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
        // 生成一个字体
        HSSFFont font = workbook.createFont();
        font.setColor(HSSFColor.VIOLET.index);
        font.setFontHeightInPoints((short) 12);
        font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
        // 把字体应用到当前的样式
        style.setFont(font);
        // 生成并设置另一个样式
        HSSFCellStyle style2 = workbook.createCellStyle();
        style2.setFillForegroundColor(HSSFColor.LIGHT_YELLOW.index);
        style2.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
        style2.setBorderBottom(HSSFCellStyle.BORDER_THIN);
        style2.setBorderLeft(HSSFCellStyle.BORDER_THIN);
        style2.setBorderRight(HSSFCellStyle.BORDER_THIN);
        style2.setBorderTop(HSSFCellStyle.BORDER_THIN);
        style2.setAlignment(HSSFCellStyle.ALIGN_CENTER);
        style2.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
        // 生成另一个字体
        HSSFFont font2 = workbook.createFont();
        font2.setBoldweight(HSSFFont.BOLDWEIGHT_NORMAL);
        // 把字体应用到当前的样式
        style2.setFont(font2);
        //产生表格标题行
        if (dataList == null || dataList.size() == 0) return;
        T tempT = dataList.get(0);
        Field[] heads = tempT.getClass().getDeclaredFields();
        List<String> headers = new ArrayList<>();
        //获取字段注解的表头
        for(int i=0;i<heads.length;i++) {
            //过滤掉没加注解的字段
            ExcelAnno exAnno = heads[i].getAnnotation(ExcelAnno.class);
            if(exAnno == null) {
                continue;
            }
            String head = exAnno.head();
            headers.add(head);
        }
        HSSFRow row = sheet.createRow(0);
        for (int i = 0; i < headers.size(); i++) {
            HSSFCell cell = row.createCell(i);
            cell.setCellStyle(style);
            HSSFRichTextString text = new HSSFRichTextString(headers.get(i));
            cell.setCellValue(text);
        }
        //遍历集合数据，产生数据行
        Iterator<T> it = dataList.iterator();
        int index = 0;
        while (it.hasNext()) {
            index++;
            row = sheet.createRow(index);
            T t = (T) it.next();
            //利用反射，根据javabean属性的先后顺序，动态调用getXxx()方法得到属性值
            Field[] fields = t.getClass().getDeclaredFields();
            List<Field> fieldsList = new ArrayList<>();
            for (Field field : fields) {
                if(field.getAnnotation(ExcelAnno.class) != null)
                    fieldsList.add(field);
            }
            for (int i = 0; i < fieldsList.size(); i++) {
                HSSFCell cell = row.createCell(i);
                cell.setCellStyle(style2);
                Field field = fieldsList.get(i);
                String fieldName = field.getName();
                String getMethodName = "get"
                        + fieldName.substring(0, 1).toUpperCase()
                        + fieldName.substring(1);
                Class tCls = t.getClass();
                Method getMethod = tCls.getMethod(getMethodName,
                        new Class[] {});
                Object value = getMethod.invoke(t, new Object[] {});
                //判断值的类型后进行强制类型转换
                String textValue = null;
                if (value instanceof Date) {
                    Date date = (Date) value;
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                    textValue = sdf.format(date);
                } else{
                    //其它数据类型都当作字符串简单处理
                    textValue = value==null? "":value.toString();
                }
                //如果不是图片数据，就利用正则表达式判断textValue是否全部由数字组成
                if(textValue!=null){
                    Pattern p = Pattern.compile("^//d+(//.//d+)?$");
                    Matcher matcher = p.matcher(textValue);
                    if(matcher.matches()){
                        //是数字当作double处理
                        cell.setCellValue(Double.parseDouble(textValue));
                    }else{
                        HSSFRichTextString richString = new HSSFRichTextString(textValue);
                        HSSFFont font3 = workbook.createFont();
                        font3.setColor(HSSFColor.BLUE.index);
                        richString.applyFont(font3);
                        cell.setCellValue(richString);
                    }
                }
            }

        }
        workbook.write(outputStream);
        workbook.close();
    }

    private static String getStringCellValue(Cell cell){
        String strCell = "";
        switch (cell.getCellType()) {
            case HSSFCell.CELL_TYPE_STRING:
                strCell = cell.getStringCellValue();
                break;
            case HSSFCell.CELL_TYPE_NUMERIC:
                double value = cell.getNumericCellValue();
                BigDecimal bigDecimal = new BigDecimal(value);
                strCell = bigDecimal.toPlainString();
                break;
            case HSSFCell.CELL_TYPE_BOOLEAN:
                strCell = String.valueOf(cell.getBooleanCellValue());
                break;
            case HSSFCell.CELL_TYPE_BLANK:
                strCell = "";
                break;
            default:
                strCell = "";
                break;
        }
        if (strCell.equals("") || strCell == null) {
            return "";
        }
        if (cell == null) {
            return "";
        }
        return strCell;
    }
}

