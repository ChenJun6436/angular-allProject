/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').controller('srGroupController', srGroupController);

    srGroupController.$inject = [
        '$scope',
        '$rootScope',
        'analysisEcharts',
        'grantsAnalyseServer',
        'grantsCommonServer',
        'subsidizeRecordCommonServer',
        'commonsServer',
        'tools',
        'THEME',
        'loading',
        'NgTableParams'];

    function srGroupController($scope, $rootScope, analysisEcharts, grantsAnalyseServer, grantsCommonServer, subsidizeRecordCommonServer, commonsServer, tools, THEME, loading, NgTableParams) {
        $scope.vm = {
            active: 0,
            collegeList: [],
            gradeList: [],
            gradeChoosed: '',
            collegeChoosed: '',
            grade: '',
            srEcon: {
                tableFlag: 0,
                college: '',
                studentList: [],
            },
            srGrant: {
                tableFlag: 0,
                college: '',
                studentList: [],
            },
            srEndeavor: {
                tableFlag: 0,
                college: '',
                studentList: [],
            }
        }
        /**
         * 修改nav active
         * @param val
         */
        $scope.changeNav = function (val) {
            $scope.vm.active = val;
        }
        $scope.init = function () {
            commonsServer.getCommonsCollege().then(function (data) {
                if(data.status) {
                    $scope.vm.college = data.data[0].name;
                    $scope.vm.collegeList = angular.copy(data.data.map(function(value){
                        return value.name;
                    }));
                    $scope.vm.collegeChoosed = $scope.vm.college;
                    $scope.getAllGrade(function () {
                        $scope.vm.gradeChoosed = $scope.vm.gradeList[0];
                        $scope.getSubsidizeHistoryData($scope.vm.collegeChoosed,$scope.vm.gradeChoosed.label);
                    });

                }
            });

        };
        $scope.getSubsidizeHistoryData = function (college,grade) {
           // 获取经济困难认定的结果
            subsidizeRecordCommonServer.getSubsidizeHistoryPovertyList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.srEcon.studentList = data.data;
                    $scope.vm.srEcon.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.vm.srEcon.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.srEcon.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.srEcon.tableFlag = 2;
                }
            });
            // 获取助学金认定的结果
            subsidizeRecordCommonServer.getSubsidizeHistoryGrantsList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.srGrant.studentList = data.data;
                    $scope.vm.srGrant.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.vm.srGrant.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.srGrant.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.srGrant.tableFlag = 2;
                }
            });
            // 获取励志奖学金
            subsidizeRecordCommonServer.getSubsidizeHistoryInspScholarshipList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.srEndeavor.studentList = data.data;
                    $scope.vm.srEndeavor.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.vm.srEndeavor.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.srEndeavor.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.srEndeavor.tableFlag = 2;
                }
            });

        }
        $scope.init();
        $scope.getAllGrade = function (callback) {
            commonsServer.getCommonsGradeAll().then(function (data) {
                if(data.status) {
                    $scope.vm.gradeList = angular.copy(data.data.map(function(value){
                        return {
                            name: value.name+'级',
                            label: value.name
                        };
                    }));
                    $scope.vm.gradeList.unshift({
                        name: '所有年级',
                        label: '-1'
                    })
                    callback && callback()
                }
            })
        };
        $scope.vm.gradechange = function (val) {
            console.log(val)
            $scope.getSubsidizeHistoryData($scope.vm.collegeChoosed, val.label)
        }
        $scope.vm.collegechange = function () {
            $scope.getSubsidizeHistoryData($scope.vm.collegeChoosed, $scope.vm.gradeChoosed.label)
        }

        $scope.download = function (college, grade) {
            if($scope.vm.active == 0) {
                subsidizeRecordCommonServer.getSubsidizeHistoryPovertyListExcel([college, grade.label]).then(function (data) {
                    if (data.status) {
                        var _download  = document.createElement('a');
                        _download.setAttribute('href',data.data);
                        _download.click();

                    }
                });
            }else if($scope.vm.active == 1) {
                subsidizeRecordCommonServer.getSubsidizeHistoryGrantsListExcel([college, grade.label]).then(function (data) {
                    if (data.status) {
                        var _download  = document.createElement('a');
                        _download.setAttribute('href',data.data);
                        _download.click();
                    }
                });
            }else if($scope.vm.active == 2) {
                subsidizeRecordCommonServer.getSubsidizeHistoryInspScholarshipListExcel([college, grade.label]).then(function (data) {
                    if (data.status) {
                        var _download  = document.createElement('a');
                        _download.setAttribute('href',data.data);
                        _download.click();
                    }
                });
            }



        };
    }
})();