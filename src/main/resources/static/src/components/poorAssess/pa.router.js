/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{ //学生
            state: 'main.studentInfo',
            config: {
                url: '/studentInfo',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/student/studentInfo.html',
                        controller: 'studentInfoController'
                    }
                }
            }
        },{
            state: 'main.povertyApply',
            config: {
                url: '/povertyApply',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/student/povertyApply.html',
                        controller: 'povertyApplyController'
                    }
                }
            }
        },{
            state: 'main.particularlyDifficult',
            config: {
                url: '/particularlyDifficult',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/student/particularlyDifficult.html',
                        controller: 'particularlyDifficultController'
                    }
                }
            }
        },{
            state: 'main.povertyNotice',
            config: {
                url: '/povertyNotice',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/student/povertyNotice.html',
                        controller: 'povertyNoticeController'
                    }
                }
            }
        },{ //班级用户
            state: 'main.classAuditPovertyMaterial',
            config: {
                url: '/classAuditPovertyMaterial',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/student/class/classAuditPovertyMaterial.html',
                        controller: 'classAuditPovertyMaterialController'
                    }
                }
            }
        },{
            state: 'main.classAuditPoverty',
            config: {
                url: '/classAuditPoverty',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/student/class/classAuditPoverty.html',
                        controller: 'classAuditPovertyController'
                    }
                }
            }
        },{ //辅导员
            state: 'main.advisorAuditPovertyMaterial',
            config: {
                url: '/advisorAuditPovertyMaterial',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/advisor/advisorAuditPovertyMaterial.html',
                        controller: 'advisorAuditPovertyMaterialController'
                    }
                }
            }
        },{
            state: 'main.advisorAuditPoverty',
            config: {
                url: '/advisorAuditPoverty',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/advisor/advisorAuditPoverty.html',
                        controller: 'advisorAuditPovertyController'
                    }
                }
            }
        },{
            state: 'main.advisorAuditPovertyFormerYear',
            config: {
                url: '/advisorAuditPovertyFormerYear',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/advisor/advisorAuditPovertyFormerYear.html',
                        controller: 'advisorAuditPovertyFormerYearController'
                    }
                }
            }
        },{
            state: 'main.advisorParticularlyDifficultChecked',
            config: {
                url: '/advisorParticularlyDifficultChecked',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/advisor/advisorParticularlyDifficultChecked.html',
                        controller: 'advisorParticularlyDifficultCheckedController'
                    }
                }
            }
        },{
            state: 'main.advisorParticularlyDifficultUnchecked',
            config: {
                url: '/advisorParticularlyDifficultUnchecked',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/advisor/advisorParticularlyDifficultUnchecked.html',
                        controller: 'advisorParticularlyDifficultUncheckedController'
                    }
                }
            }
        },{ //学院
            state: 'main.collegeAuditPoverty',
            config: {
                url: '/collegeAuditPoverty',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/college/collegeAuditPoverty.html',
                        controller: 'collegeAuditPovertyController'
                    }
                }
            }
        },{
            state: 'main.collegeParticularlyDifficultChecked',
            config: {
                url: '/collegeParticularlyDifficultChecked',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/college/collegeParticularlyDifficultChecked.html',
                        controller: 'collegeParticularlyDifficultCheckedController'
                    }
                }
            }
        },{
            state: 'main.collegeParticularlyDifficultUnchecked',
            config: {
                url: '/collegeParticularlyDifficultUnchecked',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/college/collegeParticularlyDifficultUnchecked.html',
                        controller: 'collegeParticularlyDifficultUncheckedController'
                    }
                }
            }
        },{ //学校
            state: 'main.schoolAuditPoverty',
            config: {
                url: '/schoolAuditPoverty',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/school/schoolAuditPoverty.html',
                        controller: 'schoolAuditPovertyController'
                    }
                }
            }
        },{
            state: 'main.schoolParticularlyDifficultChecked',
            config: {
                url: '/schoolParticularlyDifficultChecked',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/school/schoolParticularlyDifficultChecked.html',
                        controller: 'schoolParticularlyDifficultCheckedController'
                    }
                }
            }
        },{
            state: 'main.schoolParticularlyDifficultUnchecked',
            config: {
                url: '/schoolParticularlyDifficultUnchecked',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/school/schoolParticularlyDifficultUnchecked.html',
                        controller: 'schoolParticularlyDifficultUncheckedController'
                    }
                }
            }
        }, {
                state: 'main.collegeAuditPovertyFormerYear',
                config: {
                    url: '/collegeAuditPovertyFormerYear',
                    views: {
                        'section@main': {
                            templateUrl: 'dist/tpls/poorAssess/college/collegeAuditPovertyFormerYear.html',
                            controller: 'collegeAuditPovertyFormerYearController'
                        }
                    }
                }
            },{
            state: 'main.timeSets',
            config: {
                url: '/timeSets',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/school/timeSets.html',
                        controller: 'timeSetsController'
                    }
                }
            }
        },{
            state: 'main.diffTimeSets',
            config: {
                url: '/diffTimeSets',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/poorAssess/school/diffTimeSets.html',
                        controller: 'diffTimeSetsController'
                    }
                }
            }
        }, {
            state: 'viewOperationRecord',
            config: {
                url: '/viewOperationRecord',
                templateUrl: 'dist/tpls/poorAssess/school/viewOperationRecord.html',
                controller: 'viewOperationRecordController'
            }
        }];
    }
})();
