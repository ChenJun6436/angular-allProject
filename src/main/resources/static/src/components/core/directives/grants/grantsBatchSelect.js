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
     * 助学金可操作批次列表
     */
    angular.module('app.core').directive('grantsBatchSelect', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/grants/grantsBatchSelect.html',
            replace: true,
            scope: {
                selectedBatch: '='
            },
            controller: [
                'tools',
                '$scope',
                'grantsCommonServer',
                function (tools, $scope, grantsCommonServer) {
                    $scope.vm = {};

                    grantsCommonServer.batchesInProcess().then(function (data) {
                        if (data.status) {
                            $scope.vm.grantsBatchList = data.data;
                            $scope.selectedBatch = data.data[0];
                        }
                    });
                }
            ]
        };
    }]);
})();