/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定学校服务
     */
    'use strict';
    angular.module('app.core').factory('povertySchoolServer', povertySchoolServer);

    povertySchoolServer.$inject = ['httpServer'];

    function povertySchoolServer(httpServer) {
        var myServices = {};

        //判断总流程是否开启
        myServices.validateProcess = function () {
            return httpServer.get('/povertySchool/validateProcess');
        };
        //开始流程
        myServices.startProcess = function () {
            return httpServer.get('/povertySchool/startProcess');
        };
        //获取时间设置
        myServices.getProcessTime = function () {
            return httpServer.get('/povertySchool/getProcessTime');
        };
        //设置时间
        myServices.saveProcess = function (data) {
            return httpServer.postHttp('/povertySchool/saveProcess', data);
        };
        //发布公告
        myServices.saveNotice = function (data) {
            return httpServer.postHttp('/povertySchool/saveNotice', data);
        };
        //获取学院列表
        myServices.listCollegeUsers = function () {
            return httpServer.get('/povertySchool/listCollegeUsers');
        };
        //学校发布公告
        myServices.saveNotice = function (data) {
            return httpServer.postHttp('/povertySchool/saveNotice', data);
        };
        //配置公示时间
        myServices.setOpenTime = function (data) {
            return httpServer.postHttp('/povertyCommon/setOpenTime', data);
        };
        //学校删除公告
        myServices.removeNotice = function (data) {
            return httpServer.delete('/povertySchool/removeNotice', data);
        };
        //获取公告没发布前的附件
        myServices.listNoticeFiles = function (data) {
            return httpServer.get('/povertySchool/listNoticeFiles', data);
        };
        //获取操作记录
        myServices.viewOperateLog = function (data) {
            return httpServer.get('/povertySchool/viewOperateLog', data);
        };
//查看公示异议（学校）
        myServices.viewOpenDissentSchool = function (data) {
            return httpServer.get('/povertyCollege/viewOpenDissentSchool', data);
        };
        return myServices;
    }
})();
