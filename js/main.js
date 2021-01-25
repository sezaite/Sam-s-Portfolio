import { HoverFx } from './renderAlbums/HoverFx.js';

import { albumData } from './data/albumData.js';
import { HeroScroll } from './components/HeroScroll.js';

new HeroScroll({
    selector: '.container.hero #project',
    data: albumData,
    pseudoCount: 2,
    areDotsVisible: true,
});






