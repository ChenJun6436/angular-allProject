/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminTc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.grantAdminTc',
            config: {
                url: '/grantAdminTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/teacher/grantAdminTc.html',
                        controller: 'grantAdminTcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminPublicTc',
            config: {
                url: '/grantAdminPublicTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/teacher/grantAdminPublicTc.html',
                        controller: 'grantApplyPublicTcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantApplyFillTc',
            config: {
                url: '/grantApplyFillTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/teacher/grantApplyFillTc.html',
                        controller: 'grantApplyFillTcCtrl'
                    }
                }
            }
        }];
    }
})();
