package com.xdbigdata.subsidize_zjut.common.dto;

import io.swagger.annotations.ApiModelProperty;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/5/25.
 */
public class GrantsConfigDto {

    @ApiModelProperty("助学金id")
    private Long grantsId;

    @ApiModelProperty("助学金配置")
    private List<Config> configs = new ArrayList();

    public Long getGrantsId() {
        return grantsId;
    }

    public void setGrantsId(Long grantsId) {
        this.grantsId = grantsId;
    }

    public List<Config> getConfigs() {
        return configs;
    }

    public void setConfigs(List<Config> configs) {
        this.configs = configs;
    }

    public static class Config{
        @ApiModelProperty("记录编号")
        private Long recordId;
        @ApiModelProperty("jwt中的编号")
        private Long id;
        @ApiModelProperty("名称")
        private String name;
        @ApiModelProperty("分配名额")
        private Integer amount;

        public Long getRecordId() {
            return recordId;
        }

        public void setRecordId(Long recordId) {
            this.recordId = recordId;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Integer getAmount() {
            return amount;
        }

        public void setAmount(Integer amount) {
            this.amount = amount;
        }


        @Override
        public String toString() {
            return "Config{" +
                    "recordId=" + recordId +
                    ", id=" + id +
                    ", name='" + name + '\'' +
                    ", amount=" + amount +
                    '}';
        }
    }

    @Override
    public String toString() {
        return "GrantsConfigDto{" +
                "grantsId=" + grantsId +
                ", configs=" + configs +
                '}';
    }
}
