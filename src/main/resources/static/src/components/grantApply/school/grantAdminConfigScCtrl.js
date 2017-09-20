/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminSc').controller('grantAdminConfigScCtrl',grantAdminConfigScCtrl);
    grantAdminConfigScCtrl.$inject = [
        '$scope',
        'grantsSchoolServer',
        'NgTableParams',
        'grantsCommonServer',
        'grantsCollegeServer',
        'tools',
        '$state'
    ];

    function grantAdminConfigScCtrl($scope, grantsSchoolServer, NgTableParams, grantsCommonServer,grantsCollegeServer, tools,$state) {
        $scope.vm = {
            tableFlag: 0
        };
        /**
         * 初始化助学金列表信息
         */
        $scope.init = function () {
            grantsSchoolServer.grantsList().then(function (data) {
                console.log(data)
                if (data.status) {
                    $scope.vm.grantsList = data.data;
                    angular.forEach(data.data, function (value, key) {
                        value.index = key + 1;
                    });
                    $scope.vm.tableParams = new NgTableParams({
                        count: 10
                    }, {
                        dataset: $scope.vm.grantsList
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
            /**
             *获取学年
             */
            grantsCollegeServer.grantsSchoolYear().then(function (data) {
                $scope.vm.schoolYearList = data.data;
            })
        };
        $scope.init();
        /**
        * 点击开始分配名额
        * */
        $scope.vm.mannerClassMount = function (des) {
            $state.go('main.grantAdminClassManerSc',{grantsId:des.id},{reload:true})
        }
        /**
        * 新申请名额
        * */
        $scope.vm.modalShow=function (des) {
            $('#motai').modal('show');
            $scope.vm.title = '申请名额';
            var gaId = des.id;
            $scope.vm.ComNewApply = function () {
                var amount = $scope.vm.NewApplyAmount;
                console.log(gaId+"========"+amount);
                grantsSchoolServer.grantsClassApply(gaId+"/"+amount).then(function (data) {
                    if(data.status){
                        $('#motai').modal('hide');
                        tools.alertSuccess('申请成功');
                    }else {
                        tools.alertError('申请失败');
                    }

                })

            }
        }

    }
})();