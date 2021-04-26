function renderAlbums(album) {
    console.log('albumai');
    let HTML = "";
    HTML += `<div class="album-art" style ="background-image: url('img/${album.imgLink}');">
    
            <div class="blur" style ="background-image: url('img/${album.imgLink}');"></div>
            <div class="project-wrap">
                ${generateTitles(album.titles)}
                <div class='spotify-wrap'><div class='spotify-play pressed'></div><div class='spotify-pause'></div></div>
                <p>${album.description}<a href="#">Read more...</a></p>
                </div>
            </div>`;
    return HTML;
}

// <iframe ${album.spotifyLink}></iframe>

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