/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/7
 * Time: 15:02
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.statistic').controller('economicController', economicController);

    economicController.$inject = [
        '$scope',
        '$timeout',
        'THEME',
        'resize',
        'commonsServer',
        'statisticServer'
    ];

    function economicController($scope, $timeout, THEME, resize, commonsServer, statisticServer) {
        /*$scope.year = locals.getObject('year', '');
        console.log('1', $scope.year);*/
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
            statisticServer.getPoverty(vm._postData).then(function (data) {
                if(data.status) {
                    $scope.povertyNumber = data.data;
                }
            });
            $timeout(function () {
                vm.rankEcharts = echarts.init(document.getElementById('rank'), THEME);
                vm.rankEcharts.showLoading();
                var rankData = {
                    name: []
                };
                statisticServer.getPovertyLevel(vm._postData).then(function (data) {
                    if(data.status) {
                        angular.forEach(data.data, function(value){
                            rankData.name.push(value.povertyLevel);
                        });
                        vm.initRank = function () {
                            vm.rankOption = {
                                tooltip : {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                                },
                                legend: {
                                    orient: 'vertical',
                                    left: 'left',
                                    data: rankData.name
                                },
                                series : [
                                    {
                                        name: '访问来源',
                                        type: 'pie',
                                        radius : '80%',
                                        center: ['50%', '50%'],
                                        data: [],
                                        itemStyle: {
                                            emphasis: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                            }
                                        }
                                    }
                                ]
                            };
                            angular.forEach(data.data, function(value){
                                vm.rankOption.series[0].data.push({value: value.number, name: value.povertyLevel});
                            })
                            resize.resize(vm.rankEcharts.resize);
                            vm.rankEcharts.setOption(vm.rankOption);
                            vm.rankEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initRank();
                        }, 1000);
                    }
                });
            });

            $timeout(function () {
                vm.studentEcharts = echarts.init(document.getElementById('student'), THEME);
                vm.studentEcharts.showLoading();
                var fiveData = {
                    xData: [],
                    yData: []
                };
                statisticServer.getFiveKind(vm._postData).then(function (data) {
                    if(data.status) {
                        angular.forEach(data.data, function(value){
                            fiveData.xData.push(value.kind);
                            fiveData.yData.push(value.number);
                        });
                        vm.initStudent = function () {
                            vm.studentOption = {
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
                                        data : fiveData.xData,
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
                                        name:'经济困难等级人数',
                                        type:'bar',
                                        barWidth: '40%',
                                        data: fiveData.yData
                                    }
                                ]
                            };
                            resize.resize(vm.studentEcharts.resize);
                            vm.studentEcharts.setOption(vm.studentOption);
                            vm.studentEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initStudent();
                        }, 1000);
                    }
                });
            });

            $timeout(function () {
                vm.originEcharts = echarts.init(document.getElementById('origin'), THEME);
                vm.originEcharts.showLoading();
                statisticServer.getNumber(vm._postData).then(function (data) {
                    if(data.status) {
                        vm.initOrigin = function () {
                            vm.originOption = {
                                tooltip : {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                                },
                                legend: {
                                    orient: 'vertical',
                                    left: 'left',
                                    data: ['省内','省外']
                                },
                                series : [
                                    {
                                        name: '生源地',
                                        type: 'pie',
                                        radius : '80%',
                                        center: ['50%', '50%'],
                                        data:[
                                            {value:data.data.inTheProvince, name:'省内'},
                                            {value:data.data.notInTheProvince, name:'省外'}
                                        ],
                                        itemStyle: {
                                            emphasis: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                            }
                                        }
                                    }
                                ]
                            };
                            resize.resize(vm.originEcharts.resize);
                            vm.originEcharts.setOption(vm.originOption);
                            vm.originEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initOrigin();
                        }, 1000);
                    }
                });
            });

            $timeout(function () {
                vm.provinceEcharts = echarts.init(document.getElementById('province'), THEME);
                vm.provinceEcharts.showLoading();
                var provinceData = {
                    xData: [],
                    yData: []
                };
                statisticServer.getOutProvince(vm._postData).then(function (data) {
                    if(data.status) {
                        angular.forEach(data.data, function(value){
                            provinceData.xData.push(value.percentage);
                            provinceData.yData.push(value.name);
                        });
                        vm.initProvince = function () {
                            vm.provinceOption = {
                                tooltip : {
                                    trigger: 'axis'
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '5%',
                                    containLabel: true
                                },
                                yAxis: [
                                    {
                                        type : 'category',
                                        data : provinceData.yData,
                                        splitLine:{
                                            show:false
                                        },
                                        splitArea:{
                                            show:true,
                                        },
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                xAxis : [
                                    {
                                        type : 'value',
                                        splitLine:{
                                            show:false
                                        },
                                        splitArea:{
                                            show:false,
                                        }
                                    }
                                ],
                                series : [
                                    {
                                        name:'排名',
                                        type:'bar',
                                        label:{
                                            normal:{
                                                show:true,
                                                position:'right'
                                            }
                                        },
                                        itemStyle:{
                                            normal:{
                                                color: function(params) {
                                                    var colorList = ['#29D582','#24CCF6','#00AAFF','FFC62F','#FF587B'];
                                                    return colorList[params.dataIndex]
                                                }
                                            }
                                        },
                                        data:provinceData.xData
                                    }
                                ]
                            };
                            resize.resize(vm.provinceEcharts.resize);
                            vm.provinceEcharts.setOption(vm.provinceOption);
                            vm.provinceEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initProvince();
                        }, 1000);
                    }
                });
            });
            $timeout(function () {
                vm.cityEcharts = echarts.init(document.getElementById('city'), THEME);
                vm.cityEcharts.showLoading();
                var cityData = {
                    xData: [],
                    yData: []
                };
                statisticServer.getInProvince(vm._postData).then(function (data) {
                    if(data.status) {
                        angular.forEach(data.data, function(value){
                            cityData.xData.push(value.percentage);
                            cityData.yData.push(value.name);
                        });
                        vm.initCity = function () {
                            vm.cityOption = {
                                tooltip : {
                                    trigger: 'axis'
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '5%',
                                    containLabel: true
                                },
                                yAxis: [
                                    {
                                        type : 'category',
                                        data : cityData.yData,
                                        splitLine:{
                                            show:false
                                        },
                                        splitArea:{
                                            show:true,
                                        },
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                xAxis : [
                                    {
                                        type : 'value',
                                        splitLine:{
                                            show:false
                                        },
                                        splitArea:{
                                            show:false,
                                        }
                                    }
                                ],
                                series : [
                                    {
                                        name:'排名',
                                        type:'bar',
                                        label:{
                                            normal:{
                                                show:true,
                                                position:'right'
                                            }
                                        },
                                        itemStyle:{
                                            normal:{
                                                color: function(params) {
                                                    var colorList = ['#29D582','#24CCF6','#00AAFF','FFC62F','#FF587B'];
                                                    return colorList[params.dataIndex]
                                                }
                                            }
                                        },
                                        data:cityData.xData
                                    }
                                ]
                            };
                            resize.resize(vm.cityEcharts.resize);
                            vm.cityEcharts.setOption(vm.cityOption);
                            vm.cityEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initCity();
                        }, 1000);
                    }
                });
            });
        };
        $scope.init();
    }
})();