/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.layout').controller('asideController', asideController);

    asideController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'povertyCommonServer',
        '$websocket',
        'povertyStudentServer'];

    function asideController($scope, $rootScope, $cookies, $state, povertyCommonServer, $websocket, povertyStudentServer) {
        $scope.state = $state;

        if ($rootScope.userRole === 4 || $rootScope.userRole === 5) {
            povertyStudentServer.getStudentStatus().then(function (data) {
                if (data.status) {
                    $rootScope.povertyStudentStatus = data.data.status;
                    $rootScope.result = data.data.result;
                }
            });
            /**
             * 判断是否已经填了基本信息维护
             */
            povertyStudentServer.isComplete().then(function (data) {
                $rootScope.isComplete = data.data;
                if (!$rootScope.isComplete) {
                    $('#needEdit').modal({backdrop: 'static', keyboard: false});
                    $scope.goEdit = function () {
                        $('#needEdit').modal('hide');
                        $state.go('main.studentInfo');
                    };
                }
            });

        }
        /**
         * 导航栏显示隐藏
         * */
        $scope.shSecondClass = function (num) {
            $scope.secondClass = num;
        };
        $rootScope.sum = 0;
        $rootScope.applyNum = 0;
        $rootScope.noticeNum = 0;
        var _messageArr = [
            {type: 7, num: 6}
        ];
        angular.forEach(_messageArr, function (value) {
            $rootScope.sum += value.num;
            if (value.type === '7') {
                $rootScope.applyNum += value.num;
            }
            if (value.type === '6') {
                $rootScope.noticeNum += value.num;
            }
        });
    }
})();
