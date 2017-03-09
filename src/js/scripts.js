import imagesLoaded from 'imagesloaded';
import pym from 'pym.js';

const pymChild = new pym.Child();


imagesLoaded('#six-up', () => pymChild.sendHeight());
