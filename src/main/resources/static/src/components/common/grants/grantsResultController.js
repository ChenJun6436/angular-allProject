/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/9/13
 * Time: 11:16
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('grantsResultController', grantsResultController);

    grantsResultController.$inject = [
        '$scope',
        'grantsSchoolServer',
        'NgTableParams',
        'grantsCommonServer'];

    function grantsResultController($scope, grantsSchoolServer, NgTableParams, grantsCommonServer) {
        $scope.vm = {
            tableFlag: 0
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            grantsCommonServer.getGrantsResult().then(function (data) {
                if (data.status) {
                    $scope.vm.data = data.data;
                    $scope.vm.tableFlag = 1;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: data.data.dataList,
                        counts: [10, 15, 20, 30]
                    });
                }
            });

        };
        $scope.init();

        /**
         * 导出名单
         */
        $scope.download = function () {
            grantsCommonServer.downloadDynamicStudentList().then(function (data) {
                if (data.status) {
                    window.open(data.data.url);
                }
            });
        };
    }
})();
