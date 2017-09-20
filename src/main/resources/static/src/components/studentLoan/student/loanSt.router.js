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
            state: 'main.loanSt',
            config: {
                url: '/loanSt',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/studentLoan/student/loanSt.html',
                        controller: 'loanStCtrl'
                    }
                }
            }
        }];
    }
})();
