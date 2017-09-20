/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('analysisController', ['$scope', '$rootScope', 'analysisEcharts', '$state', 'schoolServer', 'tools', 'THEME', 'loading'
        , function ($scope, $rootScope, analysisEcharts, $state, schoolServer, tools, THEME, loading) {
            $scope.vm = {
                moneyList: []
            };
            var origin = echarts.init(document.getElementById('origin'), THEME);
            var consumption = echarts.init(document.getElementById('consumption'), THEME);
            var distribution = echarts.init(document.getElementById('distribution'), THEME);
            var analysis = echarts.init(document.getElementById('analysis'), THEME);
            var originOption = analysisEcharts.origin;
            var consumptionOption = analysisEcharts.consumption;
            var distributionOption = analysisEcharts.distribution;
            var analysisOption = analysisEcharts.analysis;
            origin.showLoading(loading);
            consumption.showLoading(loading);
            distribution.showLoading(loading);
            analysis.showLoading(loading);
            schoolServer.getOrigin().then(function (data) {
                if (data.status) {
                    originOption.series[0].data = data.data.map(function (value) {
                        return {name: value.name, value: value.num};
                    });
                    originOption.visualMap.max = 100;
                    if (data.data.length > 0) {
                        originOption.visualMap.max = tools.max(data.data.map(function (value) {
                            return value.num;
                        }));
                    }
                    origin.clear();
                    origin.setOption(originOption);
                    origin.hideLoading();
                }
            });
            schoolServer.getConsum().then(function (data) {
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
            schoolServer.getDistribution().then(function (data) {
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
            schoolServer.getAnalysis().then(function (data) {
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
            schoolServer.getMoney().then(function (data) {
                if (data.status) {
                    $scope.vm.moneyList = data.data;
                }
            });
            window.onresize = function () {
                origin.resize();
                consumption.resize();
                distribution.resize();
                analysis.resize();
            };
        }
    ]);
})();