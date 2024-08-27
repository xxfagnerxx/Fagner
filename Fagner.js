unction setup() {
  createCanvas(500, 500);
  background("white");
}

function draw() {
  
  
  stroke ("blue");
  fill ("silver");
  
  // console.log(mouseIsPressed);
 
  if (mouseIsPressed) {
  rect (mouseX,mouseY,10,15);
  }

}
