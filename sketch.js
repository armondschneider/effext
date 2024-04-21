let theShader;
let cam;
let canvas;

function preload() {
  theShader = loadShader('webcam.vert', 'webcam.frag');
}

function setup() {
  pixelDensity(1);
  const canvasWidth = min(windowWidth, 640); // Limit the size to 640px or less
  const canvasHeight = canvasWidth * (4 / 3); // Maintain a 4:3 aspect ratio

  canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
  canvas.parent('canvas-holder');

  noStroke();

  cam = createCapture(VIDEO);
  cam.size(canvasWidth, canvasHeight);
  cam.hide();
}

function draw() {
  shader(theShader);
  theShader.setUniform('tex0', cam);
  rect(0, 0, width, height);
}

function windowResized() {
  const canvasWidth = min(windowWidth, 640);
  const canvasHeight = canvasWidth * (3 / 4);
  resizeCanvas(canvasWidth, canvasHeight);
  cam.size(canvasWidth, canvasHeight);
}
