/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.loanSc').controller('loanScCtrl',loanScCtrl);

    loanScCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'NgTableParams'
    ];

    function loanScCtrl($scope, $rootScope, tools, ROOT, grantsCommonServer ,NgTableParams) {
        /**
         * 获取列表
         */
        $scope.innit = function () {
            $scope.vm ={};
            grantsCommonServer.loanList().then(function (data) {
                $scope.vm.loanList = data.data;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset:  $scope.vm.loanList }
                );
            });
        };
        $scope.innit();
        /**
         * 搜索按钮
         */
        $scope.vm.search = function () {
            $scope.vm.show = !$scope.vm.show;
        }
    }
})();