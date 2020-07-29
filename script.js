// Header onscroll 
window.onscroll = function () {
	inverter();
};

window.onload = function() {
	document.getElementById("home").style.backgroundImage = "url(img/landingPics/landingpic2.jpg)";

}

//Uses jQuery to add and remove classes which invert the background color and text colors after scrolling past a certain point
function inverter() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.body.style.backgroundColor = "#121212";
		$("#logotext").addClass("whitelogooutline");
		$("#logotext").removeClass("blacklogooutline");
		$("#resumeButton").addClass("resumeButtonchange");
		$("#resumeButton").removeClass("resumeButtonorig");
		document.getElementById("home").style.backgroundImage = "none";

	} else {
		document.body.style.backgroundColor = "white";
		$("#logotext").addClass("blacklogooutline");
		$("#logotext").removeClass("whitelogooutline");
		$("#resumeButton").addClass("resumeButtonorig");
		$("#resumeButton").removeClass("resumeButtonchange");
		document.getElementById("home").style.backgroundImage = "url(img/landingPics/landingpic2.jpg)";
	}
}

//smooth scroll w/ jQuery
$(document).ready(function () {
	$("a").on('click', function (event) {

		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				window.location.hash = hash;
			});
		}
	});
});