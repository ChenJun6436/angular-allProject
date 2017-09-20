/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/9/13
 * Time: 11:16
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('schoolGrantsManageController', ['$scope', '$rootScope', '$cookies', '$state', 'schoolServer', 'NgTableParams', 'commonServer', 'tools',
        function ($scope, $rootScope, $cookies, $state, schoolServer, NgTableParams, commonServer, tools) {
            $scope.vm = {
                tableFlag: 0,
                type: 0,
                currentGrants: {
                    type: 0,
                    name: '',
                    institutions: '',
                    startTime: '',
                    endTime: '',
                    level: [{name:'一等'}],
                    conditions: ''
                }
            };
            $scope.addLevel = function () {
                $scope.vm.currentGrants.level.push({name:'一等'});
            };
            $scope.removeLevel = function (index) {
                $scope.vm.currentGrants.level.splice(index, 1);
            };

            /**
             * 初始化信息
             */
            $scope.init = function () {
                commonServer.getGrantsManage().then(function (data) {
                    if (data.status) {
                        $scope.vm.data = data.data;
                        $scope.vm.grantsList = data.data.dataList;
                        $scope.vm.tableFlag = 1;
                        $scope.tableParams = new NgTableParams({
                            page: 1,
                            count: 15
                        }, {
                            dataset: $scope.vm.grantsList,
                            counts: [10, 15, 20, 30]
                        });
                    }
                });
            };
            $scope.init();
            /**
             * 获取时间信息
             */
            $scope.getTime = function () {
                var _nowTime = new Date().getTime();
                $scope.applyStart = {
                    elem: '#applyStart'
                };
                $scope.applyEnd = {
                    elem: '#applyEnd'
                };
                laydate($scope.applyStart);
                laydate($scope.applyEnd);
            };
            $scope.getTime();
            $scope.edit = function (grants) {
                $scope.vm.currentGrants = grants;
                var _date = new Date();
                $scope.vm.currentGrants.startTime = _date.getFullYear() + '-' + ((_date.getMonth() + 1) > 10 ? (_date.getMonth() + 1) : ('0' + (_date.getMonth() + 1))) + '-' + _date.getDate();
                $scope.vm.currentGrants.endTime = _date.getFullYear() + '-' + ((_date.getMonth() + 1) > 10 ? (_date.getMonth() + 1) : ('0' + (_date.getMonth() + 1))) + '-' + _date.getDate();
                $scope.vm.currentGrants.type = grants.level.length > 0 ? 1 : 0;
                $('#addGrants').modal('show');
                $scope.addGrants = function () {
                    tools.alertSuccess($rootScope, '保存成功');
                    $('#addGrants').modal('hide');
                };
            };
            /**
             * 添加
             */
            $scope.addGrantsModal = function () {
                $('#addGrants').modal('show');
                $scope.addGrants = function () {
                    tools.alertSuccess($rootScope, '保存成功');
                    $('#addGrants').modal('hide');
                };
            };
            /**
             * 删除
             */
            $scope.delete = function (index) {
                tools.alertSuccess($rootScope, '删除成功');
                $scope.vm.grantsList.splice(index - 1, 1);
                $scope.tableParams.reload();
            };
        }
    ]);
})();
