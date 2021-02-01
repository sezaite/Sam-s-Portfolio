import { HoverFx } from './renderAlbums/HoverFx.js';

import { albumData } from './data/albumData.js';
import { HeroScroll } from './components/HeroScroll.js';

new HeroScroll({
    selector: '.container.hero #project',
    data: albumData,
    pseudoCount: 2,
    areDotsVisible: true,
});

// if(!HeroScroll){
//     console.error('Error: I could not generate any content for projects in hero!');
//     return false;
// } else {

// };

new HoverFx({
    selector: '.project-wrap',
    data: albumData,
});

let i = 0;
const txt = 'Producer  |  Ex-vegan  |  First-time visitor to Lithuania';
const speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".hero .titles").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();








