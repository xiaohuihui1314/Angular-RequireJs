"use strict"
require.config({
    paths: {
        angular: "dist/angular",
        ngRouter: "dist/angular-ui-router",
        app: "app/app",
        router: "router/router",
        moduleCtrl: "controller/moduleCtrl",
        moduleDirective: "directive/moduleDirective",
        controllers: "controller/controller",
        controllers1: "controller/controller1",
        directive: "directive/directive"
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        ngRouter: {
            deps: ['angular'],
            exports: 'ngRouter'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime(),
    packages: [],
    waitSeconds: 0,
    callback: function () {
        console.log("加载完毕！")
        require(["angular", "ngRouter", "app", "router", "moduleCtrl", "moduleDirective", "controllers", "controllers1", "directive"], function () {

            angular.bootstrap(document, ['myApp'])
        });

    }

});
// require(["angular", "ngRouter", "app", "router", "moduleCtrl", "moduleDirective", "controllers", "controllers1", "directive"], function () {
//     'use strict';
//
//     angular.element(document).ready(function() {
//         angular.bootstrap(document, ['myApp'])
//     });
//     console.log("加载完毕！")
// });


