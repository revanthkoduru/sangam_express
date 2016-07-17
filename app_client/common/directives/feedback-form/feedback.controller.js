(function(){
	angular
		.module('sangam')
		.controller('feedbackCtrl',feedbackCtrl);

	feedbackCtrl.$inject = ['feedbackData']
	function feedbackCtrl(feedbackData){
		this.onSubmit = function(){
			this.doAddReview(this.formData);
		};
		this.doAddReview = function(formData){
			feedbackData.addFeedback({
				name: formData.name,
				email: formData.email,
				category: formData.club,
				event: formData.event,
				rating: formData.rating,
				review: formData.review
			}).success(function(data){
				console.log('success');
			})
			.error(function(data){
				console.log("error")
			});
			return false;
		};
	}
})();