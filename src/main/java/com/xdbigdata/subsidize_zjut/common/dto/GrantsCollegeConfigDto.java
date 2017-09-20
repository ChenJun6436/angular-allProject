package com.xdbigdata.subsidize_zjut.common.dto;

import java.util.List;

/**
 * 助学金学院配置
 * Created by Administrator on 2017/5/26.
 */
public class GrantsCollegeConfigDto {


    /**
     * recordId : 1
     * grantsId : 4
     * collegeId : 20
     * collegeName : 计算机科学与技术学院
     * collegeAmount : 20
     * gradeConfigs : [{"recordId":1,"gradeId":20,"gradeName":"2016级","amount":20,"majorConfigs":[{"recordId":1,"majorId":1,"majorName":"软件工程专业","amount":12,"classesConfigs":[{"recordId":1,"classesId":1,"classesName":"一班","amount":6}]}]}]
     */

    private Integer recordId;
    private Integer grantsId;
    private Integer collegeId;
    private String collegeName;
    private Integer collegeAmount;
    private List<GradeConfigs> gradeConfigs;

    public Integer getRecordId() {
        return recordId;
    }

    public void setRecordId(Integer recordId) {
        this.recordId = recordId;
    }

    public Integer getGrantsId() {
        return grantsId;
    }

    public void setGrantsId(Integer grantsId) {
        this.grantsId = grantsId;
    }

    public Integer getCollegeId() {
        return collegeId;
    }

    public void setCollegeId(Integer collegeId) {
        this.collegeId = collegeId;
    }

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }

    public Integer getCollegeAmount() {
        return collegeAmount;
    }

    public void setCollegeAmount(Integer collegeAmount) {
        this.collegeAmount = collegeAmount;
    }

    public List<GradeConfigs> getGradeConfigs() {
        return gradeConfigs;
    }

    public void setGradeConfigs(List<GradeConfigs> gradeConfigs) {
        this.gradeConfigs = gradeConfigs;
    }

    public static class GradeConfigs {
        /**
         * recordId : 1
         * gradeId : 20
         * gradeName : 2016级
         * amount : 20
         * majorConfigs : [{"recordId":1,"majorId":1,"majorName":"软件工程专业","amount":12,"classesConfigs":[{"recordId":1,"classesId":1,"classesName":"一班","amount":6}]}]
         */

        private Integer recordId;
        private Integer gradeId;
        private String gradeName;
        private Integer amount;
        private List<MajorConfigs> majorConfigs;

        public Integer getRecordId() {
            return recordId;
        }

        public void setRecordId(Integer recordId) {
            this.recordId = recordId;
        }

        public Integer getGradeId() {
            return gradeId;
        }

        public void setGradeId(Integer gradeId) {
            this.gradeId = gradeId;
        }

        public String getGradeName() {
            return gradeName;
        }

        public void setGradeName(String gradeName) {
            this.gradeName = gradeName;
        }

        public Integer getAmount() {
            return amount;
        }

        public void setAmount(Integer amount) {
            this.amount = amount;
        }

        public List<MajorConfigs> getMajorConfigs() {
            return majorConfigs;
        }

        public void setMajorConfigs(List<MajorConfigs> majorConfigs) {
            this.majorConfigs = majorConfigs;
        }

        public static class MajorConfigs {
            /**
             * recordId : 1
             * majorId : 1
             * majorName : 软件工程专业
             * amount : 12
             * classesConfigs : [{"recordId":1,"classesId":1,"classesName":"一班","amount":6}]
             */

            private Integer recordId;
            private Integer majorId;
            private String majorName;
            private Integer amount;
            private List<ClassesConfigs> classesConfigs;

            public Integer getRecordId() {
                return recordId;
            }

            public void setRecordId(Integer recordId) {
                this.recordId = recordId;
            }

            public Integer getMajorId() {
                return majorId;
            }

            public void setMajorId(Integer majorId) {
                this.majorId = majorId;
            }

            public String getMajorName() {
                return majorName;
            }

            public void setMajorName(String majorName) {
                this.majorName = majorName;
            }

            public Integer getAmount() {
                return amount;
            }

            public void setAmount(Integer amount) {
                this.amount = amount;
            }

            public List<ClassesConfigs> getClassesConfigs() {
                return classesConfigs;
            }

            public void setClassesConfigs(List<ClassesConfigs> classesConfigs) {
                this.classesConfigs = classesConfigs;
            }

            public static class ClassesConfigs {
                /**
                 * recordId : 1
                 * classesId : 1
                 * classesName : 一班
                 * amount : 6
                 */

                private Integer recordId;
                private Integer classesId;
                private String classesName;
                private Integer amount;

                public Integer getRecordId() {
                    return recordId;
                }

                public void setRecordId(Integer recordId) {
                    this.recordId = recordId;
                }

                public Integer getClassesId() {
                    return classesId;
                }

                public void setClassesId(Integer classesId) {
                    this.classesId = classesId;
                }

                public String getClassesName() {
                    return classesName;
                }

                public void setClassesName(String classesName) {
                    this.classesName = classesName;
                }

                public Integer getAmount() {
                    return amount;
                }

                public void setAmount(Integer amount) {
                    this.amount = amount;
                }
            }
        }
    }
}
