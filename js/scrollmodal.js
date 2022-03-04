	const 	btnOff = document.querySelector('.swiper-slide-btn'),
			btnOn = document.querySelector('.modal-btn-off'),
			menuOff = document.querySelector('.burger'),
			menuOn = document.querySelector('.burger-menu-off'),
			body = document.body;

let disableScroll = function () {
	let pagePosition = window.scrollY;
	document.body.classList.add('disable-scroll');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('disable-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
}

btnOff.addEventListener('click', (e) => {
	disableScroll();
	e.currentTarget.style.pointerEvents = 'none';
	btnOn.style.pointerEvents = 'auto';
});

btnOn.addEventListener('click', (e) => {
	enableScroll();
	e.currentTarget.style.pointerEvents = 'none';
	btnOff.style.pointerEvents = 'auto';
});

menuOff.addEventListener('click', (e) => {
	disableScroll();
	e.currentTarget.style.pointerEvents = 'none';
	menuOn.style.pointerEvents = 'auto';
});

menuOn.addEventListener('click', (e) => {
	enableScroll();
	e.currentTarget.style.pointerEvents = 'none';
	menuOff.style.pointerEvents = 'auto';
});
