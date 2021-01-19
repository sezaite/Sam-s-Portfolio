import { DataValidator } from './DataValidator.js'


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
        if (!this.validAlbumData()) {
            return false;
        }
        return true;
    }



    isValidAlbumSelector() {
        const selector = document.querySelector(this.selector);
        if (!DataValidator.isSelector(selector)) {
            return false;
        }
        if (!selector) {
            console.error('Error: I cannot find a given selector in HTML file!');
            return false;
        }
        this.DOM = selector;
        return true;
    }

    isValidAlbumData() {
        if (!DataValidator.isArray(this.data)) {
            return false;
        }

        const count = this.data.length;
        for (let i = 0; i < count; i++) {
            const album = this.data[i];
            if (!isValidAlbum(album)) {
                continue;
            }
        }
    }
    isValidAlbum(album) {
        if (!DataValidator.isObject(album)) {
            return false;
        }

        if (!DataValidator.isImageFile(album.imgLink)) {
            return false;
        }
        if (!DataValidator.isArray(album.titles)) {
            return false;
        }
        if (!DataValidator.isDescription(album.description)) {
            return false;
        }
        if (!DataValidator.isSpotify(album.spotifyLink)) {

            return false;
        }

        return true;
    }
}


export { HoverFx };