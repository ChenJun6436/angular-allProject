/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('schoolAuditPovertyController', schoolAuditPovertyController);

    schoolAuditPovertyController.$inject = [
        '$scope',
        '$rootScope',
        'povertySchoolServer',
        'povertyCommonServer',
        'povertyCollegeServer',
        'commonsServer',
        'NgTableParams',
        'povertyBusinessServer',
        'tools'];

    function schoolAuditPovertyController($scope, $rootScope, povertySchoolServer, povertyCommonServer, povertyCollegeServer, commonsServer, NgTableParams,  povertyBusinessServer, tools) {
        $scope.vm = {
            active: 0,
            tableFlag: 0,
            openTableFlag: 0,
            toEndBtn: false,
            openFlag: false,
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
        };

        $scope.init = function () {
            povertyBusinessServer.getPovertyMaxStatus().then(function (data) {
                povertyCommonServer.getAtOpenTime().then(function (data) {
                    if(data.data){
                        $scope.vm.openFlag = true;
                        $scope.isToEnd()
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
        $scope.vm.rejectToCollege = {};
        $scope.vm.collegeList = {};
        $scope.changeNav = function (val) {
            $scope.vm.active = val;
        }
        $scope.isToEnd = function () {
            povertyCommonServer.getOpenTime().then(function (data) {
                if(data.data) {
                    if(data.data.type == 1){
                        $scope.vm.toEndBtn = data.data.publicityClosed
                    }
                }

            })
        }
        /**
         * 驳回至学院
         */
        $scope.rejectToCollege = function () {
            povertySchoolServer.listCollegeUsers().then(function (data) {
                if (data.status) {
                    $scope.vm.collegeList = data.data;
                    $scope.vm.collegeList.map(function (item) {
                        item.collegeAddName = item.primaryTeachingInstitution? item.primaryTeachingInstitution.name+'-'+item.name : item.name
                        return true
                    })
                    $scope.vm.rejectToCollege.choosedCollege = data.data[0];
                }
            });
            $('#rejectToCollege').modal('show');
            $scope.addReject = function () {
                if ($scope.vm.rejectToCollege.content) {
                    povertyCommonServer.operateProcess({
                        isPass: 0,
                        step: 'school',
                        userName: $scope.vm.rejectToCollege.choosedCollege.sn,
                        userType: $scope.vm.rejectToCollege.choosedCollege.userType,
                        reason: $scope.vm.rejectToCollege.content,
                        realName: $scope.vm.rejectToCollege.choosedCollege.name
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('提交成功');
                            $scope.init();
                            $scope.vm.rejectToCollege.content = '';
                            $('#rejectToCollege').modal('hide');
                        }
                    });
                } else {
                    tools.alertError('请填写驳回原因');
                }

            };
        };
        /**
         * 初始化异议信息
         */
        $scope.initOpenDissent = function () {
            povertySchoolServer.viewOpenDissentSchool().then(function (data) {
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
         * 获取时间信息
         */
        $scope.getTime = function () {
            commonsServer.getCommonsServerTime().then(function (data) {
                if(data.status) {
                    $scope.vm.now = data.data;
                    povertySchoolServer.getProcessTime().then(function (data) {
                        if (data.status) {
                            $scope.vm.processTimeList = data.data || {};
                            $scope.vm.processTimeList.schoolOpenEndTime =$scope.vm.processTimeList.schoolOpenEndTime ? $scope.vm.processTimeList.schoolOpenEndTime : '';
                            $scope.vm.processTimeList.schoolOpenStartTime =$scope.vm.processTimeList.schoolOpenStartTime ? $scope.vm.processTimeList.schoolOpenStartTime : $scope.vm.now;
                            //学生申请
                            $scope.vm.applyStartOptions = {
                                maxDate: new Date($scope.vm.processTimeList.schoolOpenEndTime)
                            };
                            $scope.vm.applyEndOptions = {
                                minDate: $scope.vm.processTimeList.schoolOpenStartTime>$scope.vm.now ? new Date($scope.vm.processTimeList.schoolOpenStartTime): new Date($scope.vm.now)
                            };
                            $scope.$watch('vm.processTimeList.schoolOpenEndTime', function (to) {
                                $scope.vm.applyStartOptions.minDate =  new Date($scope.vm.now);
                                $scope.vm.applyStartOptions.maxDate = new Date(to);
                                $scope.vm.processTimeList.schoolOpenEndTime = new Date(to).getTime()
                            });
                            $scope.$watch('vm.processTimeList.schoolOpenStartTime', function (to) {
                                $scope.vm.applyEndOptions.minDate = new Date(to).getTime()>$scope.vm.now ? new Date(to): new Date($scope.vm.now);
                                $scope.vm.processTimeList.schoolOpenStartTime =new Date(to).getTime()
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
                    endTime: $scope.vm.processTimeList.schoolOpenEndTime,
                    startTime: $scope.vm.processTimeList.schoolOpenStartTime,
                    type: 1
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
                    dealOpinion: $scope.vm.remark,
                    type: 1
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
        $scope.openTimeSetting = function () {
            $('#openTimeSetting').modal('show');
        }
    }
})();
