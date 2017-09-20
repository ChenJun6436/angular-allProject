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
    angular.module('app.core').directive('povertyLevelSelect', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/poverty/povertyLevelSelect.html',
            replace: true,
            scope: {
                processInstanceId: '@',
                edit: '=',
                defaultLevel: '=',
                isCommiting: '=',
                step: '@'
            },
            controller: [
                'tools',
                '$scope',
                'povertyCommonServer',
                function (tools, $scope, povertyCommonServer) {
                    $scope.vm = {
                        levels: ['特别困难', '困难', '一般困难', '不困难']
                    };
                    /**
                     * 修改等级
                     */
                    $scope.vm.changeLevel = function (level) {
                        if ($scope.defaultLevel) {
                            $scope.defaultLevel = level;
                            povertyCommonServer.updatePovertyLevel({
                                processInstanceId: $scope.processInstanceId,
                                taskId: $scope.taskId,
                                step: $scope.step,
                                level: $scope.defaultLevel
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