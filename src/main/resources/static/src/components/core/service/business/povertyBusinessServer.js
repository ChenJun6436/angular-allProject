/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/11
 * Time: 11:01
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.core').factory('povertyBusinessServer', povertyBusinessServer);

    povertyBusinessServer.$inject = ['povertyCommonServer', '$rootScope', '$q'];

    function povertyBusinessServer (povertyCommonServer, $rootScope, $q){
        var myServices = {};

        myServices.getPovertyMaxStatus = function () {

            var deferred = $q.defer();

            povertyCommonServer.getMaxStatus().then(function (data) {
                if (data.status) {
                    /**
                     * povertyBigStatus:总流程状态
                     */
                    $rootScope.povertyBigStatus = data.data.status;
                    //当前进行的流程进度名称
                    $rootScope.processName = data.data.processName;
                    //当前进行的流程截止时间
                    $rootScope.lastTime = data.data.lastTime;
                    //当前进行的学生最大状态码
                    $rootScope.maxStatus = data.data.maxStatus;

                    deferred.resolve(data);
                }
            });

            return deferred.promise;

        };
        myServices.getIsPovertyTime = function () {

            var deferred = $q.defer();

            povertyCommonServer.getIsPovertyTime().then(function (data) {
                if (data.status) {
                    deferred.resolve(data);
                }
            });
            return deferred.promise;

        };
        return myServices;
    }
})();