/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/3/2
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').factory('resize', resize);

    resize.$inject = ['$window'];

    function resize($window) {
        return {        //存储单个属性
            resize: function (fn) {
                var old = window.onresize;
                if(typeof window.onresize != 'function'){
                    window.onresize = fn;
                }else{
                    window.onresize = function(){
                        old();
                        fn();
                    }
                }
            }
        };
    }
})();