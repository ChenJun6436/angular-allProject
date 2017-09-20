/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('dynamicManageController', dynamicManageController);

    dynamicManageController.$inject = [
        '$scope',
        'povertyCommonServer',
        'tools',
        'NgTableParams'];

    function dynamicManageController($scope, povertyCommonServer, tools, NgTableParams) {
        $scope.vm = {
            tableFlag: 0,
            levels: ['特别困难', '困难', '一般困难', '不困难']
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyCommonServer.getDynamicStudent().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 修改等级
         */
        $scope.vm.changeLevel = function (student, level) {
            if (level) {
                povertyCommonServer.dyModifyPovertyLevel({
                    studentId: student.studentId,
                    level: level
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('修改成功');
                    }
                });
            }
        };

        /**
         * 下载
         * @type {boolean}
         */
        $scope.isDownloading = false;

        $scope.downloadList = function () {

            $scope.isDownloading = true;

            povertyCommonServer.downloadDyManage().then(function (data) {
                if (data.status) {
                    window.open(data.data);
                } else {
                    tools.alertError(data.message);
                }
                $scope.isDownloading = false;
            });
        };
    }
})();
