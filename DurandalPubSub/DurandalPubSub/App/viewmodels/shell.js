define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function () {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title: 'Standard Publisher / Subscriber', moduleId: 'viewmodels/pubsubstandard', nav: true },
                { route: 'PubSubWithModals', title: 'Publisher / Subscriber + Modals', moduleId: 'viewmodels/pubsubmodal', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});