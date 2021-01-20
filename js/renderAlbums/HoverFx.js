import { isValidAlbumSelector, isValidAlbumData } from '../components/isValidData';


class HoverFx {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.DOM = null;
        this.init();
    }


    init() {
        if (!this.isValidAlbumSelector()) {
            return false;
        }
        if (!this.isvalidData()) {
            return false;
        }
        return true;
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

export { HoverFx };