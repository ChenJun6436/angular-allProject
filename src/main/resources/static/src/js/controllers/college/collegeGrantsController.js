/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('collegeGrantsController', ['$scope', '$rootScope', '$element', '$state', '$http', 'collegeServer', 'commonServer', 'NgTableParams', 'tools',
        function ($scope, $rootScope, $element, $state, $http, collegeServer, commonServer, NgTableParams, tools) {
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
                showFeedBack: window.localStorage.getItem('showFeedBack') || 'true',
                btnValue: '提交到学院公示'
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
                                collegeServer.getGrantsList().then(function (data) {
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
                    data[0].selected = {
                        id: 0,
                        name: data[0].collegeAudit
                    };
                    if ($scope.vm.studentMaxStatus  === 10) {
                        data[0].collegeAnno = '正在进行';
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
                    if ($scope.vm.statusCode >= 6 && (data[0].status === 11 || data[0].status === 110)) {
                        data[0].schoolAudit = '正在进行';
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
                console.log($scope.vm.statusCode)
                console.log($scope.vm.studentMaxStatus)
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
            };

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
             * 驳回学生材料
             */
            $scope.rejectToAdvisor = function () {
                if($scope.checkboxes&&$scope.checkboxes.choosedStudent.length>0){
                    $('#rejectToAdvisor').modal('show');
                    $scope.addReject = function () {
                        tools.alertSuccess($rootScope, '提交成功');
                        $scope.vm.showFeedBack = 'false';
                        $('#rejectToAdvisor').modal('hide');
                        $scope.checkboxes.items = {};
                    };
                }else{
                    tools.alertError($rootScope, '请先选择要驳回学生');
                }
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
                $scope.vm.statusCode = 4;
                $scope.vm.studentMaxStatus = 10;
                $scope.vm.tableFlag = 0;
                $scope.vm.btnValue = '保存并返回到学院公示';
                /**
                 * 获取贫困等级列表
                 */
                collegeServer.getGrantsList().then(function (data) {
                    if (data.status) {
                        $scope.common(data);
                    } else {
                        $scope.vm.tableFlag = 2;
                    }
                });
            };
        }
    ]);
})();
