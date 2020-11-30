var array1 = [2,4,6,8];

var tafel = document.getElementById("tafel");
var tafel1 = document.getElementById("tafel1");
var tafel2 = document.getElementById("tafel2");
var tafel3 = document.getElementById("tafel3");

for(i=1; i<=10; i++){
	var answer = i * array1[0];
tafel.innerHTML += i + " * " + array1[0] + " = " + answer + "<br>";
}

for(i=1; i<=10; i++){
	var answer = i * array1[1];
tafel1.innerHTML += i + " * " + array1[1] + " = " + answer + "<br>";
}

for(i=1; i<=10; i++){
	var answer = i * array1[2];
tafel2.innerHTML += i + " * " + array1[2] + " = " + answer + "<br>";
}

for(i=1; i<=10; i++){
	var answer = i * array1[3];
tafel3.innerHTML += i + " * " + array1[3] + " = " + answer + "<br>";
}