let sound = document.querySelectorAll('.sound');
let key = document.querySelectorAll('.block_1');
let span = document.querySelector('.span');
let inner = document.querySelectorAll('.inner');
//change display
inner.forEach((el) => {
	el.addEventListener('click', () => {
		span.innerHTML = el.innerHTML;
		span.classList.add('spanX');
	});
});
//click music
key.forEach((el) => {
	el.addEventListener('mousedown', keyClick);

	function keyClick() {
		const pianoKeyID = el.getAttribute('data-key');
		el.classList.add('plaing');
		playSoundX(pianoKeyID);
	}
});
function playSoundX(pianoKeyID) {
	const music = document.querySelector(`audio[data-key="${pianoKeyID}"]`);
	music.currentTime = 0;
	music.play();
}
//keyboard music
function playSound(e) {
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let key = document.querySelector(`.block_1[data-key="${e.keyCode}"]`);
	//console.log(key.getAttribute('data-key'));
	audio.currentTime = 0;
	audio.play();
	key.classList.add('plaing');
	span.classList.add('spanX');
	console.log(span);
	span.innerHTML = key.innerHTML;
}

function removeTarnsition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('plaing');
	span.classList.remove('spanX');
	console.log(e.propertyName);
	span.innerHTML = '';
}
let keys = document.querySelectorAll('.block_1');
keys.forEach((el) => el.addEventListener('transitionend', removeTarnsition));
window.addEventListener('keydown', playSound);
