app.controller('GMCtrl',['$scope',function($scope){
	//主页的头部隐藏与显示
	$('#header').hide();
	$('#ul').hide();
	$('.goumai').on('click',function(){
		$('#header').show();
		$('#ul').show();
		$('#landing').hide();
		$('#main').show;
	})
}])