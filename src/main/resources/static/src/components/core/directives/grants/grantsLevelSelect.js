/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/3
 * Time: 11:07
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 跳转至学生申请资料详情页面
     */
    angular.module('app.core').directive('grantsLevelSelect', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/grants/grantsLevelSelect.html',
            replace: true,
            scope: {
                student: '=',
                edit: '@',
                defaultLevel: '='
            },
            controller: [
                'tools',
                '$scope',
                'grantsActivitiServer',
                function (tools, $scope, grantsActivitiServer) {
                    $scope.vm = {};

                    $scope.student.grantsLevel = $scope.student.grantsLevel.map(function(value){
                        return value.name;
                    });

                    /**
                     * 修改等级
                     */
                    $scope.vm.changeLevel = function (level) {
                        if ($scope.defaultLevel) {
                            $scope.defaultLevel = level;
                            grantsActivitiServer.updateGrantsLevel({
                                taskId: $scope.student.taskId,
                                batchId: $scope.student.batchId,
                                grantsName: $scope.defaultLevel
                            }).then(function (data) {
                                if (data.status) {
                                    tools.alertSuccess('修改成功');
                                }
                            });
                        }
                    };
                }
            ]
        };
    }]);
})();