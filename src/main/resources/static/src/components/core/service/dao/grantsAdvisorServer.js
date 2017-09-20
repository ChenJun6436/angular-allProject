/**
 * Created with IntelliJ IDEA.
 * User:    chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('grantsAdvisorServer', grantsAdvisorServer);

    grantsAdvisorServer.$inject = ['httpServer'];

    function grantsAdvisorServer(httpServer) {
        var myServices = {};
        //本学年评定经济困难但未申请助学金
        myServices.notApply = function (data) {
            return httpServer.get('/grantsAdvisor/povertyNotApply', data);
        };
        //s


        return myServices;
    }
})();
