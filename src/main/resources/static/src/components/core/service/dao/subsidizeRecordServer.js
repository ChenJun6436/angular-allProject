/**
 * Created by yanyuan on 2017/6/5.
 */
(function () {
    /**
     * 资助记录公共服务
     */
    'use strict';
    angular.module('app.core').factory('subsidizeRecordCommonServer', subsidizeRecordCommonServer);

    subsidizeRecordCommonServer.$inject = ['httpServer'];

    function subsidizeRecordCommonServer(httpServer) {
        var myServices = {};
        //根据学院和年级查询助学金记录
        myServices.getSubsidizeHistoryGrantsList = function (data) {
            return httpServer.get('/subsidizeHistory/grants/list/'+data[0]+'/'+data[1]);
        };
        //导出助学金记录
        myServices.getSubsidizeHistoryGrantsListExcel = function (data) {
            return httpServer.get('/subsidizeHistory/grants/list/excel/'+data[0]+'/'+data[1]);
        };
        //根据学院和年级查询励志奖学金记录
        myServices.getSubsidizeHistoryInspScholarshipList = function (data) {
            return httpServer.get('/subsidizeHistory/inspScholarship/list/'+data[0]+'/'+data[1]);
        };
        //导出励志奖学金记录
        myServices.getSubsidizeHistoryInspScholarshipListExcel = function (data) {
            return httpServer.get('/subsidizeHistory/inspScholarship/list/excel/'+data[0]+'/'+data[1]);
        };
        //根据学院和年级查询经济困难认定记录
        myServices.getSubsidizeHistoryPovertyList = function (data) {
            return httpServer.get('/subsidizeHistory/poverty/list/'+data[0]+'/'+data[1]);
        };
        //导出经济困难认定记录
        myServices.getSubsidizeHistoryPovertyListExcel = function (data) {
            return httpServer.get('/subsidizeHistory/poverty/list/excel/'+data[0]+'/'+data[1]);
        };
        return myServices;
    }
})();