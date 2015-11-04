import angular from 'angular';
import {SvgSpriteDirective} from './svg-sprite.directive';
import './images/images';

let svgSpriteModule = angular.module('svgSprite', [
    'ui.router'
]);
svgSpriteModule.directive('svgSprite', SvgSpriteDirective);

export {svgSpriteModule};