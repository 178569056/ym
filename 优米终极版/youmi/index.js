//创建angular路由
var app = angular.module('YM',['ui.router','angularCSS','me-lazyload']);

app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/recommend');
//路由分之
    $stateProvider
    	//推荐
        .state('recommend',{
            url:'/recommend',
            templateUrl:'views/recommend.html',
            controller:'recommendCtrl',
            css:'./css/recommend.css'
        })
        //分类
        .state('FL',{
            url:'/FL',
            templateUrl:'views/FL.html',
            controller:'FLCtrl',
            css:'./css/FL.css'
        })
        //排行
        .state('rank',{
            url:'/rank',
            templateUrl:'views/rank.html',
            controller:'PHCtrl',
            css:'css/rank.css'
        })
        //专题
        .state('ZT',{
            url:'/ZT',
            templateUrl:'views/ZT.html',
            controller:'ZTCtrl',
            css:'./css/ZT.css'
        })
        //论坛
        .state('LT',{
            url:'/LT',
            templateUrl:'views/LT.html',
            controller:'LTCtrl',
            css:'./css/LT.css'
        })
       	//登陆
        .state('landing',{
            url:'/landing',
            templateUrl:'info/landing.html',
            controller:'landingCtrl',
            css:'./css/landing.css'
        })
        //注册
        .state('register',{
            url:'/register',
            templateUrl:'info/register.html',
            controller:'registerCtrl',
            css:'./css/register.css'
        })
        //找回密码
        .state('find_password',{
            url:'/find_password',
            templateUrl:'info/find_password.html',
            controller:'find_passwordCtrl',
            css:'./css/find_password.css'
        })
        //付费
        .state('FF',{
            url:'/FF',
            templateUrl:'info/FF.html',
            controller:'FFCtrl',
            css:'./css/FF.css'
        })
        //详情
        .state('XQ',{
            url:'/XQ',
            templateUrl:'info/XQ.html',
            controller:'XQCtrl',
            css:'./css/XQ.css'
        })
        //雷区
        .state('LQ',{
            url:'/LQ',
            templateUrl:'info/LQ.html',
            controller:'LQCtrl',
            css:'./css/LQ.css'
        })
        //购买
        .state('GM',{
            url:'/GM',
            templateUrl:'info/GM.html',
            controller:'GMCtrl',
            css:'./css/GM.css'
        })
        //我的
        .state('my',{
            url:'/my',
            templateUrl:'info/my.html',
            controller:'myCtrl',
            css:'./css/my.css'
        })
        //学营销
        .state('XYX',{
            url:'/XYX',
            templateUrl:'info/XYX.html',
            controller:'XYXCtrl',
            css:'./css/XYX.css'
        })
        .state('YJFK',{
            url:'/YJFK',
            templateUrl:'info/YJFK.html',
            controller:'YJFKCtrl',
            css:'./css/YJFK.css'
        })
        .state('YBY',{
            url:'/YBY',
            templateUrl:'info/YBY.html',
            controller:'YBYCtrl',
            css:'./css/YBY.css'
        })
        .state('WDKC',{
            url:'/WDKC',
            templateUrl:'info/WDKC.html',
            controller:'WDKCCtrl',
            css:'./css/WDKC.css'
        })
        .state('SS',{
            url:'/SS',
            templateUrl:'info/SS.html',
            controller:'SSCtrl',
            css:'./css/SS.css'
        })
        .state('JFSC',{
            url:'/JFSC',
            templateUrl:'info/JFSC.html',
            controller:'JFSCCtrl',
            css:'./css/JFSC.css'
        })
        .state('CYXQS',{
            url:'/CYXQS',
            templateUrl:'info/CYXQS.html',
            controller:'CYXQSCtrl',
            css:'./css/CYXQS.css'
        })
        .state('CYTPQ',{
            url:'/CYTPQ',
            templateUrl:'info/CYTPQ.html',
            controller:'CYTPQCtrl',
            css:'./css/CYTPQ.css'
        })
        .state('CYQSN',{
            url:'/CYQSN',
            templateUrl:'info/CYQSN.html',
            controller:'CYQSNCtrl',
            css:'./css/CYQSN.css'
        })
        .state('CYDYB',{
            url:'/CYDYB',
            templateUrl:'info/CYDYB.html',
            controller:'CYDYBCtrl',
            css:'./css/CYDYB.css'
        })
        //钻石会员
        .state('Diamond',{
            url:'/Diamond',
            templateUrl:'info/Diamond .html',
            controller:'DiamondCtrl',
            css:'./css/Diamond.css'
        })
        //品牌
        .state('brand',{
            url:'/brand',
            templateUrl:'info/brand.html',
            controller:'brandCtrl',
            css:'./css/brand.css'
        })
        //详情页
        .state('Detail',{
            url:'/Detail',
            templateUrl:'info/Detail .html',
            controller:'DetailCtrl',
            css:'./css/Detail.css'
        })
        //运营
        .state('business',{
            url:'/business',
            templateUrl:'info/business.html',
            controller:'businessCtrl',
            css:'./css/business.css'
        })
        
        
})
	
//主页点击事件下边框显示
$(function(){
	readhash(location.hash);
$("#ul").on('click',function(e){
	e = e || window.event
	var val = e.target.innerHTML;
	switch (val){
		case '推荐':
			$(this).find('li:eq(0)').css('border-bottom','3px solid orange').siblings().css('border-bottom','none');
			break;
		case '分类':
			$(this).find('li:eq(1)').css('border-bottom','3px solid orange').siblings().css('border-bottom','none');
			break;
		case '排行':
			$(this).find('li:eq(2)').css('border-bottom','3px solid orange').siblings().css('border-bottom','none');
			break;
		case '专题':
			$(this).find('li:eq(3)').css('border-bottom','3px solid orange').siblings().css('border-bottom','none');
			break;
		case '论坛':
			$(this).find('li:eq(4)').css('border-bottom','3px solid orange').siblings().css('border-bottom','none');
			break;
		default:
			break;
	}
})


function readhash(hash){
		var footer_menu=$("#ul li");
		switch (hash){
			case"#/recommend":footer_menu.eq(0).css("border-bottom",'3px solid orange').siblings().css('border-bottom','none');break;
			case"#/FL":footer_menu.eq(1).css('border-bottom','3px solid orange').siblings().css('border-bottom','none');break;
			case"#/rank":footer_menu.eq(2).css("border-bottom",'3px solid orange').siblings().css('border-bottom','none');break;
			case"#/ZT":footer_menu.eq(3).css("border-bottom",'3px solid orange').siblings().css('border-bottom','none');break;
			case"#/LT":footer_menu.eq(4).css("border-bottom",'3px solid orange').siblings().css('border-bottom','none');break;
		}
	}


})