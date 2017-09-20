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
    angular.module('app.core').factory('scholarStudentServer', scholarStudentServer);

    scholarStudentServer.$inject = ['httpServer'];

    function scholarStudentServer(httpServer) {
        var myServices = {};
        /**
         *获取学生基本信息
         * */
        myServices.getStudentInfo = function (data) {
            return httpServer.get('/scholarshipStudent/getStudentInfo', data);
        };
        /**
         *获取励志奖学金申请条件
         * */
        myServices.saveOrUpdateCollegeConfig = function (data) {
            return httpServer.get('/scholarshipStudent/saveOrUpdateCollegeConfig', data);
        };
        /**
         * 学生新增获奖信息
         * */
        myServices.savAward = function (data) {
            return httpServer.postHttp('/scholarshipStudent/savAward', data);
        };
        /**
         * 学生删除获奖信息
         * */
        myServices.deleteAward = function (data) {
            return httpServer.postHttp('/scholarshipStudent/deleteAward', data);
        };
        /**
         * 学生申请励志奖学金并开启流程
         * */
        myServices.scholarSchoolListPost = function (data) {
            return httpServer.postHttp('/scholarshipStudent/applyScholarship', data);
        };


        return myServices;
    }
})();
