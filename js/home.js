import { HoverFx } from './components/heroJS/HoverFx.js';
import { typeWriter } from './components/heroJS/typingHeaders.js';
import { albumData } from './data/albumData.js';
import { HeroScroll } from './components/heroJS/HeroScrollView.js';
import { SpotifyButtonToggle } from './components/heroJS/SpotifyButtonToggle.js';

// typeWriter();

new HeroScroll({
    selector: '.container.hero .project-side .view',
    data: albumData,
    pseudoCount: 2,
    areDotsVisible: true,
});

new HoverFx({
    selector: '.project-wrap',
    data: albumData,
});

new SpotifyButtonToggle({
    selector: '.project-wrap',
    data: albumData,
})

