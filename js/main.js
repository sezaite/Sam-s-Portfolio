import { HoverFx } from './renderAlbums/HoverFx.js';

import { albumData } from './data/albumData.js';
import { HeroScroll } from './components/HeroScroll.js';
import { WorkAlbums } from './components/WorkAlbums.js';
import { workButtonCLick } from './components/buttonEventFunctions.js';
import { typeWriter } from './components/typingHeaders.js'

new HeroScroll({
    selector: '.container.hero #project',
    data: albumData,
    pseudoCount: 2,
    areDotsVisible: true,
});


typeWriter();

new WorkAlbums({
    selector: '.container.work',
    data: albumData,
});

new HoverFx({
    selector: '.project-wrap',
    data: albumData,
});


const button = document.querySelector('.container.work .btn');

button.addEventListener('click', workButtonCLick);


typeWriter();








