/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/7
 * Time: 15:46
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.statistic').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.statistic',
            config: {
                url: '/statistic',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/statistic/statistic.html',
                        controller: 'statisticController'
                    }
                }
            }
        },{
            state: 'main.statistic.economic',
            config: {
                url: '/economic',
                templateUrl: 'dist/tpls/statistic/economic.html',
                controller: 'economicController'
            }
        },{
            state: 'main.statistic.grantInAid',
            config: {
                url: '/grantInAid',
                templateUrl: 'dist/tpls/statistic/grantInAid.html',
                controller: 'grantInAidController'
            }
        }];
    }
})();
