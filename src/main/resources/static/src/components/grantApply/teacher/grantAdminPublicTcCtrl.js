/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminTc').controller('grantApplyPublicTcCtrl',grantApplyPublicTcCtrl);
    grantApplyPublicTcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'NgTableParams'
    ];

    function grantApplyPublicTcCtrl($scope, tools, ROOT, grantsCommonServer, NgTableParams) {
        $scope.vm = {
            show:false
        };
        //获取公示列表
        grantsCommonServer.publicList().then(function (data) {
            console.log(data)
            if(data.status){
                $scope.vm.publicList = data.data.resultList;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset: $scope.vm.publicList}
                );
            }else {
                tools.alertError(data.message)
            }

        });
        $scope.vm.showSearch = function () {
            $scope.vm.show = !$scope.vm.show;
        }
    }
})();