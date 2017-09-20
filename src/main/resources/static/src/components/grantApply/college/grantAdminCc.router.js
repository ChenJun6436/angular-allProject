/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminCc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'main.grantAdminCc',
                config: {
                    url: '/grantAdminCc',
                    views: {
                        'section@main': {
                            templateUrl: 'dist/tpls/grantApply/college/grantAdminCc.html',
                            controller: 'grantAdminCcCtrl'
                        }
                    }
                }
            }
            ,{
            state: 'main.grantAdminPublicCc',
            config: {
                url: '/grantAdminPublicCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/college/grantAdminPublicCc.html',
                        controller: 'grantAdminPublicCcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminConfigCc',
            config: {
                url: '/grantAdminConfigCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/college/grantAdminConfigCc.html',
                        controller: 'grantAdminConfigCcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminSchoolManerCc',
            config: {
                url: '/grantAdminSchoolManerCc/:grantsId',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/college/grantAdminSchoolManerCc.html',
                        controller: 'grantAdminSchoolManerCcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminComPublicCc',
            config: {
                url: '/grantAdminComPublicCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/college/grantAdminComPublicCc.html',
                        controller: 'grantAdminComPublicCcCtrl'
                    }
                }
            }
        }];
    }
})();
