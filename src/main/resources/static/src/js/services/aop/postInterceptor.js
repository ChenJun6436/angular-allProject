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
     * 拦截器
     */
    asApp.factory('postInterceptor', ['$q', '$rootScope', '$cookies', 'tools',
        function ($q, $rootScope, $cookies, tools) {
            return {
                'request': function (config) {
                    return config;
                },
                'response': function (resp) {
                    if (resp.data.status === false) {
                        if (resp.data.message === '用户已过期') {
                            setTimeout(function () {
                                window.location.href = $rootScope.url;
                                $cookies.remove('user');
                                $rootScope.user = $cookies.getObject('user');
                                localStorage.clear();
                            }, 2000);
                        }
                        if (resp.data.flag === 1) {
                            if(resp.data.message==null){
                                tools.alertError($rootScope, '操作失败，请稍后再试！');
                            }else{
                                tools.alertError($rootScope, resp.data.message);
                            }
                        } else if (resp.data.flag === 0) {
                            tools.alertError($rootScope, '操作失败，请稍后再试！');
                            console.log(resp.data.message);
                        } else {
                            tools.alertError($rootScope, '操作失败，请稍后再试！');
                        }
                    }
                    return resp;
                },
                'requestError': function (rejection) {
                    console.log('requestError' + $q.reject(rejection));
                    return $q.reject(rejection);
                },
                'responseError': function (rejection) {
                    console.log('responseError' + rejection);
                    return rejection;
                }
            };
        }]);
})();
