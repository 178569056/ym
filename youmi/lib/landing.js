
app.factory("get",function(){
	return{
		set:function(key,value){
        	return  localStorage.setItem(key,value);
        },        //读取单个属性
	    get:function(key,defaultValue){
	    	return  localStorage.setItem(key);
	    }
	}
	
})

app.controller('landingCtrl',['$scope','get',function($scope,get){
	$scope.clickMe = function(){
		var user = $("#luser").val();
		var pwd = $("#lpwd").val();
		var value = localStorage.getItem(user);
		if(value){
			if( pwd == value){
				location.href = '#my';
				localStorage.Name = user;
			}else{
				alert("账号密码错误");
			}
		}else{
			alert("账号密码错误");
		}
	}
	
	
	
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
