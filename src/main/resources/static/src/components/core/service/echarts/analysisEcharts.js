/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/11/24
 * Time: 11:12
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 大数据分析
     */
    angular.module('app.core').factory('analysisEcharts', ['chinaMap', 'bar','pie',
        function (chinaMap, bar, pie) {
            var _option = {
                origin: function () {
                    //获取基础配置项
                    var _baseOption = chinaMap.getOption();
                    //需要修改配置在此处进行
                    _baseOption.series[0].left = '5%';
                    _baseOption.visualMap.show = false;
                    return _baseOption;
                },
                consumption: function () {
                    //获取基础配置项
                    var _baseOption = bar.getOption('元');
                    //需要修改配置在此处进行
                    return _baseOption;
                },
                distribution: function () {
                    //获取基础配置项
                    var _baseOption = pie.getOption('%');
                    //需要修改配置在此处进行
                    return _baseOption;
                },
                analysis: function () {
                    //获取基础配置项
                    var _baseOption = pie.getOption('%');
                    //需要修改配置在此处进行
                    return _baseOption;
                }
            };
            return {
                origin: _option.origin(),
                consumption: _option.consumption(),
                distribution: _option.distribution(),
                analysis: _option.analysis()
            };
        }
    ]);
})();
