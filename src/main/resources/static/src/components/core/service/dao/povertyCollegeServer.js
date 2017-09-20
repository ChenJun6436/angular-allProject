/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定学院服务
     */
    'use strict';
    angular.module('app.core').factory('povertyCollegeServer', povertyCollegeServer);

    povertyCollegeServer.$inject = ['httpServer'];

    function povertyCollegeServer(httpServer) {
        var myServices = {};

        //学院用户提交到学院公示
        myServices.commit2CollegeOpen = function (data) {
            return httpServer.postHttp('/povertyCollege/commit2CollegeOpen', data);
        };
        //学院用户查看学生异议
        myServices.viewOpenDissent = function () {
            return httpServer.get('/povertyCollege/viewOpenDissent');
        };
        //学院用户处理学生异议
        myServices.dealOpenDissent = function (data) {
            return httpServer.postHttp('/povertyCollege/dealOpenDissent', data);
        };
        //学院用户提交到学校审核
        myServices.commit2School = function (data) {
            return httpServer.postHttp('/povertyCollege/commit2School', data);
        };
        //学院用户获取辅导员列表
        myServices.listAdvisors = function () {
            return httpServer.get('/povertyCollege/listAdvisors');
        };
        //学院用户补填申请
        myServices.addApply = function (data) {
            return httpServer.postHttp('/povertyCollege/addApply', data);
        };
        //学院用户取消申请
        myServices.cancelApply = function (data) {
            return httpServer.postHttp('/povertyCollege/cancelApply', data);
        };
        return myServices;
    }
})();
