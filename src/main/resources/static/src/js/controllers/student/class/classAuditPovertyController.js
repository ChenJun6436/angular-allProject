/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    asApp.controller('classAuditPovertyController', ['$scope', '$rootScope', 'NgTableParams', 'studentServer', 'commonServer',
        function ($scope, $rootScope, NgTableParams, studentServer, commonServer) {
            $scope.vm = {
                collegeNoticeList: {},
                feedBackContent: '',
                canFeedBack: false,
                canFeedBack1: false
            };
            commonServer.getStatus().then(function (data) {
                if (data.status) {
                    $scope.vm.canFeedBack1 = data.data.status === 5;
                }
            });
            /**
             * 初始化信息
             */
            $scope.init = function () {
                studentServer.getCollegeNotice($scope.vm.getCollegeNotice).then(function (data) {
                    if (data.status) {
                        $scope.vm.tableFlag = data.data.totalCount === 0 ? 2 : 1;
                        $scope.vm.canFeedBack = data.data.totalCount !== 0;
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
                        $scope.vm.canFeedBack = false;
                    }
                });
            };
            $scope.init();
        }
    ]);
})();