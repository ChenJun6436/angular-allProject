/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定公共服务
     */
    'use strict';
    angular.module('app.core').factory('povertyCommonServer', povertyCommonServer);

    povertyCommonServer.$inject = ['httpServer'];

    function povertyCommonServer(httpServer) {
        var myServices = {};
        //模拟登录
        myServices.login = function (data) {
            return httpServer.postHttp('/povertyCommon/login', data);
        };
        //获取学生信息
        myServices.getStudentInfo = function (data) {
            return httpServer.get('/povertyCommon/getStudentInfo', data);
        };
        //获取学生家庭情况
        myServices.getFamily = function (data) {
            return httpServer.get('/povertyCommon/listStudentFamily', data);
        };
        //获取学生获资助情况
        myServices.getSubsidy = function (data) {
            return httpServer.get('/povertyCommon/listStudentSubsidy', data);
        };
        //获取学生获奖情况
        myServices.getAward = function (data) {
            return httpServer.get('/povertyCommon/listStudentAward', data);
        };
        //获取学生处分情况
        myServices.getPunishment = function (data) {
            return httpServer.get('/povertyCommon/listStudentPunishment', data);
        };
        //获取学生困难认定附件
        myServices.getAttachments = function (data) {
            return httpServer.get('/povertyCommon/listAttachments', data);
        };


        //获取动态管理学生列表
        myServices.getDynamicStudent = function () {
            return httpServer.get('/povertyCommon/listDynamicStudent');
        };
        //修改动态管理等级
        myServices.dyModifyPovertyLevel = function (data) {
            return httpServer.postHttp('/povertyCommon/dyModifyPovertyLevel', data);
        };
        //下载动态管理列表
        myServices.downloadDyManage = function () {
            return httpServer.get('/povertyCommon/downloadDyManage');
        };
        //获取学生困难认定
        myServices.getStudentPovertyApply = function () {
            return httpServer.get('/povertyCommon/listStudentPovertyApply');
        };

        //获取是否在困难认定期间
        myServices.getIsPovertyTime = function () {
            return httpServer.get('/povertyCommon/isPovertyTime');
        };
        //获取大状态码
        myServices.getMaxStatus = function () {
            return httpServer.get('/povertyCommon/getMaxStatus');
        };
        //获取学生申请列表
        myServices.listCheckMaterialStudent = function () {
            return httpServer.get('/povertyCommon/listCheckMaterialStudent');
        };
        //获取困难认定列表
        myServices.listStudentPovertyApply = function () {
            return httpServer.get('/povertyCommon/listStudentPovertyApply');
        };
        //修改学生困难等级
        myServices.updatePovertyLevel = function (data) {
            return httpServer.postHttp('/povertyCommon/updatePovertyLevel', data);
        };
        //用户提交或者驳回流程操作调用的接口
        myServices.operateProcess = function (data) {
            return httpServer.postHttp('/povertyCommon/operateProcess', data);
        };
        //下载列表
        myServices.downloadPovertyApply = function () {
            return httpServer.get('/povertyCommon/downloadPovertyApply');
        };

        //获取公告列表
        myServices.getNoticeList = function (data) {
            return httpServer.get('/povertyCommon/getNoticeList', data);
        };
        //获取驳回原因
        myServices.getReject = function () {
            return httpServer.get('/povertyCommon/getReject');
        };
        //获取往年申请而本次未申请名单
        myServices.getLastYearApply = function () {
            return httpServer.get('/povertyCommon/lastYearApply');
        };
        //查看是否在公示时间内
        myServices.getAtOpenTime= function () {
            return httpServer.get('/povertyCommon/atOpenTime');
        };
        //获取公示的时间
        myServices.getOpenTime= function () {
            return httpServer.get('/povertyCommon/getOpenTime');
        };
        //银行卡校验
        myServices.checkBankcar= function () {
            return httpServer.get('/grantsCommon/checkoutBankCard');
        };
        return myServices;
    }
})();
