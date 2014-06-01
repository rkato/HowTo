define(['durandal/app', 'knockout'], function (app, ko) {

    var vm = function() {
        var self = this;

        self.customers = ko.observableArray([]);
        self.addCustomer = function () {
            app.showDialog('viewmodels/customeradd').then(function() {

            });
        }

        self.messageHandler = function (eventArgs) {
            self.customers.push(eventArgs.customer);
        };

        self.activate = function() {
            app.on('myevent.newCustomers', self.messageHandler);
        }
    }

    return vm;
});
