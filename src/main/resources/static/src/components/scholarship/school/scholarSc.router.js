/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.scholarSc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'main.scholarSc',
                config: {
                    url: '/scholarSc',
                    views: {
                        'section@main': {
                            templateUrl: 'dist/tpls/scholarship/school/scholarSc.html',
                            controller: 'scholarScCtrl'
                        }
                    }
                }
            }
            ,{
            state: 'main.scholarClassManerSc',
            config: {
                url: '/scholarClassManerSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/scholarship/school/scholarClassManerSc.html',
                        controller: 'scholarClassManerScCtrl'
                    }
                }
            }
        }];
    }
})();
