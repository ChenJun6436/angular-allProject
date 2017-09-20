/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/7
 * Time: 15:02
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.statistic').controller('grantInAidController', grantInAidController);

    grantInAidController.$inject = [
        '$scope',
        '$timeout',
        'THEME',
        'resize',
        'locals',
        'commonsServer',
        'statisticServer'
    ];

    function grantInAidController($scope, $timeout, THEME, resize, locals,commonsServer, statisticServer) {
        /*$scope.year = locals.getObject('year', '');
        console.log('2', $scope.year);*/
        $scope.vm =  {};
        commonsServer.getCommonsSchoolYearAll().then(function (data) {
            if(data.status) {
                $scope.startYears = angular.copy(data.data);
                $scope.endYears = angular.copy(data.data);
                $scope.startYear = $scope.startYears[0];
                $scope.endYear = $scope.endYears[0];
            }
        });
        $scope.changeYear = function() {
            $scope.init();
        }
        commonsServer.getCommonsCollege().then(function (data) {
            if(data.status) {
                $scope.vm.colleges = data.data;
                if($scope.vm.colleges.length === 1) {
                    $scope.vm.college = $scope.vm.colleges[0];
                }
            }
            $scope.change();
        });

        $scope.change = function() {
            if($scope.vm.college) {
                commonsServer.getCommonsMajor($scope.vm.college.id).then(function (data) {
                    if(data.status) {
                        $scope.vm.majors = data.data;
                    }
                    $scope.changeGrade();
                    $scope.init();
                });
            } else{
                $scope.vm.majors={};
            }
        };
        $scope.changeGrade = function() {
            if($scope.vm.major) {
                commonsServer.getCommonsGrade($scope.vm.major.id).then(function (data) {
                    if (data.status) {
                        $scope.vm.grades = data.data;
                    }
                    $scope.changeClass();
                    $scope.init();
                });
            }else{
                $scope.vm.grades = {};
            }
        };
        $scope.changeClass = function() {
            if($scope.vm.major && $scope.vm.grade) {
                commonsServer.getCommonsClass([$scope.vm.major.id, $scope.vm.grade.id]).then(function (data) {
                    if (data.status) {
                        $scope.vm.classes = data.data;
                        $scope.init();
                    }
                });
            }else{
                $scope.vm.classes = {};
            }
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            var vm = this;
            if($scope.startYear && $scope.endYear) {
                vm._postData = {
                    endSchoolYear: $scope.endYear.name,
                    startSchoolYear: $scope.startYear.name
                };
            }else {
                vm._postData = {
                    endSchoolYear: '2011-2012',
                    startSchoolYear: '2011-2012'
                };
            }
            if($scope.vm.college) {
                vm._postData.collegeName = $scope.vm.college.name;
            } else{
                vm._postData.collegeName = '-1';
            }

            if($scope.vm.major) {
                vm._postData.majorName = $scope.vm.major.name;
            } else{
                vm._postData.majorName = '-1';
            }

            if($scope.vm.grade) {
                vm._postData.gradeName = $scope.vm.grade.name;
            } else{
                vm._postData.gradeName = '-1';
            }
            if($scope.vm.class) {
                vm._postData.className = $scope.vm.class.name;
            } else{
                vm._postData.className = '-1';
            }
            statisticServer.getNumberAndMoney(vm._postData).then(function (data) {
                var subData = {
                    name:[],
                    number:[],
                    money:[]
                };
                if(data.status) {
                    var length = data.data.length;
                    $scope.helpData = data.data[length-1];
                    for(var i=0; i<length-1; i++){
                        subData.name.push(data.data[i].subsidizeName);
                        subData.number.push(data.data[i].number);
                        subData.money.push(data.data[i].money);
                    }
                    $timeout(function () {
                        vm.moneyEcharts = echarts.init(document.getElementById('money'), THEME);
                        vm.moneyEcharts.showLoading();
                        vm.initMoney = function () {
                            vm.moneyOption = {
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        data : subData.name,
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value'
                                    }
                                ],
                                series : [
                                    {
                                        name:'直接访问',
                                        type:'bar',
                                        barWidth: '40%',
                                        data:subData.money
                                    }
                                ]
                            };
                            resize.resize(vm.moneyEcharts.resize);
                            vm.moneyEcharts.setOption(vm.moneyOption);
                            vm.moneyEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initMoney();
                        }, 1000);
                    });

                    $timeout(function () {
                        vm.countEcharts = echarts.init(document.getElementById('count'), THEME);
                        vm.countEcharts.showLoading();
                        vm.initCount = function () {
                            vm.countOption = {
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        data : subData.name,
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value'
                                    }
                                ],
                                series : [
                                    {
                                        name:'直接访问',
                                        type:'bar',
                                        barWidth: '40%',
                                        data:subData.number
                                    }
                                ]
                            };
                            resize.resize(vm.countEcharts.resize);
                            vm.countEcharts.setOption(vm.countOption);
                            vm.countEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initCount();
                        }, 1000);
                    });
                }
            });
        };
        $scope.init();
    }
})();