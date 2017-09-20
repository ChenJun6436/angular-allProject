/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.controller('noticeListController', ['$scope', '$rootScope', '$cookies', '$state', 'commonServer', 'schoolServer', 'tools',
        function ($scope, $rootScope, $cookies, $state, commonServer, schoolServer, tools) {
            $scope.vm = {
                tableFlag: 0,
                bOff: true
            };
            $scope.init = function () {
                $scope.vm.getNoticeList = {
                    pageIndex: $scope.paginationConf.currentPage,
                    pageSize: $scope.paginationConf.itemsPerPage
                };
                $scope.vm.pageFlag = true;
                if ($scope.vm.bOff) {
                    $scope.vm.bOff = false;
                    //$scope.vm.getNoticeList.pageIndex >= $scope.paginationConf.numberOfPages && ($scope.vm.getNoticeList.pageIndex = $scope.paginationConf.numberOfPages);
                    commonServer.getNoticeList($scope.vm.getNoticeList).then(function (data) {
                        if (data.status) {
                            //console.log($scope.paginationConf.itemsPerPage)
                            $scope.vm.bOff = true;
                            $scope.vm.noticeList = data.data.dataList;
                            $scope.vm.totalNum = data.data.totalCount;
                            $scope.vm.tableFlag = data.data.totalCount === 0 ? 2 : 1;
                            $scope.paginationConf.totalItems = data.data.totalCount;
                            $scope.paginationConf.currentPage = data.data.pageIndex;
                            $scope.paginationConf.itemsPerPage = data.data.pageSize;
                        } else {
                            $scope.vm.tableFlag = 2;
                            $scope.vm.bOff = true;
                        }
                    });
                }
            };
            $scope.paginationConf = {
                currentPage: 1,
                itemsPerPage: 15
            };
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', function () {
                setTimeout(function () {
                    $scope.init();
                }, 0);
            });
            /**
             * 跳转至公告详情
             * @param id
             */
            $scope.getNoticeDetail = function (id) {
                window.open('#/oneNotice/' + id);
            };
            $scope.removeNotice = function (id) {
                schoolServer.removeNotice({
                    id: id
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess($rootScope, '删除成功');
                        $scope.init();
                    }
                });
            };
        }
    ]);
})();