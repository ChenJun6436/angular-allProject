/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.scholarSt').controller('scholarPublicCtrl',scholarPublicCtrl);
    scholarPublicCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'NgTableParams',
        'grantsCommonServer',
        'grantsStudentServer'
    ];

    function scholarPublicCtrl($scope, tools, ROOT, NgTableParams, grantsCommonServer,grantsStudentServer) {
        $scope.vm = {
            checked:[],
        };
        //是否公示阶段
        grantsCommonServer.isPublic().then(function (data) {
            console.log(data)
        });
        //获取公示列表
        grantsCommonServer.publicList().then(function (data) {
            console.log(data)
            $scope.vm.publicList = data.data.resultList;
            $scope.vm.tableParams = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.publicList}
            );
        });
        //查看异议结果
        $scope.vm.doSeeAs = function(){
            grantsStudentServer.seeAs().then(function (data) {
                console.log(data);
                $scope.vm.objRes = data.data[0];
                $scope.vm.showDetail = true;
                console.log($scope.vm.objRes)
            })
        };
        //当前阶段
        grantsCommonServer.getStage().then(function (data) {
            console.log(data)
            $scope.vm.nowStage = data.data.currentStage;
            $scope.vm.nextStage = data.data.nextStage;
        });
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //关闭模态框
        $scope.vm.doPublicNo = function () {
            $scope.vm.showDetail = false;
        };
    }
})();