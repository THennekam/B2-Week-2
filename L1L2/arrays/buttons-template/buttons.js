var dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"]

var text = document.getElementById("text");

for(i=0; i<7; i++){
	text.innerHTML += dagen[i] + "<br>"; //dagen vd week
}

for(i=0; i<5; i++){
	text.innerHTML += dagen[i] + "<br>"; //werkdagen
}

for(i=0; i<1; i++){
	text.innerHTML += dagen[5] + " " + dagen[6] + "<br>"; //weekenddagen
}

