var spellen = ['Monopoly', 'Yahtzee', 'Bridge', 'Poker', 'Pesten', 'Mens Erger Je Niet', 'Cluedo'];
var x = Math.floor(Math.random() * 7);
document.getElementById("spellen").innerHTML = spellen[x];