
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

function workButtonCLick() {
    if (list.clientHeight < container.clientHeight) {
        console.log('yes list is shorter than container');
        console.log(list.clientHeight);
        list.setAttribute("style", `height: ${list.clientHeight + 300}px;`);
    }
    else {
        console.log('list is bigger than container now');
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

export { workButtonCLick }