/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';

    angular.module('app.layout').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        var otherwise = '/login';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: 'main',
                config: {
                    url: '/main',
                    views: {
                        '': {
                            templateUrl: 'dist/tpls/layout/main.html'
                        },
                        'header@main': {
                            templateUrl: 'dist/tpls/layout/header.html',
                            controller: 'headerController'
                        },
                        'aside@main': {
                            templateUrl: 'dist/tpls/layout/aside.html',
                            controller: 'asideController'
                        },
                        'section@main': {
                            controller: ['$state', '$rootScope', function ($state, $rootScope) {
                                //根据角色不同判断默认显示的初始化页面
                                if ($rootScope.userRole === 5 || $rootScope.userRole === 4) {
                                    $state.go('main.studentInfo');
                                } else if ($rootScope.userRole === 3) {
                                    $state.go('main.advisorAuditPoverty');
                                } else if ($rootScope.userRole === 2) {
                                    $state.go('main.collegeAuditPoverty');
                                } else if ($rootScope.userRole === 1) {
                                    $state.go('main.schoolAuditPoverty');
                                }
                            }]
                        }
                    }
                }
            }
        ];
    }
})();
