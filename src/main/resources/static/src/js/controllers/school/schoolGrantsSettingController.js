/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/9/13
 * Time: 11:16
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('schoolGrantsSettingController', ['$scope', '$rootScope', 'tools', '$state', 'schoolServer', 'NgTableParams', 'commonServer',
        function ($scope, $rootScope, tools, $state, schoolServer, NgTableParams, commonServer) {
            $scope.vm = {
                tableFlag: 0,
                showTable:0,
                processTimeList:{
                    "data": {
                        "applyStart": "",
                        "collegeOpenEnd": "",
                        "collegeStart": "",
                        "collegeOpenStart": "",
                        "discussStart": "",
                        "collegeEnd": "",
                        "applyEnd": "",
                        "advisorStart": "",
                        "schoolOpenEnd": "",
                        "advisorEnd": "",
                        "discussEnd": "",
                        "id": 1,
                        "schoolOpenStart": "",
                        "status": 1,
                        "schoolStart": "",
                        "schoolEnd": ""
                    },
                    "status": true,
                    "message": "\u64cd\u4f5c\u6210\u529f"
                }
            };
            /**
             * 初始化信息
             */
            $scope.init = function () {
                commonServer.getGrantsSettings().then(function (data) {
                    if (data.status) {
                        $scope.vm.data = data.data;
                        $scope.vm.grantsList = data.data.dataList;
                        $scope.vm.tableFlag = 1;
                        $scope.tableParams = new NgTableParams({
                            page: 1,
                            count: 15
                        }, {
                            dataset: $scope.vm.grantsList,
                            counts: [10, 15, 20, 30]
                        });
                    }
                });
            };
            $scope.init();
            /**
             * 获取时间信息
             */
            $scope.getTime = function () {
                var _nowTime = new Date().getTime();
                var _applyStartDate = new Date($scope.vm.processTimeList.applyStart).getTime();
                var _discussStartDate = new Date($scope.vm.processTimeList.discussStart).getTime();
                var _advisorStartDate = new Date($scope.vm.processTimeList.advisorStart).getTime();
                var _collegeStartDate = new Date($scope.vm.processTimeList.collegeStart).getTime();
                var _collegeOpenStartDate = new Date($scope.vm.processTimeList.collegeOpenStart).getTime();
                var _schoolStartDate = new Date($scope.vm.processTimeList.schoolStart).getTime();
                var _schoolOpenStartDate = new Date($scope.vm.processTimeList.schoolOpenStart).getTime();
                $scope.vm.applyStartDisabled = _nowTime > _applyStartDate && _applyStartDate !== 0;
                $scope.vm.discussStartDisabled = _nowTime > _discussStartDate && _discussStartDate !== 0;
                $scope.vm.advisorStartDisabled = _nowTime > _advisorStartDate && _advisorStartDate !== 0;
                $scope.vm.collegeStartDisabled = _nowTime > _collegeStartDate && _collegeStartDate !== 0;
                $scope.vm.collegeOpenStartDisabled = _nowTime > _collegeOpenStartDate && _collegeOpenStartDate !== 0;
                $scope.vm.schoolStartDisabled = _nowTime > _schoolStartDate && _schoolStartDate !== 0;
                $scope.vm.schoolOpenStartDisabled = _nowTime > _schoolOpenStartDate && _schoolOpenStartDate !== 0;
                $scope.applyStart = {
                    elem: '#applyStart',
                    max: $scope.vm.processTimeList.applyEnd, //最大日期
                    choose: function (data) {
                        $scope.applyEnd.min = data; //开始日选好后，重置结束日的最小日期
                    }
                };
                $scope.applyEnd = {
                    elem: '#applyEnd',
                    min: $scope.vm.processTimeList.applyStart,
                    choose: function (data) {
                        $scope.applyStart.max = data;
                    }
                };
                $scope.discussStart = {
                    elem: '#discussStart',
                    max: $scope.vm.processTimeList.discussEnd, //最大日期
                    choose: function (data) {
                        $scope.discussEnd.min = data; //开始日选好后，重置结束日的最小日期
                    }
                };
                $scope.discussEnd = {
                    elem: '#discussEnd',
                    min: $scope.vm.processTimeList.discussStart,
                    choose: function (data) {
                        $scope.discussStart.max = data;
                    }
                };
                $scope.advisorStart = {
                    elem: '#advisorStart',
                    max: $scope.vm.processTimeList.advisorEnd, //最大日期
                    choose: function (data) {
                        $scope.advisorEnd.min = data; //开始日选好后，重置结束日的最小日期
                    }
                };
                $scope.advisorEnd = {
                    elem: '#advisorEnd',
                    min: $scope.vm.processTimeList.advisorStart,
                    choose: function (data) {
                        $scope.advisorStart.max = data;
                    }
                };
                $scope.collegeStart = {
                    elem: '#collegeStart',
                    max: $scope.vm.processTimeList.collegeEnd, //最大日期
                    choose: function (data) {
                        $scope.collegeEnd.min = data; //开始日选好后，重置结束日的最小日期
                    }
                };
                $scope.collegeEnd = {
                    elem: '#collegeEnd',
                    min: $scope.vm.processTimeList.collegeStart,
                    choose: function (data) {
                        $scope.collegeStart.max = data;
                    }
                };
                $scope.collegeOpenStart = {
                    elem: '#collegeOpenStart',
                    max: $scope.vm.processTimeList.collegeOpenEnd, //最大日期
                    choose: function (data) {
                        $scope.collegeOpenEnd.min = data; //开始日选好后，重置结束日的最小日期
                    }
                };
                $scope.collegeOpenEnd = {
                    elem: '#collegeOpenEnd',
                    min: $scope.vm.processTimeList.collegeOpenStart,
                    choose: function (data) {
                        $scope.collegeOpenStart.max = data;
                    }
                };
                $scope.schoolStart = {
                    elem: '#schoolStart',
                    max: $scope.vm.processTimeList.schoolEnd, //最大日期
                    choose: function (data) {
                        $scope.schoolEnd.min = data; //开始日选好后，重置结束日的最小日期
                    }
                };
                $scope.schoolEnd = {
                    elem: '#schoolEnd',
                    min: $scope.vm.processTimeList.schoolStart,
                    choose: function (data) {
                        $scope.schoolStart.max = data;
                    }
                };
                $scope.schoolOpenStart = {
                    elem: '#schoolOpenStart',
                    max: $scope.vm.processTimeList.schoolOpenEnd, //最大日期
                    choose: function (data) {
                        $scope.schoolOpenEnd.min = data; //开始日选好后，重置结束日的最小日期
                    }
                };
                $scope.schoolOpenEnd = {
                    elem: '#schoolOpenEnd',
                    min: $scope.vm.processTimeList.schoolOpenStart,
                    choose: function (data) {
                        $scope.schoolOpenStart.max = data;
                    }
                };
                laydate($scope.applyStart);
                laydate($scope.applyEnd);
                laydate($scope.discussStart);
                laydate($scope.discussEnd);
                laydate($scope.advisorStart);
                laydate($scope.advisorEnd);
                laydate($scope.collegeStart);
                laydate($scope.collegeEnd);
                laydate($scope.collegeOpenStart);
                laydate($scope.collegeOpenEnd);
                laydate($scope.schoolStart);
                laydate($scope.schoolEnd);
                laydate($scope.schoolOpenStart);
                laydate($scope.schoolOpenEnd);
            };
            $scope.getTime();
            $scope.edit = function (){
                $('#addGrants').modal('show');
                $scope.addGrants = function () {
                    tools.alertSuccess($rootScope, '保存成功');
                    $('#addGrants').modal('hide');
                };
            };
            /**
             * 添加批次
             */
            $scope.addGrantsModal = function () {
                $('#addGrants').modal('show');
                $scope.addGrants = function () {
                    tools.alertSuccess($rootScope, '保存成功');
                    $('#addGrants').modal('hide');
                };
            };
        }
    ]);
})();
