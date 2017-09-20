/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/13
 * Time: 15:17
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app').run(appRun);

    appRun.$inject = ['$rootScope', '$cookies', '$state', '$http', 'povertyCommonServer'];

    function appRun($rootScope, $cookies, $state, $http, povertyCommonServer) {
        if ($cookies.getObject('user')) {
            $rootScope.userRole = $cookies.getObject('user').role;
            $rootScope.userName = $cookies.getObject('user').name;
            $rootScope.url = $cookies.getObject('user').url;
        }
        $rootScope.studentId = $rootScope.userName;
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
                    'studentPovertyMaterial',
                    'main.noticeList',
                    'main.messageList'
                ];
                switch ($rootScope.userRole) {
                    case 1:
                        premissionArr = premissionArr.concat([
                            'main.schoolAuditPoverty',
                            'main.dynamicManage',
                            'viewOperationRecord',
                            'main.povertyResult',
                            'main.timeSets',
                            'main.diffTimeSets',
                            'main.analysis',
                            'main.sendNotice',
                            'main.historyApply',
                            'main.schoolHelp',
                            'main.schoolAuditGrants',
                            'main.schoolGrantsManage',
                            'main.schoolGrantsSetting',
                            'main.schoolAuditPoverty',
                            'main.grantsResult',
                            'viewGrantsOperationRecord',
                            'main.srGroup',
                            'main.tdSubsidy',
                            'main.loanCc',
                            'main.gtaSubsidy',
                            'main.grantAdminCc',
                            'main.grantAdminPublicCc',
                            'main.grantAdminConfigCc',
                            'main.grantAdminComPublicCc',
                            'main.grantAdminSchoolManerCc',
                            'main.schoolParticularlyDifficultChecked',
                            'main.schoolParticularlyDifficultUnchecked',
                            'main.statistic',
                            'main.statistic.economic',
                            'main.statistic.grantInAid',
                            'main.scholarCc',
                            'main.scholarSchoolManerCc'

                        ]);
                        break;
                    case 2:
                        premissionArr = premissionArr.concat([
                            'main.collegeAuditPoverty',
                            'main.dynamicManage',
                            'main.povertyResult',
                            'showRejectReason',
                            'main.collegeHelp',
                            'main.collegeAuditGrants',
                            'main.collegeGrantsManage',
                            'main.collegeGrantsSetting',
                            'main.grantsResult',
                            'main.srGroup',
                            'main.tdSubsidy',
                            'main.loanSc',
                            'main.collegeAuditPovertyFormerYear',
                            'main.grantAdminSc',
                            'main.grantAdminPublicSc',
                            'main.grantAdminConfigSc',
                            'main.grantAdminComPublicSc',
                            'main.grantAdminClassManerSc',
                            'main.grantAdminSchoolManerSc',
                            'main.collegeParticularlyDifficultChecked',
                            'main.collegeParticularlyDifficultUnchecked',
                            'main.statistic',
                            'main.statistic.economic',
                            'main.statistic.grantInAid',
                            'main.scholarSc',
                            'main.scholarClassManerSc'

                        ]);
                        break;
                    case 3:
                        premissionArr = premissionArr.concat([
                            'main.advisorAuditPovertyMaterial',
                            'main.advisorAuditPoverty',
                            'main.povertyResult',
                            'showRejectReason',
                            'main.dynamicManage',
                            'main.advisorHelp',
                            'main.advisorAuditGrants',
                            'main.advisorGrantsManage',
                            'main.advisorGrantsSetting',
                            'main.grantsResult',
                            'main.srGroup',
                            'main.tdSubsidy',
                            'main.grantAdminTc',
                            'main.grantApplyFillTc',
                            'main.grantAdminPublicTc',
                            'main.advisorParticularlyDifficultChecked',
                            'main.advisorParticularlyDifficultUnchecked',
                            'main.loanTc',
                            'main.advisorAuditPovertyFormerYear',
                            'main.statistic',
                            'main.statistic.economic',
                            'main.statistic.grantInAid',
                            'main.scholarPublicTc',
                            'main.scholarFillTc'
                        ]);
                        break;
                    case 4:
                        premissionArr = premissionArr.concat([
                            'main.studentInfo',
                            'main.povertyApply',
                            'main.classAuditPovertyMaterial',
                            'main.classAuditPoverty',
                            'main.povertyNotice',
                            'main.grantsApply',
                            'main.classAuditGrants',
                            'main.grantsNotice',
                            'main.myApply',
                            'main.studentHelp',
                            'main.srGroup',
                            'main.statistic',
                            'main.statistic.economic',
                            'main.statistic.grantInAid'
                        ]);
                        break;
                    case 5:
                        premissionArr = premissionArr.concat([
                            'main.studentInfo',
                            'main.povertyApply',
                            'main.povertyNotice',
                            'main.grantsApply',
                            'main.grantsNotice',
                            'main.myApply',
                            'main.studentHelp',
                            'main.srGroup',
                            'main.grantApplyIndexSt',
                            'main.particularlyDifficult',
                            'main.grantApplyFill',
                            'main.grantApplyPublic',
                            'main.loanSt',
                            'main.loanTc',
                            'main.scholarStudentInfo',
                            'main.scholarPublicSt'
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
    }
})();