import { blogData } from '../data/blogData.js';
import { renderArticles } from './renderArticles.js';

const parent = document.querySelector('.container.other-blogs');
if (!parent) {
    console.error("Error: cannnot find parent element");
}
const button = document.querySelector('.container.other-blogs .btn');
if (!button) {
    console.error("Error: cannnot find button element");
}
const list = document.querySelector('.container.other-blogs .row.list');
if (!list) {
    console.error("Error: cannnot find list element");
}

let loadedElements = null;

function checkViewport(howManyLeft) {
    if (howManyLeft > 5) {
        if (innerWidth > 1080) {
            return loadedElements.length % 2 == 0 ? 4 : 3;
        } else if (innerWidth > 680) {
            return loadedElements.length % 2 == 0 ? 2 : 3;
        } else {
            return 2;
        }
    } else {
        button.innerText = "Collapse";
        button.removeEventListener('click', generateArticleRow)
        button.addEventListener('click', collapse);
        return howManyLeft;
    }
}
function generateArticleRow() {
    loadedElements = list.querySelectorAll('.other-blogs .article');
    if (!loadedElements) {
        console.error('Error: something went wrong with your article list');
    }
    console.log(loadedElements.length);
    console.log(blogData.length);
    let HTML = list.innerHTML;
    if (loadedElements.length < blogData.length) {
        const whereToStart = loadedElements.length;
        const howManyLeft = blogData.length - whereToStart;
        const howManyToLoad = loadedElements.length + checkViewport(howManyLeft);
        for (let i = whereToStart; i < howManyToLoad; i++) {
            HTML += `<div class="article-column col-lg-4 col-3 col-md-6 col-xs-12">${renderArticles(blogData[i])}</div>`;
        }
    }
    list.innerHTML = HTML;
    scroll({
        behavior: 'smooth',
        top: (button.offsetTop + button.clientHeight + 40) - innerHeight,
    });
}

function collapse() {
    const collapsedBlogs = checkViewport(6);
    let collapsedHTML = '';
    for (let i = 0; i < collapsedBlogs; i++) {
        collapsedHTML += `<div class="article-column col-lg-4 col-3 col-md-6 col-xs-12">${renderArticles(blogData[i])}</div>`;
    }
    list.innerHTML = collapsedHTML;

    button.removeEventListener('click', collapse);
    button.addEventListener('click', generateArticleRow);
    button.innerText = "Load more";
    button.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    });
}


export { generateArticleRow };