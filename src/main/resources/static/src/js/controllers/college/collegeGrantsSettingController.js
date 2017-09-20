/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/9/13
 * Time: 11:16
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('collegeGrantsSettingController', ['$scope', '$rootScope', 'tools', '$state', 'schoolServer', 'NgTableParams', 'commonServer',
        function ($scope, $rootScope, tools, $state, schoolServer, NgTableParams, commonServer) {
            $scope.vm = {
                tableFlag: 0,
                showTable:0,
                processTimeList:{
                    "message": "国家助学金批次",
                    "status": true,
                    "data": {
                        "applyStart": "2016-08-18",
                        "applyEnd": "2016-08-18",
                        "status": 1,
                        "collegeEnd": "2016-08-22",
                        "discussEnd": "2016-08-22",
                        "collegeOpenStart": "2016-08-18",
                        "collegeOpenEnd": "2017-08-22",
                        "advisorEnd": "2016-08-22",
                        "collegeStart": "2016-08-15",
                        "schoolEnd": "2017-08-22",
                        "schoolOpenStart": "2017-08-22",
                        "schoolOpenEnd": "2017-08-22",
                        "schoolStart": "2017-08-22",
                        "advisorStart": "2016-08-15",
                        "discussStart": "2016-08-18",
                        "id": 1,
                        "processName":"国家助学金批次"
                    }
                }
            };
            /**
             * 初始化信息
             */
            $scope.init = function () {
                commonServer.getGrantsSettings().then(function (data) {
                    if (data.status) {
                        $scope.vm.data = data.data;
                        $scope.vm.grantsList = data.data.dataList;
                        $scope.vm.tableFlag = 1;
                        $scope.tableParams = new NgTableParams({
                            page: 1,
                            count: 15
                        }, {
                            dataset: $scope.vm.grantsList,
                            counts: [10, 15, 20, 30]
                        });
                    }
                });
            };
            $scope.init();
            $scope.edit = function (){
                $('#addGrants').modal('show');
                $scope.addGrants = function () {
                    tools.alertSuccess($rootScope, '保存成功');
                    $('#addGrants').modal('hide');
                };
            };
        }
    ]);
})();
