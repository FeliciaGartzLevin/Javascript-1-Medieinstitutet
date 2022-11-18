const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
	popupWrapper.style.display = 'block';
});

close.addEventListener('click', () => {
	popupWrapper.style.display = 'none';
});

popupWrapper.addEventListener('click', (e) => {

	// e.stopPropagation();
	
	// if(e.target===popup){ // e.target.classList('popupWrapper') funkar ej heller
	// 	popupWrapper.style.display = 'block';
	// } else {
	// 	popupWrapper.style.display = 'none';
	// }

	popupWrapper.style.display = 'none';
});

popup.addEventListener('click', (e) => {

	e.stopPropagation();
});


// HUR GÖRA FÖR ATT DEN INTE SKA STÄNGA SIG NÄR MAN KLICKAR I RUTAN?
// popup.addEventListener('click', (e) => {
// 	
// })