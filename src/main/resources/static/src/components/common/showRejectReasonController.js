/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('showRejectReasonController', showRejectReasonController);

    showRejectReasonController.$inject = [
        '$scope',
        'povertyCommonServer'];

    function showRejectReasonController($scope, povertyCommonServer) {
        $scope.vm = {
            reasonList: []
        };

        /**
         * 获取驳回原因
         */
        povertyCommonServer.getReject().then(function (data) {
            if (data.status) {
                $scope.vm.reasonList = data.data;
            }
        });
    }
})();
