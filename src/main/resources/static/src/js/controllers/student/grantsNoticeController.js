/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('grantsNoticeController', ['$scope', '$rootScope', 'NgTableParams', 'studentServer', 'commonServer', '$element', 'tools',
        function ($scope, $rootScope, NgTableParams, studentServer, commonServer, $element, tools) {
            $scope.vm = {
                collegeNoticeList: {},
                feedBackContent: '',
                canFeedBack: false,
                canFeedBack1: false
            };
            commonServer.getStatus().then(function (data) {
                if (data.status) {
                    $scope.vm.canFeedBack1 = data.data.status === 5;
                }
            });
            /**
             * 处理反馈
             * @param id
             */
            $scope.vm.remark = '';
            $scope.dealFeedbackShow = function (id) {
                if ($scope.checkboxes.choosedStudent.length > 0) {
                    $('#dealFeedback').modal('show');
                    $scope.dealFeedback = function () {
                        if ($scope.vm.remark === '') {
                            tools.alertError($rootScope, '异议不能为空');
                            return;
                        }
                        tools.alertSuccess($rootScope, '提交成功');
                        $('#dealFeedback').modal('hide');
                    };
                } else {
                    tools.alertError($rootScope, '请选择有异议的学生');
                }

            };
            /**
             * 初始化信息
             */
            $scope.init = function () {
                studentServer.getGrantsNotice($scope.vm.getCollegeNotice).then(function (data) {
                    if (data.status) {
                        $scope.vm.tableFlag = data.data.totalCount === 0 ? 2 : 1;
                        $scope.vm.canFeedBack = data.data.totalCount !== 0;
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
                        $scope.vm.canFeedBack = false;
                    }

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
                });
            };
            $scope.init();

            $scope.initCheck = function () {

                // watch for check all checkbox
                $scope.$watch(function () {
                    return $scope.checkboxes.checked;
                }, function (value) {
                    angular.forEach($scope.thisPageArr, function (item) {
                        $scope.checkboxes.items[item.studentId] = value;
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
                        $scope.checkboxes.items[item.studentId] && $scope.checkboxes.choosedStudent.push(item);
                        checked += ($scope.checkboxes.items[item.studentId]) || 0;
                        unchecked += (!$scope.checkboxes.items[item.studentId]) || 0;
                    });
                    if ((unchecked == 0) || (checked == 0)) {
                        $scope.checkboxes.checked = (checked == total);
                    }
                    // grayed checkbox
                    angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                    console.log($scope.checkboxes.choosedStudent)
                }, true);
            };
        }
    ]);
})();
