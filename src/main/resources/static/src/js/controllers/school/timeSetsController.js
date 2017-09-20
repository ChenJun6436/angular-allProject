/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('timeSetsController', ['$scope', '$rootScope', '$cookies', '$state', 'schoolServer', 'commonServer', 'tools',
        function ($scope, $rootScope, $cookies, $state, schoolServer, commonServer, tools) {
            $scope.vm = {
                'processTimeList': {},
                'submit': false
            };
            /**
             * 获取时间信息
             */
            $scope.getTime = function () {
                schoolServer.queryProcessTime().then(function (data) {
                    if (data.status) {
                        $scope.vm.processTimeList = data.data;
                        var _nowTime = new Date().getTime();
                        var _applyStartDate = new Date(data.data.applyStart).getTime();
                        var _discussStartDate = new Date(data.data.discussStart).getTime();
                        var _advisorStartDate = new Date(data.data.advisorStart).getTime();
                        var _collegeStartDate = new Date(data.data.collegeStart).getTime();
                        var _collegeOpenStartDate = new Date(data.data.collegeOpenStart).getTime();
                        var _schoolStartDate = new Date(data.data.schoolStart).getTime();
                        var _schoolOpenStartDate = new Date(data.data.schoolOpenStart).getTime();
                        $scope.vm.applyStartDisabled = _nowTime > _applyStartDate && _applyStartDate !== 0;
                        $scope.vm.discussStartDisabled = _nowTime > _discussStartDate && _discussStartDate !== 0;
                        $scope.vm.advisorStartDisabled = _nowTime > _advisorStartDate && _advisorStartDate !== 0;
                        $scope.vm.collegeStartDisabled = _nowTime > _collegeStartDate && _collegeStartDate !== 0;
                        $scope.vm.collegeOpenStartDisabled = _nowTime > _collegeOpenStartDate && _collegeOpenStartDate !== 0;
                        $scope.vm.schoolStartDisabled = _nowTime > _schoolStartDate && _schoolStartDate !== 0;
                        $scope.vm.schoolOpenStartDisabled = _nowTime > _schoolOpenStartDate && _schoolOpenStartDate !== 0;
                        $scope.applyStart = {
                            elem: '#applyStart',
                            max: data.data.applyEnd, //最大日期
                            choose: function (data) {
                                $scope.applyEnd.min = data; //开始日选好后，重置结束日的最小日期
                            }
                        };
                        $scope.applyEnd = {
                            elem: '#applyEnd',
                            min: data.data.applyStart,
                            choose: function (data) {
                                $scope.applyStart.max = data;
                            }
                        };
                        $scope.discussStart = {
                            elem: '#discussStart',
                            max: data.data.discussEnd, //最大日期
                            choose: function (data) {
                                $scope.discussEnd.min = data; //开始日选好后，重置结束日的最小日期
                            }
                        };
                        $scope.discussEnd = {
                            elem: '#discussEnd',
                            min: data.data.discussStart,
                            choose: function (data) {
                                $scope.discussStart.max = data;
                            }
                        };
                        $scope.advisorStart = {
                            elem: '#advisorStart',
                            max: data.data.advisorEnd, //最大日期
                            choose: function (data) {
                                $scope.advisorEnd.min = data; //开始日选好后，重置结束日的最小日期
                            }
                        };
                        $scope.advisorEnd = {
                            elem: '#advisorEnd',
                            min: data.data.advisorStart,
                            choose: function (data) {
                                $scope.advisorStart.max = data;
                            }
                        };
                        $scope.collegeStart = {
                            elem: '#collegeStart',
                            max: data.data.collegeEnd, //最大日期
                            choose: function (data) {
                                $scope.collegeEnd.min = data; //开始日选好后，重置结束日的最小日期
                            }
                        };
                        $scope.collegeEnd = {
                            elem: '#collegeEnd',
                            min: data.data.collegeStart,
                            choose: function (data) {
                                $scope.collegeStart.max = data;
                            }
                        };
                        $scope.collegeOpenStart = {
                            elem: '#collegeOpenStart',
                            max: data.data.collegeOpenEnd, //最大日期
                            choose: function (data) {
                                $scope.collegeOpenEnd.min = data; //开始日选好后，重置结束日的最小日期
                            }
                        };
                        $scope.collegeOpenEnd = {
                            elem: '#collegeOpenEnd',
                            min: data.data.collegeOpenStart,
                            choose: function (data) {
                                $scope.collegeOpenStart.max = data;
                            }
                        };
                        $scope.schoolStart = {
                            elem: '#schoolStart',
                            max: data.data.schoolEnd, //最大日期
                            choose: function (data) {
                                $scope.schoolEnd.min = data; //开始日选好后，重置结束日的最小日期
                            }
                        };
                        $scope.schoolEnd = {
                            elem: '#schoolEnd',
                            min: data.data.schoolStart,
                            choose: function (data) {
                                $scope.schoolStart.max = data;
                            }
                        };
                        $scope.schoolOpenStart = {
                            elem: '#schoolOpenStart',
                            max: data.data.schoolOpenEnd, //最大日期
                            choose: function (data) {
                                $scope.schoolOpenEnd.min = data; //开始日选好后，重置结束日的最小日期
                            }
                        };
                        $scope.schoolOpenEnd = {
                            elem: '#schoolOpenEnd',
                            min: data.data.schoolOpenStart,
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
                    }
                });
            };
            /**
             * 根据本地存储初始化，判断流程是否开启
             */
            $scope.init = function () {
                if (!window.localStorage.getItem('processStatus')) {
                    commonServer.validateProcess().then(function (data) {
                        if (data.data) {
                            $state.go('main.timeSet');
                        } else {
                            $scope.getTime();
                        }
                    });
                } else {
                    $scope.getTime();
                }
            };
            $scope.init();
            /**
             * 更新时间
             */
            $scope.updateTime = function () {
                $scope.vm.submit = true;
                $scope.vm.processTime = {
                    'applyStart': angular.element('#applyStart').val(),
                    'applyEnd': angular.element('#applyEnd').val(),
                    'discussStart': angular.element('#discussStart').val(),
                    'discussEnd': angular.element('#discussEnd').val(),
                    'advisorStart': angular.element('#advisorStart').val(),
                    'advisorEnd': angular.element('#advisorEnd').val(),
                    'collegeStart': angular.element('#collegeStart').val(),
                    'collegeEnd': angular.element('#collegeEnd').val(),
                    'collegeOpenStart': angular.element('#collegeOpenStart').val(),
                    'collegeOpenEnd': angular.element('#collegeOpenEnd').val(),
                    'schoolStart': angular.element('#schoolStart').val(),
                    'schoolEnd': angular.element('#schoolEnd').val(),
                    'schoolOpenStart': angular.element('#schoolOpenStart').val(),
                    'schoolOpenEnd': angular.element('#schoolOpenEnd').val(),
                    'processName': $scope.vm.processTimeList.processName
                };
                if ($scope.vm.processTime.applyEnd > $scope.vm.processTime.discussEnd) {
                    tools.alertError($rootScope, '申请时间截止时间，不能大于民主评议截止时间');
                    return;
                } else if ($scope.vm.processTime.discussEnd > $scope.vm.processTime.advisorEnd) {
                    tools.alertError($rootScope, '民主评议截止时间，不能大于辅导员审核截止时间');
                    return;
                } else if ($scope.vm.processTime.advisorEnd > $scope.vm.processTime.collegeEnd) {
                    tools.alertError($rootScope, '辅导员审核截止时间，不能大于学院审核截止时间');
                    return;
                } else if ($scope.vm.processTime.collegeEnd > $scope.vm.processTime.collegeOpenEnd) {
                    tools.alertError($rootScope, '学院审核截止时间，不能大于学院公示截止时间');
                    return;
                } else if ($scope.vm.processTime.collegeOpenEnd > $scope.vm.processTime.schoolEnd) {
                    tools.alertError($rootScope, '学院公示截止时间，不能大于学校审核截止时间');
                    return;
                } else if ($scope.vm.processTime.schoolEnd > $scope.vm.processTime.schoolOpenEnd) {
                    tools.alertError($rootScope, '学校审核截止时间，不能大于学校公示截止时间');
                    return;
                }
                var _flag = true;
                angular.forEach($scope.vm.processTime, function (data) {
                    _flag = _flag && (data !== '');
                });
                if (_flag && $scope.processForm.$valid) {
                    schoolServer.setProcessDate($scope.vm.processTime).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess($rootScope, '保存成功');
                            $scope.init();
                        }
                    });
                } else {
                    tools.alertError($rootScope, '所有时间字段不能为空');
                }
            };

        }
    ]);
})();
