/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('timeSetController', ['$scope', '$rootScope', '$cookies', '$state', 'schoolServer', 'tools',
        function ($scope, $rootScope, $cookies, $state, schoolServer, tools) {
            /**
             * 开始流程
             */
            $scope.startNew = function () {
                schoolServer.startProcess().then(function (data) {
                    if (data.status) {
                        window.localStorage.setItem('processStatus', data.data);
                        $state.go('main.timeSets');
                        tools.alertSuccess($rootScope, data.message);
                    }
                });
            };
        }
    ]);
})();
