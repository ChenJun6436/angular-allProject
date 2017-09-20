/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('collegeAuditPovertyController', collegeAuditPovertyController);

    collegeAuditPovertyController.$inject = [
        '$scope',
        '$rootScope',
        'povertyCollegeServer',
        'povertyCommonServer',
        'povertySchoolServer',
        'commonsServer',
        'NgTableParams',
        'povertyBusinessServer',
        'tools'];

    function collegeAuditPovertyController($scope, $rootScope, povertyCollegeServer, povertyCommonServer, povertySchoolServer, commonsServer, NgTableParams, povertyBusinessServer, tools) {
        $scope.vm = {
            active: 0,
            tableFlag: 0,
            openTableFlag: 0,
            openFlag: false,
            toSchoolBtn: false,
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
            reApply: {
                studentId: '',
                level: '困难'
            }
        };

        $scope.init = function () {
            povertyBusinessServer.getPovertyMaxStatus().then(function (data) {
                povertyCommonServer.getAtOpenTime().then(function (data) {
                    if(data.data){
                        $scope.vm.openFlag = true;
                        $scope.isToSchool()
                    }else {
                        $scope.vm.openFlag = false;
                        $scope.getTime();
                    }
                })
                    $scope.initOpenDissent();
                    $scope.initApply();

            });
        };

        $scope.init();
        $scope.changeNav = function (val) {
            $scope.vm.active = val;
        }
        $scope.isToSchool = function () {
            povertyCommonServer.getOpenTime().then(function (data) {
                if(data.data) {
                    if(data.data.type == 2){
                        $scope.vm.toSchoolBtn = data.data.publicityClosed
                    }
                }
                
            })
        }
        /**
         * 获取时间信息
         */
        $scope.getTime = function () {
            commonsServer.getCommonsServerTime().then(function (data) {
                if(data.status) {
                    $scope.vm.now = data.data;
                    povertySchoolServer.getProcessTime().then(function (data) {
                        if (data.status) {
                            $scope.vm.processTimeList = data.data || {};
                            $scope.vm.processTimeList.collegeOpenEndTime =$scope.vm.processTimeList.collegeOpenEndTime ? $scope.vm.processTimeList.collegeOpenEndTime : '';
                            $scope.vm.processTimeList.collegeOpenStartTime =$scope.vm.processTimeList.collegeOpenStartTime ? $scope.vm.processTimeList.collegeOpenStartTime : $scope.vm.now;
                            //学生申请
                            $scope.vm.applyStartOptions = {
                                maxDate: new Date($scope.vm.processTimeList.collegeOpenEndTime)
                            };
                            $scope.vm.applyEndOptions = {
                                minDate: $scope.vm.processTimeList.collegeOpenStartTime>$scope.vm.now ? new Date($scope.vm.processTimeList.collegeOpenStartTime): new Date($scope.vm.now)
                            };
                            $scope.$watch('vm.processTimeList.collegeOpenEndTime', function (to) {
                                $scope.vm.applyStartOptions.minDate =  new Date($scope.vm.now);
                                $scope.vm.applyStartOptions.maxDate = new Date(to);
                                $scope.vm.processTimeList.collegeOpenEndTime = new Date(to).getTime()
                            });
                            $scope.$watch('vm.processTimeList.collegeOpenStartTime', function (to) {
                                $scope.vm.applyEndOptions.minDate = new Date(to).getTime()>$scope.vm.now ? new Date(to): new Date($scope.vm.now);
                                $scope.vm.processTimeList.collegeOpenStartTime =new Date(to).getTime()
                            });
                        }
                    });
                }
            })

        };
        /**
         * 更新时间
         */
        $scope.updateTime = function () {
            $scope.vm.submit = true;
            if ($scope.vm.processForm.$valid) {
                povertySchoolServer.setOpenTime({
                    endTime: $scope.vm.processTimeList.collegeOpenEndTime,
                    startTime: $scope.vm.processTimeList.collegeOpenStartTime,
                    type: 2
            }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('保存成功');
                        $('#openTimeSetting').modal('hide');
                        $scope.init();
                    }
                });
            } else {
                tools.alertError('所有时间都需设置');
            }
        };
        /**
         * 初始化申请列表信息
         */
        $scope.initApply = function () {
            povertyCommonServer.listStudentPovertyApply().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.totalNum = data.data.length;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    //判断是否可以提交到学院公示
                    $scope.vm.commitBtnShow = $scope.vm.studentList.some(function (value) {
                        return value.taskId;
                    });
                    //判断是否是驳回情况
                    $scope.vm.isRejected = $scope.vm.studentList.some(function (value) {
                        return value.result === '驳回';
                    });

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };

        /**
         * 初始化异议信息
         */
        $scope.initOpenDissent = function () {
            povertyCollegeServer.viewOpenDissent().then(function (data) {
                if (data.status) {
                    $scope.vm.openTableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.dissentList = data.data;
                    $scope.openTableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: angular.copy($scope.vm.dissentList),
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.openTableFlag = 2;
                }
            });
        };

        /**
         * 切换处理列表
         */
        $scope.changeStatus = function () {

            if ($scope.vm.statusData.selectedOption.id !== 2) {
                $scope.vm.dissentListFilter = $scope.vm.dissentList.filter(function (value) {
                    return value.status === $scope.vm.statusData.selectedOption.id;
                });
            } else {
                $scope.vm.dissentListFilter = $scope.vm.dissentList;
            }

            $scope.openTableParams = new NgTableParams({
                page: 1,
                count: 15
            }, {
                dataset: $scope.vm.dissentListFilter,
                counts: [10, 15, 20, 30]
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
                    tools.alertError('处理描述不能为空');
                    return;
                }
                povertyCollegeServer.dealOpenDissent({
                    id: id,
                    dealOpinion: $scope.vm.remark
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('提交成功');
                        var _newPage = $scope.openTableParams.page();
                        var _count = $scope.openTableParams.count();
                        angular.forEach($scope.vm.dissentList, function (data) {
                            data.id === id && (data.status = 1);
                        });
                        $scope.openTableParams = new NgTableParams({
                            page: _newPage,
                            count: _count
                        }, {
                            dataset: $scope.vm.dissentList,
                            counts: [10, 15, 20, 30]
                        });
                        $('#dealFeedback').modal('hide');
                    }
                });
            };
        };

        /**
         * 取消学生贫困认定
         * @param student    学生
         */
        $scope.cancelApplyModal = function (student) {
            $('#cancelApply').modal('show');
            $scope.cancelApply = function () {
                povertyCollegeServer.cancelApply({
                    studentId: student.studentId,
                    processId: student.processInstanceId
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('取消成功');
                        $('#cancelApply').modal('hide');
                        var _newPage = $scope.tableParams.page();
                        var _count = $scope.tableParams.count();
                        //从$scope.vm.studentList中去除审核通过的学生
                        angular.forEach($scope.vm.studentList, function (data, index) {
                            data.studentId === student.studentId && $scope.vm.studentList.splice(index, 1);
                        });
                        if (((_newPage - 1) * $scope.tableParams.count() + 1) >= $scope.tableParams.settings().total) {
                            _newPage = _newPage - 1;
                        }
                        $scope.tableParams = new NgTableParams({
                            page: _newPage,
                            count: _count
                        }, {
                            dataset: $scope.vm.studentList,
                            counts: [10, 15, 20, 30]
                        });
                    }
                });
            };
        };



        $scope.vm.rejectToAdvisor = {};
        $scope.vm.advisorList = {};
        /**
         * 驳回至辅导员
         */
        $scope.rejectToAdvisor = function () {
            povertyCollegeServer.listAdvisors().then(function (data) {
                if (data.status) {
                    $scope.vm.advisorList = data.data;
                    $scope.vm.rejectToAdvisor.choosedAdvisor = data.data[0];
                }
            });
            $('#rejectToAdvisor').modal('show');
            $scope.addReject = function () {
                if ($scope.vm.rejectToAdvisor.content) {
                    povertyCommonServer.operateProcess({
                        isPass: 0,
                        step: $scope.vm.openFlag ? 'collegeOpen' : 'college',
                        userName: $scope.vm.rejectToAdvisor.choosedAdvisor.sn,
                        userType: $scope.vm.rejectToAdvisor.choosedAdvisor.userType,
                        reason: $scope.vm.rejectToAdvisor.content,
                        realName: $scope.vm.rejectToAdvisor.choosedAdvisor.name
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('提交成功');
                            $scope.init();
                            $scope.vm.showFeedBack = 'false';
                            window.localStorage.setItem('showFeedBack', 'false');
                            $scope.vm.rejectToAdvisor.content = '';
                            $('#rejectToAdvisor').modal('hide');
                        }
                    });
                } else {
                    tools.alertError('请填写驳回内容');
                }
            };
        };

        $scope.openTimeSetting = function () {
            $('#openTimeSetting').modal('show');
        }
    }
})();
