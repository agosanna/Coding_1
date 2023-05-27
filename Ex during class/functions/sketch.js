function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  grid(10, 30, 30)
  
}


function grid(numX, numY, size) {

    for(j = 0; j < numY; j++){
        for(i = 0; i < numX; i++){
            frameRate(0)
            fill(random(255), random(255), random(255))
            rect(i * size, j * size, size)
        }
    }
}
