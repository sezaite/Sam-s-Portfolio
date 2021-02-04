
import { albumData } from '../data/albumData.js';
import { renderAlbums } from './renderAlbums.js';

function workButtonCLick() {
    let HTML = "";
    const parent = document.querySelector('.container.work');
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
        }
    } else {
        console.log("There's nothing to load more");
        return false;
    }
    const reference = document.querySelector(".insertBefore");
    const element = document.createElement('div');
    element.className = "row";
    element.innerHTML = HTML;
    parent.insertBefore(element, reference);
}

export { workButtonCLick }