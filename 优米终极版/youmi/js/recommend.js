app.controller('recommendCtrl',['$scope','$timeout',function($scope,$timeout){
	$timeout(function(){
	$scope.swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        spaceBetween: 30,
	        autoplay:2000, 
	        loop:true,
	        autoplayDisableOnInteraction:false
	  });
	})
	
	$('.topp').on('click',function(){
		$('body').animate({
			'scroll-top': 0
			}
		,500)
	})
}])

