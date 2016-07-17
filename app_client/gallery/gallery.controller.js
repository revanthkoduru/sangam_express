(function(){
	angular
		.module('sangam')
		.controller('galleryCtrl',galleryCtrl);

	function galleryCtrl(){
		var self = this;
		self.tab = 'nothing';
	};
})();