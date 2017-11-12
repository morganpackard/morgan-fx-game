function setup() {
 createCanvas(200, 2000);
}

let phase = 0;


function draw() {
  phase += 0.0215;

  const xy = {
    y: 90 + (Math.sin(phase) + 1) * 250,
    x: 90
  };

  const distance = Math.sqrt( Math.pow(xy.x - mouseX, 2) + Math.pow(xy.y -  mouseY, 2)  );
  if(distance < 45){
    
    fill(0, 0, 255);
  }else{
    fill(255, 255, 255); 
  }
    
  ellipse(xy.x,  xy.y, 90, 90);
}
