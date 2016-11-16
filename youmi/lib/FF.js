app.controller('FFCtrl',['$scope','$http',function($scope,$http){
	//主页的头部隐藏与显示
	$('#header').hide();
	$('#ul').hide();
	$('.ff').on('click',function(){
		$('#header').show();
		$('#ul').show();
		$('#landing').hide();
		$('#main').show;
	})
	
	$http.get("data/FF.json").success(function(res){
		$scope.arr = res;
	})
}])