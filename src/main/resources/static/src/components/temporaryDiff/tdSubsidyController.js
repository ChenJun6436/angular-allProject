/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.temporaryDiff').controller('tdSubsidyController', tdSubsidyController);

    tdSubsidyController.$inject = [
        '$scope',
        '$filter',
        'temporaryDiffServer',
        'tools',
        'NgTableParams',
        'FileUploader',
        '$element',
        'ROOT'];

    function tdSubsidyController($scope, $filter, temporaryDiffServer, tools, NgTableParams, FileUploader, $element, ROOT) {
        $scope.vm = {
            tableFlag: 0,
            levels: ['特别困难', '困难', '一般困难', '不困难']
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            temporaryDiffServer.getAllTemDiff().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.vm.studentList.map(function (item) {
                        item.handleTime = $filter('date')(item.handleTime, 'yyyy-MM-dd')
                        return true
                    })
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                    // _flag for check init
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr = value;
                            if (_flag) {
                                $scope.initCheck();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 新增临时困难补助
         */
        $scope.deleteStu = function (id) {
         temporaryDiffServer.deleteTemporarySubsidizeSingle(id).then(function (data) {
         if(data.status) {
         $scope.init()
         }
         })
         }
        $scope.addSubModalShow = function (grants) {
            $('#addSub').modal({backdrop: 'static', keyboard: false});
            //初始化提交验证为false
            $scope.vm.addSubSubmit = false;
            $scope.vm.temporarySub = {};
            $scope.vm.temporarySub.title = '新增临时困难补助';

            $scope.addSub = function () {
                $scope.vm.addSubSubmit = true;
                var n = Number($scope.vm.temporarySub.amount);
                if (isNaN(n))
                {
                    tools.alertError('额度请填写数字');
                    $scope.vm.addSubSubmit = false;
                    return false
                }
                if ($scope.vm.subForm.$valid) {
                    temporaryDiffServer.addTemDiff($scope.vm.temporarySub).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('保存成功');
                            $scope.init();
                        }
                        $('#addSub').modal('hide');
                    });
                } else {
                    tools.alertError('请填写完整信息');
                }
            };
        };
        $scope.editSubModalShow = function (student) {
            $('#editSub').modal({backdrop: 'static', keyboard: false});
            //初始化提交验证为false
            $scope.vm.editSubSubmit = false;
            $scope.vm.temporaryEditSub = {};
            $scope.vm.temporaryEditSub.id = student.id
            $scope.vm.temporaryEditSub.studentSn = student.studentSn
            $scope.vm.temporaryEditSub.amount = student.amount
            $scope.vm.temporaryEditSub.reason = student.reason
            $scope.editSub = function () {
                $scope.vm.editSubSubmit = true;
                var n = Number($scope.vm.temporaryEditSub.amount);
                if (isNaN(n))
                {
                    tools.alertError('额度请填写数字');
                    $scope.vm.addSubSubmit = false;
                    return false
                }
                if ($scope.vm.editSubForm.$valid) {
                    temporaryDiffServer.putTemporarySubsidize($scope.vm.temporaryEditSub).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('保存成功');
                            $scope.init();
                        }
                        $('#editSub').modal('hide');
                    });
                } else {
                    tools.alertError('请填写完整信息');
                }
                $scope.vm.editSubSubmit = false;
            };
        };
        /**
         * 批量处理
         */
        $scope.dealAll = function (flag) {

            if ($scope.checkboxes.choosedStudent.length > 0) {

                $scope.vm.isDealingAll = true;

                angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                    value.isPass = flag;
                });
                var array = $scope.checkboxes.choosedStudent.map(function (item) {
                    return item.id
                })
                temporaryDiffServer.deleteTemporarySubsidize(array).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('通过成功');
                        $scope.init();
                    }
                    $scope.vm.isDealingAll = false;
                });
            } else {
                tools.alertError('请先选择要批量处理的学生');
            }
        };
        $scope.initCheck = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes.checked;
            }, function (value) {
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.id] = value;
                });
            });

            // watch for data checkboxes
            $scope.$watch(function () {
                return $scope.checkboxes.items;
            }, function (values) {
                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr.length;
                $scope.checkboxes.choosedStudent = [];
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.id] && $scope.checkboxes.choosedStudent.push(item);
                    checked += ($scope.checkboxes.items[item.id]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.id]) || 0;
                });
                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }
                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                console.log($scope.checkboxes.choosedStudent)
            }, true);
        };

        /**
         * 上传excel
         * */
        (function () {
            var uploader = $scope.uploader = new FileUploader({
                url: ROOT + '/temporarySubsidize/batch',
                autoUpload: true,
                removeAfterUpload: true,
                queueLimit: 1
            });

            uploader.onAfterAddingFile = function (fileItem) {

                var lastName = fileItem.file.name.slice((fileItem.file.name.lastIndexOf('.')+1)).toLowerCase();
                var _arr = ['xlsx', 'xls'];

                if (_arr.indexOf(lastName) === -1) {
                    tools.alertError('请上传【xlsx,xls】等规定格式的excel文件');
                    uploader.clearQueue();
                }
                if (fileItem.file.size > 20971520) {
                    tools.alertError('上传文件大小不得大于15M');
                    uploader.clearQueue();
                }
            };

            uploader.onCompleteItem = function (fileItem, response) {
                if (response.status) {
                    tools.alertSuccess('上传成功');
                    $scope.init();
                } else {
                    tools.alertError(response.message);
                }
            };
        })();




    }
})();
