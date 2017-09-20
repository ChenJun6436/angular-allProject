/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('povertyNoticeController', povertyNoticeController);

    povertyNoticeController.$inject = [
        '$rootScope',
        '$scope',
        '$element',
        'NgTableParams',
        'povertyStudentServer',
        'povertyBusinessServer',
        'povertyCommonServer',
        'tools'];

    function povertyNoticeController($rootScope, $scope, $element, NgTableParams, povertyStudentServer, povertyBusinessServer, povertyCommonServer, tools) {
        $scope.vm = {
            active: 0,
        };


        $scope.changeNav = function (val) {
            $scope.vm.active = val;
        }
        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyStudentServer.getCollegeNotice().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.noticeList = data.data;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.noticeList,
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
            povertyStudentServer.getSchoolNotice().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag2 = data.data.length === 0 ? 2 : 1;
                    $scope.vm.noticeList2 = data.data;
                    $scope.tableParams2 = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.noticeList2,
                        counts: [10, 15, 20, 30]
                    });

                    // _flag for check init
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams2.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes2 = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr2 = value;
                            if (_flag) {
                                $scope.initCheck2();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag2 = 2;
                }
            });
        };
        $scope.init();
        /**
         * 处理反馈
         */
        $scope.dealFeedbackShow = function () {
            if ($scope.checkboxes.choosedStudent.length > 0) {
                $('#dealFeedback').modal('show');

                $scope.dealFeedback = function () {
                    if ($scope.vm.feedBackContent) {

                        angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                            value.content = $scope.vm.feedBackContent;
                            value.plaintiff = $rootScope.studentId;
                            value.defendant = value.studentId;
                            value.plaintiffName = $rootScope.userName;
                        });

                        povertyStudentServer.commitDissent0($scope.checkboxes.choosedStudent).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('反馈成功');
                                $('#dealFeedback').modal('hide');
                                $scope.vm.feedBackContent = '';
                                $scope.checkboxes.choosedStudent = [];
                                $scope.checkboxes = {
                                    checked: false,
                                    items: {}
                                };
                            }else {
                                tools.alertError(data.message);
                            }
                        });
                    } else {
                        tools.alertError('异议不能为空');
                    }
                };
            } else {
                tools.alertError('请选择有异议的学生');
            }

        };
        $scope.dealFeedbackShow2 = function () {
            if ($scope.checkboxes2.choosedStudent.length > 0) {
                $('#dealFeedback2').modal('show');

                $scope.dealFeedback2 = function () {
                    if ($scope.vm.feedBackContent2) {

                        angular.forEach($scope.checkboxes2.choosedStudent, function (value) {
                            value.content = $scope.vm.feedBackContent2;
                            value.plaintiff = $rootScope.studentId;
                            value.defendant = value.studentId;
                            value.plaintiffName = $rootScope.userName;
                        });
                        povertyStudentServer.commitDissent1($scope.checkboxes2.choosedStudent).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('反馈成功');
                                $('#dealFeedback2').modal('hide');
                                $scope.vm.feedBackContent2 = '';
                                $scope.checkboxes2.choosedStudent = [];
                                $scope.checkboxes2 = {
                                    checked: false,
                                    items: {}
                                };
                            }else {
                                tools.alertError(data.message);
                            }
                        });
                    } else {
                        tools.alertError('异议不能为空');
                    }
                };
            } else {
                tools.alertError('请选择有异议的学生');
            }

        };
        $scope.initCheck = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes.checked;
            }, function (value) {

                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] = value;
                });

            });

            // watch for data
            $scope.$watch(function () {
                return $scope.checkboxes.items;
            }, function (values) {

                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr.length;
                $scope.checkboxes.choosedStudent = [];

                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] && $scope.checkboxes.choosedStudent.push(item);
                    checked += ($scope.checkboxes.items[item.studentId]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.studentId]) || 0;
                });

                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }

                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));

            }, true);

        };
        $scope.initCheck2 = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes2.checked;
            }, function (value) {

                angular.forEach($scope.thisPageArr2, function (item) {
                    $scope.checkboxes2.items[item.studentId] = value;
                });

            });

            // watch
            $scope.$watch(function () {
                return $scope.checkboxes2.items;
            }, function (values) {

                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr2.length;
                $scope.checkboxes2.choosedStudent = [];

                angular.forEach($scope.thisPageArr2, function (item) {
                    $scope.checkboxes2.items[item.studentId] && $scope.checkboxes2.choosedStudent.push(item);
                    checked += ($scope.checkboxes2.items[item.studentId]) || 0;
                    unchecked += (!$scope.checkboxes2.items[item.studentId]) || 0;
                });

                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes2.checked = (checked == total);
                }

                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all2")).prop("indeterminate", (checked != 0 && unchecked != 0));

            }, true);

        };
    }
})();
