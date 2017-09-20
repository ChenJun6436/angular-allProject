/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('timeSetsController', timeSetsController);

    timeSetsController.$inject = [
        '$scope',
        '$state',
        'povertySchoolServer',
        'commonsServer',
        'tools'];

    function timeSetsController($scope, $state, povertySchoolServer, commonsServer, tools) {
        $scope.vm = {
            submit: false,
            gradeList: [],
            newSetting: false
        };

        $scope.isSetting = true;

        /**
         * 开始流程
         */
        $scope.isOrNotStart = function () {
            $('#isOrNotStart').modal('show');
            $scope.startNew = function () {

                povertySchoolServer.startProcess().then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('流程开启成功');
                        $scope.isSetting = true;
                        $scope.vm.newSetting = true;
                    }else{
                        tools.alertError('流程开启失败');
                    }
                    $('#isOrNotStart').modal('hide');

                });
            };
        };


        /**
         * 获取时间信息
         */
        $scope.getTime = function () {
            commonsServer.getCommonsServerTime().then(function (data) {
                if(data.status) {
                    $scope.vm.now = data.data;
                    povertySchoolServer.getProcessTime().then(function (data) {
                        if (data.status) {
                            $scope.vm.processTimeList = data.data || {};

                            //学生申请
                            $scope.vm.applyStartOptions = {
                                maxDate: new Date($scope.vm.processTimeList.applyEnd)
                            };
                            $scope.vm.applyEndOptions = {
                                minDate: $scope.vm.processTimeList.applyStart>$scope.vm.now ? new Date($scope.vm.processTimeList.applyStart): new Date($scope.vm.now)
                            };
                            $scope.$watch('vm.processTimeList.applyEnd', function (to) {
                                $scope.vm.applyStartOptions.maxDate = new Date(to);
                                $scope.vm.processTimeList.applyEnd = new Date(to).getTime()
                            });
                            $scope.$watch('vm.processTimeList.applyStart', function (to) {
                                $scope.vm.applyEndOptions.minDate = new Date(to).getTime()>$scope.vm.now ? new Date(to): new Date($scope.vm.now);
                                $scope.vm.processTimeList.applyStart = new Date(to).getTime() ? new Date(to).getTime() : $scope.vm.now
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
            povertySchoolServer.validateProcess().then(function (data) {
                if (data.data) {
                    $scope.isSetting = false;

                } else {
                    $scope.isSetting = true;
                }
                $scope.getTime();
                $scope.getGradeList()
            });
        };
        $scope.init();

        /**
         * 更新时间
         */
        $scope.updateTime = function () {
            $scope.vm.submit = true;
            if ($scope.vm.processForm.$valid) {
                $scope.vm.processTimeList.schoolYearId = $scope.vm.gradeChoosed.schoolYearId
                $scope.vm.processTimeList.schoolYearName = $scope.vm.gradeChoosed.schoolYearName
                povertySchoolServer.saveProcess($scope.vm.processTimeList).then(function (data) {
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
                            schoolYearName: value.name,
                            schoolYearId: value.id
                        };
                    }));
                    commonsServer.getCommonsSchoolYearCurrent().then(function (data) {
                        if(data.status) {
                            $scope.vm.gradeChoosed =$scope.vm.gradeList.filter(function (item) {
                                console.log(item.schoolYearId,data.data.id)
                                return item.schoolYearId == data.data.id
                            })[0];
                        }
                    })
                }
            })

        }

    }
})();
