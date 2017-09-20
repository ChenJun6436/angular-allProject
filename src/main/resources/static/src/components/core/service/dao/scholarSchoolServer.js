/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 励志奖学金学校服务
     */
    'use strict';
    angular.module('app.core').factory('scholarSchoolServer', scholarSchoolServer);

    scholarSchoolServer.$inject = ['httpServer'];

    function scholarSchoolServer(httpServer) {
        var myServices = {};
        /**
         *获取学年
         * */
        myServices.scholarSchoolYear = function (data) {
            return httpServer.get('/scholarshipSchool/listSchoolYears', data);
        };
        /**
         *获取班级列表
         * */
        myServices.scholarClassList = function (data) {
            return httpServer.get('/scholarshipCollege/listGradeConfig', data);
        };
        /**
         *获取奖学金列表
         * */
        myServices.scholarGrantsList = function (data) {
            return httpServer.get('/scholarshipSchool/listGrants', data);
        };
        /**
         * 保存更新学院助学金配置
         * */
        myServices.scholarClassListPost = function (data) {
            return httpServer.postHttp('/scholarshipCollege/saveGradeConfig', data);
        };
        /**
         * 处理学院的申请
         */
        myServices.dealSchoolNewApply = function (data) {
            return httpServer.get('/grantsSchool/dealNewApply', data);
        };

        return myServices;
    }
})();
