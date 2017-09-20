/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin   chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金学校服务
     */
    'use strict';
    angular.module('app.core').factory('grantsSchoolServer', grantsSchoolServer);

    grantsSchoolServer.$inject = ['httpServer'];

    function grantsSchoolServer(httpServer) {
        var myServices = {};
        //获取学校用户待处理列表
        myServices.checkList = function () {
            return httpServer.get('/grantsSchool/checkList');
        };
        //添加批次是获取助学金配置
        myServices.grantsBatchConfig = function () {
            return httpServer.get('/grantsSchool/grantsBatchConfig');
        };
        //获取助学金批次配置详情
        myServices.grantsBatchDetail = function (data) {
            return httpServer.get('/grantsSchool/grantsBatchDetail', data);
        };
        //删除助学金批次配置
        myServices.grantsBatchDelete = function (data) {
            return httpServer.delete('/grantsSchool/grantsBatchDelete', data);
        };
        //修改助学金批次配置
        myServices.grantsBatchUpdate = function (data) {
            return httpServer.postHttp('/grantsSchool/grantsBatchUpdate', data);
        };

        //学校用户删除助学金
        myServices.grantsDelete = function (data) {
            return httpServer.delete('/grantsSchool/deleteGrants', data);
        };
        //学校用户添加助学金
        myServices.grantsSave = function (data) {
            return httpServer.postHttp('/grantsSchool/saveGrants', data);
        };
        //学校用户修改助学金
        myServices.grantsUpdate = function (data) {
            return httpServer.put('/grantsSchool/updateGrants', data);
        };
        //助学金批次配置保存操作接口
        myServices.grantsBatchSave = function (data) {
            return httpServer.postHttp('/grantsSchool/grantsBatchSave', data);
        };
        //确认补录
        myServices.makeup = function (data) {
            return httpServer.postHttp('/grantsSchool/makeup', data);
        };
        /**
         * 获取学院助学金列表
         */
        myServices.grantsList = function (data) {
            return httpServer.get('/grantsCollege/listGrants', data);
        };
        /***
         * 学院获取助学金配置的年级列表
         * */
        myServices.grantsClassList = function (data) {
            return httpServer.get('/grantsCollege/getGradeConfig', data);
        };
        /***
         * 保存年级配置
         * */
        myServices.grantsClassSave = function (data) {
            return httpServer.postHttp('/grantsCollege/saveGradeConfig', data);
        };
        /***
         * 申请名额
         * */
        myServices.grantsClassApply = function (data) {
            return httpServer.get('/grantsCollege/applyQuota', data);
        };
        /***
         * 退回名额
         * */
        myServices.grantsClassReturn = function (data) {
            return httpServer.get('/grantsCollege/returnQuota', data);
        };




        return myServices;
    }
})();
