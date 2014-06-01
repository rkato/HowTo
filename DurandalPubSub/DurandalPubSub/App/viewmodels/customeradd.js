define(['durandal/app', 'knockout', 'plugins/dialog'], function (app, ko, dialog) {

    var name = ko.observable('Ronald'),
        email = ko.observable(''),
        title = 'Add Customer',
        cancel = function() {
           dialog.close(this);
        },
        add = function () {
            var data =  { name: name(), email: email }
            app.trigger('myevent.newCustomers', { customer: data });
            dialog.close(this);
        }
        
    var vm = {
        name: name,
        email: email,
        cancel: cancel,
        add: add,
        title: title
    }

    return vm;

});