import { isValidAlbumSelector, isValidAlbumData } from '../isValidData.js';

class SpotifyButtonToggle {
    constructor({ selector, data }) {
        this.selector = selector;
        this.data = data;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        if (!this.isValidData()) {
            return false;
        }
        this.buttonClick();
    }


    isValidSelector() {
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

    buttonClick() {
        const songs = document.querySelectorAll(".spotify-wrap");
        songs.forEach((song) => {
            song.addEventListener("click", function () {
                let playBtn = song.querySelector('.spotify-play');
                let pauseBtn = song.querySelector('.spotify-pause');
                if (pauseBtn.classList.contains("pressed")) {
                    playBtn.classList.add("pressed");
                    pauseBtn.classList.remove("pressed");

                } else {
                    playBtn.classList.remove("pressed");
                    pauseBtn.classList.add("pressed");
                }

            });
        })


    }
}

export { SpotifyButtonToggle }