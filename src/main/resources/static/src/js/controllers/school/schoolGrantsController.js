/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('schoolGrantsController', ['$scope', '$rootScope', '$cookies', 'ROOT', 'FileUploader', 'schoolServer', 'commonServer', 'NgTableParams', 'tools', '$element','studentServer',
        function ($scope, $rootScope, $cookies, ROOT, FileUploader, schoolServer, commonServer, NgTableParams, tools, $element, studentServer) {
            $scope.vm = {
                tableFlag: 0,
                poorInfoList: {},
                feedbackList: {},
                feedBackContent: '',
                reApply: {
                    studentId: ''
                },
                statusData: {
                    availableOptions: [{
                        id: 1,
                        name: '已处理'
                    }, {
                        id: 0,
                        name: '未处理'
                    }, {
                        id: 2,
                        name: '全部'
                    }],
                    selectedOption: {
                        id: 2,
                        name: '全部'
                    }
                },
                showFeedBack: window.localStorage.getItem('showFeedBack') || 'true',
                btnValue: '提交到学校公示'
            };
            $scope.initStatus = function () {
                $scope.vm.tableFlag = 0;
                commonServer.getStatus().then(function (data) {
                    if (data.status) {
                        data.data.status = 6;
                        data.data.studentMaxStatus = 11;
                        $scope.vm.statusCode = data.data.status;
                        $scope.vm.lastTime = new Date().getTime();
                        $scope.vm.studentMaxStatus = data.data.studentMaxStatus;
                        if (data.data.status >= 6) {
                            commonServer.getPovertyLevelList().then(function (data) {
                                if (data.status) {
                                    $scope.vm.povertyLevelList = data.data;
                                }
                            });
                        }
                        $scope.init = function () {
                            if (data.data.status === 7 && data.data.studentMaxStatus !== 10 && data.data.studentMaxStatus !== 11 && data.data.studentMaxStatus !== 107 && data.data.studentMaxStatus !== 108 && data.data.studentMaxStatus !== 109 && data.data.studentMaxStatus !== 110 || (data.data.status > 6 && (data.data.studentMaxStatus === 12 || data.data.studentMaxStatus === 105 || data.data.studentMaxStatus === 106 || data.data.studentMaxStatus >= 111))) {
                                if ($scope.vm.showFeedBack === 'true') {
                                    /**
                                     * 获取反馈信息
                                     */
                                    schoolServer.getFeedback({
                                        status: $scope.vm.statusData.selectedOption.id
                                    }).then(function (data) {
                                        if (data.status) {
                                            $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                                            $scope._data = data.data.dataList;
                                            $scope.tableParams = new NgTableParams({
                                                page: 1,
                                                count: 15
                                            }, {
                                                dataset: $scope._data,
                                                counts: [10, 15, 20, 30]
                                            });
                                        } else {
                                            $scope.vm.tableFlag = 2;
                                        }
                                    });
                                } else {
                                    /**
                                     * 处理驳回信息
                                     */
                                    commonServer.getRejectLists({
                                        status: 114
                                    }).then(function (data) {
                                        if (data.status) {
                                            $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                                            $scope._data = data.data.dataList;
                                            angular.forEach(data.data.dataList, function (data) {
                                                data.selected = {
                                                    id: 0,
                                                    name: data.schoolAudit
                                                };
                                            });
                                            $scope.tableParams = new NgTableParams({
                                                page: 1,
                                                count: 15
                                            }, {
                                                dataset: $scope._data,
                                                counts: [10, 15, 20, 30]
                                            });
                                        } else {
                                            $scope.vm.tableFlag = 2;
                                        }
                                    });
                                }

                            } else {
                                /**
                                 * 获取贫困认定列表
                                 */
                                schoolServer.getGrantsList().then(function (data) {
                                    if (data.status) {
                                        $scope.vm.totalNum = data.data.dataList.length;
                                        $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                                        $scope._data = data.data.dataList;
                                        angular.forEach(data.data.dataList, function (data) {
                                            data[0].selected = {
                                                id: 0,
                                                name: data[0].schoolAudit
                                            };
                                            if ($scope.vm.statusCode >= 2 && data[0].status === 4) {
                                                data[0].democracyAudit = '正在进行';
                                            }
                                            if ($scope.vm.statusCode === 2 && data[0].status === 6) {
                                                data[0].advisorAudit = '未进行';
                                            }
                                            if ($scope.vm.statusCode >= 3 && data[0].status === 6) {
                                                data[0].advisorAudit = '正在进行';
                                            }
                                            if ($scope.vm.statusCode === 3 && data[0].status === 8) {
                                                data[0].collegeAudit = '未进行';
                                            }
                                            if ($scope.vm.statusCode >= 4 && data[0].status === 8) {
                                                data[0].collegeAudit = '正在进行';
                                            }
                                            if ($scope.vm.statusCode === 5 && data[0].status === 11) {
                                                data[0].schoolAudit = '未进行';
                                            }
                                            if ($scope.vm.statusCode === 6 && data[0].status === 12) {
                                                data[0].schoolAnno = '未进行';
                                            }
                                        });
                                        $scope.tableParams = new NgTableParams({
                                            page: 1,
                                            count: 15
                                        }, {
                                            dataset: $scope._data,
                                            counts: [10, 15, 20, 30]
                                        });

                                        // _flag for check init
                                        var _flag = true;
                                        $scope.$watch(function () {
                                            return $scope.tableParams.data;
                                        }, function (value) {
                                            if (value.length > 0) {
                                                $scope.checkboxes = {
                                                    checked: false,
                                                    items: {}
                                                };
                                                $scope.thisPageArr = value;
                                                if (_flag) {
                                                    $scope.initCheck();
                                                    _flag = false;
                                                }
                                            }
                                        });

                                    } else {
                                        $scope.vm.tableFlag = 2;
                                    }
                                });
                            }
                        };
                        $scope.init();
                        /**
                         * 审核驳回名单
                         */
                        $scope.getRejectLists = function () {
                            $scope.vm.tableFlag = 0;
                            $scope.vm.showFeedBack = 'false';
                            window.localStorage.setItem('showFeedBack', 'false');
                            $scope.init();
                        };
                        /**
                         * 查看公示
                         */
                        $scope.getFeedBackShow = function () {
                            $scope.vm.tableFlag = 0;
                            $scope.vm.showFeedBack = 'true';
                            window.localStorage.setItem('showFeedBack', 'true');
                            $scope.init();
                        };
                    } else {
                        $scope.vm.tableFlag = 2;
                    }
                });
            };
            $scope.initStatus();

            /**
             * 修改等级
             * @param id
             * @param name
             */
            $scope.changeLevel = function (id, name) {
                tools.alertSuccess($rootScope, '修改成功');
            };
            /**
             * 下载名单
             */
            $scope.downloadList = function () {
                commonServer.downloadList().then(function (data) {
                    if (data.status) {
                        window.open(data.data.url);
                    } else {
                        tools.alertError($rootScope, data.message);
                    }
                });
            };
            /**
             * 提交进行学校公示
             */
            $scope.commitToSchoolNotice = function () {
                schoolServer.commitToSchoolNotice().then(function (data) {
                    if (data.status) {
                        $scope.vm.showFeedBack = 'true';
                        window.localStorage.setItem('showFeedBack', 'true');
                        schoolServer.getFeedback({
                            status: $scope.vm.statusData.selectedOption.id
                        }).then(function (data) {
                            if (data.status) {
                                $scope.vm.statusCode = 7;
                                $scope.vm.studentMaxStatus = 12;
                                $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                                $scope._data = data.data.dataList;
                                $scope.tableParams = new NgTableParams({
                                    page: 1,
                                    count: 15
                                }, {
                                    dataset: $scope._data,
                                    counts: [10, 15, 20, 30]
                                });
                            } else {
                                $scope.vm.tableFlag = 2;
                            }
                        });
                        tools.alertSuccess($rootScope, '提交成功');
                    }
                });
            };
            $scope.vm.rejectToCollege = {
                content: ''
            };
            $scope.vm.collegeList = {};
            /**
             * 驳回学生材料
             */
            $scope.rejectToAdvisor = function () {
                if ($scope.checkboxes && $scope.checkboxes.choosedStudent.length > 0) {
                    $('#rejectToAdvisor').modal('show');
                    $scope.addReject = function () {
                        tools.alertSuccess($rootScope, '提交成功');
                        $scope.vm.showFeedBack = 'false';
                        $('#rejectToAdvisor').modal('hide');
                        $scope.checkboxes.items = {};
                    };
                } else {
                    tools.alertError($rootScope, '请先选择要驳回学生');
                }
            };

            /**
             * 处理反馈
             * @param id
             */
            $scope.vm.remark = '我已处理';
            $scope.dealFeedbackShow = function (id) {
                $('#dealFeedback').modal('show');
                $scope.dealFeedback = function () {
                    if ($scope.vm.remark === '') {
                        tools.alertError($rootScope, '处理描述不能为空');
                        return;
                    }
                    schoolServer.dealFeedback({
                        'studentId': id,
                        'remark': $scope.vm.remark
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess($rootScope, '提交成功');
                            var _newPage = $scope.tableParams.page();
                            var _count = $scope.tableParams.count();
                            angular.forEach($scope._data, function (data) {
                                data.studentId === id && (data.isDeal = 1);
                            });
                            $scope.tableParams = new NgTableParams({
                                page: _newPage,
                                count: _count
                            }, {
                                dataset: $scope._data,
                                counts: [10, 15, 20, 30]
                            });
                            $('#dealFeedback').modal('hide');
                        }
                    });
                };
            };

            /**
             * 查看操作记录
             */
            $scope.goViewOperationRecord = function () {
                window.open('#/viewOperationRecord');
            };
            /**
             * 完成评定
             */
            $scope.complete = function () {
                schoolServer.complete().then(function (data) {
                    if (data.status) {
                        tools.alertSuccess($rootScope, '提交成功');
                    }
                });
            };
            $scope.doSuccess = function () {
                schoolServer.getGrantsSuccess().then(function (data) {
                    if (data.status) {
                        $scope.vm.statusCode = 0;
                        $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                        $scope._data = data.data.dataList;
                        $scope.tableParams = new NgTableParams({
                            page: 1,
                            count: 15
                        }, {
                            dataset: $scope._data,
                            counts: [10, 15, 20, 30]
                        });
                    } else {
                        $scope.vm.tableFlag = 2;
                    }
                });
            };
            /**
             * 补填申请
             */
            $scope.reApply = function () {
                $('#reApply').modal('show');

                commonServer.getGrantsManage().then(function (data) {
                    if (data.status) {
                        $scope.vm.grantsList = data.data.dataList;
                    }
                });
                $scope.addApply = function () {
                    if ($scope.vm.reApply.studentId) {
                        schoolServer.addApplyInfo($scope.vm.reApply).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess($rootScope, '新增成功');
                                $('#reApply').modal('hide');
                                $scope.vm.reApply.studentId = '';
                                $scope.init();
                            }
                        });
                    } else {
                        tools.alertError($rootScope, '请先填写学生学号');
                    }
                };
            };
            /**
             * 取消学生贫困认定
             * @param id    学生ID
             */
            $scope.cancelApplyModal = function (id) {
                $('#cancelApply').modal('show');
                $scope.cancelApply = function () {
                    schoolServer.cancelApply({studentId: id}).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess($rootScope, '取消成功');
                            $('#cancelApply').modal('hide');
                            var _newPage = $scope.tableParams.page();
                            var _count = $scope.tableParams.count();
                            //从$scope._data中去除审核通过的学生
                            angular.forEach($scope._data, function (data, index) {
                                data.studentId === id && $scope._data.splice(index, 1);
                            });
                            if (((_newPage - 1) * $scope.tableParams.count() + 1) >= $scope.tableParams.settings().total) {
                                _newPage = _newPage - 1;
                            }
                            $scope.tableParams = new NgTableParams({
                                page: _newPage,
                                count: _count
                            }, {
                                dataset: $scope._data,
                                counts: [10, 15, 20, 30]
                            });
                        }
                    });
                };
            };


            $scope.initCheck = function () {

                // watch for check all checkbox
                $scope.$watch(function () {
                    return $scope.checkboxes.checked;
                }, function (value) {
                    angular.forEach($scope.thisPageArr, function (item) {
                        $scope.checkboxes.items[item[0] ? item[0].studentId : ''] = value;
                    });
                });

                // watch for data checkboxes
                $scope.$watch(function () {
                    return $scope.checkboxes.items;
                }, function (values) {
                    var checked = 0, unchecked = 0,
                        total = $scope.thisPageArr.length;
                    $scope.checkboxes.choosedStudent = [];
                    angular.forEach($scope.thisPageArr, function (item) {
                        $scope.checkboxes.items[item[0] ? item[0].studentId : ''] && $scope.checkboxes.choosedStudent.push(item[0]);
                        checked += ($scope.checkboxes.items[item[0] ? item[0].studentId : '']) || 0;
                        unchecked += (!$scope.checkboxes.items[item[0] ? item[0].studentId : '']) || 0;
                    });
                    if ((unchecked == 0) || (checked == 0)) {
                        $scope.checkboxes.checked = (checked == total);
                    }
                    // grayed checkbox
                    angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                    console.log($scope.checkboxes.choosedStudent)
                }, true);
            };


            $scope.goCheckList = function () {
                $scope.vm.statusCode = 7;
                $scope.vm.studentMaxStatus = 110;
                $scope.vm.tableFlag = 0;
                $scope.vm.btnValue = '保存并返回到学校公示';
                schoolServer.getGrantsList().then(function (data) {
                    if (data.status) {
                        $scope.vm.totalNum = data.data.dataList.length;
                        $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                        $scope._data = data.data.dataList;
                        angular.forEach(data.data.dataList, function (data) {
                            data[0].selected = {
                                id: 0,
                                name: data[0].schoolAudit
                            };
                            if ($scope.vm.statusCode === 7) {
                                data[0].schoolAnno = '正在进行';
                            }


                            if ($scope.vm.statusCode >= 2 && data[0].status === 4) {
                                data[0].democracyAudit = '正在进行';
                            }
                            if ($scope.vm.statusCode === 2 && data[0].status === 6) {
                                data[0].advisorAudit = '未进行';
                            }
                            if ($scope.vm.statusCode >= 3 && data[0].status === 6) {
                                data[0].advisorAudit = '正在进行';
                            }
                            if ($scope.vm.statusCode === 3 && data[0].status === 8) {
                                data[0].collegeAudit = '未进行';
                            }
                            if ($scope.vm.statusCode >= 4 && data[0].status === 8) {
                                data[0].collegeAudit = '正在进行';
                            }
                            if ($scope.vm.statusCode === 5 && data[0].status === 11) {
                                data[0].schoolAudit = '未进行';
                            }
                            if ($scope.vm.statusCode === 6 && data[0].status === 12) {
                                data[0].schoolAnno = '未进行';
                            }
                        });
                        $scope.tableParams = new NgTableParams({
                            page: 1,
                            count: 15
                        }, {
                            dataset: $scope._data,
                            counts: [10, 15, 20, 30]
                        });
                    } else {
                        $scope.vm.tableFlag = 2;
                    }
                });
            };


            /**
             * 上传民主评议结果
             */
            (function () {
                var uploader = $scope.uploader = new FileUploader({
                    url: ROOT + '/student/upload',
                    autoUpload: true,
                    removeAfterUpload: true,
                    queueLimit: 1
                });
                uploader.onAfterAddingFile = function (fileItem) {
                    var lastName = fileItem.file.name.slice(-3).toLowerCase();
                    var _arr = ['doc', 'ocx', 'pdf', 'lsx', 'xls', 'jpg', 'bmp', 'png'];
                    if (_arr.indexOf(lastName) === -1) {
                        tools.alertError($rootScope, '请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】等规定格式文件');
                        uploader.clearQueue();
                    }
                    if (fileItem.file.size > 20971520) {
                        tools.alertError($rootScope, '上传文件大小不得大于20M');
                        uploader.clearQueue();
                    }
                };
                uploader.onCompleteItem = function (fileItem, response) {
                    //var _repsonse=angular.toJson(response);
                    if (response.status) {
                        tools.alertSuccess($rootScope, '上传成功');
                        $scope.initUpload();
                    } else {
                        tools.alertSuccess($rootScope, '上传成功');
                        $scope.vm.uploadsList.push({
                            "id": 11,
                            "filename": fileItem._file.name,
                            "uploadTime": new Date().getTime(),
                            "url": "target\\AccurateSubsidize\\upload/2014220701022/XXXX\u5927\u5b66\u5bb6\u5ead\u7ecf\u6d4e\u56f0\u96be\u5b66\u751f\u8ba4\u5b9a\u7533\u8bf7\u8868.doc"
                        });
                    }
                };
                /**
                 * 初始化获取上传列表
                 */
                $scope.initUpload = function () {
                    studentServer.getUploads().then(function (data) {
                        if (data.status) {
                            $scope.vm.uploadsList = [];
                            /**
                             * 删除文件
                             * @param id    文件ID
                             */
                            $scope.removeUpload = function (id) {
                                studentServer.removeUpload({
                                    'id': id
                                }).then(function (data) {
                                    if (data.status) {
                                        tools.alertSuccess($rootScope, '删除成功');
                                        $scope.initUpload();
                                    }
                                });
                            };
                        }
                    });
                };
                $scope.initUpload();
            })();
        }
    ]);
})();
