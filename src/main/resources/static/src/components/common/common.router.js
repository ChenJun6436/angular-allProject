/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.povertyResult',
            config: {
                url: '/povertyResult',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/common/poverty/povertyResult.html',
                        controller: 'povertyResultController'
                    }
                }
            }
        },{
            state: 'main.dynamicManage',
            config: {
                url: '/dynamicManage',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/common/poverty/dynamicManage.html',
                        controller: 'dynamicManageController'
                    }
                }
            }
        },{
            state: 'studentPovertyMaterial',
            config: {
                url: '/studentPovertyMaterial/:studentId',
                templateUrl: 'dist/tpls/common/poverty/studentPovertyMaterial.html',
                controller: 'studentPovertyMaterialController'
            }
        },{
            state: 'main.grantsResult',
            config: {
                url: '/grantsResult',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/common/grants/grantsResult.html',
                        controller: 'grantsResultController'
                    }
                }
            }
        },{
            state: 'showRejectReason',
            config: {
                url: '/showRejectReason',
                templateUrl: 'dist/tpls/common/showRejectReason.html',
                controller: 'showRejectReasonController'
            }
        },{
            state: 'main.noticeList',
            config: {
                url: '/noticeList',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/common/noticeList.html',
                        controller: 'noticeListController'
                    }
                }
            }
        },{
            state: 'oneNotice',
            config: {
                url: '/oneNotice/:noticeId',
                templateUrl: 'dist/tpls/common/oneNotice.html',
                controller: 'oneNoticeController'
            }
        }];
    }
})();
