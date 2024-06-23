export default class Navtab {
	constructor(_$el) {
		this.$el = _$el;
		this.$tabs = document.getElementsByClassName('js-tab');
		this.$content = document.getElementsByClassName('js-tab-content');
		this.current = 1;

		this.init();
	}

	init() {
		this._addEvents();
	}

	_addEvents() {
		Array.from(this.$tabs).forEach((tab) => {
			tab.addEventListener('click', (e) => {
				this._handleClick(e);
			});
		});
	}

	_handleClick(_event) {
		const value = _event.target.dataset.index;
		if (this.current != value) {
			this._goTo(value);
		}
	}
	_goTo(_index) {
		this.$content[this.current - 1].setAttribute('aria-current', false);
		this.$tabs[this.current - 1].setAttribute('aria-current', false);
		this.$content[_index - 1].setAttribute('aria-current', true);
		this.$tabs[_index - 1].setAttribute('aria-current', true);
		this.current = _index;
	}
}
