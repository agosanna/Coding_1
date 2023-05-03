let bgColor = 0;
let lColor = 255;
let mode = true;

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function keyPressed() {
  if (bgColor === 0 && mode) {
    bgColor = 255;
    lColor = 0;
    mode = false;
  } else {
    bgColor = 0;
    lColor = 255;
    mode = true;
  }
}

function draw() {
  background(bgColor);
  stroke(lColor);
  strokeWeight(2);
  for(let i = 0; i < Infinity; i++) {
    let lineX = 50 + i*40;
      for(let j = 0; j < Infinity; j++) {
          push();
          let lineY = 50 + j*40;
          translate(lineX, lineY);
           
          mode ? rotate(atan2(mouseY - (lineY), mouseX - (lineX))) : rotate(radians(i*mouseX+j*mouseY)/(10));
          line(0, 0, 20, 0); 
          pop();
        
          
          if (lineY >= windowHeight - 50){
            break;
          }
      }
      if (lineX >= windowWidth - 50){
        break;
      }
  }
}

