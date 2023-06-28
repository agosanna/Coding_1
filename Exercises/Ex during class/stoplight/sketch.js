function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    textAlign(CENTER, CENTER);
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '1');
  }
  
  function draw() {
    background(	173, 216, 230);

    //traffic light box
    fill(50)
    rectMode(CENTER);    
    rect(2*windowWidth/3, windowHeight - 180, 10, 320);
    rect(2*windowWidth/3, windowHeight/2 - 50, 60, 150);
    rectMode(CORNER);


    //the car
    fill(0, 250, 0);
	rect(mouseX, windowHeight - 100, 110, 50, 20);
	fill(50);
	ellipse(mouseX, windowHeight - 50, 40, 40);
	ellipse(mouseX + 110, windowHeight - 50, 40, 40);

    //ground
    fill(50);
    rect(0, windowHeight - 30, windowWidth, 50);

    //traffic light
    if(mouseX < windowWidth/3){
        fill(255, 0, 0);
    } else {
        fill(50);
    }
    circle(2*windowWidth/3, windowHeight/2 - 100, 30);

    if(mouseX < 2*windowWidth/3 - 100 && mouseX > windowWidth/3){
        fill(255,255,0);
    } else {
        fill(50);
    }
    circle(2*windowWidth/3, windowHeight/2 - 50, 30);

    if(mouseX > 2*windowWidth/3 - 100){
        fill(0,255,0);
    } else {
        fill(50);
    }
    
    circle(2*windowWidth/3, windowHeight/2, 30);

    

    

    


    
  }