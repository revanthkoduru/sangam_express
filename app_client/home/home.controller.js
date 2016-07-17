(function(){
	angular
		.module('sangam')
		.controller('homeCtrl',homeCtrl);

	homeCtrl.$inject=['eventData'];
	function homeCtrl(eventData){
		var self = this;
		self.title = 'Sangam';
		self.latestNews= {
			'section_title':'latest News',
			'section_legend':'Find out all the latest news about culturals here',
			'news':[
			{'title':'Event-1','Category':'club-1','description':'The kickstart Event','img':'common/images/blank-latestposts.png'},
			{'title':'Event-2','Category':'club-2','description':'The second Event','img':'common/images/blank-latestposts.png'},
			{'title':'Event-3','Category':'club-3','description':'The third Event','img':'common/images/blank-latestposts.png'},
			{'title':'Event-4','Category':'club-3','description':'The third Event','img':'common/images/blank-latestposts.png'},
		]};
		self.aboutUs = {
			'section_title':'about us',
			'section_legend': 'Know who we are and what we do',
			'content':[
			{'title':'Who are we?', 'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut erosLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut eros.'	},
			{'title':'What do we do?','desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut erosLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper sollicitudin. Proin a leo sit amet nunc malesuada imperdiet pharetra ut eros.'}
		]};
		self.team = {
			'section_title':'Team',
			'section_legend':'Know who are we',
			'members':[
			{'name':'Name', 'position':'position', 'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, eros at accumsan auctor, felis eros condimentum quam, non porttitor est urna vel neque','img':'common/images/team2.png'},
			{'name':'Name', 'position':'position', 'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, eros at accumsan auctor, felis eros condimentum quam, non porttitor est urna vel neque','img':'common/images/team2.png'},
			{'name':'Name', 'position':'position', 'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, eros at accumsan auctor, felis eros condimentum quam, non porttitor est urna vel neque','img':'common/images/team2.png'},
			{'name':'Name', 'position':'position', 'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, eros at accumsan auctor, felis eros condimentum quam, non porttitor est urna vel neque','img':'common/images/team2.png'}			
			]
		}
	};	
})();