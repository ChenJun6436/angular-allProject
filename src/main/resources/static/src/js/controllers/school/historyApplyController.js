/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/9/13
 * Time: 11:16
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('historyApplyController', ['$scope', '$rootScope', '$cookies', '$state', 'schoolServer', 'NgTableParams', 'commonServer',
        function ($scope, $rootScope, $cookies, $state, schoolServer, NgTableParams, commonServer) {
            $scope.vm = {
                tableFlag: 0
            };
            /**
             * 初始化信息
             */
            $scope.init = function () {
                schoolServer.queryHistoryApply().then(function (data) {
                    if (data.status) {
                        $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                        angular.forEach(data.data.dataList, function (data) {
                            data.selected = {
                                id: 0,
                                name: data.nowPoverty
                            };
                        });
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
                    }
                });
            };
            $scope.init();
            /**
             * 导出名单
             */
            $scope.download = function () {
                commonServer.downloadDynamicStudentList().then(function (data) {
                    if (data.status) {
                        window.open(data.data.url);
                    }
                });
            };
        }
    ]);
})();
