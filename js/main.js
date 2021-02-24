import { HoverFx } from './components/heroJS/HoverFx.js';

import { albumData } from './data/albumData.js';
import { HeroScroll } from './components/heroJS/HeroScrollView.js';

// import { workButtonCLick } from './components/buttonEventFunctions.js';
import { typeWriter } from './components/heroJS/typingHeaders.js'
import { generateWorkProjects } from './components/workJS/renderProjects.js'


generateWorkProjects('#work-page-projects');

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



const button = document.querySelector('.container.work .btn');
// button.addEventListener('click', workButtonCLick);

typeWriter();








