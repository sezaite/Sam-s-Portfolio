import { blogData } from '../data/blogData.js';
import { renderArticles } from './renderArticles.js';

const parent = document.querySelector('.container.other-blogs');
if (!parent) {
    console.error("Error: cannnot find parent element");
}
const button = document.querySelector('.container.other-blogs .btn');
if (!button) {
    console.error("Error: cannnot find button element");
} else {
    console.log(button);
}
const list = document.querySelector('.container.other-blogs .row.list');
if (!list) {
    console.error("Error: cannnot find list element");
} else {
    console.log(list);
}

const loadedElements = list.querySelectorAll('.other-blogs .article');

function checkViewport() {
    if (innerWidth > 1300) {
        if (loadedElements.length % 2 == 0) {
            return 4;
        } else {
            return 5;
        }
    } else if (innerWidth > 1080) {
        if (loadedElements.length % 2 == 0) {
            return 4;
        } else {
            return 3;
        }
    } else if (innerWidth > 680) {
        if (loadedElements.length % 2 == 0) {
            return 2;
        } else {
            return 3;
        }
    } else {
        return 2;
    }
}

function generateArticleRow() {
    let HTML = list.innerHTML;
    console.log(HTML);
    if (loadedElements.length < blogData.length) {
        const whereToStart = loadedElements.length;
        const howManyToLoad = loadedElements.length + checkViewport();
        for (let i = whereToStart; i < howManyToLoad; i++) {
            HTML += `<div class="article-column col-lg-4 col-3 col-md-6 col-xs-12">${renderArticles(blogData[i])}</div>`;
        }
    } else {
        button.innerText = "Collapse";
        button.removeEventListener('click', workButtonCLick)
        button.addEventListener('click', collapse);
    }
    list.innerHTML = HTML;
    scroll({
        behavior: 'smooth',
        top: (button.offsetTop + button.clientHeight + 40) - innerHeight,
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


export { generateArticleRow }