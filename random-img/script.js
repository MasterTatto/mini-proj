let btn = document.querySelector('.btn');
let img = [
	'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700042280.jpg',
	'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700037849.jpg',
	'https://data.planet-puzzles.com/schmidt-spiele.47/schmidt-spiele-animaux-dafrique-puzzle-150-pieces.58803-1.fs.jpg',
	'https://wallpapershome.com/images/wallpapers/elephant-5120x2880-5k-4k-wallpaper-savanna-tree-clouds-4777.jpg',
	'https://wallpapertag.com/wallpaper/full/4/c/d/497741-vertical-tiger-hd-wallpaper-1920x1200-laptop.jpg',
	'https://c.wallhere.com/photos/bf/b7/1600x1200_px_animals_baby_animals_Deer_Fawns-749929.jpg!d',
	'https://get.wallhere.com/photo/animals-grass-jumping-wildlife-fox-meadow-fauna-mammal-vertebrate-dog-like-mammal-red-fox-11263.jpg',
	'https://c.wallhere.com/photos/c2/51/1920x1153_px_galaxy_space_stars-1734339.jpg!d',
	'https://images.wallpaperscraft.ru/image/kosmos_tumannost_zvezdy_158061_1280x960.jpg',
	'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701887466.jpg',
	'https://cdn.wallpapersafari.com/9/82/4lpafY.jpg',
	'https://hdwallsbox.com/wallpapers/l/1920x1200/106/sun-mountains-orange-scenic-1920x1200-105934.jpg',
	'http://allpicts.in/download/12156/Beautiful_Scenery_for_Wallpaper.jpg/',
	'https://wallpapertag.com/wallpaper/full/d/8/1/804669-popular-bulgaria-wallpapers-1920x1080-for-windows-10.jpg',
	'https://wallpaperaccess.com/full/1441732.jpg',
	'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701328859.jpg',
	'https://seen.evgenidinev.com/photo/landscape-1292d2.jpg',
	'https://get.pxhere.com/photo/architecture-road-bridge-traffic-street-city-skyscraper-urban-cityscape-downtown-transport-vehicle-lane-public-transport-buildings-infrastructure-cars-metropolis-urban-area-metropolitan-area-nonbuilding-structure-916902.jpg',
	'https://ecotelhado.com/wp-content/uploads/2018/11/sustentabilidade.jpg',
	'https://get.wallhere.com/photo/lights-city-cityscape-night-building-skyline-skyscraper-evening-HDR-dusk-metropolis-downtown-landmark-urban-area-metropolitan-area-human-settlement-neighbourhood-residential-area-tower-block-251871.jpg',
	'https://get.wallhere.com/photo/5120x3200-px-city-long-exposure-overpass-street-street-light-1348911.jpg',
	'https://www.wallpaperup.com/uploads/wallpapers/2014/05/03/348907/27e4fc9b67d6e1fc791db0464ef8096f-1000.jpg',
	'https://www.hdcarwallpapers.com/walls/bmw_m4_custom_cgi_4k-HD.jpg',
	'https://get.wallhere.com/photo/2560x1600-px-car-Lamborghini-Aventador-1052303.jpg',
	'https://www.topcarmonaco.com/images/locations/rent-lamborghini-in-paris-france-rent-luxury-cars-top-car-monaco.jpg',
	'https://c.wallhere.com/photos/19/4e/fire_background_color_abstraction-641666.jpg!d',
	'https://luxfon.com/download.php?file=201305/1366x768/luxfon.com-21419.jpg',
	'https://get.pxhere.com/photo/water-drop-black-and-white-sunlight-rain-leaf-green-reflection-weather-blue-monochrome-close-up-freezing-macro-photography-24932.jpg',
	'https://get.pxhere.com/photo/screen-sea-water-nature-snow-winter-ground-sweet-morning-rain-wave-wet-dog-cute-alone-river-reflection-umbrella-weather-partner-season-friends-problem-away-terrier-leave-refugees-farewell-girlfriends-rainy-weather-cohesion-dog-look-pity-helpless-atmospheric-phenomenon-atmosphere-of-earth-656477.jpg',
];
btn.addEventListener('click', () => {
	for (i = 0; i < 1; i++) {
		let random = Math.floor(Math.random() * img.length);
		document.querySelector('.body').src = img[random];
		console.log(img[random]);
	}
	//console.log(document.querySelector('.body').src);
});
