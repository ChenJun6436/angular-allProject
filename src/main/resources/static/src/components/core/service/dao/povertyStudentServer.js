/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定学生服务
     */
    'use strict';
    angular.module('app.core').factory('povertyStudentServer', povertyStudentServer);

    povertyStudentServer.$inject = ['httpServer'];

    function povertyStudentServer(httpServer) {
        var myServices = {};

        //添加家庭成员
        myServices.addFamily = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentFamily', data);
        };
        //删除家庭成员
        myServices.removeFamily = function (data) {
            return httpServer.delete('/povertyStudent/removeStudentFamily', data);
        };

        //添加资助
        myServices.addSubsidy = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentSubsidy', data);
        };
        //删除资助
        myServices.removeSubsidy = function (data) {
            return httpServer.delete('/povertyStudent/removeStudentSubsidy', data);
        };

        //添加获奖信息
        myServices.addAward = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentAward', data);
        };
        //添加获奖附件
        myServices.uploadAwardAttach = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentAward', data);
        };
        //删除获奖信息
        myServices.removeAward = function (data) {
            return httpServer.delete('/povertyStudent/removeStudentAward', data);
        };

        //添加处分信息
        myServices.addPunishment = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentPunishment', data);
        };
        //删除处分信息
        myServices.removePunishment = function (data) {
            return httpServer.delete('/povertyStudent/removeStudentPunishment', data);
        };

        //添加学生困难认定附件
        myServices.uploadFile = function (data) {
            return httpServer.postHttp('/povertyStudent/uploadFile', data);
        };
        //删除学生困难认定附件
        myServices.removeAttachment = function (data) {
            return httpServer.delete('/povertyStudent/removeAttachment', data);
        };


        //更新学生基本信息
        myServices.updateStudentInfo = function (data) {
            return httpServer.postHttp('/povertyStudent/updateStudentInfo', data);
        };

        //学生是否完善基本信息
        myServices.isComplete = function () {
            return httpServer.get('/povertyStudent/isComplete');
        };
        //学生获取自己申请状态
        myServices.getStudentStatus = function () {
            return httpServer.get('/povertyStudent/getStudentStatus');
        };

        //学生开始流程认定
        myServices.startPovertyProcess = function (data) {
            return httpServer.get('/povertyStudent/startPovertyProcess', data);
        };
        //学生查看学院公示
        myServices.getCollegeNotice = function () {
            return httpServer.get('/povertyStudent/getCollegeNotice');
        };
        //学生提交异议
        myServices.commitDissent0 = function (data) {
            return httpServer.postHttp('/povertyStudent/commitDissent/0', data);
        };
        //学生提学校异议
        myServices.commitDissent1 = function (data) {
            return httpServer.postHttp('/povertyStudent/commitDissent/1', data);
        };
        //学生查看处理异议
        myServices.viewDealOpinion = function () {
            return httpServer.get('/povertyStudent/viewDealOpinion');
        };
        //班级用户审核学生资料
        myServices.checkMaterial = function (data) {
            return httpServer.postHttp('/povertyClass/checkMaterial', data);
        };
        //班级用户提交到辅导员审核
        myServices.commit2Advisor = function (data) {
            return httpServer.postHttp('/povertyClass/commit2Advisor', data);
        };
        //学生查看学校公示
        myServices.getSchoolNotice = function (data) {
            return httpServer.get('/povertyStudent/getSchoolNotice', data);
        };
        return myServices;
    }
})();
