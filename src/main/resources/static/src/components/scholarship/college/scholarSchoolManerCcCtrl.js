/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.scholarCc').controller('scholarSchoolManerCcCtrl',scholarSchoolManerCcCtrl);
    scholarSchoolManerCcCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'scholarCollegeServer',
        '$stateParams'
    ];

    function scholarSchoolManerCcCtrl($scope, $rootScope, tools, ROOT, scholarCollegeServer,$stateParams) {
        $scope.vm = {
            NewSchoolYear:{},
            grantschecked:[],

        };
        // console.log($stateParams)
        function initHtml() {
            // $scope.gId = $stateParams.grantsId;
            /**
             * 获取励志学金对应的学院列表
             * */
            scholarCollegeServer.scholarSchoolList().then(function (data) {
                console.log('打印学院列表数据')
                console.log(data);
                $scope.vm.schoolData = data.data;
                $scope.vm.checked = [];
                // $scope.startTime = data.data.startDate;
                // $scope.endTime = data.data.endDate;
            });
            /**
             * 获取学年
             * */
            scholarCollegeServer.scholarSchoolYear().then(function (data) {
                console.log('据')
                console.log(data);
                if(!data.status){
                    tools.alertError('学年获取失败');
                }
                $scope.vm.schoolYear = data.data;
            });
        };
        initHtml();
        /**
         * 根据所选的学年获取奖学金
         * */
        $scope.vm.updateGrants = function () {
            var da = $scope.vm.NewSchoolYear.name;
            // scholarCollegeServer.scholarGrantsList(da+'').then(function (data) {
            //     console.log(data)
            //     if(!data.status){
            //         tools.alertError('操作失败请稍后再试');
            //     }
            //     $scope.vm.grants = data.data;
            // });
            $scope.vm.grants = [{grantsName:'111'},{grantsName:'222'},{grantsName:'333'}];
        };
        //选中学院
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.schoolData.configs, function (i) {
                var index = $scope.vm.checked.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        //选中奖学金
        $scope.vm.checkGrants = function () {
            angular.forEach($scope.vm.grants, function (i) {
                var index = $scope.vm.grantschecked.indexOf(i.grantsName);
                if(i.grantschecked && index === -1) {
                    $scope.vm.grantschecked.push(i.grantsName);
                } else if (!i.grantschecked && index !== -1){
                    $scope.vm.grantschecked.splice(index, 1);
                };
            });
        };
        /**
         *保存提交学院配置信息
         * */
        $scope.vm.putSchoolManner = function () {
            angular.forEach($scope.vm.schoolData.configs, function (i) {
                delete i.checked;
                delete i.$$hashKey;
            });
            $scope.vm.schoolData.grantsLeavel = $scope.vm.grantschecked.join(',');
            var postData = $scope.vm.schoolData;
            console.log(postData)
            scholarCollegeServer.scholarSchoolListPost(postData).then(function (data) {
                console.log(data)
                if(data.status){
                    tools.alertSuccess('保存成功');
                }else{
                    tools.alertError('保存失败');
                }
            });

        };
    }
})();