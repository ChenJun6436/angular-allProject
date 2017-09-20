/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').directive('ckeditor', function () {
        return {
            require: '?ngModel',
            link: function (scope, element, attrs, ngModel) {
                var ckeditor = CKEDITOR.replace(element[0], {});
                if (!ngModel) {
                    return;
                }
                ckeditor.on('instanceReady', function () {
                    ckeditor.setData(ngModel.$viewValue);
                });
                ckeditor.on('pasteState', function () {
                    scope.$apply(function () {
                        ngModel.$setViewValue(ckeditor.getData());
                    });
                });
                ngModel.$render = function () {
                    ckeditor.setData(ngModel.$viewValue);
                };
            }
        };
    });
})();
