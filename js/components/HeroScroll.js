import { isValidAlbumSelector, isValidAlbumData } from './isValidData.js';


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

        this.visibleArray = [];

        this.init();

    }

    init() {
        if (!this.isValidAlbumSelector()) {
            return false;
        }
        if (!this.isvalidData()) {
            return false;
        }
        this.generateHeroAlbums();
    }

    generateHeroAlbums() {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data.)
       
    } return true;
    }



    isValidAlbumSelector() {
        const selector = document.querySelector(this.selector);
        if (!selector) {
            console.error('Error: I cannot find a given selector in HTML file!');
            return false;
        }
        if (!isValidAlbumSelector(selector)) {
            return false;
        }
        this.DOM = selector;
        return true;
    }

    isValidData() {
        if (!isValidAlbumData(this.data)) {
            return false;
        }
        return true;
    }

}



export { HeroScroll }