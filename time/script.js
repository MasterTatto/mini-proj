let count = new Date('aug 23, 2021 00:00:00').getTime();
let x = setInterval(() => {
	let now = new Date().getTime();
	let d = count - now;
	let days = Math.floor(d / (1000 * 60 * 60 * 24));
	document.querySelector('#days').innerHTML = days;
	let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	document.querySelector('#hours').innerHTML = hours;
	let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
	document.querySelector('#minutes').innerHTML = minutes;
	let seconds = Math.floor((d % (1000 * 60)) / 1000);
	document.querySelector('#seconds').innerHTML = seconds;
}, 1000);
