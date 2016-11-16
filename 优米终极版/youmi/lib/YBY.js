app.controller('YBYCtrl',['$scope','$http',function($scope,$http){
        //$http.get 这个是一个异步请求，一定要放到回调里面
        $http.get('./data/YBY1.json').success(function(res){
            $scope.arr = res;


        })
          $scope.clickMe1 = function(){
            $http.get('./data/YBY2.json').success(function(res){
            $scope.arr = res;



        })}
             $scope.clickMe2 = function(){
            $http.get('data/YBY1.json').success(function(res){
            $scope.arr = res;



        })}
            $scope.clickMe3 = function(){
            $http.get('./data/YBY3.json').success(function(res){
            $scope.arr = res;



        })}
            $scope.clickMe4 = function(){
            $http.get('./data/YBY4.json').success(function(res){
            $scope.arr = res;



        })}
         $scope.clickMe5 = function(){
            $http.get('./data/YBY5.json').success(function(res){
            $scope.arr = res;



        })}
         
         
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


      $(function(){

          $(".YBY-xuan").on("click",function(){

             $(".YBY-zhezhao").css("display","block");  
             $(".YBY-zhezhao1").css("display","block");  


          })

       $(".YBY-choice1 li").on("click",function(){

                  $(".YBY-zhezhao").css("display","none");  
             $(".YBY-zhezhao1").css("display","none");
         $(".YBY-choice").children().eq(0).text($(this).children().eq(0).text() )
       $(".YBY-xuan ").children().eq(0).text($(this).children().eq(0).text() )                  
          


       })

        })
