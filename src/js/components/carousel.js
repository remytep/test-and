import anime from 'animejs/lib/anime.es.js';

export default class Carousel {
	constructor() {
		this.$controls = document.getElementsByClassName('js-carousel-controls')[0];
		this.$image = document.getElementsByClassName('js-carousel-image')[0];
		this.$images = document.getElementsByClassName('js-img');
		this.$event = document.getElementsByClassName('js-carousel-event')[0];
		this.$events = document.getElementsByClassName('js-event');
		this.current = 1;

		this._handleClick.bind(this);
		this.init();
	}
	init() {
		this._addEvents();
	}

	_addEvents() {
		this.$controls.addEventListener('change', (e) => {
			this._handleClick(e);
		});
	}

	_handleClick(_event) {
		const value = _event.target.value;
		if (this.current !== value) {
			this._goTo(value);
		}
	}

	_goTo(_index) {
		anime
			.timeline({
				easing: 'linear',
				duration: 500,
				complete: () => {
					this.$images[this.current - 1].setAttribute('aria-current', false);
					this.$images[_index - 1].setAttribute('aria-current', true);
					this.$events[this.current - 1].setAttribute('aria-current', false);
					this.$events[_index - 1].setAttribute('aria-current', true);
					this.current = _index;
				},
			})
			.add(
				{
					targets: this.$image,
					translateX: (_index - 1) * -100 + '%',
				},
				0
			)
			.add(
				{
					targets: this.$event,
					translateX: ((_index - 1) / 3) * -100 + '%',
				},
				0
			);
	}
}
