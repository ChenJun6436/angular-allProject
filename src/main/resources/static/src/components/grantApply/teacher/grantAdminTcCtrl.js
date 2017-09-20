/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminTc').controller('grantAdminTcCtrl',grantAdminTcCtrl);

    grantAdminTcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'grantsAdvisorServer',
        'NgTableParams'
    ];

    function grantAdminTcCtrl($scope,tools, ROOT, grantsCommonServer, grantsAdvisorServer, NgTableParams) {
        $scope.vm = {
            checkedNot:[],
            checked:[],
            showA:true,
            showB:false
        };
        //获取当前申请
        grantsCommonServer.getGrantsStList().then(function (data) {
            console.log('liebiao')
            console.log(data)
            $scope.vm.list = data.data;
            $scope.vm.tableParamList = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.list}
            );
        });
        //获取往年未申请
        grantsAdvisorServer.notApply().then(function (data) {
            console.log('notapply')
            console.log(data)
            $scope.vm.notlist = data.data;
            $scope.vm.tableParamNot = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.notlist}
            );
        });
        //选中材料审核  list
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.list, function (i) {
                var index = $scope.vm.checked.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
            console.log( $scope.vm.checked)
        };
        //选中未申请的  not
        $scope.vm.checkOneNot = function () {
            angular.forEach($scope.vm.notlist,function (i) {
                var index = $scope.vm.checkedNot.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checkedNot.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checkedNot.splice(index, 1);
                };
            });
            console.log( $scope.vm.checkedNot)
        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //切换tb exTB
        $scope.vm.showExTb = function () {
            $scope.vm.showA = true;
            $scope.vm.showB = false;
        };
        //切换tb UNexTB
        $scope.vm.showUnExTb = function () {
            $scope.vm.showA= false;
            $scope.vm.showB = true;
        };
        //通过
        $scope.vm.activityTasks = function () {
            var des = 'advisorCheck';
            grantsCommonServer.activityTasks(des).then(function (data) {
                console.log(data)
            })
        };
        //驳回学生材料
        $scope.vm.showRejectTasks = function () {
            console.log($scope.vm.checked)
            if($scope.vm.checked.length<1){
                tools.alertError('请选择需要驳回材料的学生');
            }else {
                $('#rejectTasks').modal('show');
                $scope.vm.rejectTasks = function () {
                    if($scope.vm.rejectReason){
                        var des = {
                            rejectReason:$scope.vm.rejectReason,
                            stage:'advisorCheck',
                            rejectTasks:$scope.vm.checked
                        };
                        console.log(des);
                        grantsCommonServer.rejectTasks(des).then(function (data) {
                            console.log(data);
                            $('#rejectTasks').modal('hide');
                            tools.alertSuccess('操作成功');
                        });
                    }else {
                        $scope.vm.error = 'inputError';
                        tools.alertError('驳回信息不能为空');
                    };
                };
            };
        };
        //驳回单个学生材料
        $scope.vm.rejectOneTasks = function (des) {
            grantsCommonServer.checkMaterial().then(function (data) {
                console.log(data);
            })
        };
        //通过单个学生材料
        $scope.vm.passOneTasks = function (des) {
            grantsCommonServer.checkMaterial().then(function (data) {
                console.log(data);
            })
        };
        //查看学生材料
        $scope.vm.lookSt = function (des) {

        }
    }
})();