const btns = document.querySelectorAll('.swiper-slide-btn');
const btn = document.querySelectorAll('.modal-btn-off');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
        
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

document.querySelector('.modal-btn-off').addEventListener('click', function(){
    document.querySelector('.modal-overlay').classList.remove('modal-overlay--visible')
})
