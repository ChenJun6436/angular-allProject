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
    angular.module('app.core').factory('studentInfoEcharts', ['barLine',
        function (barLine) {
            var _option = {
                consumption: function () {
                    //获取基础配置项
                    var _baseOption = barLine.getOption('元', '次');
                    //需要修改配置在此处进行
                    return _baseOption;
                }
            };
            return {
                consumption: _option.consumption()
            };
        }
    ]);
})();
