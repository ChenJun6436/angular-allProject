/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.grantApply').controller('grantApplyFillCtrl',grantApplyFillCtrl);

    grantApplyFillCtrl.$inject = [
        '$scope',
        'FileUploader',
        'tools',
        'ROOT',
        'grantsStudentServer',
        '$stateParams',
        '$cookies',
        'grantsCommonServer',
        '$state'
    ];

    function grantApplyFillCtrl($scope, FileUploader, tools, ROOT ,grantsStudentServer, $stateParams ,$cookies, grantsCommonServer, $state) {
        $scope.vm = {
            applyInfos : {}
        };
        //获取助学金id
        $scope.vm.applyInfos.grantsUuid = $stateParams.des;
        //获取学号
        var cookie = $cookies.get('user');
        var studentSn = angular.fromJson(cookie).name;
        $scope.vm.applyInfos.studentSn = studentSn;
        //带领人学号查姓名   /grantsCommon/getAgentName/{sn}

        //是否带领切换
        $scope.changeRadio = function () {
            $scope.daiLing = !$scope.daiLing;
            if($scope.daiLing){
                $scope.vm.applyInfos.isAgent = 1;
                $scope.vm.applyInfos.bankcard  = null;
            }else {
                $scope.vm.applyInfos.isAgent = 0;
                $scope.vm.applyInfos.agentBankcard = null;
                $scope.vm.applyInfos.agentSn = null;
            }
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
                console.log(response)
                if (response.status) {
                    tools.alertSuccess('上传成功');
                    $scope.vm.showFileList();
                } else {
                    tools.alertError('上传失败');
                }
            };
        })();
        //删除上传的文件
        $scope.vm.delFile = function (id) {
            var id = id;
            grantsCommonServer.delGrantsComFile(id).then(function (data) {
                console.log(data)
                $scope.vm.showFileList();
            });
        };
        //提交申请
        $scope.vm.applyGrants = function () {
            grantsStudentServer.grantsApply($scope.vm.applyInfos).then(function (data) {
                console.log(data);
                if(data.status){
                    tools.alertSuccess('申请成功');
                }else {
                    tools.alertError(data.message);
                }
            });
        };
        // //银行卡校验
        // $('#mybankCar').onblur(function () {
        //     if($scope.vm.applyInfos.agentBankcard ){
        //         var bankcar = $scope.vm.applyInfos.agentBankcard;
        //         grantsCommonServer.checkBankcar(bankcar).then(function (data) {
        //             if(data.status){
        //                 grantsStudentServer.grantsApply($scope.vm.applyInfos).then(function (data) {
        //                     console.log(data);
        //                     if(data.status){
        //                         tools.alertSuccess('申请成功');
        //                     }else {
        //                         tools.alertError('申请失败，请重新申请');
        //                     }
        //                 });
        //             }else{
        //                 tools.alertError('银行卡号填写错误');
        //             }
        //         });
        //     }else {
        //         console.log(bankcar)
        //     }
        // });
        // $('#otherBankCar').onblur(function () {
        //     if($scope.vm.applyInfos.bankcard){
        //         var bankcar = $scope.vm.applyInfos.bankcard;
        //         grantsCommonServer.checkBankcar(bankcar).then(function (data) {
        //             if(data.status){
        //                 grantsStudentServer.grantsApply($scope.vm.applyInfos).then(function (data) {
        //                     console.log(data);
        //                     if(data.status){
        //                         tools.alertSuccess('申请成功');
        //                     }else {
        //                         tools.alertError('申请失败，请重新申请');
        //                     }
        //                 });
        //             }else{
        //                 tools.alertError('银行卡号填写错误');
        //             }
        //         });
        //     }else {
        //         console.log(bankcar)
        //     }
        // });
        // //隐藏上传按钮
        // $scope.vm.upFile = function () {
        //     $scope.vm.che = true;
        // };
    }
})();