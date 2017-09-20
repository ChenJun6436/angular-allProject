/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantApply').controller('grantApplyPublicCtrl',grantApplyPublicCtrl);
    grantApplyPublicCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'NgTableParams',
        'grantsCommonServer',
        'grantsStudentServer'
    ];

    function grantApplyPublicCtrl($scope, tools, ROOT, NgTableParams, grantsCommonServer,grantsStudentServer) {
        $scope.vm = {
            checked:[],

        };
        //是否公示阶段
        grantsCommonServer.isPublic().then(function (data) {
            console.log('s是否为公示阶段')
            console.log(data)
            if(data.status){
                // $scope.vm.isPublic = data.data;
            }else {
                tools.alertError(data.message);
            }
        });
        //获取公示列表
        grantsCommonServer.publicList().then(function (data) {
            console.log('公示列表数据')
            console.log(data)
            if(data.status){
                $scope.vm.list = data.data.grantsPublicity;
                $scope.vm.publicList = data.data.resultList;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset: $scope.vm.publicList}
                );
            }else {
                tools.alertError(data.message);
            }
        });
        //查看异议结果
        $scope.vm.doSeeAs = function(){
            grantsStudentServer.seeAs().then(function (data) {
                console.log(data);
                $scope.vm.objRes = data.data[0];
                $scope.vm.showDetail = true;
                $scope.vm.putqsShow = false;
                $scope.vm.motaititle = '查看处理结果';
                console.log($scope.vm.objRes)
            })
        };
        //选择学生
        $scope.checked =[];
        $scope.selectOne = function () {
            angular.forEach($scope.vm.publicList , function (i) {
                var index = $scope.checked.indexOf(i.sn);   //对象中的value
                if(i.checked && index === -1) {
                    $scope.checked.push(i.sn);
                } else if (!i.checked && index !== -1){
                    $scope.checked.splice(index, 1);
                };
            });
            console.log($scope.checked);
        };
        //提出异议
        $scope.vm.putQs = function () {
            $scope.vm.showDetail = true;
            $scope.vm.putqsShow = true;
            $scope.vm.motaititle = '提出异议';
            $scope.vm.putQsUp = function () {
                if($scope.checked.length<1){
                    tools.alertError('请选择提出异议的学生')
                }else if(!$scope.vm.objContent){
                    tools.alertError('异议内容不能为空')
                }else if($scope.checked.length>0&&$scope.vm.objContent){
                    var da = {
                        content:$scope.vm.objContent,
                        targetSns : $scope.checked
                    };
                    grantsStudentServer.comObj(da).then(function (data) {
                        console.log(data);
                        if(data.status){
                            tools.alertSuccess('提出异议成功');
                            $scope.vm.showDetail = false;
                        }else {
                            tools.alertError(data.message);
                        }
                    });
                }
            };
        };
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