/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('timeSetController', timeSetController);

    timeSetController.$inject = [
        '$scope',
        '$state',
        'povertySchoolServer',
        'tools'];

    function timeSetController($scope, $state, povertySchoolServer, tools) {

        $scope.isSetting = false;

        /**
         * 开始流程
         */
        $scope.startNew = function () {

            $scope.isSetting = true;

            povertySchoolServer.startProcess().then(function (data) {
                if (data.status) {
                    // window.localStorage.setItem('processStatus', data.data);
                    $state.go('main.timeSets');
                    tools.alertSuccess('设置成功');
                }else{
                    tools.alertError('设置失败');
                }
                $scope.isSetting = false;
            });
        };
    }
})();
