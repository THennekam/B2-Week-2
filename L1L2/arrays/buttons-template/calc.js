var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

var optellen = document.getElementById("optellen");
var aftrekken = document.getElementById("aftrekken");
var vermenigvuldigen = document.getElementById("vermenigvuldigen");
var delen = document.getElementById("delen");

for(i=0; i<=9; i++){
	var answer = arrayTwee[i] + arrayEen[i];
optellen.innerHTML += arrayEen[i] + " + " + arrayTwee[i] + " = " + answer + "<br>";
}

for(i=0; i<=9; i++){
	var answer1 = arrayTwee[i] - arrayEen[i];
aftrekken.innerHTML += arrayTwee[i] + " - " + arrayEen[i] + " = " + answer1 + "<br>";
}

for(i=0; i<=9; i++){
	var answer2 = arrayEen[i] * arrayTwee[i];
vermenigvuldigen.innerHTML += arrayEen[i] + " * " + arrayTwee[i] + " = " + answer2 + "<br>";
}

for(i=0; i<=9; i++){
	var answer3 = arrayTwee[i] / arrayEen[i];
delen.innerHTML += arrayTwee[i] + " / " + arrayEen[i] + " = " + answer3 + "<br>";
}