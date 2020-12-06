var duck = document.getElementById("duck");
var directions = ["up", "down", "left", "right"];
var posLeft = 400;
var posTop = 400;

function moveDuck(){
	var number = Math.floor(Math.random() * 4);
	var direction = directions[number];
	console.log(direction);

    if(direction == "down")
    {
        if(posTop < 1000){
            posTop = posTop - 50;
        }
        else{
            posTop = 600;
        }
        posTop += 75;
    duck.style.top = posTop + "px";
    }
    else if(direction == "up"){
        if(posTop > -50){
            posTop = posTop + 50;
        }
        else{
            posTop = 600;
        }
        posTop -= 75;
    duck.style.top = posTop + "px";
    }


    else if(direction == "right"){
        if(posLeft < 1100){
            posLeft = posLeft + 50;
        }
        else{
            posLeft = 600;
        }
        posLeft += 75;
        duck.style.transform = "scaleX(1)"
	duck.style.left = posLeft + "px";
    }
    else if(direction == "left"){
        if(posLeft > 100){
            posLeft = posLeft - 50;
        }
        else{
            posLeft = 600;
        }
    	posLeft -= 75;
        duck.style.transform = "scaleX(-1)"
	duck.style.left = posLeft + "px";
    }
    
}



function hit(e){
    e.stopPropagation();
    alert("You hit the duck!")
}


function easyselect(){
    setInterval(moveDuck, 1000);
    alert("Easy difficulty selected")
}

function medselect(){
    setInterval(moveDuck, 500);
    alert("Medium difficulty selected")
}

function hardselect(){
    setInterval(moveDuck, 250);
    alert("Hard difficulty selected")
}
