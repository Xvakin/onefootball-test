import './svg-sprite.css';
import template from './svg-sprite.html';
import {SvgSpriteController as controller} from './svg-sprite.controller';

let SvgSpriteDirective = function(){
    return {
        bindToController: true,
        controller,
        controllerAs: 'svgSpriteCtrl',
        restrict: 'E',
        replace: true,
        scope: {
            symbolId: '@'
        },
        template
    };
};

export {SvgSpriteDirective};