define(['durandal/app', 'knockout'], function (app, ko) {

    var childPanel = function() {
        var self = this;
        self.customers = ko.observableArray([]);
        self.messageHandler = function(eventArgs) {
            self.customers(eventArgs.customers());
        };
        self.activate = function() {
            app.on('myevent.showCustomers',self.messageHandler);
        };
    }

    return childPanel;
});