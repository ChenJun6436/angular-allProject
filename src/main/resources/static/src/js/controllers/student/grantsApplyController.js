/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('grantsApplyController', ['$scope', '$rootScope', 'FileUploader', 'ROOT', 'tools', 'studentServer',
        function ($scope, $rootScope, FileUploader, ROOT, tools, studentServer) {
            $scope.vm = {
                grantsList: [
                    {
                        id: 1,
                        name: '精进助学金',
                        status: 1
                    },
                    {
                        id: 2,
                        name: '国家助学金',
                        list: ['一等', '二等', '三等'],
                        status: 0
                    },
                    {
                        id: 3,
                        name: '科为助学金',
                        status: -1
                    },
                    {
                        id: 4,
                        name: '科学助学金',
                        status: 0
                    }
                ]
            };

            /**
             *
             * @param grants
             */
            $scope.showGrantsDetail = function (grants) {
                $scope.vm.grantsDetail = grants;
                $('#addGrants').modal('show');
                $scope.vm.type = grants.list && grants.list.length > 1 ? 1 : 0;
            };

            /**
             * 选择助学金
             * @param grants
             */
            $scope.doApply = function (grants) {

                $scope.vm.currentApply = grants;

                if (grants.levels[0].level) {
                    $('#applyGrants').modal('show');
                    $scope.vm.checkedLevel = grants.levels[0];
                    $scope.addApply = function () {
                        $('#applyGrants').modal('hide');
                    };
                } else {
                    $scope.vm.checkedLevel = null;
                }
            };
            /**
             *
             */
            $scope.showDetail = function () {
                window.open('#/onePersonInfo/201*******013');
            };
            (function () {
                var uploader = $scope.uploader = new FileUploader({
                    url: ROOT + '/student/upload',
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
                        tools.alertError($rootScope, '上传文件大小不得大于15M');
                        uploader.clearQueue();
                    }
                };
                uploader.onCompleteItem = function (fileItem, response) {
                    //var _repsonse=angular.toJson(response);
                    if (response.status) {
                        tools.alertSuccess($rootScope, '上传成功');
                        $scope.initUpload();
                    } else {
                        tools.alertSuccess($rootScope, '上传成功');
                        $scope.vm.uploadsList.push({
                            "id": 11,
                            "filename": fileItem._file.name,
                            "uploadTime": new Date().getTime(),
                            "url": "target\\AccurateSubsidize\\upload/2014220701022/XXXX\u5927\u5b66\u5bb6\u5ead\u7ecf\u6d4e\u56f0\u96be\u5b66\u751f\u8ba4\u5b9a\u7533\u8bf7\u8868.doc"
                        });
                    }
                };
                /**
                 * 初始化获取上传列表
                 */
                $scope.initUpload = function () {
                    studentServer.getUploads().then(function (data) {
                        if (data.status) {
                            $scope.vm.uploadsList = [];
                            /**
                             * 删除文件
                             * @param id    文件ID
                             */
                            $scope.removeUpload = function (id) {
                                studentServer.removeUpload({
                                    'id': id
                                }).then(function (data) {
                                    if (data.status) {
                                        tools.alertSuccess($rootScope, '删除成功');
                                        $scope.initUpload();
                                    }
                                });
                            };
                        }
                    });
                };
                $scope.initUpload();

                $scope.cancelApply = function () {
                    $scope.vm.uploadsList = [];
                    uploader.clearQueue();
                    $scope.vm.currentApply = null;
                };
                /**
                 * 提交至辅导员审核
                 */
                $scope.confirmSubmit = function () {
                    $('#ensureSubmit').modal('show');
                    /**
                     * 确认提交到辅导员审核
                     */
                    $scope.insureSubmit = function () {
                        $('#ensureSubmit').modal('hide');
                        angular.forEach($scope.vm.grantsList, function (value) {
                            value.id === $scope.vm.currentApply.id && (value.status = 1);
                        });
                        $scope.cancelApply();
                        tools.alertSuccess($rootScope, '提交成功');
                    };
                    /**
                     * 取消提交到辅导员审核
                     */
                    $scope.cancelSubmit = function () {
                        $('#ensureSubmit').modal('hide');
                    };
                };
            })();
        }
    ]);
})();
