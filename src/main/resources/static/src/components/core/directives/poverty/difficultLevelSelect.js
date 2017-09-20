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
    angular.module('app.core').directive('difficultLevelSelect', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/poverty/difficultLevelSelect.html',
            replace: true,
            scope: {
                thisStep: '=',
                studentId: '=',
                defaultLevel: '=',
                step: '='
            },
            controller: [
                'tools',
                '$scope',
                'particularlyDifficultServer',
                function (tools, $scope, particularlyDifficultServer) {
                    $scope.vm = {
                        levels: ['通过', '不通过']
                    };
                    /**
                     * 修改等级
                     */
                    $scope.defaultLevel = $scope.defaultLevel==1? '通过': '不通过';
                    $scope.vm.changeLevel = function (level) {
                        if ($scope.defaultLevel) {
                            $scope.defaultLevel = level;
                            particularlyDifficultServer.postAllowanceUpdateApply({
                                applyId: $scope.studentId,
                                pass: $scope.defaultLevel=='通过'? 1:0,
                                step: $scope.step,
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