//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(500, 500);
  foodStock=database.ref('food');
  foodStock.on ("value",readStock);
}


function draw() {  

  drawSprites();
  //add styles here
  textSize=h2
  FileList("black")
  stroke()
background(46,139,87)

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref(/).update({
    Food:x
  })
}


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  DocumentFragment.addImage(dogHappy);
}
}



