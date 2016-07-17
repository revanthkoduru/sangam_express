(function(){
	angular
		.module('sangam')
		.controller('clubdetailCtrl',clubdetailCtrl);

	clubdetailCtrl.$inject = ['$routeParams','clubData','eventData']
	function clubdetailCtrl($routeParams,clubData,eventData){
		var self = this;
		self.clubname = $routeParams.clubname;
		clubData.clubDataById(self.clubname)
			.success(function(data){
				self.clubdata = data;
		})
		.error(function(e){
			console.log(e);
		});
		eventData.eventlist()
			.success(function(data){
				self.events = data;
			})
			.error(function(e){
				console.log(e);
		});
		self.members = [
		{'name':'Name', 'position':'Position','img':'../common/images/team2.png','desc':'description'}];
	};
})();