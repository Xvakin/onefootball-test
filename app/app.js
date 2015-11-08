import 'normalize.css'
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import {svgSpriteModule} from './directives/svg-sprite/svg-sprite.js'
import {config} from './config.js'

// Decalre main app module and dependecies
angular.module('app', [
    angularUiRouter,
    svgSpriteModule.name
]);

// Module config
angular.module('app').config(config);

// Bootstrap the app at #app dom element
angular.bootstrap(document.getElementById('app'), ['app']);