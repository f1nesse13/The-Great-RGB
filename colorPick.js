var numSquares =6
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("button")
var modeButtons = document.querySelectorAll(".mode")
init();

function init(){
for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected")
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});	
	}
for(i = 0; i < squares.length; i++){
	//Assigns colors to squares
	
	squares[i].addEventListener("click", function(){ //checks rgb on click and compares
		var clickedColor = this.style.backgroundColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again"
		} 
	});
	}
		reset();
	}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	resetButton.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	
	for(i = 0; i < squares.length; i++){
	if (colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
}
	else{
		squares[i].style.display = "none";
	}
	}
	h1.style.backgroundColor = "steelblue"
};

resetButton.addEventListener("click", function(){
	reset()
	});

for(i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i]//Assigns colors to squares

	squares[i].addEventListener("click", function(){ //checks rgb on click and compares
		var clickedColor = this.style.backgroundColor
		
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?"
		}
		
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again"
		} 
	});
}

//--REFACTORED CODE--
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected")
// 	easyBtn.classList.add("selected")
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	for (i = 0; i < squares.length; i++){
// 	if(colors[i]){
// 		squares[i].style.backgroundColor = colors[i]
// 	}
// 	else{
// 	squares[i].style.display = "none"
// }
// }
// });
// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected")
// 	easyBtn.classList.remove("selected")
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	for (i = 0; i < squares.length; i++){
// 	squares[i].style.backgroundColor = colors[i]
// 	squares[i].style.display = "block"
// }
// });
// colors = generateRandomColors(numSquares);
// pickedColor = pickColor();
// resetButton.textContent = "New Colors"
// colorDisplay.textContent = pickedColor;
// messageDisplay.textContent = "";
// for(i = 0; i < squares.length; i++){
// squares[i].style.backgroundColor = colors[i];
// }
// h1.style.backgroundColor = "steelblue"

	
function changeColors(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++)
	arr.push(randomColor());
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb("+ r + ", " + g + ", " + b + ")";
}
