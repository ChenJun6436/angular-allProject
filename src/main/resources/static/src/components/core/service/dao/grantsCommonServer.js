/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin  chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金公共服务
     */
    'use strict';
    angular.module('app.core').factory('grantsCommonServer', grantsCommonServer);

    grantsCommonServer.$inject = ['httpServer'];

    function grantsCommonServer(httpServer) {
        var myServices = {};

        //获取助学金批次配置
        myServices.batchList = function () {
            return httpServer.get('/grantsCommon/batchList');
        };
        //获取能操作的批次
        myServices.batchesInProcess = function () {
            return httpServer.get('/grantsCommon/batchesInProcess');
        };
        //获取助学金某批次当前进度
        myServices.currentProcess = function (data) {
            return httpServer.get('/grantsCommon/currentProcess', data);
        };
        //下载审核名单
        myServices.downloadList = function (data) {
            return httpServer.get('/grantsCommon/downloadList', data);
        };
        //查看指定助学金详情
        myServices.grantsDetail = function (data) {
            return httpServer.get('/grantsCommon/grantsDetail', data);
        };
        //查看助学金列表
        myServices.grantsList = function (data) {
            return httpServer.get('/grantsSchool/listGrants', data);
        };
        //查看学生申请材料
        myServices.studentApplyData = function (data) {
            return httpServer.get('/grantsCommon/studentApplyData', data);
        };
        //上传助学金表格模板
        myServices.uploadTemplate = function (data) {
            return httpServer.postHttp('/grantsCommon/uploadTemplate', data);
        };
        //获取助学金材料申请列表
        myServices.listApplyMaterial = function (data) {
            return httpServer.get('/grantsCommon/listApplyMaterial', data);
        };
        //删除助学金材料
        myServices.deleteApplyMaterial = function (data) {
            return httpServer.delete('/grantsCommon/deleteApplyMaterial', data);
        };
        //公示查看异议列表
        myServices.viewOpenDissent = function (data) {
            return httpServer.postHttp('/grantsCommon/viewOpenDissent', data);
        };
        //提交异议
        myServices.commitDissent = function (data) {
            return httpServer.postHttp('/grantsCommon/commitDissent', data);
        };
        //处理异议
        myServices.dealDissent = function (data) {
            return httpServer.postHttp('/grantsCommon/dealDissent', data);
        };
        //获取学期
        myServices.listSchoolYear = function () {
            return httpServer.get('/grantsCommon/listSchoolYear');
        };
        /**
         * 学生困难认定等级  /{sn}
         * */
        myServices.studentPoorLevel = function (data) {
            return httpServer.get(' /grantsCommon/getPovertyLevel',data);
        };
        /**
         * 获取助学贷款列表
         * */
        myServices.loanList = function () {
            return httpServer.get('/loan/all/detail');
        };
        /**
         * 上传助学金资料
         * */
        myServices.uploadApplyFlie = function () {
            return httpServer.post('/grantsCommon/uploadFile');
        };
        /**
         * 获取上传成功的列表
         * */
        myServices.grantsComFile = function () {
            return httpServer.get('/grantsStudent/listApplyMaterial');
        };
        /**
         * 删除上传成功的列表
         * */
        myServices.delGrantsComFile = function (data) {
            return httpServer.get('/grantsStudent/deleteApplyMaterial',data);
        };
        /**
         * 获取助学金流程列表(自己的任务）
         * */
        myServices.getGrantsStList = function (data) {
            return httpServer.get('/grantsActiviti/listTasks',data);
        };
        /**
         *驳回材料
         * */
        myServices.rejectTasks = function (data) {
            return httpServer.postHttp('/grantsActiviti/rejectTasks', data);
        };
        /**
         *更新等级
         * */
        myServices.updateGrantsLevel = function (data) {
            return httpServer.postHttp('/grantsActiviti/updateGrantsLevel', data);
        };
        /**
         *查看公示列表
         * */
        myServices.publicList = function (data) {
            return httpServer.get('/grantsActiviti/listPublicity', data);
        };
        /**
         *提交任务
         * */
        myServices.activityTasks = function (data) {
            return httpServer.get('/grantsActiviti/commitTasks', data);
        };
        /**
         * 配置学院公示时间
         * */
        myServices.savePublicTime = function (data) {
            return httpServer.postHttp('/grantsCommon/savePublicityTime', data);
        };
        /**
         * 判断是否已经配置公示时间
         * */
        myServices.isPublicTime = function (data) {
            return httpServer.get('/grantsCommon/isConfigPublicityTime', data);
        };
        /**
         * 获取公示时间
         * */
        myServices.fillPublicTime = function (data) {
            return httpServer.get('/grantsCommon/getPublicityTime', data);
        };
    /*    /!**
         * 获取当前阶段和下个阶段
         * *!/
        myServices.getStage = function (data) {
            return httpServer.get('/grantsActiviti/findStage', data);
        };*/
        /**
         * 查看公示异议列表
         * */
        myServices.getObjList = function (data) {
            return httpServer.get('/grantsCommon/viewOpenDissent', data);
        };
        /**
         * 处理异议    /grantsCommon/isPublicity
         * */
        myServices.postHandle = function (data) {
            return httpServer.postHttp('/grantsCommon/dealDissent', data);
        };
        /**
         * 是否是公示阶段
         * */
        myServices.isPublic = function (data) {
            return httpServer.get('/grantsCommon/isPublicity', data);
        };
        /**
         * 审核材料
         * */
        myServices.checkMaterial = function (data) {
            return httpServer.get('/grantsActiviti/checkMaterial', data);
        };
        return myServices;
    }
})();
