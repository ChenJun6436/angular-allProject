/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('showRejectReasonController', ['$scope', '$rootScope', '$cookies', '$state', 'commonServer',
        function ($scope, $rootScope, $cookies, $state, commonServer) {
            $scope.vm = {
                reasonList: []
            };
            /**
             * 获取登录用户基本信息
             */
            commonServer.showRejectReason().then(function (data) {
                if (data.status) {
                    $scope.vm.reasonList = data.data.rejectReason;
                }
            });
        }
    ]);
})();
