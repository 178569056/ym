app.controller('JFSCCtrl',['$scope',function($scope){
	//主页的头部隐藏与显示
	$('#header').hide();
	$('#ul').hide();
	$('.home').on('click',function(){
		$('#header').show();
		$('#ul').show();
		$('#landing').hide();
		$('#main').show;
	})
	
	//点击导航出现下拉菜单
	$('.dao').on('click',function(){
		$('.daohang').toggle();
		$('.shouye').on('click',function(){
			$('#header').show();
			$('#ul').show();
			$('#landing').hide();
			$('#main').show;
		})
		$('.sousuo').on('click',function(){
				$('#header').show();
				$('#ul').show();
				$('#landing').hide();
				$('#main').show;
		})
		$('.wode').on('click',function(){
				$('#header').show();
				$('#ul').show();
				$('#landing').hide();
				$('#main').show;
		})
	})
}])