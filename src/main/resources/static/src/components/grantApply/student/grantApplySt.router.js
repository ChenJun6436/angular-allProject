/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantApply').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.grantApplyIndexSt',
            config: {
                url: '/grantApplyIndexSt',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/student/grantApplyIndexSt.html',
                        controller: 'grantApplyIndexCtrl'
                    }
                }
            }
        },{
            state: 'main.grantApplyFill',
            config: {
                url: '/grantApplyFill/:des',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/student/grantApplyFill.html',
                        controller: 'grantApplyFillCtrl'
                    }
                }
            }
        },{
            state: 'main.grantApplyPublic',
            config: {
                url: '/grantApplyPublicSt',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/student/grantApplyPublicSt.html',
                        controller: 'grantApplyPublicCtrl'
                    }
                }
            }
        }];
    }
})();
