/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('povertyApplyController', povertyApplyController);

    povertyApplyController.$inject = [
        '$scope',
        '$rootScope',
        'povertyStudentServer',
        'povertyCommonServer',
        'FileUploader',
        'povertyBusinessServer',
        'tools',
        'ROOT'];

    function povertyApplyController($scope, $rootScope, povertyStudentServer, povertyCommonServer, FileUploader, povertyBusinessServer, tools, ROOT) {
        $scope.vm = {
            started: 0   /*0:无   1:申请界面   2:流程未开始   3:同意承诺书*/
        };
        //拦截用户地址栏输入
        /*if (!$rootScope.isComplete) {
         $state.go('main.studentInfo');
         }*/
        //获取总流程状态来判断流程是否开启来初始化界面
        povertyBusinessServer.getPovertyMaxStatus().then(function (data) {

            //如果流程开启才可以进行学生申请，不然就显示流程”流程未开始“
            if (data.status) {
                //总流程状态码大于0说明流程已经开始
                if ($scope.povertyBigStatus >= 0) {

                    /**
                     * 如果流程不是申请阶段：
                     * 1、如果学生申请了资料，则显示已提交资料，正在进行***
                     * 2、如果学生没有申请资料，则显示未提交资料，正在进行***
                     */
                    if ($scope.povertyBigStatus > 1) {
                        //切换选项卡至step3
                        $scope.vm.activeTabs = 'submitSuccess';
                        $scope.vm.started = 1;
                        povertyStudentServer.getStudentStatus().then(function (data) {
                            if (data.status) {
                                $rootScope.povertyStudentStatus = data.data.status;
                                $scope.vm.result = data.data.result;
                            }
                        });
                    }
                    else {
                        /**
                         * 上传材料
                         */
                        $scope.updateMaterial = function () {
                            var uploader = $scope.uploader = new FileUploader({
                                url: ROOT + '/povertyStudent/uploadFile',
                                autoUpload: true,
                                removeAfterUpload: true,
                                queueLimit: 1
                            });
                            uploader.onAfterAddingFile = function (fileItem) {
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
                                    $scope.initUpload();
                                } else {
                                    tools.alertError(response.message);
                                }
                            };

                            /**
                             * 初始化获取上传列表
                             */
                            $scope.initUpload = function () {
                                povertyCommonServer.getAttachments($rootScope.studentId).then(function (data) {
                                    if (data.status) {
                                        $scope.vm.uploadsList = data.data;
                                        /**
                                         * 删除文件
                                         * @param id    文件ID
                                         */
                                        $scope.removeAttachment = function (id) {
                                            povertyStudentServer.removeAttachment(id).then(function (data) {
                                                if (data.status) {
                                                    tools.alertSuccess('删除成功');
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
                         * 0：未申请
                         * -1:已申请，被驳回
                         * -2:尴尬，被取消了申请
                         * >0：在流程中
                         */
                        povertyStudentServer.getStudentStatus().then(function (data) {
                            if (data.status) {
                                $rootScope.povertyStudentStatus = data.data.status;
                                if ($rootScope.povertyStudentStatus === 0) {
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
                                } else {
                                    //切换选项卡至step3
                                    $scope.vm.activeTabs = 'submitSuccess';
                                    $scope.vm.started = 1;

                                    if($rootScope.povertyStudentStatus === -1){
                                        $scope.reApply = function () {
                                            _goUpload();
                                        };
                                    }
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

                            /**
                             * 提交至辅导员审核
                             */
                            $scope.confirmSubmit = function () {
                                $('#ensureSubmit').modal({backdrop: 'static', keyboard: false});
                                $scope.vm.idCommiting = false;

                                /**
                                 * 确认提交到辅导员审核
                                 */
                                $scope.insureSubmit = function () {
                                    $scope.vm.idCommiting = true;
                                    povertyStudentServer.startPovertyProcess($rootScope.studentId).then(function (data) {
                                        if (data.status) {
                                            tools.alertSuccess('提交成功');
                                            $scope.vm.activeTabs = 'submitSuccess';
                                            $rootScope.povertyStudentStatus = 1;
                                        }else {
                                            tools.alertError(data.message);
                                        }
                                        $('#ensureSubmit').modal('hide');
                                        $scope.vm.idCommiting = false;
                                    });
                                };

                                /**
                                 * 取消提交到辅导员审核
                                 */
                                $scope.cancelSubmit = function () {
                                    $('#ensureSubmit').modal('hide');
                                };
                            };
                        };

                        /**
                         * 重新编辑材料，切换选项卡至step1
                         */
                        $scope.reUpload = _goUpload;
                    }
                } else {
                    $scope.vm.started = 2;
                }

                /**
                 * 查看申请详细资料
                 */
                $scope.viewInfo = function () {
                    window.open('#/studentPovertyMaterial/' + $rootScope.studentId);
                };
            } else {
                $scope.vm.started = 2;
            }
        });
    }
})();
