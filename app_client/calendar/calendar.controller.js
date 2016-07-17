(function(){
	angular
		.module('sangam')
		.controller('calendarCtrl',calendarCtrl);

	function calendarCtrl(){
		this.eventSources = [{title: 'All Day Event',start: new Date('Sun Jul 17 2016 09:00:00 GMT+0530 (IST)')},];
		this.uiConfig = {
      		calendar : {
            editable : true,
            header : {
                right : 'prev,next,today',
                center : 'title',
            	left : 'month,agendaWeek,agendaDay'
                }
            }
        };
	};
   
})();