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
			scaleX: 0,
			duration: 0,
		});
	}
	_openMenu() {
		anime
			.timeline({
				targets: this.$popinMenu,
				easing: 'linear',
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
			.add(
				{
					targets: this.$menuBtn,
					backgroundColor: '#ffffff',
					duration: 250,
				},
				0
			)
			.add(
				{
					targets: '.sidemenu-btn svg',
					fill: '#399CA2',
					duration: 500,
				},
				0
			)
			.add(
				{
					targets: '.ico-burger-middle',
					scaleX: [1, 0],
					duration: 250,
				},
				0
			)
			.add(
				{
					targets: '.ico-burger-top',
					rotate: [0, '45deg'],
					translateY: [0, 7.8],
					duration: 250,
				},
				250
			)

			.add(
				{
					targets: '.ico-burger-bottom',
					rotate: [0, '-45deg'],
					translateY: [0, -7.8],
					duration: 250,
				},
				250
			)
			.add({ scaleX: [0, 1], duration: 500 }, 250)
			.add(
				{
					targets: '.js-left-menu-title',
					translateY: ['100%', 0],
					opacity: [0, 1],
					delay: anime.stagger(100),
					duration: 250,
				},
				750
			)
			.add(
				{
					targets: '.js-vertical-menu-title',
					translateY: ['100%', 0],
					opacity: [0, 1],
					delay: anime.stagger(100),
					duration: 250,
				},
				750
			)
			.add(
				{
					targets: '.js-bottom-menu-title',
					translateY: ['100%', 0],
					opacity: [0, 1],
					delay: anime.stagger(100),
					duration: 250,
				},
				750
			);
	}
	_closeMenu() {
		anime
			.timeline({
				targets: this.$popinMenu,
				easing: 'linear',
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
					duration: 250,
				},
				0
			)
			.add(
				{
					targets: '.js-vertical-menu-title',
					translateY: [0, '100%'],
					opacity: [1, 0],
					delay: anime.stagger(100),
					duration: 250,
				},
				0
			)
			.add(
				{
					targets: '.js-bottom-menu-title',
					translateY: [0, '100%'],
					opacity: [1, 0],
					delay: anime.stagger(100),
					duration: 250,
				},
				0
			)
			.add({ scaleX: [1, 0], duration: 500 }, 250)
			.add(
				{
					targets: this.$menuBtn,
					backgroundColor: 'rgb(0,0,0,0)',
					duration: 250,
				},
				750
			)
			.add(
				{
					targets: '.sidemenu-btn svg',
					fill: 'white',
					duration: 250,
				},
				750
			)
			.add(
				{
					targets: '.ico-burger-top',
					translateY: [7.8, 0],
					rotate: ['45deg', 0],
					duration: 250,
				},
				750
			)
			.add(
				{
					targets: '.ico-burger-bottom',
					translateY: [-7.8, 0],
					rotate: ['-45deg', 0],
					duration: 250,
				},
				750
			)
			.add(
				{
					targets: '.ico-burger-middle',
					scaleX: [0, 1],
					duration: 250,
				},
				750
			);
	}
}
