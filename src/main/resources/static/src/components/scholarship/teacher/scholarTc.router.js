/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.scholarTc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.scholarFillTc',
            config: {
                url: '/scholarFillTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/scholarship/teacher/scholarFillTc.html',
                        controller: 'scholarFillTcCtrl'
                    }
                }
            }
        },{
            state: 'main.scholarPublicTc',
            config: {
                url: '/scholarPublicTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/scholarship/scholarPublicTc.html',
                        controller: 'scholarPublicTcCtrl'
                    }
                }
            }
        }];
    }
})();
