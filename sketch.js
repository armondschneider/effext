function setup() {
  pixelDensity(1);
  let canvasWidth, canvasHeight;
  
  if (windowWidth < 768) { 
    canvasHeight = windowHeight * 0.8; 
  } else {
    canvasWidth = windowWidth / 3;
    canvasHeight = canvasWidth * (4 / 3);
  }

  canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
  canvas.parent('canvas-holder');

  noStroke();

  cam = createCapture(VIDEO);
  cam.size(canvasWidth, canvasHeight);
  cam.hide();
}

function windowResized() {
  let canvasWidth, canvasHeight;

  if (windowWidth < 768) {
    canvasWidth = windowWidth * 0.9;
    canvasHeight = windowHeight * 0.8;
  } else {
    canvasWidth = windowWidth / 3;
    canvasHeight = canvasWidth * (4 / 3);
  }

  resizeCanvas(canvasWidth, canvasHeight);
  cam.size(canvasWidth, canvasHeight);

  cam.hide(); 
}