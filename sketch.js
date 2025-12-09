function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //make background black (done)
  background(0, 20);
  noStroke();

  fill(mouseX / 3, 0, mouseX / 2);
  rect(150, 600, 50);
  rect(400, 450, 50);
  rect(300, 300, 50);
  rect(200, 700, 50);

  for (let i = 0; i < 10; i++) {
    rect(random(windowWidth), random(windowHeight), random(200), random(200));
  }

  //give me a circle that expads with mouse movement
  // give text of your least favourite word in pink!
  let w = mouseX;
  let size = 1000 * tan(radians(frameCount));

  ellipse(windowWidth / 2, windowHeight / 2, size);

  textSize(22);
  fill("pink");

  text("143, 0, 255", 20, 300);
  text(sin(radians(frameCount)), 20, 400);
}
