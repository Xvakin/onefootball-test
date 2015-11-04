import 'normalize.css'
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import {svgSpriteModule} from './directives/svg-sprite/svg-sprite.js'
import {config} from './config.js'

angular.module('app', [
    angularUiRouter,
    svgSpriteModule.name
]);

angular.module('app').config(config);

angular.bootstrap(document.getElementById('app'), ['app']);