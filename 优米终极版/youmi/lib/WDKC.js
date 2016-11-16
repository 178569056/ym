 app.controller('WDKCCtrl',['$scope','$http',function($scope,$http){
 	//主页的头部隐藏与显示
	$('#header').hide();
	$('#ul').hide();
	$('.home').on('click',function(){
		$('#header').show();
		$('#ul').show();
		$('#landing').hide();
		$('#main').show;
	})
        //$http.get 这个是一个异步请求，一定要放到回调里面
        $http.get('./data/WDKC.json').success(function(res){
            $scope.arr = res;
        }); 
    
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
    
    }]);