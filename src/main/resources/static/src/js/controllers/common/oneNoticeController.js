/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('oneNoticeController', ['$scope', '$rootScope', '$cookies', '$state', 'commonServer', '$stateParams',
        function ($scope, $rootScope, $cookies, $state, commonServer, $stateParams) {
            $scope.vm = {
                oneNotice: {}
            };
            /**
             * 获取单个公告详情信息
             */
            commonServer.queryDetailSchoolNotice({
                'id': $stateParams.noticeId
            }).then(function (data) {
                if (data.status) {
                    $scope.vm.oneNotice = data.data;
                }
            });
            /**
             * 下载附件
             * @param url
             */
            $scope.download = function (url) {
                window.open(url);
            };
        }
    ]);
})();
