/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('asideController', ['$scope', '$rootScope', '$cookies', '$state', 'commonServer', '$websocket', 'studentServer',
        function ($scope, $rootScope, $cookies, $state, commonServer, $websocket, studentServer) {
            $scope.state = $state;

            if ($rootScope.userRole === 100) {
                studentServer.getStatus().then(function (data) {
                    if (data.status) {
                        $rootScope.status = data.data.status;
                        $rootScope.level = data.data.level;
                    }
                });
                /**
                 * 判断是否已经填了基本信息维护
                 */
                commonServer.isComplete().then(function (data) {
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
            //TODO   演示系统不需要通信
            //连接socket
            /*var _dataStream = $websocket('ws://' + window.location.host + '/myHandler');
             //监听新消息
             _dataStream.onMessage(function (message) {
             $scope.sum = 0;
             $scope.applyNum = 0;
             $scope.noticeNum = 0;
             var _messageArr = angular.fromJson(message.data);
             angular.forEach(_messageArr, function (value) {
             $scope.sum += value.num;
             if (value.type === '7') {
             $scope.applyNum += value.num;
             }
             if (value.type === '6') {
             $scope.noticeNum += value.num;
             }
             });
             });*/
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
    ]);
})();
