/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('advisorAuditPovertyController', ['$scope', '$rootScope', '$cookies', '$state', '$http', 'advisorServer', 'commonServer', 'FileUploader', 'NgTableParams', 'tools', 'ROOT',
        function ($scope, $rootScope, $cookies, $state, $http, advisorServer, commonServer, FileUploader, NgTableParams, tools, ROOT) {
            $scope.vm = {
                tableFlag: 0,
                poorInfoList: {},
                feedBackContent: '',
                povertyLevelList: []
            };
            /**
             * 获取状态码
             */
            $scope.initStatus = function () {
                commonServer.getStatus().then(function (data) {
                    if (data.status) {
                        $scope.vm.statusCode = data.data.status;
                        $scope.vm.statusCode = 2;
                        $scope.vm.studentMaxStatus = data.data.studentMaxStatus;
                        $scope.vm.lastTime = new Date().getTime();
                        if (data.data.status > 2) {
                            commonServer.getPovertyLevelList().then(function (data) {
                                if (data.status) {
                                    $scope.vm.povertyLevelList = data.data;
                                }
                            });
                        }
                        /**
                         * 初始化贫困等级列表
                         */
                        $scope.init = function () {
                            commonServer.getPoorList().then(function (data) {
                                if (data.status) {
                                    $scope.common(data);
                                } else {
                                    $scope.vm.tableFlag = 2;
                                }
                            });
                        };
                        $scope.init();
                    }
                });
            };
            $scope.initStatus();
            $scope.common= function (data) {
                $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                $scope.vm.totalNum = data.data.dataList.length;
                $scope._data = data.data.dataList;
                angular.forEach(data.data.dataList, function (data) {
                    data.selected = {
                        id: 0,
                        name: data.advisorAudit
                    };
                    if ($scope.vm.statusCode === 2 && data.status === 6) {
                        data.advisorAudit = '未进行';
                    }
                    if ($scope.vm.statusCode === 3 && data.status === 8) {
                        data.collegeAudit = '未进行';
                    }
                    if ($scope.vm.statusCode >= 4 && data.status === 8) {
                        data.collegeAudit = '正在进行';
                    }
                    if ($scope.vm.statusCode === 5 && data.status === 11) {
                        data.schoolAudit = '未进行';
                    }
                    if ($scope.vm.statusCode >= 6 && (data.status === 11 || data.status === 110)) {
                        data.schoolAudit = '正在进行';
                    }
                    if ($scope.vm.statusCode === 6 && data.status === 12) {
                        data.schoolAnno = '未进行';
                    }
                });
                $scope.tableParams = new NgTableParams({
                    page: 1,
                    count: 15
                }, {
                    dataset: $scope._data,
                    counts: [10, 15, 20, 30]
                });
            };
            /**
             * 修改等级
             * @param id
             * @param name
             */
            $scope.changeLevel = function (id, name) {
                if (name === '特别困难' || name === '困难' || name === '一般困难' || name === '不困难') {
                    advisorServer.modifyPoorLevel({
                        'studentId': id,
                        'povertyLevel': name
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess($rootScope, '修改成功');
                            var _newPage = $scope.tableParams.page();
                            var _count = $scope.tableParams.count();
                            angular.forEach($scope._data, function (data) {
                                data.studentId === id && (data.advisorAudit = name);
                            });
                            $scope.tableParams = new NgTableParams({
                                page: _newPage,
                                count: _count
                            }, {
                                dataset: $scope._data,
                                counts: [10, 15, 20, 30]
                            });
                        } else {
                            $scope.initStatus();
                        }
                    });
                }
            };
            /**
             * 提交至辅导员审核
             */
            $scope.sureDiscussion = function () {
                advisorServer.sureDiscussion().then(function (data) {
                    if (data.status) {
                        tools.alertSuccess($rootScope, '提交成功');
                        advisorServer.getListAfterSureDiscussion().then(function (data) {
                            if(data.status){
                                $scope.common(data);
                                $scope.vm.statusCode = 3;
                                $scope.vm.studentMaxStatus = 6;
                            }
                        });
                    }
                });
            };
            /**
             * 提交至学院审核
             */
            $scope.commitAdvisorAffirm = function () {
                advisorServer.commitAdvisorAffirm().then(function (data) {
                    if (data.status) {
                        tools.alertSuccess($rootScope, '提交成功');
                        advisorServer.getListAfterCommitAdvisorAffirm().then(function (data) {
                            if(data.status){
                                $scope.vm.statusCode = 4;
                                $scope.vm.studentMaxStatus = 8;
                                $scope.common(data);
                            }
                        });
                    }
                });
            };
            /**
             * 下载名单
             */
            $scope.downloadList = function () {
                commonServer.downloadList().then(function (data) {
                    if (data.status) {
                        window.open(data.data.url);
                    }
                });
            };
            /**
             * 下载民主评议模板
             */
            $scope.downloadDisscusTemplate = function () {
                /*commonServer.downloadDisscusTemplate().then(function (data) {
                 if (data.status) {
                 window.open('download/lists.xls');
                 }
                 });*/
                window.open('download/lists.xls');
            };
            /**
             * 上传民主评议结果
             */
            (function () {
                var uploader = $scope.uploader = new FileUploader({
                    url: ROOT + '/advisor/uploadDiscussion',
                    queueLimit: 1,
                    removeAfterUpload: true
                });
                uploader.onAfterAddingFile = function (fileItem) {
                    $('#insureModal').modal('show');
                    $scope.insure = function () {
                        uploader.uploadAll();
                    };
                    $scope.cancel = function () {
                        $('#insureModal').modal('hide');
                        fileItem.remove();
                    };
                };
                uploader.onCompleteItem = function (fileItem, response) {
                    if (response.status) {
                        tools.alertSuccess($rootScope, '上传成功');
                        $('#insureModal').modal('hide');
                        $scope.initStatus();
                        $scope.init();
                    } else {
                        tools.alertSuccess($rootScope, '上传成功');
                        $('#insureModal').modal('hide');
                        advisorServer.getListAfterPingYi().then(function (data) {
                            if(data.status){
                                $scope.common(data);
                                $scope.vm.statusCode = 2;
                                $scope.vm.studentMaxStatus = 4;
                            }
                        });
                    }
                };
            })();
            $scope.getRejectReason = function () {
                window.open('#/showRejectReason');
            };
        }
    ]);
})();
