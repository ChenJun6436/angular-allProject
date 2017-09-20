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
     * 学生对公示发反馈意见
     */
    angular.module('app.core').directive('grantsDetail', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/grants/grantsDetail.html',
            replace: true,
            scope: {
                grants: '='
            },
            controller: [
                '$scope',
                function ($scope) {

                    $scope.$watch('grants', function (to) {
                        if (to) {
                            angular.forEach($scope.grants.levels, function (value) {
                                value.name = value.url ? value.url.split('\\')[value.url.split('\\').length - 1] : value.url;
                            });
                        }
                    });

                }
            ]
        };
    }]);
})();
