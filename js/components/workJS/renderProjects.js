import { albumData } from '../../data/albumData.js';

function generateWorkProjects(selector) {
    if (!selector) {
        console.error('There is no such selector!');
    }
    console.log(selector);
    const DOM = document.querySelector('#work-page-projects');
    console.log(DOM);
    let HTML = '';
    for (let album of albumData) {
        HTML += `<section class="container work-item">
    <div class="row">
        <div class="col-4 col-lg-3 work-left">
            <img src="../../img/${album.imgLink}" alt="album_art">
            <h3>${album.name}</h3>
        </div>
        <div class="col-8 work-right">
            <h5 class="date">${album.date}</h5>
            <h5> ${album.header}</h5>
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





export { generateWorkProjects };