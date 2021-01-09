class HoverFx {
    constructor(params) {
        this.selector = params.selector;
        this.DOM = null;
        this.init();
    }

    init() {
        if (!this.isValidSelector) {
            return false;
        }
    }

    isValidSelector() {
        const selector = document.querySelector(this.selector);
        if (!selector) {
            console.error('Error: I cannot find a given selector in HTML file!');
            return false;
        }
        this.DOM = selector;
        return true;
    }
}


export { HoverFx };