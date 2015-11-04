import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import {SvgSpriteDirective} from './svg-sprite.directive';
import './svg-sprite.assets.js';
import './svg-sprite.css';

let svgSpriteModule = angular.module('svgSprite', [
    angularUiRouter
]);
svgSpriteModule.directive('svgSprite', SvgSpriteDirective);

export {svgSpriteModule};