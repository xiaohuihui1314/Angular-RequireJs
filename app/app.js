/**
 * Created by LYH on 2016/9/9.
 */
define(["angular", "ngRouter","moduleCtrl","moduleDirective"], function (angular) {
    'use strict';
    return angular.module("myApp", ["ui.router","myApp.controllers","myApp.directive"]);
});