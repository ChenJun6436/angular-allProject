/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金学生服务
     */
    'use strict';
    angular.module('app.core').factory('grantsStudentServer', grantsStudentServer);

    grantsStudentServer.$inject = ['httpServer'];

    function grantsStudentServer(httpServer) {
        var myServices = {};
        //获取某批次的助学金信息和当前登录学生申请情况
        myServices.grantsBatchInfo = function (data) {
            return httpServer.get('/grantsStudent/grantsBatchInfo', data);
        };
        //获取可申请助学金列表
        myServices.grantsList = function (data) {
            return httpServer.get('/grantsStudent/listAuthGrants', data);
        };
        //开启申请助学金
        myServices.grantsApply = function (data) {
            return httpServer.postHttp('/grantsActiviti/startProcess', data);
        };
        //重新提交材料
        myServices.reUploadFile = function (data) {
            return httpServer.postHttp('/grantsStudent/recommitMaterial', data);
        };
        //提交异议
        myServices.comObj = function (data) {
            return httpServer.postHttp('/grantsCommon/commitDissent', data);
        };
        //查看异议结果
        myServices.seeAs = function (data) {
            return httpServer.get('/grantsStudent/listMyDissent', data);
        };


        return myServices;
    }
})();
