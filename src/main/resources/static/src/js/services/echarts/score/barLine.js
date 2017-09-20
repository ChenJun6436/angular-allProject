/**
 * Created by xd-66 on 2016/11/24.
 */
(function () {
    'use strict';
    asApp.service('barLine', ['echartsFormatter',
        function (echartsFormatter) {
            /**
             * 柱折混合图基本配置
             * @param flag1 flag2 单位
             */
            this.getOption = function (line, bar) {
                return {
                    tooltip: {
                        trigger: 'axis',
                        confine: true,
                        formatter: function (params, ticket, callback) {
                            return echartsFormatter.formatterBarLine(params, ticket, callback, line, bar);
                        }
                    },
                    legend: {
                        data: [],
                        bottom: 0
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: 25,
                        top: 10,
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: []
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value}' + line
                            }
                        },
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value}' + bar
                            },
                            splitLine: {
                                show: false
                            }
                        }
                    ],
                    series: []

                };
            };
        }
    ]);
})();