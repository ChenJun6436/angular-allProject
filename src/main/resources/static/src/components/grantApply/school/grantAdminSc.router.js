/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminSc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.grantAdminSc',
            config: {
                url: '/grantAdminSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminSc.html',
                        controller: 'grantAdminScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminPublicSc',
            config: {
                url: '/grantAdminPublicSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminPublicSc.html',
                        controller: 'grantAdminPublicScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminConfigSc',
            config: {
                url: '/grantAdminConfigSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminConfigSc.html',
                        controller: 'grantAdminConfigScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminSchoolManerSc',
            config: {
                url: '/grantAdminSchoolManerSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminSchoolManerSc.html',
                        controller: 'grantAdminSchoolManerScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminComPublicSc',
            config: {
                url: '/grantAdminComPublicSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminComPublicSc.html',
                        controller: 'grantAdminComPublicScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminClassManerSc',
            config: {
                url: '/grantAdminClassManerSc/:grantsId',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminClassManerSc.html',
                        controller: 'grantAdminClassManerScCtrl'
                    }
                }
            }
        }];
    }
})();
