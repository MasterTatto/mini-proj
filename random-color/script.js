let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	let ran = Math.random().toString(16).slice(2, 8);
	document.querySelector('body').style.backgroundColor = '#' + ran;
});
