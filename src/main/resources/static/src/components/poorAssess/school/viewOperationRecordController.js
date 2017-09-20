/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('viewOperationRecordController', viewOperationRecordController);

    viewOperationRecordController.$inject = [
        '$scope',
        'povertySchoolServer'];

    function viewOperationRecordController($scope, povertySchoolServer) {
        $scope.vm = {
            recordList: [],
            status: 1
        };

        /**
         * 获取操作记录
         * @param status 1：学校   2：学院    3：辅导员  4：班级用户  5：学生
         */
        $scope.init = function (status) {
            $scope.vm.status = status;
            povertySchoolServer.viewOperateLog(status).then(function (data) {
                if (data.status) {
                    $scope.vm.recordList = data.data;
                }
            });
        };
        $scope.init(1);
    }
})();
