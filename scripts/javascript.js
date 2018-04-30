
//set background color on click
function changeBackColor(){
   
        var currentColor = document.body.style.backgroundColor 	
        var colors = ["blue", "red","green","yellow","magenta","white"]
	    var number = Math.floor(Math.random() * 6);
        var choice = colors[number]
        while(true){
            if(document.body.style.backgroundColor == choice){
                var number = Math.floor(Math.random() * 5);
                var choice = colors[number]
            }
            else{
                break;
            }
        }
	document.body.style.background = choice;
}

//open menu bar
function openNav() {
    document.getElementById("side-bar").style.width = "250px";
    document.getElementById("page-wrapper").style.marginRight = "250px";
}
 
//close menu bar
function closeNav() {
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("page-wrapper").style.marginRight = "0";
}

//call change back ground function by div
$('div.ad-box').click(function() {
    changeBackColor()
});
