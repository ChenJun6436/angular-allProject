/**
 * Created by chenjun on 2017/5/24.111111111111111111111111111111111111111111111111111111111
 */
(function () {
    'use strict';
    angular.module('app.grantAdminCc').controller('grantAdminConfigCcCtrl',grantAdminConfigCcCtrl);
    grantAdminConfigCcCtrl.$inject = [
        '$scope',
        'grantsSchoolServer',
        'NgTableParams',
        'grantsCommonServer',
        'grantsCollegeServer',
        'tools',
        '$state'
    ];

    function grantAdminConfigCcCtrl($scope, grantsSchoolServer, NgTableParams, grantsCommonServer, grantsCollegeServer, tools, $state) {
        $scope.vm = {
            tableFlag: 0
        };


        /**
         * 初始化助学金列表信息
         */
        $scope.init = function () {
            grantsCommonServer.grantsList().then(function (data) {
                if (data.status) {
                    $scope.vm.grantsList = data.data;
                    console.log($scope.vm.grantsList)
                    angular.forEach(data.data, function (value, key) {
                        value.index = key + 1;
                    });
                    $scope.vm.tableParams = new NgTableParams({
                        count: 10
                    },{
                        dataset: $scope.vm.grantsList
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
            /**
             *获取学年,设置默认学年
             */
            grantsCollegeServer.grantsSchoolYear().then(function (data) {
                console.log('默认学年')
                console.log(data)
                $scope.vm.schoolYearList = data.data;
                $scope.vm.schoolYear=$scope.vm.schoolYearList[0].name;
            });
            /**
             *学校总人数 + 已认定经济困难人数
             */
            grantsCollegeServer.studentNumInfo().then(function (data) {
                console.log(data);
                if(data.status){
                    $scope.vm.studentNum = data.data;
                }
            });
        };
        $scope.init();

        /**
         * 初始化时间
         */
        $scope.initTime = function () {
            $scope.vm.startTimeOptions = {
                minDate: new Date(),
                maxDate: new Date($scope.vm.currentGrants.endTime)
            };
            $scope.vm.endTimeOptions = {
                minDate: new Date($scope.vm.currentGrants.startTime)
            };
            $scope.$watch('vm.currentGrants.endTime', function (to) {
                $scope.vm.startTimeOptions.maxDate = new Date(to);
            });
            $scope.$watch('vm.currentGrants.startTime', function (to) {
                $scope.vm.endTimeOptions.minDate = new Date(to);
            });
        };


        /**
         * 编辑助学金信息
         */
        $scope.vm.grantsModalShow = function (des) {
            $('#addGrants').modal({backdrop: 'static', keyboard: false});
            //初始化提交验证为false
            $scope.vm.grantsSubmit = false;

            var _action;
            /**
             * 如果传入的有参数des，助学金修改
             */
            if (des) {
                $scope.vm.currentGrants = angular.copy(des);
                console.log('des')
                $scope.initTime();
                //如果grants.level[0].level != null 表示分级，否则表示不分级
                $scope.vm.currentGrants.type = $scope.vm.currentGrants.level != null ? 1 : 0;
                $scope.vm.currentGrants.title = '编辑助学金';
                $scope.addGrants = function () {
                    $scope.vm.grantsSubmit = true;
                    console.log( $scope.vm.schoolYear)
                    console.log('打印currentGrants')
                    console.log($scope.vm.currentGrants);
                    $scope.vm.currentGrants.schoolYear =  $scope.vm.schoolYear;
                    if ($scope.vm.grantsForm.$valid) {
                        grantsSchoolServer.grantsUpdate($scope.vm.currentGrants).then(function (data) {
                            console.log('打印请求后的data')
                            console.log(data)
                            if (data.status) {
                                tools.alertSuccess('修改成功');
                                $scope.init();
                            }
                            $('#addGrants').modal('hide');
                        });
                    } else {
                        tools.alertError('请填写完整信息');
                    }
                };
            }
            /**
             * 如果传入的没有参数des，添加助学金
             */
            else
                {
                $scope.vm.currentGrants = {
                    type: 0,
                    level: [{levelName: null}]
                }

                $scope.initTime();
                $scope.vm.currentGrants.type = 0;
                $scope.vm.currentGrants.title = '新增助学金';
                $scope.addGrants = function () {
                    $scope.vm.grantsSubmit = true;
                    $scope.vm.currentGrants.schoolYear =  $scope.vm.schoolYear;
                    console.log('添加发送的currentGrants')
                    console.log($scope.vm.currentGrants);
                    console.log( $scope.vm.schoolYear)
                    if ($scope.vm.grantsForm.$valid) {
                        console.log($scope.vm.currentGrants);
                        grantsSchoolServer.grantsSave($scope.vm.currentGrants).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('添加成功');
                                console.log('currentGrants')
                                console.log($scope.vm.currentGrants);
                                $scope.init();
                            }
                            $('#addGrants').modal('hide');
                        });
                        console.log($scope.vm.currentGrants)
                    } else {
                        tools.alertError('请填写完整信息');
                    }
                };
            }
        };


        /**
         * 查看助学金信息
         */
        $scope.grantsDetailModalShow = function (des) {
            $('#grantsDetail').modal('show');

            $scope.vm.grantsDetail = des;

        };

        /**
         * 监听radio切换
         */
        $scope.typeChange = function () {
            if (parseInt($scope.vm.currentGrants.type) === 1) {
                $scope.vm.currentGrants.level[0].levelNameName= '一等';
            } else if (parseInt($scope.vm.currentGrants.type) === 0) {
                $scope.vm.currentGrants.level.push({levelName : null});
            }
        };

        /**
         * 添加等级
         */
        $scope.vm.addLevel = function () {
            if ($scope.vm.currentGrants.level.length < 4) {
                $scope.vm.currentGrants.level.push({levelName: '特等'});
            } else {
                tools.alertError('最多添加四个等级');
            }
        };

        /**
         * 移除等级
         * @param index 等级索引
         */
        $scope.removeLevel = function (index) {
            if ($scope.vm.currentGrants.level.length > 1) {
                $scope.vm.currentGrants.level.splice(index, 1);
            } else {
                tools.alertError('等级至少保留一个');
            }
        };

        /**
         * 删除助学金
         * @param uuid  助学金ID
         */
        $scope.vm.delete = function (des) {
            var uuid = des.id;
            grantsSchoolServer.grantsDelete(uuid).then(function (data) {
                if (data.status) {
                    tools.alertSuccess('删除成功');
                    //从$scope.vm.grantsList中去除删除的助学金
                    var index = des.index;
                    $scope.vm.grantsList.splice(index, 1);
                    $scope.init();
                }else{
                    tools.alertSuccess('操作失败');
                }
            });
        };
    /**
     * 点击新申请
     * */

        $scope.vm.newApplys = function (des) {
            if(des.newApplys.length){
                var grantsId = des.id;
                $state.go("main.grantAdminSchoolManerCc",{grantsId:grantsId},{reload : true});
            }else{
                tools.alertError("暂时没有新的申请");
            }
        };
    /**
     * 点击开始分配名额
     * */
        $scope.vm.mannerSchoolMount = function (des) {
            var grantsId = des.id;
            $state.go("main.grantAdminSchoolManerCc",{grantsId:grantsId},{reload : true});
        };
    };
})();