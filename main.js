
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject= "";
var blockImageObject= "";

function playerUpdate()
{
	fabric.Image.fromURL("player.png", function(Img) {
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p e shift pressionadas juntas");
	
}	
if(e.shiftKey && keyPressed == '77')
{
	console.log("m e shift pressionadas juntas");
	
	
}

	if(keyPressed == '38')
	{
		
	}
	if(keyPressed == '40')
	{
		
	}
	if(keyPressed == '37')
	{
		
	}
	if(keyPressed == '39')
	{
		
	}
	if(keyPressed == '87')
	{
		
	}
	if(keyPressed == '71')
	{
		
	}
	if(keyPressed == '76')
	{
		
	}
	if(keyPressed == '84')
	{
		
	}
	if(keyPressed == '82')
	{
		
	}
	if(keyPressed == '89')
	{
		
	}
	if(keyPressed == '68')
	{
		
	}
	if(keyPressed == '85')
	{
		
	}
	if(keyPressed == '67')
	{
		
	}
	
}
