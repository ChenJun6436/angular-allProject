/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin  chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 工具
     */
    asApp.service('tools', [function () {
        this.logout = function ($cookies, $rootScope) {
            $cookies.remove('user');
            $rootScope.user = $cookies.getObject('user');
            localStorage.clear();
        };
        this.alertSuccess = function ($rootScope, data) {
            $rootScope.alert = true;
            $rootScope.isActive = true;
            setTimeout(function () {
                $rootScope.alert = false;
                $rootScope.$apply();
            }, 2000);
            $rootScope.alertValue = data;
        };
        this.alertError = function ($rootScope, data) {
            $rootScope.alert = true;
            $rootScope.isActive = false;
            setTimeout(function () {
                $rootScope.alert = false;
                $rootScope.$apply();
            }, 5000);
            $rootScope.alertValue = data;
        };
        /**
         * 返回数组中最大值
         * @param arr
         */
        this.max = function (arr) {
            //Math.max.apply(null, [])  =>-Infinity
            if (angular.isArray(arr)) {
                return arr.length > 0 ? Math.max.apply(null, arr) : 0;
            } else {
                console.log(arr + 'is not a array');
            }
        };
        /**
         * 返回数组中最小值
         * @param arr
         */
        this.min = function (arr) {
            if (angular.isArray(arr)) {
                return arr.length > 0 ? Math.min.apply(null, arr) : 0;
            } else {
                console.log(arr + 'is not a array');
            }
        };
        /**
         * 验证大于0的数字
         * */
        this.number = function (num) {
            var reg = new RegExp("^\+?[1-9][0-9]*$ ");
            if(reg.test(num)){
                return true;
            }else {
                return false;
            }
        };
    }]);
})();
