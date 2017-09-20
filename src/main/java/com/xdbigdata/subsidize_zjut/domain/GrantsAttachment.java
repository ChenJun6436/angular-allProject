package com.xdbigdata.subsidize_zjut.domain;

import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import lombok.Data;

import java.util.Date;

/**
 * Created by Administrator on 2017/5/24.
 */
@Data
public class GrantsAttachment {

    @ApiModelProperty("编号")
    private Long id;
    @ApiModelProperty("助学金id，学校保存用")
    private Long grantsId;
    @ApiModelProperty("助学金uuid，学生申请用")
    private String grantsUuid;
    @ApiModelProperty("上传时间")
    private Date createTime;
    @ApiModelProperty("地址")
    private String url;
    @ApiModelProperty("文件名")
    private String fileName;
    @ApiModelProperty("操作者")
    private String operateId;

}


