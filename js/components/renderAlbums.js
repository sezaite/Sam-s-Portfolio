function renderAlbums(album) {
    let HTML = "";
    HTML += `<div class="project" style ="background-image: url('img/${album.imgLink}');">
            <div class="blur" style ="background-image: url('img/${album.imgLink}');"></div>
            <div class="project-wrap">
                ${generateTitles(album.titles)}
                <p>${album.description}</p>
                <iframe ${album.spotifyLink}></iframe>
                </div>
            </div>`;
    console.log(HTML);
    return HTML;
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

export { renderAlbums };