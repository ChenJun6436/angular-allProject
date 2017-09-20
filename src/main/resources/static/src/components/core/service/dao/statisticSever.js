/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/9
 * Time: 10:42
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 数据统计模块服务
     */
    'use strict';
    angular.module('app.core').factory('statisticServer', statisticServer);

    statisticServer.$inject = ['httpServer'];

    function statisticServer(httpServer) {
        var myServices = {};
        //五类生统计
        myServices.getFiveKind = function (data) {
            return httpServer.postHttp('/dataAmount/fiveKind/number', data);
        };
        //省内排序
        myServices.getInProvince = function (data) {
            return httpServer.postHttp('/dataAmount/inProvince/desc', data);
        };
        //查询省内省外经济困难人数
        myServices.getNumber = function (data) {
            return httpServer.postHttp('/dataAmount/isInTheProvince/number', data);
        };
        //省外排序
        myServices.getOutProvince = function (data) {
            return httpServer.postHttp('/dataAmount/notInProvince/desc', data);
        };
        //根据资助类型分组统计金额及数量
        myServices.getNumberAndMoney = function (data) {
            return httpServer.postHttp('/dataAmount/numberAndMoney', data);
        };
        //查询经济困难认定总人数
        myServices.getPoverty = function (data) {
            return httpServer.postHttp('/dataAmount/poverty/totalNumber', data);
        };
        //查询各等级经济困难人数
        myServices.getPovertyLevel = function (data) {
            return httpServer.postHttp('/dataAmount/povertyLevel/number', data);
        };
        return myServices;
    }
})();
