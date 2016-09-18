/**
 * Created by LYH on 2016/9/11.
 */
define(["angular", "ngRouter", "app"], function (angular, router, app) {
    'use strict';
    return app.config(function ($stateProvider, $urlRouterProvider) {
        // 默认进入先重定向
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state(
                "home", {
                    "url": "/home",
                    views: {
                        "": {
                            templateUrl: "templates/home.html"
                        }
                    }
                })
            .state(
                "index", {
                    "url": "/index",
                    views: {
                        "": {
                            templateUrl: "templates/index.html",
                            controller:"controllers"
                        }
                    }
                }
            )  .state(
            "index1", {
                "url": "/index1",
                views: {
                    "": {
                        templateUrl: "templates/index1.html",
                        controller:"controllers1"
                    }
                }
            }
        );
    });
});