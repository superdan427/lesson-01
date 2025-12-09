function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //make background black (done)
  background(0);

fill(mouseX/3, 0, mouseX/2);
 rect(50, 50,50);
 rect(100, 100,50);
 rect(150, 150,50);
 rect(200, 200,50);
  //control their colour with mouse (done)

  //give me a circle that expads with mouse movement
  // give text of your least favourite word in pink!


  fill(255, 0, 238)
  text("143, 0, 255");
  textStyle(BOLD);
  textAlign(CENTER, CENTER);


  
  
  let w = mouseX;
  fill(255, 0, 238);
  ellipse(200,200,w);

}
