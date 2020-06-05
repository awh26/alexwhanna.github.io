			// Smooth scroll
$(document).ready(function(){
	$("a").on('click', function(event) {

		if (this.hash !== "") {
			event.preventDefault();
	
			var hash = this.hash;
	
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
		
			window.location.hash = hash;
			});
		}
	});
});


// Email Button ---------------------------------------------------------------------------------------------------------------------

			function emailSubmit() {
				document.getElementById("getInTouch").innerHTML == "Name";
			}


			// Skills modals ---------------------------------------------------------------------------------------------------------------------
			// Get the modal
			

			// Get the <span> element that closes the modal
			// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal 
function openTab(innertext) {
	var modall = document.getElementById("modall");
	var javaboxcontent = document.getElementById("javaContent");
	var javascriptboxcontent = document.getElementById("javascriptContent");
	var pythonboxcontent = document.getElementById("pythonContent");
	var finalcutboxcontent = document.getElementById("finalcutContent");
	var photoshopboxcontent = document.getElementById("photoshopContent");
	var photographyboxcontent = document.getElementById("photographyContent");
	var resumepopout = document.getElementById("resumeContent");


	javaboxcontent.style.display = "none";
	javascriptboxcontent.style.display = "none";
	pythonboxcontent.style.display = "none";
	finalcutboxcontent.style.display = "none";
	photoshopboxcontent.style.display = "none";
	photographyboxcontent.style.display = "none";
	resumepopout.style.display = "none";

	modall.style.display = "block";

	var closeBtn;

	if (innertext === 'javaExpand') {
		javaboxcontent.style.display = "block";
		closeBtn = span[0];
	} else if (innertext === 'javascriptExpand') {
		javascriptboxcontent.style.display = "block";
		closeBtn = span[1];
	} else if (innertext === 'pythonExpand') {
		pythonboxcontent.style.display = "block";
		closeBtn = span[2];
	} else if (innertext === 'finalcutExpand') {
		finalcutboxcontent.style.display = "block";
		closeBtn = span[3];
	} else if (innertext === 'photoshopExpand') {
		photoshopboxcontent.style.display = "block";
		closeBtn = span[4];
	} else if (innertext === 'photographyExpand') {
		photographyboxcontent.style.display = "block";
		closeBtn = span[5];
	} else if (innertext === 'resumeExpand') {
		resumepopout.style.display = "block";
		closeBtn = span[6];
	}

	closeBtn.onclick = function() {
		modall.style.display = "none";
		javaboxcontent.style.display = "none";
		javascriptboxcontent.style.display = "none";
		pythonboxcontent.style.display = "none";
		finalcutboxcontent.style.display = "none";
		photoshopboxcontent.style.display = "none";
		photographyboxcontent.style.display = "none";
		resumepopout.style.display = "none";
	}
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modall) {
   		modall.style.display = "none";
   		javaboxcontent.style.display = "none";
		javascriptboxcontent.style.display = "none";
		pythonboxcontent.style.display = "none";
		finalcutboxcontent.style.display = "none";
		photoshopboxcontent.style.display = "none";
		photographyboxcontent.style.display = "none";
		resumepopout.style.display = "none";
	}
}


			// Header onscroll ---------------------------------------------------------------------------------------------------------------------
			window.onscroll = function() {
				inverter();
			};

			function inverter() {
				if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
					document.body.style.backgroundColor = "#121212";
					$("#logotext").addClass("whitelogooutline");
					$("#logotext").removeClass("blacklogooutline");
					$("#resumeButton").addClass("resumeButtonchange");
					$("#resumeButton").removeClass("resumeButtonorig");


				} else {
					document.body.style.backgroundColor = "white";
					$("#logotext").addClass("blacklogooutline");
					$("#logotext").removeClass("whitelogooutline");
  					$("#resumeButton").addClass("resumeButtonorig");
					$("#resumeButton").removeClass("resumeButtonchange");
				}	
			}
