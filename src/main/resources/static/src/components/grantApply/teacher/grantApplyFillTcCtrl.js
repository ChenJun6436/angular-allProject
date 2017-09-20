/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminTc').controller('grantApplyFillTcCtrl',grantApplyFillTcCtrl);

    grantApplyFillTcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'NgTableParams'
    ];

    function grantApplyFillTcCtrl($scope, tools, ROOT, grantsCommonServer,NgTableParams) {
        $scope.vm = {
            list:[],
            levelName:'',
            showFilter:false,
            showSelect:true,
            checked:[]

        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //获取列表
        grantsCommonServer.getGrantsStList().then(function (data) {
            console.log(data)
            $scope.vm.list = data.data;
            console.log($scope.vm.list)
            $scope.vm.tableParams = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.list}
            );
        });
        //保存等级修改（更新等级）
        $scope.vm.saveLevelName = function (user) {
            var des = {
                stage: 'advisorCheck',
                taskId: user.taskId,
                grantsName : $scope.vm.levelName.grantsName
            };
            console.log(des);
            grantsCommonServer.updateGrantsLevel(des).then(function (data) {
                if(data.status){
                    tools.alertSuccess('修改成功');
                }else {
                    tools.alertError(data.message);
                }
            });
        };
        //提交至学院（提交任务）
        $scope.vm.activityTasks = function () {
            var des = 'advisorCheck';
            grantsCommonServer.activityTasks(des).then(function (data) {
                console.log(data)
                $scope.vm.showSelect = false;
            })
        };
        //选择驳回的学生（checkBox）
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.list,function (i) {
                var index = $scope.vm.checked.indexOf(i.taskId);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i.taskId);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        //驳回多选学生材料
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
        //取消
        $scope.vm.cancel = function(){
            $('#rejectTasks').modal('hide');
        };

    }
})();