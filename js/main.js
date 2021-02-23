import { HoverFx } from './renderAlbums/HoverFx.js';

import { albumData } from './data/albumData.js';
import { HeroScroll } from './components/HeroScroll.js';
import { WorkAlbums } from './components/WorkAlbums.js';
import { workButtonCLick } from './components/buttonEventFunctions.js';
import { typeWriter } from './components/typingHeaders.js'
import { generateWorkProjects } from '../js/workJS/renderProjects.js'

new HeroScroll({
    selector: '.container.hero #project',
    data: albumData,
    pseudoCount: 2,
    areDotsVisible: true,
});

typeWriter();


const pirmasUzkrovimas = new WorkAlbums({
    selector: '.container.work',
    data: albumData,
});

new HoverFx({
    selector: '.project-wrap',
    data: albumData,
});

console.log(pirmasUzkrovimas.howManyAlbums());
console.log('sveiki');

generateWorkProjects('#work-page-projects');

const button = document.querySelector('.container.work .btn');
button.addEventListener('click', workButtonCLick);

typeWriter();








