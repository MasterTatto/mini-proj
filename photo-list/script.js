let close = document.querySelector('.close');
close.addEventListener('click', () => {
	close.parentElement.style.display = 'none';
});

let images = document.querySelectorAll('.img');
let img = document.querySelector('#p');
images.forEach((el) => {
	el.addEventListener('click', () => {
		img.src = el.src;
		img.parentElement.style.display = 'block';
	});
});
