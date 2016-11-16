   app.controller('PHCtrl',['$scope','$http',function($scope,$http){
        //$http.get 这个是一个异步请求，一定要放到回调里面
        $http.get('data/PH.json').success(function(res){
            $scope.arr = res;
            $(".PH-bangdan1 li").on("click",function(){
	        	$(this).addClass("PH-hit");
	        	$(this).siblings().removeClass("PH-hit");
			})
        })
        $scope.clickMe1 = function(){
             $http.get('data/PH.json').success(function(res){
            $scope.arr = res;
        })

                        
                    }
        $scope.clickMe2 = function(){
             $http.get('data/PH1.json').success(function(res){
            $scope.arr = res;
        })
                        
                    }
        $scope.clickMe3 = function(){
            $http.get('data/PH2.json').success(function(res){
            $scope.arr = res;
        })

                       
         }
    }]);
        app.filter('tcdemo1',function(){
        return function(ele){
            if(ele<10){
                return "0"+ele
            }else{
                return ele
            }
           
        }
    })
     	
















