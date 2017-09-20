/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
'use strict';
var asApp = angular.module('asApp',
    [
        'ngAnimate',
        'ui.bootstrap',
        'ngTable',
        'ui.router',
        'ngCookies',
        'oc.lazyLoad',
        'angular-loading-bar',
        'ngWebSocket',
        'angularFileUpload'
    ]);
asApp.run(['$rootScope', '$cookies', '$state', '$http', function ($rootScope, $cookies, $state, $http) {
    // if ($cookies.getObject('user')) {
    //  $rootScope.userRole = $cookies.getObject('user').role;
    //  $rootScope.userName = $cookies.getObject('user').name;
    //  $rootScope.url = $cookies.getObject('user').url;
    //  }

    window.localStorage.setItem('user', angular.toJson({name: 'student'}))
    var _user = angular.fromJson(window.localStorage.getItem('user'));
    if (_user && _user.name === 'school' || _user && _user.name === 'college' || _user && _user.name === 'advisor' || _user && _user.name === 'student') {
        if (_user.name === 'school') {
        $rootScope.userRole = 1;
        } else if (_user.name === 'college') {
        $rootScope.userRole = 2;
        } else if (_user.name === 'advisor') {
        $rootScope.userRole = 3;
        } else {
          $rootScope.userRole = 100;
        }
        $rootScope.userName = _user.name;
    }
    /* else {
     window.location.href = 'http://rap.xdbigdata.com/app-store/#/login';
     }*/
    /**
     * 取消请求
     */
    $rootScope.clearPending = function () {
        angular.forEach($http.pendingRequests, function (request) {
            if (request.cancel && request.timeout) {
                request.cancel.resolve('canceled');
            }
        });
    };
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.clearPending();
        $rootScope.alert = false;
        //页面权限控制，防止交叉访问
        if (toState.name !== 'login') {
            //公共页面
            var premissionArr = [
                'main',
                'oneNotice',
                'onePersonInfo',
                'main.noticeList',
                'main.grantsResult',
                'main.messageList'
            ];
            switch ($rootScope.userRole) {
                case 1:
                    premissionArr = premissionArr.concat([
                        'main.dynamicManage',
                        'viewOperationRecord',
                        'main.timeSet',
                        'main.timeSets',
                        'main.analysis',
                        'main.povertyAlert',
                        'main.sendNotice',
                        'main.historyApply',
                        'main.schoolHelp',
                        'main.schoolGrants',
                        'main.schoolGrantsManage',
                        'main.schoolGrantsSetting',
                        'main.schoolPovertyFirmly'
                    ]);
                    break;
                case 2:
                    premissionArr = premissionArr.concat([
                        'main.dynamicManage',
                        'main.povertyAlert',
                        'showRejectReason',
                        'main.collegeHelp',
                        'main.collegeGrants',
                        'main.collegeGrantsManage',
                        'main.collegeGrantsSetting',
                        'main.collegePovertyFirmly'
                    ]);
                    break;
                case 3:
                    premissionArr = premissionArr.concat([
                        'showRejectReason',
                        'main.dynamicManage',
                        'main.povertyAlert',
                        'main.studentAudit',
                        'main.advisorHelp',
                        'main.advisorGrants',
                        'main.advisorGrantsManage',
                        'main.advisorGrantsSetting',
                        'main.advisorPovertyFirmly'
                    ]);
                    break;
                case 100:
                    premissionArr = premissionArr.concat([
                        'main.studentInfo',
                        'main.povertyApply',
                        'main.classAuditPovertyMaterial',
                        'main.classAuditPoverty',
                        'main.povertyNotice',
                        'main.grantsApply',
                        'main.classAuditGrants',
                        'main.grantsNotice',
                        'main.studentHelp'
                    ]);
                    break;
                default:
                    $state.go('main');
            }
            if (premissionArr.indexOf(toState.name) === -1) {
                event.preventDefault();
                $state.go('main');
            }
        }
    });
    //操作成功或失败弹窗
    $rootScope.isActive = true;
    $rootScope.alertValue = '';
    $rootScope.alert = false;
}]);