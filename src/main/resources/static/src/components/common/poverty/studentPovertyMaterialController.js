/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('studentPovertyMaterialController', studentPovertyMaterialController);

    studentPovertyMaterialController.$inject = [
        '$scope',
        'povertyCommonServer',
        '$stateParams'];

    function studentPovertyMaterialController($scope, povertyCommonServer, $stateParams) {
        $scope.vm = {
            studentDetailInfo: {}
        };

        /**
         * 查看学生申请材料
         */
        $scope.vm.studentId = $stateParams.studentId;
        povertyCommonServer.getAttachments($scope.vm.studentId).then(function (data) {
            if (data.status) {
                $scope.vm.uploadsList = data.data;
            }
        });
    }
})();
