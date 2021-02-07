
import { albumData } from '../data/albumData.js';
import { renderAlbums } from './renderAlbums.js';
import { HoverFx } from '../renderAlbums/HoverFx.js';

const parent = document.querySelector('.container.work');
if (!parent) {
    console.error("Error: cannnot find parent element");
}
const button = document.querySelector('.container.work .btn');
if (!button) {
    console.error("Error: cannnot find button element");
} else {
    console.log(button);
}
const list = document.querySelector('.container.work .list.row');
if (!list) {
    console.error("Error: cannnot find list element");
} else {
    console.log(list);
}
const container = document.querySelector('.container.row');
if (!container) {
    console.error("Error: cannnot find container element");
} else {
    console.log(container);
}

const loadedElements = list.querySelectorAll('.project');
const albumsPlacement = this.DOM.querySelector('.col-12.row.list');

function workButtonCLick() {
    let HTML = albumsPlacement.innerHTML;
    console.log(HTML);
    if (loadedElements.length < albumData.length) {
        const whereToStart = loadedElements.length;
        const howManyToLoad = loadedElements.length + howManyToLoad();
        for (let i = whereToStart; i < howManyToLoad; i++) {
            HTML += `<div class="project-column col-lg-4 col-3 col-md-6 col-xs-12">${renderAlbums(this.data[i])}</div>`;
        }

    } else {
        button.innerText = "Collapse";
        button.removeEventListener('click', workButtonCLick)
        button.addEventListener('click', collapse);
    }

    scroll({
        behavior: 'smooth',
        top: (button.offsetTop + button.clientHeight + 40) - innerHeight,
    });

    new HoverFx({
        selector: '.project-wrap',
        data: albumData,
    });
}

function collapse() {
    const allRows = document.querySelectorAll('.new');
    for (let i = 0, len = allRows.length; i < len; i++) {
        parent.removeChild(allRows[i]);
    }
    button.removeEventListener('click', collapse);
    button.addEventListener('click', workButtonCLick);
    button.innerText = "Load more";
    button.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}

function howManyToLoad() {
    if (innerWidth > 1300) {
        if (loadedElements.length % 2 == 0) {
            return 4;
        } else {
            return 5;
        }
    } else if (innerWidth > 1080) {
        if (loadedElements.length % 2 == 0) {
            return 4;
        } else {
            return 3;
        }
    } else if (innerWidth > 680) {
        if (loadedElements.length % 2 == 0) {
            return 2;
        } else {
            return 3;
        }
    } else {
        return 2;
    }
}

export { workButtonCLick }