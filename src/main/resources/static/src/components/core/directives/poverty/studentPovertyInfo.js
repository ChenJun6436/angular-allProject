/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/24
 * Time: 17:06
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 打开和收起搜索框
     */
    angular.module('app.core').directive('studentPovertyInfo', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/poverty/studentPovertyInfo.html',
            replace: true,
            scope: {
                flag: '@',
                studentId: '='
            },
            controller: [
                '$scope',
                '$rootScope',
                'povertyStudentServer',
                'povertyCommonServer',
                'tools',
                'FileUploader',
                'ROOT',
                'THEME',
                'loading',
                function ($scope, $rootScope, povertyStudentServer, povertyCommonServer, tools, FileUploader, ROOT, THEME, loading) {
                    $scope.vm = {
                        baseInfo: {},
                        baseSubmit: false,
                        userRole: $rootScope.userRole
                    };
                    /**
                     * 获取学生基本信息
                     */
                    povertyCommonServer.getStudentInfo($scope.studentId).then(function (data) {
                        if (data.status) {
                            if ($scope.flag === 'form') {
                                data.data.isDisability = data.data.isDisability == null ? 0 : data.data.isDisability;
                                data.data.isSole = data.data.isSole == null ? 0 : data.data.isSole;
                                data.data.isMartyr = data.data.isMartyr == null ? 0 : data.data.isMartyr;

                                data.data.isRuralInfirm = data.data.isRuralInfirm == null ? 0 : data.data.isRuralInfirm;
                                data.data.isMartyr = data.data.isOrphan == null ? 0 : data.data.isOrphan;


                                data.data.isLowField = data.data.isLowField == null ? 0 : data.data.isLowField;
                                data.data.isLoad = data.data.isLoad == null ? 0 : data.data.isLoad;
                                data.data.isFilingCard = data.data.isFilingCard == null ? 0 : data.data.isFilingCard;
                                data.data.isAccident = data.data.isAccident == null ? 0 : data.data.isAccident;
                                data.data.isJoinLoad = data.data.isJoinLoad == null ? 0 : data.data.isJoinLoad;
                                data.data.type = data.data.type == null ? '城镇' : data.data.type;
                                data.data.isFresh = data.data.isFresh == null ? '应届' : data.data.isFresh;
                            } else {
                                data.data.gender = data.data.gender === 1 ? '男' : '女';
                                data.data.isDisability = data.data.isDisability === 1 ? '是' : '否';
                                data.data.isSole = data.data.isSole === 1 ? '是' : '否';
                                data.data.isMartyr = data.data.isMartyr === 1 ? '是' : '否';
                                data.data.isRuralInfirm = data.data.isRuralInfirm === 1 ? '是' : '否';
                                data.data.isOrphan = data.data.isOrphan === 1 ? '是' : '否';
                                data.data.isLowField = data.data.isLowField === 1 ? '是' : '否';
                                data.data.isFilingCard = data.data.isFilingCard === 1 ? '是' : '否';
                                data.data.isLoad = data.data.isLoad === 1 ? '是' : '否';
                                data.data.isAccident = data.data.isAccident === 1 ? '是' : '否';
                                data.data.isJoinLoad = data.data.isJoinLoad === 1 ? '是' : '否';

                            }
                            $scope.vm.baseInfo = data.data;
                        }
                    });

                    /**
                     * 获奖相关操作
                     */
                    // $scope.initAward = function () {
                    //     povertyCommonServer.getAward($scope.studentId).then(function (data) {
                    //         if (data.status) {
                    //             $scope.vm.awardList = data.data;
                    //         }
                    //     });
                    // };
                    // $scope.initAward();



                    /**
                     * 上传奖学金附件
                     */
                    (function () {
                        var uploader = $scope.uploader = new FileUploader({
                            url: ROOT + '/povertyStudent/uploadAwardAttachment',
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
                            //var _repsonse=angular.toJson(response);
                            if (response.status) {
                                tools.alertSuccess('上传成功');
                                $scope.vm.addAward.attachURL = response.data;
                            } else {
                                tools.alertError('上传失败');
                            }
                        };
                    })();
                    $scope.removeAward = function (id) {
                        povertyStudentServer.removeAward(id).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('删除成功');
                                $scope.initAward();
                            }
                        });
                    };

                    /**
                     * 处分相关操作
                     */
                    // $scope.initPunishment = function () {
                    //     povertyCommonServer.getPunishment($scope.studentId).then(function (data) {
                    //         if (data.status) {
                    //             $scope.vm.punishmentList = data.data;
                    //         }
                    //     });
                    // };
                    // $scope.initPunishment();

                    $scope.removePunishment = function (id) {
                        povertyStudentServer.removePunishment(id).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('删除成功');
                                $scope.initPunishment();
                            }
                        });
                    };

                    /**
                     * 家庭成员相关操作
                     */
                    $scope.initFamily = function () {
                        povertyCommonServer.getFamily($scope.studentId).then(function (data) {
                            if (data.status) {
                                $scope.vm.familyList = data.data;
                            }
                        });
                    };
                    $scope.initFamily();
                    $scope.addFamilyShow = function () {
                        $scope.vm.addFamily = {
                            studentId: $scope.studentId
                        };
                        $scope.vm.familySubmit = false;
                        $('#addFamily').modal('show');
                        $scope.addFamily = function () {
                            $scope.vm.familySubmit = true;
                            if ($scope.vm.familyForm.$valid) {
                                povertyStudentServer.addFamily($scope.vm.addFamily).then(function (data) {
                                    if (data.status) {
                                        tools.alertSuccess('添加成功');
                                        $scope.initFamily();
                                        $('#addFamily').modal('hide');
                                    }
                                });
                            }
                        };
                    };
                    $scope.removeFamily = function (id) {
                        povertyStudentServer.removeFamily(id).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('删除成功');
                                $scope.initFamily();
                            }
                        });
                    };

                    /**
                     * 资助情况相关操作
                     */
                    $scope.initSubsidy = function () {
                        povertyCommonServer.getSubsidy($scope.studentId).then(function (data) {
                            if (data.status) {
                                $scope.vm.subsidyList = data.data;
                            }
                        });
                    };
                    $scope.initSubsidy();
                    $scope.addSubsidyShow = function () {
                        $scope.vm.addSubsidy = {
                            studentId: $scope.studentId
                        };
                        $scope.vm.subsidySubmit = false;
                        $('#addSubsidy').modal('show');
                        $scope.addSubsidy = function () {
                            $scope.vm.subsidySubmit = true;
                            if ($scope.vm.subsidyForm.$valid) {
                                povertyStudentServer.addSubsidy($scope.vm.addSubsidy).then(function (data) {
                                    if (data.status) {
                                        tools.alertSuccess('添加成功');
                                        $scope.initSubsidy();
                                        $('#addSubsidy').modal('hide');
                                    }
                                });
                            }
                        };
                    };
                    $scope.removeSubsidy = function (id) {
                        povertyStudentServer.removeSubsidy(id).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('删除成功');
                                $scope.initSubsidy();
                            }
                        });
                    };

                    /**
                     * 保存信息
                     */
                    $scope.saveInfo = function () {

                        $scope.vm.baseInfo.isComplete = 1;
                        if ($scope.vm.baseForm.$valid) {
                            $scope.vm.baseSubmit = true;
                            povertyStudentServer.updateStudentInfo($scope.vm.baseInfo).then(function (data) {
                                if (data.status) {
                                    tools.alertSuccess('修改成功');
                                    $rootScope.isComplete = 1;
                                }
                                $scope.vm.baseSubmit = false;
                            });
                        } else {
                            tools.alertError('请填写完整信息');
                        }
                    };
                    povertyCommonServer.getMaxStatus().then(function (data) {
                        if (data.status) {
                            $rootScope.bigStatus = data.data.status;
                            $rootScope.processName = data.data.processName;
                            $rootScope.lastTime = data.data.lastTime;
                        }
                    });
                }]
        };
    }]);
})();