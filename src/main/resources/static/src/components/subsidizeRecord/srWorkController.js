/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').controller('srWorkController', srWorkController);

    srWorkController.$inject = [
        '$scope',
        '$rootScope',
        'analysisEcharts',
        'grantsAnalyseServer',
        'grantsCommonServer',
        'tools',
        'THEME',
        'loading'];

    function srWorkController($scope, $rootScope, analysisEcharts, grantsAnalyseServer, grantsCommonServer, tools, THEME, loading) {
        /*$scope.vm = {
            moneyList: []
        };
        var origin = echarts.init(document.getElementById('origin'), THEME);
        var consumption = echarts.init(document.getElementById('consumption'), THEME);
        var distribution = echarts.init(document.getElementById('distribution'), THEME);
        var originOption = analysisEcharts.origin;
        var consumptionOption = analysisEcharts.consumption;
        var distributionOption = analysisEcharts.distribution;
        origin.showLoading(loading);
        consumption.showLoading(loading);
        distribution.showLoading(loading);

        grantsCommonServer.listSchoolYear().then(function (data) {
            if (data.status) {
                $scope.vm.schoolList = data.data.map(function (value) {
                    return value.startYear + '-' + value.endYear + '学年';
                });
                $scope.vm.choosedSchool = $scope.vm.schoolList[0];
                $scope.init();
            }
        });

        $scope.vm.changeSchool = function () {
            $scope.init();
        };

        $scope.init = function () {
            grantsAnalyseServer.grantsAndPoverty([$scope.vm.choosedSchool.substring(0, 4), $scope.vm.choosedSchool.substring(5, 9)]).then(function (data) {
                if (data.status) {
                    $scope.vm.grantsAndPoverty = data.data;
                }
            });
            grantsAnalyseServer.originOfStudentDistribute([$scope.vm.choosedSchool.substring(0, 4), $scope.vm.choosedSchool.substring(5, 9)]).then(function (data) {
                if (data.status) {
                    $scope.vm.areaDistributeData = data.data.areaDistributeData;
                    originOption.series[0].data = data.data.chinaMapData;
                    origin.clear();
                    origin.setOption(originOption);
                    origin.hideLoading();
                }
            });
            grantsAnalyseServer.getConsum().then(function (data) {
                if (data.status) {
                    consumptionOption.xAxis.data = data.data.xAxis;
                    consumptionOption.legend.data = ['贫困学生每月消费', '学校平均每月消费'];
                    consumptionOption.series = [
                        {
                            name: '贫困学生每月消费',
                            type: 'bar',
                            barMaxWidth: 50,
                            data: data.data.student
                        },
                        {
                            name: '学校平均每月消费',
                            type: 'bar',
                            barMaxWidth: 50,
                            data: data.data.school
                        }
                    ];
                    consumption.clear();
                    consumption.setOption(consumptionOption);
                    consumption.hideLoading();
                }
            });
            grantsAnalyseServer.getDistribution().then(function (data) {
                if (data.status) {
                    distributionOption.legend.data = ['食堂', '超市', '交通', '打印', '其他'];
                    distributionOption.label = {
                        normal: {
                            formatter: '{b} {d}%',
                            position: 'insideTopRight'
                        }
                    };
                    distributionOption.series = [
                        {
                            name: '消费分布',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            data: data.data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ];
                    distribution.clear();
                    distribution.setOption(distributionOption);
                    distribution.hideLoading();
                }
            });
            grantsAnalyseServer.getAnalysis().then(function (data) {
                if (data.status) {
                    $scope.vm.analysisMoney = data.data.money;
                    var getData = function () {
                        return [{
                            value: data.data.percent
                        }, {
                            value: 1 - data.data.percent,
                            itemStyle: {
                                normal: {
                                    color: '#eaecef'
                                }
                            }
                        }];
                    };
                    analysisOption.title = {
                        text: (data.data.percent * 100) + '%',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontSize: 26
                        }
                    };
                    analysisOption.tooltip = {
                        show: false
                    };
                    analysisOption.series = [{
                        name: '贫困学生参与勤工助学比例',
                        type: 'pie',
                        radius: ['60%', '70%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        data: getData()
                    }];
                    analysis.clear();
                    analysis.setOption(analysisOption);
                    analysis.hideLoading();
                }
            });
            grantsAnalyseServer.getMoney().then(function (data) {
                if (data.status) {
                    $scope.vm.moneyList = data.data;
                }
            });
        };

        window.onresize = function () {
            origin.resize();
            consumption.resize();
            distribution.resize();
            analysis.resize();
        };*/
    }
})();