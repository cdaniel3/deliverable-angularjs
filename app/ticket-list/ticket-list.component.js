angular.
	module('ticketList').
	component('ticketList', {
		templateUrl: 'ticket-list/ticket-list.template.html',
		controller: ['$http',
			function TicketListController($http) {
				var self = this;
				$http.get('../tickets.json').then(function(response) {
					self.tickets = response.data;
				});
			}
		]
	});
