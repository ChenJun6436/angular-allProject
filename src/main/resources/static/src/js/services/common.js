/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 公共部分
     */
    asApp.service('common', ['commonServer', 'studentServer', '$rootScope', 'tools',
        function (commonServer, studentServer, $rootScope, tools) {
            //省市县三级级联
            /*this.proPartyCounty = function ($scope) {
                //获取省列表
                commonServer.getProvince().then(function (data) {
                    if (data.status) {
                        if ($scope.vm.baseInfo.studentInfo.provinceId > 0) {
                            $scope.vm.provinceList = data.data;
                            $scope.vm.provinceChoosed = {
                                id: $scope.vm.baseInfo.studentInfo.provinceId,
                                name: $scope.vm.baseInfo.studentInfo.province
                            };
                        } else {
                            data.data.unshift({id: 0, name: '-请选择省份-'});
                            $scope.vm.provinceList = data.data;
                            $scope.vm.provinceChoosed = {id: 0, name: '-请选择省份-'};
                        }
                    }
                });
                //通过基本信息的省id获取市列表
                commonServer.getCityByProvinceId({
                    'provinceId': $scope.vm.baseInfo.studentInfo.provinceId
                }).then(function (data) {
                    if (data.status) {
                        $scope.vm.hasCity = true;
                        $scope.vm.cityList = data.data;
                        if ($scope.vm.baseInfo.studentInfo.cityId > 0) {
                            $scope.vm.cityChoosed = {
                                id: $scope.vm.baseInfo.studentInfo.cityId,
                                name: $scope.vm.baseInfo.studentInfo.city
                            };
                        } else {
                            $scope.vm.cityChoosed = data.data[0];
                        }
                        $scope.vm.hasCity = data.data.length !== 0;
                    } else {
                        $scope.vm.hasCity = false;
                        $scope.vm.hasCounty = false;
                    }
                });
                //通过基本信息的市id获取县列表
                commonServer.getCountyByCityId({
                    'cityId': $scope.vm.baseInfo.studentInfo.cityId
                }).then(function (data) {
                    $scope.vm.hasCounty = data.status === true;
                    if (data.status) {
                        $scope.vm.countyList = data.data;
                        if ($scope.vm.baseInfo.studentInfo.countyId > 0) {
                            $scope.vm.countyChoosed = {
                                id: $scope.vm.baseInfo.studentInfo.countyId,
                                name: $scope.vm.baseInfo.studentInfo.county
                            };
                        } else {
                            $scope.vm.countyChoosed = data.data[0];
                        }
                        $scope.vm.hasCounty = data.data.length !== 0;
                    }
                });
                //省市县级联
                $scope.updateProvince = function () {
                    commonServer.getCityByProvinceId({
                        'provinceId': $scope.vm.provinceChoosed.id
                    }).then(function (data) {
                        if (data.status && data.data.length > 0) {
                            $scope.vm.hasCity = true;
                            $scope.vm.cityList = data.data;
                            $scope.vm.cityChoosed = data.data[0];
                            commonServer.getCountyByCityId({
                                'cityId': $scope.vm.cityChoosed.id
                            }).then(function (data) {
                                $scope.vm.hasCounty = data.status === true;
                                if (data.status) {
                                    $scope.vm.countyList = data.data;
                                    $scope.vm.countyChoosed = data.data[0];
                                    $scope.vm.hasCounty = data.data.length !== 0;
                                }
                            });
                        } else {
                            $scope.vm.hasCity = false;
                            $scope.vm.hasCounty = false;
                        }
                    });
                };
                //市县级联
                $scope.updateCity = function () {
                    commonServer.getCountyByCityId({
                        'cityId': $scope.vm.cityChoosed.id
                    }).then(function (data) {
                        $scope.vm.hasCounty = data.status === true;
                        if (data.status) {
                            $scope.vm.countyList = data.data;
                            $scope.vm.countyChoosed = data.data[0];
                            $scope.vm.hasCounty = data.data.length !== 0;
                        }
                    });
                };
            };*/
        }]);
})();
