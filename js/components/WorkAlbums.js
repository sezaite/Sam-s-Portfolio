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
        for (let i = 0; i < this.howManyAlbums(); i++) {
            HTML += `<div class="project-column col-lg-4 col-3 col-md-6 col-xs-12">${renderAlbums(this.data[i])}</div>`;
            this.loadedAlbums += this.howManyAlbums();
        }
        if (!HTML) {
            console.error("I could not generate hTML content for albums in Work Section!");
            return false;
        }
        const albumsPlacement = this.DOM.querySelector('.col-12.row.list');
        if (!albumsPlacement) {
            console.error("Error: I cannot find where to place albums in your index Work section");
            return false;
        }
        albumsPlacement.innerHTML = HTML;
    }

    howManyAlbums() {
        if (innerWidth > 1300) {
            return 4;
        } else if (innerWidth > 1080) {
            return 3;
        } else if (innerWidth > 680) {
            return 2;
        } return 1;
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