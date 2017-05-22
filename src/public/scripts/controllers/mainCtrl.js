'use strict';

app.controller('MainCtrl', function($scope, appConstant){

	$scope.headerTemplatePath = appConstant.headerTemplatePath;
	$scope.footerTemplatePath = appConstant.footerTemplatePath;

});
