/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('advisorParticularlyDifficultUncheckedController', advisorParticularlyDifficultUncheckedController);

    advisorParticularlyDifficultUncheckedController.$inject = [
        '$scope',
        '$rootScope',
'particularlyDifficultServer',
        'FileUploader',
        'NgTableParams',
        'tools',
        'ROOT'];

    function advisorParticularlyDifficultUncheckedController($scope, $rootScope, particularlyDifficultServer, FileUploader, NgTableParams, tools, ROOT) {
        $scope.vm = {
            endTime: '',
            submitFlag: false
        };

        $scope.init = function () {
            particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                if(data.status) {
                    $scope.vm.endTime = data.data.endTime
                }else {
                    $scope.vm.endTime = '未开始';
                }
            })
            $scope.getAllowanceCheck();
        };
        $scope.getAllowanceCheck = function () {
            particularlyDifficultServer.getAllowanceCheck().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    $scope.vm.studentList.map(function (item) {
                        item.instructorPass =  item.instructorPass==1? '通过':'不通过'
                        item.collegePass =  item.collegePass==1? '通过':'不通过'
                        item.schoolPass =  item.schoolPass==1? '通过':'不通过'
                        item.finalPass =  item.finalPass==1? '通过':'不通过'
                        item.applyCount =  item.applyCount==0?'新申请':'第'+item.applyCount+'次申请'
                        return true
                    })
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
        }
        $scope.init();
        $scope.confirmSubmit = function () {
            $scope.vm.submitFlag = true;
            particularlyDifficultServer.postAllowanceSubmitNextCheck().then(function (data) {
                if(data.status){
                    tools.alertSuccess('提交成功');
                    $scope.getAllowanceCheck();

                }
                $scope.vm.submitFlag = false;
            })
        }
    }
})();
