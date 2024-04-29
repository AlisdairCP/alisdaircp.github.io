const burger = document.querySelector('.burger');
const no_burger = document.querySelector('.menu');
const tab_width = window.matchMedia("(max-width: 50rem)");
const phone_width = window.matchMedia("(max-width: 30rem)");
const page = document.querySelector('.page');

burger.addEventListener('click', function () {
	const burIc = this.querySelector('.burger-icon');
	const xIc = this.querySelector('.x-icon');
	if (burIc.style.display === "none") {
		burIc.style.display = "inline-block";
		xIc.style.display = "none";
		no_burger.style.display = "none";
		if (tab_width.matches) {
			page.style.paddingTop = "8rem";
		}
		if (phone_width.matches) {
			page.style.paddingTop = "9rem";
		}
		
	}
	else {
		xIc.style.display = "inline-block";
		no_burger.style.display = "block";
		burIc.style.display = "none";
		page.style.paddingTop = "15rem";
	}
}
);