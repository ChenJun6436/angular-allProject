/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.loanCc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.loanCc',
            config: {
                url: '/loanCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/studentLoan/college/loanCc.html',
                        controller: 'loanCcCtrl'
                    }
                }
            }
        }];
    }
})();
