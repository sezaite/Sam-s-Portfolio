import { albumData } from '../data/albumData.js';

function generateWorkProjects(selector) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (let album of albumData) {
        HTML += `<section class="container work-item">
    <div class="row">
        <div class="col-4 col-lg-3 work-left">
            <img src="${album.imgLink}" alt="album_art">
            <h3>${album.name}</h3>
        </div>
        <div class="col-8 work-right">
            <h5 class="date">${album.date}</h5>
            <h5> ${generateTitles(album.titles)}</h5>
            <p class="work-projects">
                ${album.p}</a>
            </p>
            <iframe ${album.spotifyLink}></iframe>
        </div>
    </div>
</section>`
    }
    if (!HTML) {
        console.error('Error: failed to generate Albums HTML');
        return false;
    } else {
        DOM.innerHTML = HTML;
    }
}
function generateTitles(titles) {
    let HTML = "";
    for (let i = 0; i < titles.length; i++) {
        HTML += `<h4>${titles[i]}</h4>`;
    }
    if (!HTML) {
        console.error('Error: Could not generate items of an album');
        return false;
    } return HTML;
}




export { generateWorkProjects };