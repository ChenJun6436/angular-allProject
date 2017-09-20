/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/11
 * Time: 20:40
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 入伍补助
     */
    'use strict';
    angular.module('app.core').factory('goToArmyServer', goToArmyServer);

    goToArmyServer.$inject = ['httpServer'];

    function goToArmyServer(httpServer) {
        var myServices = {};

        //查询入伍补助的学生
        myServices.getAllArmySub = function () {
            return httpServer.get('/joinArmySubsidize/all');
        };
        //新增
        myServices.addArmySub = function (data) {
            return httpServer.postHttp('/joinArmySubsidize/single', data);
        };
        myServices.postArmySubBatch = function (data) {
            return httpServer.postHttp('/joinArmySubsidize/batch', data);
        };
        myServices.deleteArmySub = function (data) {
            return httpServer.postHttp('/joinArmySubsidize/joinArmySubsidize', data);
        };
        myServices.deleteArmySubSingle = function (data) {
            return httpServer.delete('/joinArmySubsidize/joinArmySubsidize', data);
        };
        myServices.putArmySub = function (data) {
            return httpServer.put('/joinArmySubsidize/joinArmySubsidize', data);
        };
        myServices.getdownload = function (data) {
            return httpServer.get('/joinArmySubsidize/student/list', data);
        };
        return myServices;
    }
})();