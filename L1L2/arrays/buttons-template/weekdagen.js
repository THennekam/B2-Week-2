var dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"]

var dagenweek = document.getElementById("dagenweek");
var werkdagen = document.getElementById("werkdagen");
var weekend = document.getElementById("weekend");
var omgvolgorde = document.getElementById("omgvolgorde");
var ovwerk = document.getElementById("ovwerk");
var ovweekend = document.getElementById("ovweekend");

for(i=0; i<7; i++){
	dagenweek.innerHTML += dagen[i] + ", "; //dagen vd week
}

for(i=0; i<5; i++){
	werkdagen.innerHTML += dagen[i] + ", "; //werkdagen
}

for(i=0; i<1; i++){
	weekend.innerHTML += dagen[5] + ", " + dagen[6]; //weekenddagen
}

for(i=6; i>=0; i--){
	omgvolgorde.innerHTML += dagen[i] + ", "; //omgekeerde volgorde
}

for(i=4; i>=0; i--){
	ovwerk.innerHTML += dagen[i] + ", "; //omgekeerde volgorde werkdagen
}

for(i=0; i<1; i++){
	ovweekend.innerHTML += dagen[6] + ", " + dagen[5]; //omgekeerde volgorde weekend
}

