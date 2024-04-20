// a shader variable
let theShader;
let cam;

function preload(){
  // load the shader
  theShader = loadShader('webcam.vert', 'webcam.frag');
}

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  
  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);
  
  cam.hide();
}

function draw() {
  shader(theShader);
  
  theShader.setUniform('tex0', cam);

  rect(0,0,width,height);
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
