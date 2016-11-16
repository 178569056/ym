
app.controller('CYTPQCtrl',['$scope','$http',function($scope,$http){
        //$http.get 这个是一个异步请求，一定要放到回调里面
        $http.get('./data/CYTPQ.json').success(function(res){
            $scope.arr = res;


        });
          $scope.clickMe1 = function(){
            $http.get('./data/CYTPQ.json').success(function(res){
            $scope.arr = res;



        })};
             $scope.clickMe2 = function(){
            $http.get('./data/CYTPQ1.json').success(function(res){
            $scope.arr = res;



        })}; 
            $scope.clickMe3 = function(){
            $http.get('./data/CYTPQ2.json').success(function(res){
            $scope.arr = res;



        })}; 
            $scope.clickMe4 = function(){
            $http.get('./data/CYTPQ3.json').success(function(res){
            $scope.arr = res;



        })};
         $scope.clickMe5 = function(){
            $http.get('./data/CYTPQ5.json').success(function(res){
            $scope.arr = res;



        })};
              $scope.clickMe6 = function(){
            $http.get('./data/CYTPQ4.json').success(function(res){
            $scope.arr = res;



        })};
              $scope.clickMe7 = function(){
            $http.get('./data/CYTPQ6.json').success(function(res){
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

          $(".CYTPQ-xuan").on("click",function(){

             $(".CYTPQ-zhezhao").css("display","block");  
             $(".CYTPQ-zhezhao1").css("display","block");  


          })

       $(".CYTPQ-choice1 li").on("click",function(){

                  $(".CYTPQ-zhezhao").css("display","none");  
             $(".CYTPQ-zhezhao1").css("display","none");
         $(".CYTPQ-choice").children().eq(0).text($(this).children().eq(0).text() )
       $(".CYTPQ-xuan ").children().eq(0).text($(this).children().eq(0).text() )                  
          


       })


          



        })