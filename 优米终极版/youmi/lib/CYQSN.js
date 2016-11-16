
    app.controller('CYQSNCtrl',['$scope','$http',function($scope,$http){
        //$http.get 这个是一个异步请求，一定要放到回调里面
        $http.get('./data/CYQSN.json').success(function(res){
            $scope.arr = res;


        });
          $scope.clickMe1 = function(){
            $http.get('./data/CYQSN.json').success(function(res){
            $scope.arr = res;



        })};
             $scope.clickMe2 = function(){
            $http.get('./data/CYQSN1.json').success(function(res){
            $scope.arr = res;



        })}; 
            $scope.clickMe3 = function(){
            $http.get('./data/CYQSN2.json').success(function(res){
            $scope.arr = res;



        })}; 
            $scope.clickMe4 = function(){
            $http.get('./data/CYQSN3.json').success(function(res){
            $scope.arr = res;



        })};
         $scope.clickMe5 = function(){
            $http.get('./data/CYQSN4.json').success(function(res){
            $scope.arr = res;



        })};
             $scope.clickMe6 = function(){
            $http.get('./data/CYQSN5.json').success(function(res){
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

          $(".CYQSN-xuan").on("click",function(){

             $(".CYQSN-zhezhao").css("display","block");  
             $(".CYQSN-zhezhao1").css("display","block");  


          })

       $(".CYQSN-choice1 li").on("click",function(){

                  $(".CYQSN-zhezhao").css("display","none");  
             $(".CYQSN-zhezhao1").css("display","none");
         $(".CYQSN-choice").children().eq(0).text($(this).children().eq(0).text() )
       $(".CYQSN-xuan ").children().eq(0).text($(this).children().eq(0).text() )                  
          


       })


          



        })