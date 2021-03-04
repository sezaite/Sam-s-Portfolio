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
    if ((innerWidth > 680 && howManyLeft < 4) || (innerWidth > 680 && howManyLeft < 4) || (innerWidth > 1080 && howManyLeft < 5) || (innerWidth > 1300 && howManyLeft < 6)) {
        return howManyLeft;
    } else {
        return howManyToLoad(blogData.length - howManyLeft);
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
        const numberOfItems = loadedElements.length + checkViewport(howManyLeft);
        for (let i = whereToStart; i < numberOfItems; i++) {
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

function howManyToLoad(loadedNumber) {
    if (innerWidth > 1300) {
        return (loadedNumber % 4) + 4;
    } else if (innerWidth > 1080) {
        return (loadedNumber % 3) + 3;
    } else if (innerWidth > 680) {
        return (loadedNumber % 2) + 2;
    } else {
        return 2;
    }


    export { generateArticleRow };