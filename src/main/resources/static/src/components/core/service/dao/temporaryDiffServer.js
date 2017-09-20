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
    angular.module('app.core').factory('temporaryDiffServer', temporaryDiffServer);

    temporaryDiffServer.$inject = ['httpServer'];

    function temporaryDiffServer(httpServer) {
        var myServices = {};

        //查询申请临时困难补助的学生
        myServices.getAllTemDiff = function () {
            return httpServer.get('/temporarySubsidize/all');
        };
        //新增
        myServices.addTemDiff = function (data) {
            return httpServer.postHttp('/temporarySubsidize/single', data);
        };
        //批量导入
        myServices.updateGrantsLevel = function (data) {
            return httpServer.postHttp('/temporarySubsidize/batch', data);
        };
        myServices.getStudentList = function () {
            return httpServer.get('/temporarySubsidize/student/list');
        };
        myServices.putTemporarySubsidize = function (data) {
            return httpServer.put('/temporarySubsidize/temporarySubsidize',data);
        };
        myServices.deleteTemporarySubsidizeSingle = function (data) {
            return httpServer.delete('/temporarySubsidize/temporarySubsidize', data);
        };
        myServices.deleteTemporarySubsidize = function (data) {
            return httpServer.postHttp('/temporarySubsidize/temporarySubsidize', data);
        };
        return myServices;
    }
})();