import { HoverFx } from './components/heroJS/HoverFx.js';
import { typeWriter } from './components/heroJS/typingHeaders.js';
import { albumData } from './data/albumData.js';
import { HeroScroll } from './components/heroJS/HeroScrollView.js';

typeWriter();

new HeroScroll({
    selector: '.container.hero .project-side',
    data: albumData,
    pseudoCount: 2,
    areDotsVisible: true,
});

new HoverFx({
    selector: '.project-wrap',
    data: albumData,
});