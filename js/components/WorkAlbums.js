import { isValidAlbumSelector, isValidAlbumData } from './isValidData.js';
import { renderAlbums } from './renderAlbums.js';

class WorkAlbums {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];

        this.loadedAlbums = 0;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
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
            return false;
        }
        const reference = document.querySelector(".insertBefore");
        const element = document.createElement('div');
        element.className = "row";
        element.innerHTML = HTML;
        this.DOM.insertBefore(element, reference);
    }

    isValidSelector() {
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