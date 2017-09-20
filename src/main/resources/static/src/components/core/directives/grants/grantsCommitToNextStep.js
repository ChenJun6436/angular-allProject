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
    angular.module('app.core').directive('grantsCommitToNextStep', [function () {
        return {
            restrict: 'E',
            template: '<input type="button" value="{{btnValue}}" ng-click="operateProcess()">',
            replace: true,
            scope: {
                btnValue: '@',
                batchId: '=',
                refresh: '&'
            },
            controller: ['$scope', 'grantsActivitiServer', 'tools', function ($scope, grantsActivitiServer, tools) {

                $scope.operateProcess = function () {
                    grantsActivitiServer.commitTasks($scope.batchId).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('提交成功');
                            $scope.refresh();
                        }
                    });
                };

            }]
        };
    }]);
})();