/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.login').controller('loginController', loginController);

    loginController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'povertyCommonServer',
        'tools'
    ];

    function loginController($scope, $rootScope, $cookies, $state, povertyCommonServer, tools) {
        $scope.vm = {};
        $cookies.remove('user');
        $scope.vm.login = function () {



            $cookies.putObject('user', {
                role: parseInt($scope.vm.user.userType),
                name: $scope.vm.user.userName,
                url: parseInt($scope.vm.user.userType)
            });
            $rootScope.userRole = $cookies.getObject('user').role;
            $rootScope.userName = $cookies.getObject('user').name;
            $rootScope.url = $cookies.getObject('user').url;
            $state.go('main');



            // povertyCommonServer.login($scope.vm.user).then(function (data) {
            //     if (data.status) {
            //         $cookies.putObject('user', {
            //             role: parseInt($scope.vm.user.userType),
            //             name: $scope.vm.user.userName,
            //             url: parseInt($scope.vm.user.userType)
            //         });
            //         $rootScope.userRole = $cookies.getObject('user').role;
            //         $rootScope.userName = $cookies.getObject('user').name;
            //         $rootScope.url = $cookies.getObject('user').url;
            //         $state.go('main');
            //     } else {
            //         tools.alertError('登录失败，请稍后重试');
            //     }
            // });




        };
    }
})();
