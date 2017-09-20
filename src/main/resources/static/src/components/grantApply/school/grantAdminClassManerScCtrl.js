/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminSc').controller('grantAdminClassManerScCtrl',grantAdminClassManerScCtrl);
    grantAdminClassManerScCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'grantsCollegeServer',
        'grantsSchoolServer',
        '$stateParams'
    ];

    function grantAdminClassManerScCtrl($scope, $rootScope, tools, ROOT, grantsCollegeServer,grantsSchoolServer,$stateParams) {
        $scope.vm = {
            schoolList:[],
            checkeSchool:[],
        };
        function initHtml() {
            $scope.vm.gId = $stateParams.grantsId;
            /**
             * 获取助学金对应的年级列表
             * */
            grantsSchoolServer.grantsClassList($scope.vm.gId).then(function (data) {
                console.log(data);
                $scope.vm.classData = data.data;
                $scope.vm.checked = [];
            });
        };
        initHtml();
        /**
         * 保存年级班级配置
         * */
        $scope.vm.saveClassCongif = function (des) {
            angular.forEach(des.gradeConfigs,function (i) {
                delete i.$$hashKey;
                angular.forEach(i.majorConfigs,function (b) {
                    delete b.$$hashKey;
                    angular.forEach(b.classesConfigs,function (c) {
                        delete c.$$hashKey;
                    })
                })
            });
            grantsSchoolServer.grantsClassSave(des).then(function (data) {
                if(data.status){
                    tools.alertSuccess('保存成功');
                }else{
                    tools.alertError('保存失败');
                }
            })
        };



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
    }
})();