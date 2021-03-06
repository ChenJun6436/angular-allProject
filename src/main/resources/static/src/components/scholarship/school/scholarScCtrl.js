/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.scholarSc').controller('scholarScCtrl',scholarScCtrl);

    scholarScCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'NgTableParams',
        'grantsCommonServer'
    ];

    function scholarScCtrl($scope, tools, ROOT, NgTableParams,grantsCommonServer) {
        $scope.vm = {
            list:[],
            levelName:'',
            showFilter:false,
            showSelect:true,
            checked:[],
            showEditTime:false

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
                stage: 'collegeCheck',
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
        //配置时间---函数
        $scope.fillTime = function () {
            if ($scope.vm.startTime && $scope.vm.endTime){
                var sate = {
                    startTime : $scope.vm.startTime,
                    endTime : $scope.vm.endTime,
                    stage : '学院公示'
                };
                //配置时间
                grantsCommonServer.savePublicTime(sate).then(function (data) {
                    if(data.status){
                        tools.alertSuccess('配置成功');
                    }else{
                        tools.alertError('配置失败');
                    }
                    $('#upScPulic').modal('hide');
                });
            }else {
                tools.alertError('起始时间不能为空');
            }
        };
        //判断是否已经配置时间
        grantsCommonServer.isPublicTime().then(function (data) {
            console.log(data.data)
            //已配置
            if(data.data=='yes'){
                //获取已经配置的时间
                grantsCommonServer.fillPublicTime().then(function (data) {
                    $scope.vm.nowStartDate = data.startTime;
                    $scope.vm.nowEndDate = data.endTime;
                    $scope.vm.nowId = data.id;
                    $scope.vm.showEditTime = true;
                });
                //更新时间
                $scope.vm.editTime = function () {
                    $('#upScPulic').modal('show');
                    $scope.vm.openScPublic = function () {
                        $scope.fillTime();
                    }
                };
                //提交学院公示
                $scope.vm.activityPulic = function () {
                    console.log('提交到学院公示')
                };
            }
            //未配置
            else if(data.data=='no'){
                $scope.vm.showEditTime = false;
                //提交学院公示
                $scope.vm.activityPulic = function () {
                    $('#upScPulic').modal('show');
                    $scope.vm.openScPublic = function () {
                        $scope.fillTime();
                        console.log('未配置：提交到学院公示')
                    }
                };
            }else{
                tools.alertError('系统异常请稍后再试');
            }
        });


        //提交至学校（提交任务）
        // $scope.vm.activityTasks = function () {
        //     var des = {stage:'collegeCheck'};
        //     grantsCommonServer.activityTasks(des).then(function (data) {
        //         console.log(data)
        //         $scope.vm.showSelect = false;
        //     })
        // };

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
                            stage:'collegeCheck',
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