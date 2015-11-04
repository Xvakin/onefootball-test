import angular from 'angular';
import {SvgSpriteDirective} from './svg-sprite.directive.js';

let svgSpriteModule = angular.module('svgSprite', []);
svgSpriteModule.directive('svgSprite', SvgSpriteDirective);

export {svgSpriteModule};