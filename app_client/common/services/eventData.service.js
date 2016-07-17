(function(){
	angular
		.module('sangam')
		.service('eventData',eventData);

	eventData.$inject = ['$http'];
	function eventData($http){
		var eventlist = function(){
			return $http.get('/api/events');
		};
		var eventById = function(eventid){
			return $http.get('/api/events/'+eventid);
		};
		return {
			eventlist: eventlist,
			eventById: eventById
		};
	};	
})();