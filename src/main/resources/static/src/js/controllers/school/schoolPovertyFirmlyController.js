/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('schoolPovertyFirmlyController', ['$scope', '$rootScope', '$cookies', '$state', '$http', 'schoolServer', 'commonServer', 'NgTableParams', 'tools', '$filter',
        function ($scope, $rootScope, $cookies, $state, $http, schoolServer, commonServer, NgTableParams, tools, $filter) {
            $scope.vm = {
                tableFlag: 0,
                poorInfoList: {},
                feedbackList: {},
                feedBackContent: '',
                reApply: {
                    studentId: '',
                    level: '困难'
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
                showFeedBack: window.localStorage.getItem('showFeedBack') || 'true'
            };
            $scope.initStatus = function () {
                $scope.vm.tableFlag = 0;
                commonServer.getStatus().then(function (data) {
                    if (data.status) {
                        data.data.status=6;
                        data.data.studentMaxStatus=11;
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
                                schoolServer.getPoorList().then(function (data) {
                                    if (data.status) {
                                        $scope.vm.totalNum = data.data.dataList.length;
                                        $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                                        $scope._data = data.data.dataList;
                                        angular.forEach(data.data.dataList, function (data) {
                                            data.selected = {
                                                id: 0,
                                                name: data.schoolAudit
                                            };
                                            if ($scope.vm.statusCode >= 2 && data.status === 4) {
                                                data.democracyAudit = '正在进行';
                                            }
                                            if ($scope.vm.statusCode === 2 && data.status === 6) {
                                                data.advisorAudit = '未进行';
                                            }
                                            if ($scope.vm.statusCode >= 3 && data.status === 6) {
                                                data.advisorAudit = '正在进行';
                                            }
                                            if ($scope.vm.statusCode === 3 && data.status === 8) {
                                                data.collegeAudit = '未进行';
                                            }
                                            if ($scope.vm.statusCode >= 4 && data.status === 8) {
                                                data.collegeAudit = '正在进行';
                                            }
                                            if ($scope.vm.statusCode === 5 && data.status === 11) {
                                                data.schoolAudit = '未进行';
                                            }
                                            if ($scope.vm.statusCode === 6 && data.status === 12) {
                                                data.schoolAnno = '未进行';
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
                if (name === '特别困难' || name === '困难' || name === '一般困难' || name === '不困难') {
                    schoolServer.modifyPoorLevel({
                        'studentId': id,
                        'povertyLevel': name
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess($rootScope, '修改成功');
                            var _newPage = $scope.tableParams.page();
                            var _count = $scope.tableParams.count();
                            angular.forEach($scope._data, function (data) {
                                data.studentId === id && (data.schoolAudit = name);
                            });
                            $scope.tableParams = new NgTableParams({
                                page: _newPage,
                                count: _count
                            }, {
                                dataset: $scope._data,
                                counts: [10, 15, 20, 30]
                            });
                        } else {
                            $scope.initStatus();
                        }
                    });
                }
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
             * 驳回至学院
             */
            $scope.rejectToCollege = function () {
                commonServer.getCollege().then(function (data) {
                    if (data.status) {
                        $scope.vm.collegeList = data.data;
                    }
                });
                $('#rejectToCollege').modal('show');
                $scope.addReject = function () {
                    $scope.vm.rejectToCollege.collegeId = $('#colleges').val();
                    if ($scope.vm.rejectToCollege.content !== '') {
                        schoolServer.rejectToCollege($scope.vm.rejectToCollege).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess($rootScope, '提交成功');
                                $scope.vm.showFeedBack = 'false';
                                window.localStorage.setItem('showFeedBack', 'false');
                                $scope.initStatus();
                                $('#rejectToCollege').modal('hide');
                            }
                        });
                    } else {
                        tools.alertError($rootScope, '请填写驳回原因');
                    }

                };
            };
            /**
             * 处理反馈
             * @param id
             */
            $scope.vm.remark='我已处理';
            $scope.dealFeedbackShow= function (id) {
                $('#dealFeedback').modal('show');
                $scope.dealFeedback = function () {
                    if($scope.vm.remark===''){
                        tools.alertError($rootScope,'处理描述不能为空');
                        return;
                    }
                    schoolServer.dealFeedback({
                        'studentId': id,
                        'remark':$scope.vm.remark
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
            $scope.doSuccess= function () {
                schoolServer.getSuccess().then(function(data){
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
        }
    ]);
})();
