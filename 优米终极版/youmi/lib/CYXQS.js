
    app.controller('CYXQSCtrl',['$scope','$http',function($scope,$http){
        //$http.get 这个是一个异步请求，一定要放到回调里面
        $http.get('./data/CYXQS1.json').success(function(res){
            $scope.arr = res;


        });
          $scope.clickMe1 = function(){
            $http.get('./data/CYXQS1.json').success(function(res){
            $scope.arr = res;



        })};
             $scope.clickMe2 = function(){
            $http.get('./data/CYXQS2.json').success(function(res){
            $scope.arr = res;



        })}; 
            $scope.clickMe3 = function(){
            $http.get('./data/CYXQS3.json').success(function(res){
            $scope.arr = res;



        })}; 
            $scope.clickMe4 = function(){
            $http.get('./data/CYXQS4.json').success(function(res){
            $scope.arr = res;



        })};
         $scope.clickMe5 = function(){
            $http.get('./data/CYXQS5.json').success(function(res){
            $scope.arr = res;



        })};
              $scope.clickMe6 = function(){
            $http.get('./data/CYXQS6.json').success(function(res){
            $scope.arr = res;



        })};
              $scope.clickMe7 = function(){
            $http.get('./data/CYXQS7.json').success(function(res){
            $scope.arr = res;



        })};

    
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

          $(".CYXQS-xuan").on("click",function(){

             $(".CYXQS-zhezhao").css("display","block");  
             $(".CYXQS-zhezhao1").css("display","block");  


          })

       $(".CYXQS-choice1 li").on("click",function(){

                  $(".CYXQS-zhezhao").css("display","none");  
             $(".CYXQS-zhezhao1").css("display","none");
         $(".CYXQS-choice").children().eq(0).text($(this).children().eq(0).text() )
       $(".CYXQS-xuan ").children().eq(0).text($(this).children().eq(0).text() )                  
          


       })


          



        })