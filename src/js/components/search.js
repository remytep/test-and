import anime from 'animejs/lib/anime.es.js';

export default class Search {
	constructor(_$el) {
		this.$el = _$el;
		this.$label = document.getElementsByClassName('js-label')[0];

		this._hideLabel = this._hideLabel.bind(this);
		this._showLabel = this._showLabel.bind(this);

		this.init();
	}
	init() {
		this._addEvents();
	}
	_addEvents() {
		this.$el.addEventListener('focus', this._hideLabel);
		this.$el.addEventListener('blur', this._showLabel);
	}

	_hideLabel() {
		anime({
			targets: this.$label,
			opacity: [0.5, 0],
			duration: 200,
			easing: 'linear',
		});
	}
	_showLabel() {
		anime({
			targets: this.$label,
			opacity: [0, 0.5],
			duration: 200,
			easing: 'linear',
		});
	}
}
