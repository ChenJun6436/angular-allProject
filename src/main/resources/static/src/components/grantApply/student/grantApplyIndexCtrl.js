/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantApply').controller('grantApplyIndexCtrl', grantApplyIndexCtrl);

    grantApplyIndexCtrl.$inject = [
        '$scope',
        '$state',
        'grantsStudentServer',
        'tools',
        'ROOT',
        'NgTableParams',
        '$cookies',
        'grantsCommonServer',
        'FileUploader'
    ];

    function grantApplyIndexCtrl($scope,$state,grantsStudentServer, tools, ROOT, NgTableParams,$cookies,grantsCommonServer,FileUploader) {
        $scope.vm = {
            showFilter:false,
            modal:{},
            reUp:false,
            ckReason:false
        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //获取学号
        var cookie = $cookies.get('user');
        var studentSn = angular.fromJson(cookie).name;
        //获取困难等级
        grantsCommonServer.studentPoorLevel(studentSn).then(function (data) {
            $scope.vm.studentPoorLevel = data.data;
        });
        /**
         * 获取助学金列表
         * */
        $scope.vm.innit = function () {
            grantsStudentServer.grantsList().then(function (data) {
                console.log(data);
                var a = [];
                a.push(data.data);
                $scope.vm.tableParams = new NgTableParams({},
                    { dataset: a }
                );
            });
        };
        $scope.vm.innit();
        /**
         * 查看助学金详情
         * */
        $scope.vm.showModal = function (des) {
            $scope.vm.showDetail = true;
            $scope.des = des;
            console.log(des);
        };
        $scope.vm.doDetailNo = function () {
            $scope.vm.showDetail = false;
        };
        /**
         * 跳转到申请助学金页面
         * */
        $scope.vm.goApplyst = function (des) {
            console.log(des.uuid)
            var uuid = des.uuid;
            $state.go('main.grantApplyFill',{des:uuid});
        };
        /**
         * 重新提交材料
         * */
        $scope.vm.showReUploadFile = function (des) {
            $('#motai').modal('show');
            $scope.vm.reUp = true;
            $scope.vm.ckReason = false;
            $scope.vm.modal.title = '重新上传材料';
            $scope.vm.saveReUp = function () {
                var dea = {processId : des.processId, taskId: des.processId};
                grantsStudentServer.reUploadFile(dea).then(function (data) {
                    if(data.status){
                        tools.alertSuccess('上传成功');
                    }else{
                        tools.alertError('上传失败')
                    }
                });
            }
        };
        /**
         * 查看驳回原因
         * */
        $scope.vm.showRejectReason = function (des) {
            $('#motai').modal('show');
            $scope.vm.reUp = false;
            $scope.vm.ckReason = true;
            $scope.vm.modal.title = '查看驳回原因';
            $scope.vm.RejectReason = des.rejectReason;
        };
        //获取上传成功的文件
        $scope.vm.showFileList = function () {
            grantsCommonServer.grantsComFile().then(function (data) {
                $scope.vm.comFileList = data.data;
            });
        };
        $scope.vm.showFileList();
        //上传附件
        (function () {
            var uploader = $scope.uploader = new FileUploader({
                url: ROOT+'/grantsCommon/uploadFile',
                autoUpload: true,
                removeAfterUpload: true,
                queueLimit: 1,
                method:'post'
            });
            uploader.onAfterAddingFile = function (fileItem) {
                console.log(fileItem)
                var lastName = fileItem.file.name.slice((fileItem.file.name.lastIndexOf('.')+1)).toLowerCase();
                var _arr = ['doc', 'docx', 'pdf','xlsx','xls','jpg','bmp','png'];
                if (_arr.indexOf(lastName) === -1) {
                    tools.alertError('请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】文件');
                    uploader.clearQueue();
                }
            };
            uploader.onCompleteItem = function (fileItem, response) {
                if (response.status) {
                    tools.alertSuccess('文件格式正确');
                    $scope.vm.showFileList();
                } else {
                    tools.alertError('文件上传失败');
                }
            };
        })();
        //删除上传的文件
        $scope.vm.delFile = function (id) {
            var id = id;
            grantsCommonServer.delGrantsComFile(id).then(function (data) {
                $scope.vm.showFileList();
            });
        };
    }
})();
