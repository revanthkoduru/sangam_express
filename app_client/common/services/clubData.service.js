(function(){
	angular
		.module('sangam')
		.service('clubData',clubData);

	clubData.$inject = ['$http'];
	function clubData($http){
		var clubDataById = function(clubname){
			return $http.get('/api/clubs/'+clubname);
		};
		return {
			clubDataById: clubDataById
		};
	};	
})();