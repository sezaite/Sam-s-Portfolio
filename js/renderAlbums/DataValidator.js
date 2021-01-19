class DataValidator {

    // VALIDATIONS FOR ALL ALBUM DATA:

    static isSelector(text) {
        if (typeof text !== 'string' ||
            text === '') {
            console.error('Error: selector type must be not an empty string!');
            return false;
        }
        return true;
    }

    static isArray(array) {
        if (!Array.isArray(array) ||
            array.length === 0) {
            console.error('Error: your data type has to be not an empty array!');
            return false;
        }
        return true;
    }

    //VALIDATIONS FOR SINGLE ALBUMS:

    static isObject(object) {
        if (typeof object !== 'object' ||
            Array.isArray(object) ||
            object === null) {
            console.error('Error: your data element must be an object type!');
            return false;
        }
        return true;
    }

    static isImageFile(text) {
        const validExtension = ['png', 'jpg', 'gif', 'jpeg'];
        if (typeof text !== 'string' ||
            text.length < 5 ||
            text.length > 100 ||
            text[0] === '.' ||
            text[text.length - 1] === '.') {
            console.error('Error: img link has to be between 5 and 100 symbols long, the first or the last symbol cannot be a dot');
            return false;
        }
        const parts = text.split('.');


        if (parts.length !== 2) {
            console.error('Error: there are more than one dot in your img link');
            return false;
        }
        if (!validExtension.includes(parts[1])) {
            console.error('Error: the link is not png jpg gif or jpeg type!');
            return false;
        }
        return true;
    }

    //if there's going to be any links in the album section:

    static isHref(href) {
        if (typeof href !== 'string' ||
            href === '') {
            return false;
        }
        return true;
    }

    // static isTitle(text) {
    //     if (typeof text !== 'string' ||
    //         text === '' ||
    //         text.length > 100) {
    //         return false;
    //     }
    //     return true;
    // }

    static isDescription(text) {
        const descriptionLimit = 500;
        if (typeof text !== 'string' ||
            text === '' ||
            text.length > descriptionLimit) {
            console.error(`Error: description has to be a string, cannot be empty, must contain less than ${descriptionLimit} symbols`);
            return false;
        }

        return true;
    }
}


export { DataValidator }