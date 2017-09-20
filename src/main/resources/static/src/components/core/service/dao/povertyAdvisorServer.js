/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('povertyAdvisorServer', povertyAdvisorServer);

    povertyAdvisorServer.$inject = ['httpServer'];

    function povertyAdvisorServer(httpServer) {
        var myServices = {};

        //辅导员用户审核学生资料
        myServices.checkMaterial = function (data) {
            return httpServer.postHttp('/povertyAdvisor/checkMaterial', data);
        };
        //辅导员提交到学院审核
        myServices.commit2College = function (data) {
            return httpServer.postHttp('/povertyAdvisor/commit2College', data);
        };

        return myServices;
    }
})();
