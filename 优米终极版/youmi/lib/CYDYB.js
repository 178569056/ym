
    app.controller('CYDYBCtrl',['$scope','$http',function($scope,$http){
        //$http.get 这个是一个异步请求，一定要放到回调里面
        $http.get('./data/CYDYB.json').success(function(res){
            $scope.arr = res;


        });
          $scope.clickMe1 = function(){
            $http.get('./data/CYDYB.json').success(function(res){
            $scope.arr = res;



        })};
             $scope.clickMe2 = function(){
            $http.get('./data/CYDYB1.json').success(function(res){
            $scope.arr = res;



        })}; 
            $scope.clickMe3 = function(){
            $http.get('./data/CYDYB2.json').success(function(res){
            $scope.arr = res;



        })}; 
            $scope.clickMe4 = function(){
            $http.get('./data/CYDYB3.json').success(function(res){
            $scope.arr = res;



        })};
         $scope.clickMe5 = function(){
            $http.get('./data/CYDYB4.json').success(function(res){
            $scope.arr = res;



        })};
               $scope.clickMe6 = function(){
            $http.get('./data/CYDYB5.json').success(function(res){
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

          $(".CYDYB-xuan").on("click",function(){

             $(".CYDYB-zhezhao").css("display","block");  
             $(".CYDYB-zhezhao1").css("display","block");  


          })

       $(".CYDYB-choice1 li").on("click",function(){

                  $(".CYDYB-zhezhao").css("display","none");  
             $(".CYDYB-zhezhao1").css("display","none");
         $(".CYDYB-choice").children().eq(0).text($(this).children().eq(0).text() )
       $(".CYDYB-xuan ").children().eq(0).text($(this).children().eq(0).text() )                  
          


       })


          



        })