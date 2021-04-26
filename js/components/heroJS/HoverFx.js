import { isValidAlbumSelector, isValidAlbumData } from '../../components/isValidData.js';

class HoverFx {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.projectsList = null;
        this.init();
    }

    init() {
        if (!this.isValidAlbumSelector()) {
            return false;
        }
        if (!this.isValidData()) {
            return false;
        }
        this.hover();
    }

    isValidAlbumSelector() {
        const selectors = document.querySelectorAll(this.selector);
        if (!selectors) {
            console.error('Error: I cannot find any of given selectors in HTML file!');
            return false;
        }
        if (!isValidAlbumSelector(this.selector)) {
            return false;
        }
        this.projectsList = selectors;

        return true;
    }

    isValidData() {
        if (!isValidAlbumData(this.data)) {
            return false;
        }
        return true;
    }

    hover() {
        const albums = document.querySelectorAll(".album-art");
        albums.forEach((album) => {
            const wrap = album.querySelector(".project-wrap");
            const blur = album.querySelector(".blur");
            album.addEventListener("mouseenter", function () {
                wrap.classList.add('visible');
                blur.classList.add('visible');
            });
            album.addEventListener("mouseleave", function () {
                wrap.classList.remove('visible');
                blur.classList.remove('visible');
            });

        });
    }
}

export { HoverFx };