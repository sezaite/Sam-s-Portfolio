import { DataValidator } from '../renderAlbums/DataValidator.js';


class HeroScroll {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.pseudoCount = params.pseudoCount || 2;
        this.areDotsVisible = params.areDotsVisible;

        this.DOM = null;
        this.listDOM = null;
        this.controlsDOM = null;
        this.dotsDOM = null;
        this.activeDotIndex = 0;

        this.init();

    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        if (!this.isValidData()) {
            return false;
        }
    }

    isValidSelector() {
        if (!DataValidator.isArray(this.selector)) {
            return false;
        }
        if (!DataValidator.isSelector(this.selector)) {
            return false;
        }
        return true;
    }

    isValidData() {

    }

}

export { HeroScroll }