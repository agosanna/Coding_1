  function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
  }

    function draw() {
      
      background(256);
      
      stroke(1)
      
      textSize(32);
      text('Nuraghe', 200, 70);
      textAlign(CENTER, CENTER);
      
      //structure
      
      fill(220)
      rect(200, 260, 250, 180); 
      
      //row1
      
      for (let l = 0; l < 10; l++)
      {
      for (let i = 0; i < 10; i++)
      {
        rect(87 + i*25 , 345 - l*20 , 25, 10)
      }
      }
      
      //row2
      
      for (let l = 0; l < 10; l++)
      {
      for (let i = 0; i < 9; i++)
      {
        rect(97 + i*25 , 335 - l*20 , 25, 10)
      }
      }
      
     
      for (let i = 0; i < 8; i++)
      {
        rect(110 +i*25, 145, 25, 10)
      }
      
      for (let i = 0; i < 7; i++)
      {
        rect(123 +i*25, 135, 25, 10)
      }
      
      for (let i = 0; i < 6; i++)
      {
        rect(135 +i*25, 125, 25, 10)
      }
      
      
      
      fill(0);
      rect(200, 310, 45, 80, 10, 10, 0, 0);
      
    }
  
  
  
  

