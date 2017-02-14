//class "change-all-of-me" (CAOM) :D
var ClassCAOM = document.getElementsByClassName("change-all-of-me"); 
	      
	for(var i=0; i < ClassCAOM.length; i++) {
		document.getElementById('fill-me').innerHTML = "HALO!"; 
		document.getElementsByClassName('change-all-of-me')[i].innerHTML = "HALO JUGA!";
		document.getElementsByTagName('h2')[0].innerHTML = "Apa Kabar!";
	}