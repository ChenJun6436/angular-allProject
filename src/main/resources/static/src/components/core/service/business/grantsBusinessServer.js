/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/11
 * Time: 11:01
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').factory('grantsBusinessServer', grantsBusinessServer);

    grantsBusinessServer.$inject = ['grantsCommonServer', '$rootScope', '$q'];

    function grantsBusinessServer(grantsCommonServer, $rootScope, $q) {
        var myServices = {};

        myServices.getGrantsMaxStatus = function (batchId) {

            var deferred = $q.defer();

            grantsCommonServer.currentProcess(batchId).then(function (data) {
                if (data.status) {

                    /**
                     * povertyBigStatus:总流程状态
                     */
                    $rootScope.grantsBigStatus = data.data.currentStatus;
                    //当前进行的流程进度名称
                    $rootScope.grantsProcessName = data.data.statusInfo;
                    //当前进行的流程截止时间
                    $rootScope.grantsLastTime = data.data.lastTime;
                    //当前进行的学生最大状态码
                    $rootScope.grantsMaxStatus = data.data.maxStatus;

                    deferred.resolve(data);
                }
            });

            return deferred.promise;

        };

        return myServices;
    }
})();