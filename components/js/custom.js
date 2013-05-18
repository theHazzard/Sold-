(function (){
	window.App = {
		Models: {},
		Collections: {},
		Views: {},
		Router: {}
	};

	var vent = _.extend({}, Backbone.Events);
	console.log(vent);
	window.template = function (id) {
		return _.template($('#' + id).html());
	};

	App.Router = Backbone.Router.extend({
		routes: {
			'':'index',
			'show': 'show'
		},
		
		index: function () {
			console.log('index!');
		},

		show: function () {
			console.log('show route');
		}
	});

	new App.Router;
	Backbone.history.start();

})();