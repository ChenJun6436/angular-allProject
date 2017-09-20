/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('studentInfoController', studentInfoController);

    studentInfoController.$inject = [
        '$scope',
        '$rootScope',
        'povertyStudentServer',
        'povertyCommonServer',
        'tools',
        'FileUploader',
        'ROOT'];

    function studentInfoController($scope, $rootScope, povertyStudentServer, povertyCommonServer, tools, FileUploader, ROOT) {
    }
})();
