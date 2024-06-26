import Popin from './components/popin';
import Carousel from './components/carousel';
import Search from './components/search';
import Navtab from './components/navtab';

class LandingPage {
	constructor() {
		this.popin = new Popin(document.getElementsByClassName('js-popin')[0]);
		this.carousel = new Carousel();
		this.search = new Search(document.getElementsByClassName('js-search')[0]);
		this.navtab = new Navtab(document.getElementsByClassName('js-nav-tab')[0]);
	}
	init() {}
}

const page = new LandingPage();
page.init();
