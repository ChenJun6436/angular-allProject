/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金学院服务
     */
    'use strict';
    angular.module('app.core').factory('grantsCollegeServer', grantsCollegeServer);

    grantsCollegeServer.$inject = ['httpServer'];

    function grantsCollegeServer(httpServer) {
        var myServices = {};

        //助学金批次详情
        myServices.grantsBatchDetail = function (data) {
            return httpServer.get('/grantsCollege/grantsBatchDetail', data);
        };
        //助学金批次详情
        myServices.grantsBatchSave = function (data) {
            return httpServer.postHttp('/grantsCollege/grantsBatchSave', data);
        };
        /**
         *获取助学金学年
         * */
        myServices.grantsSchoolYear = function (data) {
            return httpServer.get('/grantsCommon/getSchoolYear', data);
        };
        /**
         *获取学院列表
         * */
        myServices.grantsSchoolList = function (data) {
            return httpServer.get('/grantsSchool/getCollegeConfig', data);
        };
        /**
         * 保存更新学院助学金配置
         * */
        myServices.grantsSchoolListPost = function (data) {
            return httpServer.postHttp('/grantsSchool/saveOrUpdateCollegeConfig', data);
        };
        /**
         * 处理学院的申请
         */
        myServices.dealSchoolNewApply = function (data) {
            return httpServer.get('/grantsSchool/dealNewApply', data);
        };
        /**
         * GET  助学金配置（学校总人数 + 已认定经济困难人数）
         */
        myServices.studentNumInfo = function (data) {
            return httpServer.get('/grantsSchool/studentNumInfo', data);
        };

        return myServices;
    }
})();
