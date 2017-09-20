/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 学生对公示发反馈意见
     */
    angular.module('app.core').directive('feedBack', ['$rootScope', 'povertyStudentServer', 'tools',
        function ($rootScope, povertyStudentServer, tools) {
            return {
                restrict: 'E',
                templateUrl: 'dist/tpls/core/directives/feedBack.html',
                replace: true,
                scope: false,
                link: function (scope, ele, attrs) {
                    scope.feedBackShow = function () {
                        $('#feedBack').modal('show');
                        scope.feedBackContent = '';
                        scope.addFeedBack = function () {
                            if (scope.feedBackContent !== '') {
                                povertyStudentServer.commitDissent({
                                    'content': scope.feedBackContent
                                }).then(function (data) {
                                    if (data.status) {
                                        tools.alertSuccess($rootScope, '反馈成功');
                                        $('#feedBack').modal('hide');
                                        scope.feedBackContent = '';
                                    }
                                });
                            } else {
                                tools.alertError($rootScope, '异议不能为空');
                            }
                        };
                    };
                }
            };
        }]);
})();
