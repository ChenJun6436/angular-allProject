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
    angular.module('app.core').directive('noticeDissent', [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'dist/tpls/core/directives/noticeDissent.html',
                replace: true,
                scope: false,
                controller: ['$scope', '$rootScope', 'povertyStudentServer', function ($scope, $rootScope, povertyStudentServer) {
                    $scope.getNoticeDissent = function () {
                        $scope.dissentFlag = 0;
                        $rootScope.alert = false;
                        $('#getNoticeDissent').modal('show');
                        povertyStudentServer.viewDealOpinion().then(function (data) {
                            if (data.status) {
                                $scope.dissentFlag = data.data.length === 0 ? 0 : 1;
                                $scope.dissentList = data.data;
                            } else {
                                $scope.dissentFlag = 1;
                            }
                        });
                    };
                }]
            };
        }]);
})();
