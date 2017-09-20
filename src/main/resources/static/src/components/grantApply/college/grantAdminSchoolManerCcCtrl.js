/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminCc').controller('grantAdminSchoolManerCcCtrl',grantAdminSchoolManerCcCtrl);
    grantAdminSchoolManerCcCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'grantsCollegeServer',
        '$stateParams'
    ];

    function grantAdminSchoolManerCcCtrl($scope, $rootScope, tools, ROOT, grantsCollegeServer,$stateParams) {
        $scope.vm = {
            schoolList:[],
            checkeSchool:[],
        };
        console.log($stateParams)
        function initHtml() {
            $scope.gId = $stateParams.grantsId;
            /**
             * 获取助学金对应的学院列表
             * */
            grantsCollegeServer.grantsSchoolList($scope.gId).then(function (data) {
                console.log(data);
                $scope.vm.schoolData = data.data;
                $scope.vm.checked = [];
            });
        };
        initHtml();
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
        /**
         *保存提交学院配置信息
         * */
        $scope.vm.putSchoolManner = function () {
            angular.forEach($scope.vm.schoolData.configs, function (i) {
                delete i.checked;
                delete i.$$hashKey;
            });
            var postData = $scope.vm.schoolData;
            console.log(postData)
            grantsCollegeServer.grantsSchoolListPost(postData).then(function (data) {
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