/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.scholarSt').controller('scholarStudentInfoCtrl',scholarStudentInfoCtrl);
    scholarStudentInfoCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'scholarStudentServer'
    ];
    function scholarStudentInfoCtrl($scope, tools, ROOT, scholarStudentServer) {
        $scope.vm = {
            baseInfo: {}
        };
        //获取学生基本信息
        scholarStudentServer.getStudentInfo().then(function (data) {
            console.log(data);
            $scope.vm.baseInfo.studentInfo = data.data;
        });
        //获取学生基本信息
        scholarStudentServer.getStudentInfo().then(function (data) {
            console.log(data);
            $scope.vm.baseInfo.studentInfo = data.data;
        });
        //是否带领切换
        $scope.changeRadio = function () {
            $scope.daiLing = !$scope.daiLing;
            if($scope.daiLing){
                $scope.vm.applyInfos.isAgent = 1;
                $scope.vm.applyInfos.bankcard  = null;
            }else {
                $scope.vm.applyInfos.isAgent = 0;
                $scope.vm.applyInfos.agentBankcard = null;
                $scope.vm.applyInfos.agentSn = null;
            }
        };



        // commonServer.getStudentInfo(110).then(function (data) {
        //
        // });
        // /**
        //  * 获取登录用户基本信息
        //  */
        // studentServer.getBaseInfo().then(function (data) {
        //     if (data.status) {
        //         data.data.isDisability = data.data.isDisability == null ? 0 : data.data.isDisability;
        //         data.data.isSole = data.data.isSole == null ? 0 : data.data.isSole;
        //         data.data.isMartyr = data.data.isMartyr == null ? 0 : data.data.isMartyr;
        //         data.data.isLowField = data.data.isLowField == null ? 0 : data.data.isLowField;
        //         data.data.isLoad = data.data.isLoad == null ? 0 : data.data.isLoad;
        //         data.data.isFilingCard = data.data.isFilingCard == null ? 0 : data.data.isFilingCard;
        //         data.data.isAccident = data.data.isAccident == null ? 0 : data.data.isAccident;
        //         $scope.vm.baseInfo = data.data;
        //     }
        // });
        // /**
        //  * 家庭成员相关操作
        //  */
        // $scope.initFamily = function () {
        //     studentServer.getFamilyMember().then(function (data) {
        //         if (data.status) {
        //             $scope.vm.familyMemberList = data.data;
        //         }
        //     });
        // };
        // $scope.initFamily();
        // $scope.addFamilyMember = function () {
        //     $scope.vm.addFamilyMember = {};
        //     $scope.vm.familySubmit = false;
        //     $('#addFamilyMember').modal('show');
        //     $scope.addFamily = function () {
        //         $scope.vm.familySubmit = true;
        //         if ($scope.vm.familyForm.$valid) {
        //             studentServer.addFamilyMember($scope.vm.addFamilyMember).then(function (data) {
        //                 if (data.status) {
        //                     tools.alertSuccess($rootScope, '添加成功');
        //                     $scope.initFamily();
        //                     $('#addFamilyMember').modal('hide');
        //                 }
        //             });
        //         }
        //     };
        // };
        // $scope.deleteFamilyMember = function (id) {
        //     studentServer.deleteFamilyMember({
        //         'id': id
        //     }).then(function (data) {
        //         if (data.status) {
        //             tools.alertSuccess($rootScope, '删除成功');
        //             $scope.initFamily();
        //         }
        //     });
        // };
        // /**
        //  * 资助情况相关操作
        //  */
        // $scope.initSubsidy = function () {
        //     studentServer.querySubsidy().then(function (data) {
        //         if (data.status) {
        //             $scope.vm.subsidyList = data.data;
        //         }
        //     });
        // };
        // $scope.initSubsidy();
        // $scope.addSubsidyShow = function () {
        //     $scope.vm.addSubsidy = {};
        //     $scope.vm.subsidySubmit = false;
        //     $('#addSubsidy').modal('show');
        //     $scope.addSubsidy = function () {
        //         $scope.vm.subsidySubmit = true;
        //         if ($scope.vm.subsidyForm.$valid) {
        //             studentServer.addSubsidy($scope.vm.addSubsidy).then(function (data) {
        //                 if (data.status) {
        //                     tools.alertSuccess($rootScope, '添加成功');
        //                     $scope.initSubsidy();
        //                     $('#addSubsidy').modal('hide');
        //                 }
        //             });
        //         }
        //     };
        // };
        // $scope.removeSubsidy = function (id) {
        //     studentServer.removeSubsidy({
        //         'id': id
        //     }).then(function (data) {
        //         if (data.status) {
        //             tools.alertSuccess($rootScope, '删除成功');
        //             $scope.initSubsidy();
        //         }
        //     });
        // };
        // /**
        //  * 保存信息
        //  */
        // $scope.saveInfo = function () {
        //     $scope.vm.baseSubmit = true;
        //     $scope.vm.baseInfo.description = $scope.vm.baseInfo.description;
        //     if ($scope.vm.baseForm.$valid) {
        //         studentServer.modifyStudentInfo($scope.vm.baseInfo).then(function (data) {
        //             if (data.status) {
        //                 tools.alertSuccess($rootScope, '修改成功');
        //                 $rootScope.isComplete = 1;
        //             }
        //         });
        //     } else {
        //         tools.alertError($rootScope, '请填写完整信息');
        //     }
        // };
        // $rootScope.bigStatus = 1;
        // $rootScope.processName = '正在进行学生申请';
        // $rootScope.lastTime = new Date().getTime();
    }
})();
