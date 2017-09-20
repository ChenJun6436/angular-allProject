/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.scholarSc').controller('scholarClassManerScCtrl',scholarClassManerScCtrl);
    scholarClassManerScCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'scholarSchoolServer',
        '$stateParams'
    ];

    function scholarClassManerScCtrl($scope, $rootScope, tools, ROOT, scholarSchoolServer,$stateParams) {
        $scope.vm = {
            NewSchoolYear:{},
            grantschecked:[],

        };
        // console.log($stateParams)
        function initHtml() {
            // $scope.gId = $stateParams.grantsId;
            /**
             * 获取励志学金对应的班级列表
             * */
            scholarSchoolServer.scholarClassList().then(function (data) {
                console.log('打印学院列表数据')
                console.log(data);
                $scope.vm.classData = data.data;
                $scope.vm.checked = [];
                console.log($scope.vm.classData.gradeCongifs);
                // $scope.startTime = data.data.startDate;
                // $scope.endTime = data.data.endDate;
            });
            // /**
            //  * 获取学年
            //  * */
            // scholarCollegeServer.scholarSchoolYear().then(function (data) {
            //     console.log('据')
            //     console.log(data);
            //     if(!data.status){
            //         tools.alertError('学年获取失败');
            //     }
            //     $scope.vm.schoolYear = data.data;
            // });
        };
        initHtml();
        // /**
        //  * 根据所选的学年获取奖学金
        //  * */
        // $scope.vm.updateGrants = function () {
        //     var da = $scope.vm.NewSchoolYear.name;
        //     // scholarCollegeServer.scholarGrantsList(da+'').then(function (data) {
        //     //     console.log(data)
        //     //     if(!data.status){
        //     //         tools.alertError('操作失败请稍后再试');
        //     //     }
        //     //     $scope.vm.grants = data.data;
        //     // });
        //     $scope.vm.grants = [{grantsName:'111'},{grantsName:'222'},{grantsName:'333'}];
        // };
        //选中年级
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.classData.gradeCongifs, function (i) {
                var index = $scope.vm.checked.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
            console.log($scope.vm.checked)
        };
        // //选中奖学金
        // $scope.vm.checkGrants = function () {
        //     angular.forEach($scope.vm.grants, function (i) {
        //         var index = $scope.vm.grantschecked.indexOf(i.grantsName);
        //         if(i.grantschecked && index === -1) {
        //             $scope.vm.grantschecked.push(i.grantsName);
        //         } else if (!i.grantschecked && index !== -1){
        //             $scope.vm.grantschecked.splice(index, 1);
        //         };
        //     });
        // };
        /**
         *保存提交学院配置信息
         * */
        $scope.vm.putClassManner = function () {
            // angular.forEach($scope.vm.ClaData.configs, function (i) {
            //     delete i.checked;
            //     delete i.$$hashKey;
            // });
            // $scope.vm.ClassData.grantsLeavel = $scope.vm.grantschecked.join(',');
            var postData = $scope.vm.classData;
            console.log(postData)
            scholarSchoolServer.scholarClassListPost(postData).then(function (data) {
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