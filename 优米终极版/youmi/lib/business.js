app.controller('businessCtrl',['$http',function($http){
	this.getData = function(){
		return $http.get('http://v.youmi.cn/apireader/fromCategoryOrTutorGetAlbumList/?catid=1228')
	}
}])