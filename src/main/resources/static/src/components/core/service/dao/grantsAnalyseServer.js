/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/18
 * Time: 20:38
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('grantsAnalyseServer', grantsAnalyseServer);

    grantsAnalyseServer.$inject = ['httpServer'];

    function grantsAnalyseServer(httpServer) {
        var myServices = {};
        //受助群体概况,贫困学生特征分析
        myServices.grantsAndPoverty = function (data) {
            return httpServer.get('/grantsAnalyse/grantsAndPoverty', data);
        };
        //生源地分布，地图数据以及中东西部分布情况
        myServices.originOfStudentDistribute = function (data) {
            return httpServer.get('/grantsAnalyse/originOfStudentDistribute', data);
        };
        return myServices;
    }
})();