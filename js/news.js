// import { blogData } from './data/blogData.js'
// import { renderArticles } from './newsJS/renderArticles.js';
import { generateArticleRow } from './newsJS/loadMore.js';

generateArticleRow();

const button = document.querySelector('.container.other-blogs .btn');
if (!button) {
    console.error("Error: cannnot find button element");
}
console.log(button);
button.addEventListener('click', generateArticleRow);