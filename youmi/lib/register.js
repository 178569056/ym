app.controller('registerCtrl',['$scope','save',function($scope,save){
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
	
	
	$scope.click = function(){
		var user = $("#user").val();
		var pwd = $("#pwd").val();
		var value = localStorage.getItem(user);
		if(value){
			alert("该手机号已被注册");
		}else{
			save.set(user,pwd);
			localStorage.Name = user;
			location.href = '#my'
		}
	}
	
	//点击跳到登陆页面
	$('.form3 a').on('click',function(){
		location.href = '#landing';
	})
}])


app.factory("save",function(){
	return{
		set:function(key,value){
        	return  localStorage.setItem(key,value);
        },        //读取单个属性
	    get:function(key,defaultValue){
	    	return  localStorage.setItem(key);
	    }
	}
	
})

