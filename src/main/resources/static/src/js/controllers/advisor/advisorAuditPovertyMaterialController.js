/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('advisorAuditPovertyMaterialController', ['$scope', '$rootScope', '$cookies', '$state', 'advisorServer', 'commonServer', 'NgTableParams', 'tools',
        function ($scope, $rootScope, $cookies, $state, advisorServer, commonServer, NgTableParams, tools) {
            $scope.vm = {
                tableFlag: 0
            };
            /**
             * 初始化审核列表
             */
            advisorServer.getCheckMaterialList().then(function (data) {
                if (data.status) {
                    data.data.dataList=[];
                    $scope.vm.tableFlag = data.data.dataList.length === 0 ? 2 : 1;
                    $scope._data = data.data.dataList;
                    $scope.flag=true;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope._data,
                        counts: [10, 15, 20, 30]
                    });
                    /**
                     * 辅导员审核学生信息
                     * @param id
                     * @param e
                     */
                    $scope.checkStudentInfo = function (id, e) {
                        var _status = parseInt(angular.element(e.target).attr('data-status'));
                        if($scope.flag){
                            $scope.flag=false;
                            advisorServer.checkStudentInfo({
                                'status': _status,
                                'studentId': id
                            }).then(function (data) {
                                $scope.flag=true;
                                if (data.status) {
                                    tools.alertSuccess($rootScope, '审核成功');
                                    var _newPage = $scope.tableParams.page();
                                    var _count = $scope.tableParams.count();
                                    //从$scope._data中去除审核通过的学生
                                    angular.forEach($scope._data, function (data, index) {
                                        data.studentId === id && $scope._data.splice(index, 1);
                                    });
                                    if (((_newPage - 1) * $scope.tableParams.count() + 1) >= $scope.tableParams.settings().total) {
                                        _newPage = _newPage - 1;
                                    }
                                    $scope.tableParams = new NgTableParams({
                                        page: _newPage,
                                        count: _count
                                    }, {
                                        dataset: $scope._data,
                                        counts: [10, 15, 20, 30]
                                    });
                                }
                            }, function () {
                                $scope.flag=true;
                            });
                        }

                    };
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        }
    ]);
})();
