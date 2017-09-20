/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('loginController', ['$scope', '$rootScope', '$cookies', '$state', 'commonServer', 'tools',
        function ($scope, $rootScope, $cookies, $state, commonServer, tools) {
            commonServer.getUserInfo().then(function (data) {
                if (data.status) {
                    $cookies.putObject('user', {
                        role: data.data.userType,
                        name: data.data.username,
                        url: data.data.url
                    });
                    $rootScope.userRole = $cookies.getObject('user').role;
                    $rootScope.userName = $cookies.getObject('user').name;
                    $rootScope.url = $cookies.getObject('user').url;
                    $state.go('main');
                } else {
                    tools.alertError($rootScope, '登录失败，请稍后重试');
                }
            });
        }
    ]);
})();
