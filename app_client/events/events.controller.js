(function(){
	angular
		.module('sangam')
		.controller('eventCtrl',eventCtrl);

	eventCtrl.$inject =['$uibModal','eventData'];
	function eventCtrl($uibModal,eventData){
		var self = this;
		self.title = 'events';
		eventData.eventlist()
			.success(function(data){
				self.events = data;
			})
			.error(function(e){
				console.log(e);
			});
		self.legend ="Know all the activities going on";
	};	
})();