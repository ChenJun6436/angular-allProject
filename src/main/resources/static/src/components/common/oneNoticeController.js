/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('oneNoticeController', oneNoticeController);

    oneNoticeController.$inject = [
        '$scope',
        'povertyCommonServer',
        '$stateParams'];

    function oneNoticeController($scope, povertyCommonServer, $stateParams) {
        $scope.vm = {
            oneNotice: {}
        };

        /**
         * 获取单个公告详情信息
         */
        povertyCommonServer.getNoticeList($stateParams.noticeId).then(function (data) {
            if (data.status) {
                $scope.vm.oneNotice = data.data[0];
            }
        });
    }
})();
