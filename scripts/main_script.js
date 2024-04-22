const burger = document.querySelector('.burger');
const no_burger = document.querySelector('.menu');
const width = document.documentElement.clientWidth;

burger.addEventListener('click', function () {
	const burIc = this.querySelector('.burger-icon');
	const xIc = this.querySelector('.x-icon');
	if (burIc.style.display === "none") {
		burIc.style.display = "inline-block";
		xIc.style.display = "none";
		no_burger.style.display = "none";
	}
	else {
		xIc.style.display = "inline-block";
		no_burger.style.display = "block";
		burIc.style.display = "none";
	}
}
);