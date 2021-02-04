
import { albumData } from '../data/albumData.js';
import { renderAlbums } from './renderAlbums.js';

const parent = document.querySelector('.container.work');
const button = document.querySelector('.container.work .btn');

function workButtonCLick() {
    let HTML = "";
    const displayedAlbums = document.querySelectorAll(".container.work .project");
    console.log(displayedAlbums.length);
    console.log(albumData.length);
    let a = displayedAlbums.length;
    let b = displayedAlbums.length + 3;
    if (albumData.length > displayedAlbums.length) {
        if (albumData.length - displayedAlbums.length > 3) {
            for (let i = a; i < b; i++) {
                HTML += `<div class="col-4">${renderAlbums(albumData[i])}</div>`
            }
        } else {
            for (let i = displayedAlbums.length; i < albumData.length; i++) {
                HTML += `<div class="col-4">${renderAlbums(albumData[i])}</div>`
            }
            button.innerText = "Collapse";
            button.removeEventListener('click', workButtonCLick)
            button.addEventListener('click', collapse);
        }
    }

    else {
        console.log("There's nothing to load more");


    }

    const reference = document.querySelector(".insertBefore");
    const element = document.createElement('div');
    element.className = "row new";
    element.innerHTML = HTML;
    parent.insertBefore(element, reference);

    scroll({
        behavior: 'smooth',
        top: (button.offsetTop + button.clientHeight + 40) - innerHeight,
    })

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