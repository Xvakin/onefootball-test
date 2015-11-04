import angular from 'angular';
import {svgSpriteModule} from './directives/svg-sprite/svg-sprite.js'
import './assets/svg/svg'

angular.module('app', [
    svgSpriteModule.name
]);

angular.bootstrap(document.getElementById('app'), ['app']);