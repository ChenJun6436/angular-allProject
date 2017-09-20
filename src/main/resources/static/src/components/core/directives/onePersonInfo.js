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
     * 跳转至学生申请资料详情页面
     */
    angular.module('app.core').directive('onePersonInfo', [function () {
        return {
            restrict: 'E',
            template: '<a href="javascript:;" title="查看" ng-click="goStudentInfo(student.studentId)">查看</a>',
            replace: true,
            scope: {
                id: '@'
            },
            link: function (scope, ele, attrs) {
                scope.goStudentInfo = function () {
                    window.open('#/studentPovertyMaterial/' + scope.id);
                };
            }
        };
    }]);
})();
