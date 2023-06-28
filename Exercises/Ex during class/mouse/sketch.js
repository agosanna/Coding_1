function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    textAlign(CENTER, CENTER);
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '1');
  }
  
  function draw() {
    background(0);
    if (mouseX < windowWidth/3){
      fill(255, mouseX/10 + mouseY/5, mouseX/10 + mouseY/5);
    } else if (mouseX < 2*windowWidth/3 && mouseX > windowWidth/3) {
      fill(mouseX/10 + mouseY/5, 255, mouseX/10 + mouseY/5);
    } else {
      fill(mouseX/10 + mouseY/5, mouseX/10 + mouseY/5, 255);
    }
    
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(100, 100, 100);
    console.log(mouseX);

    
  }