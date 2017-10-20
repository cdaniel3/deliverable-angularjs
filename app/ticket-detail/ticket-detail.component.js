angular.
	module('ticketDetail').
	component('ticketDetail', {
		templateUrl: 'ticket-detail/ticket-detail.template.html',
		controller: ['$http', '$routeParams', function TicketDetailController($http, $routeParams) {
			var self = this;
			// /deliverable-ws/tickets/1
			$http.get('../ticket1.json').then(function(response) {
				self.ticket = response.data;
			});
		}
	]
});
