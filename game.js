
var num=9;
var colors = randomColors(num);


var squares = document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorShow");
var finished=document.querySelector("#done");
var h1=document.querySelector("h1");

var reset=document.querySelector("#colorChange");
var classes=document.querySelectorAll(".alter");
var pickedColor=pickColor();

colorDisplay.textContent=pickedColor;




classes[0].addEventListener("click",function(){
   
   this.classList.add("Selected");

	classes[1].classList.remove("Selected");
	classes[2].classList.remove("Selected");
	num=3;
    colors=randomColors(num);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    reset.textContent="New Colors"
    finished.textContent="";


	for (var i = 0; i < squares.length; i++) {
		if(colors[i])

			squares[i].style.background=colors[i];

		else{
			
			 squares[i].style.display="none";

			}
		}
	
	h1.style.background="steelblue";
	
   
});
classes[2].addEventListener("click",function(){
   
   this.classList.add("Selected");

	classes[0].classList.remove("Selected");
	classes[1].classList.remove("Selected");
	num=9;

    colors=randomColors(num);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    reset.textContent="New Colors"
    finished.textContent="";

	for (var i = 0; i < squares.length; i++) {
		
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		
			
		
	}
	h1.style.background="steelblue";
});

classes[1].addEventListener("click",function(){

	this.classList.add("Selected");

	classes[0].classList.remove("Selected");

	classes[2].classList.remove("Selected");
	num=6;
	colors=randomColors(num);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    reset.textContent="New Colors"
    finished.textContent="";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
		}
		else{
			squares[i].style.display="none";
			
		
	}
	h1.style.background="steelblue";
		}
});



		reset.addEventListener("click",function(){
		
		colors=randomColors(num);
        pickedColor=pickColor();
    	colorDisplay.textContent=pickedColor;
    	reset.textContent="New colors";
		for (var i = 0; i < squares.length; i++) {
			
				squares[i].style.background=colors[i];
	
			
		}
	
	h1.style.background="steelblue";
	finished.textContent="";
	
		

	
  });





for (var i = 0; i < squares.length; i++) {

	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function () {

		var clickedColor=this.style.background;

		if(clickedColor===pickedColor){

			finished.textContent="Correct!!";

			for (var i = 0; i < squares.length; i++) {

				squares[i].style.background=clickedColor;

				h1.style.background=clickedColor;
				reset.textContent="Play Again?";

				
			}
		}
		else{
			this.style.background="#232323";
			finished.textContent="Try Again";

		}
	});
	
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColors(num) {
	var arr=[];
	for (var i = 0; i < num; i++) {
		
	    arr.push(generatingColors())
		
	}
     
	
	return arr;
}
function generatingColors() {
	    var r =Math.floor(Math.random() * 256);

	    var g =Math.floor(Math.random() * 256);

	    var b =Math.floor(Math.random() * 256);
	  
	    return "rgb(" + r + ", " + g + ", " + b + ")";
	    
}



