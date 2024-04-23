function openTab(evt, tabName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("menu");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" tabActive", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " tabActive";
}


var swiper = new Swiper(".menu", {
	slidesPerView: 4,
	spaceBetween: 50,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});