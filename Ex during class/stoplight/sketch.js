let car;

function setup() {
    car = {
        g: 250
    };

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

    //ground
    fill(50)
    rect(0, windowHeight - 30, windowWidth, 50)


    //the car
    fill(0, car.g, 0);
	rect(mouseX, windowHeight - 100, 110, 50, 20);
	fill(50);
	ellipse(mouseX, windowHeight - 50, 40, 40);
	ellipse(mouseX + 110, windowHeight - 50, 40, 40);

    //traffic light box

    //traffic light
    if(mouseX < windowWidth/3){
        fill(255, 0, 0);
    } else {
        fill(50);
    }
    circle(windowWidth/2 + 200, windowHeight/2 - 100, 30);

    if(mouseX < 2*windowWidth/3 && mouseX > windowWidth/3){
        fill(255,255,0);
    } else {
        fill(50);
    }
    circle(windowWidth/2 + 200, windowHeight/2 - 50, 30);

    if(mouseX > 2*windowWidth/3){
        fill(0,255,0);
    } else {
        fill(50);
    }
    
    circle(windowWidth/2 + 200, windowHeight/2, 30);

    

    

    


    
  }