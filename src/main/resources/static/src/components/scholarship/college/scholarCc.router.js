/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.scholarCc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'main.scholarCc',
                config: {
                    url: '/scholarCc',
                    views: {
                        'section@main': {
                            templateUrl: 'dist/tpls/scholarship/college/scholarCc.html',
                            controller: 'scholarCcCtrl'
                        }
                    }
                }
            }
            ,{
            state: 'main.scholarSchoolManerCc',
            config: {
                url: '/scholarSchoolManerCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/scholarship/college/scholarSchoolManerCc.html',
                        controller: 'scholarSchoolManerCcCtrl'
                    }
                }
            }
        }];
    }
})();
