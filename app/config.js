// App routing
import facebookView from './views/facebook.html'
import googleView from './views/google.html'
import twitterView from './views/twitter.html'

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('facebook', {
            url: '/facebook',
            template: facebookView
        }).state('google', {
            url: '/google',
            template: googleView
        }).state('twitter', {
            url: '/twitter',
            template: twitterView
        });
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export {config};