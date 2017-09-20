/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    asApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {


            $httpProvider.interceptors.push('postInterceptor');
            $urlRouterProvider.otherwise('/main');
            $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'dist/tpls/login.html',
                controller: 'loginController'
            }).state('main', {
                url: '/main',
                views: {
                    '': {
                        templateUrl: 'dist/tpls/main.html'
                    },
                    'header@main': {
                        templateUrl: 'dist/tpls/header.html',
                        controller: 'headerController'
                    },
                    'aside@main': {
                        templateUrl: 'dist/tpls/aside.html',
                        controller: 'asideController'
                    },
                    'section@main': {
                        controller: ['$state', '$rootScope','studentServer', function ($state, $rootScope, studentServer) {
                            //根据角色不同判断默认显示的初始化页面
                            if ($rootScope.userRole === 100) {
                                $state.go('main.studentInfo');

                            } else if ($rootScope.userRole === 3) {
                                $state.go('main.advisorPovertyFirmly');
                            } else if ($rootScope.userRole === 2) {
                                $state.go('main.collegePovertyFirmly');
                            } else if ($rootScope.userRole === 1) {
                                $state.go('main.schoolPovertyFirmly');
                            }
                        }]
                    }
                }
            }).state('main.studentInfo', {
                url: '/studentInfo',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/student/studentInfo.html',
                        controller: 'studentInfoController'
                    }
                }
            }).state('main.povertyApply', {
                url: '/povertyApply',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/student/povertyApply.html',
                        controller: 'povertyApplyController'
                    }
                }
            }).state('main.povertyNotice', {
                url: '/povertyNotice',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/student/povertyNotice.html',
                        controller: 'povertyNoticeController'
                    }
                }
            }).state('main.classAuditPovertyMaterial', {
                url: '/classAuditPovertyMaterial',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/student/class/classAuditPovertyMaterial.html',
                        controller: 'classAuditPovertyMaterialController'
                    }
                }
            }).state('main.classAuditPoverty', {
                url: '/classAuditPoverty',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/student/class/classAuditPoverty.html',
                        controller: 'classAuditPovertyController'
                    }
                }
            }).state('main.grantsApply', {
                url: '/grantsApply',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/student/grantsApply.html',
                        controller: 'grantsApplyController'
                    }
                }
            }).state('main.grantsNotice', {
                url: '/grantsNotice',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/student/grantsNotice.html',
                        controller: 'grantsNoticeController'
                    }
                }
            }).state('main.classAuditGrants', {
                url: '/classAuditGrants',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/student/class/classAuditGrants.html',
                        controller: 'classAuditGrantsController'
                    }
                }
            }).state('main.collegePovertyFirmly', {
                url: '/collegePovertyFirmly',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/college/povertyResult.html',
                        controller: 'collegePovertyFirmlyController'
                    }
                }
            }).state('main.collegeGrantsManage', {
                url: '/collegeGrantsManage',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/college/advisorGrantsManage.html',
                        controller: 'collegeGrantsManageController'
                    }
                }
            }).state('main.collegeGrants', {
                url: '/collegeGrants',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/college/advisorAuditGrants.html',
                        controller: 'collegeGrantsController'
                    }
                }
            }).state('main.collegeGrantsSetting', {
                url: '/collegeGrantsSetting',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/college/advisorGrantsSetting.html',
                        controller: 'collegeGrantsSettingController'
                    }
                }
            }).state('main.schoolPovertyFirmly', {
                url: '/schoolPovertyFirmly',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/schoolAuditPoverty.html',
                        controller: 'schoolPovertyFirmlyController'
                    }
                }
            }).state('main.timeSet', {
                url: '/timeSet',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/timeSet.html',
                        controller: 'timeSetController'
                    }
                }
            }).state('main.timeSets', {
                url: '/timeSets',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/timeSets.html',
                        controller: 'timeSetsController'
                    }
                }
            }).state('main.analysis', {
                url: '/analysis',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/analysis.html',
                        controller: 'analysisController',
                        resolve: {
                            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load('lib/echarts/dist/echarts.min.js').then(function () {
                                    return $ocLazyLoad.load('plugins/china.js')
                                });
                            }]
                        }
                    }
                }
            }).state('main.sendNotice', {
                url: '/sendNotice',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/sendNotice.html',
                        controller: 'sendNoticeController',
                        resolve: {
                            loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load('plugins/ckeditor/ckeditor.js');
                            }]
                        }
                    }
                }
            }).state('main.historyApply', {
                url: '/historyApply',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/historyApply.html',
                        controller: 'historyApplyController'
                    }
                }
            }).state('main.schoolGrantsManage', {
                url: '/schoolGrantsManage',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/advisorGrantsManage.html',
                        controller: 'schoolGrantsManageController'
                    }
                }
            }).state('main.schoolGrants', {
                url: '/schoolGrants',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/advisorAuditGrants.html',
                        controller: 'schoolGrantsController'
                    }
                }
            }).state('main.schoolGrantsSetting', {
                url: '/schoolGrantsSetting',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/advisorGrantsSetting.html',
                        controller: 'schoolGrantsSettingController'
                    }
                }
            }).state('viewOperationRecord', {
                url: '/viewOperationRecord',
                templateUrl: 'dist/tpls/school/viewOperationRecord.html',
                controller: 'viewOperationRecordController'
            }).state('main.povertyResult', {
                url: '/povertyResult',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/common/poverty/povertyResult.html',
                        controller: 'povertyResultController'
                    }
                }
            }).state('main.dynamicManage', {
                url: '/dynamicManage',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/common/poverty/dynamicManage.html',
                        controller: 'dynamicManageController'
                    }
                }
            }).state('studentPovertyMaterial', {
                url: '/studentPovertyMaterial/:studentId',
                templateUrl: 'dist/tpls/common/poverty/studentPovertyMaterial.html',
                controller: 'studentPovertyMaterialController'
            }).state('main.noticeList', {
                url: '/noticeList',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/common/noticeList.html',
                        controller: 'noticeListController'
                    }
                }
            }).state('main.messageList', {
                url: '/messageList',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/common/messageList.html',
                        controller: 'messageListController'
                    }
                }
            }).state('main.grantsResult', {
                url: '/grantsResult',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/common/grantsResult.html',
                        controller: 'grantsResultController'
                    }
                }
            }).state('showRejectReason', {
                url: '/showRejectReason',
                templateUrl: 'dist/tpls/common/showRejectReason.html',
                controller: 'showRejectReasonController'
            }).state('oneNotice', {
                url: '/oneNotice/:noticeId',
                templateUrl: 'dist/tpls/common/oneNotice.html',
                controller: 'oneNoticeController'
            }).state('main.studentHelp', {
                url: '/studentHelp',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/student/advisorHelp.html'
                    }
                }
            }).state('main.collegeHelp', {
                url: '/collegeHelp',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/college/advisorHelp.html'
                    }
                }
            }).state('main.schoolHelp', {
                url: '/schoolHelp',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/school/advisorHelp.html'
                    }
                }
            });
        }]);
})();