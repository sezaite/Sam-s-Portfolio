import { HoverFx } from './renderAlbums/HoverFx.js';

import { albumData } from './data/albumData.js';

new HoverFx({
    selector: '.container.hero #project',
    data: albumData,
    pseudoCount: 2,
    areDotsVisible: true,
});






