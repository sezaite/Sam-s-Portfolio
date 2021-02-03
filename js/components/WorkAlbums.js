import { isValidAlbumSelector, isValidAlbumData } from './isValidData.js';
import { renderAlbums } from './renderAlbums.js';

class WorkAlbums {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidAlbumSelector()) {
            return false;
        }
        if (!isValidAlbumData(this.data)) {
            return false;
        }
        this.render();
    }

    render() {
        let HTML = "";
        for (let i = 0; i < 3; i++) {
            HTML += `<div class="col-4">${renderAlbums(this.data[i])}</div>`;
        }
        if (!HTML) {
            console.error("I could not generate hTML content for albums in Work Section!");
        }
        this.DOM.innerHTML = HTML;
    }


    isValidAlbumSelector() {
        const selector = document.querySelector(this.selector);
        if (!selector) {
            console.error('Error: I cannot find a given selector in HTML file!');
            return false;
        }
        if (!isValidAlbumSelector(this.selector)) {
            return false;
        }
        this.DOM = selector;
        return true;
    }
}

export { WorkAlbums };