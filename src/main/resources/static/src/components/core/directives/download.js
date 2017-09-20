/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/5
 * Time: 11:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 下载贫困认定列表
     */
    'use strict';
    angular.module('app.core').directive('download', [function () {
        return {
            restrict: 'E',
            template: '<span><a href="javascript:;" ng-if="!isDownloading" ng-click="downloadList()">下载名单</a><span ng-if="isDownloading">正在下载…</span></span>',
            replace: true,
            scope: {},
            controller: [
                '$scope',
                'povertyCommonServer',
                'tools',
                function ($scope, povertyCommonServer, tools) {

                    $scope.isDownloading = false;

                    $scope.downloadList = function () {

                        $scope.isDownloading = true;

                        povertyCommonServer.downloadPovertyApply().then(function (data) {
                            if (data.status) {
                                window.open(data.data);
                            } else {
                                tools.alertError(data.message);
                            }
                            $scope.isDownloading = false;
                        });
                    };

                }
            ]
        };
    }]);
})();