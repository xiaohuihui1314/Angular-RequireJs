/**
 * Created by LYH on 2016/9/12.
 */
define(["moduleDirective"], function (app) {
    return  app.directive("hello",function () {
       return{
        template:"<h1>我是Directive</h1>"
       }
    })
});