/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('povertyAlertController', ['$scope', '$rootScope', '$cookies', '$state', 'commonServer', 'NgTableParams', 'tools',
        function ($scope, $rootScope, $cookies, $state, commonServer, NgTableParams, tools) {
            $scope.vm = {
                tableFlag: 0,
                alertList: [],
                feedBackContent: '',
                level: {
                    'availableOptions': [],
                    'selectedOption': {}
                }
            };
            /**
             * 获取等级列表
             */
            commonServer.getPovertyLevelList().then(function (data) {
                if (data.status) {
                    $scope.vm.level.availableOptions = data.data;
                    $scope.vm.level.selectedOption = data.data[0];
                }
            });
            /**
             * 初始化信息
             */
            $scope.init = function () {
                commonServer.getPoorAlarmList({
                    povertyLevel: $scope.vm.level.selectedOption.name || '特别困难'
                }).then(function (data) {
                    if (data.status) {
                        $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
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
            $scope.export = function () {
                commonServer.downloadPoorAlarmList({
                    'povertyLevel': $scope.vm.level.selectedOption.name || '特别困难'
                }).then(function (data) {
                    if (data.status) {
                        window.open(data.data.url);
                    } else {
                        tools.alertError($rootScope, data.message);
                    }
                });
            };
        }
    ]);
})();
