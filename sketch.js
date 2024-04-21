let theShader;
let cam;
let canvas;

function preload() {
  theShader = loadShader('webcam.vert', 'webcam.frag', shaderLoaded, shaderError);
}

function setup() {
  pixelDensity(1);
  let canvasSize = calculateCanvasSize();
  canvas = createCanvas(canvasSize.width, canvasSize.height, WEBGL);
  canvas.parent('canvas-holder');

  noStroke();

  cam = createCapture(VIDEO, function(stream) {
    console.log('Webcam video stream started');
  }, function(error) {
    console.error('Webcam video stream failed with error:', error);
  });
  cam.size(canvas.width, canvas.height);
  cam.hide();
}

function draw() {
  if (cam.loadedmetadata) {
    shader(theShader);
    theShader.setUniform('tex0', cam);
    rect(0, 0, width, height);
  } else {
    background(255);
    console.log('Waiting for webcam data...');
  }
}

function windowResized() {
  let canvasSize = calculateCanvasSize();
  resizeCanvas(canvasSize.width, canvasSize.height);
  cam.size(canvas.width, canvas.height);
  cam.hide();
}

function calculateCanvasSize() {
  if (windowWidth < 768) {
    return { width: windowWidth * 0.9, height: windowHeight * 0.75 };
  } else {
    return { width: windowWidth / 2, height: windowHeight / 2 };
  }
}

function shaderLoaded() {
  console.log('Shader loaded successfully');
}

function shaderError(err) {
  console.error('Shader failed to load with error:', err);
}
