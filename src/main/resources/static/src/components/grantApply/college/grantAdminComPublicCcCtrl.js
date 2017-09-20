/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminCc').controller('grantAdminComPublicCcCtrl',grantAdminComPublicCcCtrl);
    grantAdminComPublicCcCtrl.$inject = [
        '$scope',
        '$rootScope',
        'FileUploader',
        'tools',
        'ROOT',
        'NgTableParams'
    ];

    function grantAdminComPublicCcCtrl($scope, $rootScope, FileUploader,tools, ROOT,NgTableParams) {
        $scope.vm = {
            showOkBtn : true,
            showNoBtn : true,
            showDetail : false,
            nowApList : [1,2,3,4,5,6,7,8,9,10],
            showExtb : true,
            showUnExtb : false,
            showExsearch : false,
            showUnExsearch : false
        };
        $scope.vm.grantsCollegeExamineList = [
            {name: "Moroni", xuehao: 20,xueyuan:201,age:11},
            {name: "Moroni", xuehao: 20,xueyuan:201,age:11}
        ];
        $scope.vm.tableParams = new NgTableParams(
            { count: 5 }, 
            { counts: [5, 10, 20]}, 
            { dataset: $scope.vm.grantsCollegeExamineList}
        );
        $scope.vm.showExTb = function ($event) {
            $event.stopPropagation();
            $scope.vm.showExtb = true;
            $scope.vm.showUnExtb = false;
        };
        $scope.vm.showUnExTb = function () {
            $scope.vm.showExtb = false;
            $scope.vm.showUnExtb = true;
        };
        $scope.vm.goPage = function ($index,item) {
            if(item==$index+1){
                $scope.vm.pageAcClass = "pageActive";
            }
        };
        $scope.vm.showExSearch = function () {
            $scope.vm.showExsearch = true;
        };
        $scope.vm.showUnExSearch = function () {
            $scope.vm.showUnExsearch = true;
        }
        $scope.vm.doHaveQs = function ($event) {
            $event.stopPropagation();
            $scope.vm.showDetail = true;
        };
        $scope.vm.doPublicOk = function ($event) {
            $event.stopPropagation();
            $scope.vm.showDetail = false;
        };
        $scope.vm.doPublicNo = function ($event) {
            $event.stopPropagation();
            $scope.vm.showDetail = false;
        };
    }
})();