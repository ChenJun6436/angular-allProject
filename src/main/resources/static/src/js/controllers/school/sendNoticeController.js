/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('sendNoticeController', ['$scope', '$rootScope', '$state', 'schoolServer', 'studentServer', 'FileUploader', 'tools', 'ROOT',
        function ($scope, $rootScope, $state, schoolServer, studentServer, FileUploader, tools, ROOT) {
            $scope.vm = {
                'issueNotice': {
                    'title': '',
                    'content': ''
                },
                'uploadList': []
            };

            /**
             * 获取附件列表
             */
            $scope.getUploadFile = function () {
                schoolServer.getUploadFile().then(function (data) {
                    if (data.status) {
                        $scope.vm.uploadList = data.data.dataList;
                    }
                });
            };
            $scope.getUploadFile();
            /**
             * 删除附件
             * @param id
             */
            $scope.deleteFile = function (id) {
                studentServer.removeUpload({
                    'id': id
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess($rootScope, '删除成功');
                        $scope.getUploadFile();
                    } else {
                        tools.alertError($rootScope, data.message);
                    }
                });
            };
            /**
             * 上传民主评议结果
             */
            (function () {
                var uploader = $scope.uploader = new FileUploader({
                    url: ROOT + '/school/uploadFile',
                    autoUpload: true,
                    removeAfterUpload: true,
                    queueLimit: 1
                });
                uploader.onAfterAddingFile = function (fileItem) {
                    var lastName = fileItem.file.name.slice(-3).toLowerCase();
                    var _arr = ['doc', 'ocx', 'pdf', 'lsx', 'xls', 'jpg', 'bmp', 'png'];
                    if (_arr.indexOf(lastName) === -1) {
                        tools.alertError($rootScope, '请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】等规定格式文件');
                        uploader.clearQueue();
                    }
                    if (fileItem.file.size > 20971520) {
                        tools.alertError($rootScope, '上传文件大小不得大于20M');
                        uploader.clearQueue();
                    }
                };
                uploader.onCompleteItem = function (fileItem, response) {
                    if (response.status) {
                        tools.alertSuccess($rootScope, '上传成功');
                        $scope.getUploadFile();
                    } else {
                        tools.alertError($rootScope, response.message);
                    }
                };
            })();
            /**
             * 发布公告
             */
            $scope.issueNotice = function () {
                if ($scope.vm.issueNotice.title !== '') {
                    schoolServer.issueNotice($scope.vm.issueNotice).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess($rootScope, '发布成功');
                            $scope.vm.issueNotice.title = '';
                            $scope.vm.issueNotice.content = '';
                            $scope.vm.uploadList = [];
                        }
                    });
                } else {
                    tools.alertError($rootScope, '请填写标题');
                }
            };
        }
    ]);
})();
