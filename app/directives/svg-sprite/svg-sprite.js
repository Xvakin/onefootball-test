import angular from 'angular';
import {SvgSpriteDirective} from './svg-sprite.directive';
import './svg-sprite.assets.js';

let svgSpriteModule = angular.module('svgSprite', [
    'ui.router'
]);
svgSpriteModule.directive('svgSprite', SvgSpriteDirective);

export {svgSpriteModule};