/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('particularlyDifficultController', particularlyDifficultController);

    particularlyDifficultController.$inject = [
        '$scope',
        '$rootScope',
'particularlyDifficultServer',
        'FileUploader',
        'tools',
        'ROOT'];

    function particularlyDifficultController($scope, $rootScope, particularlyDifficultServer, FileUploader, tools, ROOT) {
        $scope.vm = {
            endTime: '',
            started: 0,
            isApply: false,
            form: {
                bankNum: "",
                deputyBankNum: "",
                deputySn: "",
                hasDeputy: false,
                reason: ""
            },
            baseSubmit: false,
        };

        $scope.init = function () {
            particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                if(data.status) {
                    $scope.vm.endTime = data.data.endTime
                }else {
                    $scope.vm.endTime = '未开始';
                }
            })
            particularlyDifficultServer.getAllowanceIsFiveClass().then(function (data) {
                if(data.status) {
                    $scope.vm.isApply = data.data;
                }
            })
        };
        $scope.init();
        $scope.apply = function () {
            $scope.vm.started = 1;
        };
        $scope.$watch(function () {
            return $scope.vm.form.hasDeputy;
        }, function (value) {
            if(!value) {
                $scope.vm.form.deputyBankNum = "";
                $scope.vm.form.deputySn = "";
            }

        });
        $scope.submit = function () {
            $scope.vm.baseSubmit = true;
            if($scope.vm.form.hasDeputy){
                if($scope.vm.form.deputySn =='' ||$scope.vm.form.deputyBankNum ==''){
                    tools.alertError('请填写完整信息');
                    return false;
                }
            }
            if ($scope.vm.baseForm.$valid) {
                particularlyDifficultServer.postAllowanceApply({
                    bankNum: $scope.vm.form.bankNum,
                    deputyBankNum: $scope.vm.form.deputyBankNum,
                    deputySn: $scope.vm.form.deputySn,
                    hasDeputy:  $scope.vm.form.hasDeputy ? 1 : 0,
                    reason: $scope.vm.form.reason
                }).then(function (data) {
                    tools.alertError(data.message);
                })
            }else {
                tools.alertError('请填写完整信息');
            }

        }
    }
})();
