/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.loanCc').controller('loanCcCtrl',loanCcCtrl);

    loanCcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'FileUploader',
        'NgTableParams'
    ];

    function loanCcCtrl($scope, tools, ROOT, grantsCommonServer, FileUploader, NgTableParams) {
        $scope.vm = {
            nowApList : [1,2,3,4,5,6,7,8,9,10],
        };
        /**
         * 上传表格
         * */
        (function () {
            var uploader = $scope.uploader = new FileUploader({
                url: ROOT+'/loan/passed/studentList',
                autoUpload: true,
                removeAfterUpload: true,
                queueLimit: 1,
                method:'put'
            });
            uploader.onAfterAddingFile = function (fileItem) {
                console.log(fileItem)
                var lastName = fileItem.file.name.slice((fileItem.file.name.lastIndexOf('.')+1)).toLowerCase();
                var _arr = ['xls', 'xlsx'];
                if (_arr.indexOf(lastName) === -1) {
                    tools.alertError('请上传【xlsx,xls】规定格式文件');
                    uploader.clearQueue();
                }
            };
            uploader.onCompleteItem = function (fileItem, response) {
                console.log(response)
                if (response.status) {
                    tools.alertSuccess('上传成功');
                    $scope.init();
                } else {
                    tools.alertError('上传失败');
                }
            };
        })();
        /**
         * 获取列表
         */
        $scope.init = function () {
            grantsCommonServer.loanList().then(function (data) {
                $scope.vm.loanList = data.data;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset:  $scope.vm.loanList }
                );
            });
        };
        $scope.init();

    }
})();