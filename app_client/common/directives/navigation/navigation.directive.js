(function(){
	angular
		.module('sangam')
		.directive('navigation',navigation);

	function navigation(){
		return{
			restrict: 'EA',
			templateUrl: '/common/directives/navigation/navigation.template.html'
		};
	}
})();