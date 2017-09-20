/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.poorAssess').controller('collegeAuditPovertyFormerYearController', collegeAuditPovertyFormerYearController);

    collegeAuditPovertyFormerYearController.$inject = [
        '$scope',
        'povertyBusinessServer',
        'NgTableParams',
        'povertyAdvisorServer',
        'povertyCommonServer',
        '$element',
        'tools'];

    function collegeAuditPovertyFormerYearController($scope, povertyBusinessServer, NgTableParams, povertyAdvisorServer, povertyCommonServer, $element, tools) {
        $scope.vm = {
            tableFlag: 0,
            collegeNoticeList: {}
        };

        povertyBusinessServer.getPovertyMaxStatus();

        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyCommonServer.getLastYearApply().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
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
        };
        $scope.init();

        /**
         * 批量处理
         */
        $scope.dealAll = function () {
            if ($scope.checkboxes.choosedStudent.length > 0) {

                $scope.vm.isDealingAll = true;

                angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                    value.isPass = flag;
                });
                console.log($scope.checkboxes.choosedStudent)
               /* povertyAdvisorServer.checkMaterial($scope.checkboxes.choosedStudent).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess(data.message);
                        $scope.init();
                    }
                    $scope.vm.isDealingAll = false;
                });*/
            } else {
                tools.alertError('请先选择要批量处理的学生');
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
})();