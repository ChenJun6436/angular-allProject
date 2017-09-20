/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.poorAssess').controller('classAuditPovertyController', classAuditPovertyController);

    classAuditPovertyController.$inject = [
        '$scope',
        'povertyBusinessServer',
        'NgTableParams',
        'povertyCommonServer'];

    function classAuditPovertyController($scope, povertyBusinessServer, NgTableParams, povertyCommonServer) {
        $scope.vm = {
            tableFlag: 0
        };

        povertyBusinessServer.getPovertyMaxStatus();

        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyCommonServer.listStudentPovertyApply().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    $scope.vm.studentList = data.data;
                    //判断是否可以提交到辅导员审核
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
        $scope.init();
    }
})();