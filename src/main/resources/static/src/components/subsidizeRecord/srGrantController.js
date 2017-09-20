/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').controller('srGrantController', srGrantController);

    srGrantController.$inject = [
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

    function srGrantController($scope, $rootScope, analysisEcharts, grantsAnalyseServer, grantsCommonServer, subsidizeRecordCommonServer, commonsServer, tools, THEME, loading, NgTableParams) {
        $scope.vm = {
            tableFlag: 0,
            college: '',
            collegeList: [],
            grade: '',
            gradeList: [],
            gradeChoosed: '',
            collegeChoosed: '',
        };
        $scope.init = function () {
            commonsServer.getCommonsCollege().then(function (data) {
                if(data.status) {
                    $scope.vm.college = data.data[0].name;
                    $scope.vm.collegeList = angular.copy(data.data.map(function(value){
                        return value.name;
                    }));
                    $scope.vm.collegeChoosed = $scope.vm.college;
                    commonsServer.getCommonsSchoolYearCurrent().then(function (data) {
                        if(data.status) {
                            $scope.vm.grade = data.data.num.toString();
                            $scope.vm.gradeChoosed = $scope.vm.grade + '级';
                            $scope.getSubsidizeHistoryGrantsList($scope.vm.collegeChoosed,$scope.vm.grade);

                        }
                    })
                }
            });

        };
        $scope.getSubsidizeHistoryGrantsList = function (college,grade) {
            subsidizeRecordCommonServer.getSubsidizeHistoryGrantsList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        }
        $scope.init();
        $scope.getAllGrade = function () {
            commonsServer.getCommonsGradeAll().then(function (data) {
                if(data.status) {
                    $scope.vm.gradeList = angular.copy(data.data.map(function(value){
                        return value.name + '级';
                    }));
                }
            })
        };
        $scope.vm.gradechange = function (val) {
            $scope.getSubsidizeHistoryGrantsList($scope.vm.collegeChoosed, val.substring(0, val.length-1))
        }
        $scope.vm.collegechange = function () {
            $scope.getSubsidizeHistoryGrantsList($scope.vm.collegeChoosed, $scope.vm.gradeChoosed.substring(0, $scope.vm.gradeChoosed.length-1))
        }
        $scope.getAllGrade();
        $scope.download = function (college, grade) {
            subsidizeRecordCommonServer.getSubsidizeHistoryGrantsListExcel([college, grade.substring(0, grade.length-1)]).then(function (data) {
                if (data.status) {
                    window.open(data.data.url);
                }
            });
        };

    }
})();