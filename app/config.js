function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('facebook', {
            url: "/facebook",
            templateUrl: "views/facebook.html"
        }).state('google', {
            url: "/google",
            templateUrl: "views/google.html"
        }).state('twitter', {
            url: "/twitter",
            templateUrl: "views/twitter.html"
        });
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export {config};