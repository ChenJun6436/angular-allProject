/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/13
 * Time: 9:36
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.helper',
        [
            'ui.router'
        ]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.core', [
        'app.helper',
        'ngAnimate',
        'ui.bootstrap',
        'ngTable',
        'ngCookies',
        'oc.lazyLoad',
        'angular-loading-bar',
        'ngWebSocket',
        'angularFileUpload'
    ]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.common', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:33
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.goToArmy', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:33
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.layout', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.login', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.poorAssess', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/7
 * Time: 15:46
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.statistic', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:33
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.subsidizeRecord', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:33
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.temporaryDiff', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.grantAdminSc', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.grantApply', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.grantAdminTc', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.scholarCc', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.scholarSc', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.scholarSt', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.scholarTc', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.loanCc', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.loanSc', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.loanSt', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.loanTc', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.grantAdminCc', ['app.core']);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app', [
        'app.common',
        'app.core',
        'app.helper',
        'app.layout',
        'app.login',
        'app.poorAssess',
        'app.subsidizeRecord',
        'app.temporaryDiff',
        'app.grantApply',
        'app.grantAdminTc',
        'app.loanSt',
        'app.loanTc',
        'app.loanSc',
        'app.loanCc',
        'app.goToArmy',
        'app.grantAdminCc',
        'app.grantAdminSc',
        'app.statistic',
        'app.scholarCc',
        'app.scholarSc',
        'app.scholarSt',
        'app.scholarTc'
    ]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/22
 * Time: 17:24
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app').config(appConfig);

    appConfig.$inject = ['$httpProvider', '$locationProvider'];

    function appConfig($httpProvider, $locationProvider) {
        $httpProvider.interceptors.push('postInterceptor');
        $locationProvider.hashPrefix('');
    }
})();
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

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('noticeListController', noticeListController);

    noticeListController.$inject = [
        '$scope',
        'povertyCommonServer',
        'povertySchoolServer',
        'tools'];

    function noticeListController($scope, povertyCommonServer, povertySchoolServer, tools) {
        $scope.vm = {
            tableFlag: 0
        };

        $scope.init = function () {
            povertyCommonServer.getNoticeList(0).then(function (data) {
                if (data.status) {
                    $scope.vm.noticeList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 跳转至公告详情
         * @param id
         */
        $scope.getNoticeDetail = function (id) {
            window.open('#/oneNotice/' + id);
        };

        /**
         * 删除公告
         * @param id
         */
        $scope.removeNotice = function (id) {
            povertySchoolServer.removeNotice(id).then(function (data) {
                if (data.status) {
                    tools.alertSuccess('删除成功');
                    $scope.init();
                }
            });
        };
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('oneNoticeController', oneNoticeController);

    oneNoticeController.$inject = [
        '$scope',
        'povertyCommonServer',
        '$stateParams'];

    function oneNoticeController($scope, povertyCommonServer, $stateParams) {
        $scope.vm = {
            oneNotice: {}
        };

        /**
         * 获取单个公告详情信息
         */
        povertyCommonServer.getNoticeList($stateParams.noticeId).then(function (data) {
            if (data.status) {
                $scope.vm.oneNotice = data.data[0];
            }
        });
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('showRejectReasonController', showRejectReasonController);

    showRejectReasonController.$inject = [
        '$scope',
        'povertyCommonServer'];

    function showRejectReasonController($scope, povertyCommonServer) {
        $scope.vm = {
            reasonList: []
        };

        /**
         * 获取驳回原因
         */
        povertyCommonServer.getReject().then(function (data) {
            if (data.status) {
                $scope.vm.reasonList = data.data;
            }
        });
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.goToArmy').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.gtaSubsidy',
            config: {
                url: '/gtaSubsidy',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/goToArmy/gtaSubsidy.html',
                        controller: 'gtaSubsidyController'
                    }
                }
            }
        }];
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.goToArmy').controller('gtaSubsidyController', gtaSubsidyController);

    gtaSubsidyController.$inject = [
        '$scope',
        '$filter',
        'goToArmyServer',
        'tools',
        'NgTableParams',
        'FileUploader',
        '$element',
        'ROOT'];

    function gtaSubsidyController($scope, $filter, goToArmyServer, tools, NgTableParams, FileUploader, $element, ROOT) {
        $scope.vm = {
            tableFlag: 0,
            levels: ['特别困难', '困难', '一般困难', '不困难']
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            goToArmyServer.getAllArmySub().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.vm.studentList.map(function (item) {
                        item.handleTime = $filter('date')(item.handleTime, 'yyyy-MM-dd')
                        return true
                    })
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr = value;
                            if (_flag) {
                                $scope.initCheck();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();
        $scope.deleteStu = function (id) {
            goToArmyServer.deleteArmySubSingle(id).then(function (data) {
                if(data.status) {
                    $scope.init()
                }
            })
        }
        /**
         * 新增临时困难补助
         */
        $scope.addSubModalShow = function (grants) {
            $('#addSub').modal({backdrop: 'static', keyboard: false});
            //初始化提交验证为false
            $scope.vm.addSubSubmit = false;
            $scope.vm.temporarySub = {};
            $scope.vm.temporarySub.title = '新增入伍补助';

            $scope.addSub = function () {
                $scope.vm.addSubSubmit = true;
                var n = Number($scope.vm.temporarySub.amount);
                if (isNaN(n))
                {
                    tools.alertError('额度请填写数字');
                    $scope.vm.addSubSubmit = false;
                    return false
                }
                if ($scope.vm.subForm.$valid) {
                    goToArmyServer.addArmySub($scope.vm.temporarySub).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('保存成功');
                            $scope.init();
                        }
                        $('#addSub').modal('hide');
                    });
                } else {
                    tools.alertError('请填写完整信息');
                }
            };
        };
        $scope.editSubModalShow = function (student) {
            $('#editSub').modal({backdrop: 'static', keyboard: false});
            //初始化提交验证为false
            $scope.vm.editSubSubmit = false;
            $scope.vm.temporaryEditSub = {};
            $scope.vm.temporaryEditSub.id = student.id
            $scope.vm.temporaryEditSub.studentSn = student.studentSn
            $scope.vm.temporaryEditSub.amount = student.amount
            $scope.vm.temporaryEditSub.reason = student.reason
            $scope.editSub = function () {
                $scope.vm.editSubSubmit = true;
                var n = Number($scope.vm.temporaryEditSub.amount);
                if (isNaN(n))
                {
                    tools.alertError('额度请填写数字');
                    $scope.vm.addSubSubmit = false;
                    return false
                }
                if ($scope.vm.editSubForm.$valid) {
                    goToArmyServer.putArmySub($scope.vm.temporaryEditSub).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('保存成功');
                            $scope.init();
                        }
                        $('#editSub').modal('hide');
                    });
                } else {
                    tools.alertError('请填写完整信息');
                }
                $scope.vm.editSubSubmit = false;
            };
        };
        $scope.dealAll = function (flag) {

            if ($scope.checkboxes.choosedStudent.length > 0) {

                $scope.vm.isDealingAll = true;

                angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                    value.isPass = flag;
                });
                var array = $scope.checkboxes.choosedStudent.map(function (item) {
                    return item.id
                })
                goToArmyServer.deleteArmySub(array).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('通过成功');
                        $scope.init();
                    }
                    $scope.vm.isDealingAll = false;
                });
            } else {
                tools.alertError('请先选择要批量处理的学生');
            }
        };
        $scope.initCheck = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes.checked;
            }, function (value) {
                console.log(value)
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.id] = value;
                });
            });

            // watch for data checkboxes
            $scope.$watch(function () {
                return $scope.checkboxes.items;
            }, function (values) {
                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr.length;
                $scope.checkboxes.choosedStudent = [];
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.id] && $scope.checkboxes.choosedStudent.push(item);
                    checked += ($scope.checkboxes.items[item.id]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.id]) || 0;
                });
                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }
                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                console.log($scope.checkboxes.choosedStudent)
            }, true);
        };
        /**
         * 上传excel
         * */
        (function () {
            var uploader = $scope.uploader = new FileUploader({
                url: ROOT + '/joinArmySubsidize/batch',
                autoUpload: true,
                removeAfterUpload: true,
                queueLimit: 1
            });

            uploader.onAfterAddingFile = function (fileItem) {

                var lastName = fileItem.file.name.slice((fileItem.file.name.lastIndexOf('.')+1)).toLowerCase();
                var _arr = ['xlsx', 'xls'];

                if (_arr.indexOf(lastName) === -1) {
                    tools.alertError('请上传【xlsx,xls】等规定格式的excel文件');
                    uploader.clearQueue();
                }
                if (fileItem.file.size > 20971520) {
                    tools.alertError('上传文件大小不得大于15M');
                    uploader.clearQueue();
                }
            };

            uploader.onCompleteItem = function (fileItem, response) {
                if (response.status) {
                    tools.alertSuccess('上传成功');
                    $scope.init();
                } else {
                    tools.alertError(response.message);
                }
            };
        })();




    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/13
 * Time: 9:38
 * To change this template use File | Settings | File Templates.
 */
// Help configure the state-base ui.router
(function () {
    'use strict';
    angular.module('app.helper').provider('routerHelper', routerHelperProvider);

    routerHelperProvider.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function routerHelperProvider($stateProvider, $urlRouterProvider, $httpProvider) {

        this.$get = RouterHelper;
        RouterHelper.$inject = ['$rootScope', '$state'];

        function RouterHelper($rootScope, $state) {

            $httpProvider.interceptors.push('postInterceptor');
            var hasOtherwise = false;

            function configureStates(states, otherwisePath) {
                console.log(states)
                states.forEach(function (state) {
                    // add login check if requireLogin is true
                    /*var data = state.config.data;
                     if (data && data.requireLogin === true) {
                     state.config.resolve = angular.extend(state.config.resolve || {}, {
                     'loginResolve': resolve.login
                     });
                     }
                     state.config.resolve = angular.extend(state.config.resolve || {}, config.resolveAlways);*/
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function getStates() {
                return $state.get();
            }

            var service = {
                configureStates: configureStates,
                getStates: getStates
            };

            return service;
        }
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.layout').controller('asideController', asideController);

    asideController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'povertyCommonServer',
        '$websocket',
        'povertyStudentServer'];

    function asideController($scope, $rootScope, $cookies, $state, povertyCommonServer, $websocket, povertyStudentServer) {
        $scope.state = $state;

        if ($rootScope.userRole === 4 || $rootScope.userRole === 5) {
            povertyStudentServer.getStudentStatus().then(function (data) {
                if (data.status) {
                    $rootScope.povertyStudentStatus = data.data.status;
                    $rootScope.result = data.data.result;
                }
            });
            /**
             * 判断是否已经填了基本信息维护
             */
            povertyStudentServer.isComplete().then(function (data) {
                $rootScope.isComplete = data.data;
                if (!$rootScope.isComplete) {
                    $('#needEdit').modal({backdrop: 'static', keyboard: false});
                    $scope.goEdit = function () {
                        $('#needEdit').modal('hide');
                        $state.go('main.studentInfo');
                    };
                }
            });

        }
        /**
         * 导航栏显示隐藏
         * */
        $scope.shSecondClass = function (num) {
            $scope.secondClass = num;
        };
        $rootScope.sum = 0;
        $rootScope.applyNum = 0;
        $rootScope.noticeNum = 0;
        var _messageArr = [
            {type: 7, num: 6}
        ];
        angular.forEach(_messageArr, function (value) {
            $rootScope.sum += value.num;
            if (value.type === '7') {
                $rootScope.applyNum += value.num;
            }
            if (value.type === '6') {
                $rootScope.noticeNum += value.num;
            }
        });
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:30
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.layout').controller('headerController', headerController);

    headerController.$inject = ['$state', '$rootScope'];

    function headerController($state, $rootScope) {
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';

    angular.module('app.layout').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        var otherwise = '/login';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: 'main',
                config: {
                    url: '/main',
                    views: {
                        '': {
                            templateUrl: 'dist/tpls/layout/main.html'
                        },
                        'header@main': {
                            templateUrl: 'dist/tpls/layout/header.html',
                            controller: 'headerController'
                        },
                        'aside@main': {
                            templateUrl: 'dist/tpls/layout/aside.html',
                            controller: 'asideController'
                        },
                        'section@main': {
                            controller: ['$state', '$rootScope', function ($state, $rootScope) {
                                //根据角色不同判断默认显示的初始化页面
                                if ($rootScope.userRole === 5 || $rootScope.userRole === 4) {
                                    $state.go('main.studentInfo');
                                } else if ($rootScope.userRole === 3) {
                                    $state.go('main.advisorAuditPoverty');
                                } else if ($rootScope.userRole === 2) {
                                    $state.go('main.collegeAuditPoverty');
                                } else if ($rootScope.userRole === 1) {
                                    $state.go('main.schoolAuditPoverty');
                                }
                            }]
                        }
                    }
                }
            }
        ];
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 18:00
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.login').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'login',
            config: {
                url: '/login',
                templateUrl: 'dist/tpls/login/login.html',
                controller: 'loginController'
            }
        }];
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.login').controller('loginController', loginController);

    loginController.$inject = [
        '$scope',
        '$rootScope',
        '$cookies',
        '$state',
        'povertyCommonServer',
        'tools'
    ];

    function loginController($scope, $rootScope, $cookies, $state, povertyCommonServer, tools) {
        $scope.vm = {};
        $cookies.remove('user');
        $scope.vm.login = function () {



            $cookies.putObject('user', {
                role: parseInt($scope.vm.user.userType),
                name: $scope.vm.user.userName,
                url: parseInt($scope.vm.user.userType)
            });
            $rootScope.userRole = $cookies.getObject('user').role;
            $rootScope.userName = $cookies.getObject('user').name;
            $rootScope.url = $cookies.getObject('user').url;
            $state.go('main');



            // povertyCommonServer.login($scope.vm.user).then(function (data) {
            //     if (data.status) {
            //         $cookies.putObject('user', {
            //             role: parseInt($scope.vm.user.userType),
            //             name: $scope.vm.user.userName,
            //             url: parseInt($scope.vm.user.userType)
            //         });
            //         $rootScope.userRole = $cookies.getObject('user').role;
            //         $rootScope.userName = $cookies.getObject('user').name;
            //         $rootScope.url = $cookies.getObject('user').url;
            //         $state.go('main');
            //     } else {
            //         tools.alertError('登录失败，请稍后重试');
            //     }
            // });




        };
    }
})();

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

/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/7
 * Time: 15:02
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.statistic').controller('economicController', economicController);

    economicController.$inject = [
        '$scope',
        '$timeout',
        'THEME',
        'resize',
        'commonsServer',
        'statisticServer'
    ];

    function economicController($scope, $timeout, THEME, resize, commonsServer, statisticServer) {
        /*$scope.year = locals.getObject('year', '');
        console.log('1', $scope.year);*/
        $scope.vm =  {};
        commonsServer.getCommonsSchoolYearAll().then(function (data) {
            if(data.status) {
                $scope.startYears = angular.copy(data.data);
                $scope.endYears = angular.copy(data.data);
                $scope.startYear = $scope.startYears[0];
                $scope.endYear = $scope.endYears[0];
            }
        });
        $scope.changeYear = function() {
            $scope.init();
        }
        commonsServer.getCommonsCollege().then(function (data) {
            if(data.status) {
                $scope.vm.colleges = data.data;
                if($scope.vm.colleges.length === 1) {
                    $scope.vm.college = $scope.vm.colleges[0];
                }
            }
            $scope.change();
        });

        $scope.change = function() {
            if($scope.vm.college) {
                commonsServer.getCommonsMajor($scope.vm.college.id).then(function (data) {
                    if(data.status) {
                        $scope.vm.majors = data.data;
                    }
                    $scope.changeGrade();
                    $scope.init();
                });
            } else{
                $scope.vm.majors={};
            }
        };
        $scope.changeGrade = function() {
            if($scope.vm.major) {
                commonsServer.getCommonsGrade($scope.vm.major.id).then(function (data) {
                    if (data.status) {
                        $scope.vm.grades = data.data;
                    }
                    $scope.changeClass();
                    $scope.init();
                });
            }else{
                $scope.vm.grades = {};
            }
        };
        $scope.changeClass = function() {
            if($scope.vm.major && $scope.vm.grade) {
                commonsServer.getCommonsClass([$scope.vm.major.id, $scope.vm.grade.id]).then(function (data) {
                    if (data.status) {
                        $scope.vm.classes = data.data;
                        $scope.init();
                    }
                });
            }else{
                $scope.vm.classes = {};
            }
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            var vm = this;

            if($scope.startYear && $scope.endYear) {
                vm._postData = {
                    endSchoolYear: $scope.endYear.name,
                    startSchoolYear: $scope.startYear.name
                };
            }else {
                vm._postData = {
                    endSchoolYear: '2011-2012',
                    startSchoolYear: '2011-2012'
                };
            }
            if($scope.vm.college) {
                vm._postData.collegeName = $scope.vm.college.name;
            } else{
                vm._postData.collegeName = '-1';
            }

            if($scope.vm.major) {
                vm._postData.majorName = $scope.vm.major.name;
            } else{
                vm._postData.majorName = '-1';
            }

            if($scope.vm.grade) {
                vm._postData.gradeName = $scope.vm.grade.name;
            } else{
                vm._postData.gradeName = '-1';
            }
            if($scope.vm.class) {
                vm._postData.className = $scope.vm.class.name;
            } else{
                vm._postData.className = '-1';
            }
            statisticServer.getPoverty(vm._postData).then(function (data) {
                if(data.status) {
                    $scope.povertyNumber = data.data;
                }
            });
            $timeout(function () {
                vm.rankEcharts = echarts.init(document.getElementById('rank'), THEME);
                vm.rankEcharts.showLoading();
                var rankData = {
                    name: []
                };
                statisticServer.getPovertyLevel(vm._postData).then(function (data) {
                    if(data.status) {
                        angular.forEach(data.data, function(value){
                            rankData.name.push(value.povertyLevel);
                        });
                        vm.initRank = function () {
                            vm.rankOption = {
                                tooltip : {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                                },
                                legend: {
                                    orient: 'vertical',
                                    left: 'left',
                                    data: rankData.name
                                },
                                series : [
                                    {
                                        name: '访问来源',
                                        type: 'pie',
                                        radius : '80%',
                                        center: ['50%', '50%'],
                                        data: [],
                                        itemStyle: {
                                            emphasis: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                            }
                                        }
                                    }
                                ]
                            };
                            angular.forEach(data.data, function(value){
                                vm.rankOption.series[0].data.push({value: value.number, name: value.povertyLevel});
                            })
                            resize.resize(vm.rankEcharts.resize);
                            vm.rankEcharts.setOption(vm.rankOption);
                            vm.rankEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initRank();
                        }, 1000);
                    }
                });
            });

            $timeout(function () {
                vm.studentEcharts = echarts.init(document.getElementById('student'), THEME);
                vm.studentEcharts.showLoading();
                var fiveData = {
                    xData: [],
                    yData: []
                };
                statisticServer.getFiveKind(vm._postData).then(function (data) {
                    if(data.status) {
                        angular.forEach(data.data, function(value){
                            fiveData.xData.push(value.kind);
                            fiveData.yData.push(value.number);
                        });
                        vm.initStudent = function () {
                            vm.studentOption = {
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        data : fiveData.xData,
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value'
                                    }
                                ],
                                series : [
                                    {
                                        name:'经济困难等级人数',
                                        type:'bar',
                                        barWidth: '40%',
                                        data: fiveData.yData
                                    }
                                ]
                            };
                            resize.resize(vm.studentEcharts.resize);
                            vm.studentEcharts.setOption(vm.studentOption);
                            vm.studentEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initStudent();
                        }, 1000);
                    }
                });
            });

            $timeout(function () {
                vm.originEcharts = echarts.init(document.getElementById('origin'), THEME);
                vm.originEcharts.showLoading();
                statisticServer.getNumber(vm._postData).then(function (data) {
                    if(data.status) {
                        vm.initOrigin = function () {
                            vm.originOption = {
                                tooltip : {
                                    trigger: 'item',
                                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                                },
                                legend: {
                                    orient: 'vertical',
                                    left: 'left',
                                    data: ['省内','省外']
                                },
                                series : [
                                    {
                                        name: '生源地',
                                        type: 'pie',
                                        radius : '80%',
                                        center: ['50%', '50%'],
                                        data:[
                                            {value:data.data.inTheProvince, name:'省内'},
                                            {value:data.data.notInTheProvince, name:'省外'}
                                        ],
                                        itemStyle: {
                                            emphasis: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                            }
                                        }
                                    }
                                ]
                            };
                            resize.resize(vm.originEcharts.resize);
                            vm.originEcharts.setOption(vm.originOption);
                            vm.originEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initOrigin();
                        }, 1000);
                    }
                });
            });

            $timeout(function () {
                vm.provinceEcharts = echarts.init(document.getElementById('province'), THEME);
                vm.provinceEcharts.showLoading();
                var provinceData = {
                    xData: [],
                    yData: []
                };
                statisticServer.getOutProvince(vm._postData).then(function (data) {
                    if(data.status) {
                        angular.forEach(data.data, function(value){
                            provinceData.xData.push(value.percentage);
                            provinceData.yData.push(value.name);
                        });
                        vm.initProvince = function () {
                            vm.provinceOption = {
                                tooltip : {
                                    trigger: 'axis'
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '5%',
                                    containLabel: true
                                },
                                yAxis: [
                                    {
                                        type : 'category',
                                        data : provinceData.yData,
                                        splitLine:{
                                            show:false
                                        },
                                        splitArea:{
                                            show:true,
                                        },
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                xAxis : [
                                    {
                                        type : 'value',
                                        splitLine:{
                                            show:false
                                        },
                                        splitArea:{
                                            show:false,
                                        }
                                    }
                                ],
                                series : [
                                    {
                                        name:'排名',
                                        type:'bar',
                                        label:{
                                            normal:{
                                                show:true,
                                                position:'right'
                                            }
                                        },
                                        itemStyle:{
                                            normal:{
                                                color: function(params) {
                                                    var colorList = ['#29D582','#24CCF6','#00AAFF','FFC62F','#FF587B'];
                                                    return colorList[params.dataIndex]
                                                }
                                            }
                                        },
                                        data:provinceData.xData
                                    }
                                ]
                            };
                            resize.resize(vm.provinceEcharts.resize);
                            vm.provinceEcharts.setOption(vm.provinceOption);
                            vm.provinceEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initProvince();
                        }, 1000);
                    }
                });
            });
            $timeout(function () {
                vm.cityEcharts = echarts.init(document.getElementById('city'), THEME);
                vm.cityEcharts.showLoading();
                var cityData = {
                    xData: [],
                    yData: []
                };
                statisticServer.getInProvince(vm._postData).then(function (data) {
                    if(data.status) {
                        angular.forEach(data.data, function(value){
                            cityData.xData.push(value.percentage);
                            cityData.yData.push(value.name);
                        });
                        vm.initCity = function () {
                            vm.cityOption = {
                                tooltip : {
                                    trigger: 'axis'
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '5%',
                                    containLabel: true
                                },
                                yAxis: [
                                    {
                                        type : 'category',
                                        data : cityData.yData,
                                        splitLine:{
                                            show:false
                                        },
                                        splitArea:{
                                            show:true,
                                        },
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                xAxis : [
                                    {
                                        type : 'value',
                                        splitLine:{
                                            show:false
                                        },
                                        splitArea:{
                                            show:false,
                                        }
                                    }
                                ],
                                series : [
                                    {
                                        name:'排名',
                                        type:'bar',
                                        label:{
                                            normal:{
                                                show:true,
                                                position:'right'
                                            }
                                        },
                                        itemStyle:{
                                            normal:{
                                                color: function(params) {
                                                    var colorList = ['#29D582','#24CCF6','#00AAFF','FFC62F','#FF587B'];
                                                    return colorList[params.dataIndex]
                                                }
                                            }
                                        },
                                        data:cityData.xData
                                    }
                                ]
                            };
                            resize.resize(vm.cityEcharts.resize);
                            vm.cityEcharts.setOption(vm.cityOption);
                            vm.cityEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initCity();
                        }, 1000);
                    }
                });
            });
        };
        $scope.init();
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/7
 * Time: 15:02
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.statistic').controller('grantInAidController', grantInAidController);

    grantInAidController.$inject = [
        '$scope',
        '$timeout',
        'THEME',
        'resize',
        'locals',
        'commonsServer',
        'statisticServer'
    ];

    function grantInAidController($scope, $timeout, THEME, resize, locals,commonsServer, statisticServer) {
        /*$scope.year = locals.getObject('year', '');
        console.log('2', $scope.year);*/
        $scope.vm =  {};
        commonsServer.getCommonsSchoolYearAll().then(function (data) {
            if(data.status) {
                $scope.startYears = angular.copy(data.data);
                $scope.endYears = angular.copy(data.data);
                $scope.startYear = $scope.startYears[0];
                $scope.endYear = $scope.endYears[0];
            }
        });
        $scope.changeYear = function() {
            $scope.init();
        }
        commonsServer.getCommonsCollege().then(function (data) {
            if(data.status) {
                $scope.vm.colleges = data.data;
                if($scope.vm.colleges.length === 1) {
                    $scope.vm.college = $scope.vm.colleges[0];
                }
            }
            $scope.change();
        });

        $scope.change = function() {
            if($scope.vm.college) {
                commonsServer.getCommonsMajor($scope.vm.college.id).then(function (data) {
                    if(data.status) {
                        $scope.vm.majors = data.data;
                    }
                    $scope.changeGrade();
                    $scope.init();
                });
            } else{
                $scope.vm.majors={};
            }
        };
        $scope.changeGrade = function() {
            if($scope.vm.major) {
                commonsServer.getCommonsGrade($scope.vm.major.id).then(function (data) {
                    if (data.status) {
                        $scope.vm.grades = data.data;
                    }
                    $scope.changeClass();
                    $scope.init();
                });
            }else{
                $scope.vm.grades = {};
            }
        };
        $scope.changeClass = function() {
            if($scope.vm.major && $scope.vm.grade) {
                commonsServer.getCommonsClass([$scope.vm.major.id, $scope.vm.grade.id]).then(function (data) {
                    if (data.status) {
                        $scope.vm.classes = data.data;
                        $scope.init();
                    }
                });
            }else{
                $scope.vm.classes = {};
            }
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            var vm = this;
            if($scope.startYear && $scope.endYear) {
                vm._postData = {
                    endSchoolYear: $scope.endYear.name,
                    startSchoolYear: $scope.startYear.name
                };
            }else {
                vm._postData = {
                    endSchoolYear: '2011-2012',
                    startSchoolYear: '2011-2012'
                };
            }
            if($scope.vm.college) {
                vm._postData.collegeName = $scope.vm.college.name;
            } else{
                vm._postData.collegeName = '-1';
            }

            if($scope.vm.major) {
                vm._postData.majorName = $scope.vm.major.name;
            } else{
                vm._postData.majorName = '-1';
            }

            if($scope.vm.grade) {
                vm._postData.gradeName = $scope.vm.grade.name;
            } else{
                vm._postData.gradeName = '-1';
            }
            if($scope.vm.class) {
                vm._postData.className = $scope.vm.class.name;
            } else{
                vm._postData.className = '-1';
            }
            statisticServer.getNumberAndMoney(vm._postData).then(function (data) {
                var subData = {
                    name:[],
                    number:[],
                    money:[]
                };
                if(data.status) {
                    var length = data.data.length;
                    $scope.helpData = data.data[length-1];
                    for(var i=0; i<length-1; i++){
                        subData.name.push(data.data[i].subsidizeName);
                        subData.number.push(data.data[i].number);
                        subData.money.push(data.data[i].money);
                    }
                    $timeout(function () {
                        vm.moneyEcharts = echarts.init(document.getElementById('money'), THEME);
                        vm.moneyEcharts.showLoading();
                        vm.initMoney = function () {
                            vm.moneyOption = {
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        data : subData.name,
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value'
                                    }
                                ],
                                series : [
                                    {
                                        name:'直接访问',
                                        type:'bar',
                                        barWidth: '40%',
                                        data:subData.money
                                    }
                                ]
                            };
                            resize.resize(vm.moneyEcharts.resize);
                            vm.moneyEcharts.setOption(vm.moneyOption);
                            vm.moneyEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initMoney();
                        }, 1000);
                    });

                    $timeout(function () {
                        vm.countEcharts = echarts.init(document.getElementById('count'), THEME);
                        vm.countEcharts.showLoading();
                        vm.initCount = function () {
                            vm.countOption = {
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        data : subData.name,
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value'
                                    }
                                ],
                                series : [
                                    {
                                        name:'直接访问',
                                        type:'bar',
                                        barWidth: '40%',
                                        data:subData.number
                                    }
                                ]
                            };
                            resize.resize(vm.countEcharts.resize);
                            vm.countEcharts.setOption(vm.countOption);
                            vm.countEcharts.hideLoading();
                        };
                        $timeout(function () {
                            vm.initCount();
                        }, 1000);
                    });
                }
            });
        };
        $scope.init();
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/7
 * Time: 15:46
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.statistic').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.statistic',
            config: {
                url: '/statistic',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/statistic/statistic.html',
                        controller: 'statisticController'
                    }
                }
            }
        },{
            state: 'main.statistic.economic',
            config: {
                url: '/economic',
                templateUrl: 'dist/tpls/statistic/economic.html',
                controller: 'economicController'
            }
        },{
            state: 'main.statistic.grantInAid',
            config: {
                url: '/grantInAid',
                templateUrl: 'dist/tpls/statistic/grantInAid.html',
                controller: 'grantInAidController'
            }
        }];
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/7
 * Time: 15:01
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.statistic').controller('statisticController', statisticController);

    statisticController.$inject = [
        '$scope',
        'commonsServer',
        'locals',
        '$state'
    ];

    function statisticController($scope, commonsServer, locals, $state) {

        /**
         * 初始化信息
         */
        $state.go('main.statistic.economic');
        /*$scope.init = function () {
            commonsServer.getCommonsSchoolYearAll().then(function (data) {
                if(data.status) {
                    $scope.startYears = angular.copy(data.data);
                    $scope.endYears = angular.copy(data.data);
                    $scope.startYear = $scope.startYears[0];
                    $scope.endYear = $scope.endYears[0];

                }
            });
        };
        $scope.init();*/
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.srGroup',
            config: {
                url: '/srGroup',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/subsidizeRecord/srGroup.html',
                        controller: 'srGroupController'
                    }
                }
            }
        }];
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').controller('srApplyController', srApplyController);

    srApplyController.$inject = [
        '$scope',
        '$rootScope',
        'analysisEcharts',
        'grantsAnalyseServer',
        'grantsCommonServer',
        'tools',
        'THEME',
        'loading'];

    function srApplyController($scope, $rootScope, analysisEcharts, grantsAnalyseServer, grantsCommonServer, tools, THEME, loading) {
        /*$scope.vm = {
            moneyList: []
        };
        var origin = echarts.init(document.getElementById('origin'), THEME);
        var consumption = echarts.init(document.getElementById('consumption'), THEME);
        var distribution = echarts.init(document.getElementById('distribution'), THEME);
        var originOption = analysisEcharts.origin;
        var consumptionOption = analysisEcharts.consumption;
        var distributionOption = analysisEcharts.distribution;
        origin.showLoading(loading);
        consumption.showLoading(loading);
        distribution.showLoading(loading);

        grantsCommonServer.listSchoolYear().then(function (data) {
            if (data.status) {
                $scope.vm.schoolList = data.data.map(function (value) {
                    return value.startYear + '-' + value.endYear + '学年';
                });
                $scope.vm.choosedSchool = $scope.vm.schoolList[0];
                $scope.init();
            }
        });

        $scope.vm.changeSchool = function () {
            $scope.init();
        };

        $scope.init = function () {
            grantsAnalyseServer.grantsAndPoverty([$scope.vm.choosedSchool.substring(0, 4), $scope.vm.choosedSchool.substring(5, 9)]).then(function (data) {
                if (data.status) {
                    $scope.vm.grantsAndPoverty = data.data;
                }
            });
            grantsAnalyseServer.originOfStudentDistribute([$scope.vm.choosedSchool.substring(0, 4), $scope.vm.choosedSchool.substring(5, 9)]).then(function (data) {
                if (data.status) {
                    $scope.vm.areaDistributeData = data.data.areaDistributeData;
                    originOption.series[0].data = data.data.chinaMapData;
                    origin.clear();
                    origin.setOption(originOption);
                    origin.hideLoading();
                }
            });
            grantsAnalyseServer.getConsum().then(function (data) {
                if (data.status) {
                    consumptionOption.xAxis.data = data.data.xAxis;
                    consumptionOption.legend.data = ['贫困学生每月消费', '学校平均每月消费'];
                    consumptionOption.series = [
                        {
                            name: '贫困学生每月消费',
                            type: 'bar',
                            barMaxWidth: 50,
                            data: data.data.student
                        },
                        {
                            name: '学校平均每月消费',
                            type: 'bar',
                            barMaxWidth: 50,
                            data: data.data.school
                        }
                    ];
                    consumption.clear();
                    consumption.setOption(consumptionOption);
                    consumption.hideLoading();
                }
            });
            grantsAnalyseServer.getDistribution().then(function (data) {
                if (data.status) {
                    distributionOption.legend.data = ['食堂', '超市', '交通', '打印', '其他'];
                    distributionOption.label = {
                        normal: {
                            formatter: '{b} {d}%',
                            position: 'insideTopRight'
                        }
                    };
                    distributionOption.series = [
                        {
                            name: '消费分布',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            data: data.data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ];
                    distribution.clear();
                    distribution.setOption(distributionOption);
                    distribution.hideLoading();
                }
            });
            grantsAnalyseServer.getAnalysis().then(function (data) {
                if (data.status) {
                    $scope.vm.analysisMoney = data.data.money;
                    var getData = function () {
                        return [{
                            value: data.data.percent
                        }, {
                            value: 1 - data.data.percent,
                            itemStyle: {
                                normal: {
                                    color: '#eaecef'
                                }
                            }
                        }];
                    };
                    analysisOption.title = {
                        text: (data.data.percent * 100) + '%',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontSize: 26
                        }
                    };
                    analysisOption.tooltip = {
                        show: false
                    };
                    analysisOption.series = [{
                        name: '贫困学生参与勤工助学比例',
                        type: 'pie',
                        radius: ['60%', '70%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        data: getData()
                    }];
                    analysis.clear();
                    analysis.setOption(analysisOption);
                    analysis.hideLoading();
                }
            });
            grantsAnalyseServer.getMoney().then(function (data) {
                if (data.status) {
                    $scope.vm.moneyList = data.data;
                }
            });
        };

        window.onresize = function () {
            origin.resize();
            consumption.resize();
            distribution.resize();
            analysis.resize();
        };*/
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').controller('srEconController', srEconController);

    srEconController.$inject = [
        '$scope',
        '$rootScope',
        'analysisEcharts',
        'grantsAnalyseServer',
        'grantsCommonServer',
        'subsidizeRecordCommonServer',
        'commonsServer',
        'tools',
        'THEME',
        'loading',
    'NgTableParams'];

    function srEconController($scope, $rootScope, analysisEcharts, grantsAnalyseServer, grantsCommonServer, subsidizeRecordCommonServer, commonsServer, tools, THEME, loading, NgTableParams) {
        $scope.vm = {
            tableFlag: 0,
            college: '',
            collegeList: [],
            grade: '',
            gradeList: [],
            gradeChoosed: '',
            collegeChoosed: '',
        };
        $scope.init = function () {
            commonsServer.getCommonsCollege().then(function (data) {
                if(data.status) {
                    $scope.vm.college = data.data[0].name;
                    $scope.vm.collegeList = angular.copy(data.data.map(function(value){
                        return value.name;
                    }));
                    $scope.vm.collegeChoosed = $scope.vm.college;
                    commonsServer.getCommonsSchoolYearCurrent().then(function (data) {
                        if(data.status) {
                            $scope.vm.grade = data.data.num.toString();
                            $scope.vm.gradeChoosed = $scope.vm.grade + '级';
                            $scope.getSubsidizeHistoryPovertyList($scope.vm.collegeChoosed,$scope.vm.grade);

                        }
                    })
                }
            });

        };
        $scope.getSubsidizeHistoryPovertyList = function (college,grade) {
            subsidizeRecordCommonServer.getSubsidizeHistoryPovertyList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        }
        $scope.init();
        $scope.getAllGrade = function () {
            commonsServer.getCommonsGradeAll().then(function (data) {
                if(data.status) {
                    $scope.vm.gradeList = angular.copy(data.data.map(function(value){
                        return value.name + '级';
                    }));
                }
            })
        };
        $scope.vm.gradechange = function (val) {
            $scope.getSubsidizeHistoryPovertyList($scope.vm.collegeChoosed, val.substring(0, val.length-1))
        }
        $scope.vm.collegechange = function () {
            $scope.getSubsidizeHistoryPovertyList($scope.vm.collegeChoosed, $scope.vm.gradeChoosed.substring(0, $scope.vm.gradeChoosed.length-1))
        }
        $scope.getAllGrade();
        $scope.download = function (college, grade) {
                subsidizeRecordCommonServer.getSubsidizeHistoryPovertyListExcel([college, grade.substring(0, grade.length-1)]).then(function (data) {
                    if (data.status) {
                        window.open(data.data.url);
                    }
                });
        };

    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').controller('srEndeavorController', srEndeavorController);

    srEndeavorController.$inject = [
        '$scope',
        '$rootScope',
        'analysisEcharts',
        'grantsAnalyseServer',
        'grantsCommonServer',
        'subsidizeRecordCommonServer',
        'commonsServer',
        'tools',
        'THEME',
        'loading',
        'NgTableParams'];

    function srEndeavorController($scope, $rootScope, analysisEcharts, grantsAnalyseServer, grantsCommonServer, subsidizeRecordCommonServer, commonsServer, tools, THEME, loading, NgTableParams) {
        $scope.vm = {
            tableFlag: 0,
            college: '',
            collegeList: [],
            grade: '',
            gradeList: [],
            gradeChoosed: '',
            collegeChoosed: '',
        };
        $scope.init = function () {
            commonsServer.getCommonsCollege().then(function (data) {
                if(data.status) {
                    $scope.vm.college = data.data[0].name;
                    $scope.vm.collegeList = angular.copy(data.data.map(function(value){
                        return value.name;
                    }));
                    $scope.vm.collegeChoosed = $scope.vm.college;
                    commonsServer.getCommonsSchoolYearCurrent().then(function (data) {
                        if(data.status) {
                            $scope.vm.grade = data.data.num.toString();
                            $scope.vm.gradeChoosed = $scope.vm.grade + '级';
                            $scope.getSubsidizeHistoryInspScholarshipList($scope.vm.collegeChoosed,$scope.vm.grade);

                        }
                    })
                }
            });

        };
        $scope.getSubsidizeHistoryInspScholarshipList = function (college,grade) {
            subsidizeRecordCommonServer.getSubsidizeHistoryInspScholarshipList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        }
        $scope.init();
        $scope.getAllGrade = function () {
            commonsServer.getCommonsGradeAll().then(function (data) {
                if(data.status) {
                    $scope.vm.gradeList = angular.copy(data.data.map(function(value){
                        return value.name + '级';
                    }));
                }
            })
        };
        $scope.vm.gradechange = function (val) {
            $scope.getSubsidizeHistoryInspScholarshipList($scope.vm.collegeChoosed, val.substring(0, val.length-1))
        }
        $scope.vm.collegechange = function () {
            $scope.getSubsidizeHistoryInspScholarshipList($scope.vm.collegeChoosed, $scope.vm.gradeChoosed.substring(0, $scope.vm.gradeChoosed.length-1))
        }
        $scope.getAllGrade();
        $scope.download = function (college, grade) {
            subsidizeRecordCommonServer.getSubsidizeHistoryInspScholarshipListExcel([college, grade.substring(0, grade.length-1)]).then(function (data) {
                if (data.status) {
                    window.open(data.data.url);
                }
            });
        };

    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').controller('srGrantController', srGrantController);

    srGrantController.$inject = [
        '$scope',
        '$rootScope',
        'analysisEcharts',
        'grantsAnalyseServer',
        'grantsCommonServer',
        'subsidizeRecordCommonServer',
        'commonsServer',
        'tools',
        'THEME',
        'loading',
        'NgTableParams'];

    function srGrantController($scope, $rootScope, analysisEcharts, grantsAnalyseServer, grantsCommonServer, subsidizeRecordCommonServer, commonsServer, tools, THEME, loading, NgTableParams) {
        $scope.vm = {
            tableFlag: 0,
            college: '',
            collegeList: [],
            grade: '',
            gradeList: [],
            gradeChoosed: '',
            collegeChoosed: '',
        };
        $scope.init = function () {
            commonsServer.getCommonsCollege().then(function (data) {
                if(data.status) {
                    $scope.vm.college = data.data[0].name;
                    $scope.vm.collegeList = angular.copy(data.data.map(function(value){
                        return value.name;
                    }));
                    $scope.vm.collegeChoosed = $scope.vm.college;
                    commonsServer.getCommonsSchoolYearCurrent().then(function (data) {
                        if(data.status) {
                            $scope.vm.grade = data.data.num.toString();
                            $scope.vm.gradeChoosed = $scope.vm.grade + '级';
                            $scope.getSubsidizeHistoryGrantsList($scope.vm.collegeChoosed,$scope.vm.grade);

                        }
                    })
                }
            });

        };
        $scope.getSubsidizeHistoryGrantsList = function (college,grade) {
            subsidizeRecordCommonServer.getSubsidizeHistoryGrantsList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        }
        $scope.init();
        $scope.getAllGrade = function () {
            commonsServer.getCommonsGradeAll().then(function (data) {
                if(data.status) {
                    $scope.vm.gradeList = angular.copy(data.data.map(function(value){
                        return value.name + '级';
                    }));
                }
            })
        };
        $scope.vm.gradechange = function (val) {
            $scope.getSubsidizeHistoryGrantsList($scope.vm.collegeChoosed, val.substring(0, val.length-1))
        }
        $scope.vm.collegechange = function () {
            $scope.getSubsidizeHistoryGrantsList($scope.vm.collegeChoosed, $scope.vm.gradeChoosed.substring(0, $scope.vm.gradeChoosed.length-1))
        }
        $scope.getAllGrade();
        $scope.download = function (college, grade) {
            subsidizeRecordCommonServer.getSubsidizeHistoryGrantsListExcel([college, grade.substring(0, grade.length-1)]).then(function (data) {
                if (data.status) {
                    window.open(data.data.url);
                }
            });
        };

    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').controller('srGroupController', srGroupController);

    srGroupController.$inject = [
        '$scope',
        '$rootScope',
        'analysisEcharts',
        'grantsAnalyseServer',
        'grantsCommonServer',
        'subsidizeRecordCommonServer',
        'commonsServer',
        'tools',
        'THEME',
        'loading',
        'NgTableParams'];

    function srGroupController($scope, $rootScope, analysisEcharts, grantsAnalyseServer, grantsCommonServer, subsidizeRecordCommonServer, commonsServer, tools, THEME, loading, NgTableParams) {
        $scope.vm = {
            active: 0,
            collegeList: [],
            gradeList: [],
            gradeChoosed: '',
            collegeChoosed: '',
            grade: '',
            srEcon: {
                tableFlag: 0,
                college: '',
                studentList: [],
            },
            srGrant: {
                tableFlag: 0,
                college: '',
                studentList: [],
            },
            srEndeavor: {
                tableFlag: 0,
                college: '',
                studentList: [],
            }
        }
        /**
         * 修改nav active
         * @param val
         */
        $scope.changeNav = function (val) {
            $scope.vm.active = val;
        }
        $scope.init = function () {
            commonsServer.getCommonsCollege().then(function (data) {
                if(data.status) {
                    $scope.vm.college = data.data[0].name;
                    $scope.vm.collegeList = angular.copy(data.data.map(function(value){
                        return value.name;
                    }));
                    $scope.vm.collegeChoosed = $scope.vm.college;
                    $scope.getAllGrade(function () {
                        $scope.vm.gradeChoosed = $scope.vm.gradeList[0];
                        $scope.getSubsidizeHistoryData($scope.vm.collegeChoosed,$scope.vm.gradeChoosed.label);
                    });

                }
            });

        };
        $scope.getSubsidizeHistoryData = function (college,grade) {
           // 获取经济困难认定的结果
            subsidizeRecordCommonServer.getSubsidizeHistoryPovertyList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.srEcon.studentList = data.data;
                    $scope.vm.srEcon.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.vm.srEcon.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.srEcon.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.srEcon.tableFlag = 2;
                }
            });
            // 获取助学金认定的结果
            subsidizeRecordCommonServer.getSubsidizeHistoryGrantsList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.srGrant.studentList = data.data;
                    $scope.vm.srGrant.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.vm.srGrant.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.srGrant.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.srGrant.tableFlag = 2;
                }
            });
            // 获取励志奖学金
            subsidizeRecordCommonServer.getSubsidizeHistoryInspScholarshipList([college, grade]).then(function (data) {
                if (data.status) {
                    $scope.vm.srEndeavor.studentList = data.data;
                    $scope.vm.srEndeavor.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.vm.srEndeavor.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.srEndeavor.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.srEndeavor.tableFlag = 2;
                }
            });

        }
        $scope.init();
        $scope.getAllGrade = function (callback) {
            commonsServer.getCommonsGradeAll().then(function (data) {
                if(data.status) {
                    $scope.vm.gradeList = angular.copy(data.data.map(function(value){
                        return {
                            name: value.name+'级',
                            label: value.name
                        };
                    }));
                    $scope.vm.gradeList.unshift({
                        name: '所有年级',
                        label: '-1'
                    })
                    callback && callback()
                }
            })
        };
        $scope.vm.gradechange = function (val) {
            console.log(val)
            $scope.getSubsidizeHistoryData($scope.vm.collegeChoosed, val.label)
        }
        $scope.vm.collegechange = function () {
            $scope.getSubsidizeHistoryData($scope.vm.collegeChoosed, $scope.vm.gradeChoosed.label)
        }

        $scope.download = function (college, grade) {
            if($scope.vm.active == 0) {
                subsidizeRecordCommonServer.getSubsidizeHistoryPovertyListExcel([college, grade.label]).then(function (data) {
                    if (data.status) {
                        var _download  = document.createElement('a');
                        _download.setAttribute('href',data.data);
                        _download.click();

                    }
                });
            }else if($scope.vm.active == 1) {
                subsidizeRecordCommonServer.getSubsidizeHistoryGrantsListExcel([college, grade.label]).then(function (data) {
                    if (data.status) {
                        var _download  = document.createElement('a');
                        _download.setAttribute('href',data.data);
                        _download.click();
                    }
                });
            }else if($scope.vm.active == 2) {
                subsidizeRecordCommonServer.getSubsidizeHistoryInspScholarshipListExcel([college, grade.label]).then(function (data) {
                    if (data.status) {
                        var _download  = document.createElement('a');
                        _download.setAttribute('href',data.data);
                        _download.click();
                    }
                });
            }



        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/3/2
 * Time: 14:53
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.subsidizeRecord').controller('srWorkController', srWorkController);

    srWorkController.$inject = [
        '$scope',
        '$rootScope',
        'analysisEcharts',
        'grantsAnalyseServer',
        'grantsCommonServer',
        'tools',
        'THEME',
        'loading'];

    function srWorkController($scope, $rootScope, analysisEcharts, grantsAnalyseServer, grantsCommonServer, tools, THEME, loading) {
        /*$scope.vm = {
            moneyList: []
        };
        var origin = echarts.init(document.getElementById('origin'), THEME);
        var consumption = echarts.init(document.getElementById('consumption'), THEME);
        var distribution = echarts.init(document.getElementById('distribution'), THEME);
        var originOption = analysisEcharts.origin;
        var consumptionOption = analysisEcharts.consumption;
        var distributionOption = analysisEcharts.distribution;
        origin.showLoading(loading);
        consumption.showLoading(loading);
        distribution.showLoading(loading);

        grantsCommonServer.listSchoolYear().then(function (data) {
            if (data.status) {
                $scope.vm.schoolList = data.data.map(function (value) {
                    return value.startYear + '-' + value.endYear + '学年';
                });
                $scope.vm.choosedSchool = $scope.vm.schoolList[0];
                $scope.init();
            }
        });

        $scope.vm.changeSchool = function () {
            $scope.init();
        };

        $scope.init = function () {
            grantsAnalyseServer.grantsAndPoverty([$scope.vm.choosedSchool.substring(0, 4), $scope.vm.choosedSchool.substring(5, 9)]).then(function (data) {
                if (data.status) {
                    $scope.vm.grantsAndPoverty = data.data;
                }
            });
            grantsAnalyseServer.originOfStudentDistribute([$scope.vm.choosedSchool.substring(0, 4), $scope.vm.choosedSchool.substring(5, 9)]).then(function (data) {
                if (data.status) {
                    $scope.vm.areaDistributeData = data.data.areaDistributeData;
                    originOption.series[0].data = data.data.chinaMapData;
                    origin.clear();
                    origin.setOption(originOption);
                    origin.hideLoading();
                }
            });
            grantsAnalyseServer.getConsum().then(function (data) {
                if (data.status) {
                    consumptionOption.xAxis.data = data.data.xAxis;
                    consumptionOption.legend.data = ['贫困学生每月消费', '学校平均每月消费'];
                    consumptionOption.series = [
                        {
                            name: '贫困学生每月消费',
                            type: 'bar',
                            barMaxWidth: 50,
                            data: data.data.student
                        },
                        {
                            name: '学校平均每月消费',
                            type: 'bar',
                            barMaxWidth: 50,
                            data: data.data.school
                        }
                    ];
                    consumption.clear();
                    consumption.setOption(consumptionOption);
                    consumption.hideLoading();
                }
            });
            grantsAnalyseServer.getDistribution().then(function (data) {
                if (data.status) {
                    distributionOption.legend.data = ['食堂', '超市', '交通', '打印', '其他'];
                    distributionOption.label = {
                        normal: {
                            formatter: '{b} {d}%',
                            position: 'insideTopRight'
                        }
                    };
                    distributionOption.series = [
                        {
                            name: '消费分布',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            data: data.data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ];
                    distribution.clear();
                    distribution.setOption(distributionOption);
                    distribution.hideLoading();
                }
            });
            grantsAnalyseServer.getAnalysis().then(function (data) {
                if (data.status) {
                    $scope.vm.analysisMoney = data.data.money;
                    var getData = function () {
                        return [{
                            value: data.data.percent
                        }, {
                            value: 1 - data.data.percent,
                            itemStyle: {
                                normal: {
                                    color: '#eaecef'
                                }
                            }
                        }];
                    };
                    analysisOption.title = {
                        text: (data.data.percent * 100) + '%',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontSize: 26
                        }
                    };
                    analysisOption.tooltip = {
                        show: false
                    };
                    analysisOption.series = [{
                        name: '贫困学生参与勤工助学比例',
                        type: 'pie',
                        radius: ['60%', '70%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        data: getData()
                    }];
                    analysis.clear();
                    analysis.setOption(analysisOption);
                    analysis.hideLoading();
                }
            });
            grantsAnalyseServer.getMoney().then(function (data) {
                if (data.status) {
                    $scope.vm.moneyList = data.data;
                }
            });
        };

        window.onresize = function () {
            origin.resize();
            consumption.resize();
            distribution.resize();
            analysis.resize();
        };*/
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.temporaryDiff').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.tdSubsidy',
            config: {
                url: '/tdSubsidy',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/temporaryDiff/tdSubsidy.html',
                        controller: 'tdSubsidyController'
                    }
                }
            }
        }];
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.temporaryDiff').controller('tdSubsidyController', tdSubsidyController);

    tdSubsidyController.$inject = [
        '$scope',
        '$filter',
        'temporaryDiffServer',
        'tools',
        'NgTableParams',
        'FileUploader',
        '$element',
        'ROOT'];

    function tdSubsidyController($scope, $filter, temporaryDiffServer, tools, NgTableParams, FileUploader, $element, ROOT) {
        $scope.vm = {
            tableFlag: 0,
            levels: ['特别困难', '困难', '一般困难', '不困难']
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            temporaryDiffServer.getAllTemDiff().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.vm.studentList.map(function (item) {
                        item.handleTime = $filter('date')(item.handleTime, 'yyyy-MM-dd')
                        return true
                    })
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                    // _flag for check init
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr = value;
                            if (_flag) {
                                $scope.initCheck();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 新增临时困难补助
         */
        $scope.deleteStu = function (id) {
         temporaryDiffServer.deleteTemporarySubsidizeSingle(id).then(function (data) {
         if(data.status) {
         $scope.init()
         }
         })
         }
        $scope.addSubModalShow = function (grants) {
            $('#addSub').modal({backdrop: 'static', keyboard: false});
            //初始化提交验证为false
            $scope.vm.addSubSubmit = false;
            $scope.vm.temporarySub = {};
            $scope.vm.temporarySub.title = '新增临时困难补助';

            $scope.addSub = function () {
                $scope.vm.addSubSubmit = true;
                var n = Number($scope.vm.temporarySub.amount);
                if (isNaN(n))
                {
                    tools.alertError('额度请填写数字');
                    $scope.vm.addSubSubmit = false;
                    return false
                }
                if ($scope.vm.subForm.$valid) {
                    temporaryDiffServer.addTemDiff($scope.vm.temporarySub).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('保存成功');
                            $scope.init();
                        }
                        $('#addSub').modal('hide');
                    });
                } else {
                    tools.alertError('请填写完整信息');
                }
            };
        };
        $scope.editSubModalShow = function (student) {
            $('#editSub').modal({backdrop: 'static', keyboard: false});
            //初始化提交验证为false
            $scope.vm.editSubSubmit = false;
            $scope.vm.temporaryEditSub = {};
            $scope.vm.temporaryEditSub.id = student.id
            $scope.vm.temporaryEditSub.studentSn = student.studentSn
            $scope.vm.temporaryEditSub.amount = student.amount
            $scope.vm.temporaryEditSub.reason = student.reason
            $scope.editSub = function () {
                $scope.vm.editSubSubmit = true;
                var n = Number($scope.vm.temporaryEditSub.amount);
                if (isNaN(n))
                {
                    tools.alertError('额度请填写数字');
                    $scope.vm.addSubSubmit = false;
                    return false
                }
                if ($scope.vm.editSubForm.$valid) {
                    temporaryDiffServer.putTemporarySubsidize($scope.vm.temporaryEditSub).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('保存成功');
                            $scope.init();
                        }
                        $('#editSub').modal('hide');
                    });
                } else {
                    tools.alertError('请填写完整信息');
                }
                $scope.vm.editSubSubmit = false;
            };
        };
        /**
         * 批量处理
         */
        $scope.dealAll = function (flag) {

            if ($scope.checkboxes.choosedStudent.length > 0) {

                $scope.vm.isDealingAll = true;

                angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                    value.isPass = flag;
                });
                var array = $scope.checkboxes.choosedStudent.map(function (item) {
                    return item.id
                })
                temporaryDiffServer.deleteTemporarySubsidize(array).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('通过成功');
                        $scope.init();
                    }
                    $scope.vm.isDealingAll = false;
                });
            } else {
                tools.alertError('请先选择要批量处理的学生');
            }
        };
        $scope.initCheck = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes.checked;
            }, function (value) {
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.id] = value;
                });
            });

            // watch for data checkboxes
            $scope.$watch(function () {
                return $scope.checkboxes.items;
            }, function (values) {
                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr.length;
                $scope.checkboxes.choosedStudent = [];
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.id] && $scope.checkboxes.choosedStudent.push(item);
                    checked += ($scope.checkboxes.items[item.id]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.id]) || 0;
                });
                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }
                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                console.log($scope.checkboxes.choosedStudent)
            }, true);
        };

        /**
         * 上传excel
         * */
        (function () {
            var uploader = $scope.uploader = new FileUploader({
                url: ROOT + '/temporarySubsidize/batch',
                autoUpload: true,
                removeAfterUpload: true,
                queueLimit: 1
            });

            uploader.onAfterAddingFile = function (fileItem) {

                var lastName = fileItem.file.name.slice((fileItem.file.name.lastIndexOf('.')+1)).toLowerCase();
                var _arr = ['xlsx', 'xls'];

                if (_arr.indexOf(lastName) === -1) {
                    tools.alertError('请上传【xlsx,xls】等规定格式的excel文件');
                    uploader.clearQueue();
                }
                if (fileItem.file.size > 20971520) {
                    tools.alertError('上传文件大小不得大于15M');
                    uploader.clearQueue();
                }
            };

            uploader.onCompleteItem = function (fileItem, response) {
                if (response.status) {
                    tools.alertSuccess('上传成功');
                    $scope.init();
                } else {
                    tools.alertError(response.message);
                }
            };
        })();




    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/9/13
 * Time: 11:16
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('grantsResultController', grantsResultController);

    grantsResultController.$inject = [
        '$scope',
        'grantsSchoolServer',
        'NgTableParams',
        'grantsCommonServer'];

    function grantsResultController($scope, grantsSchoolServer, NgTableParams, grantsCommonServer) {
        $scope.vm = {
            tableFlag: 0
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            grantsCommonServer.getGrantsResult().then(function (data) {
                if (data.status) {
                    $scope.vm.data = data.data;
                    $scope.vm.tableFlag = 1;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: data.data.dataList,
                        counts: [10, 15, 20, 30]
                    });
                }
            });

        };
        $scope.init();

        /**
         * 导出名单
         */
        $scope.download = function () {
            grantsCommonServer.downloadDynamicStudentList().then(function (data) {
                if (data.status) {
                    window.open(data.data.url);
                }
            });
        };
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('dynamicManageController', dynamicManageController);

    dynamicManageController.$inject = [
        '$scope',
        'povertyCommonServer',
        'tools',
        'NgTableParams'];

    function dynamicManageController($scope, povertyCommonServer, tools, NgTableParams) {
        $scope.vm = {
            tableFlag: 0,
            levels: ['特别困难', '困难', '一般困难', '不困难']
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyCommonServer.getDynamicStudent().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 修改等级
         */
        $scope.vm.changeLevel = function (student, level) {
            if (level) {
                povertyCommonServer.dyModifyPovertyLevel({
                    studentId: student.studentId,
                    level: level
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('修改成功');
                    }
                });
            }
        };

        /**
         * 下载
         * @type {boolean}
         */
        $scope.isDownloading = false;

        $scope.downloadList = function () {

            $scope.isDownloading = true;

            povertyCommonServer.downloadDyManage().then(function (data) {
                if (data.status) {
                    window.open(data.data);
                } else {
                    tools.alertError(data.message);
                }
                $scope.isDownloading = false;
            });
        };
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('povertyResultController', povertyResultController);

    povertyResultController.$inject = [
        '$scope',
        'povertyCommonServer',
        'NgTableParams'];

    function povertyResultController($scope, povertyCommonServer, NgTableParams) {
        $scope.vm = {
            tableFlag: 0
        };

        /**
         * 初始化申请列表信息
         */
        $scope.initApply = function () {
            povertyCommonServer.listStudentPovertyApply().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };

        $scope.initApply();
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.common').controller('studentPovertyMaterialController', studentPovertyMaterialController);

    studentPovertyMaterialController.$inject = [
        '$scope',
        'povertyCommonServer',
        '$stateParams'];

    function studentPovertyMaterialController($scope, povertyCommonServer, $stateParams) {
        $scope.vm = {
            studentDetailInfo: {}
        };

        /**
         * 查看学生申请材料
         */
        $scope.vm.studentId = $stateParams.studentId;
        povertyCommonServer.getAttachments($scope.vm.studentId).then(function (data) {
            if (data.status) {
                $scope.vm.uploadsList = data.data;
            }
        });
    }
})();

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

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/5
 * Time: 11:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 下载贫困认定列表
     */
    'use strict';
    angular.module('app.core').directive('download', [function () {
        return {
            restrict: 'E',
            template: '<span><a href="javascript:;" ng-if="!isDownloading" ng-click="downloadList()">下载名单</a><span ng-if="isDownloading">正在下载…</span></span>',
            replace: true,
            scope: {},
            controller: [
                '$scope',
                'povertyCommonServer',
                'tools',
                function ($scope, povertyCommonServer, tools) {

                    $scope.isDownloading = false;

                    $scope.downloadList = function () {

                        $scope.isDownloading = true;

                        povertyCommonServer.downloadPovertyApply().then(function (data) {
                            if (data.status) {
                                window.open(data.data);
                            } else {
                                tools.alertError(data.message);
                            }
                            $scope.isDownloading = false;
                        });
                    };

                }
            ]
        };
    }]);
})();
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
     * 学生对公示发反馈意见
     */
    angular.module('app.core').directive('feedBack', ['$rootScope', 'povertyStudentServer', 'tools',
        function ($rootScope, povertyStudentServer, tools) {
            return {
                restrict: 'E',
                templateUrl: 'dist/tpls/core/directives/feedBack.html',
                replace: true,
                scope: false,
                link: function (scope, ele, attrs) {
                    scope.feedBackShow = function () {
                        $('#feedBack').modal('show');
                        scope.feedBackContent = '';
                        scope.addFeedBack = function () {
                            if (scope.feedBackContent !== '') {
                                povertyStudentServer.commitDissent({
                                    'content': scope.feedBackContent
                                }).then(function (data) {
                                    if (data.status) {
                                        tools.alertSuccess($rootScope, '反馈成功');
                                        $('#feedBack').modal('hide');
                                        scope.feedBackContent = '';
                                    }
                                });
                            } else {
                                tools.alertError($rootScope, '异议不能为空');
                            }
                        };
                    };
                }
            };
        }]);
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/29
 * Time: 12:01
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 退出
     */
    angular.module('app.core').directive('logout', [function () {
        return {
            restrict: 'E',
            template: '<span class="user-name">欢迎您，{{userName}}<a href="javascript:;" title="退出" ng-click="logout()">' +
            '<svg class="icon" aria-hidden="true">' +
            '<use xlink:href="#icon-tuichu"></use>' +
            '</svg></a></span>',
            replace: true,
            scope: {},
            controller: ['povertyCommonServer', 'tools', '$scope', '$rootScope', '$cookies', function (povertyCommonServer, tools, $scope, $rootScope, $cookies) {
                $scope.userName = $rootScope.userName;
                $scope.logout = function () {
                    /*povertyCommonServer.logout().then(function (data) {
                        if (data.status) {
                            window.location.href = data.data.url;
                            tools.logout($cookies, $rootScope);
                        }
                    });*/
                    window.location.href ='http://rap.xdbigdata.com/app-store/#/login';
                };
            }]
        };
    }]);
})();

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
     * 学生对公示发反馈意见
     */
    angular.module('app.core').directive('noticeDissent', [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'dist/tpls/core/directives/noticeDissent.html',
                replace: true,
                scope: false,
                controller: ['$scope', '$rootScope', 'povertyStudentServer', function ($scope, $rootScope, povertyStudentServer) {
                    $scope.getNoticeDissent = function () {
                        $scope.dissentFlag = 0;
                        $rootScope.alert = false;
                        $('#getNoticeDissent').modal('show');
                        povertyStudentServer.viewDealOpinion().then(function (data) {
                            if (data.status) {
                                $scope.dissentFlag = data.data.length === 0 ? 0 : 1;
                                $scope.dissentList = data.data;
                            } else {
                                $scope.dissentFlag = 1;
                            }
                        });
                    };
                }]
            };
        }]);
})();

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
     * 跳转至学生申请资料详情页面
     */
    angular.module('app.core').directive('onePersonInfo', [function () {
        return {
            restrict: 'E',
            template: '<a href="javascript:;" title="查看" ng-click="goStudentInfo(student.studentId)">查看</a>',
            replace: true,
            scope: {
                id: '@'
            },
            link: function (scope, ele, attrs) {
                scope.goStudentInfo = function () {
                    window.open('#/studentPovertyMaterial/' + scope.id);
                };
            }
        };
    }]);
})();

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
     * 打开和收起搜索框
     */
    angular.module('app.core').directive('searchBtn', [function () {
        return {
            restrict: 'E',
            template: '<input  class="btn btn-primary pull-right mr20 mt10" type="button"  value="{{value}}" ng-click="switchBtn()">',
            replace: true,
            scope: {
                show: '='
            },
            link: function (scope) {
                scope.value = '搜索';
                scope.switchBtn = function () {
                    scope.show = !scope.show;
                    scope.value = scope.show ? '收起' : '搜索';
                };
            }
        };
    }]);
})();

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
     * 分页
     */
    angular.module('app.core').directive('tmPagination', [function () {
        return {
            restrict: 'EA',
            template: '<div class="page-list">' + '<ul class="pagination" ng-show="conf.totalItems > 0">' +
            '<li ng-class="{disabled: conf.currentPage == 1}" ng-click="prevPage()"><a href="javascript:">&larr;</a></li>' +
            '<li ng-repeat="item in pageList track by $index" ng-class="{active: item == conf.currentPage, separate: item == \'...\'}" ' +
            'ng-click="changeCurrentPage(item)">' + '<a  href="javascript:">{{ item }}</a>' + '</li>' +
            '<li ng-class="{disabled: conf.currentPage == conf.numberOfPages}" ng-click="nextPage()"><a  href="javascript:">&rarr;</a></li>' + '</ul>' +
            '<div class="page-total" ng-show="conf.totalItems > 0">' +
            '第<input type="text" ng-model="jumpPageNum"  ng-keyup="jumpToPage($event)"/>页 ' +
            '每页<select ng-model="conf.itemsPerPage" ng-options="option for option in conf.perPageOptions "></select>' +
            '/共<strong>{{ conf.totalItems }}</strong>条' + '</div>' + '<div class="no-items hidden" ng-show="conf.totalItems <= 0">加载中……</div>' + '</div>',
            replace: true,
            scope: {
                conf: '='
            },
            link: function (scope) {
                //变更当前页
                scope.changeCurrentPage = function (item) {
                    if (item === '...') {
                        return false;
                    } else {
                        scope.conf.currentPage = item;
                    }
                };

                //pageList数组
                function getPagination(newValue, oldValue) {
                    //定义分页的长度必须为奇数 (default:9)
                    scope.conf.pagesLength = parseInt(scope.conf.pagesLength) ? parseInt(scope.conf.pagesLength) : 9;
                    if (scope.conf.pagesLength % 2 === 0) {
                        //如果不是奇数的时候处理一下
                        scope.conf.pagesLength = scope.conf.pagesLength - 1;
                    }
                    //conf.erPageOptions
                    if (!scope.conf.perPageOptions) {
                        scope.conf.perPageOptions = [10, 15, 20];
                    }
                    //conf.currentPage
                    scope.conf.currentPage = parseInt(scope.conf.currentPage) ? parseInt(scope.conf.currentPage) : 1;
                    //conf.totalItems
                    scope.conf.totalItems = parseInt(scope.conf.totalItems) ? parseInt(scope.conf.totalItems) : 0;
                    //conf.itemsPerPage (default:15)
                    scope.conf.itemsPerPage = parseInt(scope.conf.itemsPerPage) ? parseInt(scope.conf.itemsPerPage) : 15;
                    //numberOfPages
                    scope.conf.numberOfPages = Math.ceil(scope.conf.totalItems / scope.conf.itemsPerPage);
                    //judge currentPage > scope.numberOfPages
                    if (scope.conf.currentPage < 1) {
                        scope.conf.currentPage = 1;
                    }
                    //如果分页总数>0，并且当前页大于分页总数
                    if (scope.conf.numberOfPages > 0 && scope.conf.currentPage > scope.conf.numberOfPages) {
                        scope.conf.currentPage = scope.conf.numberOfPages;
                    }
                    //jumpPageNum
                    scope.jumpPageNum = scope.conf.currentPage;
                    //如果itemsPerPage在不在perPageOptions数组中，就把itemsPerPage加入这个数组中
                    var perPageOptionsLength = scope.conf.perPageOptions.length;
                    //定义状态
                    var perPageOptionsStatus;
                    for (var i = 0; i < perPageOptionsLength; i++) {
                        if (scope.conf.perPageOptions[i] === scope.conf.itemsPerPage) {
                            perPageOptionsStatus = true;
                        }
                    }
                    //如果itemsPerPage在不在perPageOptions数组中，就把itemsPerPage加入这个数组中
                    if (!perPageOptionsStatus) {
                        scope.conf.perPageOptions.push(scope.conf.itemsPerPage);
                    }
                    //对选项进行sort
                    scope.conf.perPageOptions.sort(function (a, b) {
                        return a - b;
                    });
                    scope.pageList = [];
                    if (scope.conf.numberOfPages <= scope.conf.pagesLength) {
                        //判断总页数如果小于等于分页的长度，若小于则直接显示
                        for (i = 1; i <= scope.conf.numberOfPages; i++) {
                            scope.pageList.push(i);
                        }
                    } else {
                        //总页数大于分页长度（此时分为三种情况：1.左边没有...2.右边没有...3.左右都有...）
                        //计算中心偏移量
                        var offset = (scope.conf.pagesLength - 1) / 2;
                        if (scope.conf.currentPage <= offset) {
                            //左边没有...
                            for (i = 1; i <= offset + 1; i++) {
                                scope.pageList.push(i);
                            }
                            scope.pageList.push('...');
                            scope.pageList.push(scope.conf.numberOfPages);
                        } else if (scope.conf.currentPage > scope.conf.numberOfPages - offset) {
                            scope.pageList.push(1);
                            scope.pageList.push('...');
                            for (i = offset + 1; i >= 1; i--) {
                                scope.pageList.push(Math.ceil(scope.conf.numberOfPages - i));
                            }
                            scope.pageList.push(scope.conf.numberOfPages);
                        } else {
                            //最后一种情况，两边都有...
                            scope.pageList.push(1);
                            scope.pageList.push('...');
                            for (i = Math.ceil(offset / 2); i >= 1; i--) {
                                scope.pageList.push(scope.conf.currentPage - i);
                            }
                            scope.pageList.push(scope.conf.currentPage);
                            for (i = 1; i <= offset / 2; i++) {
                                scope.pageList.push(scope.conf.currentPage + i);
                            }
                            scope.pageList.push('...');
                            scope.pageList.push(scope.conf.numberOfPages);
                        }
                    }
                    if (scope.conf.onChange) {
                        //防止初始化两次请求问题
                        if (!(oldValue !== newValue && oldValue[0] === 0)) {
                            scope.conf.onChange();
                        }
                    }
                    scope.$parent.conf = scope.conf;
                }

                //prevPage
                scope.prevPage = function () {
                    if (scope.conf.currentPage > 1) {
                        scope.conf.currentPage -= 1;
                    }
                };
                //nextPage
                scope.nextPage = function () {
                    if (scope.conf.currentPage < scope.conf.numberOfPages) {
                        scope.conf.currentPage += 1;
                    }
                };
                //跳转页
                scope.jumpToPage = function () {
                    scope.jumpPageNum = scope.jumpPageNum.replace(/[^0-9]/g, '');
                    if (scope.jumpPageNum !== '') {
                        if (scope.jumpPageNum > scope.conf.numberOfPages) {
                            scope.jumpPageNum = scope.conf.numberOfPages;
                        } else if (scope.jumpPageNum < 1) {
                            scope.jumpPageNum = 1;
                        }
                        scope.conf.currentPage = scope.jumpPageNum;
                    }
                };
                scope.$watch(function () {
                    if (!scope.conf.totalItems) {
                        scope.conf.totalItems = 0;
                    }
                    var newValue = scope.conf.totalItems + ' ' + scope.conf.currentPage + ' ' + scope.conf.itemsPerPage;
                    return newValue;
                }, getPagination);
                scope.$watch('conf.itemsPerPage', function (to) {
                    to >= scope.conf.numberOfPages && (scope.conf.currentPage = scope.conf.numberOfPages);
                });
            }
        };
    }]);
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/2
 * Time: 15:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 打开和收起搜索框
     */
    angular.module('app.core').directive('upload', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/upload.html',
            replace: true,
            scope: {
                url: '=',
                // isEmpty: '=',
                http: '@'
            },
            controller: [
                'FileUploader',
                'tools',
                '$scope',
                'ROOT',
                function (FileUploader, tools, $scope, ROOT) {

                    $scope.$watch('url', function (to) {
                        $scope.name = to ? to.split('\\')[to.split('\\').length - 1] : '';
                    });

                    /**
                     * 上传附件
                     */
                    (function () {
                        var uploader = $scope.uploader = new FileUploader({
                            url: ROOT + $scope.http,
                            autoUpload: true,
                            removeAfterUpload: true,
                            queueLimit: 1
                        });
                        uploader.onAfterAddingFile = function (fileItem) {

                            fileItem.formData = [{
                                batchId: 0,
                                grantsId: 0
                            }];

                            var lastName = fileItem.file.name.slice(-3).toLowerCase();
                            var _arr = ['doc', 'ocx', 'pdf', 'lsx', 'xls', 'jpg', 'bmp', 'png'];
                            if (_arr.indexOf(lastName) === -1) {
                                tools.alertError('请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】等规定格式文件');
                                uploader.clearQueue();
                            }
                            if (fileItem.file.size > 20971520) {
                                tools.alertError('上传文件大小不得大于20M');
                                uploader.clearQueue();
                            }
                        };
                        uploader.onCompleteItem = function (fileItem, response) {
                            if (response.status) {
                                tools.alertSuccess('上传成功');
                                $scope.url = response.data;
                                $scope.name = $scope.url.split('\\')[$scope.url.split('\\').length - 1];
                            } else {
                                tools.alertError('上传失败');
                            }
                        };
                    })();
                }
            ]
        };
    }]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    //支持数字和数组
    angular.module('app.core').filter('toFixed', [function () {
        return function (input, num) {
            if (input == null) {
                return '-';
            }
            if (num >= 100) {
                //如果是数字，直接截取返回
                if (angular.isNumber(input)) {
                    return Math.floor(input * num) / num;
                } else if (angular.isArray(input)) {
                    //如果是数组，遍历数组
                    angular.forEach(input, function (data, key) {
                        //如果数组是纯数字数组，直接截取
                        if (angular.isNumber(data)) {
                            input[key] = Math.floor(data * num) / num;
                        } else if (angular.isObject(data)) {
                            //如果数组使json数组，截取返回对象里面的数字类型
                            angular.forEach(data, function (value, key1) {
                                if (angular.isNumber(value)) {
                                    data[key1] = Math.floor(value * num) / num;
                                }
                            });
                        }
                    });
                    return input;
                } else {
                    return input;
                }
            } else {
                //如果是数字，直接截取返回
                if (angular.isNumber(input)) {
                    return input.toFixed(num);
                } else if (angular.isArray(input)) {
                    //如果是数组，遍历数组
                    angular.forEach(input, function (data, key) {
                        //如果数组是纯数字数组，直接截取
                        if (angular.isNumber(data)) {
                            input[key] = data.toFixed(num);
                        } else if (angular.isObject(data)) {
                            //如果数组使json数组，截取返回对象里面的数字类型
                            angular.forEach(data, function (value, key1) {
                                if (angular.isNumber(value)) {
                                    data[key1] = value.toFixed(num);
                                }
                            });
                        }
                    });
                    return input;
                } else {
                    return input;
                }
            }
        };
    }]);
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').filter('to_trusted', toTrusted);

    toTrusted.$inject = ['$sce'];

    function toTrusted($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/2/22
 * Time: 11:21
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').service('echartsFormatter', [function () {
        /**
         * 格式化柱状图和折线图
         * @param params
         * @param ticket
         * @param callback
         * @param flag  单位
         * @returns {string}
         */
        this.formatter = function (params, ticket, callback, flag) {
            //当前版本echarts存在bug，series里面的对象有多个时，params里面的对象的name属性值不一定存在
            /**
             * series : [
             {
                 name:'邮件营销',
                 type:'line',
                 stack: '总量',
                 data:[null, null, null, null, null, null, null]
             },
             {
                 name:'联盟广告',
                 type:'line',
                 stack: '总量',
                 data:[null, null, null, null, null, null, null]
             },
             {
                 name:'视频广告',
                 type:'line',
                 stack: '总量',
                 data:[150, 232, 201, 154, 190, 330, null]
             }
             ];
             此时name有问题
             */
            //var res = params[0].name;
            var res = '';
            angular.forEach(params, function (value) {
                res === '' && value.name && (res = value.name);
            });
            for (var i = 0, l = params.length; i < l; i++) {
                res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + (flag ? flag : '');
            }
            return res;
        };
        /**
         * 格式化转柱状图折线图
         * @param params
         * @param ticket
         * @param callback
         * @param line  折线图单位
         * @param bar   柱状图单位
         * @returns {string}
         */
        this.formatterBarLine = function (params, ticket, callback, line, bar) {
            var res = '';
            angular.forEach(params, function (value) {
                res === '' && value.name && (res = value.name);
            });
            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + (line ? line : '');
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + (bar ? bar : '');
                }
            }
            return res;
        };
    }]);
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminSc').controller('grantAdminClassManerScCtrl',grantAdminClassManerScCtrl);
    grantAdminClassManerScCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'grantsCollegeServer',
        'grantsSchoolServer',
        '$stateParams'
    ];

    function grantAdminClassManerScCtrl($scope, $rootScope, tools, ROOT, grantsCollegeServer,grantsSchoolServer,$stateParams) {
        $scope.vm = {
            schoolList:[],
            checkeSchool:[],
        };
        function initHtml() {
            $scope.vm.gId = $stateParams.grantsId;
            /**
             * 获取助学金对应的年级列表
             * */
            grantsSchoolServer.grantsClassList($scope.vm.gId).then(function (data) {
                console.log(data);
                $scope.vm.classData = data.data;
                $scope.vm.checked = [];
            });
        };
        initHtml();
        /**
         * 保存年级班级配置
         * */
        $scope.vm.saveClassCongif = function (des) {
            angular.forEach(des.gradeConfigs,function (i) {
                delete i.$$hashKey;
                angular.forEach(i.majorConfigs,function (b) {
                    delete b.$$hashKey;
                    angular.forEach(b.classesConfigs,function (c) {
                        delete c.$$hashKey;
                    })
                })
            });
            grantsSchoolServer.grantsClassSave(des).then(function (data) {
                if(data.status){
                    tools.alertSuccess('保存成功');
                }else{
                    tools.alertError('保存失败');
                }
            })
        };



        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.schoolData.configs, function (i) {
                var index = $scope.vm.checked.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
    }
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminSc').controller('grantAdminComPublicScCtrl',grantAdminComPublicScCtrl);
    grantAdminComPublicScCtrl.$inject = [
        '$scope',
        '$rootScope',
        'FileUploader',
        'tools',
        'ROOT',
        'NgTableParams'
    ];

    function grantAdminComPublicScCtrl($scope, $rootScope, FileUploader,tools, ROOT,NgTableParams) {
        $scope.vm = {
            showOkBtn : true,
            showNoBtn : true,
            showDetail : false,
            nowApList : [1,2,3,4,5,6,7,8,9,10],
            showExtb : true,
            showUnExtb : false,
            showExsearch : false,
            showUnExsearch : false
        };
        $scope.vm.grantsCollegeExamineList = [
            {name: "Moroni", xuehao: 20,xueyuan:201,age:11},
            {name: "Moroni", xuehao: 20,xueyuan:201,age:11}
        ];
        $scope.vm.tableParams = new NgTableParams(
            { count: 5 }, 
            { counts: [5, 10, 20]}, 
            { dataset: $scope.vm.grantsCollegeExamineList}
        );
        $scope.vm.showExTb = function ($event) {
            $event.stopPropagation();
            $scope.vm.showExtb = true;
            $scope.vm.showUnExtb = false;
        };
        $scope.vm.showUnExTb = function () {
            $scope.vm.showExtb = false;
            $scope.vm.showUnExtb = true;
        };
        $scope.vm.goPage = function ($index,item) {
            if(item==$index+1){
                $scope.vm.pageAcClass = "pageActive";
            }
        };
        $scope.vm.showExSearch = function () {
            $scope.vm.showExsearch = true;
        };
        $scope.vm.showUnExSearch = function () {
            $scope.vm.showUnExsearch = true;
        }
        $scope.vm.doHaveQs = function ($event) {
            $event.stopPropagation();
            $scope.vm.showDetail = true;
        };
        $scope.vm.doPublicOk = function ($event) {
            $event.stopPropagation();
            $scope.vm.showDetail = false;
        };
        $scope.vm.doPublicNo = function ($event) {
            $event.stopPropagation();
            $scope.vm.showDetail = false;
        };
    }
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminSc').controller('grantAdminConfigScCtrl',grantAdminConfigScCtrl);
    grantAdminConfigScCtrl.$inject = [
        '$scope',
        'grantsSchoolServer',
        'NgTableParams',
        'grantsCommonServer',
        'grantsCollegeServer',
        'tools',
        '$state'
    ];

    function grantAdminConfigScCtrl($scope, grantsSchoolServer, NgTableParams, grantsCommonServer,grantsCollegeServer, tools,$state) {
        $scope.vm = {
            tableFlag: 0
        };
        /**
         * 初始化助学金列表信息
         */
        $scope.init = function () {
            grantsSchoolServer.grantsList().then(function (data) {
                console.log(data)
                if (data.status) {
                    $scope.vm.grantsList = data.data;
                    angular.forEach(data.data, function (value, key) {
                        value.index = key + 1;
                    });
                    $scope.vm.tableParams = new NgTableParams({
                        count: 10
                    }, {
                        dataset: $scope.vm.grantsList
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
            /**
             *获取学年
             */
            grantsCollegeServer.grantsSchoolYear().then(function (data) {
                $scope.vm.schoolYearList = data.data;
            })
        };
        $scope.init();
        /**
        * 点击开始分配名额
        * */
        $scope.vm.mannerClassMount = function (des) {
            $state.go('main.grantAdminClassManerSc',{grantsId:des.id},{reload:true})
        }
        /**
        * 新申请名额
        * */
        $scope.vm.modalShow=function (des) {
            $('#motai').modal('show');
            $scope.vm.title = '申请名额';
            var gaId = des.id;
            $scope.vm.ComNewApply = function () {
                var amount = $scope.vm.NewApplyAmount;
                console.log(gaId+"========"+amount);
                grantsSchoolServer.grantsClassApply(gaId+"/"+amount).then(function (data) {
                    if(data.status){
                        $('#motai').modal('hide');
                        tools.alertSuccess('申请成功');
                    }else {
                        tools.alertError('申请失败');
                    }

                })

            }
        }

    }
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminSc').controller('grantAdminPublicScCtrl',grantAdminPublicScCtrl);
    grantAdminPublicScCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer'
    ];

    function grantAdminPublicScCtrl($scope, tools, ROOT,grantsCommonServer ) {
        $scope.vm = {
            showOkBtn : true,
            showNoBtn : true,
            showDetail : false,
            dealList :[]
        };
        $scope.innitHtml = function(){
            //获取异议列表
            grantsCommonServer.getObjList().then(function (data) {
                console.log(data);
                if(data.status){
                    $scope.vm.objList = data.data;
                }else {
                    tools.alertError(data.message);
                }
            });
            //判断有无 未处理的异议||异议
            // angular.forEach($scope.vm.objList,function (i) {
            //     if (i.dealTime){
            //         $scope.vm.dealList.push(i);
            //     }
            // });
            // if ($scope.vm.dealList.length>0){
            //     $scope.vm.haveList = false;
            // }else {
            //     $scope.vm.haveList = true;
            // }
        };
        $scope.innitHtml();
        //处理异议
        $scope.vm.upCcPublic = function (des) {
            var des = des;
            $scope.vm.showDetail = true;
            $scope.vm.doPublicOk = function () {
                if($scope.vm.objReason){
                    var da = {
                        id :des.id,
                        response : $scope.vm.objReason
                    };
                    grantsCommonServer.postHandle(da).then(function(data){
                        console.log(data)
                        if (data.status){
                            tools.alertSuccess('异议处理成功');
                            $scope.vm.showDetail = false;
                            $scope.innitHtml();
                        }else {
                            tools.alertError(data.message);
                        }
                    });
                }else {
                    tools.alertError('异议内容不能为空');
                }
            }
        };
        //关闭模态框
        $scope.vm.doPublicNo = function () {
            $scope.vm.showDetail = false;
        };

    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminSc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.grantAdminSc',
            config: {
                url: '/grantAdminSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminSc.html',
                        controller: 'grantAdminScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminPublicSc',
            config: {
                url: '/grantAdminPublicSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminPublicSc.html',
                        controller: 'grantAdminPublicScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminConfigSc',
            config: {
                url: '/grantAdminConfigSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminConfigSc.html',
                        controller: 'grantAdminConfigScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminSchoolManerSc',
            config: {
                url: '/grantAdminSchoolManerSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminSchoolManerSc.html',
                        controller: 'grantAdminSchoolManerScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminComPublicSc',
            config: {
                url: '/grantAdminComPublicSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminComPublicSc.html',
                        controller: 'grantAdminComPublicScCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminClassManerSc',
            config: {
                url: '/grantAdminClassManerSc/:grantsId',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/school/grantAdminClassManerSc.html',
                        controller: 'grantAdminClassManerScCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminSc').controller('grantAdminScCtrl',grantAdminScCtrl);

    grantAdminScCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'NgTableParams',
        'grantsCommonServer'
    ];

    function grantAdminScCtrl($scope, tools, ROOT, NgTableParams, grantsCommonServer) {
        $scope.vm = {
            list:[],
            levelName:'',
            showFilter:false,
            showSelect:true,
            checked:[],
            showEditTime:false,
            nowId :  null

        };
        //初始化时间
        $scope.innitTime = function(){
            //判断是否已经配置时间
            grantsCommonServer.isPublicTime().then(function (data) {
                console.log(data)
                //已配置
                if(data.data){
                    //获取已经配置的时间
                    grantsCommonServer.fillPublicTime().then(function (data) {
                        $scope.vm.nowStartDate = data.data.startTime;
                        $scope.vm.nowEndDate = data.data.endTime;
                        $scope.vm.nowId = data.data.id;
                        $scope.vm.showEditTime = true;
                    });
                    //更新时间
                    $scope.vm.editTime = function () {
                        $('#upScPulic').modal('show');
                        $scope.vm.openScPublic = function () {
                            $scope.fillTime();
                        }
                    };

                    //提交学院公示
                    $scope.vm.activityPulic = function () {
                        //提交任务
                        // $scope.vm.activityTasks = function () {
                        //     var des = {stage:'collegeCheck'};
                        //     grantsCommonServer.activityTasks(des).then(function (data) {
                        //         if(data.status){
                        //             tools.alertSuccess('已提交到学院审核');
                        //             $scope.vm.showSelect = false;
                        //             $state.go('main.grantAdminPublicSc');
                        //         }else {
                        //             tools.alertError('提交失败，请稍后再试');
                        //         }
                        //     });
                        // };
                    };
                }
                //未配置
                else if(!data.data){
                    $scope.vm.showEditTime = false;
                    //提交学院公示
                    $scope.vm.activityPulic = function () {
                        $('#upScPulic').modal('show');
                        $scope.vm.openScPublic = function () {
                            $scope.fillTime();
                            //     //提交任务
                            //     var des = 'collegeCheck';
                            //     grantsCommonServer.activityTasks(des).then(function (data) {
                            //         console.log(data)
                            //         $scope.vm.showSelect = false;
                            //     });
                        };
                    };
                }else{
                    tools.alertError('系统异常请稍后再试');
                }
            });
        };
        $scope.innitTime();
        //当前阶段
        // grantsCommonServer.getStage().then(function (data) {
        //     console.log(data)
        //     $scope.vm.nowStage = data.data.currentStage;
        //     $scope.vm.nextStage = data.data.nextStage;
        // });
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //获取列表
        grantsCommonServer.getGrantsStList().then(function (data) {
            console.log(data)
            $scope.vm.list = data.data;
            console.log($scope.vm.list)
            $scope.vm.tableParams = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.list}
            );
        });
        //保存等级修改（更新等级）
        $scope.vm.saveLevelName = function (user) {
            var des = {
                stage: 'collegeCheck',
                taskId: user.taskId,
                grantsName : $scope.vm.levelName.grantsName
            };
            console.log(des);
            grantsCommonServer.updateGrantsLevel(des).then(function (data) {
                if(data.status){
                    tools.alertSuccess('修改成功');
                }else {
                    tools.alertError(data.message);
                }
            });
        };
        //配置时间---函数

        $scope.fillTime = function () {
            if ($scope.vm.startTime && $scope.vm.endTime){
                var sate = {
                    startTime : $scope.vm.startTime,
                    endTime : $scope.vm.endTime,
                    stage : '学院公示',
                    id : $scope.vm.nowId
                };
                //配置时间
                grantsCommonServer.savePublicTime(sate).then(function (data) {
                    console.log(data)
                    if(data.status){
                        tools.alertSuccess('配置成功');
                        $scope.innitTime();
                    }else{
                        tools.alertError('配置失败');
                    }
                    $('#upScPulic').modal('hide');
                });
            }else {
                tools.alertError('起始时间不能为空');
            }
        };



        //选择驳回的学生（checkBox）
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.list,function (i) {
                var index = $scope.vm.checked.indexOf(i.taskId);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i.taskId);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        //驳回学生材料
        $scope.vm.showRejectTasks = function () {
            console.log($scope.vm.checked)
            if($scope.vm.checked.length<1){
                tools.alertError('请选择需要驳回材料的学生');
            }else {
                $('#rejectTasks').modal('show');
                $scope.vm.rejectTasks = function () {
                    if($scope.vm.rejectReason){
                        var des = {
                            rejectReason:$scope.vm.rejectReason,
                            stage:'collegeCheck',
                            rejectTasks:$scope.vm.checked
                        };
                        console.log(des);
                        grantsCommonServer.rejectTasks(des).then(function (data) {
                            console.log(data);
                            $('#rejectTasks').modal('hide');
                            tools.alertSuccess('操作成功');
                        });
                    }else {
                        $scope.vm.error = 'inputError';
                        tools.alertError('驳回信息不能为空');
                    };
                };
            };
        };
        //取消
        $scope.vm.cancel = function(){
            $('#rejectTasks').modal('hide');
        };
    }
})();
/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.grantApply').controller('grantApplyFillCtrl',grantApplyFillCtrl);

    grantApplyFillCtrl.$inject = [
        '$scope',
        'FileUploader',
        'tools',
        'ROOT',
        'grantsStudentServer',
        '$stateParams',
        '$cookies',
        'grantsCommonServer',
        '$state'
    ];

    function grantApplyFillCtrl($scope, FileUploader, tools, ROOT ,grantsStudentServer, $stateParams ,$cookies, grantsCommonServer, $state) {
        $scope.vm = {
            applyInfos : {}
        };
        //获取助学金id
        $scope.vm.applyInfos.grantsUuid = $stateParams.des;
        //获取学号
        var cookie = $cookies.get('user');
        var studentSn = angular.fromJson(cookie).name;
        $scope.vm.applyInfos.studentSn = studentSn;
        //带领人学号查姓名   /grantsCommon/getAgentName/{sn}

        //是否带领切换
        $scope.changeRadio = function () {
            $scope.daiLing = !$scope.daiLing;
            if($scope.daiLing){
                $scope.vm.applyInfos.isAgent = 1;
                $scope.vm.applyInfos.bankcard  = null;
            }else {
                $scope.vm.applyInfos.isAgent = 0;
                $scope.vm.applyInfos.agentBankcard = null;
                $scope.vm.applyInfos.agentSn = null;
            }
        };
        //获取上传成功的文件
        $scope.vm.showFileList = function () {
            grantsCommonServer.grantsComFile().then(function (data) {
                $scope.vm.comFileList = data.data;
            });
        };
        $scope.vm.showFileList();
        //上传附件
        (function () {
            var uploader = $scope.uploader = new FileUploader({
                url: ROOT+'/grantsCommon/uploadFile',
                autoUpload: true,
                removeAfterUpload: true,
                queueLimit: 1,
                method:'post'
            });
            uploader.onAfterAddingFile = function (fileItem) {
                console.log(fileItem)
                var lastName = fileItem.file.name.slice((fileItem.file.name.lastIndexOf('.')+1)).toLowerCase();
                var _arr = ['doc', 'docx', 'pdf','xlsx','xls','jpg','bmp','png'];
                if (_arr.indexOf(lastName) === -1) {
                    tools.alertError('请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】文件');
                    uploader.clearQueue();
                }
            };
            uploader.onCompleteItem = function (fileItem, response) {
                console.log(response)
                if (response.status) {
                    tools.alertSuccess('上传成功');
                    $scope.vm.showFileList();
                } else {
                    tools.alertError('上传失败');
                }
            };
        })();
        //删除上传的文件
        $scope.vm.delFile = function (id) {
            var id = id;
            grantsCommonServer.delGrantsComFile(id).then(function (data) {
                console.log(data)
                $scope.vm.showFileList();
            });
        };
        //提交申请
        $scope.vm.applyGrants = function () {
            grantsStudentServer.grantsApply($scope.vm.applyInfos).then(function (data) {
                console.log(data);
                if(data.status){
                    tools.alertSuccess('申请成功');
                }else {
                    tools.alertError(data.message);
                }
            });
        };
        // //银行卡校验
        // $('#mybankCar').onblur(function () {
        //     if($scope.vm.applyInfos.agentBankcard ){
        //         var bankcar = $scope.vm.applyInfos.agentBankcard;
        //         grantsCommonServer.checkBankcar(bankcar).then(function (data) {
        //             if(data.status){
        //                 grantsStudentServer.grantsApply($scope.vm.applyInfos).then(function (data) {
        //                     console.log(data);
        //                     if(data.status){
        //                         tools.alertSuccess('申请成功');
        //                     }else {
        //                         tools.alertError('申请失败，请重新申请');
        //                     }
        //                 });
        //             }else{
        //                 tools.alertError('银行卡号填写错误');
        //             }
        //         });
        //     }else {
        //         console.log(bankcar)
        //     }
        // });
        // $('#otherBankCar').onblur(function () {
        //     if($scope.vm.applyInfos.bankcard){
        //         var bankcar = $scope.vm.applyInfos.bankcard;
        //         grantsCommonServer.checkBankcar(bankcar).then(function (data) {
        //             if(data.status){
        //                 grantsStudentServer.grantsApply($scope.vm.applyInfos).then(function (data) {
        //                     console.log(data);
        //                     if(data.status){
        //                         tools.alertSuccess('申请成功');
        //                     }else {
        //                         tools.alertError('申请失败，请重新申请');
        //                     }
        //                 });
        //             }else{
        //                 tools.alertError('银行卡号填写错误');
        //             }
        //         });
        //     }else {
        //         console.log(bankcar)
        //     }
        // });
        // //隐藏上传按钮
        // $scope.vm.upFile = function () {
        //     $scope.vm.che = true;
        // };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantApply').controller('grantApplyIndexCtrl', grantApplyIndexCtrl);

    grantApplyIndexCtrl.$inject = [
        '$scope',
        '$state',
        'grantsStudentServer',
        'tools',
        'ROOT',
        'NgTableParams',
        '$cookies',
        'grantsCommonServer',
        'FileUploader'
    ];

    function grantApplyIndexCtrl($scope,$state,grantsStudentServer, tools, ROOT, NgTableParams,$cookies,grantsCommonServer,FileUploader) {
        $scope.vm = {
            showFilter:false,
            modal:{},
            reUp:false,
            ckReason:false
        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //获取学号
        var cookie = $cookies.get('user');
        var studentSn = angular.fromJson(cookie).name;
        //获取困难等级
        grantsCommonServer.studentPoorLevel(studentSn).then(function (data) {
            $scope.vm.studentPoorLevel = data.data;
        });
        /**
         * 获取助学金列表
         * */
        $scope.vm.innit = function () {
            grantsStudentServer.grantsList().then(function (data) {
                console.log(data);
                var a = [];
                a.push(data.data);
                $scope.vm.tableParams = new NgTableParams({},
                    { dataset: a }
                );
            });
        };
        $scope.vm.innit();
        /**
         * 查看助学金详情
         * */
        $scope.vm.showModal = function (des) {
            $scope.vm.showDetail = true;
            $scope.des = des;
            console.log(des);
        };
        $scope.vm.doDetailNo = function () {
            $scope.vm.showDetail = false;
        };
        /**
         * 跳转到申请助学金页面
         * */
        $scope.vm.goApplyst = function (des) {
            console.log(des.uuid)
            var uuid = des.uuid;
            $state.go('main.grantApplyFill',{des:uuid});
        };
        /**
         * 重新提交材料
         * */
        $scope.vm.showReUploadFile = function (des) {
            $('#motai').modal('show');
            $scope.vm.reUp = true;
            $scope.vm.ckReason = false;
            $scope.vm.modal.title = '重新上传材料';
            $scope.vm.saveReUp = function () {
                var dea = {processId : des.processId, taskId: des.processId};
                grantsStudentServer.reUploadFile(dea).then(function (data) {
                    if(data.status){
                        tools.alertSuccess('上传成功');
                    }else{
                        tools.alertError('上传失败')
                    }
                });
            }
        };
        /**
         * 查看驳回原因
         * */
        $scope.vm.showRejectReason = function (des) {
            $('#motai').modal('show');
            $scope.vm.reUp = false;
            $scope.vm.ckReason = true;
            $scope.vm.modal.title = '查看驳回原因';
            $scope.vm.RejectReason = des.rejectReason;
        };
        //获取上传成功的文件
        $scope.vm.showFileList = function () {
            grantsCommonServer.grantsComFile().then(function (data) {
                $scope.vm.comFileList = data.data;
            });
        };
        $scope.vm.showFileList();
        //上传附件
        (function () {
            var uploader = $scope.uploader = new FileUploader({
                url: ROOT+'/grantsCommon/uploadFile',
                autoUpload: true,
                removeAfterUpload: true,
                queueLimit: 1,
                method:'post'
            });
            uploader.onAfterAddingFile = function (fileItem) {
                console.log(fileItem)
                var lastName = fileItem.file.name.slice((fileItem.file.name.lastIndexOf('.')+1)).toLowerCase();
                var _arr = ['doc', 'docx', 'pdf','xlsx','xls','jpg','bmp','png'];
                if (_arr.indexOf(lastName) === -1) {
                    tools.alertError('请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】文件');
                    uploader.clearQueue();
                }
            };
            uploader.onCompleteItem = function (fileItem, response) {
                if (response.status) {
                    tools.alertSuccess('文件格式正确');
                    $scope.vm.showFileList();
                } else {
                    tools.alertError('文件上传失败');
                }
            };
        })();
        //删除上传的文件
        $scope.vm.delFile = function (id) {
            var id = id;
            grantsCommonServer.delGrantsComFile(id).then(function (data) {
                $scope.vm.showFileList();
            });
        };
    }
})();

/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantApply').controller('grantApplyPublicCtrl',grantApplyPublicCtrl);
    grantApplyPublicCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'NgTableParams',
        'grantsCommonServer',
        'grantsStudentServer'
    ];

    function grantApplyPublicCtrl($scope, tools, ROOT, NgTableParams, grantsCommonServer,grantsStudentServer) {
        $scope.vm = {
            checked:[],

        };
        //是否公示阶段
        grantsCommonServer.isPublic().then(function (data) {
            console.log('s是否为公示阶段')
            console.log(data)
            if(data.status){
                // $scope.vm.isPublic = data.data;
            }else {
                tools.alertError(data.message);
            }
        });
        //获取公示列表
        grantsCommonServer.publicList().then(function (data) {
            console.log('公示列表数据')
            console.log(data)
            if(data.status){
                $scope.vm.list = data.data.grantsPublicity;
                $scope.vm.publicList = data.data.resultList;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset: $scope.vm.publicList}
                );
            }else {
                tools.alertError(data.message);
            }
        });
        //查看异议结果
        $scope.vm.doSeeAs = function(){
            grantsStudentServer.seeAs().then(function (data) {
                console.log(data);
                $scope.vm.objRes = data.data[0];
                $scope.vm.showDetail = true;
                $scope.vm.putqsShow = false;
                $scope.vm.motaititle = '查看处理结果';
                console.log($scope.vm.objRes)
            })
        };
        //选择学生
        $scope.checked =[];
        $scope.selectOne = function () {
            angular.forEach($scope.vm.publicList , function (i) {
                var index = $scope.checked.indexOf(i.sn);   //对象中的value
                if(i.checked && index === -1) {
                    $scope.checked.push(i.sn);
                } else if (!i.checked && index !== -1){
                    $scope.checked.splice(index, 1);
                };
            });
            console.log($scope.checked);
        };
        //提出异议
        $scope.vm.putQs = function () {
            $scope.vm.showDetail = true;
            $scope.vm.putqsShow = true;
            $scope.vm.motaititle = '提出异议';
            $scope.vm.putQsUp = function () {
                if($scope.checked.length<1){
                    tools.alertError('请选择提出异议的学生')
                }else if(!$scope.vm.objContent){
                    tools.alertError('异议内容不能为空')
                }else if($scope.checked.length>0&&$scope.vm.objContent){
                    var da = {
                        content:$scope.vm.objContent,
                        targetSns : $scope.checked
                    };
                    grantsStudentServer.comObj(da).then(function (data) {
                        console.log(data);
                        if(data.status){
                            tools.alertSuccess('提出异议成功');
                            $scope.vm.showDetail = false;
                        }else {
                            tools.alertError(data.message);
                        }
                    });
                }
            };
        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //关闭模态框
        $scope.vm.doPublicNo = function () {
            $scope.vm.showDetail = false;
        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantApply').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.grantApplyIndexSt',
            config: {
                url: '/grantApplyIndexSt',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/student/grantApplyIndexSt.html',
                        controller: 'grantApplyIndexCtrl'
                    }
                }
            }
        },{
            state: 'main.grantApplyFill',
            config: {
                url: '/grantApplyFill/:des',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/student/grantApplyFill.html',
                        controller: 'grantApplyFillCtrl'
                    }
                }
            }
        },{
            state: 'main.grantApplyPublic',
            config: {
                url: '/grantApplyPublicSt',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/student/grantApplyPublicSt.html',
                        controller: 'grantApplyPublicCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminTc').controller('grantApplyPublicTcCtrl',grantApplyPublicTcCtrl);
    grantApplyPublicTcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'NgTableParams'
    ];

    function grantApplyPublicTcCtrl($scope, tools, ROOT, grantsCommonServer, NgTableParams) {
        $scope.vm = {
            show:false
        };
        //获取公示列表
        grantsCommonServer.publicList().then(function (data) {
            console.log(data)
            if(data.status){
                $scope.vm.publicList = data.data.resultList;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset: $scope.vm.publicList}
                );
            }else {
                tools.alertError(data.message)
            }

        });
        $scope.vm.showSearch = function () {
            $scope.vm.show = !$scope.vm.show;
        }
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminTc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.grantAdminTc',
            config: {
                url: '/grantAdminTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/teacher/grantAdminTc.html',
                        controller: 'grantAdminTcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminPublicTc',
            config: {
                url: '/grantAdminPublicTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/teacher/grantAdminPublicTc.html',
                        controller: 'grantApplyPublicTcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantApplyFillTc',
            config: {
                url: '/grantApplyFillTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/teacher/grantApplyFillTc.html',
                        controller: 'grantApplyFillTcCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminTc').controller('grantAdminTcCtrl',grantAdminTcCtrl);

    grantAdminTcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'grantsAdvisorServer',
        'NgTableParams'
    ];

    function grantAdminTcCtrl($scope,tools, ROOT, grantsCommonServer, grantsAdvisorServer, NgTableParams) {
        $scope.vm = {
            checkedNot:[],
            checked:[],
            showA:true,
            showB:false
        };
        //获取当前申请
        grantsCommonServer.getGrantsStList().then(function (data) {
            console.log('liebiao')
            console.log(data)
            $scope.vm.list = data.data;
            $scope.vm.tableParamList = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.list}
            );
        });
        //获取往年未申请
        grantsAdvisorServer.notApply().then(function (data) {
            console.log('notapply')
            console.log(data)
            $scope.vm.notlist = data.data;
            $scope.vm.tableParamNot = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.notlist}
            );
        });
        //选中材料审核  list
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.list, function (i) {
                var index = $scope.vm.checked.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
            console.log( $scope.vm.checked)
        };
        //选中未申请的  not
        $scope.vm.checkOneNot = function () {
            angular.forEach($scope.vm.notlist,function (i) {
                var index = $scope.vm.checkedNot.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checkedNot.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checkedNot.splice(index, 1);
                };
            });
            console.log( $scope.vm.checkedNot)
        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //切换tb exTB
        $scope.vm.showExTb = function () {
            $scope.vm.showA = true;
            $scope.vm.showB = false;
        };
        //切换tb UNexTB
        $scope.vm.showUnExTb = function () {
            $scope.vm.showA= false;
            $scope.vm.showB = true;
        };
        //通过
        $scope.vm.activityTasks = function () {
            var des = 'advisorCheck';
            grantsCommonServer.activityTasks(des).then(function (data) {
                console.log(data)
            })
        };
        //驳回学生材料
        $scope.vm.showRejectTasks = function () {
            console.log($scope.vm.checked)
            if($scope.vm.checked.length<1){
                tools.alertError('请选择需要驳回材料的学生');
            }else {
                $('#rejectTasks').modal('show');
                $scope.vm.rejectTasks = function () {
                    if($scope.vm.rejectReason){
                        var des = {
                            rejectReason:$scope.vm.rejectReason,
                            stage:'advisorCheck',
                            rejectTasks:$scope.vm.checked
                        };
                        console.log(des);
                        grantsCommonServer.rejectTasks(des).then(function (data) {
                            console.log(data);
                            $('#rejectTasks').modal('hide');
                            tools.alertSuccess('操作成功');
                        });
                    }else {
                        $scope.vm.error = 'inputError';
                        tools.alertError('驳回信息不能为空');
                    };
                };
            };
        };
        //驳回单个学生材料
        $scope.vm.rejectOneTasks = function (des) {
            grantsCommonServer.checkMaterial().then(function (data) {
                console.log(data);
            })
        };
        //通过单个学生材料
        $scope.vm.passOneTasks = function (des) {
            grantsCommonServer.checkMaterial().then(function (data) {
                console.log(data);
            })
        };
        //查看学生材料
        $scope.vm.lookSt = function (des) {

        }
    }
})();
/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminTc').controller('grantApplyFillTcCtrl',grantApplyFillTcCtrl);

    grantApplyFillTcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'NgTableParams'
    ];

    function grantApplyFillTcCtrl($scope, tools, ROOT, grantsCommonServer,NgTableParams) {
        $scope.vm = {
            list:[],
            levelName:'',
            showFilter:false,
            showSelect:true,
            checked:[]

        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //获取列表
        grantsCommonServer.getGrantsStList().then(function (data) {
            console.log(data)
            $scope.vm.list = data.data;
            console.log($scope.vm.list)
            $scope.vm.tableParams = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.list}
            );
        });
        //保存等级修改（更新等级）
        $scope.vm.saveLevelName = function (user) {
            var des = {
                stage: 'advisorCheck',
                taskId: user.taskId,
                grantsName : $scope.vm.levelName.grantsName
            };
            console.log(des);
            grantsCommonServer.updateGrantsLevel(des).then(function (data) {
                if(data.status){
                    tools.alertSuccess('修改成功');
                }else {
                    tools.alertError(data.message);
                }
            });
        };
        //提交至学院（提交任务）
        $scope.vm.activityTasks = function () {
            var des = 'advisorCheck';
            grantsCommonServer.activityTasks(des).then(function (data) {
                console.log(data)
                $scope.vm.showSelect = false;
            })
        };
        //选择驳回的学生（checkBox）
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.list,function (i) {
                var index = $scope.vm.checked.indexOf(i.taskId);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i.taskId);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        //驳回多选学生材料
        $scope.vm.showRejectTasks = function () {
            console.log($scope.vm.checked)
            if($scope.vm.checked.length<1){
                tools.alertError('请选择需要驳回材料的学生');
            }else {
                $('#rejectTasks').modal('show');
                $scope.vm.rejectTasks = function () {
                    if($scope.vm.rejectReason){
                        var des = {
                            rejectReason:$scope.vm.rejectReason,
                            stage:'advisorCheck',
                            rejectTasks:$scope.vm.checked
                        };
                        console.log(des);
                        grantsCommonServer.rejectTasks(des).then(function (data) {
                            console.log(data);
                            $('#rejectTasks').modal('hide');
                            tools.alertSuccess('操作成功');
                        });
                    }else {
                        $scope.vm.error = 'inputError';
                        tools.alertError('驳回信息不能为空');
                    };
                };
            };
        };
        //取消
        $scope.vm.cancel = function(){
            $('#rejectTasks').modal('hide');
        };

    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.poorAssess').controller('advisorAuditPovertyController', advisorAuditPovertyController);

    advisorAuditPovertyController.$inject = [
        '$scope',
        'NgTableParams',
        'povertyBusinessServer',
        'povertyCommonServer'
    ];

    function advisorAuditPovertyController($scope, NgTableParams, povertyBusinessServer, povertyCommonServer) {
        $scope.vm = {
            tableFlag: 0
        };

        /**
         * 初始化信息
         */
        $scope.init = function () {

            povertyBusinessServer.getPovertyMaxStatus();

            povertyCommonServer.listStudentPovertyApply().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    //判断是否可以提交到辅导员审核
                    $scope.vm.commitBtnShow = $scope.vm.studentList.some(function (value) {
                        return value.taskId;
                    });
                    //判断是否是驳回情况
                    $scope.vm.isRejected = $scope.vm.studentList.some(function (value) {
                        return value.collegeResult === '驳回';
                    });

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.poorAssess').controller('advisorAuditPovertyFormerYearController', advisorAuditPovertyFormerYearController);

    advisorAuditPovertyFormerYearController.$inject = [
        '$scope',
        'povertyBusinessServer',
        'NgTableParams',
        'povertyAdvisorServer',
        'povertyCommonServer',
        '$element',
        'tools'];

    function advisorAuditPovertyFormerYearController($scope, povertyBusinessServer, NgTableParams, povertyAdvisorServer, povertyCommonServer, $element, tools) {
        $scope.vm = {
            tableFlag: 0,
            collegeNoticeList: {}
        };

        povertyBusinessServer.getPovertyMaxStatus();

        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyCommonServer.getLastYearApply().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });

                    // _flag for check init
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr = value;
                            if (_flag) {
                                $scope.initCheck();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 批量处理
         */
        $scope.dealAll = function () {
            if ($scope.checkboxes.choosedStudent.length > 0) {

                $scope.vm.isDealingAll = true;

                angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                    value.isPass = flag;
                });
                console.log($scope.checkboxes.choosedStudent)
               /* povertyAdvisorServer.checkMaterial($scope.checkboxes.choosedStudent).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess(data.message);
                        $scope.init();
                    }
                    $scope.vm.isDealingAll = false;
                });*/
            } else {
                tools.alertError('请先选择要批量处理的学生');
            }
        };

        $scope.initCheck = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes.checked;
            }, function (value) {
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] = value;
                });
            });

            // watch for data checkboxes
            $scope.$watch(function () {
                return $scope.checkboxes.items;
            }, function (values) {
                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr.length;
                $scope.checkboxes.choosedStudent = [];
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] && $scope.checkboxes.choosedStudent.push(item);
                    checked += ($scope.checkboxes.items[item.studentId]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.studentId]) || 0;
                });
                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }
                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                console.log($scope.checkboxes.choosedStudent)
            }, true);
        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.poorAssess').controller('advisorAuditPovertyMaterialController', advisorAuditPovertyMaterialController);

    advisorAuditPovertyMaterialController.$inject = [
        '$scope',
        'povertyBusinessServer',
        'NgTableParams',
        'povertyAdvisorServer',
        'povertyCommonServer',
        '$element',
        'tools'];

    function advisorAuditPovertyMaterialController($scope, povertyBusinessServer, NgTableParams, povertyAdvisorServer, povertyCommonServer, $element, tools) {
        $scope.vm = {
            tableFlag: 0,
            collegeNoticeList: {}
        };

        povertyBusinessServer.getPovertyMaxStatus();

        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyCommonServer.listCheckMaterialStudent().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });

                    // _flag for check init
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr = value;
                            if (_flag) {
                                $scope.initCheck();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 审核材料
         * @param student
         * @param flag
         */
        $scope.agreeOrReject = function (student, flag) {
            student.isPass = flag;
            student.isDealing = true;
            $scope.vm.isDealOne = true;

            povertyAdvisorServer.checkMaterial([student]).then(function (data) {
                if (data.status) {
                    tools.alertSuccess(data.message);

                    var _newPage = $scope.tableParams.page();
                    var _count = $scope.tableParams.count();
                    //从$scope.vm.studentList中去除审核通过的学生
                    angular.forEach($scope.vm.studentList, function (data, index) {
                        data.studentId === student.studentId && $scope.vm.studentList.splice(index, 1);
                    });
                    if (((_newPage - 1) * $scope.tableParams.count() + 1) >= $scope.tableParams.settings().total) {
                        _newPage = _newPage - 1;
                    }
                    $scope.tableParams = new NgTableParams({
                        page: _newPage,
                        count: _count
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                    $scope.init();
                }

                student.isDealing = false;
                $scope.vm.isDealOne = false;
            });
        };

        /**
         * 批量处理
         */
        $scope.dealAll = function (flag) {
            if ($scope.checkboxes.choosedStudent.length > 0) {

                $scope.vm.isDealingAll = true;

                angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                    value.isPass = flag;
                });
                povertyAdvisorServer.checkMaterial($scope.checkboxes.choosedStudent).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess(data.message);
                        $scope.init();
                    }
                    $scope.vm.isDealingAll = false;
                });
            } else {
                tools.alertError('请先选择要批量处理的学生');
            }
        };

        $scope.initCheck = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes.checked;
            }, function (value) {
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] = value;
                });
            });

            // watch for data checkboxes
            $scope.$watch(function () {
                return $scope.checkboxes.items;
            }, function (values) {
                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr.length;
                $scope.checkboxes.choosedStudent = [];
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] && $scope.checkboxes.choosedStudent.push(item);
                    checked += ($scope.checkboxes.items[item.studentId]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.studentId]) || 0;
                });
                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }
                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                console.log($scope.checkboxes.choosedStudent)
            }, true);
        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('advisorParticularlyDifficultCheckedController', advisorParticularlyDifficultCheckedController);

    advisorParticularlyDifficultCheckedController.$inject = [
        '$scope',
        '$rootScope',
'particularlyDifficultServer',
        'FileUploader',
        'NgTableParams',
        'tools',
        'ROOT'];

    function advisorParticularlyDifficultCheckedController($scope, $rootScope, particularlyDifficultServer, FileUploader, NgTableParams, tools, ROOT) {
        $scope.vm = {
            endTime: '',
        };

        $scope.init = function () {
            particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                if(data.status) {
                    $scope.vm.endTime = data.data.endTime
                }else {
                    $scope.vm.endTime = '未开始';
                }
            })
            particularlyDifficultServer.getAllowanceChecked().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    $scope.vm.studentList.map(function (item) {
                        item.instructorPass =  item.instructorPass==1? '通过':'不通过'
                        item.collegePass =  item.collegePass==1? '通过':'不通过'
                        item.schoolPass =  item.schoolPass==1? '通过':'不通过'
                        item.finalPass =  item.finalPass==1? '通过':'不通过'
                        item.applyCount =  item.applyCount==0?'新申请':'第'+item.applyCount+'次申请'
                        return true
                    })
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('advisorParticularlyDifficultUncheckedController', advisorParticularlyDifficultUncheckedController);

    advisorParticularlyDifficultUncheckedController.$inject = [
        '$scope',
        '$rootScope',
'particularlyDifficultServer',
        'FileUploader',
        'NgTableParams',
        'tools',
        'ROOT'];

    function advisorParticularlyDifficultUncheckedController($scope, $rootScope, particularlyDifficultServer, FileUploader, NgTableParams, tools, ROOT) {
        $scope.vm = {
            endTime: '',
            submitFlag: false
        };

        $scope.init = function () {
            particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                if(data.status) {
                    $scope.vm.endTime = data.data.endTime
                }else {
                    $scope.vm.endTime = '未开始';
                }
            })
            $scope.getAllowanceCheck();
        };
        $scope.getAllowanceCheck = function () {
            particularlyDifficultServer.getAllowanceCheck().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    $scope.vm.studentList.map(function (item) {
                        item.instructorPass =  item.instructorPass==1? '通过':'不通过'
                        item.collegePass =  item.collegePass==1? '通过':'不通过'
                        item.schoolPass =  item.schoolPass==1? '通过':'不通过'
                        item.finalPass =  item.finalPass==1? '通过':'不通过'
                        item.applyCount =  item.applyCount==0?'新申请':'第'+item.applyCount+'次申请'
                        return true
                    })
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        }
        $scope.init();
        $scope.confirmSubmit = function () {
            $scope.vm.submitFlag = true;
            particularlyDifficultServer.postAllowanceSubmitNextCheck().then(function (data) {
                if(data.status){
                    tools.alertSuccess('提交成功');
                    $scope.getAllowanceCheck();

                }
                $scope.vm.submitFlag = false;
            })
        }
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('collegeAuditPovertyController', collegeAuditPovertyController);

    collegeAuditPovertyController.$inject = [
        '$scope',
        '$rootScope',
        'povertyCollegeServer',
        'povertyCommonServer',
        'povertySchoolServer',
        'commonsServer',
        'NgTableParams',
        'povertyBusinessServer',
        'tools'];

    function collegeAuditPovertyController($scope, $rootScope, povertyCollegeServer, povertyCommonServer, povertySchoolServer, commonsServer, NgTableParams, povertyBusinessServer, tools) {
        $scope.vm = {
            active: 0,
            tableFlag: 0,
            openTableFlag: 0,
            openFlag: false,
            toSchoolBtn: false,
            statusData: {
                availableOptions: [{
                    id: 1,
                    name: '已处理'
                }, {
                    id: 0,
                    name: '未处理'
                }, {
                    id: 2,
                    name: '全部'
                }],
                selectedOption: {
                    id: 2,
                    name: '全部'
                }
            },
            reApply: {
                studentId: '',
                level: '困难'
            }
        };

        $scope.init = function () {
            povertyBusinessServer.getPovertyMaxStatus().then(function (data) {
                povertyCommonServer.getAtOpenTime().then(function (data) {
                    if(data.data){
                        $scope.vm.openFlag = true;
                        $scope.isToSchool()
                    }else {
                        $scope.vm.openFlag = false;
                        $scope.getTime();
                    }
                })
                    $scope.initOpenDissent();
                    $scope.initApply();

            });
        };

        $scope.init();
        $scope.changeNav = function (val) {
            $scope.vm.active = val;
        }
        $scope.isToSchool = function () {
            povertyCommonServer.getOpenTime().then(function (data) {
                if(data.data) {
                    if(data.data.type == 2){
                        $scope.vm.toSchoolBtn = data.data.publicityClosed
                    }
                }
                
            })
        }
        /**
         * 获取时间信息
         */
        $scope.getTime = function () {
            commonsServer.getCommonsServerTime().then(function (data) {
                if(data.status) {
                    $scope.vm.now = data.data;
                    povertySchoolServer.getProcessTime().then(function (data) {
                        if (data.status) {
                            $scope.vm.processTimeList = data.data || {};
                            $scope.vm.processTimeList.collegeOpenEndTime =$scope.vm.processTimeList.collegeOpenEndTime ? $scope.vm.processTimeList.collegeOpenEndTime : '';
                            $scope.vm.processTimeList.collegeOpenStartTime =$scope.vm.processTimeList.collegeOpenStartTime ? $scope.vm.processTimeList.collegeOpenStartTime : $scope.vm.now;
                            //学生申请
                            $scope.vm.applyStartOptions = {
                                maxDate: new Date($scope.vm.processTimeList.collegeOpenEndTime)
                            };
                            $scope.vm.applyEndOptions = {
                                minDate: $scope.vm.processTimeList.collegeOpenStartTime>$scope.vm.now ? new Date($scope.vm.processTimeList.collegeOpenStartTime): new Date($scope.vm.now)
                            };
                            $scope.$watch('vm.processTimeList.collegeOpenEndTime', function (to) {
                                $scope.vm.applyStartOptions.minDate =  new Date($scope.vm.now);
                                $scope.vm.applyStartOptions.maxDate = new Date(to);
                                $scope.vm.processTimeList.collegeOpenEndTime = new Date(to).getTime()
                            });
                            $scope.$watch('vm.processTimeList.collegeOpenStartTime', function (to) {
                                $scope.vm.applyEndOptions.minDate = new Date(to).getTime()>$scope.vm.now ? new Date(to): new Date($scope.vm.now);
                                $scope.vm.processTimeList.collegeOpenStartTime =new Date(to).getTime()
                            });
                        }
                    });
                }
            })

        };
        /**
         * 更新时间
         */
        $scope.updateTime = function () {
            $scope.vm.submit = true;
            if ($scope.vm.processForm.$valid) {
                povertySchoolServer.setOpenTime({
                    endTime: $scope.vm.processTimeList.collegeOpenEndTime,
                    startTime: $scope.vm.processTimeList.collegeOpenStartTime,
                    type: 2
            }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('保存成功');
                        $('#openTimeSetting').modal('hide');
                        $scope.init();
                    }
                });
            } else {
                tools.alertError('所有时间都需设置');
            }
        };
        /**
         * 初始化申请列表信息
         */
        $scope.initApply = function () {
            povertyCommonServer.listStudentPovertyApply().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.totalNum = data.data.length;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    //判断是否可以提交到学院公示
                    $scope.vm.commitBtnShow = $scope.vm.studentList.some(function (value) {
                        return value.taskId;
                    });
                    //判断是否是驳回情况
                    $scope.vm.isRejected = $scope.vm.studentList.some(function (value) {
                        return value.result === '驳回';
                    });

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };

        /**
         * 初始化异议信息
         */
        $scope.initOpenDissent = function () {
            povertyCollegeServer.viewOpenDissent().then(function (data) {
                if (data.status) {
                    $scope.vm.openTableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.dissentList = data.data;
                    $scope.openTableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: angular.copy($scope.vm.dissentList),
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.openTableFlag = 2;
                }
            });
        };

        /**
         * 切换处理列表
         */
        $scope.changeStatus = function () {

            if ($scope.vm.statusData.selectedOption.id !== 2) {
                $scope.vm.dissentListFilter = $scope.vm.dissentList.filter(function (value) {
                    return value.status === $scope.vm.statusData.selectedOption.id;
                });
            } else {
                $scope.vm.dissentListFilter = $scope.vm.dissentList;
            }

            $scope.openTableParams = new NgTableParams({
                page: 1,
                count: 15
            }, {
                dataset: $scope.vm.dissentListFilter,
                counts: [10, 15, 20, 30]
            });
        };

        /**
         * 处理反馈
         * @param id
         */
        $scope.vm.remark = '我已处理';
        $scope.dealFeedbackShow = function (id) {
            $('#dealFeedback').modal('show');
            $scope.dealFeedback = function () {
                if ($scope.vm.remark === '') {
                    tools.alertError('处理描述不能为空');
                    return;
                }
                povertyCollegeServer.dealOpenDissent({
                    id: id,
                    dealOpinion: $scope.vm.remark
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('提交成功');
                        var _newPage = $scope.openTableParams.page();
                        var _count = $scope.openTableParams.count();
                        angular.forEach($scope.vm.dissentList, function (data) {
                            data.id === id && (data.status = 1);
                        });
                        $scope.openTableParams = new NgTableParams({
                            page: _newPage,
                            count: _count
                        }, {
                            dataset: $scope.vm.dissentList,
                            counts: [10, 15, 20, 30]
                        });
                        $('#dealFeedback').modal('hide');
                    }
                });
            };
        };

        /**
         * 取消学生贫困认定
         * @param student    学生
         */
        $scope.cancelApplyModal = function (student) {
            $('#cancelApply').modal('show');
            $scope.cancelApply = function () {
                povertyCollegeServer.cancelApply({
                    studentId: student.studentId,
                    processId: student.processInstanceId
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('取消成功');
                        $('#cancelApply').modal('hide');
                        var _newPage = $scope.tableParams.page();
                        var _count = $scope.tableParams.count();
                        //从$scope.vm.studentList中去除审核通过的学生
                        angular.forEach($scope.vm.studentList, function (data, index) {
                            data.studentId === student.studentId && $scope.vm.studentList.splice(index, 1);
                        });
                        if (((_newPage - 1) * $scope.tableParams.count() + 1) >= $scope.tableParams.settings().total) {
                            _newPage = _newPage - 1;
                        }
                        $scope.tableParams = new NgTableParams({
                            page: _newPage,
                            count: _count
                        }, {
                            dataset: $scope.vm.studentList,
                            counts: [10, 15, 20, 30]
                        });
                    }
                });
            };
        };



        $scope.vm.rejectToAdvisor = {};
        $scope.vm.advisorList = {};
        /**
         * 驳回至辅导员
         */
        $scope.rejectToAdvisor = function () {
            povertyCollegeServer.listAdvisors().then(function (data) {
                if (data.status) {
                    $scope.vm.advisorList = data.data;
                    $scope.vm.rejectToAdvisor.choosedAdvisor = data.data[0];
                }
            });
            $('#rejectToAdvisor').modal('show');
            $scope.addReject = function () {
                if ($scope.vm.rejectToAdvisor.content) {
                    povertyCommonServer.operateProcess({
                        isPass: 0,
                        step: $scope.vm.openFlag ? 'collegeOpen' : 'college',
                        userName: $scope.vm.rejectToAdvisor.choosedAdvisor.sn,
                        userType: $scope.vm.rejectToAdvisor.choosedAdvisor.userType,
                        reason: $scope.vm.rejectToAdvisor.content,
                        realName: $scope.vm.rejectToAdvisor.choosedAdvisor.name
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('提交成功');
                            $scope.init();
                            $scope.vm.showFeedBack = 'false';
                            window.localStorage.setItem('showFeedBack', 'false');
                            $scope.vm.rejectToAdvisor.content = '';
                            $('#rejectToAdvisor').modal('hide');
                        }
                    });
                } else {
                    tools.alertError('请填写驳回内容');
                }
            };
        };

        $scope.openTimeSetting = function () {
            $('#openTimeSetting').modal('show');
        }
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.poorAssess').controller('collegeAuditPovertyFormerYearController', collegeAuditPovertyFormerYearController);

    collegeAuditPovertyFormerYearController.$inject = [
        '$scope',
        'povertyBusinessServer',
        'NgTableParams',
        'povertyAdvisorServer',
        'povertyCommonServer',
        '$element',
        'tools'];

    function collegeAuditPovertyFormerYearController($scope, povertyBusinessServer, NgTableParams, povertyAdvisorServer, povertyCommonServer, $element, tools) {
        $scope.vm = {
            tableFlag: 0,
            collegeNoticeList: {}
        };

        povertyBusinessServer.getPovertyMaxStatus();

        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyCommonServer.getLastYearApply().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });

                    // _flag for check init
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr = value;
                            if (_flag) {
                                $scope.initCheck();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 批量处理
         */
        $scope.dealAll = function () {
            if ($scope.checkboxes.choosedStudent.length > 0) {

                $scope.vm.isDealingAll = true;

                angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                    value.isPass = flag;
                });
                console.log($scope.checkboxes.choosedStudent)
               /* povertyAdvisorServer.checkMaterial($scope.checkboxes.choosedStudent).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess(data.message);
                        $scope.init();
                    }
                    $scope.vm.isDealingAll = false;
                });*/
            } else {
                tools.alertError('请先选择要批量处理的学生');
            }
        };

        $scope.initCheck = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes.checked;
            }, function (value) {
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] = value;
                });
            });

            // watch for data checkboxes
            $scope.$watch(function () {
                return $scope.checkboxes.items;
            }, function (values) {
                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr.length;
                $scope.checkboxes.choosedStudent = [];
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] && $scope.checkboxes.choosedStudent.push(item);
                    checked += ($scope.checkboxes.items[item.studentId]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.studentId]) || 0;
                });
                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }
                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                console.log($scope.checkboxes.choosedStudent)
            }, true);
        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('collegeParticularlyDifficultCheckedController', collegeParticularlyDifficultCheckedController);

    collegeParticularlyDifficultCheckedController.$inject = [
        '$scope',
        '$rootScope',
'particularlyDifficultServer',
        'FileUploader',
        'NgTableParams',
        'tools',
        'ROOT'];

    function collegeParticularlyDifficultCheckedController($scope, $rootScope, particularlyDifficultServer, FileUploader, NgTableParams, tools, ROOT) {
        $scope.vm = {
            endTime: '',
        };

        $scope.init = function () {
            particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                if(data.status) {
                    $scope.vm.endTime = data.data.endTime
                }else {
                    $scope.vm.endTime = '未开始';
                }
            })
            particularlyDifficultServer.getAllowanceChecked().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    $scope.vm.studentList.map(function (item) {
                        item.instructorPass =  item.instructorPass==1? '通过':'不通过'
                        item.collegePass =  item.collegePass==1? '通过':'不通过'
                        item.schoolPass =  item.schoolPass==1? '通过':'不通过'
                        item.finalPass =  item.finalPass==1? '通过':'不通过'
                        item.applyCount =  item.applyCount==0?'新申请':'第'+item.applyCount+'次申请'
                        return true
                    })
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('collegeParticularlyDifficultUncheckedController', collegeParticularlyDifficultUncheckedController);

    collegeParticularlyDifficultUncheckedController.$inject = [
        '$scope',
        '$rootScope',
'particularlyDifficultServer',
        'FileUploader',
        'NgTableParams',
        'tools',
        'ROOT'];

    function collegeParticularlyDifficultUncheckedController($scope, $rootScope, particularlyDifficultServer, FileUploader, NgTableParams, tools, ROOT) {
        $scope.vm = {
            endTime: '',
            submitFlag: false
        };

        $scope.init = function () {
            particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                if(data.status) {
                    $scope.vm.endTime = data.data.endTime
                }else {
                    $scope.vm.endTime = '未开始';
                }
            })
            $scope.getAllowanceCheck();
        };
        $scope.getAllowanceCheck = function () {
            particularlyDifficultServer.getAllowanceCheck().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    $scope.vm.studentList.map(function (item) {
                        item.instructorPass =  item.instructorPass==1? '通过':'不通过'
                        item.collegePass =  item.collegePass==1? '通过':'不通过'
                        item.schoolPass =  item.schoolPass==1? '通过':'不通过'
                        item.finalPass =  item.finalPass==1? '通过':'不通过'
                        item.applyCount =  item.applyCount==0?'新申请':'第'+item.applyCount+'次申请'
                        return true
                    })
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        }
        $scope.init();
        $scope.confirmSubmit = function () {
            $scope.vm.submitFlag = true;
            particularlyDifficultServer.postAllowanceSubmitNextCheck().then(function (data) {
                if(data.status){
                    tools.alertSuccess('提交成功');
                    $scope.getAllowanceCheck();

                }
                $scope.vm.submitFlag = false;
            })
        }
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('diffTimeSetsController', diffTimeSetsController);

    diffTimeSetsController.$inject = [
        '$scope',
        '$state',
        'particularlyDifficultServer',
        'commonsServer',
        'tools'];

    function diffTimeSetsController($scope, $state, particularlyDifficultServer, commonsServer, tools) {
        $scope.vm = {
            submit: false,
            gradeList: [],
            isStart: true,
        };

        /**
         * 获取时间信息
         */
        $scope.getTime = function () {
            commonsServer.getCommonsServerTime().then(function (data) {
                if(data.status) {
                    $scope.vm.now = data.data;
                    particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                        if (data.status) {
                            $scope.vm.processTimeList = data.data || {};

                            //学生申请
                            $scope.vm.applyStartOptions = {
                                maxDate: new Date($scope.vm.processTimeList.endTime)
                            };
                            $scope.vm.applyEndOptions = {
                                minDate: $scope.vm.processTimeList.startTime>$scope.vm.now ? new Date($scope.vm.processTimeList.startTime): new Date($scope.vm.now)
                            };
                            $scope.$watch('vm.processTimeList.endTime', function (to) {
                                $scope.vm.applyStartOptions.maxDate = new Date(to);
                                $scope.vm.processTimeList.endTime = new Date(to).getTime()
                            });
                            $scope.$watch('vm.processTimeList.startTime', function (to) {
                                $scope.vm.applyEndOptions.minDate = new Date(to).getTime()>$scope.vm.now ? new Date(to): new Date($scope.vm.now);
                                $scope.vm.processTimeList.startTime = new Date(to).getTime()
                            });
                        }
                    });
                }
            })

        };
        /**
         * 根据本地存储初始化，判断流程是否开启
         */
        $scope.init = function () {
            particularlyDifficultServer.getAllowanceAtApplyTime().then(function (data) {
               if(data.data){
                    $scope.vm.isStart = true;
                   $scope.getTime();
               }else {
                   $scope.vm.isStart = false;
                   $scope.getTime();
                   $scope.getGradeList()
               }

            });
        };
        $scope.init();

        /**
         * 更新时间
         */
        $scope.updateTime = function () {
            $scope.vm.submit = true;
            if ($scope.vm.processForm.$valid) {
                $scope.vm.processTimeList.yearId = $scope.vm.gradeChoosed.yearId
                $scope.vm.processTimeList.year = $scope.vm.gradeChoosed.year
                particularlyDifficultServer.postAllowanceSaveConfig($scope.vm.processTimeList).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('保存成功');
                        $scope.init();
                    }
                });
            } else {
                tools.alertError('所有时间都需设置并且流程不能为空');
            }
        };
        $scope.getGradeList = function () {
            commonsServer.getCommonsSchoolYearAll().then(function (data) {
                if(data.status) {
                    $scope.vm.gradeList = angular.copy(data.data.map(function(value){
                        return{
                            year: value.name,
                            yearId: value.id
                        };
                    }));
                    commonsServer.getCommonsSchoolYearCurrent().then(function (data) {
                        if(data.status) {
                            $scope.vm.gradeChoosed =$scope.vm.gradeList.filter(function (item) {

                                return item.yearId == data.data.id
                            })[0];
                        }
                    })
                }
            })

        }

    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('schoolAuditPovertyController', schoolAuditPovertyController);

    schoolAuditPovertyController.$inject = [
        '$scope',
        '$rootScope',
        'povertySchoolServer',
        'povertyCommonServer',
        'povertyCollegeServer',
        'commonsServer',
        'NgTableParams',
        'povertyBusinessServer',
        'tools'];

    function schoolAuditPovertyController($scope, $rootScope, povertySchoolServer, povertyCommonServer, povertyCollegeServer, commonsServer, NgTableParams,  povertyBusinessServer, tools) {
        $scope.vm = {
            active: 0,
            tableFlag: 0,
            openTableFlag: 0,
            toEndBtn: false,
            openFlag: false,
            statusData: {
                availableOptions: [{
                    id: 1,
                    name: '已处理'
                }, {
                    id: 0,
                    name: '未处理'
                }, {
                    id: 2,
                    name: '全部'
                }],
                selectedOption: {
                    id: 2,
                    name: '全部'
                }
            },
        };

        $scope.init = function () {
            povertyBusinessServer.getPovertyMaxStatus().then(function (data) {
                povertyCommonServer.getAtOpenTime().then(function (data) {
                    if(data.data){
                        $scope.vm.openFlag = true;
                        $scope.isToEnd()
                    }else {
                        $scope.vm.openFlag = false;
                        $scope.getTime();
                    }
                })
                $scope.initOpenDissent();
                $scope.initApply();

            });
        };
        $scope.init();

        /**
         * 初始化申请列表信息
         */
        $scope.initApply = function () {
            povertyCommonServer.listStudentPovertyApply().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.totalNum = data.data.length;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    //判断是否可以提交到学院公示
                    $scope.vm.commitBtnShow = $scope.vm.studentList.some(function (value) {
                        return value.taskId;
                    });

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.vm.rejectToCollege = {};
        $scope.vm.collegeList = {};
        $scope.changeNav = function (val) {
            $scope.vm.active = val;
        }
        $scope.isToEnd = function () {
            povertyCommonServer.getOpenTime().then(function (data) {
                if(data.data) {
                    if(data.data.type == 1){
                        $scope.vm.toEndBtn = data.data.publicityClosed
                    }
                }

            })
        }
        /**
         * 驳回至学院
         */
        $scope.rejectToCollege = function () {
            povertySchoolServer.listCollegeUsers().then(function (data) {
                if (data.status) {
                    $scope.vm.collegeList = data.data;
                    $scope.vm.collegeList.map(function (item) {
                        item.collegeAddName = item.primaryTeachingInstitution? item.primaryTeachingInstitution.name+'-'+item.name : item.name
                        return true
                    })
                    $scope.vm.rejectToCollege.choosedCollege = data.data[0];
                }
            });
            $('#rejectToCollege').modal('show');
            $scope.addReject = function () {
                if ($scope.vm.rejectToCollege.content) {
                    povertyCommonServer.operateProcess({
                        isPass: 0,
                        step: 'school',
                        userName: $scope.vm.rejectToCollege.choosedCollege.sn,
                        userType: $scope.vm.rejectToCollege.choosedCollege.userType,
                        reason: $scope.vm.rejectToCollege.content,
                        realName: $scope.vm.rejectToCollege.choosedCollege.name
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('提交成功');
                            $scope.init();
                            $scope.vm.rejectToCollege.content = '';
                            $('#rejectToCollege').modal('hide');
                        }
                    });
                } else {
                    tools.alertError('请填写驳回原因');
                }

            };
        };
        /**
         * 初始化异议信息
         */
        $scope.initOpenDissent = function () {
            povertySchoolServer.viewOpenDissentSchool().then(function (data) {
                if (data.status) {
                    $scope.vm.openTableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.dissentList = data.data;
                    $scope.openTableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: angular.copy($scope.vm.dissentList),
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.openTableFlag = 2;
                }
            });
        };
        /**
         * 切换处理列表
         */
        $scope.changeStatus = function () {

            if ($scope.vm.statusData.selectedOption.id !== 2) {
                $scope.vm.dissentListFilter = $scope.vm.dissentList.filter(function (value) {
                    return value.status === $scope.vm.statusData.selectedOption.id;
                });
            } else {
                $scope.vm.dissentListFilter = $scope.vm.dissentList;
            }

            $scope.openTableParams = new NgTableParams({
                page: 1,
                count: 15
            }, {
                dataset: $scope.vm.dissentListFilter,
                counts: [10, 15, 20, 30]
            });
        };
        /**
         * 获取时间信息
         */
        $scope.getTime = function () {
            commonsServer.getCommonsServerTime().then(function (data) {
                if(data.status) {
                    $scope.vm.now = data.data;
                    povertySchoolServer.getProcessTime().then(function (data) {
                        if (data.status) {
                            $scope.vm.processTimeList = data.data || {};
                            $scope.vm.processTimeList.schoolOpenEndTime =$scope.vm.processTimeList.schoolOpenEndTime ? $scope.vm.processTimeList.schoolOpenEndTime : '';
                            $scope.vm.processTimeList.schoolOpenStartTime =$scope.vm.processTimeList.schoolOpenStartTime ? $scope.vm.processTimeList.schoolOpenStartTime : $scope.vm.now;
                            //学生申请
                            $scope.vm.applyStartOptions = {
                                maxDate: new Date($scope.vm.processTimeList.schoolOpenEndTime)
                            };
                            $scope.vm.applyEndOptions = {
                                minDate: $scope.vm.processTimeList.schoolOpenStartTime>$scope.vm.now ? new Date($scope.vm.processTimeList.schoolOpenStartTime): new Date($scope.vm.now)
                            };
                            $scope.$watch('vm.processTimeList.schoolOpenEndTime', function (to) {
                                $scope.vm.applyStartOptions.minDate =  new Date($scope.vm.now);
                                $scope.vm.applyStartOptions.maxDate = new Date(to);
                                $scope.vm.processTimeList.schoolOpenEndTime = new Date(to).getTime()
                            });
                            $scope.$watch('vm.processTimeList.schoolOpenStartTime', function (to) {
                                $scope.vm.applyEndOptions.minDate = new Date(to).getTime()>$scope.vm.now ? new Date(to): new Date($scope.vm.now);
                                $scope.vm.processTimeList.schoolOpenStartTime =new Date(to).getTime()
                            });
                        }
                    });
                }
            })

        };
        /**
         * 更新时间
         */
        $scope.updateTime = function () {
            $scope.vm.submit = true;
            if ($scope.vm.processForm.$valid) {
                povertySchoolServer.setOpenTime({
                    endTime: $scope.vm.processTimeList.schoolOpenEndTime,
                    startTime: $scope.vm.processTimeList.schoolOpenStartTime,
                    type: 1
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('保存成功');
                        $('#openTimeSetting').modal('hide');
                        $scope.init();
                    }
                });
            } else {
                tools.alertError('所有时间都需设置');
            }
        };
        /**
         * 处理反馈
         * @param id
         */
        $scope.vm.remark = '我已处理';
        $scope.dealFeedbackShow = function (id) {
            $('#dealFeedback').modal('show');
            $scope.dealFeedback = function () {
                if ($scope.vm.remark === '') {
                    tools.alertError('处理描述不能为空');
                    return;
                }
                povertyCollegeServer.dealOpenDissent({
                    id: id,
                    dealOpinion: $scope.vm.remark,
                    type: 1
                }).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('提交成功');
                        var _newPage = $scope.openTableParams.page();
                        var _count = $scope.openTableParams.count();
                        angular.forEach($scope.vm.dissentList, function (data) {
                            data.id === id && (data.status = 1);
                        });
                        $scope.openTableParams = new NgTableParams({
                            page: _newPage,
                            count: _count
                        }, {
                            dataset: $scope.vm.dissentList,
                            counts: [10, 15, 20, 30]
                        });
                        $('#dealFeedback').modal('hide');
                    }
                });
            };
        };
        $scope.openTimeSetting = function () {
            $('#openTimeSetting').modal('show');
        }
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('schoolParticularlyDifficultCheckedController', schoolParticularlyDifficultCheckedController);

    schoolParticularlyDifficultCheckedController.$inject = [
        '$scope',
        '$rootScope',
'particularlyDifficultServer',
        'FileUploader',
        'NgTableParams',
        'tools',
        'ROOT'];

    function schoolParticularlyDifficultCheckedController($scope, $rootScope, particularlyDifficultServer, FileUploader, NgTableParams, tools, ROOT) {
        $scope.vm = {
            endTime: '',
        };

        $scope.init = function () {
            particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                if(data.status) {
                    $scope.vm.endTime = data.data.endTime
                }else {
                    $scope.vm.endTime = '未开始';
                }
            })
            particularlyDifficultServer.getAllowanceChecked().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    $scope.vm.studentList.map(function (item) {
                        item.instructorPass =  item.instructorPass==1? '通过':'不通过'
                        item.collegePass =  item.collegePass==1? '通过':'不通过'
                        item.schoolPass =  item.schoolPass==1? '通过':'不通过'
                        item.finalPass =  item.finalPass==1? '通过':'不通过'
                        item.applyCount =  item.applyCount==0?'新申请':'第'+item.applyCount+'次申请'
                        return true
                    })
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('schoolParticularlyDifficultUncheckedController', schoolParticularlyDifficultUncheckedController);

    schoolParticularlyDifficultUncheckedController.$inject = [
        '$scope',
        '$rootScope',
'particularlyDifficultServer',
        'FileUploader',
        'NgTableParams',
        'tools',
        'ROOT'];

    function schoolParticularlyDifficultUncheckedController($scope, $rootScope, particularlyDifficultServer, FileUploader, NgTableParams, tools, ROOT) {
        $scope.vm = {
            endTime: '',
            submitFlag: false
        };

        $scope.init = function () {
            particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                if(data.status) {
                    $scope.vm.endTime = data.data.endTime
                }else {
                    $scope.vm.endTime = '未开始';
                }
            })
            $scope.getAllowanceCheck();
        };
        $scope.getAllowanceCheck = function () {
            particularlyDifficultServer.getAllowanceCheck().then(function (data) {
                if (data.status) {
                    $scope.vm.studentList = data.data;
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    $scope.vm.studentList.map(function (item) {
                        item.instructorPass =  item.instructorPass==1? '通过':'不通过'
                        item.collegePass =  item.collegePass==1? '通过':'不通过'
                        item.schoolPass =  item.schoolPass==1? '通过':'不通过'
                        item.finalPass =  item.finalPass==1? '通过':'不通过'
                        item.applyCount =  item.applyCount==0?'新申请':'第'+item.applyCount+'次申请'
                        return true
                    })
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        }
        $scope.init();
        $scope.confirmSubmit = function () {
            $scope.vm.submitFlag = true;
            particularlyDifficultServer.postAllowanceSubmitNextCheck().then(function (data) {
                if(data.status){
                    tools.alertSuccess('提交成功');
                    $scope.getAllowanceCheck();

                }
                $scope.vm.submitFlag = false;
            })
        }
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('timeSetController', timeSetController);

    timeSetController.$inject = [
        '$scope',
        '$state',
        'povertySchoolServer',
        'tools'];

    function timeSetController($scope, $state, povertySchoolServer, tools) {

        $scope.isSetting = false;

        /**
         * 开始流程
         */
        $scope.startNew = function () {

            $scope.isSetting = true;

            povertySchoolServer.startProcess().then(function (data) {
                if (data.status) {
                    // window.localStorage.setItem('processStatus', data.data);
                    $state.go('main.timeSets');
                    tools.alertSuccess('设置成功');
                }else{
                    tools.alertError('设置失败');
                }
                $scope.isSetting = false;
            });
        };
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('timeSetsController', timeSetsController);

    timeSetsController.$inject = [
        '$scope',
        '$state',
        'povertySchoolServer',
        'commonsServer',
        'tools'];

    function timeSetsController($scope, $state, povertySchoolServer, commonsServer, tools) {
        $scope.vm = {
            submit: false,
            gradeList: [],
            newSetting: false
        };

        $scope.isSetting = true;

        /**
         * 开始流程
         */
        $scope.isOrNotStart = function () {
            $('#isOrNotStart').modal('show');
            $scope.startNew = function () {

                povertySchoolServer.startProcess().then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('流程开启成功');
                        $scope.isSetting = true;
                        $scope.vm.newSetting = true;
                    }else{
                        tools.alertError('流程开启失败');
                    }
                    $('#isOrNotStart').modal('hide');

                });
            };
        };


        /**
         * 获取时间信息
         */
        $scope.getTime = function () {
            commonsServer.getCommonsServerTime().then(function (data) {
                if(data.status) {
                    $scope.vm.now = data.data;
                    povertySchoolServer.getProcessTime().then(function (data) {
                        if (data.status) {
                            $scope.vm.processTimeList = data.data || {};

                            //学生申请
                            $scope.vm.applyStartOptions = {
                                maxDate: new Date($scope.vm.processTimeList.applyEnd)
                            };
                            $scope.vm.applyEndOptions = {
                                minDate: $scope.vm.processTimeList.applyStart>$scope.vm.now ? new Date($scope.vm.processTimeList.applyStart): new Date($scope.vm.now)
                            };
                            $scope.$watch('vm.processTimeList.applyEnd', function (to) {
                                $scope.vm.applyStartOptions.maxDate = new Date(to);
                                $scope.vm.processTimeList.applyEnd = new Date(to).getTime()
                            });
                            $scope.$watch('vm.processTimeList.applyStart', function (to) {
                                $scope.vm.applyEndOptions.minDate = new Date(to).getTime()>$scope.vm.now ? new Date(to): new Date($scope.vm.now);
                                $scope.vm.processTimeList.applyStart = new Date(to).getTime() ? new Date(to).getTime() : $scope.vm.now
                            });
                        }
                    });
                }
            })

        };

        /**
         * 根据本地存储初始化，判断流程是否开启
         */
        $scope.init = function () {
            povertySchoolServer.validateProcess().then(function (data) {
                if (data.data) {
                    $scope.isSetting = false;

                } else {
                    $scope.isSetting = true;
                }
                $scope.getTime();
                $scope.getGradeList()
            });
        };
        $scope.init();

        /**
         * 更新时间
         */
        $scope.updateTime = function () {
            $scope.vm.submit = true;
            if ($scope.vm.processForm.$valid) {
                $scope.vm.processTimeList.schoolYearId = $scope.vm.gradeChoosed.schoolYearId
                $scope.vm.processTimeList.schoolYearName = $scope.vm.gradeChoosed.schoolYearName
                povertySchoolServer.saveProcess($scope.vm.processTimeList).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('保存成功');
                        $scope.init();
                    }
                });
            } else {
                tools.alertError('所有时间都需设置并且流程不能为空');
            }
        };
        $scope.getGradeList = function () {
            commonsServer.getCommonsSchoolYearAll().then(function (data) {
                if(data.status) {
                    $scope.vm.gradeList = angular.copy(data.data.map(function(value){
                        return{
                            schoolYearName: value.name,
                            schoolYearId: value.id
                        };
                    }));
                    commonsServer.getCommonsSchoolYearCurrent().then(function (data) {
                        if(data.status) {
                            $scope.vm.gradeChoosed =$scope.vm.gradeList.filter(function (item) {
                                console.log(item.schoolYearId,data.data.id)
                                return item.schoolYearId == data.data.id
                            })[0];
                        }
                    })
                }
            })

        }

    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('viewOperationRecordController', viewOperationRecordController);

    viewOperationRecordController.$inject = [
        '$scope',
        'povertySchoolServer'];

    function viewOperationRecordController($scope, povertySchoolServer) {
        $scope.vm = {
            recordList: [],
            status: 1
        };

        /**
         * 获取操作记录
         * @param status 1：学校   2：学院    3：辅导员  4：班级用户  5：学生
         */
        $scope.init = function (status) {
            $scope.vm.status = status;
            povertySchoolServer.viewOperateLog(status).then(function (data) {
                if (data.status) {
                    $scope.vm.recordList = data.data;
                }
            });
        };
        $scope.init(1);
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('particularlyDifficultController', particularlyDifficultController);

    particularlyDifficultController.$inject = [
        '$scope',
        '$rootScope',
'particularlyDifficultServer',
        'FileUploader',
        'tools',
        'ROOT'];

    function particularlyDifficultController($scope, $rootScope, particularlyDifficultServer, FileUploader, tools, ROOT) {
        $scope.vm = {
            endTime: '',
            started: 0,
            isApply: false,
            form: {
                bankNum: "",
                deputyBankNum: "",
                deputySn: "",
                hasDeputy: false,
                reason: ""
            },
            baseSubmit: false,
        };

        $scope.init = function () {
            particularlyDifficultServer.getAllowanceGetConfig().then(function (data) {
                if(data.status) {
                    $scope.vm.endTime = data.data.endTime
                }else {
                    $scope.vm.endTime = '未开始';
                }
            })
            particularlyDifficultServer.getAllowanceIsFiveClass().then(function (data) {
                if(data.status) {
                    $scope.vm.isApply = data.data;
                }
            })
        };
        $scope.init();
        $scope.apply = function () {
            $scope.vm.started = 1;
        };
        $scope.$watch(function () {
            return $scope.vm.form.hasDeputy;
        }, function (value) {
            if(!value) {
                $scope.vm.form.deputyBankNum = "";
                $scope.vm.form.deputySn = "";
            }

        });
        $scope.submit = function () {
            $scope.vm.baseSubmit = true;
            if($scope.vm.form.hasDeputy){
                if($scope.vm.form.deputySn =='' ||$scope.vm.form.deputyBankNum ==''){
                    tools.alertError('请填写完整信息');
                    return false;
                }
            }
            if ($scope.vm.baseForm.$valid) {
                particularlyDifficultServer.postAllowanceApply({
                    bankNum: $scope.vm.form.bankNum,
                    deputyBankNum: $scope.vm.form.deputyBankNum,
                    deputySn: $scope.vm.form.deputySn,
                    hasDeputy:  $scope.vm.form.hasDeputy ? 1 : 0,
                    reason: $scope.vm.form.reason
                }).then(function (data) {
                    tools.alertError(data.message);
                })
            }else {
                tools.alertError('请填写完整信息');
            }

        }
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('povertyApplyController', povertyApplyController);

    povertyApplyController.$inject = [
        '$scope',
        '$rootScope',
        'povertyStudentServer',
        'povertyCommonServer',
        'FileUploader',
        'povertyBusinessServer',
        'tools',
        'ROOT'];

    function povertyApplyController($scope, $rootScope, povertyStudentServer, povertyCommonServer, FileUploader, povertyBusinessServer, tools, ROOT) {
        $scope.vm = {
            started: 0   /*0:无   1:申请界面   2:流程未开始   3:同意承诺书*/
        };
        //拦截用户地址栏输入
        /*if (!$rootScope.isComplete) {
         $state.go('main.studentInfo');
         }*/
        //获取总流程状态来判断流程是否开启来初始化界面
        povertyBusinessServer.getPovertyMaxStatus().then(function (data) {

            //如果流程开启才可以进行学生申请，不然就显示流程”流程未开始“
            if (data.status) {
                //总流程状态码大于0说明流程已经开始
                if ($scope.povertyBigStatus >= 0) {

                    /**
                     * 如果流程不是申请阶段：
                     * 1、如果学生申请了资料，则显示已提交资料，正在进行***
                     * 2、如果学生没有申请资料，则显示未提交资料，正在进行***
                     */
                    if ($scope.povertyBigStatus > 1) {
                        //切换选项卡至step3
                        $scope.vm.activeTabs = 'submitSuccess';
                        $scope.vm.started = 1;
                        povertyStudentServer.getStudentStatus().then(function (data) {
                            if (data.status) {
                                $rootScope.povertyStudentStatus = data.data.status;
                                $scope.vm.result = data.data.result;
                            }
                        });
                    }
                    else {
                        /**
                         * 上传材料
                         */
                        $scope.updateMaterial = function () {
                            var uploader = $scope.uploader = new FileUploader({
                                url: ROOT + '/povertyStudent/uploadFile',
                                autoUpload: true,
                                removeAfterUpload: true,
                                queueLimit: 1
                            });
                            uploader.onAfterAddingFile = function (fileItem) {
                                var lastName = fileItem.file.name.slice(-3).toLowerCase();
                                var _arr = ['doc', 'ocx', 'pdf', 'lsx', 'xls', 'jpg', 'bmp', 'png'];
                                if (_arr.indexOf(lastName) === -1) {
                                    tools.alertError('请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】等规定格式文件');
                                    uploader.clearQueue();
                                }
                                if (fileItem.file.size > 20971520) {
                                    tools.alertError('上传文件大小不得大于20M');
                                    uploader.clearQueue();
                                }
                            };
                            uploader.onCompleteItem = function (fileItem, response) {
                                if (response.status) {
                                    tools.alertSuccess('上传成功');
                                    $scope.initUpload();
                                } else {
                                    tools.alertError(response.message);
                                }
                            };

                            /**
                             * 初始化获取上传列表
                             */
                            $scope.initUpload = function () {
                                povertyCommonServer.getAttachments($rootScope.studentId).then(function (data) {
                                    if (data.status) {
                                        $scope.vm.uploadsList = data.data;
                                        /**
                                         * 删除文件
                                         * @param id    文件ID
                                         */
                                        $scope.removeAttachment = function (id) {
                                            povertyStudentServer.removeAttachment(id).then(function (data) {
                                                if (data.status) {
                                                    tools.alertSuccess('删除成功');
                                                    $scope.initUpload();
                                                }
                                            });
                                        };
                                    }
                                });
                            };
                            $scope.initUpload();
                        };

                        /**
                         * 跳转页面到上传部分
                         * @private
                         */
                        var _goUpload = function () {
                            $scope.vm.started = 1;
                            $scope.vm.activeTabs = 'updateMaterial';
                            $scope.updateMaterial();
                        };

                        /**
                         * 获取申请状态(v1.1)
                         * 0：未申请
                         * -1:已申请，被驳回
                         * -2:尴尬，被取消了申请
                         * >0：在流程中
                         */
                        povertyStudentServer.getStudentStatus().then(function (data) {
                            if (data.status) {
                                $rootScope.povertyStudentStatus = data.data.status;
                                if ($rootScope.povertyStudentStatus === 0) {
                                    //以本地存储来判断是否同意承诺书
                                    if (!window.localStorage.getItem('isAgree')) {
                                        $scope.vm.started = 3;
                                        $scope.setAgreeToLocalStorage = function () {
                                            window.localStorage.setItem('isAgree', 'yes');
                                            _goUpload();
                                        };
                                    } else {
                                        _goUpload();
                                    }
                                } else {
                                    //切换选项卡至step3
                                    $scope.vm.activeTabs = 'submitSuccess';
                                    $scope.vm.started = 1;

                                    if($rootScope.povertyStudentStatus === -1){
                                        $scope.reApply = function () {
                                            _goUpload();
                                        };
                                    }
                                }
                            }
                        });

                        /**
                         * 提交材料，切换选项卡至step2
                         */
                        $scope.goNext = function () {
                            if ($scope.vm.uploadsList.length > 0) {
                                $scope.vm.activeTabs = 'confirmSubmit';
                                $scope.viewModifyInfo();
                            } else {
                                $('#ensureNext').modal('show');

                                /**
                                 * 确认提交材料
                                 */
                                $scope.insureUpload = function () {
                                    $scope.vm.activeTabs = 'confirmSubmit';
                                    $scope.viewModifyInfo();
                                    $('#ensureNext').modal('hide');
                                };

                                /**
                                 * 取消提交材料
                                 */
                                $scope.cancelUpload = function () {
                                    $('#ensureNext').modal('hide');
                                };
                            }
                        };

                        /**
                         * 查看修改信息，提交保存，切换选项卡至step3
                         */
                        $scope.viewModifyInfo = function () {

                            /**
                             * 提交至辅导员审核
                             */
                            $scope.confirmSubmit = function () {
                                $('#ensureSubmit').modal({backdrop: 'static', keyboard: false});
                                $scope.vm.idCommiting = false;

                                /**
                                 * 确认提交到辅导员审核
                                 */
                                $scope.insureSubmit = function () {
                                    $scope.vm.idCommiting = true;
                                    povertyStudentServer.startPovertyProcess($rootScope.studentId).then(function (data) {
                                        if (data.status) {
                                            tools.alertSuccess('提交成功');
                                            $scope.vm.activeTabs = 'submitSuccess';
                                            $rootScope.povertyStudentStatus = 1;
                                        }else {
                                            tools.alertError(data.message);
                                        }
                                        $('#ensureSubmit').modal('hide');
                                        $scope.vm.idCommiting = false;
                                    });
                                };

                                /**
                                 * 取消提交到辅导员审核
                                 */
                                $scope.cancelSubmit = function () {
                                    $('#ensureSubmit').modal('hide');
                                };
                            };
                        };

                        /**
                         * 重新编辑材料，切换选项卡至step1
                         */
                        $scope.reUpload = _goUpload;
                    }
                } else {
                    $scope.vm.started = 2;
                }

                /**
                 * 查看申请详细资料
                 */
                $scope.viewInfo = function () {
                    window.open('#/studentPovertyMaterial/' + $rootScope.studentId);
                };
            } else {
                $scope.vm.started = 2;
            }
        });
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('povertyNoticeController', povertyNoticeController);

    povertyNoticeController.$inject = [
        '$rootScope',
        '$scope',
        '$element',
        'NgTableParams',
        'povertyStudentServer',
        'povertyBusinessServer',
        'povertyCommonServer',
        'tools'];

    function povertyNoticeController($rootScope, $scope, $element, NgTableParams, povertyStudentServer, povertyBusinessServer, povertyCommonServer, tools) {
        $scope.vm = {
            active: 0,
        };


        $scope.changeNav = function (val) {
            $scope.vm.active = val;
        }
        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyStudentServer.getCollegeNotice().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.noticeList = data.data;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.noticeList,
                        counts: [10, 15, 20, 30]
                    });

                    // _flag for check init
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr = value;
                            if (_flag) {
                                $scope.initCheck();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
            povertyStudentServer.getSchoolNotice().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag2 = data.data.length === 0 ? 2 : 1;
                    $scope.vm.noticeList2 = data.data;
                    $scope.tableParams2 = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.noticeList2,
                        counts: [10, 15, 20, 30]
                    });

                    // _flag for check init
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams2.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes2 = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr2 = value;
                            if (_flag) {
                                $scope.initCheck2();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag2 = 2;
                }
            });
        };
        $scope.init();
        /**
         * 处理反馈
         */
        $scope.dealFeedbackShow = function () {
            if ($scope.checkboxes.choosedStudent.length > 0) {
                $('#dealFeedback').modal('show');

                $scope.dealFeedback = function () {
                    if ($scope.vm.feedBackContent) {

                        angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                            value.content = $scope.vm.feedBackContent;
                            value.plaintiff = $rootScope.studentId;
                            value.defendant = value.studentId;
                            value.plaintiffName = $rootScope.userName;
                        });

                        povertyStudentServer.commitDissent0($scope.checkboxes.choosedStudent).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('反馈成功');
                                $('#dealFeedback').modal('hide');
                                $scope.vm.feedBackContent = '';
                                $scope.checkboxes.choosedStudent = [];
                                $scope.checkboxes = {
                                    checked: false,
                                    items: {}
                                };
                            }else {
                                tools.alertError(data.message);
                            }
                        });
                    } else {
                        tools.alertError('异议不能为空');
                    }
                };
            } else {
                tools.alertError('请选择有异议的学生');
            }

        };
        $scope.dealFeedbackShow2 = function () {
            if ($scope.checkboxes2.choosedStudent.length > 0) {
                $('#dealFeedback2').modal('show');

                $scope.dealFeedback2 = function () {
                    if ($scope.vm.feedBackContent2) {

                        angular.forEach($scope.checkboxes2.choosedStudent, function (value) {
                            value.content = $scope.vm.feedBackContent2;
                            value.plaintiff = $rootScope.studentId;
                            value.defendant = value.studentId;
                            value.plaintiffName = $rootScope.userName;
                        });
                        povertyStudentServer.commitDissent1($scope.checkboxes2.choosedStudent).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('反馈成功');
                                $('#dealFeedback2').modal('hide');
                                $scope.vm.feedBackContent2 = '';
                                $scope.checkboxes2.choosedStudent = [];
                                $scope.checkboxes2 = {
                                    checked: false,
                                    items: {}
                                };
                            }else {
                                tools.alertError(data.message);
                            }
                        });
                    } else {
                        tools.alertError('异议不能为空');
                    }
                };
            } else {
                tools.alertError('请选择有异议的学生');
            }

        };
        $scope.initCheck = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes.checked;
            }, function (value) {

                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] = value;
                });

            });

            // watch for data
            $scope.$watch(function () {
                return $scope.checkboxes.items;
            }, function (values) {

                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr.length;
                $scope.checkboxes.choosedStudent = [];

                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] && $scope.checkboxes.choosedStudent.push(item);
                    checked += ($scope.checkboxes.items[item.studentId]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.studentId]) || 0;
                });

                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }

                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));

            }, true);

        };
        $scope.initCheck2 = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes2.checked;
            }, function (value) {

                angular.forEach($scope.thisPageArr2, function (item) {
                    $scope.checkboxes2.items[item.studentId] = value;
                });

            });

            // watch
            $scope.$watch(function () {
                return $scope.checkboxes2.items;
            }, function (values) {

                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr2.length;
                $scope.checkboxes2.choosedStudent = [];

                angular.forEach($scope.thisPageArr2, function (item) {
                    $scope.checkboxes2.items[item.studentId] && $scope.checkboxes2.choosedStudent.push(item);
                    checked += ($scope.checkboxes2.items[item.studentId]) || 0;
                    unchecked += (!$scope.checkboxes2.items[item.studentId]) || 0;
                });

                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes2.checked = (checked == total);
                }

                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all2")).prop("indeterminate", (checked != 0 && unchecked != 0));

            }, true);

        };
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.poorAssess').controller('studentInfoController', studentInfoController);

    studentInfoController.$inject = [
        '$scope',
        '$rootScope',
        'povertyStudentServer',
        'povertyCommonServer',
        'tools',
        'FileUploader',
        'ROOT'];

    function studentInfoController($scope, $rootScope, povertyStudentServer, povertyCommonServer, tools, FileUploader, ROOT) {
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.scholarCc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'main.scholarCc',
                config: {
                    url: '/scholarCc',
                    views: {
                        'section@main': {
                            templateUrl: 'dist/tpls/scholarship/college/scholarCc.html',
                            controller: 'scholarCcCtrl'
                        }
                    }
                }
            }
            ,{
            state: 'main.scholarSchoolManerCc',
            config: {
                url: '/scholarSchoolManerCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/scholarship/college/scholarSchoolManerCc.html',
                        controller: 'scholarSchoolManerCcCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.scholarCc').controller('scholarCcCtrl',scholarCcCtrl);

    scholarCcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'NgTableParams',
        'grantsCommonServer'
    ];

    function scholarCcCtrl($scope, tools, ROOT, NgTableParams,grantsCommonServer) {
        $scope.vm = {
            list:[],
            levelName:'',
            showFilter:false,
            showSelect:true,
            checked:[],
            showEditTime:false

        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //获取列表
        grantsCommonServer.getGrantsStList().then(function (data) {
            console.log(data)
            $scope.vm.list = data.data;
            console.log($scope.vm.list)
            $scope.vm.tableParams = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.list}
            );
        });
        //保存等级修改（更新等级）
        $scope.vm.saveLevelName = function (user) {
            var des = {
                stage: 'collegeCheck',
                taskId: user.taskId,
                grantsName : $scope.vm.levelName.grantsName
            };
            console.log(des);
            grantsCommonServer.updateGrantsLevel(des).then(function (data) {
                if(data.status){
                    tools.alertSuccess('修改成功');
                }else {
                    tools.alertError(data.message);
                }
            });
        };
        //配置时间---函数
        $scope.fillTime = function () {
            if ($scope.vm.startTime && $scope.vm.endTime){
                var sate = {
                    startTime : $scope.vm.startTime,
                    endTime : $scope.vm.endTime,
                    stage : '学院公示'
                };
                //配置时间
                grantsCommonServer.savePublicTime(sate).then(function (data) {
                    if(data.status){
                        tools.alertSuccess('配置成功');
                    }else{
                        tools.alertError('配置失败');
                    }
                    $('#upScPulic').modal('hide');
                });
            }else {
                tools.alertError('起始时间不能为空');
            }
        };
        //判断是否已经配置时间
        grantsCommonServer.isPublicTime().then(function (data) {
            console.log(data.data)
            //已配置
            if(data.data=='yes'){
                //获取已经配置的时间
                grantsCommonServer.fillPublicTime().then(function (data) {
                    $scope.vm.nowStartDate = data.startTime;
                    $scope.vm.nowEndDate = data.endTime;
                    $scope.vm.nowId = data.id;
                    $scope.vm.showEditTime = true;
                });
                //更新时间
                $scope.vm.editTime = function () {
                    $('#upScPulic').modal('show');
                    $scope.vm.openScPublic = function () {
                        $scope.fillTime();
                    }
                };
                //提交学院公示
                $scope.vm.activityPulic = function () {
                    console.log('提交到学院公示')
                };
            }
            //未配置
            else if(data.data=='no'){
                $scope.vm.showEditTime = false;
                //提交学院公示
                $scope.vm.activityPulic = function () {
                    $('#upScPulic').modal('show');
                    $scope.vm.openScPublic = function () {
                        $scope.fillTime();
                        console.log('未配置：提交到学院公示')
                    }
                };
            }else{
                tools.alertError('系统异常请稍后再试');
            }
        });


        //提交至学校（提交任务）
        // $scope.vm.activityTasks = function () {
        //     var des = {stage:'collegeCheck'};
        //     grantsCommonServer.activityTasks(des).then(function (data) {
        //         console.log(data)
        //         $scope.vm.showSelect = false;
        //     })
        // };

        //选择驳回的学生（checkBox）
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.list,function (i) {
                var index = $scope.vm.checked.indexOf(i.taskId);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i.taskId);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        //驳回学生材料
        $scope.vm.showRejectTasks = function () {
            console.log($scope.vm.checked)
            if($scope.vm.checked.length<1){
                tools.alertError('请选择需要驳回材料的学生');
            }else {
                $('#rejectTasks').modal('show');
                $scope.vm.rejectTasks = function () {
                    if($scope.vm.rejectReason){
                        var des = {
                            rejectReason:$scope.vm.rejectReason,
                            stage:'collegeCheck',
                            rejectTasks:$scope.vm.checked
                        };
                        console.log(des);
                        grantsCommonServer.rejectTasks(des).then(function (data) {
                            console.log(data);
                            $('#rejectTasks').modal('hide');
                            tools.alertSuccess('操作成功');
                        });
                    }else {
                        $scope.vm.error = 'inputError';
                        tools.alertError('驳回信息不能为空');
                    };
                };
            };
        };
        //取消
        $scope.vm.cancel = function(){
            $('#rejectTasks').modal('hide');
        };
    }
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.scholarCc').controller('scholarSchoolManerCcCtrl',scholarSchoolManerCcCtrl);
    scholarSchoolManerCcCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'scholarCollegeServer',
        '$stateParams'
    ];

    function scholarSchoolManerCcCtrl($scope, $rootScope, tools, ROOT, scholarCollegeServer,$stateParams) {
        $scope.vm = {
            NewSchoolYear:{},
            grantschecked:[],

        };
        // console.log($stateParams)
        function initHtml() {
            // $scope.gId = $stateParams.grantsId;
            /**
             * 获取励志学金对应的学院列表
             * */
            scholarCollegeServer.scholarSchoolList().then(function (data) {
                console.log('打印学院列表数据')
                console.log(data);
                $scope.vm.schoolData = data.data;
                $scope.vm.checked = [];
                // $scope.startTime = data.data.startDate;
                // $scope.endTime = data.data.endDate;
            });
            /**
             * 获取学年
             * */
            scholarCollegeServer.scholarSchoolYear().then(function (data) {
                console.log('据')
                console.log(data);
                if(!data.status){
                    tools.alertError('学年获取失败');
                }
                $scope.vm.schoolYear = data.data;
            });
        };
        initHtml();
        /**
         * 根据所选的学年获取奖学金
         * */
        $scope.vm.updateGrants = function () {
            var da = $scope.vm.NewSchoolYear.name;
            // scholarCollegeServer.scholarGrantsList(da+'').then(function (data) {
            //     console.log(data)
            //     if(!data.status){
            //         tools.alertError('操作失败请稍后再试');
            //     }
            //     $scope.vm.grants = data.data;
            // });
            $scope.vm.grants = [{grantsName:'111'},{grantsName:'222'},{grantsName:'333'}];
        };
        //选中学院
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.schoolData.configs, function (i) {
                var index = $scope.vm.checked.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        //选中奖学金
        $scope.vm.checkGrants = function () {
            angular.forEach($scope.vm.grants, function (i) {
                var index = $scope.vm.grantschecked.indexOf(i.grantsName);
                if(i.grantschecked && index === -1) {
                    $scope.vm.grantschecked.push(i.grantsName);
                } else if (!i.grantschecked && index !== -1){
                    $scope.vm.grantschecked.splice(index, 1);
                };
            });
        };
        /**
         *保存提交学院配置信息
         * */
        $scope.vm.putSchoolManner = function () {
            angular.forEach($scope.vm.schoolData.configs, function (i) {
                delete i.checked;
                delete i.$$hashKey;
            });
            $scope.vm.schoolData.grantsLeavel = $scope.vm.grantschecked.join(',');
            var postData = $scope.vm.schoolData;
            console.log(postData)
            scholarCollegeServer.scholarSchoolListPost(postData).then(function (data) {
                console.log(data)
                if(data.status){
                    tools.alertSuccess('保存成功');
                }else{
                    tools.alertError('保存失败');
                }
            });

        };
    }
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.scholarSc').controller('scholarClassManerScCtrl',scholarClassManerScCtrl);
    scholarClassManerScCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'scholarSchoolServer',
        '$stateParams'
    ];

    function scholarClassManerScCtrl($scope, $rootScope, tools, ROOT, scholarSchoolServer,$stateParams) {
        $scope.vm = {
            NewSchoolYear:{},
            grantschecked:[],

        };
        // console.log($stateParams)
        function initHtml() {
            // $scope.gId = $stateParams.grantsId;
            /**
             * 获取励志学金对应的班级列表
             * */
            scholarSchoolServer.scholarClassList().then(function (data) {
                console.log('打印学院列表数据')
                console.log(data);
                $scope.vm.classData = data.data;
                $scope.vm.checked = [];
                console.log($scope.vm.classData.gradeCongifs);
                // $scope.startTime = data.data.startDate;
                // $scope.endTime = data.data.endDate;
            });
            // /**
            //  * 获取学年
            //  * */
            // scholarCollegeServer.scholarSchoolYear().then(function (data) {
            //     console.log('据')
            //     console.log(data);
            //     if(!data.status){
            //         tools.alertError('学年获取失败');
            //     }
            //     $scope.vm.schoolYear = data.data;
            // });
        };
        initHtml();
        // /**
        //  * 根据所选的学年获取奖学金
        //  * */
        // $scope.vm.updateGrants = function () {
        //     var da = $scope.vm.NewSchoolYear.name;
        //     // scholarCollegeServer.scholarGrantsList(da+'').then(function (data) {
        //     //     console.log(data)
        //     //     if(!data.status){
        //     //         tools.alertError('操作失败请稍后再试');
        //     //     }
        //     //     $scope.vm.grants = data.data;
        //     // });
        //     $scope.vm.grants = [{grantsName:'111'},{grantsName:'222'},{grantsName:'333'}];
        // };
        //选中年级
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.classData.gradeCongifs, function (i) {
                var index = $scope.vm.checked.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
            console.log($scope.vm.checked)
        };
        // //选中奖学金
        // $scope.vm.checkGrants = function () {
        //     angular.forEach($scope.vm.grants, function (i) {
        //         var index = $scope.vm.grantschecked.indexOf(i.grantsName);
        //         if(i.grantschecked && index === -1) {
        //             $scope.vm.grantschecked.push(i.grantsName);
        //         } else if (!i.grantschecked && index !== -1){
        //             $scope.vm.grantschecked.splice(index, 1);
        //         };
        //     });
        // };
        /**
         *保存提交学院配置信息
         * */
        $scope.vm.putClassManner = function () {
            // angular.forEach($scope.vm.ClaData.configs, function (i) {
            //     delete i.checked;
            //     delete i.$$hashKey;
            // });
            // $scope.vm.ClassData.grantsLeavel = $scope.vm.grantschecked.join(',');
            var postData = $scope.vm.classData;
            console.log(postData)
            scholarSchoolServer.scholarClassListPost(postData).then(function (data) {
                console.log(data)
                if(data.status){
                    tools.alertSuccess('保存成功');
                }else{
                    tools.alertError('保存失败');
                }
            });

        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.scholarSc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'main.scholarSc',
                config: {
                    url: '/scholarSc',
                    views: {
                        'section@main': {
                            templateUrl: 'dist/tpls/scholarship/school/scholarSc.html',
                            controller: 'scholarScCtrl'
                        }
                    }
                }
            }
            ,{
            state: 'main.scholarClassManerSc',
            config: {
                url: '/scholarClassManerSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/scholarship/school/scholarClassManerSc.html',
                        controller: 'scholarClassManerScCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.scholarSc').controller('scholarScCtrl',scholarScCtrl);

    scholarScCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'NgTableParams',
        'grantsCommonServer'
    ];

    function scholarScCtrl($scope, tools, ROOT, NgTableParams,grantsCommonServer) {
        $scope.vm = {
            list:[],
            levelName:'',
            showFilter:false,
            showSelect:true,
            checked:[],
            showEditTime:false

        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //获取列表
        grantsCommonServer.getGrantsStList().then(function (data) {
            console.log(data)
            $scope.vm.list = data.data;
            console.log($scope.vm.list)
            $scope.vm.tableParams = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.list}
            );
        });
        //保存等级修改（更新等级）
        $scope.vm.saveLevelName = function (user) {
            var des = {
                stage: 'collegeCheck',
                taskId: user.taskId,
                grantsName : $scope.vm.levelName.grantsName
            };
            console.log(des);
            grantsCommonServer.updateGrantsLevel(des).then(function (data) {
                if(data.status){
                    tools.alertSuccess('修改成功');
                }else {
                    tools.alertError(data.message);
                }
            });
        };
        //配置时间---函数
        $scope.fillTime = function () {
            if ($scope.vm.startTime && $scope.vm.endTime){
                var sate = {
                    startTime : $scope.vm.startTime,
                    endTime : $scope.vm.endTime,
                    stage : '学院公示'
                };
                //配置时间
                grantsCommonServer.savePublicTime(sate).then(function (data) {
                    if(data.status){
                        tools.alertSuccess('配置成功');
                    }else{
                        tools.alertError('配置失败');
                    }
                    $('#upScPulic').modal('hide');
                });
            }else {
                tools.alertError('起始时间不能为空');
            }
        };
        //判断是否已经配置时间
        grantsCommonServer.isPublicTime().then(function (data) {
            console.log(data.data)
            //已配置
            if(data.data=='yes'){
                //获取已经配置的时间
                grantsCommonServer.fillPublicTime().then(function (data) {
                    $scope.vm.nowStartDate = data.startTime;
                    $scope.vm.nowEndDate = data.endTime;
                    $scope.vm.nowId = data.id;
                    $scope.vm.showEditTime = true;
                });
                //更新时间
                $scope.vm.editTime = function () {
                    $('#upScPulic').modal('show');
                    $scope.vm.openScPublic = function () {
                        $scope.fillTime();
                    }
                };
                //提交学院公示
                $scope.vm.activityPulic = function () {
                    console.log('提交到学院公示')
                };
            }
            //未配置
            else if(data.data=='no'){
                $scope.vm.showEditTime = false;
                //提交学院公示
                $scope.vm.activityPulic = function () {
                    $('#upScPulic').modal('show');
                    $scope.vm.openScPublic = function () {
                        $scope.fillTime();
                        console.log('未配置：提交到学院公示')
                    }
                };
            }else{
                tools.alertError('系统异常请稍后再试');
            }
        });


        //提交至学校（提交任务）
        // $scope.vm.activityTasks = function () {
        //     var des = {stage:'collegeCheck'};
        //     grantsCommonServer.activityTasks(des).then(function (data) {
        //         console.log(data)
        //         $scope.vm.showSelect = false;
        //     })
        // };

        //选择驳回的学生（checkBox）
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.list,function (i) {
                var index = $scope.vm.checked.indexOf(i.taskId);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i.taskId);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        //驳回学生材料
        $scope.vm.showRejectTasks = function () {
            console.log($scope.vm.checked)
            if($scope.vm.checked.length<1){
                tools.alertError('请选择需要驳回材料的学生');
            }else {
                $('#rejectTasks').modal('show');
                $scope.vm.rejectTasks = function () {
                    if($scope.vm.rejectReason){
                        var des = {
                            rejectReason:$scope.vm.rejectReason,
                            stage:'collegeCheck',
                            rejectTasks:$scope.vm.checked
                        };
                        console.log(des);
                        grantsCommonServer.rejectTasks(des).then(function (data) {
                            console.log(data);
                            $('#rejectTasks').modal('hide');
                            tools.alertSuccess('操作成功');
                        });
                    }else {
                        $scope.vm.error = 'inputError';
                        tools.alertError('驳回信息不能为空');
                    };
                };
            };
        };
        //取消
        $scope.vm.cancel = function(){
            $('#rejectTasks').modal('hide');
        };
    }
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.scholarSt').controller('scholarPublicCtrl',scholarPublicCtrl);
    scholarPublicCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'NgTableParams',
        'grantsCommonServer',
        'grantsStudentServer'
    ];

    function scholarPublicCtrl($scope, tools, ROOT, NgTableParams, grantsCommonServer,grantsStudentServer) {
        $scope.vm = {
            checked:[],
        };
        //是否公示阶段
        grantsCommonServer.isPublic().then(function (data) {
            console.log(data)
        });
        //获取公示列表
        grantsCommonServer.publicList().then(function (data) {
            console.log(data)
            $scope.vm.publicList = data.data.resultList;
            $scope.vm.tableParams = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.publicList}
            );
        });
        //查看异议结果
        $scope.vm.doSeeAs = function(){
            grantsStudentServer.seeAs().then(function (data) {
                console.log(data);
                $scope.vm.objRes = data.data[0];
                $scope.vm.showDetail = true;
                console.log($scope.vm.objRes)
            })
        };
        //当前阶段
        grantsCommonServer.getStage().then(function (data) {
            console.log(data)
            $scope.vm.nowStage = data.data.currentStage;
            $scope.vm.nextStage = data.data.nextStage;
        });
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //关闭模态框
        $scope.vm.doPublicNo = function () {
            $scope.vm.showDetail = false;
        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.scholarSt').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.scholarPublicSt',
            config: {
                url: '/scholarPublicSt',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/scholarship/student/scholarPublicSt.html',
                        controller: 'scholarPublicStCtrl'
                    }
                }
            }
        },{
            state: 'main.scholarStudentInfo',
            config: {
                url: '/scholarStudentInfo',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/scholarship/student/scholarStudentInfo.html',
                        controller: 'scholarStudentInfoCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.scholarSt').controller('scholarStudentInfoCtrl',scholarStudentInfoCtrl);
    scholarStudentInfoCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'scholarStudentServer'
    ];
    function scholarStudentInfoCtrl($scope, tools, ROOT, scholarStudentServer) {
        $scope.vm = {
            baseInfo: {}
        };
        //获取学生基本信息
        scholarStudentServer.getStudentInfo().then(function (data) {
            console.log(data);
            $scope.vm.baseInfo.studentInfo = data.data;
        });
        //获取学生基本信息
        scholarStudentServer.getStudentInfo().then(function (data) {
            console.log(data);
            $scope.vm.baseInfo.studentInfo = data.data;
        });
        //是否带领切换
        $scope.changeRadio = function () {
            $scope.daiLing = !$scope.daiLing;
            if($scope.daiLing){
                $scope.vm.applyInfos.isAgent = 1;
                $scope.vm.applyInfos.bankcard  = null;
            }else {
                $scope.vm.applyInfos.isAgent = 0;
                $scope.vm.applyInfos.agentBankcard = null;
                $scope.vm.applyInfos.agentSn = null;
            }
        };



        // commonServer.getStudentInfo(110).then(function (data) {
        //
        // });
        // /**
        //  * 获取登录用户基本信息
        //  */
        // studentServer.getBaseInfo().then(function (data) {
        //     if (data.status) {
        //         data.data.isDisability = data.data.isDisability == null ? 0 : data.data.isDisability;
        //         data.data.isSole = data.data.isSole == null ? 0 : data.data.isSole;
        //         data.data.isMartyr = data.data.isMartyr == null ? 0 : data.data.isMartyr;
        //         data.data.isLowField = data.data.isLowField == null ? 0 : data.data.isLowField;
        //         data.data.isLoad = data.data.isLoad == null ? 0 : data.data.isLoad;
        //         data.data.isFilingCard = data.data.isFilingCard == null ? 0 : data.data.isFilingCard;
        //         data.data.isAccident = data.data.isAccident == null ? 0 : data.data.isAccident;
        //         $scope.vm.baseInfo = data.data;
        //     }
        // });
        // /**
        //  * 家庭成员相关操作
        //  */
        // $scope.initFamily = function () {
        //     studentServer.getFamilyMember().then(function (data) {
        //         if (data.status) {
        //             $scope.vm.familyMemberList = data.data;
        //         }
        //     });
        // };
        // $scope.initFamily();
        // $scope.addFamilyMember = function () {
        //     $scope.vm.addFamilyMember = {};
        //     $scope.vm.familySubmit = false;
        //     $('#addFamilyMember').modal('show');
        //     $scope.addFamily = function () {
        //         $scope.vm.familySubmit = true;
        //         if ($scope.vm.familyForm.$valid) {
        //             studentServer.addFamilyMember($scope.vm.addFamilyMember).then(function (data) {
        //                 if (data.status) {
        //                     tools.alertSuccess($rootScope, '添加成功');
        //                     $scope.initFamily();
        //                     $('#addFamilyMember').modal('hide');
        //                 }
        //             });
        //         }
        //     };
        // };
        // $scope.deleteFamilyMember = function (id) {
        //     studentServer.deleteFamilyMember({
        //         'id': id
        //     }).then(function (data) {
        //         if (data.status) {
        //             tools.alertSuccess($rootScope, '删除成功');
        //             $scope.initFamily();
        //         }
        //     });
        // };
        // /**
        //  * 资助情况相关操作
        //  */
        // $scope.initSubsidy = function () {
        //     studentServer.querySubsidy().then(function (data) {
        //         if (data.status) {
        //             $scope.vm.subsidyList = data.data;
        //         }
        //     });
        // };
        // $scope.initSubsidy();
        // $scope.addSubsidyShow = function () {
        //     $scope.vm.addSubsidy = {};
        //     $scope.vm.subsidySubmit = false;
        //     $('#addSubsidy').modal('show');
        //     $scope.addSubsidy = function () {
        //         $scope.vm.subsidySubmit = true;
        //         if ($scope.vm.subsidyForm.$valid) {
        //             studentServer.addSubsidy($scope.vm.addSubsidy).then(function (data) {
        //                 if (data.status) {
        //                     tools.alertSuccess($rootScope, '添加成功');
        //                     $scope.initSubsidy();
        //                     $('#addSubsidy').modal('hide');
        //                 }
        //             });
        //         }
        //     };
        // };
        // $scope.removeSubsidy = function (id) {
        //     studentServer.removeSubsidy({
        //         'id': id
        //     }).then(function (data) {
        //         if (data.status) {
        //             tools.alertSuccess($rootScope, '删除成功');
        //             $scope.initSubsidy();
        //         }
        //     });
        // };
        // /**
        //  * 保存信息
        //  */
        // $scope.saveInfo = function () {
        //     $scope.vm.baseSubmit = true;
        //     $scope.vm.baseInfo.description = $scope.vm.baseInfo.description;
        //     if ($scope.vm.baseForm.$valid) {
        //         studentServer.modifyStudentInfo($scope.vm.baseInfo).then(function (data) {
        //             if (data.status) {
        //                 tools.alertSuccess($rootScope, '修改成功');
        //                 $rootScope.isComplete = 1;
        //             }
        //         });
        //     } else {
        //         tools.alertError($rootScope, '请填写完整信息');
        //     }
        // };
        // $rootScope.bigStatus = 1;
        // $rootScope.processName = '正在进行学生申请';
        // $rootScope.lastTime = new Date().getTime();
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.scholarTc').controller('scholarFillTcCtrl',scholarFillTcCtrl);

    scholarFillTcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'NgTableParams'
    ];

    function scholarFillTcCtrl($scope, tools, ROOT, grantsCommonServer,NgTableParams) {
        $scope.vm = {
            list:[],
            levelName:'',
            showFilter:false,
            showSelect:true,
            checked:[]

        };
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //获取列表
        grantsCommonServer.getGrantsStList().then(function (data) {
            console.log(data)
            $scope.vm.list = data.data;
            console.log($scope.vm.list)
            $scope.vm.tableParams = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.list}
            );
        });
        //保存等级修改（更新等级）
        $scope.vm.saveLevelName = function (user) {
            var des = {
                stage: 'advisorCheck',
                taskId: user.taskId,
                grantsName : $scope.vm.levelName.grantsName
            };
            console.log(des);
            grantsCommonServer.updateGrantsLevel(des).then(function (data) {
                if(data.status){
                    tools.alertSuccess('修改成功');
                }else {
                    tools.alertError(data.message);
                }
            });
        };
        //提交至学院（提交任务）
        $scope.vm.activityTasks = function () {
            var des = 'advisorCheck';
            grantsCommonServer.activityTasks(des).then(function (data) {
                console.log(data)
                $scope.vm.showSelect = false;
            })
        };
        //选择驳回的学生（checkBox）
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.list,function (i) {
                var index = $scope.vm.checked.indexOf(i.taskId);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i.taskId);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        //驳回多选学生材料
        $scope.vm.showRejectTasks = function () {
            console.log($scope.vm.checked)
            if($scope.vm.checked.length<1){
                tools.alertError('请选择需要驳回材料的学生');
            }else {
                $('#rejectTasks').modal('show');
                $scope.vm.rejectTasks = function () {
                    if($scope.vm.rejectReason){
                        var des = {
                            rejectReason:$scope.vm.rejectReason,
                            stage:'advisorCheck',
                            rejectTasks:$scope.vm.checked
                        };
                        console.log(des);
                        grantsCommonServer.rejectTasks(des).then(function (data) {
                            console.log(data);
                            $('#rejectTasks').modal('hide');
                            tools.alertSuccess('操作成功');
                        });
                    }else {
                        $scope.vm.error = 'inputError';
                        tools.alertError('驳回信息不能为空');
                    };
                };
            };
        };
        //取消
        $scope.vm.cancel = function(){
            $('#rejectTasks').modal('hide');
        };

    }
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.scholarTc').controller('scholarPublicTcCtrl',scholarPublicTcCtrl);
    scholarPublicTcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'NgTableParams'
    ];

    function scholarPublicTcCtrl($scope, tools, ROOT, grantsCommonServer, NgTableParams) {
        $scope.vm = {
            show:false
        };
        //获取公示列表
        grantsCommonServer.publicList().then(function (data) {
            console.log(data)
            if(data.status){
                $scope.vm.publicList = data.data.resultList;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset: $scope.vm.publicList}
                );
            }else {
                tools.alertError(data.message)
            }

        });
        $scope.vm.showSearch = function () {
            $scope.vm.show = !$scope.vm.show;
        }
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.scholarTc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.scholarFillTc',
            config: {
                url: '/scholarFillTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/scholarship/teacher/scholarFillTc.html',
                        controller: 'scholarFillTcCtrl'
                    }
                }
            }
        },{
            state: 'main.scholarPublicTc',
            config: {
                url: '/scholarPublicTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/scholarship/scholarPublicTc.html',
                        controller: 'scholarPublicTcCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.loanCc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.loanCc',
            config: {
                url: '/loanCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/studentLoan/college/loanCc.html',
                        controller: 'loanCcCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.loanCc').controller('loanCcCtrl',loanCcCtrl);

    loanCcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'FileUploader',
        'NgTableParams'
    ];

    function loanCcCtrl($scope, tools, ROOT, grantsCommonServer, FileUploader, NgTableParams) {
        $scope.vm = {
            nowApList : [1,2,3,4,5,6,7,8,9,10],
        };
        /**
         * 上传表格
         * */
        (function () {
            var uploader = $scope.uploader = new FileUploader({
                url: ROOT+'/loan/passed/studentList',
                autoUpload: true,
                removeAfterUpload: true,
                queueLimit: 1,
                method:'put'
            });
            uploader.onAfterAddingFile = function (fileItem) {
                console.log(fileItem)
                var lastName = fileItem.file.name.slice((fileItem.file.name.lastIndexOf('.')+1)).toLowerCase();
                var _arr = ['xls', 'xlsx'];
                if (_arr.indexOf(lastName) === -1) {
                    tools.alertError('请上传【xlsx,xls】规定格式文件');
                    uploader.clearQueue();
                }
            };
            uploader.onCompleteItem = function (fileItem, response) {
                console.log(response)
                if (response.status) {
                    tools.alertSuccess('上传成功');
                    $scope.init();
                } else {
                    tools.alertError('上传失败');
                }
            };
        })();
        /**
         * 获取列表
         */
        $scope.init = function () {
            grantsCommonServer.loanList().then(function (data) {
                $scope.vm.loanList = data.data;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset:  $scope.vm.loanList }
                );
            });
        };
        $scope.init();

    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.loanSc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.loanSc',
            config: {
                url: '/loanSc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/studentLoan/school/loanSc.html',
                        controller: 'loanScCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.loanSc').controller('loanScCtrl',loanScCtrl);

    loanScCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'NgTableParams'
    ];

    function loanScCtrl($scope, $rootScope, tools, ROOT, grantsCommonServer ,NgTableParams) {
        /**
         * 获取列表
         */
        $scope.innit = function () {
            $scope.vm ={};
            grantsCommonServer.loanList().then(function (data) {
                $scope.vm.loanList = data.data;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset:  $scope.vm.loanList }
                );
            });
        };
        $scope.innit();
        /**
         * 搜索按钮
         */
        $scope.vm.search = function () {
            $scope.vm.show = !$scope.vm.show;
        }
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantApply').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.loanSt',
            config: {
                url: '/loanSt',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/studentLoan/student/loanSt.html',
                        controller: 'loanStCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.loanSt').controller('loanStCtrl',loanStCtrl);

    loanStCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'httpServer',
        '$state',
        '$timeout'
    ];

    function loanStCtrl($scope, $rootScope, tools, httpServer, $state ,$timeout) {
        $scope.vm = {
            loanId:null,
            loanEndTime : null,
            loanCreateTime : null,
            loanApMoney : null,
            dis:false

        };
        /**
         * 获取学生申请页面的返回值，3个时间
         * */
        httpServer.get('/loan/newest').then(function (res) {
            console.log(res)
            $scope.vm.loanId = res.data.id;
            $scope.vm.loanEndTime = res.data.endTime;
            $scope.vm.loanCreateTime = res.data.createTime;
        });
        /**
         * 点击申请，发送post请求
         * */
        $scope.vm.doApplyLoan = function () {
            if($scope.vm.loanApMoney===''){
                tools.alertError( '申请金额不能为空');
            }else if(tools.number($scope.vm.loanApMoney)){
                var loanId = $scope.vm.loanId+"";
                var money = parseInt($scope.vm.loanApMoney);
                httpServer.put('/loan/application',{'loanId':loanId,'appliedAmount': money })
                    .then(function (data) {
                        $scope.vm.dis = true;
                        if(data.status=false){
                            tools.alertError('申请失败');
                        }else if(data.status=true){
                            if(data.code===9000){
                                tools.alertSuccess('预申请成功');
                            }else if(data.code===9002){
                                tools.alertError('该贷款项已停止申请');
                            }else if(data.code===9002){
                                tools.alertError('请勿重复申请贷款');
                            }
                        }
                    });
            }else {
                tools.alertError('申请金额格式错误');
            }
        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.loanTc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.loanTc',
            config: {
                url: '/loanTc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/studentLoan/teacher/loanTc.html',
                        controller: 'loanTcCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.loanTc').controller('loanTcCtrl',loanTcCtrl);

    loanTcCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'grantsCommonServer',
        'NgTableParams'
    ];

    function loanTcCtrl($scope, $rootScope, tools, ROOT, grantsCommonServer ,NgTableParams) {
        /**
         * 获取列表
         */
        $scope.innit = function () {
            $scope.vm ={
                show:false
            };
            grantsCommonServer.loanList().then(function (data) {
                $scope.vm.loanList = data.data;
                $scope.vm.tableParams = new NgTableParams(
                    { count: 5 },
                    { dataset:  $scope.vm.loanList }
                );
            });
        };
        $scope.innit();
        /**
         * 搜索按钮
         */
        $scope.vm.search = function () {
            $scope.vm.show = !$scope.vm.show;
        }

    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/3
 * Time: 11:07
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 助学金可操作批次列表
     */
    angular.module('app.core').directive('grantsBatchSelect', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/grants/grantsBatchSelect.html',
            replace: true,
            scope: {
                selectedBatch: '='
            },
            controller: [
                'tools',
                '$scope',
                'grantsCommonServer',
                function (tools, $scope, grantsCommonServer) {
                    $scope.vm = {};

                    grantsCommonServer.batchesInProcess().then(function (data) {
                        if (data.status) {
                            $scope.vm.grantsBatchList = data.data;
                            $scope.selectedBatch = data.data[0];
                        }
                    });
                }
            ]
        };
    }]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/5
 * Time: 10:44
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 打开和收起搜索框
     */
    angular.module('app.core').directive('grantsCommitToNextStep', [function () {
        return {
            restrict: 'E',
            template: '<input type="button" value="{{btnValue}}" ng-click="operateProcess()">',
            replace: true,
            scope: {
                btnValue: '@',
                batchId: '=',
                refresh: '&'
            },
            controller: ['$scope', 'grantsActivitiServer', 'tools', function ($scope, grantsActivitiServer, tools) {

                $scope.operateProcess = function () {
                    grantsActivitiServer.commitTasks($scope.batchId).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('提交成功');
                            $scope.refresh();
                        }
                    });
                };

            }]
        };
    }]);
})();
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
     * 学生对公示发反馈意见
     */
    angular.module('app.core').directive('grantsDetail', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/grants/grantsDetail.html',
            replace: true,
            scope: {
                grants: '='
            },
            controller: [
                '$scope',
                function ($scope) {

                    $scope.$watch('grants', function (to) {
                        if (to) {
                            angular.forEach($scope.grants.levels, function (value) {
                                value.name = value.url ? value.url.split('\\')[value.url.split('\\').length - 1] : value.url;
                            });
                        }
                    });

                }
            ]
        };
    }]);
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/3
 * Time: 11:07
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 跳转至学生申请资料详情页面
     */
    angular.module('app.core').directive('grantsLevelSelect', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/grants/grantsLevelSelect.html',
            replace: true,
            scope: {
                student: '=',
                edit: '@',
                defaultLevel: '='
            },
            controller: [
                'tools',
                '$scope',
                'grantsActivitiServer',
                function (tools, $scope, grantsActivitiServer) {
                    $scope.vm = {};

                    $scope.student.grantsLevel = $scope.student.grantsLevel.map(function(value){
                        return value.name;
                    });

                    /**
                     * 修改等级
                     */
                    $scope.vm.changeLevel = function (level) {
                        if ($scope.defaultLevel) {
                            $scope.defaultLevel = level;
                            grantsActivitiServer.updateGrantsLevel({
                                taskId: $scope.student.taskId,
                                batchId: $scope.student.batchId,
                                grantsName: $scope.defaultLevel
                            }).then(function (data) {
                                if (data.status) {
                                    tools.alertSuccess('修改成功');
                                }
                            });
                        }
                    };
                }
            ]
        };
    }]);
})();
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
     * 学生对公示发反馈意见
     */
    angular.module('app.core').directive('showGrantsMaterial', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/grants/showGrantsMaterial.html',
            replace: true,
            scope: {
                materialList: '='
            },
            controller: [
                '$scope',
                function ($scope) {
                    $scope.materialList = $scope.materialList ? $scope.materialList.map(function (value) {
                        return {
                            url: value,
                            name: value.split('\\')[value.split('\\').length - 1]
                        };
                    }) : [];
                    $scope.showGrantsMaterialModal = function () {
                        $('#materialDetail').modal('show');
                    };

                }
            ]
        };
    }]);
})();

/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminCc').run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'main.grantAdminCc',
                config: {
                    url: '/grantAdminCc',
                    views: {
                        'section@main': {
                            templateUrl: 'dist/tpls/grantApply/college/grantAdminCc.html',
                            controller: 'grantAdminCcCtrl'
                        }
                    }
                }
            }
            ,{
            state: 'main.grantAdminPublicCc',
            config: {
                url: '/grantAdminPublicCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/college/grantAdminPublicCc.html',
                        controller: 'grantAdminPublicCcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminConfigCc',
            config: {
                url: '/grantAdminConfigCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/college/grantAdminConfigCc.html',
                        controller: 'grantAdminConfigCcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminSchoolManerCc',
            config: {
                url: '/grantAdminSchoolManerCc/:grantsId',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/college/grantAdminSchoolManerCc.html',
                        controller: 'grantAdminSchoolManerCcCtrl'
                    }
                }
            }
        },{
            state: 'main.grantAdminComPublicCc',
            config: {
                url: '/grantAdminComPublicCc',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/grantApply/college/grantAdminComPublicCc.html',
                        controller: 'grantAdminComPublicCcCtrl'
                    }
                }
            }
        }];
    }
})();

/**
 * Created by chenjun on 2017/5/23.
 */
(function () {
    'use strict';
    angular.module('app.grantAdminCc').controller('grantAdminCcCtrl',grantAdminCcCtrl);

    grantAdminCcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'NgTableParams',
        'grantsCommonServer'
    ];

    function grantAdminCcCtrl($scope, tools, ROOT, NgTableParams,grantsCommonServer) {
        $scope.vm = {
            list:[],
            showFilter:false,
            showSelect:true,
            checked:[],
            showEditTime:false

        };
        $scope.aaa = '1';
        //显示搜索
        $scope.vm.doShowFilter = function () {
            $scope.vm.showFilter = !$scope.vm.showFilter;
        };
        //获取列表
        grantsCommonServer.getGrantsStList().then(function (data) {
            console.log(data)
            $scope.vm.list = data.data;
            // $scope.vm.levelName = data.data.schoolResult;
            console.log($scope.vm.list)
            $scope.vm.tableParams = new NgTableParams(
                { count: 5 },
                { dataset: $scope.vm.list}
            );
            // console.log($scope.vm.levelName);
        });
        //保存等级修改（更新等级）
        $scope.vm.saveLevelName = function (user) {
            var des = {
                stage: 'collegeCheck',
                taskId: user.taskId,
                grantsName : $scope.vm.levelName.grantsName
            };
            console.log($scope.vm.levelName);
            console.log(des);
            grantsCommonServer.updateGrantsLevel(des).then(function (data) {
                if(data.status){
                    tools.alertSuccess('修改成功');
                }else {
                    tools.alertError(data.message);
                }
            });
        };
        //配置时间---函数
        $scope.fillTime = function () {
            if ($scope.vm.startTime && $scope.vm.endTime){
                var sate = {
                    startTime : $scope.vm.startTime,
                    endTime : $scope.vm.endTime,
                    stage : '学校公示'
                };
                //配置时间
                grantsCommonServer.savePublicTime(sate).then(function (data) {
                    if(data.status){
                        tools.alertSuccess('配置成功');
                    }else{
                        tools.alertError('配置失败');
                    }
                    $('#upScPulic').modal('hide');
                });
            }else {
                tools.alertError('起始时间不能为空');
            }
        };
        //判断是否已经配置时间
        grantsCommonServer.isPublicTime().then(function (data) {
            console.log(data.data)
            $scope.vm.isPublic = data.data;
            //已配置
            if(data.data){
                //获取已经配置的时间
                grantsCommonServer.fillPublicTime().then(function (data) {
                    $scope.vm.nowStartDate = data.startTime;
                    $scope.vm.nowEndDate = data.endTime;
                    $scope.vm.nowId = data.id;
                    $scope.vm.showEditTime = true;
                });
                //更新时间
                $scope.vm.editTime = function () {
                    $('#upScPulic').modal('show');
                    $scope.vm.openScPublic = function () {
                        $scope.fillTime();
                    }
                };
                //提交学院公示
                $scope.vm.activityPulic = function () {
                    console.log('提交到学院公示')
                };
            }
            //未配置
            else if(!data.data){
                $scope.vm.showEditTime = false;
                //提交学院公示
                $scope.vm.activityPulic = function () {
                    $('#upScPulic').modal('show');
                    $scope.vm.openScPublic = function () {
                        $scope.fillTime();
                        console.log('未配置：提交到学院公示')
                    }
                };
            }else{
                tools.alertError('系统异常请稍后再试');
            }
        });


        //提交至学校（提交任务）
        // $scope.vm.activityTasks = function () {
        //     var des = {stage:'collegeCheck'};
        //     grantsCommonServer.activityTasks(des).then(function (data) {
        //         console.log(data)
        //         $scope.vm.showSelect = false;
        //     })
        // };

        //选择驳回的学生（checkBox）
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.list,function (i) {
                var index = $scope.vm.checked.indexOf(i.taskId);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i.taskId);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        //驳回学生材料
        $scope.vm.showRejectTasks = function () {
            console.log($scope.vm.checked)
            if($scope.vm.checked.length<1){
                tools.alertError('请选择需要驳回材料的学生');
            }else {
                $('#rejectTasks').modal('show');
                $scope.vm.rejectTasks = function () {
                    if($scope.vm.rejectReason){
                        var des = {
                            rejectReason:$scope.vm.rejectReason,
                            stage:'collegeCheck',
                            rejectTasks:$scope.vm.checked
                        };
                        console.log(des);
                        grantsCommonServer.rejectTasks(des).then(function (data) {
                            console.log(data);
                            $('#rejectTasks').modal('hide');
                            tools.alertSuccess('操作成功');
                        });
                    }else {
                        $scope.vm.error = 'inputError';
                        tools.alertError('驳回信息不能为空');
                    };
                };
            };
        };
        //取消
        $scope.vm.cancel = function(){
            $('#rejectTasks').modal('hide');
        };
    }
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminCc').controller('grantAdminComPublicCcCtrl',grantAdminComPublicCcCtrl);
    grantAdminComPublicCcCtrl.$inject = [
        '$scope',
        '$rootScope',
        'FileUploader',
        'tools',
        'ROOT',
        'NgTableParams'
    ];

    function grantAdminComPublicCcCtrl($scope, $rootScope, FileUploader,tools, ROOT,NgTableParams) {
        $scope.vm = {
            showOkBtn : true,
            showNoBtn : true,
            showDetail : false,
            nowApList : [1,2,3,4,5,6,7,8,9,10],
            showExtb : true,
            showUnExtb : false,
            showExsearch : false,
            showUnExsearch : false
        };
        $scope.vm.grantsCollegeExamineList = [
            {name: "Moroni", xuehao: 20,xueyuan:201,age:11},
            {name: "Moroni", xuehao: 20,xueyuan:201,age:11}
        ];
        $scope.vm.tableParams = new NgTableParams(
            { count: 5 }, 
            { counts: [5, 10, 20]}, 
            { dataset: $scope.vm.grantsCollegeExamineList}
        );
        $scope.vm.showExTb = function ($event) {
            $event.stopPropagation();
            $scope.vm.showExtb = true;
            $scope.vm.showUnExtb = false;
        };
        $scope.vm.showUnExTb = function () {
            $scope.vm.showExtb = false;
            $scope.vm.showUnExtb = true;
        };
        $scope.vm.goPage = function ($index,item) {
            if(item==$index+1){
                $scope.vm.pageAcClass = "pageActive";
            }
        };
        $scope.vm.showExSearch = function () {
            $scope.vm.showExsearch = true;
        };
        $scope.vm.showUnExSearch = function () {
            $scope.vm.showUnExsearch = true;
        }
        $scope.vm.doHaveQs = function ($event) {
            $event.stopPropagation();
            $scope.vm.showDetail = true;
        };
        $scope.vm.doPublicOk = function ($event) {
            $event.stopPropagation();
            $scope.vm.showDetail = false;
        };
        $scope.vm.doPublicNo = function ($event) {
            $event.stopPropagation();
            $scope.vm.showDetail = false;
        };
    }
})();
/**
 * Created by chenjun on 2017/5/24.111111111111111111111111111111111111111111111111111111111
 */
(function () {
    'use strict';
    angular.module('app.grantAdminCc').controller('grantAdminConfigCcCtrl',grantAdminConfigCcCtrl);
    grantAdminConfigCcCtrl.$inject = [
        '$scope',
        'grantsSchoolServer',
        'NgTableParams',
        'grantsCommonServer',
        'grantsCollegeServer',
        'tools',
        '$state'
    ];

    function grantAdminConfigCcCtrl($scope, grantsSchoolServer, NgTableParams, grantsCommonServer, grantsCollegeServer, tools, $state) {
        $scope.vm = {
            tableFlag: 0
        };


        /**
         * 初始化助学金列表信息
         */
        $scope.init = function () {
            grantsCommonServer.grantsList().then(function (data) {
                if (data.status) {
                    $scope.vm.grantsList = data.data;
                    console.log($scope.vm.grantsList)
                    angular.forEach(data.data, function (value, key) {
                        value.index = key + 1;
                    });
                    $scope.vm.tableParams = new NgTableParams({
                        count: 10
                    },{
                        dataset: $scope.vm.grantsList
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
            /**
             *获取学年,设置默认学年
             */
            grantsCollegeServer.grantsSchoolYear().then(function (data) {
                console.log('默认学年')
                console.log(data)
                $scope.vm.schoolYearList = data.data;
                $scope.vm.schoolYear=$scope.vm.schoolYearList[0].name;
            });
            /**
             *学校总人数 + 已认定经济困难人数
             */
            grantsCollegeServer.studentNumInfo().then(function (data) {
                console.log(data);
                if(data.status){
                    $scope.vm.studentNum = data.data;
                }
            });
        };
        $scope.init();

        /**
         * 初始化时间
         */
        $scope.initTime = function () {
            $scope.vm.startTimeOptions = {
                minDate: new Date(),
                maxDate: new Date($scope.vm.currentGrants.endTime)
            };
            $scope.vm.endTimeOptions = {
                minDate: new Date($scope.vm.currentGrants.startTime)
            };
            $scope.$watch('vm.currentGrants.endTime', function (to) {
                $scope.vm.startTimeOptions.maxDate = new Date(to);
            });
            $scope.$watch('vm.currentGrants.startTime', function (to) {
                $scope.vm.endTimeOptions.minDate = new Date(to);
            });
        };


        /**
         * 编辑助学金信息
         */
        $scope.vm.grantsModalShow = function (des) {
            $('#addGrants').modal({backdrop: 'static', keyboard: false});
            //初始化提交验证为false
            $scope.vm.grantsSubmit = false;

            var _action;
            /**
             * 如果传入的有参数des，助学金修改
             */
            if (des) {
                $scope.vm.currentGrants = angular.copy(des);
                console.log('des')
                $scope.initTime();
                //如果grants.level[0].level != null 表示分级，否则表示不分级
                $scope.vm.currentGrants.type = $scope.vm.currentGrants.level != null ? 1 : 0;
                $scope.vm.currentGrants.title = '编辑助学金';
                $scope.addGrants = function () {
                    $scope.vm.grantsSubmit = true;
                    console.log( $scope.vm.schoolYear)
                    console.log('打印currentGrants')
                    console.log($scope.vm.currentGrants);
                    $scope.vm.currentGrants.schoolYear =  $scope.vm.schoolYear;
                    if ($scope.vm.grantsForm.$valid) {
                        grantsSchoolServer.grantsUpdate($scope.vm.currentGrants).then(function (data) {
                            console.log('打印请求后的data')
                            console.log(data)
                            if (data.status) {
                                tools.alertSuccess('修改成功');
                                $scope.init();
                            }
                            $('#addGrants').modal('hide');
                        });
                    } else {
                        tools.alertError('请填写完整信息');
                    }
                };
            }
            /**
             * 如果传入的没有参数des，添加助学金
             */
            else
                {
                $scope.vm.currentGrants = {
                    type: 0,
                    level: [{levelName: null}]
                }

                $scope.initTime();
                $scope.vm.currentGrants.type = 0;
                $scope.vm.currentGrants.title = '新增助学金';
                $scope.addGrants = function () {
                    $scope.vm.grantsSubmit = true;
                    $scope.vm.currentGrants.schoolYear =  $scope.vm.schoolYear;
                    console.log('添加发送的currentGrants')
                    console.log($scope.vm.currentGrants);
                    console.log( $scope.vm.schoolYear)
                    if ($scope.vm.grantsForm.$valid) {
                        console.log($scope.vm.currentGrants);
                        grantsSchoolServer.grantsSave($scope.vm.currentGrants).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('添加成功');
                                console.log('currentGrants')
                                console.log($scope.vm.currentGrants);
                                $scope.init();
                            }
                            $('#addGrants').modal('hide');
                        });
                        console.log($scope.vm.currentGrants)
                    } else {
                        tools.alertError('请填写完整信息');
                    }
                };
            }
        };


        /**
         * 查看助学金信息
         */
        $scope.grantsDetailModalShow = function (des) {
            $('#grantsDetail').modal('show');

            $scope.vm.grantsDetail = des;

        };

        /**
         * 监听radio切换
         */
        $scope.typeChange = function () {
            if (parseInt($scope.vm.currentGrants.type) === 1) {
                $scope.vm.currentGrants.level[0].levelNameName= '一等';
            } else if (parseInt($scope.vm.currentGrants.type) === 0) {
                $scope.vm.currentGrants.level.push({levelName : null});
            }
        };

        /**
         * 添加等级
         */
        $scope.vm.addLevel = function () {
            if ($scope.vm.currentGrants.level.length < 4) {
                $scope.vm.currentGrants.level.push({levelName: '特等'});
            } else {
                tools.alertError('最多添加四个等级');
            }
        };

        /**
         * 移除等级
         * @param index 等级索引
         */
        $scope.removeLevel = function (index) {
            if ($scope.vm.currentGrants.level.length > 1) {
                $scope.vm.currentGrants.level.splice(index, 1);
            } else {
                tools.alertError('等级至少保留一个');
            }
        };

        /**
         * 删除助学金
         * @param uuid  助学金ID
         */
        $scope.vm.delete = function (des) {
            var uuid = des.id;
            grantsSchoolServer.grantsDelete(uuid).then(function (data) {
                if (data.status) {
                    tools.alertSuccess('删除成功');
                    //从$scope.vm.grantsList中去除删除的助学金
                    var index = des.index;
                    $scope.vm.grantsList.splice(index, 1);
                    $scope.init();
                }else{
                    tools.alertSuccess('操作失败');
                }
            });
        };
    /**
     * 点击新申请
     * */

        $scope.vm.newApplys = function (des) {
            if(des.newApplys.length){
                var grantsId = des.id;
                $state.go("main.grantAdminSchoolManerCc",{grantsId:grantsId},{reload : true});
            }else{
                tools.alertError("暂时没有新的申请");
            }
        };
    /**
     * 点击开始分配名额
     * */
        $scope.vm.mannerSchoolMount = function (des) {
            var grantsId = des.id;
            $state.go("main.grantAdminSchoolManerCc",{grantsId:grantsId},{reload : true});
        };
    };
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminCc').controller('grantAdminPublicCcCtrl',grantAdminPublicCcCtrl);
    grantAdminPublicCcCtrl.$inject = [
        '$scope',
        'tools',
        'ROOT',
        'grantsCommonServer'
    ];

    function grantAdminPublicCcCtrl($scope, tools, ROOT ,grantsCommonServer) {
        $scope.vm = {
            showOkBtn : true,
            showNoBtn : true,
            showDetail : false,
            dealList :[]
        };
        $scope.innitHtml = function(){
            //获取异议列表
            grantsCommonServer.getObjList().then(function (data) {
                console.log(data);
                if(data.status){
                    $scope.vm.objList = data.data;
                }else {
                    tools.alertError(data.message);
                }
            });
            //判断有无 未处理的异议||异议
            // angular.forEach($scope.vm.objList,function (i) {
            //     if (i.dealTime){
            //         $scope.vm.dealList.push(i);
            //     }
            // });
            // if ($scope.vm.dealList.length>0){
            //     $scope.vm.haveList = false;
            // }else {
            //     $scope.vm.haveList = true;
            // }
        };
        $scope.innitHtml();
        //处理异议
        $scope.vm.upCcPublic = function (des) {
            var des = des;
            $scope.vm.showDetail = true;
            $scope.vm.doPublicOk = function () {
                if($scope.vm.objReason){
                    var da = {
                        id :des.id,
                        response : $scope.vm.objReason
                    };
                    grantsCommonServer.postHandle(da).then(function(data){
                        console.log(data)
                        if (data.status){
                            tools.alertSuccess('异议处理成功');
                            $scope.vm.showDetail = false;
                            $scope.innitHtml();
                        }else {
                            tools.alertError(data.message);
                        }
                    });
                }else {
                    tools.alertError('异议内容不能为空');
                }
            }
        };
        //关闭模态框
        $scope.vm.doPublicNo = function () {
            $scope.vm.showDetail = false;
        };

    }
})();
/**
 * Created by chenjun on 2017/5/24.
 */
;(function () {
    'use strict';
    angular.module('app.grantAdminCc').controller('grantAdminSchoolManerCcCtrl',grantAdminSchoolManerCcCtrl);
    grantAdminSchoolManerCcCtrl.$inject = [
        '$scope',
        '$rootScope',
        'tools',
        'ROOT',
        'grantsCollegeServer',
        '$stateParams'
    ];

    function grantAdminSchoolManerCcCtrl($scope, $rootScope, tools, ROOT, grantsCollegeServer,$stateParams) {
        $scope.vm = {
            schoolList:[],
            checkeSchool:[],
        };
        console.log($stateParams)
        function initHtml() {
            $scope.gId = $stateParams.grantsId;
            /**
             * 获取助学金对应的学院列表
             * */
            grantsCollegeServer.grantsSchoolList($scope.gId).then(function (data) {
                console.log(data);
                $scope.vm.schoolData = data.data;
                $scope.vm.checked = [];
            });
        };
        initHtml();
        //选中学院
        $scope.vm.checkOne = function () {
            angular.forEach($scope.vm.schoolData.configs, function (i) {
                var index = $scope.vm.checked.indexOf(i);
                if(i.checked && index === -1) {
                    $scope.vm.checked.push(i);
                } else if (!i.checked && index !== -1){
                    $scope.vm.checked.splice(index, 1);
                };
            });
        };
        /**
         *保存提交学院配置信息
         * */
        $scope.vm.putSchoolManner = function () {
            angular.forEach($scope.vm.schoolData.configs, function (i) {
                delete i.checked;
                delete i.$$hashKey;
            });
            var postData = $scope.vm.schoolData;
            console.log(postData)
            grantsCollegeServer.grantsSchoolListPost(postData).then(function (data) {
                console.log(data)
                if(data.status){
                    tools.alertSuccess('保存成功');
                }else{
                    tools.alertError('保存失败');
                }
            });

        };
    }
})();
/**
 * @Author: gaohuabin
 * @Date:   2016-10-07 17:17:55
 * @Last Modified by:   gaohuabin
 * @Last Modified time: 2016-10-07 17:19:15
 */
(function () {
    'use strict';
    angular.module('app.core').factory('postInterceptor', postInterceptor);

    postInterceptor.$inject = ['$rootScope', '$q', 'tools', '$cookies'];

    function postInterceptor ($rootScope, $q, tools, $cookies) {
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
                            tools.alertError('操作失败，请稍后再试！');
                        }else{
                            tools.alertError(resp.data.message);
                        }
                    } else if (resp.data.flag === 0) {
                        tools.alertError(resp.data.message);
                    } else {
                        tools.alertError(resp.data.message);
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
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/3
 * Time: 11:07
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 跳转至学生申请资料详情页面
     */
    angular.module('app.core').directive('difficultLevelSelect', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/poverty/difficultLevelSelect.html',
            replace: true,
            scope: {
                thisStep: '=',
                studentId: '=',
                defaultLevel: '=',
                step: '='
            },
            controller: [
                'tools',
                '$scope',
                'particularlyDifficultServer',
                function (tools, $scope, particularlyDifficultServer) {
                    $scope.vm = {
                        levels: ['通过', '不通过']
                    };
                    /**
                     * 修改等级
                     */
                    $scope.defaultLevel = $scope.defaultLevel==1? '通过': '不通过';
                    $scope.vm.changeLevel = function (level) {
                        if ($scope.defaultLevel) {
                            $scope.defaultLevel = level;
                            particularlyDifficultServer.postAllowanceUpdateApply({
                                applyId: $scope.studentId,
                                pass: $scope.defaultLevel=='通过'? 1:0,
                                step: $scope.step,
                            }).then(function (data) {
                                if (data.status) {
                                    tools.alertSuccess('修改成功');
                                }
                            });
                        }
                    };
                }
            ]
        };
    }]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/5
 * Time: 10:44
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 打开和收起搜索框
     */
    angular.module('app.core').directive('operateProcess', [function () {
        return {
            restrict: 'E',
            template: '<input type="button" ng-disabled="isCommiting"  value="{{btnValue}}" ng-click="operateProcess()">',
            replace: true,
            scope: {
                btnValue: '@',
                step: '@',
                isPass: '@',
                isCommiting: '=',
                refresh: '&'
            },
            controller:['$scope', 'povertyCommonServer', 'tools', function ($scope, povertyCommonServer, tools) {
                
                $scope.isCommiting = false;
                
                $scope.operateProcess = function () {

                    $scope.isCommiting = true;

                    povertyCommonServer.operateProcess({
                        step: $scope.step,
                        isPass: parseInt($scope.isPass)
                    }).then(function (data) {
                        if (data.status) {
                            tools.alertSuccess('提交成功');
                            $scope.refresh();
                        }else{
                            tools.alertError(data.message, 5000);
                        }
                        $scope.isCommiting = false;
                    });
                };

            }]
        };
    }]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/3
 * Time: 11:07
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 跳转至学生申请资料详情页面
     */
    angular.module('app.core').directive('povertyLevelSelect', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/poverty/povertyLevelSelect.html',
            replace: true,
            scope: {
                processInstanceId: '@',
                edit: '=',
                defaultLevel: '=',
                isCommiting: '=',
                step: '@'
            },
            controller: [
                'tools',
                '$scope',
                'povertyCommonServer',
                function (tools, $scope, povertyCommonServer) {
                    $scope.vm = {
                        levels: ['特别困难', '困难', '一般困难', '不困难']
                    };
                    /**
                     * 修改等级
                     */
                    $scope.vm.changeLevel = function (level) {
                        if ($scope.defaultLevel) {
                            $scope.defaultLevel = level;
                            povertyCommonServer.updatePovertyLevel({
                                processInstanceId: $scope.processInstanceId,
                                taskId: $scope.taskId,
                                step: $scope.step,
                                level: $scope.defaultLevel
                            }).then(function (data) {
                                if (data.status) {
                                    tools.alertSuccess('修改成功');
                                }
                            });
                        }
                    };
                }
            ]
        };
    }]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/24
 * Time: 17:06
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 打开和收起搜索框
     */
    angular.module('app.core').directive('studentPovertyInfo', [function () {
        return {
            restrict: 'E',
            templateUrl: 'dist/tpls/core/directives/poverty/studentPovertyInfo.html',
            replace: true,
            scope: {
                flag: '@',
                studentId: '='
            },
            controller: [
                '$scope',
                '$rootScope',
                'povertyStudentServer',
                'povertyCommonServer',
                'tools',
                'FileUploader',
                'ROOT',
                'THEME',
                'loading',
                function ($scope, $rootScope, povertyStudentServer, povertyCommonServer, tools, FileUploader, ROOT, THEME, loading) {
                    $scope.vm = {
                        baseInfo: {},
                        baseSubmit: false,
                        userRole: $rootScope.userRole
                    };
                    /**
                     * 获取学生基本信息
                     */
                    povertyCommonServer.getStudentInfo($scope.studentId).then(function (data) {
                        if (data.status) {
                            if ($scope.flag === 'form') {
                                data.data.isDisability = data.data.isDisability == null ? 0 : data.data.isDisability;
                                data.data.isSole = data.data.isSole == null ? 0 : data.data.isSole;
                                data.data.isMartyr = data.data.isMartyr == null ? 0 : data.data.isMartyr;

                                data.data.isRuralInfirm = data.data.isRuralInfirm == null ? 0 : data.data.isRuralInfirm;
                                data.data.isMartyr = data.data.isOrphan == null ? 0 : data.data.isOrphan;


                                data.data.isLowField = data.data.isLowField == null ? 0 : data.data.isLowField;
                                data.data.isLoad = data.data.isLoad == null ? 0 : data.data.isLoad;
                                data.data.isFilingCard = data.data.isFilingCard == null ? 0 : data.data.isFilingCard;
                                data.data.isAccident = data.data.isAccident == null ? 0 : data.data.isAccident;
                                data.data.isJoinLoad = data.data.isJoinLoad == null ? 0 : data.data.isJoinLoad;
                                data.data.type = data.data.type == null ? '城镇' : data.data.type;
                                data.data.isFresh = data.data.isFresh == null ? '应届' : data.data.isFresh;
                            } else {
                                data.data.gender = data.data.gender === 1 ? '男' : '女';
                                data.data.isDisability = data.data.isDisability === 1 ? '是' : '否';
                                data.data.isSole = data.data.isSole === 1 ? '是' : '否';
                                data.data.isMartyr = data.data.isMartyr === 1 ? '是' : '否';
                                data.data.isRuralInfirm = data.data.isRuralInfirm === 1 ? '是' : '否';
                                data.data.isOrphan = data.data.isOrphan === 1 ? '是' : '否';
                                data.data.isLowField = data.data.isLowField === 1 ? '是' : '否';
                                data.data.isFilingCard = data.data.isFilingCard === 1 ? '是' : '否';
                                data.data.isLoad = data.data.isLoad === 1 ? '是' : '否';
                                data.data.isAccident = data.data.isAccident === 1 ? '是' : '否';
                                data.data.isJoinLoad = data.data.isJoinLoad === 1 ? '是' : '否';

                            }
                            $scope.vm.baseInfo = data.data;
                        }
                    });

                    /**
                     * 获奖相关操作
                     */
                    // $scope.initAward = function () {
                    //     povertyCommonServer.getAward($scope.studentId).then(function (data) {
                    //         if (data.status) {
                    //             $scope.vm.awardList = data.data;
                    //         }
                    //     });
                    // };
                    // $scope.initAward();



                    /**
                     * 上传奖学金附件
                     */
                    (function () {
                        var uploader = $scope.uploader = new FileUploader({
                            url: ROOT + '/povertyStudent/uploadAwardAttachment',
                            autoUpload: true,
                            removeAfterUpload: true,
                            queueLimit: 1
                        });
                        uploader.onAfterAddingFile = function (fileItem) {
                            var lastName = fileItem.file.name.slice(-3).toLowerCase();
                            var _arr = ['doc', 'ocx', 'pdf', 'lsx', 'xls', 'jpg', 'bmp', 'png'];
                            if (_arr.indexOf(lastName) === -1) {
                                tools.alertError('请上传【doc, docx, pdf,xlsx,xls,jpg,bmp,png】等规定格式文件');
                                uploader.clearQueue();
                            }
                            if (fileItem.file.size > 20971520) {
                                tools.alertError('上传文件大小不得大于20M');
                                uploader.clearQueue();
                            }
                        };
                        uploader.onCompleteItem = function (fileItem, response) {
                            //var _repsonse=angular.toJson(response);
                            if (response.status) {
                                tools.alertSuccess('上传成功');
                                $scope.vm.addAward.attachURL = response.data;
                            } else {
                                tools.alertError('上传失败');
                            }
                        };
                    })();
                    $scope.removeAward = function (id) {
                        povertyStudentServer.removeAward(id).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('删除成功');
                                $scope.initAward();
                            }
                        });
                    };

                    /**
                     * 处分相关操作
                     */
                    // $scope.initPunishment = function () {
                    //     povertyCommonServer.getPunishment($scope.studentId).then(function (data) {
                    //         if (data.status) {
                    //             $scope.vm.punishmentList = data.data;
                    //         }
                    //     });
                    // };
                    // $scope.initPunishment();

                    $scope.removePunishment = function (id) {
                        povertyStudentServer.removePunishment(id).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('删除成功');
                                $scope.initPunishment();
                            }
                        });
                    };

                    /**
                     * 家庭成员相关操作
                     */
                    $scope.initFamily = function () {
                        povertyCommonServer.getFamily($scope.studentId).then(function (data) {
                            if (data.status) {
                                $scope.vm.familyList = data.data;
                            }
                        });
                    };
                    $scope.initFamily();
                    $scope.addFamilyShow = function () {
                        $scope.vm.addFamily = {
                            studentId: $scope.studentId
                        };
                        $scope.vm.familySubmit = false;
                        $('#addFamily').modal('show');
                        $scope.addFamily = function () {
                            $scope.vm.familySubmit = true;
                            if ($scope.vm.familyForm.$valid) {
                                povertyStudentServer.addFamily($scope.vm.addFamily).then(function (data) {
                                    if (data.status) {
                                        tools.alertSuccess('添加成功');
                                        $scope.initFamily();
                                        $('#addFamily').modal('hide');
                                    }
                                });
                            }
                        };
                    };
                    $scope.removeFamily = function (id) {
                        povertyStudentServer.removeFamily(id).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('删除成功');
                                $scope.initFamily();
                            }
                        });
                    };

                    /**
                     * 资助情况相关操作
                     */
                    $scope.initSubsidy = function () {
                        povertyCommonServer.getSubsidy($scope.studentId).then(function (data) {
                            if (data.status) {
                                $scope.vm.subsidyList = data.data;
                            }
                        });
                    };
                    $scope.initSubsidy();
                    $scope.addSubsidyShow = function () {
                        $scope.vm.addSubsidy = {
                            studentId: $scope.studentId
                        };
                        $scope.vm.subsidySubmit = false;
                        $('#addSubsidy').modal('show');
                        $scope.addSubsidy = function () {
                            $scope.vm.subsidySubmit = true;
                            if ($scope.vm.subsidyForm.$valid) {
                                povertyStudentServer.addSubsidy($scope.vm.addSubsidy).then(function (data) {
                                    if (data.status) {
                                        tools.alertSuccess('添加成功');
                                        $scope.initSubsidy();
                                        $('#addSubsidy').modal('hide');
                                    }
                                });
                            }
                        };
                    };
                    $scope.removeSubsidy = function (id) {
                        povertyStudentServer.removeSubsidy(id).then(function (data) {
                            if (data.status) {
                                tools.alertSuccess('删除成功');
                                $scope.initSubsidy();
                            }
                        });
                    };

                    /**
                     * 保存信息
                     */
                    $scope.saveInfo = function () {

                        $scope.vm.baseInfo.isComplete = 1;
                        if ($scope.vm.baseForm.$valid) {
                            $scope.vm.baseSubmit = true;
                            povertyStudentServer.updateStudentInfo($scope.vm.baseInfo).then(function (data) {
                                if (data.status) {
                                    tools.alertSuccess('修改成功');
                                    $rootScope.isComplete = 1;
                                }
                                $scope.vm.baseSubmit = false;
                            });
                        } else {
                            tools.alertError('请填写完整信息');
                        }
                    };
                    povertyCommonServer.getMaxStatus().then(function (data) {
                        if (data.status) {
                            $rootScope.bigStatus = data.data.status;
                            $rootScope.processName = data.data.processName;
                            $rootScope.lastTime = data.data.lastTime;
                        }
                    });
                }]
        };
    }]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/11
 * Time: 11:01
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').factory('grantsBusinessServer', grantsBusinessServer);

    grantsBusinessServer.$inject = ['grantsCommonServer', '$rootScope', '$q'];

    function grantsBusinessServer(grantsCommonServer, $rootScope, $q) {
        var myServices = {};

        myServices.getGrantsMaxStatus = function (batchId) {

            var deferred = $q.defer();

            grantsCommonServer.currentProcess(batchId).then(function (data) {
                if (data.status) {

                    /**
                     * povertyBigStatus:总流程状态
                     */
                    $rootScope.grantsBigStatus = data.data.currentStatus;
                    //当前进行的流程进度名称
                    $rootScope.grantsProcessName = data.data.statusInfo;
                    //当前进行的流程截止时间
                    $rootScope.grantsLastTime = data.data.lastTime;
                    //当前进行的学生最大状态码
                    $rootScope.grantsMaxStatus = data.data.maxStatus;

                    deferred.resolve(data);
                }
            });

            return deferred.promise;

        };

        return myServices;
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/11
 * Time: 11:01
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.core').factory('povertyBusinessServer', povertyBusinessServer);

    povertyBusinessServer.$inject = ['povertyCommonServer', '$rootScope', '$q'];

    function povertyBusinessServer (povertyCommonServer, $rootScope, $q){
        var myServices = {};

        myServices.getPovertyMaxStatus = function () {

            var deferred = $q.defer();

            povertyCommonServer.getMaxStatus().then(function (data) {
                if (data.status) {
                    /**
                     * povertyBigStatus:总流程状态
                     */
                    $rootScope.povertyBigStatus = data.data.status;
                    //当前进行的流程进度名称
                    $rootScope.processName = data.data.processName;
                    //当前进行的流程截止时间
                    $rootScope.lastTime = data.data.lastTime;
                    //当前进行的学生最大状态码
                    $rootScope.maxStatus = data.data.maxStatus;

                    deferred.resolve(data);
                }
            });

            return deferred.promise;

        };
        myServices.getIsPovertyTime = function () {

            var deferred = $q.defer();

            povertyCommonServer.getIsPovertyTime().then(function (data) {
                if (data.status) {
                    deferred.resolve(data);
                }
            });
            return deferred.promise;

        };
        return myServices;
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/11/22
 * Time: 15:30
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * echarts主题配置
     */
    var _theme = {
        'color': [
            '#00aaff',
            '#ff587b',
            '#29d582',
            '#ffc62f',
            '#24ccf6',
            '#f7233c',
            '#7d68ff',
            '#ff7700'
        ],
        'backgroundColor': 'rgba(0,0,0,0)',
        'textStyle': {},
        'title': {
            'textStyle': {
                'color': '#333333'
            },
            'subtextStyle': {
                'color': '#aaaaaa'
            }
        },
        'line': {
            'itemStyle': {
                'normal': {
                    'borderWidth': '2'
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2
                }
            },
            'symbolSize': '5',
            'symbol': 'emptyCircle',
            'smooth': false
        },
        'radar': {
            'itemStyle': {
                'normal': {
                    'borderWidth': '2'
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 2
                }
            },
            'symbolSize': '5',
            'symbol': 'emptyCircle',
            'smooth': false
        },
        'bar': {
            'itemStyle': {
                'normal': {
                    'barBorderWidth': 0,
                    'barBorderColor': '#cccccc'
                },
                'emphasis': {
                    'barBorderWidth': 0,
                    'barBorderColor': '#cccccc'
                }
            }
        },
        'pie': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                }
            }
        },
        'scatter': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                }
            }
        },
        'boxplot': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                }
            }
        },
        'parallel': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                }
            }
        },
        'sankey': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                }
            }
        },
        'funnel': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                }
            }
        },
        'gauge': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                }
            }
        },
        'candlestick': {
            'itemStyle': {
                'normal': {
                    'color': '#c12e34',
                    'color0': '#2b821d',
                    'borderColor': '#c12e34',
                    'borderColor0': '#2b821d',
                    'borderWidth': 1
                }
            }
        },
        'graph': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#cccccc'
                }
            },
            'lineStyle': {
                'normal': {
                    'width': '1',
                    'color': '#aaaaaa'
                }
            },
            'symbolSize': '25'
        },
        'map': {
            'itemStyle': {
                'normal': {
                    'areaColor': '#dddddd',
                    'borderColor': '#eeeeee',
                    'borderWidth': 0.5
                },
                'emphasis': {
                    'areaColor': 'rgba(230,182,0,1)',
                    'borderColor': '#dddddd',
                    'borderWidth': 1
                }
            },
            'label': {
                'normal': {
                    'textStyle': {
                        'color': '#c12e34'
                    }
                },
                'emphasis': {
                    'textStyle': {
                        'color': 'rgb(193,46,52)'
                    }
                }
            }
        },
        'geo': {
            'itemStyle': {
                'normal': {
                    'areaColor': '#dddddd',
                    'borderColor': '#eeeeee',
                    'borderWidth': 0.5
                },
                'emphasis': {
                    'areaColor': 'rgba(230,182,0,1)',
                    'borderColor': '#dddddd',
                    'borderWidth': 1
                }
            },
            'label': {
                'normal': {
                    'textStyle': {
                        'color': '#c12e34'
                    }
                },
                'emphasis': {
                    'textStyle': {
                        'color': 'rgb(193,46,52)'
                    }
                }
            }
        },
        'categoryAxis': {
            'axisLine': {
                'show': true,
                'lineStyle': {
                    'color': '#f8f8f8'
                }
            },
            'axisTick': {
                'show': false,
                'lineStyle': {
                    'color': '#333'
                }
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': '#486074'
                }
            },
            'splitLine': {
                'show': true,
                'lineStyle': {
                    'color': [
                        '#f8f8f8'
                    ]
                }
            },
            'splitArea': {
                'show': false,
                'areaStyle': {
                    'color': [
                        'rgba(250,250,250,0.3)',
                        'rgba(200,200,200,0.3)'
                    ]
                }
            }
        },
        'valueAxis': {
            'axisLine': {
                'show': true,
                'lineStyle': {
                    'color': '#f8f8f8'
                }
            },
            'axisTick': {
                'show': false,
                'lineStyle': {
                    'color': '#333'
                }
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': '#486074'
                }
            },
            'splitLine': {
                'show': true,
                'lineStyle': {
                    'color': [
                        '#f8f8f8'
                    ]
                }
            },
            'splitArea': {
                'show': false,
                'areaStyle': {
                    'color': [
                        'rgba(250,250,250,0.3)',
                        'rgba(200,200,200,0.3)'
                    ]
                }
            }
        },
        'logAxis': {
            'axisLine': {
                'show': false,
                'lineStyle': {
                    'color': '#f8f8f8'
                }
            },
            'axisTick': {
                'show': false,
                'lineStyle': {
                    'color': '#333'
                }
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': '#486074'
                }
            },
            'splitLine': {
                'show': true,
                'lineStyle': {
                    'color': [
                        '#f8f8f8'
                    ]
                }
            },
            'splitArea': {
                'show': false,
                'areaStyle': {
                    'color': [
                        'rgba(250,250,250,0.3)',
                        'rgba(200,200,200,0.3)'
                    ]
                }
            }
        },
        'timeAxis': {
            'axisLine': {
                'show': false,
                'lineStyle': {
                    'color': '#f8f8f8'
                }
            },
            'axisTick': {
                'show': false,
                'lineStyle': {
                    'color': '#333'
                }
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': '#486074'
                }
            },
            'splitLine': {
                'show': true,
                'lineStyle': {
                    'color': [
                        '#f8f8f8'
                    ]
                }
            },
            'splitArea': {
                'show': false,
                'areaStyle': {
                    'color': [
                        'rgba(250,250,250,0.3)',
                        'rgba(200,200,200,0.3)'
                    ]
                }
            }
        },
        'toolbox': {
            'iconStyle': {
                'normal': {
                    'borderColor': '#06467c'
                },
                'emphasis': {
                    'borderColor': '#4187c2'
                }
            }
        },
        'legend': {
            'textStyle': {
                'color': '#486074'
            }
        },
        'tooltip': {
            'axisPointer': {
                'lineStyle': {
                    'color': '#f8f8f8',
                    'width': 1
                },
                'crossStyle': {
                    'color': '#f8f8f8',
                    'width': 1
                }
            }
        },
        'timeline': {
            'lineStyle': {
                'color': '#005eaa',
                'width': 1
            },
            'itemStyle': {
                'normal': {
                    'color': '#005eaa',
                    'borderWidth': 1
                },
                'emphasis': {
                    'color': '#005eaa'
                }
            },
            'controlStyle': {
                'normal': {
                    'color': '#005eaa',
                    'borderColor': '#005eaa',
                    'borderWidth': 0.5
                },
                'emphasis': {
                    'color': '#005eaa',
                    'borderColor': '#005eaa',
                    'borderWidth': 0.5
                }
            },
            'checkpointStyle': {
                'color': '#005eaa',
                'borderColor': 'rgba(49,107,194,0.5)'
            },
            'label': {
                'normal': {
                    'textStyle': {
                        'color': '#005eaa'
                    }
                },
                'emphasis': {
                    'textStyle': {
                        'color': '#005eaa'
                    }
                }
            }
        },
        'visualMap': {
            'color': [
                '#12a1e8',
                '#96d2f0'
            ]
        },
        'dataZoom': {
            'backgroundColor': 'rgba(47,69,84,0)',
            'dataBackgroundColor': 'rgba(47,69,84,0.3)',
            'fillerColor': 'rgba(167,183,204,0.4)',
            'handleColor': '#a7b7cc',
            'handleSize': '100%',
            'textStyle': {
                'color': '#333333'
            }
        },
        'markPoint': {
            'label': {
                'normal': {
                    'textStyle': {
                        'color': '#486074'
                    }
                },
                'emphasis': {
                    'textStyle': {
                        'color': '#486074'
                    }
                }
            }
        }
    };
    angular.module('app.core').constant('THEME', _theme);
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/2/9
 * Time: 15:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 常量
     */
    angular.module('app.core').constant('loading', {
        text: '',
        color: '#ff587b'
    });
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/13
 * Time: 11:20
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 常量
     */
    angular.module('app.core').constant('ROOT', '');
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/11/24
 * Time: 11:12
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 大数据分析
     */
    angular.module('app.core').factory('analysisEcharts', ['chinaMap', 'bar','pie',
        function (chinaMap, bar, pie) {
            var _option = {
                origin: function () {
                    //获取基础配置项
                    var _baseOption = chinaMap.getOption();
                    //需要修改配置在此处进行
                    _baseOption.series[0].left = '5%';
                    _baseOption.visualMap.show = false;
                    return _baseOption;
                },
                consumption: function () {
                    //获取基础配置项
                    var _baseOption = bar.getOption('元');
                    //需要修改配置在此处进行
                    return _baseOption;
                },
                distribution: function () {
                    //获取基础配置项
                    var _baseOption = pie.getOption('%');
                    //需要修改配置在此处进行
                    return _baseOption;
                },
                analysis: function () {
                    //获取基础配置项
                    var _baseOption = pie.getOption('%');
                    //需要修改配置在此处进行
                    return _baseOption;
                }
            };
            return {
                origin: _option.origin(),
                consumption: _option.consumption(),
                distribution: _option.distribution(),
                analysis: _option.analysis()
            };
        }
    ]);
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/11/24
 * Time: 11:12
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * 大数据分析
     */
    angular.module('app.core').factory('studentInfoEcharts', ['barLine',
        function (barLine) {
            var _option = {
                consumption: function () {
                    //获取基础配置项
                    var _baseOption = barLine.getOption('元', '次');
                    //需要修改配置在此处进行
                    return _baseOption;
                }
            };
            return {
                consumption: _option.consumption()
            };
        }
    ]);
})();

/**
 * Created by yanyuan on 2017/6/5.
 */
(function () {
    /**
     * 通用模块服务
     */
    'use strict';
    angular.module('app.core').factory('commonsServer', commonsServer);

    commonsServer.$inject = ['httpServer'];

    function commonsServer(httpServer) {
        var myServices = {};
        //查询学年列表
        myServices.getCommonsSchoolYearAll = function () {
            return httpServer.get('/commons/schoolYear/all');
        };
        //查询所有年级列表
        myServices.getCommonsGradeAll = function () {
            return httpServer.get('/commons/grade/all');
        };
        //查询用户学院
        myServices.getCommonsCollege = function () {
            return httpServer.get('/commons/college');
        };
        //查询当前学年
        myServices.getCommonsSchoolYearCurrent = function () {
            return httpServer.get('/commons/schoolYear/current');
        };
        //查询学院下年级列表
        myServices.getCommonsGrade = function (data) {
            return httpServer.get('/commons/grade'+ '/' + data);
        };
        //查询学院下专业列表
        myServices.getCommonsMajor = function (data) {
            return httpServer.get('/commons/major'+ '/' + data);
        };
        //查询专业下班级列表
        myServices.getCommonsClass = function (data) {
            return httpServer.get('/commons/major'+ '/' + data[0] + '/' + data[1]);
        };
        //查询学院下专业列表
        myServices.getCommonsServerTime = function (data) {
            return httpServer.get('/commons/serverTime');
        };
        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/11
 * Time: 20:40
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 入伍补助
     */
    'use strict';
    angular.module('app.core').factory('goToArmyServer', goToArmyServer);

    goToArmyServer.$inject = ['httpServer'];

    function goToArmyServer(httpServer) {
        var myServices = {};

        //查询入伍补助的学生
        myServices.getAllArmySub = function () {
            return httpServer.get('/joinArmySubsidize/all');
        };
        //新增
        myServices.addArmySub = function (data) {
            return httpServer.postHttp('/joinArmySubsidize/single', data);
        };
        myServices.postArmySubBatch = function (data) {
            return httpServer.postHttp('/joinArmySubsidize/batch', data);
        };
        myServices.deleteArmySub = function (data) {
            return httpServer.postHttp('/joinArmySubsidize/joinArmySubsidize', data);
        };
        myServices.deleteArmySubSingle = function (data) {
            return httpServer.delete('/joinArmySubsidize/joinArmySubsidize', data);
        };
        myServices.putArmySub = function (data) {
            return httpServer.put('/joinArmySubsidize/joinArmySubsidize', data);
        };
        myServices.getdownload = function (data) {
            return httpServer.get('/joinArmySubsidize/student/list', data);
        };
        return myServices;
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/11
 * Time: 20:40
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金学院服务
     */
    'use strict';
    angular.module('app.core').factory('grantsActivitiServer', grantsActivitiServer);

    grantsActivitiServer.$inject = ['httpServer'];

    function grantsActivitiServer(httpServer) {
        var myServices = {};

        //学生提交材料并开始流程
        myServices.grantsBatchDetail = function (data) {
            return httpServer.postHttp('/grantsActiviti/startProcess', data);
        };
        //当前登录用户查看自己的任务
        myServices.findTasks = function (data) {
            return httpServer.get('/grantsActiviti/findTasks', data);
        };
        //修改助学金等级
        myServices.updateGrantsLevel = function (data) {
            return httpServer.postHttp('/grantsActiviti/updateGrantsLevel', data);
        };
        //提交任务，转交下一步
        myServices.commitTasks = function (data) {
            return httpServer.get('/grantsActiviti/commitTasks', data);
        };
        //驳回
        myServices.rejectTasks = function (data) {
            return httpServer.postHttp('/grantsActiviti/rejectTasks', data);
        };
        //获取公示列表
        myServices.getGrantsNotice = function (data) {
            return httpServer.postHttp('/grantsActiviti/getGrantsNotice', data);
        };

        return myServices;
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User:    chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('grantsAdvisorServer', grantsAdvisorServer);

    grantsAdvisorServer.$inject = ['httpServer'];

    function grantsAdvisorServer(httpServer) {
        var myServices = {};
        //本学年评定经济困难但未申请助学金
        myServices.notApply = function (data) {
            return httpServer.get('/grantsAdvisor/povertyNotApply', data);
        };
        //s


        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/18
 * Time: 20:38
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('grantsAnalyseServer', grantsAnalyseServer);

    grantsAnalyseServer.$inject = ['httpServer'];

    function grantsAnalyseServer(httpServer) {
        var myServices = {};
        //受助群体概况,贫困学生特征分析
        myServices.grantsAndPoverty = function (data) {
            return httpServer.get('/grantsAnalyse/grantsAndPoverty', data);
        };
        //生源地分布，地图数据以及中东西部分布情况
        myServices.originOfStudentDistribute = function (data) {
            return httpServer.get('/grantsAnalyse/originOfStudentDistribute', data);
        };
        return myServices;
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金学院服务
     */
    'use strict';
    angular.module('app.core').factory('grantsCollegeServer', grantsCollegeServer);

    grantsCollegeServer.$inject = ['httpServer'];

    function grantsCollegeServer(httpServer) {
        var myServices = {};

        //助学金批次详情
        myServices.grantsBatchDetail = function (data) {
            return httpServer.get('/grantsCollege/grantsBatchDetail', data);
        };
        //助学金批次详情
        myServices.grantsBatchSave = function (data) {
            return httpServer.postHttp('/grantsCollege/grantsBatchSave', data);
        };
        /**
         *获取助学金学年
         * */
        myServices.grantsSchoolYear = function (data) {
            return httpServer.get('/grantsCommon/getSchoolYear', data);
        };
        /**
         *获取学院列表
         * */
        myServices.grantsSchoolList = function (data) {
            return httpServer.get('/grantsSchool/getCollegeConfig', data);
        };
        /**
         * 保存更新学院助学金配置
         * */
        myServices.grantsSchoolListPost = function (data) {
            return httpServer.postHttp('/grantsSchool/saveOrUpdateCollegeConfig', data);
        };
        /**
         * 处理学院的申请
         */
        myServices.dealSchoolNewApply = function (data) {
            return httpServer.get('/grantsSchool/dealNewApply', data);
        };
        /**
         * GET  助学金配置（学校总人数 + 已认定经济困难人数）
         */
        myServices.studentNumInfo = function (data) {
            return httpServer.get('/grantsSchool/studentNumInfo', data);
        };

        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin  chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金公共服务
     */
    'use strict';
    angular.module('app.core').factory('grantsCommonServer', grantsCommonServer);

    grantsCommonServer.$inject = ['httpServer'];

    function grantsCommonServer(httpServer) {
        var myServices = {};

        //获取助学金批次配置
        myServices.batchList = function () {
            return httpServer.get('/grantsCommon/batchList');
        };
        //获取能操作的批次
        myServices.batchesInProcess = function () {
            return httpServer.get('/grantsCommon/batchesInProcess');
        };
        //获取助学金某批次当前进度
        myServices.currentProcess = function (data) {
            return httpServer.get('/grantsCommon/currentProcess', data);
        };
        //下载审核名单
        myServices.downloadList = function (data) {
            return httpServer.get('/grantsCommon/downloadList', data);
        };
        //查看指定助学金详情
        myServices.grantsDetail = function (data) {
            return httpServer.get('/grantsCommon/grantsDetail', data);
        };
        //查看助学金列表
        myServices.grantsList = function (data) {
            return httpServer.get('/grantsSchool/listGrants', data);
        };
        //查看学生申请材料
        myServices.studentApplyData = function (data) {
            return httpServer.get('/grantsCommon/studentApplyData', data);
        };
        //上传助学金表格模板
        myServices.uploadTemplate = function (data) {
            return httpServer.postHttp('/grantsCommon/uploadTemplate', data);
        };
        //获取助学金材料申请列表
        myServices.listApplyMaterial = function (data) {
            return httpServer.get('/grantsCommon/listApplyMaterial', data);
        };
        //删除助学金材料
        myServices.deleteApplyMaterial = function (data) {
            return httpServer.delete('/grantsCommon/deleteApplyMaterial', data);
        };
        //公示查看异议列表
        myServices.viewOpenDissent = function (data) {
            return httpServer.postHttp('/grantsCommon/viewOpenDissent', data);
        };
        //提交异议
        myServices.commitDissent = function (data) {
            return httpServer.postHttp('/grantsCommon/commitDissent', data);
        };
        //处理异议
        myServices.dealDissent = function (data) {
            return httpServer.postHttp('/grantsCommon/dealDissent', data);
        };
        //获取学期
        myServices.listSchoolYear = function () {
            return httpServer.get('/grantsCommon/listSchoolYear');
        };
        /**
         * 学生困难认定等级  /{sn}
         * */
        myServices.studentPoorLevel = function (data) {
            return httpServer.get(' /grantsCommon/getPovertyLevel',data);
        };
        /**
         * 获取助学贷款列表
         * */
        myServices.loanList = function () {
            return httpServer.get('/loan/all/detail');
        };
        /**
         * 上传助学金资料
         * */
        myServices.uploadApplyFlie = function () {
            return httpServer.post('/grantsCommon/uploadFile');
        };
        /**
         * 获取上传成功的列表
         * */
        myServices.grantsComFile = function () {
            return httpServer.get('/grantsStudent/listApplyMaterial');
        };
        /**
         * 删除上传成功的列表
         * */
        myServices.delGrantsComFile = function (data) {
            return httpServer.get('/grantsStudent/deleteApplyMaterial',data);
        };
        /**
         * 获取助学金流程列表(自己的任务）
         * */
        myServices.getGrantsStList = function (data) {
            return httpServer.get('/grantsActiviti/listTasks',data);
        };
        /**
         *驳回材料
         * */
        myServices.rejectTasks = function (data) {
            return httpServer.postHttp('/grantsActiviti/rejectTasks', data);
        };
        /**
         *更新等级
         * */
        myServices.updateGrantsLevel = function (data) {
            return httpServer.postHttp('/grantsActiviti/updateGrantsLevel', data);
        };
        /**
         *查看公示列表
         * */
        myServices.publicList = function (data) {
            return httpServer.get('/grantsActiviti/listPublicity', data);
        };
        /**
         *提交任务
         * */
        myServices.activityTasks = function (data) {
            return httpServer.get('/grantsActiviti/commitTasks', data);
        };
        /**
         * 配置学院公示时间
         * */
        myServices.savePublicTime = function (data) {
            return httpServer.postHttp('/grantsCommon/savePublicityTime', data);
        };
        /**
         * 判断是否已经配置公示时间
         * */
        myServices.isPublicTime = function (data) {
            return httpServer.get('/grantsCommon/isConfigPublicityTime', data);
        };
        /**
         * 获取公示时间
         * */
        myServices.fillPublicTime = function (data) {
            return httpServer.get('/grantsCommon/getPublicityTime', data);
        };
    /*    /!**
         * 获取当前阶段和下个阶段
         * *!/
        myServices.getStage = function (data) {
            return httpServer.get('/grantsActiviti/findStage', data);
        };*/
        /**
         * 查看公示异议列表
         * */
        myServices.getObjList = function (data) {
            return httpServer.get('/grantsCommon/viewOpenDissent', data);
        };
        /**
         * 处理异议    /grantsCommon/isPublicity
         * */
        myServices.postHandle = function (data) {
            return httpServer.postHttp('/grantsCommon/dealDissent', data);
        };
        /**
         * 是否是公示阶段
         * */
        myServices.isPublic = function (data) {
            return httpServer.get('/grantsCommon/isPublicity', data);
        };
        /**
         * 审核材料
         * */
        myServices.checkMaterial = function (data) {
            return httpServer.get('/grantsActiviti/checkMaterial', data);
        };
        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin   chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金学校服务
     */
    'use strict';
    angular.module('app.core').factory('grantsSchoolServer', grantsSchoolServer);

    grantsSchoolServer.$inject = ['httpServer'];

    function grantsSchoolServer(httpServer) {
        var myServices = {};
        //获取学校用户待处理列表
        myServices.checkList = function () {
            return httpServer.get('/grantsSchool/checkList');
        };
        //添加批次是获取助学金配置
        myServices.grantsBatchConfig = function () {
            return httpServer.get('/grantsSchool/grantsBatchConfig');
        };
        //获取助学金批次配置详情
        myServices.grantsBatchDetail = function (data) {
            return httpServer.get('/grantsSchool/grantsBatchDetail', data);
        };
        //删除助学金批次配置
        myServices.grantsBatchDelete = function (data) {
            return httpServer.delete('/grantsSchool/grantsBatchDelete', data);
        };
        //修改助学金批次配置
        myServices.grantsBatchUpdate = function (data) {
            return httpServer.postHttp('/grantsSchool/grantsBatchUpdate', data);
        };

        //学校用户删除助学金
        myServices.grantsDelete = function (data) {
            return httpServer.delete('/grantsSchool/deleteGrants', data);
        };
        //学校用户添加助学金
        myServices.grantsSave = function (data) {
            return httpServer.postHttp('/grantsSchool/saveGrants', data);
        };
        //学校用户修改助学金
        myServices.grantsUpdate = function (data) {
            return httpServer.put('/grantsSchool/updateGrants', data);
        };
        //助学金批次配置保存操作接口
        myServices.grantsBatchSave = function (data) {
            return httpServer.postHttp('/grantsSchool/grantsBatchSave', data);
        };
        //确认补录
        myServices.makeup = function (data) {
            return httpServer.postHttp('/grantsSchool/makeup', data);
        };
        /**
         * 获取学院助学金列表
         */
        myServices.grantsList = function (data) {
            return httpServer.get('/grantsCollege/listGrants', data);
        };
        /***
         * 学院获取助学金配置的年级列表
         * */
        myServices.grantsClassList = function (data) {
            return httpServer.get('/grantsCollege/getGradeConfig', data);
        };
        /***
         * 保存年级配置
         * */
        myServices.grantsClassSave = function (data) {
            return httpServer.postHttp('/grantsCollege/saveGradeConfig', data);
        };
        /***
         * 申请名额
         * */
        myServices.grantsClassApply = function (data) {
            return httpServer.get('/grantsCollege/applyQuota', data);
        };
        /***
         * 退回名额
         * */
        myServices.grantsClassReturn = function (data) {
            return httpServer.get('/grantsCollege/returnQuota', data);
        };




        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金学生服务
     */
    'use strict';
    angular.module('app.core').factory('grantsStudentServer', grantsStudentServer);

    grantsStudentServer.$inject = ['httpServer'];

    function grantsStudentServer(httpServer) {
        var myServices = {};
        //获取某批次的助学金信息和当前登录学生申请情况
        myServices.grantsBatchInfo = function (data) {
            return httpServer.get('/grantsStudent/grantsBatchInfo', data);
        };
        //获取可申请助学金列表
        myServices.grantsList = function (data) {
            return httpServer.get('/grantsStudent/listAuthGrants', data);
        };
        //开启申请助学金
        myServices.grantsApply = function (data) {
            return httpServer.postHttp('/grantsActiviti/startProcess', data);
        };
        //重新提交材料
        myServices.reUploadFile = function (data) {
            return httpServer.postHttp('/grantsStudent/recommitMaterial', data);
        };
        //提交异议
        myServices.comObj = function (data) {
            return httpServer.postHttp('/grantsCommon/commitDissent', data);
        };
        //查看异议结果
        myServices.seeAs = function (data) {
            return httpServer.get('/grantsStudent/listMyDissent', data);
        };


        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:16
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').factory('httpServer', httpServer);

    httpServer.$inject = ['$http', '$q', 'ROOT'];

    function httpServer($http, $q, ROOT) {
        return {
            postHttp: function (url, data) {
                var deferred = $q.defer();
                if (data) {
                    $http({
                        method: 'post',
                        url: ROOT + url,
                        data: data,
                        timeout: deferred.promise,
                        cancel: deferred
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                } else {
                    $http({
                        method: 'post',
                        url: ROOT + url,
                        timeout: deferred.promise,
                        cancel: deferred,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                }
                return deferred.promise;
            },
            put: function (url, data) {
                var deferred = $q.defer();
                $http({
                    method: 'put',
                    url: ROOT + url,
                    data: data,
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                },function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            post: function (url, data) {
                var deferred = $q.defer();
                $http.post(ROOT + url + '/' + data, {
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                },function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            get: function (url, data) {

                var _pramas = '';

                if(data || data === 0){
                    if (angular.isArray(data)){
                        angular.forEach(data, function (value){
                            _pramas += '/' + value;
                        });
                    }else {
                        _pramas = '/' + data;
                    }
                }

                var deferred = $q.defer();
                $http.get(ROOT + url + ( _pramas !== '' ? _pramas : ''), {
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                }, function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            delete: function (url, data) {
                var deferred = $q.defer();
                $http.delete(ROOT + url + '/' + data, {
                    timeout: deferred.promise,
                    cancel: deferred
                }).then(function (resp) {
                    deferred.resolve(resp.data);
                },function (resp) {
                    deferred.reject(resp);
                });
                return deferred.promise;
            },
            deleteHttp:  function (url, data) {
                var deferred = $q.defer();
                if (data) {
                    $http({
                        method: 'delete',
                        url: ROOT + url,
                        data: data,
                        timeout: deferred.promise,
                        cancel: deferred
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                } else {
                    $http({
                        method: 'delete',
                        url: ROOT + url,
                        timeout: deferred.promise,
                        cancel: deferred,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(function (resp) {
                        deferred.resolve(resp.data);
                    },function (resp) {
                        deferred.reject(resp);
                    });
                }
                return deferred.promise;
            }
        };
    }
})();

/**
 * Created by yanyuan on 2017/6/7.
 */
(function () {
    /**
     * 特别困难补助服务
     */
    'use strict';
    angular.module('app.core').factory('particularlyDifficultServer', particularlyDifficultServer);

    particularlyDifficultServer.$inject = ['httpServer'];

    function particularlyDifficultServer(httpServer) {
        var myServices = {};

        //申请
        myServices.postAllowanceApply = function (data) {
            return httpServer.postHttp('/allowance/apply', data);
        };
        //申请
        myServices.getAllowanceAtApplyTime = function (data) {
            return httpServer.get('/allowance/atApplyTime', data);
        };
        //获取待审核列表
        myServices.getAllowanceCheck = function (data) {
            return httpServer.get('/allowance/check', data);
        };
        //获取已审核列表
        myServices.getAllowanceChecked = function (data) {
            return httpServer.get('/allowance/checked', data);
        };
        //获取配置
        myServices.getAllowanceGetConfig = function (data) {
            return httpServer.get('/allowance/getConfig', data);
        };
        //是否为五类生
        myServices.getAllowanceIsFiveClass = function (data) {
            return httpServer.get('/allowance/isFiveClass', data);
        };
        //学校用户保存配置
        myServices.postAllowanceSaveConfig = function (data) {
            return httpServer.postHttp('/allowance/saveConfig', data);
        };
        //提交到下一级审核
        myServices.postAllowanceSubmitNextCheck = function (data) {
            return httpServer.postHttp('/allowance/submitNextCheck', data);
        };
        //修改审核状态
        myServices.postAllowanceUpdateApply = function (data) {
            return httpServer.postHttp('/allowance/updateApply', data);
        };
        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('povertyAdvisorServer', povertyAdvisorServer);

    povertyAdvisorServer.$inject = ['httpServer'];

    function povertyAdvisorServer(httpServer) {
        var myServices = {};

        //辅导员用户审核学生资料
        myServices.checkMaterial = function (data) {
            return httpServer.postHttp('/povertyAdvisor/checkMaterial', data);
        };
        //辅导员提交到学院审核
        myServices.commit2College = function (data) {
            return httpServer.postHttp('/povertyAdvisor/commit2College', data);
        };

        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定学院服务
     */
    'use strict';
    angular.module('app.core').factory('povertyCollegeServer', povertyCollegeServer);

    povertyCollegeServer.$inject = ['httpServer'];

    function povertyCollegeServer(httpServer) {
        var myServices = {};

        //学院用户提交到学院公示
        myServices.commit2CollegeOpen = function (data) {
            return httpServer.postHttp('/povertyCollege/commit2CollegeOpen', data);
        };
        //学院用户查看学生异议
        myServices.viewOpenDissent = function () {
            return httpServer.get('/povertyCollege/viewOpenDissent');
        };
        //学院用户处理学生异议
        myServices.dealOpenDissent = function (data) {
            return httpServer.postHttp('/povertyCollege/dealOpenDissent', data);
        };
        //学院用户提交到学校审核
        myServices.commit2School = function (data) {
            return httpServer.postHttp('/povertyCollege/commit2School', data);
        };
        //学院用户获取辅导员列表
        myServices.listAdvisors = function () {
            return httpServer.get('/povertyCollege/listAdvisors');
        };
        //学院用户补填申请
        myServices.addApply = function (data) {
            return httpServer.postHttp('/povertyCollege/addApply', data);
        };
        //学院用户取消申请
        myServices.cancelApply = function (data) {
            return httpServer.postHttp('/povertyCollege/cancelApply', data);
        };
        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定公共服务
     */
    'use strict';
    angular.module('app.core').factory('povertyCommonServer', povertyCommonServer);

    povertyCommonServer.$inject = ['httpServer'];

    function povertyCommonServer(httpServer) {
        var myServices = {};
        //模拟登录
        myServices.login = function (data) {
            return httpServer.postHttp('/povertyCommon/login', data);
        };
        //获取学生信息
        myServices.getStudentInfo = function (data) {
            return httpServer.get('/povertyCommon/getStudentInfo', data);
        };
        //获取学生家庭情况
        myServices.getFamily = function (data) {
            return httpServer.get('/povertyCommon/listStudentFamily', data);
        };
        //获取学生获资助情况
        myServices.getSubsidy = function (data) {
            return httpServer.get('/povertyCommon/listStudentSubsidy', data);
        };
        //获取学生获奖情况
        myServices.getAward = function (data) {
            return httpServer.get('/povertyCommon/listStudentAward', data);
        };
        //获取学生处分情况
        myServices.getPunishment = function (data) {
            return httpServer.get('/povertyCommon/listStudentPunishment', data);
        };
        //获取学生困难认定附件
        myServices.getAttachments = function (data) {
            return httpServer.get('/povertyCommon/listAttachments', data);
        };


        //获取动态管理学生列表
        myServices.getDynamicStudent = function () {
            return httpServer.get('/povertyCommon/listDynamicStudent');
        };
        //修改动态管理等级
        myServices.dyModifyPovertyLevel = function (data) {
            return httpServer.postHttp('/povertyCommon/dyModifyPovertyLevel', data);
        };
        //下载动态管理列表
        myServices.downloadDyManage = function () {
            return httpServer.get('/povertyCommon/downloadDyManage');
        };
        //获取学生困难认定
        myServices.getStudentPovertyApply = function () {
            return httpServer.get('/povertyCommon/listStudentPovertyApply');
        };

        //获取是否在困难认定期间
        myServices.getIsPovertyTime = function () {
            return httpServer.get('/povertyCommon/isPovertyTime');
        };
        //获取大状态码
        myServices.getMaxStatus = function () {
            return httpServer.get('/povertyCommon/getMaxStatus');
        };
        //获取学生申请列表
        myServices.listCheckMaterialStudent = function () {
            return httpServer.get('/povertyCommon/listCheckMaterialStudent');
        };
        //获取困难认定列表
        myServices.listStudentPovertyApply = function () {
            return httpServer.get('/povertyCommon/listStudentPovertyApply');
        };
        //修改学生困难等级
        myServices.updatePovertyLevel = function (data) {
            return httpServer.postHttp('/povertyCommon/updatePovertyLevel', data);
        };
        //用户提交或者驳回流程操作调用的接口
        myServices.operateProcess = function (data) {
            return httpServer.postHttp('/povertyCommon/operateProcess', data);
        };
        //下载列表
        myServices.downloadPovertyApply = function () {
            return httpServer.get('/povertyCommon/downloadPovertyApply');
        };

        //获取公告列表
        myServices.getNoticeList = function (data) {
            return httpServer.get('/povertyCommon/getNoticeList', data);
        };
        //获取驳回原因
        myServices.getReject = function () {
            return httpServer.get('/povertyCommon/getReject');
        };
        //获取往年申请而本次未申请名单
        myServices.getLastYearApply = function () {
            return httpServer.get('/povertyCommon/lastYearApply');
        };
        //查看是否在公示时间内
        myServices.getAtOpenTime= function () {
            return httpServer.get('/povertyCommon/atOpenTime');
        };
        //获取公示的时间
        myServices.getOpenTime= function () {
            return httpServer.get('/povertyCommon/getOpenTime');
        };
        //银行卡校验
        myServices.checkBankcar= function () {
            return httpServer.get('/grantsCommon/checkoutBankCard');
        };
        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定学校服务
     */
    'use strict';
    angular.module('app.core').factory('povertySchoolServer', povertySchoolServer);

    povertySchoolServer.$inject = ['httpServer'];

    function povertySchoolServer(httpServer) {
        var myServices = {};

        //判断总流程是否开启
        myServices.validateProcess = function () {
            return httpServer.get('/povertySchool/validateProcess');
        };
        //开始流程
        myServices.startProcess = function () {
            return httpServer.get('/povertySchool/startProcess');
        };
        //获取时间设置
        myServices.getProcessTime = function () {
            return httpServer.get('/povertySchool/getProcessTime');
        };
        //设置时间
        myServices.saveProcess = function (data) {
            return httpServer.postHttp('/povertySchool/saveProcess', data);
        };
        //发布公告
        myServices.saveNotice = function (data) {
            return httpServer.postHttp('/povertySchool/saveNotice', data);
        };
        //获取学院列表
        myServices.listCollegeUsers = function () {
            return httpServer.get('/povertySchool/listCollegeUsers');
        };
        //学校发布公告
        myServices.saveNotice = function (data) {
            return httpServer.postHttp('/povertySchool/saveNotice', data);
        };
        //配置公示时间
        myServices.setOpenTime = function (data) {
            return httpServer.postHttp('/povertyCommon/setOpenTime', data);
        };
        //学校删除公告
        myServices.removeNotice = function (data) {
            return httpServer.delete('/povertySchool/removeNotice', data);
        };
        //获取公告没发布前的附件
        myServices.listNoticeFiles = function (data) {
            return httpServer.get('/povertySchool/listNoticeFiles', data);
        };
        //获取操作记录
        myServices.viewOperateLog = function (data) {
            return httpServer.get('/povertySchool/viewOperateLog', data);
        };
//查看公示异议（学校）
        myServices.viewOpenDissentSchool = function (data) {
            return httpServer.get('/povertyCollege/viewOpenDissentSchool', data);
        };
        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 贫困认定学生服务
     */
    'use strict';
    angular.module('app.core').factory('povertyStudentServer', povertyStudentServer);

    povertyStudentServer.$inject = ['httpServer'];

    function povertyStudentServer(httpServer) {
        var myServices = {};

        //添加家庭成员
        myServices.addFamily = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentFamily', data);
        };
        //删除家庭成员
        myServices.removeFamily = function (data) {
            return httpServer.delete('/povertyStudent/removeStudentFamily', data);
        };

        //添加资助
        myServices.addSubsidy = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentSubsidy', data);
        };
        //删除资助
        myServices.removeSubsidy = function (data) {
            return httpServer.delete('/povertyStudent/removeStudentSubsidy', data);
        };

        //添加获奖信息
        myServices.addAward = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentAward', data);
        };
        //添加获奖附件
        myServices.uploadAwardAttach = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentAward', data);
        };
        //删除获奖信息
        myServices.removeAward = function (data) {
            return httpServer.delete('/povertyStudent/removeStudentAward', data);
        };

        //添加处分信息
        myServices.addPunishment = function (data) {
            return httpServer.postHttp('/povertyStudent/saveStudentPunishment', data);
        };
        //删除处分信息
        myServices.removePunishment = function (data) {
            return httpServer.delete('/povertyStudent/removeStudentPunishment', data);
        };

        //添加学生困难认定附件
        myServices.uploadFile = function (data) {
            return httpServer.postHttp('/povertyStudent/uploadFile', data);
        };
        //删除学生困难认定附件
        myServices.removeAttachment = function (data) {
            return httpServer.delete('/povertyStudent/removeAttachment', data);
        };


        //更新学生基本信息
        myServices.updateStudentInfo = function (data) {
            return httpServer.postHttp('/povertyStudent/updateStudentInfo', data);
        };

        //学生是否完善基本信息
        myServices.isComplete = function () {
            return httpServer.get('/povertyStudent/isComplete');
        };
        //学生获取自己申请状态
        myServices.getStudentStatus = function () {
            return httpServer.get('/povertyStudent/getStudentStatus');
        };

        //学生开始流程认定
        myServices.startPovertyProcess = function (data) {
            return httpServer.get('/povertyStudent/startPovertyProcess', data);
        };
        //学生查看学院公示
        myServices.getCollegeNotice = function () {
            return httpServer.get('/povertyStudent/getCollegeNotice');
        };
        //学生提交异议
        myServices.commitDissent0 = function (data) {
            return httpServer.postHttp('/povertyStudent/commitDissent/0', data);
        };
        //学生提学校异议
        myServices.commitDissent1 = function (data) {
            return httpServer.postHttp('/povertyStudent/commitDissent/1', data);
        };
        //学生查看处理异议
        myServices.viewDealOpinion = function () {
            return httpServer.get('/povertyStudent/viewDealOpinion');
        };
        //班级用户审核学生资料
        myServices.checkMaterial = function (data) {
            return httpServer.postHttp('/povertyClass/checkMaterial', data);
        };
        //班级用户提交到辅导员审核
        myServices.commit2Advisor = function (data) {
            return httpServer.postHttp('/povertyClass/commit2Advisor', data);
        };
        //学生查看学校公示
        myServices.getSchoolNotice = function (data) {
            return httpServer.get('/povertyStudent/getSchoolNotice', data);
        };
        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User:    chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金辅导员服务
     */
    'use strict';
    angular.module('app.core').factory('scholarAdvisorServer', scholarAdvisorServer);

    scholarAdvisorServer.$inject = ['httpServer'];

    function scholarAdvisorServer(httpServer) {
        var myServices = {};
        //本学年评定经济困难但未申请助学金
        myServices.notApply = function (data) {
            return httpServer.get('/grantsAdvisor/povertyNotApply', data);
        };
        //s


        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 励志奖学金学校服务
     */
    'use strict';
    angular.module('app.core').factory('scholarCollegeServer', scholarCollegeServer);

    scholarCollegeServer.$inject = ['httpServer'];

    function scholarCollegeServer(httpServer) {
        var myServices = {};
        /**
         *获取学年
         * */
        myServices.scholarSchoolYear = function (data) {
            return httpServer.get('/scholarshipSchool/listSchoolYears', data);
        };
        /**
         *获取学院列表
         * */
        myServices.scholarSchoolList = function (data) {
            return httpServer.get('/scholarshipSchool/listCollegeConfig', data);
        };
        /**
         *获取奖学金列表
         * */
        myServices.scholarGrantsList = function (data) {
            return httpServer.get('/scholarshipSchool/listGrants', data);
        };
        /**
         * 保存更新学院助学金配置
         * */
        myServices.scholarSchoolListPost = function (data) {
            return httpServer.postHttp('/scholarshipSchool/saveOrUpdateCollegeConfig', data);
        };
        /**
         * 处理学院的申请
         */
        myServices.dealSchoolNewApply = function (data) {
            return httpServer.get('/grantsSchool/dealNewApply', data);
        };

        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 励志奖学金学校服务
     */
    'use strict';
    angular.module('app.core').factory('scholarSchoolServer', scholarSchoolServer);

    scholarSchoolServer.$inject = ['httpServer'];

    function scholarSchoolServer(httpServer) {
        var myServices = {};
        /**
         *获取学年
         * */
        myServices.scholarSchoolYear = function (data) {
            return httpServer.get('/scholarshipSchool/listSchoolYears', data);
        };
        /**
         *获取班级列表
         * */
        myServices.scholarClassList = function (data) {
            return httpServer.get('/scholarshipCollege/listGradeConfig', data);
        };
        /**
         *获取奖学金列表
         * */
        myServices.scholarGrantsList = function (data) {
            return httpServer.get('/scholarshipSchool/listGrants', data);
        };
        /**
         * 保存更新学院助学金配置
         * */
        myServices.scholarClassListPost = function (data) {
            return httpServer.postHttp('/scholarshipCollege/saveGradeConfig', data);
        };
        /**
         * 处理学院的申请
         */
        myServices.dealSchoolNewApply = function (data) {
            return httpServer.get('/grantsSchool/dealNewApply', data);
        };

        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: chenjun
 * Date: 2016/8/5
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 励志奖学金学校服务
     */
    'use strict';
    angular.module('app.core').factory('scholarStudentServer', scholarStudentServer);

    scholarStudentServer.$inject = ['httpServer'];

    function scholarStudentServer(httpServer) {
        var myServices = {};
        /**
         *获取学生基本信息
         * */
        myServices.getStudentInfo = function (data) {
            return httpServer.get('/scholarshipStudent/getStudentInfo', data);
        };
        /**
         *获取励志奖学金申请条件
         * */
        myServices.saveOrUpdateCollegeConfig = function (data) {
            return httpServer.get('/scholarshipStudent/saveOrUpdateCollegeConfig', data);
        };
        /**
         * 学生新增获奖信息
         * */
        myServices.savAward = function (data) {
            return httpServer.postHttp('/scholarshipStudent/savAward', data);
        };
        /**
         * 学生删除获奖信息
         * */
        myServices.deleteAward = function (data) {
            return httpServer.postHttp('/scholarshipStudent/deleteAward', data);
        };
        /**
         * 学生申请励志奖学金并开启流程
         * */
        myServices.scholarSchoolListPost = function (data) {
            return httpServer.postHttp('/scholarshipStudent/applyScholarship', data);
        };


        return myServices;
    }
})();

/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/2/16
 * Time: 10:41
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    /**
     * http服务
     */
    angular.module('app.core').factory('socketServer', ['$websocket',
        function ($websocket) {
            // Open a WebSocket connection
            var dataStream = $websocket('ws://' + window.location.host + '/myHandler');

            var collection = [];

            dataStream.onMessage(function (message) {
                collection.push(message.data);
            });

            var methods = {
                collection: collection,
                get: function () {
                    dataStream.send(JSON.stringify({action: 'get'}));
                }
            };

            return methods;
        }
    ]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: DengJierong
 * Date: 2017/6/9
 * Time: 10:42
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 数据统计模块服务
     */
    'use strict';
    angular.module('app.core').factory('statisticServer', statisticServer);

    statisticServer.$inject = ['httpServer'];

    function statisticServer(httpServer) {
        var myServices = {};
        //五类生统计
        myServices.getFiveKind = function (data) {
            return httpServer.postHttp('/dataAmount/fiveKind/number', data);
        };
        //省内排序
        myServices.getInProvince = function (data) {
            return httpServer.postHttp('/dataAmount/inProvince/desc', data);
        };
        //查询省内省外经济困难人数
        myServices.getNumber = function (data) {
            return httpServer.postHttp('/dataAmount/isInTheProvince/number', data);
        };
        //省外排序
        myServices.getOutProvince = function (data) {
            return httpServer.postHttp('/dataAmount/notInProvince/desc', data);
        };
        //根据资助类型分组统计金额及数量
        myServices.getNumberAndMoney = function (data) {
            return httpServer.postHttp('/dataAmount/numberAndMoney', data);
        };
        //查询经济困难认定总人数
        myServices.getPoverty = function (data) {
            return httpServer.postHttp('/dataAmount/poverty/totalNumber', data);
        };
        //查询各等级经济困难人数
        myServices.getPovertyLevel = function (data) {
            return httpServer.postHttp('/dataAmount/povertyLevel/number', data);
        };
        return myServices;
    }
})();

/**
 * Created by yanyuan on 2017/6/5.
 */
(function () {
    /**
     * 资助记录公共服务
     */
    'use strict';
    angular.module('app.core').factory('subsidizeRecordCommonServer', subsidizeRecordCommonServer);

    subsidizeRecordCommonServer.$inject = ['httpServer'];

    function subsidizeRecordCommonServer(httpServer) {
        var myServices = {};
        //根据学院和年级查询助学金记录
        myServices.getSubsidizeHistoryGrantsList = function (data) {
            return httpServer.get('/subsidizeHistory/grants/list/'+data[0]+'/'+data[1]);
        };
        //导出助学金记录
        myServices.getSubsidizeHistoryGrantsListExcel = function (data) {
            return httpServer.get('/subsidizeHistory/grants/list/excel/'+data[0]+'/'+data[1]);
        };
        //根据学院和年级查询励志奖学金记录
        myServices.getSubsidizeHistoryInspScholarshipList = function (data) {
            return httpServer.get('/subsidizeHistory/inspScholarship/list/'+data[0]+'/'+data[1]);
        };
        //导出励志奖学金记录
        myServices.getSubsidizeHistoryInspScholarshipListExcel = function (data) {
            return httpServer.get('/subsidizeHistory/inspScholarship/list/excel/'+data[0]+'/'+data[1]);
        };
        //根据学院和年级查询经济困难认定记录
        myServices.getSubsidizeHistoryPovertyList = function (data) {
            return httpServer.get('/subsidizeHistory/poverty/list/'+data[0]+'/'+data[1]);
        };
        //导出经济困难认定记录
        myServices.getSubsidizeHistoryPovertyListExcel = function (data) {
            return httpServer.get('/subsidizeHistory/poverty/list/excel/'+data[0]+'/'+data[1]);
        };
        return myServices;
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/5/11
 * Time: 20:40
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * 助学金学院服务
     */
    'use strict';
    angular.module('app.core').factory('temporaryDiffServer', temporaryDiffServer);

    temporaryDiffServer.$inject = ['httpServer'];

    function temporaryDiffServer(httpServer) {
        var myServices = {};

        //查询申请临时困难补助的学生
        myServices.getAllTemDiff = function () {
            return httpServer.get('/temporarySubsidize/all');
        };
        //新增
        myServices.addTemDiff = function (data) {
            return httpServer.postHttp('/temporarySubsidize/single', data);
        };
        //批量导入
        myServices.updateGrantsLevel = function (data) {
            return httpServer.postHttp('/temporarySubsidize/batch', data);
        };
        myServices.getStudentList = function () {
            return httpServer.get('/temporarySubsidize/student/list');
        };
        myServices.putTemporarySubsidize = function (data) {
            return httpServer.put('/temporarySubsidize/temporarySubsidize',data);
        };
        myServices.deleteTemporarySubsidizeSingle = function (data) {
            return httpServer.delete('/temporarySubsidize/temporarySubsidize', data);
        };
        myServices.deleteTemporarySubsidize = function (data) {
            return httpServer.postHttp('/temporarySubsidize/temporarySubsidize', data);
        };
        return myServices;
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/13
 * Time: 11:41
 * To change this template use File | Settings | File Templates.
 */
(function() {
    'use strict';
    angular.module('app.core').factory('userSerivce', userSerivce);

    userSerivce.$inject = ['httpServer'];

    function userSerivce(httpServer) {
        var myServices = {};
        //登录
        myServices.login = function (data) {
            return httpServer.postHttp('/user/login', data);
        };
        //退出登录
        myServices.logout = function () {
            return httpServer.postHttp('/user/logout');
        };
        return myServices;
    }
})();
/**
 * Created by xd-66 on 2016/12/8.
 */
(function () {
    'use strict';
    angular.module('app.core').factory('locals', locals);

    locals.$inject = ['$window'];

    function locals($window) {
        return {        //存储单个属性
            set: function (key, value) {
                $window.localStorage[key] = value;
            },        //读取单个属性
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },        //存储对象，以JSON格式存储
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },        //读取对象
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        };
    }
})();
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
/**
 * Created with IntelliJ IDEA.
 * User: dothin  chenjun
 * Date: 2017/4/12
 * Time: 17:57
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').service('tools', tools);

    tools.$inject = ['$timeout', '$rootScope', '$cookies'];

    function tools($timeout, $rootScope, $cookies) {
        /**
         * 退出登录
         */
        this.logout = function () {
            $cookies.remove('user');
            $rootScope.user = $cookies.getObject('user');
            localStorage.clear();
        };

        /**
         * 成功提示框
         * @param data  提示信息
         */
        this.alertSuccess = function (data, time) {
            $rootScope.alert = true;
            $rootScope.isActive = true;
            $timeout(function () {
                $rootScope.alert = false;
            }, time ? time : 2000);
            $rootScope.alertValue = data;
        };

        /**
         * 失败提示框
         * @param data  提示信息
         */
        this.alertError = function (data, time) {
            $rootScope.alert = true;
            $rootScope.isActive = false;
            $timeout(function () {
                $rootScope.alert = false;
            }, time ? time : 2000);
            $rootScope.alertValue = data;
        };

        /**
         * 判断对象是否为空
         * @param e
         * @returns {boolean}
         */
        this.isEmptyObject = function (e) {
            var t;
            for (t in e) {
                return !1;
            }
            return !0;
        };

        /**
         * 改数组null为0
         * @param arr
         * @param item *多少
         * @returns {boolean}
         */
        this.formatArr = function (arr, item) {
            return arr.map(function (data) {
                return data == null || data === 'NaN' ? 0 : (item == null ? data : data * item);
            });
        };
        
        /**
         * 格式化字符串
         * @param str   传入字符串
         * @param num   从第几个位置开始
         * @param tips  添加标记
         * @returns {string}
         */
        this.formatStr = function (str, num, tips) {
            var newStr = '';
            var count = 0;
            if (str) {
                for (var i = 0, len = str.length; i < len; i++) {
                    if (count % num === 0 && count !== 0) {
                        newStr = newStr + tips + str.charAt(i);
                    } else {
                        newStr = newStr + str.charAt(i);
                    }
                    count++;
                }
                return newStr;
            } else {
                return str;
            }
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
         * 判断json数组对象属性是否重复
         * @param arr
         * @param name
         * @returns {boolean}
         */
        this.isRepeat = function (arr, name) {

            var obj = {}, _arr = [];

            angular.forEach(arr, function (value) {
                if (!obj[value[name]]) {
                    obj[value[name]] = 1;
                    _arr.push(value[name]);
                }
            });

            return arr.length !== _arr.length;
        };
        /**
         * 验证大于0的数字
         * */
        this.number = function (num) {
            var reg = new RegExp("^[0-9]*$");
            if(reg.test(num)){
                return true;
            }else {
                return false;
            }
        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.poorAssess').controller('classAuditPovertyController', classAuditPovertyController);

    classAuditPovertyController.$inject = [
        '$scope',
        'povertyBusinessServer',
        'NgTableParams',
        'povertyCommonServer'];

    function classAuditPovertyController($scope, povertyBusinessServer, NgTableParams, povertyCommonServer) {
        $scope.vm = {
            tableFlag: 0
        };

        povertyBusinessServer.getPovertyMaxStatus();

        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyCommonServer.listStudentPovertyApply().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length > 0 ? 1 : 2;
                    $scope.vm.studentList = data.data;
                    //判断是否可以提交到辅导员审核
                    $scope.vm.commitBtnShow = $scope.vm.studentList.some(function (value) {
                        return value.taskId;
                    });

                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.poorAssess').controller('classAuditPovertyMaterialController', classAuditPovertyMaterialController);

    classAuditPovertyMaterialController.$inject = [
        '$scope',
        'povertyBusinessServer',
        'NgTableParams',
        'povertyStudentServer',
        'povertyCommonServer',
        '$element',
        'tools'];

    function classAuditPovertyMaterialController($scope, povertyBusinessServer, NgTableParams, povertyStudentServer, povertyCommonServer, $element, tools) {
        $scope.vm = {
            tableFlag: 0,
            collegeNoticeList: {}
        };

        povertyBusinessServer.getPovertyMaxStatus();

        /**
         * 初始化信息
         */
        $scope.init = function () {
            povertyCommonServer.listCheckMaterialStudent().then(function (data) {
                if (data.status) {
                    $scope.vm.tableFlag = data.data.length === 0 ? 2 : 1;
                    $scope.vm.studentList = data.data;
                    $scope.tableParams = new NgTableParams({
                        page: 1,
                        count: 15
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });

                    // _flag for check init
                    var _flag = true;
                    $scope.$watch(function () {
                        return $scope.tableParams.data;
                    }, function (value) {
                        if (value.length > 0) {
                            $scope.checkboxes = {
                                checked: false,
                                items: {}
                            };
                            $scope.thisPageArr = value;
                            if (_flag) {
                                $scope.initCheck();
                                _flag = false;
                            }
                        }
                    });
                } else {
                    $scope.vm.tableFlag = 2;
                }
            });
        };
        $scope.init();

        /**
         * 审核材料
         * @param student
         * @param flag
         */
        $scope.agreeOrReject = function (student, flag) {
            student.isPass = flag;
            student.isDealing = true;
            $scope.vm.isDealOne = true;

            povertyStudentServer.checkMaterial([student]).then(function (data) {
                if (data.status) {
                    tools.alertSuccess('通过成功');

                    var _newPage = $scope.tableParams.page();
                    var _count = $scope.tableParams.count();
                    //从$scope.vm.studentList中去除审核通过的学生
                    angular.forEach($scope.vm.studentList, function (data, index) {
                        data.studentId === student.studentId && $scope.vm.studentList.splice(index, 1);
                    });
                    if (((_newPage - 1) * $scope.tableParams.count() + 1) >= $scope.tableParams.settings().total) {
                        _newPage = _newPage - 1;
                    }
                    $scope.tableParams = new NgTableParams({
                        page: _newPage,
                        count: _count
                    }, {
                        dataset: $scope.vm.studentList,
                        counts: [10, 15, 20, 30]
                    });
                }

                student.isDealing = false;
                $scope.vm.isDealOne = false;
            });
        };

        /**
         * 批量处理
         */
        $scope.dealAll = function (flag) {

            if ($scope.checkboxes.choosedStudent.length > 0) {

                $scope.vm.isDealingAll = true;

                angular.forEach($scope.checkboxes.choosedStudent, function (value) {
                    value.isPass = flag;
                });
                povertyStudentServer.checkMaterial($scope.checkboxes.choosedStudent).then(function (data) {
                    if (data.status) {
                        tools.alertSuccess('通过成功');
                        $scope.init();
                    }
                    $scope.vm.isDealingAll = false;
                });
            } else {
                tools.alertError('请先选择要批量处理的学生');
            }
        };

        $scope.initCheck = function () {

            // watch for check all checkbox
            $scope.$watch(function () {
                return $scope.checkboxes.checked;
            }, function (value) {
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] = value;
                });
            });

            // watch for data checkboxes
            $scope.$watch(function () {
                return $scope.checkboxes.items;
            }, function (values) {
                var checked = 0, unchecked = 0,
                    total = $scope.thisPageArr.length;
                $scope.checkboxes.choosedStudent = [];
                angular.forEach($scope.thisPageArr, function (item) {
                    $scope.checkboxes.items[item.studentId] && $scope.checkboxes.choosedStudent.push(item);
                    checked += ($scope.checkboxes.items[item.studentId]) || 0;
                    unchecked += (!$scope.checkboxes.items[item.studentId]) || 0;
                });
                if ((unchecked == 0) || (checked == 0)) {
                    $scope.checkboxes.checked = (checked == total);
                }
                // grayed checkbox
                angular.element($element[0].getElementsByClassName("select-all")).prop("indeterminate", (checked != 0 && unchecked != 0));
                console.log($scope.checkboxes.choosedStudent)
            }, true);
        };
    }
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/11/23
 * Time: 13:43
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').service('bar', ['echartsFormatter',
        function (echartsFormatter) {
            /**
             *  柱状图基本配置
             * @param flag  单位
             * @returns {{tooltip: {trigger: string, axisPointer: {type: string}, formatter: bar.tooltip.formatter}, legend: {bottom: number, data: Array}, grid: {left: number, right: number, bottom: string, top: string, containLabel: boolean}, xAxis: {type: string, data: Array}, yAxis: {type: string}, series: Array}}
             */
            this.getOption = function (flag) {
                return {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        confine: true,
                        formatter: function (params, ticket, callback) {
                            return echartsFormatter.formatter(params, ticket, callback, flag);
                        }
                    },
                    legend: {
                        bottom: 0,
                        data: [],
                        itemHeight: 10,
                        itemWidth: 10
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '13%',
                        top: 8,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}' + flag
                        }
                    },
                    series: []
                };
            };
        }
    ]);
})();
/**
 * Created by xd-66 on 2016/11/24.
 */
(function () {
    'use strict';
    angular.module('app.core').service('barLine', ['echartsFormatter',
        function (echartsFormatter) {
            /**
             * 柱折混合图基本配置
             * @param flag1 flag2 单位
             */
            this.getOption = function (line, bar) {
                return {
                    tooltip: {
                        trigger: 'axis',
                        confine: true,
                        formatter: function (params, ticket, callback) {
                            return echartsFormatter.formatterBarLine(params, ticket, callback, line, bar);
                        }
                    },
                    legend: {
                        data: [],
                        bottom: 0
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: 25,
                        top: 10,
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: []
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value}' + line
                            }
                        },
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value}' + bar
                            },
                            splitLine: {
                                show: false
                            }
                        }
                    ],
                    series: []

                };
            };
        }
    ]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/12/12
 * Time: 20:10
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').service('chinaMap', [
        function () {
            /**
             * 地图配置
             * @returns {{tooltip: {trigger: string}, visualMap: {min: number, max: number, left: string, itemHeight: number, top: string, text: string[], calculable: boolean}, series: *[]}}
             */
            this.getOption = function () {
                return {
                    tooltip: {
                        trigger: 'item'
                    },
                    visualMap: {
                        show:true,
                        min: 0,
                        max: 100,
                        left: 'left',
                        itemHeight: document.documentElement.clientHeight > 700 ? 100 : 60,
                        top: 'bottom',
                        text: ['高', '低'],           // 文本，默认为数值文本
                        calculable: true
                    },
                    series: [
                        {
                            name: '人数',
                            type: 'map',
                            roam: true,
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            data: []
                        }
                    ]
                };
            };
        }
    ]);
})();
/**
 * Created by xd-66 on 2016/11/24.
 */
(function () {
    'use strict';
    angular.module('app.core').service('decareMap', [
        function () {
            /**
             * 笛卡尔坐标系上的热力图的基本配置
             */
            this.getOption = function () {
                return {
                    grid: {
                        left: '22%',
                        height: '75%',
                        right: '0',
                        top: '0'
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        splitArea: {
                            show: true
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: [],
                        splitArea: {
                            show: true
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 50,
                        calculable: true,
                        orient: 'horizontal',
                        left: 'center'
                    },
                    series: [{
                        name: 'Punch Card',
                        type: 'heatmap',
                        data: [],
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]

                };
            };
        }
    ]);
})();
/**
 * Created by xd-66 on 2016/11/23.
 */
(function () {
    'use strict';
    angular.module('app.core').service('gauge', [
        function () {
            /**
             *  仪表盘基本配置
             * @param flag  单位
             */
            this.getOption = function (flag) {
                return{
                    tooltip: {
                        confine: true,
                        formatter: function (params, ticket, callback) {//修改formatter方式，模板法在有legend的情况下有bug
                            var res = params.name;
                            res += params.seriesName + ' : ' + params.value + flag;
                            return res;
                        }
                    },
                    series: []
                };
            };
        }
    ]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/11/23
 * Time: 14:18
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').service('line', ['echartsFormatter',
        function (echartsFormatter) {
            /**
             * 折线图基本配置
             * @param flag 单位
             * @returns {{tooltip: {trigger: string, formatter: line.tooltip.formatter}, legend: {data: Array, bottom: number}, grid: {left: string, right: string, bottom: string, top: number, containLabel: boolean}, xAxis: {type: string, boundaryGap: boolean, data: Array}, yAxis: {type: string, axisLabel: {formatter: string}}, series: Array}}
             */
            this.getOption = function (flag) {
                return {
                    tooltip: {
                        trigger: 'axis',
                        confine: true,
                        formatter: function (params, ticket, callback) {
                            return echartsFormatter.formatter(params, ticket, callback, flag);
                        }
                    },
                    legend: {
                        data: [],
                        bottom: 0
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: 25,
                        top: 10,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        /*axisLabel:{
                         interval:0
                         },*/
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}' + flag
                        }
                    },
                    series: []
                };
            };
        }
    ]);
})();
/**
 * Created by xd-66 on 2016/11/24.
 */
(function () {
    'use strict';
    angular.module('app.core').service('pie', [
        function () {
            /**
             * 饼图基本配置
             * @param flag 单位
             */
            this.getOption = function (flag) {
                return {
                    color: [],
                    tooltip: {
                        trigger: 'item',
                        confine: true,
                        formatter: function (params, ticket, callback) {//修改formatter方式，模板法在有legend的情况下有bug
                            var res = params.seriesName;
                            res += '<br/>' + params.name + ' : ' + params.percent + flag;
                            return res;
                        }
                    },
                    legend: {
                        data: [],
                        orient:'vertical',
                        x: 'right',
                        itemWidth:15,
                        align:'left',
                        y:'bottom'
                    },
                    series: []

                };
            };
        }
    ]);
})();
/**
 * Created by xd-66 on 2016/11/25.
 */
(function () {
    'use strict';
    angular.module('app.core').service('relationGraph', [
        function () {
            /**
             *  关系图基本配置
             */
            this.getOption = function () {
                return {
                    tooltip: {},
                    series: [
                        {
                            type: 'graph',
                            layout: 'force',
                            data: [],
                            links: [],
                            categories: [],
                            roam: true,
                            label: {
                                normal: {
                                    position: 'right'
                                }
                            },
                            force: {
                                edgeLength: ['200', '5'],
                                repulsion: 1000
                            },
                            draggable: true,
                            focusNodeAdjacency: true,
                            itemStyle: {
                                emphasis: {
                                    show: true
                                }
                            },
                            symbolSize: 25

                        }
                    ]
                };
            };
        }
    ]);
})();
/**
 * Created with IntelliJ IDEA.
 * User: gaoHuaBin
 * Date: 2016/11/23
 * Time: 13:54
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.core').service('sankey', [
        function () {
            /**
             * 散点图基本配置
             * @returns {{tooltip: {position: string, formatter: sankey.tooltip.formatter}, grid: {left: number, bottom: number, right: number, top: number, containLabel: boolean}, xAxis: {type: string, data: string[], boundaryGap: boolean, splitLine: {show: boolean, lineStyle: {color: string}}}, yAxis: {type: string, data: string[], splitLine: {show: boolean, lineStyle: {color: string}}}, series: *[]}}
             */
            this.getOption = function () {
                return {
                    tooltip: {
                        confine: true,
                        position: 'top'
                    },
                    grid: {
                        left: 2,
                        bottom: 10,
                        right: 20,
                        top: 2,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: []
                    },
                    yAxis: {
                        type: 'category',
                        data: []
                    },
                    series: [{
                        name: 'Punch Card',
                        type: 'scatter',
                        symbolSize: function (val) {
                            var _size = val[2];
                            if (0 < _size && _size < 5) {
                                _size = 5;
                            }
                            if (_size > 40) {
                                _size = 40;
                            }
                            return _size;
                        },
                        data: [],
                        animationDelay: function (idx) {
                            return idx * 5;
                        }
                    }]
                };
            };
        }
    ]);
})();