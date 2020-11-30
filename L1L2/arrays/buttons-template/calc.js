var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

var optellen = document.getElementById("optellen");
var aftrekken = document.getElementById("aftrekken");
var vermenigvuldigen = document.getElementById("vermenigvuldigen");
var delen = document.getElementById("delen");

for(i=1; i<=10; i++){
	var answer = arrayTwee[0] + arrayEen[0];
optellen.innerHTML += arrayEen[0] + " + " + arrayTwee[0] + " = " + answer + "<br>";
}