/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.srGroup',
            config: {
                url: '/srGroup',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/subsidizeRecord/srGroup.html',
                        controller: 'srGroupController'
                    }
                }
            }
        }];
    }
})();
