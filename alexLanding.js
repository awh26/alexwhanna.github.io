			// Email Button ---------------------------------------------------------------------------------------------------------------------

			function emailSubmit() {
				document.getElementById("getInTouch").innerHTML == "Name";
			}


			// Skills modals ---------------------------------------------------------------------------------------------------------------------
			// Get the modal
			var modal = document.getElementById("modal");
			var javaboxcontent = document.getElementById("javaContent");
			var javascriptboxcontent = document.getElementById("javascriptContent");
			var finalcutboxcontent = document.getElementById("finalcutContent");
			var photoshopboxcontent = document.getElementById("photoshopContent");
			var photographyboxcontent = document.getElementById("photographyContent");

			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close");

			// When the user clicks on the button, open the modal 
			function openTab(innertext) {
				javaboxcontent.style.display = "none";
				javascriptboxcontent.style.display = "none";
				finalcutboxcontent.style.display = "none";
				photoshopboxcontent.style.display = "none";
				photographyboxcontent.style.display = "none";
				modal.style.display = "block";

				var closeBtn;

				if (innertext === 'javaExpand') {
					javaboxcontent.style.display = "block";
					closeBtn = span[0];
				} else if (innertext === 'javascriptExpand') {
					javascriptboxcontent.style.display = "block";
					closeBtn = span[1];
				} else if (innertext === 'finalcutExpand') {
					finalcutboxcontent.style.display = "block";
					closeBtn = span[2];
				} else if (innertext === 'photoshopExpand') {
					photoshopboxcontent.style.display = "block";
					closeBtn = span[3];
				} else if (innertext === 'photographyExpand') {
					photographyboxcontent.style.display = "block";
					closeBtn = span[4];
				}

				closeBtn.onclick = function() {
					modal.style.display = "none";
					javaboxcontent.style.display = "none";
					javascriptboxcontent.style.display = "none";
					finalcutboxcontent.style.display = "none";
					photoshopboxcontent.style.display = "none";
					photographyboxcontent.style.display = "none";
				}
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
			   		modal.style.display = "none";
			   		javaboxcontent.style.display = "none";
					javascriptboxcontent.style.display = "none";
					finalcutboxcontent.style.display = "none";
					photoshopboxcontent.style.display = "none";
					photographyboxcontent.style.display = "none";
				}
			}



			// Header onscroll ---------------------------------------------------------------------------------------------------------------------
			window.onscroll = function() {
				inverter();
				navCollapse();
			};

			function navCollapse() {
				if (document.body.scrollTop > screen.height-200 || document.documentElement.scrollTop > screen.height-200) {
					document.getElementById("logotext").innerHTML = "AH";

				} else {
  					document.getElementById("logotext").innerHTML = "ALEX HANNA";
				}
			}

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



			// Image Slideshow ---------------------------------------------------------------------------------------------------------------------
			var image1=new Image()
			image1.src="file:///Users/alexhanna/Documents/Code/alexwhanna/img/headShot.jpg";

			var image2=new Image()
			image2.src="file:///Users/alexhanna/Documents/Code/alexwhanna/img/poloshot.jpg";

			var image3=new Image()
			image3.src="file:///Users/alexhanna/Documents/Code/alexwhanna/img/prompicture.jpeg";

