let slides = document.querySelectorAll('.slide');
let index = 0;
let btnLeft = document.querySelector('.btnLeft');
let btnRight = document.querySelector('.btnRight');
console.log(slides.length);
btnLeft.addEventListener('click', () => {
	if (index == 0) {
		index = slides.length - 2;
	} else {
		index--;
	}
	slides[0].style.marginLeft = '-' + index * 600 + 'px';
});
btnRight.addEventListener('click', () => {
	if (index == 4) {
		index = slides.length - 1;
		index = 0;
	} else {
		index++;
	}
	slides[0].style.marginLeft = '-' + index * 600 + 'px';
});
