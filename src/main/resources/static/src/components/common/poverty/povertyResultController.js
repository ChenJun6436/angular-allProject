/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('povertyResultController', povertyResultController);

    povertyResultController.$inject = [
        '$scope',
        'povertyCommonServer',
        'NgTableParams'];

    function povertyResultController($scope, povertyCommonServer, NgTableParams) {
        $scope.vm = {
            tableFlag: 0
        };

        /**
         * 初始化申请列表信息
         */
        $scope.initApply = function () {
            povertyCommonServer.listStudentPovertyApply().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;

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

        $scope.initApply();
    }
})();
