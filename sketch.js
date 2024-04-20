// a shader variable
let theShader;
let cam;

function preload(){
  // load the shader
  theShader = loadShader('webcam.vert', 'webcam.frag');
}

function setup() {
  pixelDensity(1);
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  
  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);
  
  cam.hide();
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);
  
  // passing cam as a texture
  theShader.setUniform('tex0', cam);

  // rect gives us some geometry on the screen
  rect(0,0,width,height);
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
