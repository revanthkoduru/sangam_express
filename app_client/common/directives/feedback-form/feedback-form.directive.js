(function(){
	angular
		.module('sangam')
		.directive('feedback',feedback);

	function feedback(){
		return{
			restrict: 'EA',
			templateUrl: '/common/directives/feedback-form/feedback-form.template.html',
			controller: 'feedbackCtrl',
			controllerAs: 'fb'
		};
	}
})();