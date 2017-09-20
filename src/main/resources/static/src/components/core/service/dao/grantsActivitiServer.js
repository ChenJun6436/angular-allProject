/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/11
 * Time: 20:40
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金学院服务
     */
    'use strict';
    angular.module('app.core').factory('grantsActivitiServer', grantsActivitiServer);

    grantsActivitiServer.$inject = ['httpServer'];

    function grantsActivitiServer(httpServer) {
        var myServices = {};

        //学生提交材料并开始流程
        myServices.grantsBatchDetail = function (data) {
            return httpServer.postHttp('/grantsActiviti/startProcess', data);
        };
        //当前登录用户查看自己的任务
        myServices.findTasks = function (data) {
            return httpServer.get('/grantsActiviti/findTasks', data);
        };
        //修改助学金等级
        myServices.updateGrantsLevel = function (data) {
            return httpServer.postHttp('/grantsActiviti/updateGrantsLevel', data);
        };
        //提交任务，转交下一步
        myServices.commitTasks = function (data) {
            return httpServer.get('/grantsActiviti/commitTasks', data);
        };
        //驳回
        myServices.rejectTasks = function (data) {
            return httpServer.postHttp('/grantsActiviti/rejectTasks', data);
        };
        //获取公示列表
        myServices.getGrantsNotice = function (data) {
            return httpServer.postHttp('/grantsActiviti/getGrantsNotice', data);
        };

        return myServices;
    }
})();