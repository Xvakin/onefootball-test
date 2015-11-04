import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import {svgSpriteModule} from './directives/svg-sprite/svg-sprite.js'
import {config} from './config.js'
import './assets/svg/svg'
import 'normalize.css'

angular.module('app', [
    'ui.router',
    svgSpriteModule.name
]);

angular.module('app').config(config);

angular.bootstrap(document.getElementById('app'), ['app']);