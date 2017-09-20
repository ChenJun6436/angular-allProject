/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 打开和收起搜索框
     */
    angular.module('app.core').directive('searchBtn', [function () {
        return {
            restrict: 'E',
            template: '<input  class="btn btn-primary pull-right mr20 mt10" type="button"  value="{{value}}" ng-click="switchBtn()">',
            replace: true,
            scope: {
                show: '='
            },
            link: function (scope) {
                scope.value = '搜索';
                scope.switchBtn = function () {
                    scope.show = !scope.show;
                    scope.value = scope.show ? '收起' : '搜索';
                };
            }
        };
    }]);
})();
