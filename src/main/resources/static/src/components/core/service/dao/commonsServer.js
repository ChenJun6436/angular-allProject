/**
 * Created by yanyuan on 2017/6/5.
 */
(function () {
    /**
     * 通用模块服务
     */
    'use strict';
    angular.module('app.core').factory('commonsServer', commonsServer);

    commonsServer.$inject = ['httpServer'];

    function commonsServer(httpServer) {
        var myServices = {};
        //查询学年列表
        myServices.getCommonsSchoolYearAll = function () {
            return httpServer.get('/commons/schoolYear/all');
        };
        //查询所有年级列表
        myServices.getCommonsGradeAll = function () {
            return httpServer.get('/commons/grade/all');
        };
        //查询用户学院
        myServices.getCommonsCollege = function () {
            return httpServer.get('/commons/college');
        };
        //查询当前学年
        myServices.getCommonsSchoolYearCurrent = function () {
            return httpServer.get('/commons/schoolYear/current');
        };
        //查询学院下年级列表
        myServices.getCommonsGrade = function (data) {
            return httpServer.get('/commons/grade'+ '/' + data);
        };
        //查询学院下专业列表
        myServices.getCommonsMajor = function (data) {
            return httpServer.get('/commons/major'+ '/' + data);
        };
        //查询专业下班级列表
        myServices.getCommonsClass = function (data) {
            return httpServer.get('/commons/major'+ '/' + data[0] + '/' + data[1]);
        };
        //查询学院下专业列表
        myServices.getCommonsServerTime = function (data) {
            return httpServer.get('/commons/serverTime');
        };
        return myServices;
    }
})();
