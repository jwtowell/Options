/**
 *  Main 
 */

//Set image to dummy
function setImageDummy(myID) {
		    var image =document.getElementById(myID);  //"lvlMedium");   //(      
		        image.src = "images/dummy.png";
		}   
		
//Initialise Options page
function optInit() {
   	//Add a temporary alert just to make sure we're working
	//alert("Code from app.js is running!");

            setImageDummy("lvlMedium");
            setImageDummy("lvlHard");
            setImageDummy("scnSea");
            setImageDummy("scnSafari");            
		}  

function myLevel(lvl) {
	var imgOn, imgOff1, imgOff2;
	switch (lvl) {
	case 1: imgOn   = document.getElementById("lvlEasy"); 
	        imgOff1 = document.getElementById("lvlMedium");
	        imgOff2 = document.getElementById("lvlHard");
    		break;
	case 2: imgOn   = document.getElementById("lvlMedium");
			imgOff1 = document.getElementById("lvlEasy");
			imgOff2 = document.getElementById("lvlHard");
			break;
	case 3: imgOn   = document.getElementById("lvlHard");
			imgOff1 = document.getElementById("lvlEasy");
			imgOff2 = document.getElementById("lvlMedium");
			break;  			
	}
	imgOn.src  = "images/levelselector.png";
	imgOff1.src = "images/dummy.png";
	imgOff2.src = "images/dummy.png";
}

function myScene(lvl) {
	var imgOn, imgOff1, imgOff2;
	switch (lvl) {
	case 1: imgOn   = document.getElementById("scnFarm"); 
	        imgOff1 = document.getElementById("scnSea");
	        imgOff2 = document.getElementById("scnSafari");
    		break;
	case 2: imgOn   = document.getElementById("scnSea");
			imgOff1 = document.getElementById("scnFarm");
			imgOff2 = document.getElementById("scnSafari");
			break;
	case 3: imgOn   = document.getElementById("scnSafari");
			imgOff1 = document.getElementById("scnFarm");
			imgOff2 = document.getElementById("scnSea");
			break;  			
	}
	imgOn.src  = "images/levelselector.png";
	imgOff1.src = "images/dummy.png";
	imgOff2.src = "images/dummy.png";
}