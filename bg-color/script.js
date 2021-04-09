let tegA = document.querySelectorAll('a');

tegA.forEach((el) => {
	el.addEventListener('click', () => {
		console.log(el.innerHTML);
		document.body.style.background = el.innerHTML;
	});
});
