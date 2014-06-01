define(['durandal/app', 'knockout'], function (app, ko) {
    
    var mainpanel = function() {
        var self = this;

        self.customers = ko.observableArray([{ name: 'Ronald' }, { name: 'Isaac' }, { name: 'Stuart' }]);
        self.sendMessage = function() {
            app.trigger('myevent.showCustomers', { customers: self.customers });
        }
    }

    return mainpanel;

});