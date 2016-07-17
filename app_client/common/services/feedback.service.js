(function(){
	angular
		.module('sangam')
		.service('feedbackData',feedbackData);

	feedbackData.$inject = ['$http'];
	function feedbackData($http){
		var addFeedback= function(data){
			return $http.post('/api/feedback/',data);
		}
		return {
			addFeedback: addFeedback
		};
	};	
})();