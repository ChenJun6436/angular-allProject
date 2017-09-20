/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/9/13
 * Time: 11:16
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';

    asApp.controller('collegeGrantsManageController', ['$scope', '$rootScope', '$cookies', '$state', 'schoolServer', 'NgTableParams', 'commonServer',
        function ($scope, $rootScope, $cookies, $state, schoolServer, NgTableParams, commonServer) {
            $scope.vm = {
                tableFlag: 0
            };
            /**
             * 初始化信息
             */
            $scope.init = function () {
                commonServer.getGrantsManage().then(function(data){
                    if(data.status){
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
            $scope.showDetail = function (grants) {
                $('#addGrants').modal('show');
                $scope.vm.currentGrants = grants;
                $scope.addGrants = function () {
                    tools.alertSuccess($rootScope, '保存成功');
                    $('#addGrants').modal('hide');
                };
            };
        }
    ]);
})();
