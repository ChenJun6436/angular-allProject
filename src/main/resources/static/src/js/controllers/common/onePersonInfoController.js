/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('onePersonInfoController', ['$scope', '$rootScope', 'commonServer', '$stateParams',
        function ($scope, $rootScope, commonServer, $stateParams) {
            $scope.vm = {
                studentDetailInfo: {}
            };
            /**
             * 查看学生申请材料
             */
            var _studentId=$stateParams.studentId;
            if(_studentId==='201*******013'||_studentId==='201*******007'||_studentId==='201*******014'||_studentId==='201*******012'){
                _studentId='201*******013';
            }else if(_studentId==='201*******018'||_studentId==='201*******035'||_studentId==='201*******040'||_studentId==='201*******006'){
                _studentId='201*******018';
            }else if(_studentId==='201*******033'||_studentId==='201*******036'||_studentId==='201*******015'){
                _studentId='201*******033';
            }else{
                _studentId='201*******017';
            }
            commonServer.getStudentInfo({
                studentId: _studentId
            }).then(function (data) {
                if (data.status) {
                    $scope.vm.studentDetailInfo = data.data;
                    $scope.vm.studentDetailInfo.studentInfo.gender = data.data.studentInfo.gender === 1 ? '男' : '女';
                    $scope.vm.studentDetailInfo.studentInfo.isDisability = data.data.studentInfo.isDisability === 1 ? '是' : '否';
                    $scope.vm.studentDetailInfo.studentInfo.isSole = data.data.studentInfo.isSole === 1 ? '是' : '否';
                    $scope.vm.studentDetailInfo.studentInfo.isMartyr = data.data.studentInfo.isMartyr === 1 ? '是' : '否';
                    $scope.vm.studentDetailInfo.studentInfo.isLowField = data.data.studentInfo.isLowField === 1 ? '是' : '否';
                    $scope.vm.studentDetailInfo.studentInfo.isFilingCard = data.data.studentInfo.isFilingCard === 1 ? '是' : '否';
                    $scope.vm.studentDetailInfo.studentInfo.isLoad = data.data.studentInfo.isLoad === 1 ? '是' : '否';
                    $scope.vm.studentDetailInfo.studentInfo.isAccident = data.data.studentInfo.isAccident === 1 ? '是' : '否';
                }
            });
        }
    ]);
})();
