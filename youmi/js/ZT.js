app.controller('ZTCtrl',['$scope','$http',function($scope,$http){
	$http.get("data/ZT.json").success(function(res){
		$scope.arr = res;
	})
}])