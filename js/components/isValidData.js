import { DataValidator } from '../renderAlbums/DataValidator.js';

function isValidAlbumSelector(selector) {
    if (!DataValidator.isSelector(selector)) {
        return false;
    }
    return true;
}

function isValidAlbumData(data) {
    if (!DataValidator.isArray(data)) {
        return false;
    }
    const count = data.length;
    for (let i = 0; i < count; i++) {
        const album = data[i];
        if (!isValidAlbum(album)) {
            continue;
        }
    } return true;
}


function isValidAlbum(album) {
    if (!DataValidator.isObject(album)) {
        return false;
    }

    if (!DataValidator.isImageFile(album.imgLink)) {
        return false;
    }
    if (!DataValidator.isArray(album.titles)) {
        return false;
    }
    if (!DataValidator.isDescription(album.description)) {
        return false;
    }
    if (!DataValidator.isSpotify(album.spotifyLink)) {

        return false;
    }

    return true;
}

export { isValidAlbumSelector, isValidAlbumData }