import { isValidAlbumSelector, isValidAlbumData } from '../components/isValidData.js';


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
        console.log('pradesiu ivykius')
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
        console.log(selectors);

        return true;
    }

    isValidData() {
        if (!isValidAlbumData(this.data)) {
            return false;
        }
        return true;
    }

    // addEvents() {
    //     console.log('pradedu nuuuuuuuuu')
    //     for (let i = 0; i < this.projectsList.length; i++) {
    //         console.log(this.projectsList[i]);
    //         let p = this.projectsList[i];
    //         p.addEventListener('mouseenter', () => {

    //             console.log('atejau');
    //             this.hover(i);
    //         })
    //     }
    // }

    // hover(projectIndex) {
    //     const project = this.projectsList[projectIndex];
    //     project.classList.add('visable');
    // }



    hover() {
        const albums = document.querySelectorAll(".project");
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


        // blurLayers.forEach((layer) => {
        //     console.log('latadsgadsfasdS');
        //     layer.addEventListener("mouseover", function () {
        //         layer.classList.add('visible');
        //         console.log('atejau')
        //     });
        //     layer.addEventListener("mouseover", function () {
        //         layer.classList.remove('visible');
        //         console.log('isejau')
        //     });
        // });
    }
}



export { HoverFx };