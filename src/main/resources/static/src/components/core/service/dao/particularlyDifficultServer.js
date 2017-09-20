/**
 * Created by yanyuan on 2017/6/7.
 */
(function () {
    /**
     * 特别困难补助服务
     */
    'use strict';
    angular.module('app.core').factory('particularlyDifficultServer', particularlyDifficultServer);

    particularlyDifficultServer.$inject = ['httpServer'];

    function particularlyDifficultServer(httpServer) {
        var myServices = {};

        //申请
        myServices.postAllowanceApply = function (data) {
            return httpServer.postHttp('/allowance/apply', data);
        };
        //申请
        myServices.getAllowanceAtApplyTime = function (data) {
            return httpServer.get('/allowance/atApplyTime', data);
        };
        //获取待审核列表
        myServices.getAllowanceCheck = function (data) {
            return httpServer.get('/allowance/check', data);
        };
        //获取已审核列表
        myServices.getAllowanceChecked = function (data) {
            return httpServer.get('/allowance/checked', data);
        };
        //获取配置
        myServices.getAllowanceGetConfig = function (data) {
            return httpServer.get('/allowance/getConfig', data);
        };
        //是否为五类生
        myServices.getAllowanceIsFiveClass = function (data) {
            return httpServer.get('/allowance/isFiveClass', data);
        };
        //学校用户保存配置
        myServices.postAllowanceSaveConfig = function (data) {
            return httpServer.postHttp('/allowance/saveConfig', data);
        };
        //提交到下一级审核
        myServices.postAllowanceSubmitNextCheck = function (data) {
            return httpServer.postHttp('/allowance/submitNextCheck', data);
        };
        //修改审核状态
        myServices.postAllowanceUpdateApply = function (data) {
            return httpServer.postHttp('/allowance/updateApply', data);
        };
        return myServices;
    }
})();
