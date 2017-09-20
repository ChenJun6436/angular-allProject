/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('dynamicManageController', ['$scope', '$rootScope', '$cookies', '$state', 'commonServer', 'NgTableParams', 'tools',
        function ($scope, $rootScope, $cookies, $state, commonServer, NgTableParams, tools) {
            $scope.vm = {
                tableFlag: 0,
                povertyLevelList: []
            };
            /**
             * 初始化信息
             */
            $scope.init = function () {
                commonServer.getDynamicStudentList().then(function (data) {
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
                        /**
                         * 修改等级
                         * @param id
                         * @param name
                         */
                        $scope.changeLevel = function (id, name) {
                            commonServer.updateLevel({
                                'studentId': id,
                                'levelName': name
                            }).then(function (data) {
                                if (data.status) {
                                    tools.alertSuccess($rootScope, '修改成功');
                                    var _newPage = $scope.tableParams.page();
                                    var _count = $scope.tableParams.count();
                                    angular.forEach($scope._data, function (data) {
                                        data.studentId === id && (data.nowPoverty = name);
                                    });
                                    $scope.tableParams = new NgTableParams({
                                        page: _newPage,
                                        count: _count
                                    }, {
                                        dataset: $scope._data,
                                        counts: [10, 15, 20, 30]
                                    });
                                } else {
                                    $scope.init();
                                }
                            });
                        };
                    } else {
                        $scope.vm.tableFlag = 2;
                    }
                });
            };
            $scope.init();
            /**
             * 获取等级列表
             */
            commonServer.getPovertyLevelList().then(function (data) {
                if (data.status) {
                    $scope.vm.povertyLevelList = data.data;
                }
            });

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
