(function(){
	angular
		.module('sangam')
		.controller('eventdetailCtrl', eventdetailCtrl);

	eventdetailCtrl.$inject =['$routeParams','eventData'];
	function eventdetailCtrl($routeParams,eventData){
		var self = this;
		self.eventid = $routeParams.eventid;
		eventData.eventById(self.eventid)
			.success(function(data){
				self.eventdata = data;
				console.log('success');
			})
			.error(function(e){
				console.log(e);
			});
	};
})();