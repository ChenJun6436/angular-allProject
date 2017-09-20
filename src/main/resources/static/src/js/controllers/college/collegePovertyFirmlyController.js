/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('collegePovertyFirmlyController', ['$scope', '$rootScope', '$cookies', '$state', '$http', 'collegeServer', 'commonServer', 'NgTableParams', 'tools',
        function ($scope, $rootScope, $cookies, $state, $http, collegeServer, commonServer, NgTableParams, tools) {
            $scope.vm = {
                tableFlag: 0,
                poorInfoList: {},
                feedbackList: {},
                feedBackContent: '',
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
                povertyLevelList: [],
                showFeedBack: window.localStorage.getItem('showFeedBack') || 'true'
            };
            /**
             * 获取状态码
             */
            $scope.initStatus = function () {
                $scope.vm.tableFlag = 0;
                commonServer.getStatus().then(function (data) {
                    if (data.status) {
                        $scope.vm.statusCode = 4;
                        $scope.vm.studentMaxStatus = 8;
                        $scope.vm.lastTime = new Date().getTime();
                        if (data.data.status > 3) {
                            commonServer.getPovertyLevelList().then(function (data) {
                                if (data.status) {
                                    $scope.vm.povertyLevelList = data.data;
                                }
                            });
                        }
                        $scope.init = function () {
                            if (data.data.status === 5 && data.data.studentMaxStatus !== 7 && data.data.studentMaxStatus !== 8 && data.data.studentMaxStatus !== 101 || (data.data.status > 4 && (data.data.studentMaxStatus === 9 || data.data.studentMaxStatus === 102 || data.data.studentMaxStatus === 103))) {
                                if ($scope.vm.showFeedBack === 'true') {
                                    /**
                                     * 获取反馈信息
                                     */
                                    collegeServer.getFeedbackList({
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
                                        status: 103
                                    }).then(function (data) {
                                        if (data.status) {
                                            $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                                            $scope._data = data.data.dataList;
                                            angular.forEach(data.data.dataList, function (data) {
                                                data.selected = {
                                                    id: 0,
                                                    name: data.collegeAudit
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
                                 * 获取贫困等级列表
                                 */
                                collegeServer.getPoorList().then(function (data) {
                                    if (data.status) {
                                        $scope.common(data);
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
            $scope.common = function (data) {
                $scope.vm.totalNum = data.data.dataList.length;
                $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                $scope._data = data.data.dataList;
                angular.forEach(data.data.dataList, function (data) {
                    data.selected = {
                        id: 0,
                        name: data.collegeAudit
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
                    if ($scope.vm.statusCode >= 6 && (data.status === 11 || data.status === 110)) {
                        data.schoolAudit = '正在进行';
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
            };

            /**
             * 修改等级
             * @param id
             * @param name
             */
            $scope.changeLevel = function (id, name) {
                if (name === '特别困难' || name === '困难' || name === '一般困难' || name === '不困难') {
                    collegeServer.modifyPoorLevel({
                        'studentId': id,
                        'povertyLevel': name
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess($rootScope, '修改成功');
                            var _newPage = $scope.tableParams.page();
                            var _count = $scope.tableParams.count();
                            angular.forEach($scope._data, function (data) {
                                data.studentId === id && (data.collegeAudit = name);
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
                    }
                });
            };
            /**
             * 提交进行学院公示
             */
            $scope.commitToCollegeNotice = function () {
                collegeServer.commitToCollegeNotice().then(function (data) {
                    if (data.status) {
                        tools.alertSuccess($rootScope, '提交成功');
                        $scope.vm.showFeedBack = 'true';
                        window.localStorage.setItem('showFeedBack', 'true');
                        collegeServer.getFeedbackList({
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
                                $scope.vm.statusCode = 5;
                                $scope.vm.studentMaxStatus = 9;
                            } else {
                                $scope.vm.tableFlag = 2;
                            }
                        });
                    }
                });
            };
            $scope.vm.rejectToAdvisor = {
                advisorId: 0,
                content: ''
            };
            $scope.vm.advisorList = {};
            /**
             * 驳回至辅导员
             */
            $scope.rejectToAdvisor = function () {
                collegeServer.getAdvisorList().then(function (data) {
                    if (data.status) {
                        $scope.vm.advisorList = data.data;
                    }
                });
                $('#rejectToAdvisor').modal('show');
                $scope.addReject = function () {
                    $scope.vm.rejectToAdvisor.advisorId = $('#advisor').val();
                    if ($scope.vm.rejectToAdvisor.content !== '') {
                        collegeServer.rejectToAdvisor($scope.vm.rejectToAdvisor).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess($rootScope, '提交成功');
                                $scope.vm.showFeedBack = 'false';
                                window.localStorage.setItem('showFeedBack', 'false');
                                $scope.initStatus();
                                $scope.vm.rejectToAdvisor.content = '';
                                $('#rejectToAdvisor').modal('hide');
                            }
                        });
                    } else {
                        tools.alertError($rootScope, '请填写驳回内容');
                    }
                };
            };
            /**
             * 提交至学校审核
             */
            $scope.commitToSchoolCheck = function () {
                collegeServer.getListAfterCommitToSchoolCheck().then(function (data) {
                    if (data.status) {
                        $scope.vm.statusCode = 6;
                        $scope.vm.studentMaxStatus = 11;
                        $scope.common(data);
                    } else {
                        $scope.vm.tableFlag = 2;
                    }
                });
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
                    collegeServer.dealFeedback({
                        'studentId': id
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
             * 查看驳回原因
             */
            $scope.getRejectReason = function () {
                window.open('#/showRejectReason');
            };
        }
    ]);
})();
