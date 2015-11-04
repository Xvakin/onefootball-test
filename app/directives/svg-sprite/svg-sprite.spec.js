import angular from 'angular';
import {svgSpriteModule} from './svg-sprite.js';
import {config} from '../../config.js';

describe('svg-sprite directive', function () {
    let $scope, $element, $state, $window;

    beforeEach(angular.mock.module('test'));

    beforeEach(() => {
        angular.module('test', [svgSpriteModule.name]).config(config);
    });

    beforeEach(angular.mock.inject($injector => {
        $state = $injector.get('$state');
        $window = $injector.get('$window');
        $scope = $injector.get('$rootScope').$new(true);
        $element = $injector.get('$compile')(angular.element('<svg-sprite symbol-id="facebook"></svg-sprite>'))($scope);
        $scope.$digest();
    }));

    it('should have active class on click', () => {
        expect($element.hasClass('is-active')).toBe(false);
        $element.triggerHandler('click');
        expect($element.hasClass('is-active')).toBe(true);
    });

    it('should change route on click', () => {
        $element.triggerHandler('click');
        expect($state.current.name).toEqual('facebook');
    });
});