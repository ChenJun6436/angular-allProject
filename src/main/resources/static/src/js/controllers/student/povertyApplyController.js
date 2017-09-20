/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('povertyApplyController', ['$scope', '$rootScope', '$cookies', '$state', 'studentServer', 'commonServer', 'FileUploader', '$filter', 'common', 'tools', 'ROOT', '$timeout',
        function ($scope, $rootScope, $cookies, $state, studentServer, commonServer, FileUploader, $filter, common, tools, ROOT, $timeout) {
            $scope.vm = {
                infoFlag: 0, /*0：从基本信息表获取学生信息     1：从session里面获取学生信息*/
                started: 0   /*0:无   1:申请界面   2:流程未开始   3:同意承诺书*/
            };
            //拦截用户地址栏输入
            if ($rootScope.isComplete === 0) {
                $state.go('main.personInfo');
            }
            //获取总流程状态来判断流程是否开启来初始化界面
            commonServer.getStatus().then(function (data) {
                //如果流程开启才可以进行学生申请，不然就显示流程”流程未开始“
                if (data.status) {
                    //vm.bigStatus:总流程状态
                    //vm.status:学生状态码
                    $scope.vm.bigStatus = 1;
                    if ($scope.vm.bigStatus > 0) {
                        /**
                         * 获取学生状态码
                         */
                        $scope.getStatus = function () {
                            studentServer.getStatus().then(function (data) {
                                if (data.status) {
                                    $scope.vm.status = data.data;
                                    $scope.vm.level = data.data.level;
                                }
                            });
                        };
                        /**
                         * 如果流程不是申请阶段：
                         * 1、如果学生申请了资料，则显示已提交资料，正在进行***
                         * 2、如果学生没有申请资料，则显示未提交资料，正在进行***
                         */
                        if ($scope.vm.bigStatus > 1) {
                            //切换选项卡至step3
                            $scope.vm.activeTabs = 'submitSuccess';
                            $scope.vm.started = 1;
                            $scope.getStatus();
                        } else {
                            $scope.vm.lastTime = new Date().getTime();
                            /**
                             * 上传材料
                             */
                            $scope.updateMaterial = function () {
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
                                        tools.alertError($rootScope, '上传文件大小不得大于20M');
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
                            };
                            /**
                             * 跳转页面到上传部分
                             * @private
                             */
                            var _goUpload = function () {
                                $scope.vm.started = 1;
                                $scope.vm.activeTabs = 'updateMaterial';
                                $scope.updateMaterial();
                            };
                            /**
                             * 获取申请状态(v1.1)
                             * 000：未申请
                             * 100：已申请，正在等待辅导员审核材
                             * 1-10:已申请，被驳回
                             * 110：已申请，并且辅导员通过了审核,然后才有学生在流程中的状态码
                             */
                            studentServer.getStatus().then(function (data) {
                                if (data.status) {
                                    data.data.status = '000';
                                    if (data.data.status === '000') {
                                        //以本地存储来判断是否同意承诺书
                                        if (!window.localStorage.getItem('isAgree')) {
                                            $scope.vm.started = 3;
                                            $scope.setAgreeToLocalStorage = function () {
                                                window.localStorage.setItem('isAgree', 'yes');
                                                _goUpload();
                                            };
                                        } else {
                                            _goUpload();
                                        }
                                    } else if (data.data.status === '1-10') {
                                        $scope.vm.reApply = true;
                                        _goUpload();
                                    } else {
                                        //切换选项卡至step3
                                        $scope.vm.activeTabs = 'submitSuccess';
                                        $scope.vm.started = 1;
                                        $scope.vm.status = data.data;
                                    }
                                }
                            });
                            /**
                             * 提交材料，切换选项卡至step2
                             */
                            $scope.goNext = function () {
                                if ($scope.vm.uploadsList.length > 0) {
                                    $scope.vm.activeTabs = 'confirmSubmit';
                                    $scope.viewModifyInfo();
                                } else {
                                    $('#ensureNext').modal('show');
                                    /**
                                     * 确认提交材料
                                     */
                                    $scope.insureUpload = function () {
                                        $scope.vm.activeTabs = 'confirmSubmit';
                                        $scope.viewModifyInfo();
                                        $('#ensureNext').modal('hide');
                                    };
                                    /**
                                     * 取消提交材料
                                     */
                                    $scope.cancelUpload = function () {
                                        $('#ensureNext').modal('hide');
                                    };
                                }
                            };
                            /**
                             * 查看修改信息，提交保存，切换选项卡至step3
                             */
                            $scope.viewModifyInfo = function () {
                                studentServer.getPersonalInfo().then(function (data) {
                                    if (data.status) {
                                        $scope.vm.viewModifyList = data.data;
                                        $scope.vm.viewModifyList.studentInfo.gender = data.data.studentInfo.gender === 1 ? '男' : '女';
                                        $scope.vm.viewModifyList.studentInfo.isDisability = data.data.studentInfo.isDisability === 1 ? '是' : '否';
                                        $scope.vm.viewModifyList.studentInfo.isSole = data.data.studentInfo.isSole === 1 ? '是' : '否';
                                        $scope.vm.viewModifyList.studentInfo.isMartyr = data.data.studentInfo.isMartyr === 1 ? '是' : '否';
                                        $scope.vm.viewModifyList.studentInfo.isLowField = data.data.studentInfo.isLowField === 1 ? '是' : '否';
                                        $scope.vm.viewModifyList.studentInfo.isFilingCard = data.data.studentInfo.isFilingCard === 1 ? '是' : '否';
                                        $scope.vm.viewModifyList.studentInfo.isLoad = data.data.studentInfo.isLoad === 1 ? '是' : '否';
                                        $scope.vm.viewModifyList.studentInfo.isAccident = data.data.studentInfo.isAccident === 1 ? '是' : '否';
                                        /**
                                         * 提交至辅导员审核
                                         */
                                        $scope.confirmSubmit = function () {
                                            $('#ensureSubmit').modal('show');
                                            /**
                                             * 确认提交到辅导员审核
                                             */
                                            $scope.insureSubmit = function () {
                                                studentServer.commitInfo().then(function (data) {
                                                    if (data.status) {
                                                        $('#ensureSubmit').modal('hide');
                                                        tools.alertSuccess($rootScope, '提交成功');
                                                        $scope.vm.activeTabs = 'submitSuccess';
                                                        $rootScope.status = '100';
                                                        $scope.vm.status = {
                                                            status: '100'
                                                        }
                                                    }
                                                });
                                            };
                                            /**
                                             * 取消提交到辅导员审核
                                             */
                                            $scope.cancelSubmit = function () {
                                                $('#ensureSubmit').modal('hide');
                                            };
                                        };
                                    }
                                });
                            };
                            /**
                             * 重新编辑材料，切换选项卡至step1
                             */
                            $scope.reUpload = _goUpload;
                        }
                    } else {
                        studentServer.getStatus().then(function (data) {
                            if (data.status) {
                                //如果没有等级，显示流程未开始
                                if (data.data.level == null) {
                                    $scope.vm.started = 2;
                                    return;
                                }
                                //如果有等级，显示认定结果
                                if (data.data.level !== '') {
                                    $scope.vm.started = 1;
                                    $scope.vm.activeTabs = 'submitSuccess';
                                    $scope.vm.level = data.data.level;
                                }
                            }
                        });
                    }
                    $scope.viewInfo = function () {
                        window.open('#/onePersonInfo/201*******013');
                    };
                } else {
                    $scope.vm.started = 2;
                }
            });
        }
    ]);
})();
