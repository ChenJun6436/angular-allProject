/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('diffTimeSetsController', diffTimeSetsController);

    diffTimeSetsController.$inject = [
        '$scope',
        '$state',
        'particularlyDifficultServer',
        'commonsServer',
        'tools'];

    function diffTimeSetsController($scope, $state, particularlyDifficultServer, commonsServer, tools) {
        $scope.vm = {
            submit: false,
            gradeList: [],
            isStart: true,
        };

        /**
         * 获取时间信息
         */
        $scope.getTime = function () {
            commonsServer.getCommonsServerTime().then(function (data) {
                if(data.status) {
                    $scope.vm.now = data.data;
                    particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                        if (data.status) {
                            $scope.vm.processTimeList = data.data || {};

                            //学生申请
                            $scope.vm.applyStartOptions = {
                                maxDate: new Date($scope.vm.processTimeList.endTime)
                            };
                            $scope.vm.applyEndOptions = {
                                minDate: $scope.vm.processTimeList.startTime>$scope.vm.now ? new Date($scope.vm.processTimeList.startTime): new Date($scope.vm.now)
                            };
                            $scope.$watch('vm.processTimeList.endTime', function (to) {
                                $scope.vm.applyStartOptions.maxDate = new Date(to);
                                $scope.vm.processTimeList.endTime = new Date(to).getTime()
                            });
                            $scope.$watch('vm.processTimeList.startTime', function (to) {
                                $scope.vm.applyEndOptions.minDate = new Date(to).getTime()>$scope.vm.now ? new Date(to): new Date($scope.vm.now);
                                $scope.vm.processTimeList.startTime = new Date(to).getTime()
                            });
                        }
                    });
                }
            })

        };
        /**
         * 根据本地存储初始化，判断流程是否开启
         */
        $scope.init = function () {
            particularlyDifficultServer.getAllowanceAtApplyTime().then(function (data) {
               if(data.data){
                    $scope.vm.isStart = true;
                   $scope.getTime();
               }else {
                   $scope.vm.isStart = false;
                   $scope.getTime();
                   $scope.getGradeList()
               }

            });
        };
        $scope.init();

        /**
         * 更新时间
         */
        $scope.updateTime = function () {
            $scope.vm.submit = true;
            if ($scope.vm.processForm.$valid) {
                $scope.vm.processTimeList.yearId = $scope.vm.gradeChoosed.yearId
                $scope.vm.processTimeList.year = $scope.vm.gradeChoosed.year
                particularlyDifficultServer.postAllowanceSaveConfig($scope.vm.processTimeList).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('保存成功');
                        $scope.init();
                    }
                });
            } else {
                tools.alertError('所有时间都需设置并且流程不能为空');
            }
        };
        $scope.getGradeList = function () {
            commonsServer.getCommonsSchoolYearAll().then(function (data) {
                if(data.status) {
                    $scope.vm.gradeList = angular.copy(data.data.map(function(value){
                        return{
                            year: value.name,
                            yearId: value.id
                        };
                    }));
                    commonsServer.getCommonsSchoolYearCurrent().then(function (data) {
                        if(data.status) {
                            $scope.vm.gradeChoosed =$scope.vm.gradeList.filter(function (item) {

                                return item.yearId == data.data.id
                            })[0];
                        }
                    })
                }
            })

        }

    }
})();
