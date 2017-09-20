/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/2
 * Time: 15:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 打开和收起搜索框
     */
    angular.module('app.core').directive('upload', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/upload.html',
            replace: true,
            scope: {
                url: '=',
                // isEmpty: '=',
                http: '@'
            },
            controller: [
                'FileUploader',
                'tools',
                '$scope',
                'ROOT',
                function (FileUploader, tools, $scope, ROOT) {

                    $scope.$watch('url', function (to) {
                        $scope.name = to ? to.split('\\')[to.split('\\').length - 1] : '';
                    });

                    /**
                     * 上传附件
                     */
                    (function () {
                        var uploader = $scope.uploader = new FileUploader({
                            url: ROOT + $scope.http,
                            autoUpload: true,
                            removeAfterUpload: true,
                            queueLimit: 1
                        });
                        uploader.onAfterAddingFile = function (fileItem) {

                            fileItem.formData = [{
                                batchId: 0,
                                grantsId: 0
                            }];

                            var lastName = fileItem.file.name.slice(-3).toLowerCase();
                            var _arr = ['doc', 'ocx', 'pdf', 'lsx', 'xls', 'jpg', 'bmp', 'png'];
                            if (_arr.indexOf(lastName) === -1) {
                                tools.alertError('请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】等规定格式文件');
                                uploader.clearQueue();
                            }
                            if (fileItem.file.size > 20971520) {
                                tools.alertError('上传文件大小不得大于20M');
                                uploader.clearQueue();
                            }
                        };
                        uploader.onCompleteItem = function (fileItem, response) {
                            if (response.status) {
                                tools.alertSuccess('上传成功');
                                $scope.url = response.data;
                                $scope.name = $scope.url.split('\\')[$scope.url.split('\\').length - 1];
                            } else {
                                tools.alertError('上传失败');
                            }
                        };
                    })();
                }
            ]
        };
    }]);
})();