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
    angular.module('app.core').directive('showGrantsMaterial', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/grants/showGrantsMaterial.html',
            replace: true,
            scope: {
                materialList: '='
            },
            controller: [
                '$scope',
                function ($scope) {
                    $scope.materialList = $scope.materialList ? $scope.materialList.map(function (value) {
                        return {
                            url: value,
                            name: value.split('\\')[value.split('\\').length - 1]
                        };
                    }) : [];
                    $scope.showGrantsMaterialModal = function () {
                        $('#materialDetail').modal('show');
                    };

                }
            ]
        };
    }]);
})();
