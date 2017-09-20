/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/5
 * Time: 10:44
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 打开和收起搜索框
     */
    angular.module('app.core').directive('operateProcess', [function () {
        return {
            restrict: 'E',
            template: '<input type="button" ng-disabled="isCommiting"  value="{{btnValue}}" ng-click="operateProcess()">',
            replace: true,
            scope: {
                btnValue: '@',
                step: '@',
                isPass: '@',
                isCommiting: '=',
                refresh: '&'
            },
            controller:['$scope', 'povertyCommonServer', 'tools', function ($scope, povertyCommonServer, tools) {
                
                $scope.isCommiting = false;
                
                $scope.operateProcess = function () {

                    $scope.isCommiting = true;

                    povertyCommonServer.operateProcess({
                        step: $scope.step,
                        isPass: parseInt($scope.isPass)
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('提交成功');
                            $scope.refresh();
                        }else{
                            tools.alertError(data.message, 5000);
                        }
                        $scope.isCommiting = false;
                    });
                };

            }]
        };
    }]);
})();