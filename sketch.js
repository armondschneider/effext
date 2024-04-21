function setup() {
    pixelDensity(1);
    // Use windowWidth for full width on mobile, maintain a portrait aspect ratio
    let canvasWidth = windowWidth;
    let canvasHeight = windowHeight;
    
    // Ensure the canvas is not too large on desktop
    if (windowWidth >= 768) {
      canvasWidth = windowWidth / 3;
      canvasHeight = windowHeight / 3 * (4 / 3); // Adjust this ratio to make it longer vertically
    }
  
    canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
    canvas.parent('canvas-holder');
  
    noStroke();
  
    cam = createCapture(VIDEO);
    cam.size(width, height);
    cam.hide();
  }
  
  function windowResized() {
    let canvasWidth = windowWidth;
    let canvasHeight = windowHeight;
    
    if (windowWidth >= 768) {
      canvasWidth = windowWidth / 3;
      canvasHeight = windowHeight / 3 * (4 / 3);
    }
  
    resizeCanvas(canvasWidth, canvasHeight);
    cam.size(canvasWidth, canvasHeight);
  }
  