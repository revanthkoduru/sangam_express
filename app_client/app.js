(function(){
	angular.module('sangam',['ngRoute','ui.bootstrap','ui.calendar']);

	function config($routeProvider,$locationProvider){
		$routeProvider
		.when('/',{
			templateUrl: 'home/home.view.html',
			controller:'homeCtrl',
			controllerAs: 'vm'
		})
		.when('/events',{
			templateUrl: 'events/events.view.html',
			controller: 'eventCtrl',
			controllerAs: 'vm'
		})
		.when('/events/:eventid',{
			templateUrl: 'eventdetail/eventDetail.view.html',
			controller: 'eventdetailCtrl',
			controllerAs: 'vm'
		})
		.when('/gallery',{
			templateUrl: 'gallery/gallery.view.html',
			controller: 'galleryCtrl',
			controllerAs: 'vm'
		})
		.when('/clubs/:clubname',{
			templateUrl: '../clubdetail/club.view.html',
			controller: 'clubdetailCtrl',
			controllerAs: 'vm'
		})
		.when('/calendar',{
			templateUrl:'../calendar/calendar.view.html',
			controller: 'calendarCtrl',
			controllerAs: 'vm'
		})
		.otherwise({redirectTo:'/'});
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}

	angular
		.module('sangam')
		.config(['$routeProvider','$locationProvider',config]);
})();