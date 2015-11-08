// svg-sprite directive controller
class SvgSpriteController {
    constructor($state) {
        this.$state = $state;
    }

    onClick() {
        this.$state.go(this.symbolId);
    }

    isActive() {
        return this.$state.current.name === this.symbolId;
    }
}

SvgSpriteController.$inject = ['$state'];

export {SvgSpriteController};