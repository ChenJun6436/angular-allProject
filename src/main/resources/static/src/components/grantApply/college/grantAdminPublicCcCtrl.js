/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminCc').controller('grantAdminPublicCcCtrl',grantAdminPublicCcCtrl);
    grantAdminPublicCcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer'
    ];

    function grantAdminPublicCcCtrl($scope, tools, ROOT ,grantsCommonServer) {
        $scope.vm = {
            showOkBtn : true,
            showNoBtn : true,
            showDetail : false,
            dealList :[]
        };
        $scope.innitHtml = function(){
            //获取异议列表
            grantsCommonServer.getObjList().then(function (data) {
                console.log(data);
                if(data.status){
                    $scope.vm.objList = data.data;
                }else {
                    tools.alertError(data.message);
                }
            });
            //判断有无 未处理的异议||异议
            // angular.forEach($scope.vm.objList,function (i) {
            //     if (i.dealTime){
            //         $scope.vm.dealList.push(i);
            //     }
            // });
            // if ($scope.vm.dealList.length>0){
            //     $scope.vm.haveList = false;
            // }else {
            //     $scope.vm.haveList = true;
            // }
        };
        $scope.innitHtml();
        //处理异议
        $scope.vm.upCcPublic = function (des) {
            var des = des;
            $scope.vm.showDetail = true;
            $scope.vm.doPublicOk = function () {
                if($scope.vm.objReason){
                    var da = {
                        id :des.id,
                        response : $scope.vm.objReason
                    };
                    grantsCommonServer.postHandle(da).then(function(data){
                        console.log(data)
                        if (data.status){
                            tools.alertSuccess('异议处理成功');
                            $scope.vm.showDetail = false;
                            $scope.innitHtml();
                        }else {
                            tools.alertError(data.message);
                        }
                    });
                }else {
                    tools.alertError('异议内容不能为空');
                }
            }
        };
        //关闭模态框
        $scope.vm.doPublicNo = function () {
            $scope.vm.showDetail = false;
        };

    }
})();