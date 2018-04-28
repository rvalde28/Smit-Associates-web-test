
//set background color on click
function changeBackColor(){
    var currentColor = document.body.style.backgroundColor 	
    var colors = ["blue", "red","green","yellow","magenta"]
	var number = (Math.random() * (colors.length))
    var choice = colors[number]
    
	document.body.style.background = choice;
}
