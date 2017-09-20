/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/7
 * Time: 15:01
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.statistic').controller('statisticController', statisticController);

    statisticController.$inject = [
        '$scope',
        'commonsServer',
        'locals',
        '$state'
    ];

    function statisticController($scope, commonsServer, locals, $state) {

        /**
         * 初始化信息
         */
        $state.go('main.statistic.economic');
        /*$scope.init = function () {
            commonsServer.getCommonsSchoolYearAll().then(function (data) {
                if(data.status) {
                    $scope.startYears = angular.copy(data.data);
                    $scope.endYears = angular.copy(data.data);
                    $scope.startYear = $scope.startYears[0];
                    $scope.endYear = $scope.endYears[0];

                }
            });
        };
        $scope.init();*/
    }
})();