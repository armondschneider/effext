let theShader;
let cam;
let canvas;

function preload() {
  theShader = loadShader('webcam.vert', 'webcam.frag');
}

function setup() {
  pixelDensity(1);
  let canvasSize = calculateCanvasSize();
  canvas = createCanvas(canvasSize.width, canvasSize.height, WEBGL);
  canvas.parent('canvas-holder');

  noStroke();

  cam = createCapture(VIDEO, function() {
    console.log('Webcam loaded');
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
    background(0);
  }
}

function windowResized() {
  let canvasSize = calculateCanvasSize();
  resizeCanvas(canvasSize.width, canvasSize.height);
  cam.size(canvas.width, canvas.height);
}

function calculateCanvasSize() {
  let w = windowWidth, h = windowHeight;
  if ('ontouchstart' in window || w < 430) {
    return { width: w * 0.9, height: h * 0.7 };
  } else {
    let size = min(w, 800);
    return { width: size / 2, height: size / 2 * (4 / 3) };
  }
}

function print(message) {
  let p = createP(message);
  p.style('color', 'white');
  document.body.appendChild(p.elt);
}
