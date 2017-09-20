/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('noticeListController', noticeListController);

    noticeListController.$inject = [
        '$scope',
        'povertyCommonServer',
        'povertySchoolServer',
        'tools'];

    function noticeListController($scope, povertyCommonServer, povertySchoolServer, tools) {
        $scope.vm = {
            tableFlag: 0
        };

        $scope.init = function () {
            povertyCommonServer.getNoticeList(0).then(function (data) {
                if (data.status) {
                    $scope.vm.noticeList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 跳转至公告详情
         * @param id
         */
        $scope.getNoticeDetail = function (id) {
            window.open('#/oneNotice/' + id);
        };

        /**
         * 删除公告
         * @param id
         */
        $scope.removeNotice = function (id) {
            povertySchoolServer.removeNotice(id).then(function (data) {
                if (data.status) {
                    tools.alertSuccess('删除成功');
                    $scope.init();
                }
            });
        };
    }
})();
