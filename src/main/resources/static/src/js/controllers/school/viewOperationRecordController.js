/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('viewOperationRecordController', ['$scope', '$rootScope', '$cookies', '$state', 'schoolServer',
        function ($scope, $rootScope, $cookies, $state, schoolServer) {
            $scope.vm = {
                recordList: [],
                status: 3
            };
            /**
             * 获取操作记录
             * @param status 3：学校   2：学院    1：辅导员
             */
            $scope.init = function (status) {
                $scope.vm.status = status;
                schoolServer.viewOperationRecord({
                    'status': status
                }).then(function (data) {
                    if (data.status) {
                        $scope.vm.recordList = data.data.data;
                    }
                });
            };
            $scope.init($scope.vm.status);
        }
    ]);
})();
