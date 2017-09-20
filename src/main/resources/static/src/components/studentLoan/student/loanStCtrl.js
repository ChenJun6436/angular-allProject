/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.loanSt').controller('loanStCtrl',loanStCtrl);

    loanStCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'httpServer',
        '$state',
        '$timeout'
    ];

    function loanStCtrl($scope, $rootScope, tools, httpServer, $state ,$timeout) {
        $scope.vm = {
            loanId:null,
            loanEndTime : null,
            loanCreateTime : null,
            loanApMoney : null,
            dis:false

        };
        /**
         * 获取学生申请页面的返回值，3个时间
         * */
        httpServer.get('/loan/newest').then(function (res) {
            console.log(res)
            $scope.vm.loanId = res.data.id;
            $scope.vm.loanEndTime = res.data.endTime;
            $scope.vm.loanCreateTime = res.data.createTime;
        });
        /**
         * 点击申请，发送post请求
         * */
        $scope.vm.doApplyLoan = function () {
            if($scope.vm.loanApMoney===''){
                tools.alertError( '申请金额不能为空');
            }else if(tools.number($scope.vm.loanApMoney)){
                var loanId = $scope.vm.loanId+"";
                var money = parseInt($scope.vm.loanApMoney);
                httpServer.put('/loan/application',{'loanId':loanId,'appliedAmount': money })
                    .then(function (data) {
                        $scope.vm.dis = true;
                        if(data.status=false){
                            tools.alertError('申请失败');
                        }else if(data.status=true){
                            if(data.code===9000){
                                tools.alertSuccess('预申请成功');
                            }else if(data.code===9002){
                                tools.alertError('该贷款项已停止申请');
                            }else if(data.code===9002){
                                tools.alertError('请勿重复申请贷款');
                            }
                        }
                    });
            }else {
                tools.alertError('申请金额格式错误');
            }
        };
    }
})();