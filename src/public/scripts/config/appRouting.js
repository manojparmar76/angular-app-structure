'use strict';

app.config(function($routeProvider, appConstant){
    $routeProvider
      .when(appConstant.homeURL, {
        templateUrl: appConstant.homeTemplatePath,
        controller: 'HomeCtrl'
      })
      .when(appConstant.loginURL, {
        templateUrl: appConstant.loginTemplatePath,
        controller: 'LoginCtrl'
      })
      .when(appConstant.dashboardURL, {
        templateUrl: appConstant.dashboardTemplatePath,
        controller: 'DashboardCtrl'
      })
      .otherwise({
        redirectTo: appConstant.homeURL
      });
  });
