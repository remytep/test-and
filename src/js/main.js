import Popin from './components/popin';
import Carousel from './components/carousel';
import Search from './components/search';

class LandingPage {
	constructor() {
		this.popin = new Popin(document.getElementsByClassName('js-popin')[0]);
		this.carousel = new Carousel();
		this.search = new Search(document.getElementsByClassName('js-search')[0]);
	}
	init() {}
}

const page = new LandingPage();
page.init();
