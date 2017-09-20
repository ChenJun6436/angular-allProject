/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/29
 * Time: 12:01
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 退出
     */
    angular.module('app.core').directive('logout', [function () {
        return {
            restrict: 'E',
            template: '<span class="user-name">欢迎您，{{userName}}<a href="javascript:;" title="退出" ng-click="logout()">' +
            '<svg class="icon" aria-hidden="true">' +
            '<use xlink:href="#icon-tuichu"></use>' +
            '</svg></a></span>',
            replace: true,
            scope: {},
            controller: ['povertyCommonServer', 'tools', '$scope', '$rootScope', '$cookies', function (povertyCommonServer, tools, $scope, $rootScope, $cookies) {
                $scope.userName = $rootScope.userName;
                $scope.logout = function () {
                    /*povertyCommonServer.logout().then(function (data) {
                        if (data.status) {
                            window.location.href = data.data.url;
                            tools.logout($cookies, $rootScope);
                        }
                    });*/
                    window.location.href ='http://rap.xdbigdata.com/app-store/#/login';
                };
            }]
        };
    }]);
})();
