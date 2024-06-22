import anime from 'animejs/lib/anime.es.js';

export default class Popin {
	constructor(_$el) {
		this.$el = _$el;
		this.$menuBtn = document.getElementsByClassName('js-burger')[0];
		this.$popinMenu = document.getElementsByClassName('js-popin-menu')[0];

		this.init();
	}
	init() {
		this._addEvents();
		this._hideMenu();
	}

	_addEvents() {
		this.$menuBtn.addEventListener('click', this._handleClick.bind(this));
	}

	_handleClick() {
		if (this.$el.dataset.open === 'false') {
			this._openMenu();
		} else {
			this._closeMenu();
		}
	}
	_hideMenu() {
		anime({
			targets: this.$popinMenu,
			opacity: 0,
			scaleX: 0,
			duration: 0,
		});
	}
	_openMenu() {
		anime
			.timeline({
				targets: this.$popinMenu,
				easing: 'easeOutQuint',
				begin: () => {
					this.$menuBtn.style.pointerEvents = 'none';
				},
				complete: () => {
					this.$menuBtn.style.pointerEvents = 'all';
					this.$popinMenu.style.zIndex = 100;
					this.$el.dataset.open = true;
					this.$popinMenu.setAttribute('aria-hidden', false);
				},
			})
			.add({ scaleX: [0, 1], opacity: [0, 1], duration: 500 })
			.add(
				{
					targets: '.js-left-menu-title',
					translateY: ['100%', 0],
					opacity: [0, 1],
					delay: anime.stagger(100),
				},
				500
			)
			.add(
				{
					targets: '.js-vertical-menu-title',
					translateY: ['100%', 0],
					opacity: [0, 1],
					delay: anime.stagger(100),
				},
				500
			)
			.add(
				{
					targets: '.js-bottom-menu-title',
					translateY: ['100%', 0],
					opacity: [0, 1],
					delay: anime.stagger(100),
				},
				500
			);
	}
	_closeMenu() {
		anime
			.timeline({
				targets: this.$popinMenu,
				easing: 'easeInQuint',
				begin: () => {
					this.$menuBtn.style.pointerEvents = 'none';
				},
				complete: () => {
					this.$menuBtn.style.pointerEvents = 'all';
					this.$popinMenu.style.zIndex = -1;
					this.$el.dataset.open = false;
					this.$popinMenu.setAttribute('aria-hidden', true);
				},
			})
			.add(
				{
					targets: '.js-left-menu-title',
					translateY: [0, '100%'],
					opacity: [1, 0],
					delay: anime.stagger(100),
				},
				0
			)
			.add(
				{
					targets: '.js-vertical-menu-title',
					translateY: [0, '100%'],
					opacity: [1, 0],
					delay: anime.stagger(100),
				},
				0
			)
			.add(
				{
					targets: '.js-bottom-menu-title',
					translateY: [0, '100%'],
					opacity: [1, 0],
					delay: anime.stagger(100),
				},
				0
			)
			.add({ scaleX: [1, 0], opacity: [1, 0], duration: 500 }, 500);
	}
}
